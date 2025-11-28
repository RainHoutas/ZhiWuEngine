// 🛑 核心修复：改成从标准包导入，不要再用 "@/lib/generated/prisma"
import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;