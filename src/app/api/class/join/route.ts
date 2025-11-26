import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard"; // 复用你刚修好的守卫

export async function POST(req: Request) {
    // 1. 鉴权
    const payload = await authGuard(req);
    if (payload instanceof NextResponse) return payload;

    try {
        const { inviteCode } = await req.json();

        if (!inviteCode) {
            return NextResponse.json({ message: "请输入邀请码" }, { status: 400 });
        }

        // 2. 查找班级
        const targetClass = await prisma.class.findUnique({
            where: { inviteCode },
        });

        if (!targetClass) {
            return NextResponse.json({ message: "无效的邀请码" }, { status: 404 });
        }

        // 3. 检查是否已加入
        const existingMember = await prisma.classMember.findUnique({
            where: {
                classId_userId: {
                    classId: targetClass.id,
                    userId: payload.id,
                },
            },
        });

        if (existingMember) {
            return NextResponse.json({ message: "你已经是该班级成员了" }, { status: 409 });
        }

        // 4. 加入班级
        await prisma.classMember.create({
            data: {
                classId: targetClass.id,
                userId: payload.id,
            },
        });

        return NextResponse.json({ message: "加入成功", classId: targetClass.id });

    } catch (e) {
        console.error(e);
        return NextResponse.json({ message: "加入失败" }, { status: 500 });
    }
}