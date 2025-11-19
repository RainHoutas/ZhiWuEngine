import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { askAI } from "@/lib/ai";

// 定义 ActionLogEntry 类型
interface ActionLogEntry {
    action: string;
    time: string;
}

interface DecodedToken {
    id: number;
    role: "teacher" | "admin" | "student";
}

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ classId: string }> }
) {
    try {
        // 获取 classId
        const { classId } = await context.params;

        const auth = req.headers.get("authorization");
        const token = auth?.replace("Bearer ", "") ?? "";
        const decoded = verifyToken(token) as DecodedToken | null;

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        if (decoded.role !== "teacher" && decoded.role !== "admin") {
            return NextResponse.json(
                { error: "Only teacher/admin can view difficulty analysis" },
                { status: 403 }
            );
        }

        const classIdNum = Number(classId);

        if (Number.isNaN(classIdNum)) {
            return NextResponse.json(
                { error: "Invalid classId" },
                { status: 400 }
            );
        }

        // 1. 获取实验信息
        const experiment = await prisma.experiment.findUnique({
            where: { id: classIdNum },
            select: { id: true, name: true, subject: true },
        });

        if (!experiment) {
            return NextResponse.json({ error: "Experiment not found" }, { status: 404 });
        }

        // 2. 获取 AI 互动日志
        const aiLogs = await prisma.aIInteractionLog.findMany({
            where: { experimentId: classIdNum }, // 应该使用 classId 来查询
            select: {
                userQuery: true,
                aiResponse: true,
                createdAt: true,
                student: { select: { id: true, fullName: true } },
            },
        });

        // 3. 获取学生实验行为日志
        const logs = await prisma.studentExperimentLog.findMany({
            where: { experimentId: classIdNum },
            select: {
                actionsLog: true,
                student: { select: { id: true, fullName: true } },
            },
        });

        // 4. 行为错误统计（操作日志 action）
        const actionCount: Record<string, number> = {};

        logs.forEach((log) => {
            if (Array.isArray(log.actionsLog)) {
                // 将 actionsLog 转换为 ActionLogEntry[] 类型，确保类型安全
                const actions = log.actionsLog as unknown as ActionLogEntry[];

                actions.forEach((a) => {
                    const act = a.action;
                    actionCount[act] = (actionCount[act] ?? 0) + 1;
                });
            }
        });

        const topMistakeActions = Object.entries(actionCount)
            .map(([action, count]) => ({ action, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        // 5. AI 提问主题统计（分类 AI 提问）
        const topicCount: Record<string, number> = {};
        const topicCategories = [
            "操作类", "实验步骤类", "实验原理类",
            "现象解释类", "数据处理类", "仪器使用类",
            "安全与规范类", "概念性误解", "其他"
        ];

        for (const logItem of aiLogs) {
            const prompt = `
你是一名中学实验教学专家，请将下面的问题分类到以下主题之一：
${topicCategories.join(" / ")}

学生问题：
"${logItem.userQuery}"

仅输出一个主题名称。
      `.trim();

            const topic = await askAI(prompt);
            const cleanTopic = topicCategories.includes(topic.trim()) ? topic.trim() : "其他";

            topicCount[cleanTopic] = (topicCount[cleanTopic] ?? 0) + 1;
        }

        const aiTopics = Object.entries(topicCount)
            .map(([topic, count]) => ({ topic, count }))
            .sort((a, b) => b.count - a.count);

        // 6. 行为导致提问分析（行为触发 AI）
        const behaviorTriggerMap: Record<string, number> = {};

        aiLogs.forEach((ai) => {
            logs.forEach((expLog) => {
                if (Array.isArray(expLog.actionsLog)) {
                    const actions = expLog.actionsLog as unknown as ActionLogEntry[];
                    actions.forEach((action) => {
                        if (ai.userQuery.includes(action.action)) {
                            behaviorTriggerMap[action.action] =
                                (behaviorTriggerMap[action.action] ?? 0) + 1;
                        }
                    });
                }
            });
        });

        const behaviorTriggerAnalysis = Object.entries(behaviorTriggerMap)
            .map(([action, count]) => ({
                action,
                relatedQueries: count,
                sampleQuestion:
                    aiLogs.find((q) => q.userQuery.includes(action))?.userQuery ?? "",
            }))
            .sort((a, b) => b.relatedQueries - a.relatedQueries)
            .slice(0, 10);

        // 7. 自动生成教学总结和难点分析
        const summaryPrompt = `
你是一名中学实验教学专家，下面是某个实验的行为日志分析与AI提问主题，请为教师生成一份“实验难点分析与教学建议”。

【高频错误行为】
${JSON.stringify(topMistakeActions, null, 2)}

【AI提问主题统计】
${JSON.stringify(aiTopics, null, 2)}

【行为触发提问分析】
${JSON.stringify(behaviorTriggerAnalysis, null, 2)}

请生成：
1. 本实验的主要教学难点（列举3-5条）
2. 学生常见的错误行为与原因
3. 教师在课堂上应该加强的重点
4. 建议的实验教学策略（具体可执行）
      `;

        const aiSummary = await askAI(summaryPrompt);

        return NextResponse.json(
            {
                experiment,
                topMistakeActions,
                aiTopics,
                behaviorTriggerAnalysis,
                aiSummary
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("difficulty analysis error:", err);
        return NextResponse.json(
            { error: "Difficulty analysis failed" },
            { status: 500 }
        );
    }
}
