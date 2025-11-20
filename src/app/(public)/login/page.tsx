"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            setError(data.message || "登录失败，请重试");
            return;
        }

        // 服务器已经设置 httpOnly cookie，这里不需要再写 cookie
        router.push(`/dashboard/${data.user.role}`);
    };

    return (
        <div className="relative flex min-h-screen items-center justify-center px-4 bg-slate-950 text-slate-100">

            {/* ======= 背景光效（和首页统一） ======= */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
                <div className="absolute bottom-[-5rem] left-10 h-[20rem] w-[20rem] rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="absolute right-[-4rem] top-20 h-[22rem] w-[22rem] rounded-full bg-purple-500/20 blur-3xl" />
            </div>

            {/* ======= 登录卡片 ======= */}
            <div className="relative z-10 w-full max-w-md rounded-2xl border border-slate-700/70 bg-slate-900/70 backdrop-blur-xl p-8 shadow-2xl shadow-cyan-500/20">

                <h1 className="mb-6 text-center text-2xl font-semibold">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                        登录 知悟引擎
                    </span>
                </h1>

                <form className="space-y-5" onSubmit={handleSubmit}>

                    {/* 邮箱 */}
                    <div>
                        <label className="block mb-1 text-sm text-slate-300">邮箱</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-slate-100 placeholder-slate-400 shadow-inner
                                       focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
                            placeholder="example@school.com"
                        />
                    </div>

                    {/* 密码 */}
                    <div>
                        <label className="block mb-1 text-sm text-slate-300">密码</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 p-3 text-slate-100 placeholder-slate-400 shadow-inner
                                       focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 transition"
                            placeholder="••••••••"
                        />
                    </div>

                    {/* 错误提示 */}
                    {error && (
                        <div className="text-red-400 text-sm">{error}</div>
                    )}

                    {/* 登录按钮 */}
                    <button
                        type="submit"
                        className="w-full rounded-xl bg-cyan-500 py-3 text-slate-900 font-semibold shadow-cyan-500/30
                                   hover:bg-cyan-400 hover:-translate-y-0.5 transition-all"
                    >
                        登录
                    </button>
                </form>

                {/* 注册跳转 */}
                <p className="mt-4 text-center text-sm text-slate-400">
                    还没有账号？
                    <a href="/register" className="text-cyan-300 hover:underline ml-1">
                        创建账号
                    </a>
                </p>
            </div>
        </div>
    );
}
