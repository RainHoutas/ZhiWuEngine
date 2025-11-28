import { NextResponse } from "next/server";

export async function POST() {
    // 创建一个响应
    const response = NextResponse.json({ message: "Logout successful" });

    // 🛑 核心操作：通过服务端指令删除 Cookie
    // 这会发送 Set-Cookie: token=; Max-Age=0; ...
    response.cookies.delete("token");

    return response;
}