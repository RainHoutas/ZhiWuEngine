import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

export async function GET(req: Request) {
    // 1. 调用守卫
    const responseOrPayload = await authGuard(req);

    // 2. 检查返回值是否是 NextResponse (即 Error 401)
    if (responseOrPayload instanceof NextResponse) {
        return responseOrPayload;
    }

    // 3. 此时 payload 肯定是解码后的数据
    const payload = responseOrPayload;

    try {
        const user = await prisma.user.findUnique({
            where: { id: Number(payload.id) }, // 确保 ID 转为数字
            select: {
                id: true,
                email: true,
                fullName: true,
                role: true,
                createdAt: true,
            }
        });

        if (!user) {
            return NextResponse.json({ message: "用户不存在" }, { status: 404 });
        }

        return NextResponse.json(user);
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ message: "服务器错误" }, { status: 500 });
    }
}