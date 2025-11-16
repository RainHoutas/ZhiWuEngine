import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";
import { requireRole } from "@/lib/roleGuard";

export async function GET(req: Request) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    // 检查是否为教师
    const check = requireRole(decoded, ["teacher"]);
    if (check) return check;

    try {
        const classes = await prisma.class.findMany({
            where: {
                teacherId: decoded.id,
            },
            include: {
                members: true, // 我们用这个来计算人数
            },
            orderBy: {
                createdAt: "desc",
            },
        });

        const result = classes.map((cls) => ({
            id: cls.id,
            name: cls.name,
            createdAt: cls.createdAt,
            memberCount: cls.members.length,
        }));

        return NextResponse.json(result);
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
