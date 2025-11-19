import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET!;

// 定义 decoded 的类型，描述从 JWT 中解码的内容
interface DecodedToken {
    id: number;
    role: "teacher" | "admin" | "student";
    email: string; // 如果有 email 字段可以加上
}

/**
 * 匹配需要拦截的路由
 */
export const config = {
    matcher: [
        "/",                 // 根路径
    ],
};

/**
 * 中间件逻辑
 */
export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const pathname = req.nextUrl.pathname;

    // ================================
    // 1. 未登录用户访问受保护页面 → 跳转 login
    // ================================
    if (!token) {
        console.log("❌ No token");

        // 未登录访问 dashboard → 跳 login
        if (pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        // 未登录访问 "/" → 跳 login
        if (pathname === "/") {
            return NextResponse.redirect(new URL("/login", req.url));
        }

        return NextResponse.next();
    }

    // ================================
    // 2. 解析 Token
    // ================================
    let decoded: DecodedToken | null = null;

    try {
        decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    } catch (e) {
        console.log("⚠ Invalid token, deleting and redirecting to login");

        const res = NextResponse.redirect(new URL("/login", req.url));
        res.cookies.delete("token");
        return res;
    }

    const role = decoded.role; // student | teacher | admin

    // ================================
    // 3. 已登录用户访问 login → 自动跳转
    // ================================
    if (pathname === "/login") {
        console.log("🔁 Logged user visiting login → redirect to dashboard");
        return NextResponse.redirect(
            new URL(`/dashboard/${role}`, req.url)
        );
    }

    // ================================
    // 4. 已登录访问 "/" → 自动进入专属主页
    // ================================
    if (pathname === "/") {
        console.log("🏠 Logged user → redirect to role dashboard");
        return NextResponse.redirect(
            new URL(`/dashboard/${role}`, req.url)
        );
    }

    // ================================
    // 5. 正常继续请求
    // ================================
    return NextResponse.next();
}
