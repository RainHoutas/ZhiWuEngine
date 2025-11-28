import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import { SignJWT } from "jose"; // 🔥 必须用 jose，配合 Middleware

// 确保这里的密钥和 Middleware、AuthGuard 里的一模一样
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "default_secret_key_please_change"
);

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        // 1. 查找用户
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json({ message: "用户不存在" }, { status: 400 });
        }

        // 2. 验证密码
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ message: "密码错误" }, { status: 400 });
        }

        // 3. 生成 Token (使用 jose 库)
        // 之前可能用的是 jsonwebtoken，但在 Next.js App Router 中 jose 更稳定
        const token = await new SignJWT({
            id: user.id,
            role: user.role,
            email: user.email
        })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('7d') // 7天过期
            .sign(JWT_SECRET);

        // 4. 设置 Cookie 并返回
        const response = NextResponse.json({
            message: "登录成功",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role,
            },
        });

        response.cookies.set("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7天秒数
        });

        return response;

    } catch (e) {
        // 🔥 关键：在控制台打印具体错误，方便你调试
        console.error("Login Route Error:", e);
        return NextResponse.json(
            { message: "服务器内部错误，请检查控制台日志" },
            { status: 500 }
        );
    }
}