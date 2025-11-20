"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed left-0 top-0 z-50 w-full transition-all duration-300
    ${scrolled
                ? "bg-slate-900/80 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.1)]"
                : "bg-transparent backdrop-blur-0 shadow-none"
            }`}
        >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <Link href="/" className="text-lg font-semibold text-slate-100">
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                        知悟引擎
                    </span>{" "}
                    · Zhiwu Engine
                </Link>

                <div className="flex items-center gap-6 text-sm text-slate-300">
                    <Link href="#experiments">实验大厅</Link>
                    <Link href="#ai-demo">AI 实验助手</Link>
                    <Link href="#analytics">学情分析</Link>
                    <Link href="/docs">文档</Link>

                    <Link
                        href="/login"
                        className="rounded-xl bg-cyan-500 px-4 py-2 text-slate-900 transition hover:bg-cyan-400"
                    >
                        登录 / 进入平台
                    </Link>
                </div>
            </div>
        </nav>
    );
}
