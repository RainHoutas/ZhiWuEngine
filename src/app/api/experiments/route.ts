import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        // 如果你未来要做分页，可在这里读取 ?page=1&size=10
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

        return NextResponse.json({ experiments }, { status: 200 });
    } catch (error) {
        console.error("获取实验列表失败：", error);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
