import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

export async function POST(req: Request) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    // 学生和教师都可以加入班级
    // （一般教师不需要加入，但可以保留此能力）

    try {
        const { joinCode } = await req.json();

        if (!joinCode) {
            return NextResponse.json(
                { message: "缺少邀请码" },
                { status: 400 }
            );
        }

        // 查找班级
        const cls = await prisma.class.findUnique({
            where: { joinCode },
        });

        if (!cls) {
            return NextResponse.json(
                { message: "邀请码无效或班级不存在" },
                { status: 404 }
            );
        }

        // 检查是否已经加入
        const exists = await prisma.classMember.findFirst({
            where: {
                classId: cls.id,
                userId: decoded.id,
            },
        });

        if (exists) {
            return NextResponse.json(
                { message: "你已经加入了这个班级" },
                { status: 400 }
            );
        }

        // 加入班级
        const member = await prisma.classMember.create({
            data: {
                classId: cls.id,
                userId: decoded.id,
            },
        });

        return NextResponse.json({
            message: "加入班级成功",
            class: {
                id: cls.id,
                name: cls.name,
                joinCode: cls.joinCode,
                teacherId: cls.teacherId,
            },
            memberId: member.id,
        });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
