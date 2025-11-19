import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

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

        const classId = Number(await context.params.then((p) => p.classId));
        if (Number.isNaN(classId)) {
            return NextResponse.json({ error: "Invalid classId" }, { status: 400 });
        }

        // 先查班级，确认存在 & 权限
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

        // 只有该班级教师或管理员可以查看
        if (
            decoded.role !== "admin" &&
            !(decoded.role === "teacher" && decoded.id === classInfo.teacherId)
        ) {
            return NextResponse.json({ error: "Forbidden" }, { status: 403 });
        }

        // 查班级成员
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
                    logs: [],
                },
                { status: 200 }
            );
        }

        // 查这些学生的实验记录
        const logs = await prisma.studentExperimentLog.findMany({
            where: {
                studentId: { in: studentIds },
            },
            orderBy: {
                startTime: "desc",
            },
            select: {
                id: true,
                studentId: true,
                experimentId: true,
                startTime: true,
                endTime: true,
                completionStatus: true,
                recordedData: true,
                // actionsLog 不一定前端都要，如果太大可以先不返回
                actionsLog: true,
                student: {
                    select: {
                        id: true,
                        fullName: true,
                    },
                },
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
                class: {
                    id: classInfo.id,
                    name: classInfo.name,
                },
                students: members.map((m) => m.user),
                logs,
            },
            { status: 200 }
        );
    } catch (err) {
        console.error("Fetch class experiments failed:", err);
        return NextResponse.json(
            { error: "Failed to fetch class experiments" },
            { status: 500 }
        );
    }
}
