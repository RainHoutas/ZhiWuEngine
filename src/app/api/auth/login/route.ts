import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return NextResponse.json(
                { message: "邮箱或密码错误" },
                { status: 400 }
            );
        }

        const ok = await bcrypt.compare(password, user.password);

        if (!ok) {
            return NextResponse.json(
                { message: "邮箱或密码错误" },
                { status: 400 }
            );
        }

        const token = jwt.sign(
            { id: user.id, role: user.role },
            JWT_SECRET,
            { expiresIn: "7d" }
        );

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
            maxAge: 60 * 60 * 24 * 7, // 7天
        });

        return response;
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
