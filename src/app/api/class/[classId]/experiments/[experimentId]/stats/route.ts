import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function GET(
    req: Request,
    { params }: { params: { classId: string; experimentId: string } }
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

        const classId = Number(params.classId);
        const experimentId = Number(params.experimentId);

        if (Number.isNaN(classId) || Number.isNaN(experimentId)) {
            return NextResponse.json(
                { error: "Invalid classId or experimentId" },
                { status: 400 }
            );
        }

        // 查班级信息
        const classInfo = await prisma.class.findUnique({
            where: { id: classId },
            select: {
                id: true,
                name: true,
                teacherId: true,
            },
        });

        if (!classInfo) {
            return NextResponse.json({ error: "Class not found" }, { status: 404 });
        }

        // 权限：必须是该班教师或管理员
        if (
            decoded.role !== "admin" &&
            !(decoded.role === "teacher" && decoded.id === classInfo.teacherId)
        ) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // 查班级学生
        const members = await prisma.classMember.findMany({
            where: { classId },
            select: { userId: true },
        });

        const studentIds = members.map((m) => m.userId);
        const totalStudents = studentIds.length;

        if (totalStudents === 0) {
            return NextResponse.json(
                {
                    class: classInfo,
                    stats: {
                        totalStudents: 0,
                        completed: 0,
                        completionRate: 0,
                        avgScore: 0,
                        avgTimeMinutes: 0,
                        avgErrors: 0,
                        logs: [],
                    },
                },
                { status: 200 }
            );
        }

        // 查询该班所有学生在指定实验的记录
        const logs = await prisma.studentExperimentLog.findMany({
            where: {
                experimentId,
                studentId: { in: studentIds },
            },
            select: {
                id: true,
                studentId: true,
                startTime: true,
                endTime: true,
                completionStatus: true,
                recordedData: true,
                actionsLog: true,
                student: { select: { id: true, fullName: true } },
            },
        });

        const completedLogs = logs.filter((l) => l.endTime !== null);

        // 计算平均成绩（recordedData.score）
        const scores = completedLogs
            .map((l) => {
                const data = l.recordedData as unknown as { score?: number };
                return data?.score ?? null;
            })
            .filter((s): s is number => s !== null);

        const avgScore =
            scores.length === 0
                ? 0
                : Math.round((scores.reduce((a, b) => a + b, 0) / scores.length) * 10) /
                10;

        // 计算平均用时分钟
        const times = completedLogs
            .map((l) => {
                if (!l.startTime || !l.endTime) return null;
                const diffMs =
                    new Date(l.endTime).getTime() - new Date(l.startTime).getTime();
                return diffMs / 60000;
            })
            .filter((v): v is number => v !== null);

        const avgTimeMinutes =
            times.length === 0
                ? 0
                : Math.round(
                (times.reduce((a, b) => a + b, 0) / times.length) * 10
            ) / 10;

        // 计算平均错误（actionsLog 中 action === "Error"）
        const errorCounts = logs.map((l) => {
            if (!Array.isArray(l.actionsLog)) return 0;
            return (l.actionsLog as unknown as any[]).filter(
                (a) => a.action === "error"
            ).length;
        });

        const avgErrors =
            errorCounts.length === 0
                ? 0
                : Math.round(
                (errorCounts.reduce((a, b) => a + b, 0) / errorCounts.length) * 10
            ) / 10;

        return NextResponse.json(
            {
                class: classInfo,
                stats: {
                    totalStudents,
                    completed: completedLogs.length,
                    completionRate:
                        totalStudents === 0
                            ? 0
                            : Math.round((completedLogs.length / totalStudents) * 100),

                    avgScore,
                    avgTimeMinutes,
                    avgErrors,

                    logs,
                },
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Experiment stats error:", err);
        return NextResponse.json(
            { error: "Failed to fetch experiment statistics" },
            { status: 500 }
        );
    }
}
