import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";
// 1. 引入生成的 Enum 类型 (根据你的 schema output 路径)
// 如果你的 IDE 提示找不到这个路径，请检查 node_modules 或生成的目录
import { Subject } from "@prisma/client";

export const dynamic = 'force-dynamic';

export async function GET(req: Request) {
    const payload = await authGuard(req);
    if (payload instanceof NextResponse) return payload;

    const { searchParams } = new URL(req.url);
    const subjectParam = searchParams.get("subject");

    try {
        // 2. 严谨的类型转换
        // 只有当参数存在，且不为 'all'，且在枚举范围内时，才添加筛选条件
        const isValidSubject = subjectParam && Object.values(Subject).includes(subjectParam as Subject);

        const whereCondition = (isValidSubject)
            ? { subject: subjectParam as Subject }
            : {};

        const experiments = await prisma.experiment.findMany({
            where: whereCondition,
            orderBy: { createdAt: 'desc' },
            select: {
                id: true,
                name: true,
                description: true,
                subject: true,
                coverImage: true,
                sceneAssetPath: true
            }
        });

        return NextResponse.json(experiments);
    } catch (e) {
        console.error("获取实验列表失败:", e);
        return NextResponse.json({ message: "获取失败" }, { status: 500 });
    }
}