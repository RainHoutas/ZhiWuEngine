import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { authGuard } from "@/lib/authGuard";

export async function PUT(req: Request) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    try {
        const { oldPassword, newPassword } = await req.json();

        if (!oldPassword || !newPassword) {
            return NextResponse.json(
                { message: "缺少参数" },
                { status: 400 }
            );
        }

        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
        });

        if (!user) {
            return NextResponse.json(
                { message: "用户不存在" },
                { status: 404 }
            );
        }

        // 验证旧密码
        const ok = await bcrypt.compare(oldPassword, user.password);
        if (!ok) {
            return NextResponse.json(
                { message: "旧密码不正确" },
                { status: 400 }
            );
        }

        // 生成新密码
        const hashed = await bcrypt.hash(newPassword, 10);

        await prisma.user.update({
            where: { id: decoded.id },
            data: { password: hashed },
        });

        return NextResponse.json({
            message: "密码修改成功",
        });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
