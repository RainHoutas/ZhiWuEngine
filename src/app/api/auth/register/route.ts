import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import * as bcrypt from "bcrypt";

export async function POST(req: Request) {
    try {
        // 1. 获取数据
        const { email, password, fullName, role } = await req.json();

        // 2. 基础验证
        if (!email || !password || !fullName) {
            return NextResponse.json(
                { message: "请填写所有必填项" },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return NextResponse.json(
                { message: "密码长度不能少于6位" },
                { status: 400 }
            );
        }

        // 3. 安全过滤：禁止注册管理员
        // 假设前端传过来的是 'student' 或 'teacher'
        // 注意：这里强制转为小写以匹配 Prisma Enum (根据你之前的schema定义)
        const safeRole = role === 'teacher' ? 'teacher' : 'student';

        // 4. 检查邮箱是否存在
        const existing = await prisma.user.findUnique({
            where: { email },
        });

        if (existing) {
            return NextResponse.json(
                { message: "该邮箱已被注册" },
                { status: 400 }
            );
        }

        // 5. 密码加密
        const hashedPassword = await bcrypt.hash(password, 10);

        // 6. 创建用户
        const user = await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                fullName,
                role: safeRole,
            },
        });

        // 7. 构建响应对象
        const response = NextResponse.json({
            message: "注册成功",
            user: {
                id: user.id,
                email: user.email,
                fullName: user.fullName,
                role: user.role
            },
        });

        // 🛑 核心修改：强制删除 Token Cookie
        // 这样前端跳转到登录页时，状态就是干净的“未登录”状态
        response.cookies.delete("token");

        return response;

    } catch (e) {
        console.error("Registration Error:", e);
        return NextResponse.json(
            { message: "服务器内部错误" },
            { status: 500 }
        );
    }
}