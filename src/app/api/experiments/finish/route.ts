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
        const { logId, completionStatus, actionsLog, recordedData } = body;

        if (!logId) {
            return NextResponse.json(
                { message: "缺少 logId" },
                { status: 400 }
            );
        }

        // 检查实验记录是否存在且属于该学生
        const log = await prisma.studentExperimentLog.findUnique({
            where: { id: logId },
        });

        if (!log) {
            return NextResponse.json(
                { message: "实验日志不存在" },
                { status: 404 }
            );
        }

        if (log.studentId !== decoded.id) {
            return NextResponse.json(
                { message: "你不能修改其他学生的实验日志" },
                { status: 403 }
            );
        }

        // 更新实验日志
        const updated = await prisma.studentExperimentLog.update({
            where: { id: logId },
            data: {
                endTime: new Date(),
                completionStatus: completionStatus || "已完成",
                actionsLog: actionsLog || null,
                recordedData: recordedData || null,
            },
        });

        return NextResponse.json(
            {
                message: "实验完成记录已更新",
                log: updated,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("实验完成失败：", error);
        return NextResponse.json(
            { message: "服务器错误" },
            { status: 500 }
        );
    }
}
