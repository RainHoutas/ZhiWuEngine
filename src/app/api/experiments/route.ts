import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const experiments = await prisma.experiment.findMany({
            orderBy: { id: "asc" },
            select: {
                id: true,
                name: true,
                subject: true,
                description: true,
                sceneAssetPath: true,
                version: true,
                createdAt: true,
            },
        });

        // 🔥 返回数组，不要包在对象里
        return NextResponse.json(experiments, { status: 200 });
    } catch (error) {
        console.error("获取实验列表失败：", error);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}

