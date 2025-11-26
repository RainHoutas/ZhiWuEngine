import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // 确保安装了 jose
import { cookies } from "next/headers";

// 必须与 Middleware 和 Login API 中的密钥处理完全一致！
const JWT_SECRET = new TextEncoder().encode(
    process.env.JWT_SECRET || "default_secret_key_please_change"
);

export async function authGuard(req: Request) {
    try {
        // 1. 获取 Cookie
        const cookieStore = await cookies();
        const token = cookieStore.get("token")?.value;

        if (!token) {
            return NextResponse.json({ message: "未提供 Token" }, { status: 401 });
        }

        // 2. 验证 Token (使用 jose)
        const { payload } = await jwtVerify(token, JWT_SECRET);

        // 3. 返回解码后的数据
        return payload as { id: number; role: string; email: string };

    } catch (e) {
        console.error("AuthGuard Error:", e);
        return NextResponse.json({ message: "无效的 Token" }, { status: 401 });
    }
}