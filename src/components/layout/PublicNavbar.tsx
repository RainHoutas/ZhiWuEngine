"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function PublicNavbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 新增：登录状态

    useEffect(() => {
        // 1. 滚动监听
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);

        // 2. 登录状态检查 (新增)
        // 检查 cookie 中是否存在 token
        const checkLogin = () => {
            const hasToken = document.cookie.split(';').some((item) => item.trim().startsWith('token='));
            setIsLoggedIn(hasToken);
        };
        checkLogin();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
                scrolled
                    ? "bg-slate-950/80 border-white/10 backdrop-blur-md py-4"
                    : "bg-transparent border-transparent py-6"
            }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo 区域 (保持你原来的样式不变) */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 flex items-center justify-center">
                        <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-40 group-hover:opacity-80 transition-opacity animate-pulse-slow rounded-full"></div>
                        <div className="relative w-full h-full z-10">
                            <Image
                                src="/logo.svg"
                                alt="知悟引擎 Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <span className="text-2xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
                        知悟引擎
                    </span>
                </Link>

                {/* 桌面端菜单 */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        核心技术
                    </Link>
                    <Link href="#demo" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                        实验演示
                    </Link>

                    <div className="h-4 w-px bg-white/10"></div>

                    {/* 按钮区域 (根据登录状态切换) */}
                    <div className="flex gap-4">
                        {isLoggedIn ? (
                            // --- 已登录：显示进入按钮 ---
                            // 链接到 /login，让 Middleware 自动处理跳转到 dashboard/student 或 teacher
                            <Link
                                href="/login"
                                className="px-6 py-2 text-sm font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                            >
                                进入实验室 &rarr;
                            </Link>
                        ) : (
                            // --- 未登录：显示原有按钮 ---
                            <>
                                <Link
                                    href="/login"
                                    className="px-4 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                                >
                                    登录/进入
                                </Link>
                                <Link
                                    href="/register"
                                    className="px-5 py-2 text-sm font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                                >
                                    立即注册
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}