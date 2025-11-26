import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

// 辅助函数：生成6位随机邀请码 (大写字母 + 数字)
function generateInviteCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // 去掉了容易混淆的 I,1,O,0
    let result = '';
    for (let i = 0; i < 6; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

export async function POST(req: Request) {
    const payload = await authGuard(req);
    if (payload instanceof NextResponse) return payload;

    try {
        // 1. 验证角色
        if (payload.role !== 'teacher' && payload.role !== 'admin') {
            return NextResponse.json({ message: "只有教师可以创建班级" }, { status: 403 });
        }

        const { name } = await req.json();
        if (!name) {
            return NextResponse.json({ message: "请输入班级名称" }, { status: 400 });
        }

        // 2. 生成唯一的邀请码 (尝试最多5次，防止碰撞)
        let inviteCode = generateInviteCode();
        let retries = 5;

        while (retries > 0) {
            const existing = await prisma.class.findUnique({ where: { inviteCode } });
            if (!existing) break; // 没重复，可用
            inviteCode = generateInviteCode(); // 重复了，生成新的
            retries--;
        }

        if (retries === 0) {
            return NextResponse.json({ message: "系统繁忙，生成邀请码失败" }, { status: 500 });
        }

        // 3. 创建班级
        const newClass = await prisma.class.create({
            data: {
                name,
                inviteCode,
                teacherId: payload.id,
            },
        });

        return NextResponse.json({
            message: "班级创建成功",
            class: newClass
        });

    } catch (e) {
        console.error("Create Class Error:", e);
        return NextResponse.json({ message: "创建失败" }, { status: 500 });
    }
}