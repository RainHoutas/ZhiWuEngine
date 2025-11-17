import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

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
                { error: "Only teachers/admin can view AI summary" },
                { status: 403 }
            );
        }

        const classId = Number(params.classId);

        // 1. 查班级信息
        const classInfo = await prisma.class.findUnique({
            where: { id: classId },
            select: { id: true, name: true, teacherId: true },
        });

        if (!classInfo) {
            return NextResponse.json({ error: "Class not found" }, { status: 404 });
        }

        // 教师权限判断
        if (
            decoded.role === "teacher" &&
            decoded.id !== classInfo.teacherId
        ) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // 2. 查班级学生列表
        const members = await prisma.classMember.findMany({
            where: { classId },
            select: {
                userId: true,
                user: { select: { id: true, fullName: true } },
            },
        });

        const studentIds = members.map((m) => m.userId);

        if (studentIds.length === 0) {
            return NextResponse.json(
                {
                    class: classInfo,
                    summary: {},
                },
                { status: 200 }
            );
        }

        // 3. 查全班所有 AI 记录
        const logs = await prisma.aIInteractionLog.findMany({
            where: { studentId: { in: studentIds } },
            select: {
                studentId: true,
                experimentId: true,
                userQuery: true,
            },
        });

        // 4. 统计数据

        // 总提问次数
        const totalQueries = logs.length;

        // 每个学生的提问次数
        const studentUsageMap: Record<number, number> = {};
        logs.forEach((log) => {
            studentUsageMap[log.studentId] =
                (studentUsageMap[log.studentId] ?? 0) + 1;
        });

        // 每个实验的提问次数
        const experimentUsageMap: Record<number, number> = {};
        logs.forEach((log) => {
            if (log.experimentId) {
                experimentUsageMap[log.experimentId] =
                    (experimentUsageMap[log.experimentId] ?? 0) + 1;
            }
        });

        // 组装学生使用情况
        const studentUsage = members.map((m) => ({
            id: m.user.id,
            name: m.user.fullName,
            count: studentUsageMap[m.userId] ?? 0,
        }));

        // 实验提问情况
        const experiments = await prisma.experiment.findMany({
            where: { id: { in: Object.keys(experimentUsageMap).map(Number) } },
            select: { id: true, name: true, subject: true },
        });

        const experimentUsage = experiments.map((exp) => ({
            id: exp.id,
            name: exp.name,
            subject: exp.subject,
            count: experimentUsageMap[exp.id] ?? 0,
        }));

        return NextResponse.json(
            {
                class: classInfo,
                summary: {
                    totalQueries,
                    studentUsage,
                    experimentUsage,
                },
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("AI class summary error:", err);
        return NextResponse.json(
            { error: "AI summary failed" },
            { status: 500 }
        );
    }
}
