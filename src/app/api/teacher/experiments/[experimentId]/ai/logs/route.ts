import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function GET(
    req: Request,
    { params }: { params: { experimentId: string } }
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

        // 必须是教师或管理员
        if (decoded.role !== "teacher" && decoded.role !== "admin") {
            return NextResponse.json(
                { error: "Only teachers/admin can view experiment AI logs" },
                { status: 403 }
            );
        }

        const experimentId = Number(params.experimentId);
        if (Number.isNaN(experimentId)) {
            return NextResponse.json(
                { error: "Invalid experimentId" },
                { status: 400 }
            );
        }

        // 1. 查实验信息
        const experiment = await prisma.experiment.findUnique({
            where: { id: experimentId },
            select: {
                id: true,
                name: true,
                subject: true,
                description: true,
            },
        });

        if (!experiment) {
            return NextResponse.json(
                { error: "Experiment not found" },
                { status: 404 }
            );
        }

        // 2. 查询与该实验有关的所有 AI 互动日志
        const aiLogs = await prisma.aIInteractionLog.findMany({
            where: { experimentId },
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                studentId: true,
                userQuery: true,
                aiResponse: true,
                createdAt: true,
                student: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                    },
                },
            },
        });

        return NextResponse.json(
            {
                experiment,
                aiLogs,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Teacher experiment AI logs error:", err);
        return NextResponse.json(
            { error: "Failed to fetch experiment AI logs" },
            { status: 500 }
        );
    }
}
