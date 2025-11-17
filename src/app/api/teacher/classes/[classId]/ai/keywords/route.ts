import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

const stopWords = [
    "的", "了", "是", "我", "你", "怎么", "什么",
    "为什么", "是否", "需要", "可以", "如何", "会",
    "一下", "一下子", "啊", "呀", "嘛", "呢"
];

export async function GET(
    req: Request,
    { params }: { params: { classId: string } }
) {
    try {
        const auth = req.headers.get("authorization");
        if (!auth) {
            return NextResponse.json({ error: "Missing token" }, { status: 401 });
        }

        const token = auth.replace("Bearer ", "");
        const decoded = verifyToken(token) as DecodedToken | null;

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        if (decoded.role !== "teacher" && decoded.role !== "admin") {
            return NextResponse.json(
                { error: "Only teachers/admin can view AI keywords" },
                { status: 403 }
            );
        }

        const classId = Number(params.classId);

        // 1. 查班级学生
        const members = await prisma.classMember.findMany({
            where: { classId },
            select: { userId: true },
        });

        const studentIds = members.map((m) => m.userId);

        if (!studentIds.length) {
            return NextResponse.json({ keywords: [] }, { status: 200 });
        }

        // 2. 查全班所有 userQuery
        const aiLogs = await prisma.aIInteractionLog.findMany({
            where: { studentId: { in: studentIds } },
            select: { userQuery: true },
        });

        // 3. 关键词统计（简单中文词切分）
        const keywordCount: Record<string, number> = {};

        aiLogs.forEach((log) => {
            const text = log.userQuery ?? "";

            // 简单基于中文字符的分词（不引入复杂 NLP）
            for (let i = 0; i < text.length - 1; i++) {
                const word = text[i] + text[i + 1]; // 二字词最适合教学领域分析

                // 忽略停用词
                if (stopWords.includes(text[i]) || stopWords.includes(word)) continue;

                // 必须是中文字符
                if (!/[\u4e00-\u9fa5]/.test(word)) continue;

                keywordCount[word] = (keywordCount[word] ?? 0) + 1;
            }
        });

        // 转为数组并排序
        const sorted = Object.entries(keywordCount)
            .map(([word, count]) => ({ word, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 30); // 前 30 个词

        return NextResponse.json(
            {
                classId,
                keywords: sorted,
            },
            { status: 200 }
        );

    } catch (err) {
        console.error("AI keywords error:", err);
        return NextResponse.json(
            { error: "Keyword analysis failed" },
            { status: 500 }
        );
    }
}
