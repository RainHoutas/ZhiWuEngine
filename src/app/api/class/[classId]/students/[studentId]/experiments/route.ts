import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function GET(
    req: Request,
    { params }: { params: { classId: string; studentId: string } }
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
        const studentId = Number(params.studentId);

        if (Number.isNaN(classId) || Number.isNaN(studentId)) {
            return NextResponse.json(
                { error: "Invalid classId or studentId" },
                { status: 400 }
            );
        }

        // 查班级并验证权限
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

        if (
            decoded.role !== "admin" &&
            !(decoded.role === "teacher" && decoded.id === classInfo.teacherId)
        ) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // 查该学生是否属于该班级
        const isMember = await prisma.classMember.findFirst({
            where: {
                classId,
                userId: studentId,
            },
        });

        if (!isMember) {
            return NextResponse.json(
                { error: "Student not in this class" },
                { status: 404 }
            );
        }

        // 查该学生所有实验日志
        const logs = await prisma.studentExperimentLog.findMany({
            where: { studentId },
            orderBy: { startTime: "desc" },
            select: {
                id: true,
                startTime: true,
                endTime: true,
                completionStatus: true,
                recordedData: true,
                actionsLog: true,
                experiment: {
                    select: {
                        id: true,
                        name: true,
                        subject: true,
                    },
                },
            },
        });

        return NextResponse.json(
            {
                studentId,
                classId,
                logs,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Teacher fetch student experiments failed:", err);
        return NextResponse.json(
            { error: "Failed to fetch student experiments" },
            { status: 500 }
        );
    }
}
