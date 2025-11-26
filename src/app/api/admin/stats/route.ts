import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// 🛡️ 辅助函数：验证是否为管理员
async function checkAdmin() {
    const headersList = await headers();
    // 从 cookie 或 header 获取 token (这里简化为 header authorization 示例，具体看你中间件怎么传)
    // 假设你的中间件已经验证了 token 有效性，这里我们再次确认角色
    // 实际项目中，建议封装一个 getServerSession 或类似 utility

    // 这里为了演示 API 逻辑，暂时略过复杂的 Token 解析，
    // 假设调用者必须通过 Middleware 的拦截，且我们能在后续完善 session 获取
    // *关键*：在真实上线前，这里必须校验当前请求者 user.role === 'ADMIN'
    return true;
}

export async function GET(req: Request) {
    try {
        // 1. 鉴权 (伪代码，由 Middleware 拦截非 Admin)
        // if (!isAdmin) return NextResponse.json({ message: "无权访问" }, { status: 403 });

        // 2. 并行查询数据库
        const [userCount, classCount, logCount] = await Promise.all([
            prisma.user.count(),
            prisma.class.count(),
            prisma.experimentLog.count(),
        ]);

        // 3. 获取角色分布
        const students = await prisma.user.count({ where: { role: "student" } });
        const teachers = await prisma.user.count({ where: { role: "teacher" } });

        return NextResponse.json({
            totalUsers: userCount,
            totalClasses: classCount,
            totalExperiments: logCount,
            distribution: {
                students,
                teachers,
                admins: userCount - students - teachers
            }
        });
    } catch (e) {
        return NextResponse.json({ message: "统计获取失败" }, { status: 500 });
    }
}