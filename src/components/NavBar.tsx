"use client";

import Link from "next/link";

export default function NavBar() {
    return (
        <header
            className="
        fixed top-0 left-0 right-0 z-20
        border-b border-white/5
        bg-black/40 backdrop-blur-xl
      "
        >
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                {/* 左侧 LOGO */}
                <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_20px_rgba(129,140,248,0.8)]" />
                    <div className="leading-tight">
                        <div className="text-sm font-semibold text-purple-200">
                            知悟引擎 · Zhiwu Engine
                        </div>
                        <div className="text-[11px] text-gray-400">
                            AI 虚拟实验教学平台
                        </div>
                    </div>
                </div>

                {/* 中间导航菜单 */}
                <nav className="hidden gap-6 text-sm text-gray-300 md:flex">
                    <Link href="/" className="hover:text-white transition-colors">
                        实验大厅
                    </Link>
                    <Link href="/ai-assistant" className="hover:text-white transition-colors">
                        AI 实验助教
                    </Link>
                    <Link href="/teacher" className="hover:text-white transition-colors">
                        教师中心
                    </Link>
                    <Link href="/analytics" className="hover:text-white transition-colors">
                        学情分析
                    </Link>
                </nav>

                {/* 右侧按钮 */}
                <div className="flex items-center gap-3">
                    <Link
                        href="/docs"
                        className="
              hidden rounded-full border border-white/20 px-3 py-1.5 text-xs text-gray-200
              hover:border-purple-400 hover:text-white transition-colors md:inline-block
            "
                    >
                        文档 / 指导手册
                    </Link>

                    <Link
                        href="/login"
                        className="
              rounded-full bg-gradient-to-r from-purple-500 to-blue-500
              px-4 py-1.5 text-xs font-semibold text-white
              shadow-[0_0_15px_rgba(129,140,248,0.8)]
              hover:shadow-[0_0_22px_rgba(129,140,248,1)]
              transition-shadow
            "
                    >
                        登录 / 进入平台
                    </Link>
                </div>
            </div>
        </header>
    );
}
