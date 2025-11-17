import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { askAI } from "@/lib/ai";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "teacher" | "admin" | "student";
}

export async function GET(
    req: Request,
    { params }: { params: { experimentId: string } }
) {
    try {
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

        const experimentId = Number(params.experimentId);

        // 1. 读实验信息
        const experiment = await prisma.experiment.findUnique({
            where: { id: experimentId },
            select: { id: true, name: true, subject: true }
        });

        if (!experiment) {
            return NextResponse.json({ error: "Experiment not found" }, { status: 404 });
        }

        // 2. 所有 AI 互动（AI 啰嗦点）
        const aiLogs = await prisma.aIInteractionLog.findMany({
            where: { experimentId },
            select: {
                userQuery: true,
                aiResponse: true,
                createdAt: true,
                student: { select: { id: true, fullName: true } }
            }
        });

        // 3. 所有实验行为日志
        const logs = await prisma.studentExperimentLog.findMany({
            where: { experimentId },
            select: {
                actionsLog: true,
                student: { select: { id: true, fullName: true } }
            }
        });

        // 4. 行为错误统计（简单提取行为 action）
        const actionCount: Record<string, number> = {};

        logs.forEach((log) => {
            if (Array.isArray(log.actionsLog)) {
                (log.actionsLog as any[]).forEach((a) => {
                    const act = a.action;
                    actionCount[act] = (actionCount[act] ?? 0) + 1;
                });
            }
        });

        const topMistakeActions = Object.entries(actionCount)
            .map(([action, count]) => ({ action, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10);

        // 5. AI 提问主题统计（调用 AI 分类）
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

            const cleanTopic =
                topicCategories.includes(topic.trim()) ? topic.trim() : "其他";

            topicCount[cleanTopic] = (topicCount[cleanTopic] ?? 0) + 1;
        }

        const aiTopics = Object.entries(topicCount)
            .map(([topic, count]) => ({ topic, count }))
            .sort((a, b) => b.count - a.count);

        // 6. 分析行为导致提问（行为触发 AI 交互的“因果”）
        const behaviorTriggerMap: Record<string, number> = {};

        aiLogs.forEach((ai) => {
            logs.forEach((expLog) => {
                if (Array.isArray(expLog.actionsLog)) {
                    (expLog.actionsLog as any[]).forEach((action) => {
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
                    aiLogs.find((q) => q.userQuery.includes(action))?.userQuery ?? ""
            }))
            .sort((a, b) => b.relatedQueries - a.relatedQueries)
            .slice(0, 10);

        // 7. 让 AI 自动总结“教学建议与难点分析”
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
