import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

interface TokenPayload {
    id: number;
    role: string;
    email: string;
}

export async function DELETE(
    req: NextRequest,
    { params }: { params: { classId: string } }
) {
    try {
        const { classId } = params;

        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return NextResponse.json(
                { error: "未提供 Token" },
                { status: 401 }
            );
        }

        const token = authHeader.replace("Bearer ", "");
        const decoded = verifyToken(token) as TokenPayload;

        if (decoded.role !== "teacher" && decoded.role !== "admin") {
            return NextResponse.json(
                { error: "无权限执行删除操作" },
                { status: 403 }
            );
        }

        const targetClass = await prisma.class.findUnique({
            where: { id: Number(classId) },
        });

        if (!targetClass) {
            return NextResponse.json(
                { error: "班级不存在" },
                { status: 404 }
            );
        }

        if (decoded.role === "teacher" && targetClass.teacherId !== decoded.id) {
            return NextResponse.json(
                { error: "只能删除自己创建的班级" },
                { status: 403 }
            );
        }

        await prisma.class.delete({
            where: { id: Number(classId) },
        });

        return NextResponse.json({ message: "班级删除成功" });
    } catch (err) {
        console.error(err);
        return NextResponse.json(
            { error: "服务器错误" },
            { status: 500 }
        );
    }
}
