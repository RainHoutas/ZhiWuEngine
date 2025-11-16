import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function authGuard(req: Request) {
    const auth = req.headers.get("authorization");

    if (!auth) {
        return NextResponse.json(
            { message: "缺少 Token" },
            { status: 401 }
        );
    }

    const token = auth.replace("Bearer ", "");
    const decoded = verifyToken(token);

    if (!decoded) {
        return NextResponse.json(
            { message: "无效或过期 Token" },
            { status: 401 }
        );
    }

    return decoded as { id: number; role: string };
}
