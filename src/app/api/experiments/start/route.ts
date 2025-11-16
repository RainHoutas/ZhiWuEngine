import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";

interface TokenPayload {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function POST(req: NextRequest) {
    try {
        const authHeader = req.headers.get("authorization");
        if (!authHeader) {
            return NextResponse.json({ message: "未提供 Token" }, { status: 401 });
        }

        const token = authHeader.replace("Bearer ", "");
        const decoded = verifyToken(token) as TokenPayload | null;
        if (!decoded) {
            return NextResponse.json({ message: "无效 Token" }, { status: 401 });
        }

        const body = await req.json();
        const { experimentId } = body;

        if (!experimentId) {
            return NextResponse.json(
                { message: "缺少 experimentId" },
                { status: 400 }
            );
        }

        // 检查实验是否存在
        const experiment = await prisma.experiment.findUnique({
            where: { id: experimentId },
        });

        if (!experiment) {
            return NextResponse.json(
                { message: "实验不存在" },
                { status: 404 }
            );
        }

        // 创建实验开始记录
        const log = await prisma.studentExperimentLog.create({
            data: {
                studentId: decoded.id,
                experimentId: experimentId,
                startTime: new Date(),
                completionStatus: "进行中",
            },
        });

        return NextResponse.json(
            {
                message: "实验开始记录已创建",
                logId: log.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("实验开始失败：", error);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
