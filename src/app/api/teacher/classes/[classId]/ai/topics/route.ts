import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { askAI } from "@/lib/ai";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

// 主题分类列表（可扩展）
const TOPIC_CATEGORIES = [
    "操作类",
    "实验步骤类",
    "实验原理类",
    "现象解释类",
    "数据处理类",
    "仪器使用类",
    "安全与规范类",
    "概念性误解",
    "其他"
];

export async function GET(
    req: Request,
    { params }: { params: { classId: string } }
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
                { error: "Only teacher/admin can view topic analysis" },
                { status: 403 }
            );
        }

        const classId = Number(params.classId);

        // 1. 获取班级成员
        const members = await prisma.classMember.findMany({
            where: { classId },
            select: { userId: true }
        });

        const studentIds = members.map((m) => m.userId);

        if (studentIds.length === 0) {
            return NextResponse.json({ topics: [], details: [] }, { status: 200 });
        }

        // 2. 获取所有 AI 提问
        const logs = await prisma.aIInteractionLog.findMany({
            where: { studentId: { in: studentIds } },
            select: {
                id: true,
                studentId: true,
                userQuery: true,
                experiment: {
                    select: { id: true, name: true }
                },
                student: {
                    select: { id: true, fullName: true }
                }
            }
        });

        const topicCount: Record<string, number> = {};
        const details: any[] = [];

        // 3. 使用 AI 为每条问题分类（重点）
        for (const log of logs) {
            const question = log.userQuery;

            const prompt = `
你是一名中学实验教学的教学专家。
请将下面的问题归类为以下主题类别之一，直接回复类别名称即可：

${TOPIC_CATEGORIES.join(" / ")}

学生问题：
"${question}"

请注意，必须只输出一个类别，不要输出解释。
      `.trim();

            const topic = await askAI(prompt);

            const cleanTopic =
                TOPIC_CATEGORIES.includes(topic.trim()) ? topic.trim() : "其他";

            topicCount[cleanTopic] = (topicCount[cleanTopic] ?? 0) + 1;

            details.push({
                topic: cleanTopic,
                question: log.userQuery,
                student: log.student.fullName,
                experiment: log.experiment?.name ?? "未知实验"
            });
        }

        // 转数组排序
        const topics = Object.entries(topicCount)
            .map(([topic, count]) => ({ topic, count }))
            .sort((a, b) => b.count - a.count);

        return NextResponse.json(
            {
                classId,
                topics,
                details
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("AI topic analysis error:", err);
        return NextResponse.json(
            { error: "Topic analysis failed" },
            { status: 500 }
        );
    }
}
