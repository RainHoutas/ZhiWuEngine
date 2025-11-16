import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

export async function PUT(req: Request) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    try {
        const { email, fullName } = await req.json();

        if (!email && !fullName) {
            return NextResponse.json(
                { message: "无更新内容" },
                { status: 400 }
            );
        }

        // 检查 email 是否被其他用户使用
        if (email) {
            const exists = await prisma.user.findUnique({
                where: { email },
            });

            if (exists && exists.id !== decoded.id) {
                return NextResponse.json(
                    { message: "该邮箱已被使用" },
                    { status: 400 }
                );
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id: decoded.id },
            data: {
                email: email ?? undefined,
                fullName: fullName ?? undefined,
            },
        });

        return NextResponse.json({
            message: "更新成功",
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                fullName: updatedUser.fullName,
                role: updatedUser.role,
                createdAt: updatedUser.createdAt,
            },
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
