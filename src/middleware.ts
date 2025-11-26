import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose"; // ✅ 使用 jose 替代 jsonwebtoken

// 1. 转换 Secret 为 Uint8Array (jose 要求)
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "default_secret_key_please_change"
);

export async function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    // ================================
    // 1. 没有 Token 的情况
    // ================================
    if (!token) {
        // 如果访问的是受保护的 dashboard 区域，踢回登录页
        if (pathname.startsWith("/dashboard")) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
        // 其他公开页面 (如 /login, /register, /api/public) 放行
        return NextResponse.next();
    }

    // ================================
    // 2. 验证 Token (使用 jose)
    // ================================
    let userRole = "";

    try {
        const { payload } = await jwtVerify(token, JWT_SECRET);
        userRole = payload.role as string; // 'student' | 'teacher' | 'admin'
    } catch (e) {
        // Token 过期或无效，强制登出
        console.error("❌ Middleware Token Verify Failed:", e);
        const res = NextResponse.redirect(new URL("/login", req.url));
        res.cookies.delete("token");
        return res;
    }

    // ================================
    // 3. 已登录用户访问 /login 或 /register -> 自动跳 Dashboard
    // ================================
    if (pathname === "/login") {
        return NextResponse.redirect(new URL(`/dashboard/${userRole}`, req.url));
    }

    // ================================
    // 4. 核心：角色越权保护 (Role Guard)
    // ================================

    // 🛑 场景 A: 学生想进老师或管理员页面
    if (userRole === "student") {
        if (pathname.startsWith("/dashboard/teacher") || pathname.startsWith("/dashboard/admin")) {
            // 踢回学生主页
            return NextResponse.redirect(new URL("/dashboard/student", req.url));
        }
    }

    // 🛑 场景 B: 老师想进管理员页面
    if (userRole === "teacher") {
        if (pathname.startsWith("/dashboard/admin")) {
            // 踢回教师主页
            return NextResponse.redirect(new URL("/dashboard/teacher", req.url));
        }
    }

    // 验证通过，放行
    return NextResponse.next();
}

// 配置匹配路径：排除静态资源 (_next/static, images, favicon)
export const config = {
    matcher: [
        /*
         * 匹配所有路径，除了:
         * 1. /api/auth (登录注册接口不拦截)
         * 2. /_next (系统文件)
         * 3. /static (静态文件)
         * 4. .*\\..* (有后缀的文件，如 .png, .ico)
         */
        "/((?!api/auth|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
};