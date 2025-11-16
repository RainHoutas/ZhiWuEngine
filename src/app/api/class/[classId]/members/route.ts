import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

export async function GET(
    req: Request,
    { params }: { params: { classId: string } }
) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    const classId = parseInt(params.classId);
    if (isNaN(classId)) {
        return NextResponse.json(
            { message: "classId 无效" },
            { status: 400 }
        );
    }

    try {
        const cls = await prisma.class.findUnique({
            where: { id: classId },
            include: {
                teacher: true,
                members: {
                    include: {
                        user: true,
                    },
                },
            },
        });

        if (!cls) {
            return NextResponse.json(
                { message: "班级不存在" },
                { status: 404 }
            );
        }

        // 教师判断
        const isTeacher = cls.teacherId === decoded.id;

        // 学生是否在班级中
        const isStudentInClass = cls.members.some(
            (m) => m.userId === decoded.id
        );

        if (!isTeacher && !isStudentInClass) {
            return NextResponse.json(
                { message: "无权查看此班级" },
                { status: 403 }
            );
        }

        // 整理成员数据
        const members = [
            // 教师信息
            {
                id: cls.teacher.id,
                fullName: cls.teacher.fullName,
                email: cls.teacher.email,
                role: cls.teacher.role,
                joinedAt: null, // 教师不是通过 ClassMember
            },
            // 学生信息
            ...cls.members.map((m) => ({
                id: m.user.id,
                fullName: m.user.fullName,
                email: m.user.email,
                role: m.user.role,
                joinedAt: m.createdAt, // 来自 ClassMember.createdAt
            })),
        ];

        return NextResponse.json({
            class: {
                id: cls.id,
                name: cls.name,
                joinCode: cls.joinCode,
            },
            members,
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
