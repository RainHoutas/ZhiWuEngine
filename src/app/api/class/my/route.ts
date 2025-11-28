import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

export const dynamic = 'force-dynamic'; // 🔴 强制不缓存 API 响应

export async function GET(req: Request) {
    // 1. 鉴权
    const payload = await authGuard(req);
    if (payload instanceof NextResponse) return payload;

    const userId = Number(payload.id); // 确保转为数字
    const role = payload.role;

    console.log(`正在查询班级列表... 用户ID: ${userId}, 角色: ${role}`);

    try {
        let data = [];

        // ==========================
        // 场景 A: 如果我是学生
        // ==========================
        if (role === "student") {
            // 1. 查询中间表 ClassMember
            // 逻辑：找出所有 userId 等于我的记录，同时把 class 的详细信息带出来
            const memberships = await prisma.classMember.findMany({
                where: {
                    userId: userId,
                },
                include: {
                    class: {
                        include: {
                            teacher: {
                                select: { fullName: true } // 只取老师名字
                            }
                        }
                    }
                },
                orderBy: {
                    joinedAt: 'desc' // 按加入时间倒序
                }
            });

            // 2. 数据扁平化处理 (Flatten)
            // 前端需要: { id, name, teacherName, joinedAt }
            data = memberships.map((m) => ({
                id: m.class.id,
                name: m.class.name,
                teacherName: m.class.teacher.fullName,
                inviteCode: m.class.inviteCode,
                joinedAt: m.joinedAt, // 使用加入时间
            }));
        }

            // ==========================
            // 场景 B: 如果我是老师
        // ==========================
        else if (role === "teacher") {
            const classes = await prisma.class.findMany({
                where: {
                    teacherId: userId,
                },
                include: {
                    _count: {
                        select: { members: true }
                    }
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            data = classes; // 老师端的数据结构略有不同，前端要注意区分
        }

        console.log(`查询成功，找到 ${data.length} 个班级`);
        return NextResponse.json(data);

    } catch (e) {
        console.error("获取班级列表失败:", e);
        return NextResponse.json({ message: "获取失败" }, { status: 500 });
    }
}