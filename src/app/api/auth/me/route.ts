import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authGuard } from "@/lib/authGuard";

export async function GET(req: Request) {
    const decoded = await authGuard(req);
    if (decoded instanceof NextResponse) return decoded;

    const user = await prisma.user.findUnique({
        where: { id: decoded.id },
    });

    return NextResponse.json({
        id: user?.id,
        email: user?.email,
        fullName: user?.fullName,
        role: user?.role,
        createdAt: user?.createdAt,
    });
}
