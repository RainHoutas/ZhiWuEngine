import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { prisma } from "@/lib/prisma";
import { askAI } from "@/lib/ai";

interface DecodedToken {
    id: number;
    role: string;
}

export async function POST(req: Request) {
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

        const body = await req.json();

        const { experimentId, sessionId, action, actionsLog, recordedData } = body;

        if (!experimentId || !action) {
            return NextResponse.json(
                { error: "experimentId 与 action 必填" },
                { status: 400 }
            );
        }

        // —— 1. 构建 AI Prompt ——
        const prompt = `
你是一名中学实验辅助教学AI。
请根据学生的行为日志与最新操作判断学生是否正确进行实验步骤，并给出教学建议。

当前实验 ID: ${experimentId}

【本次学生动作】
${JSON.stringify(action, null, 2)}

【历史行为日志】
${JSON.stringify(actionsLog ?? [], null, 2)}

【实验数据】
${JSON.stringify(recordedData ?? {}, null, 2)}

请你输出：
1. 对当前操作的评价（对 / 错、风险）
2. 教学性提示（下一步应该做什么）
3. 如有错误，说明原因
4. 如可能，提供实验理论解释（简单版）
    `.trim();

        // —— 2. 调用 AI 引擎 ——
        const aiResponse = await askAI(prompt);

        // —— 3. 记录 AIInteractionLog（用于教师学情分析） ——
        await prisma.aIInteractionLog.create({
            data: {
                studentId: decoded.id,
                experimentId,
                sessionId: sessionId ?? null,
                userQuery: action.action ?? "行为事件",
                aiResponse,
                contextSnapshot: actionsLog ?? null,
            },
        });

        return NextResponse.json(
            {
                guidance: aiResponse,
            },
            { status: 200 }
        );

    } catch (err) {
        console.error("AI assist error:", err);
        return NextResponse.json(
            { error: "AI 行为分析失败" },
            { status: 500 }
        );
    }
}
