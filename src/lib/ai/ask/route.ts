import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";
import { askAI } from "@/lib/ai";
import { prisma } from "@/lib/prisma";

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

        const { experimentId, sessionId, message } = body;

        if (!message || typeof message !== "string") {
            return NextResponse.json({ error: "Message is required" }, { status: 400 });
        }

        // —— 1. 调用统一 AI 引擎 ——
        const aiResponse = await askAI(message);

        // —— 2. 写入 AIInteractionLog（你的 schema 已有） ——
        await prisma.aIInteractionLog.create({
            data: {
                studentId: decoded.id,
                experimentId: experimentId ?? null,
                sessionId: sessionId ?? null,
                userQuery: message,
                aiResponse,
                contextSnapshot: null, // 暂时为空，后面行为分析会用
            },
        });

        return NextResponse.json(
            {
                reply: aiResponse,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("AI ask error:", err);
        return NextResponse.json(
            { error: "AI request failed" },
            { status: 500 }
        );
    }
}
