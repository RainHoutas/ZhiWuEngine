import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

interface DecodedToken {
    id: number;
    role: string;
}

export async function GET(
    req: Request,
    context: { params: Promise<{ logId: string }> }
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

        const logId = Number((await context.params.then((p) => p.logId)));

        const log = await prisma.studentExperimentLog.findUnique({
            where: { id: logId },
            select: {
                id: true,
                startTime: true,
                endTime: true,
                completionStatus: true,
                recordedData: true,
                actionsLog: true,
                student: {
                    select: {
                        id: true,
                        fullName: true,
                        role: true,
                    },
                },
                experiment: {
                    select: {
                        id: true,
                        name: true,
                        subject: true,
                        description: true,
                    },
                },
            },
        });

        if (!log) {
            return NextResponse.json(
                { error: "Experiment log not found" },
                { status: 404 }
            );
        }

        // 权限：学生只能看自己的记录，教师可看班级，管理员全看
        if (decoded.role === "student" && log.student.id !== decoded.id) {
            return NextResponse.json(
                { error: "Access denied" },
                { status: 403 }
            );
        }

        return NextResponse.json({ log }, { status: 200 });

    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "Failed to fetch experiment log" },
            { status: 500 }
        );
    }
}
