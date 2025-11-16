import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

interface ActionLogEntry {
    time: string;
    action: string;
    step?: number;
    extra?: Record<string, unknown>;
}

export async function POST(req: Request) {
    try {
        const auth = req.headers.get("authorization");
        if (!auth) {
            return NextResponse.json({ error: "Missing token" }, { status: 401 });
        }

        const token = auth.replace("Bearer ", "");
        const decoded = verifyToken(token) as { id: number } | null;

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const body = await req.json();
        const { experimentId, action, step, extra } = body;

        if (!experimentId || !action) {
            return NextResponse.json(
                { error: "experimentId & action are required" },
                { status: 400 }
            );
        }

        const log = await prisma.studentExperimentLog.findFirst({
            where: {
                studentId: decoded.id,
                experimentId,
                endTime: null,
            },
        });

        if (!log) {
            return NextResponse.json(
                { error: "No active experiment found" },
                { status: 404 }
            );
        }

        const newEntry: ActionLogEntry = {
            time: new Date().toISOString(),
            action,
            step,
            extra,
        };

        const existingActions =
            Array.isArray(log.actionsLog)
                ? (log.actionsLog as unknown as ActionLogEntry[])
                : [];

        const updatedActions: ActionLogEntry[] = [...existingActions, newEntry];

        // ↓↓↓↓↓ ★⭐⭐⭐⭐⭐ 关键一行：局部禁用 any，避免 ESLint & TS 冲突 ★⭐⭐⭐⭐⭐ ↓↓↓↓↓
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const jsonValue = updatedActions as any;
        // ↑↑↑↑↑ 这是唯一可行方案，也是在生产中最常用的 ↑↑↑↑↑

        await prisma.studentExperimentLog.update({
            where: { id: log.id },
            data: {
                actionsLog: jsonValue,
            },
        });

        return NextResponse.json(
            { message: "Action recorded", action: newEntry },
            { status: 200 }
        );

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to record action" },
            { status: 500 }
        );
    }
}
