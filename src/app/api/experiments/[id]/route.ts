import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    try {
        const experimentId = Number((await context.params.then((p) => p.id)));

        // 检查实验ID是否有效
        if (isNaN(experimentId)) {
            return NextResponse.json(
                { message: "无效的实验 ID" },
                { status: 400 }
            );
        }

        // 查找实验信息
        const experiment = await prisma.experiment.findUnique({
            where: { id: experimentId },
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

        // 如果实验不存在
        if (!experiment) {
            return NextResponse.json(
                { message: "实验不存在" },
                { status: 404 }
            );
        }

        // 返回实验详情
        return NextResponse.json({ experiment }, { status: 200 });
    } catch (error) {
        console.error("获取实验详情失败:", error);
        return NextResponse.json(
            { message: "服务器错误，无法获取实验详情" },
            { status: 500 }
        );
    }
}
