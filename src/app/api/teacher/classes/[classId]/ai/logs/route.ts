import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { NextResponse } from "next/server";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function GET(
    req: Request,
    context: { params: Promise<{ classId: string }> }
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

        // 只能老师/管理员看
        if (decoded.role !== "teacher" && decoded.role !== "admin") {
            return NextResponse.json(
                { error: "Only teachers/admin can view class AI logs" },
                { status: 403 }
            );
        }

        const classId = Number(await context.params.then((p) => p.classId));
        if (Number.isNaN(classId)) {
            return NextResponse.json({ error: "Invalid classId" }, { status: 400 });
        }

        // 1. 查班级信息
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

        // 2. 权限校验：教师必须是这个班的班主任，管理员不限
        if (
            decoded.role === "teacher" &&
            decoded.id !== classInfo.teacherId
        ) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // 3. 查班级成员
        const members = await prisma.classMember.findMany({
            where: { classId },
            select: {
                userId: true,
                user: {
                    select: {
                        id: true,
                        fullName: true,
                        email: true,
                    },
                },
            },
        });

        const studentIds = members.map((m) => m.userId);
        if (studentIds.length === 0) {
            return NextResponse.json(
                {
                    class: classInfo,
                    students: [],
                    aiLogs: [],
                },
                { status: 200 }
            );
        }

        // 4. 查这些学生的 AI 互动日志
        const aiLogs = await prisma.aIInteractionLog.findMany({
            where: {
                studentId: { in: studentIds },
            },
            orderBy: {
                createdAt: "desc",
            },
            select: {
                id: true,
                studentId: true,
                experimentId: true,
                userQuery: true,
                aiResponse: true,
                createdAt: true,
                experiment: {
                    select: {
                        id: true,
                        name: true,
                        subject: true,
                    },
                },
                student: {
                    select: {
                        id: true,
                        fullName: true,
                    },
                },
            },
        });

        return NextResponse.json(
            {
                class: {
                    id: classInfo.id,
                    name: classInfo.name,
                },
                students: members.map((m) => m.user),
                aiLogs,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Teacher class AI logs error:", err);
        return NextResponse.json(
            { error: "Failed to fetch class AI logs" },
            { status: 500 }
        );
    }
}
