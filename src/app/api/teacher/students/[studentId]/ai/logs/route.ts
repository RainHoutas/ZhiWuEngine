import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function GET(
    req: Request,
    { params }: { params: { studentId: string } }
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

        // 权限：必须是教师或管理员
        if (decoded.role !== "teacher" && decoded.role !== "admin") {
            return NextResponse.json(
                { error: "Only teachers/admin can view AI logs" },
                { status: 403 }
            );
        }

        const studentId = Number(params.studentId);
        if (Number.isNaN(studentId)) {
            return NextResponse.json({ error: "Invalid studentId" }, { status: 400 });
        }

        // 查询学生
        const student = await prisma.user.findUnique({
            where: { id: studentId },
            select: { id: true, fullName: true, role: true },
        });

        if (!student) {
            return NextResponse.json({ error: "Student not found" }, { status: 404 });
        }

        // 查询学生的所有 AI 互动记录
        const aiLogs = await prisma.aIInteractionLog.findMany({
            where: { studentId },
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                userQuery: true,
                aiResponse: true,
                experimentId: true,
                createdAt: true,
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
                student,
                aiLogs,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Teacher fetch AI logs error:", err);
        return NextResponse.json(
            { error: "Failed to fetch AI logs" },
            { status: 500 }
        );
    }
}
