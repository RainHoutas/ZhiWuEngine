import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

interface TokenPayload {
    id: number;
    role: "student" | "teacher" | "admin";
    email?: string;
}

export async function DELETE(
    req: NextRequest,
    context: { params: Promise<{ classId: string; userId: string }> }
) {
    try {
        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return NextResponse.json({ message: "未提供 Token" }, { status: 401 });
        }

        const token = authHeader.replace("Bearer ", "");
        const decoded = verifyToken(token) as TokenPayload | null;
        if (!decoded) {
            return NextResponse.json({ message: "Token 无效或已过期" }, { status: 401 });
        }

        const classId = Number((await context.params.then((p) => p.classId)));
        const userId = Number((await context.params.then((p) => p.userId)));
        if (Number.isNaN(classId) || Number.isNaN(userId)) {
            return NextResponse.json({ message: "参数无效" }, { status: 400 });
        }

        // 查找班级和教师信息
        const cls = await prisma.class.findUnique({
            where: { id: classId },
            select: { id: true, teacherId: true },
        });
        if (!cls) {
            return NextResponse.json({ message: "班级不存在" }, { status: 404 });
        }

        // 权限判断：必须是该班级的创建教师或 admin
        const isTeacher = decoded.role === "teacher" && decoded.id === cls.teacherId;
        const isAdmin = decoded.role === "admin";
        if (!isTeacher && !isAdmin) {
            return NextResponse.json({ message: "权限不足" }, { status: 403 });
        }

        // 不允许删除教师本人（如果想允许可另外实现）
        if (userId === cls.teacherId) {
            return NextResponse.json({ message: "不能删除班级创建者" }, { status: 400 });
        }

        // 检查该成员是否存在
        const member = await prisma.classMember.findFirst({
            where: { classId: classId, userId: userId },
        });

        if (!member) {
            return NextResponse.json({ message: "该成员不在班级中" }, { status: 404 });
        }

        // 删除 classMember 记录
        await prisma.classMember.delete({
            where: { id: member.id },
        });

        return NextResponse.json({ message: "成员已移除" });
    } catch (err) {
        console.error("delete member error:", err);
        return NextResponse.json({ message: "服务器错误" }, { status: 500 });
    }
}
