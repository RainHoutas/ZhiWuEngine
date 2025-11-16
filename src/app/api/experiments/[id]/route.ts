import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const experimentId = Number(params.id);
        if (Number.isNaN(experimentId)) {
            return NextResponse.json(
                { message: "无效的实验 ID" },
                { status: 400 }
            );
        }

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

        if (!experiment) {
            return NextResponse.json(
                { message: "实验不存在" },
                { status: 404 }
            );
        }

        return NextResponse.json({ experiment }, { status: 200 });
    } catch (error) {
        console.error("获取实验详情失败：", error);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
