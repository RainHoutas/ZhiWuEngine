import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        const { email, password, fullName, role } = await req.json();

        if (!email || !password || !fullName) {
            return NextResponse.json(
                { message: "缺少必要字段" },
                { status: 400 }
            );
        }

        const existing = await prisma.user.findUnique({
            where: { email },
        });

        if (existing) {
            return NextResponse.json(
                { message: "该邮箱已注册" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
                role: role ?? "student",
            },
        });

        return NextResponse.json({
            message: "注册成功",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
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
