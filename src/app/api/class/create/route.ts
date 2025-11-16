import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";
import { requireRole } from "@/lib/roleGuard";

// 生成邀请码工具函数
function generateJoinCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase(); // 6 位邀请码
}

export async function POST(req: Request) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    // 限制教师
    const check = requireRole(decoded, ["teacher"]);
    if (check) return check;

    try {
        const { name } = await req.json();
        if (!name) {
            return NextResponse.json(
                { message: "班级名称不能为空" },
                { status: 400 }
            );
        }

        let joinCode = generateJoinCode();

        // 防止邀请码重复（概率极低，但保险）
        while (
            await prisma.class.findUnique({
                where: { joinCode },
            })
            ) {
            joinCode = generateJoinCode();
        }

        const cls = await prisma.class.create({
            data: {
                name,
                teacherId: decoded.id,
                joinCode,
            },
        });

        return NextResponse.json({
            message: "班级创建成功",
            class: cls,
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
