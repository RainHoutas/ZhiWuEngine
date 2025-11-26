import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// 获取用户列表
export async function GET(req: Request) {
    try {
        const { searchParams } = new URL(req.url);
        const query = searchParams.get("query") || ""; // 搜索关键词

        const users = await prisma.user.findMany({
            where: {
                OR: [
                    { email: { contains: query } },
                    { fullName: { contains: query } }
                ]
            },
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 50 // 限制返回数量，防止卡死
        });

        return NextResponse.json(users);
    } catch (e) {
        return NextResponse.json({ message: "获取用户列表失败" }, { status: 500 });
    }
}

// 修改用户角色 (例如提拔老师)
export async function PATCH(req: Request) {
    try {
        const { userId, role } = await req.json();

        if (!['student', 'teacher', 'admin'].includes(role)) {
            return NextResponse.json({ message: "无效的角色类型" }, { status: 400 });
        }

        const updatedUser = await prisma.user.update({
            where: { id: userId },
            data: { role },
        });

        return NextResponse.json({
            message: "角色修改成功",
            user: { id: updatedUser.id, role: updatedUser.role }
        });
    } catch (e) {
        return NextResponse.json({ message: "操作失败，用户可能不存在" }, { status: 500 });
    }
}