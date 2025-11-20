export const runtime = "nodejs";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// 定义 decoded 的类型，描述从 JWT 中解码的内容
interface DecodedToken {
    id: number;
    role: "teacher" | "admin" | "student";
    email: string;
}

export const config = {
    matcher: [
        "/login",
        "/dashboard/:path*",
    ],
};

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    // ================================
    // 1. 没有 token：只禁止访问 dashboard
    // ================================
    if (!token) {
        console.log("❌ No token");

        // 未登录访问 dashboard → 跳 login
        if (pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        // 访问 /login 或其他公开页面（比如 /api 公共接口）→ 放行
        return NextResponse.next();
    }

    // ================================
    // 2. 解析 Token
    // ================================
    let decoded: DecodedToken | null = null;

    try {
        decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    } catch (e) {
        console.log("========================================");
        console.log("❌ Token 验证失败！");
        console.log("🔹 原始 Token：", token);
        console.log("🔹 JWT_SECRET：", JWT_SECRET);
        console.log("🔹 解析错误：", e);
        console.log("========================================");

        const res = NextResponse.redirect(new URL("/login", req.url));
        res.cookies.delete("token");
        return res;
    }

    const role = decoded.role; // student | teacher | admin

    // ================================
    // 3. 已登录用户访问 /login → 自动跳到自己的 dashboard
    // ================================
    if (pathname === "/login") {
        console.log("🔁 Logged user visiting /login → redirect to dashboard");
        return NextResponse.redirect(
            new URL(`/dashboard/${role}`, req.url)
        );
    }

    // ================================
    // 4. 其他情况（已登录访问 /dashboard/...）→ 放行
    // ================================
    return NextResponse.next();
}
