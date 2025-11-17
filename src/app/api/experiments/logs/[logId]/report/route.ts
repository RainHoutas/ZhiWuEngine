import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { verifyToken } from "@/lib/jwt";
import { askAI } from "@/lib/ai";

interface DecodedToken {
    id: number;
    role: "student" | "teacher" | "admin";
}

export async function POST(
    req: Request,
    { params }: { params: { logId: string } }
) {
    try {
        const auth = req.headers.get("authorization");
        if (!auth) {
            return NextResponse.json({ error: "Missing token" }, { status: 401 });
        }

        const token = auth.replace("Bearer ", "");
        const decoded = verifyToken(token) as DecodedToken | null;

        if (!decoded) {
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

        const logId = Number(params.logId);
        if (Number.isNaN(logId)) {
            return NextResponse.json({ error: "Invalid logId" }, { status: 400 });
        }

        // 1. 查实验记录 + 学生 + 实验信息
        const log = await prisma.studentExperimentLog.findUnique({
            where: { id: logId },
            select: {
                id: true,
                startTime: true,
                endTime: true,
                completionStatus: true,
                recordedData: true,
                actionsLog: true,
                student: {
                    select: {
                        id: true,
                        fullName: true,
                        role: true,
                    },
                },
                experiment: {
                    select: {
                        id: true,
                        name: true,
                        subject: true,
                        description: true,
                    },
                },
            },
        });

        if (!log) {
            return NextResponse.json(
                { error: "Experiment log not found" },
                { status: 404 }
            );
        }

        // 2. 权限判断：学生只能看自己；教师 / 管理员可以看
        if (
            decoded.role === "student" &&
            log.student.id !== decoded.id
        ) {
            return NextResponse.json(
                { error: "Access denied" },
                { status: 403 }
            );
        }

        // 3. 构造 AI Prompt
        const { experiment, student } = log;

        const prompt = `
你是一名中学实验教学老师，请根据下面提供的“实验信息、学生信息、实验过程行为日志和实验记录数据”，
为这名学生生成一份结构清晰的「实验报告」。

【实验基本信息】
- 实验名称：${experiment.name}
- 学科：${experiment.subject}
- 实验简介：${experiment.description ?? "（无详细描述）"}

【学生信息】
- 姓名：${student.fullName}
- 身份：${student.role}

【实验时间与状态】
- 开始时间：${log.startTime?.toISOString?.() ?? log.startTime}
- 结束时间：${log.endTime ? log.endTime.toISOString?.() ?? log.endTime : "未结束 / 未记录"}
- 完成状态：${log.completionStatus}

【实验记录数据（recordedData）】
${JSON.stringify(log.recordedData ?? {}, null, 2)}

【学生实验过程行为日志（actionsLog）】
${JSON.stringify(log.actionsLog ?? [], null, 2)}

请用适合“中学生阅读”的语言，生成一份规范的实验报告，报告中至少包含以下部分：
1. 实验目的
2. 实验原理（用通俗语言解释即可）
3. 实验步骤回顾（可以结合学生的实际操作过程）
4. 实验现象与数据整理（结合 recordedData）
5. 结果分析（如有错误操作或偏差，请指出原因）
6. 实验结论
7. 学生在本次实验中的优点与需要改进的地方（基于行为日志）
8. 安全与规范性建议（如果有不规范操作，也请委婉指出）

请直接输出报告正文，不要输出“AI 分析”之类的提示语。
    `.trim();

        // 4. 调用 AI 生成报告
        const reportText = await askAI(prompt);

        // 5. 写一条 AIInteractionLog，类型当作“报告生成”
        await prisma.aIInteractionLog.create({
            data: {
                studentId: student.id,
                experimentId: experiment.id,
                sessionId: `report-${log.id}`,
                userQuery: "生成本次实验的详细实验报告",
                aiResponse: reportText,
                contextSnapshot: null,
            },
        });

        return NextResponse.json(
            { report: reportText },
            { status: 200 }
        );
    } catch (err) {
        console.error("Experiment report error:", err);
        return NextResponse.json(
            { error: "Failed to generate experiment report" },
            { status: 500 }
        );
    }
}
