"use client";

import { useState } from "react";

export default function TestLogin() {
    const [email, setEmail] = useState("1271084579@qq.com");
    const [password, setPassword] = useState("");

    async function login() {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ email, password }),
        });

        const data = await res.json();
        console.log("登录结果：", data);

        if (res.ok) {
            alert("登录成功！现在访问 / 会自动跳转 /dashboard");
        }
    }

    return (
        <div className="text-white p-8">
            <h1>测试登录</h1>

            <input
                className="text-black block my-2"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <input
                type="password"
                className="text-black block my-2"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            <button className="bg-blue-500 px-3 py-1" onClick={login}>
                登录
            </button>
        </div>
    );
}
