import { NextResponse } from "next/server";

export function requireRole(decoded: { role: string }, roles: string[]) {
    if (!roles.includes(decoded.role)) {
        return NextResponse.json(
            { message: "权限不足" },
            { status: 403 }
        );
    }
    return null;
}
