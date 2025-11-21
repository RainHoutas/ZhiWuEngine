"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function PublicNavbar() {
    const [scrolled, setScrolled] = useState(false);

    // 监听滚动，实现滚动后背景加深的效果
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
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
                {/* Logo 区域 */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 flex items-center justify-center">
                        {/* Logo 呼吸光晕 */}
                        <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition-opacity animate-pulse-slow"></div>
                        <div className="relative w-full h-full bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                            Z
                        </div>
                    </div>
                    <span className="text-xl font-bold text-white tracking-wide group-hover:text-cyan-400 transition-colors">
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

                    <div className="flex gap-4">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-sm font-medium text-white hover:text-cyan-400 transition-colors"
                        >
                            登录
                        </Link>
                        <Link
                            href="/register"
                            className="px-5 py-2 text-sm font-bold text-slate-950 bg-cyan-400 rounded-full hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
                        >
                            立即注册
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}