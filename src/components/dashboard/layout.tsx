import Sidebar from '@/components/dashboard/Sidebar';
import React from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        // 🎨 核心适配：
        // 1. bg-slate-50 (浅色背景) vs dark:bg-slate-950 (深色背景)
        // 2. text-slate-900 (浅色文字) vs dark:text-slate-200 (深色文字)
        <div className="min-h-screen transition-colors duration-300 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 font-sans">

            <Sidebar />

            <main className="pl-64 min-h-screen relative z-10">
                <div className="max-w-7xl mx-auto p-8">
                    {children}
                </div>
            </main>

            {/* 背景噪声：只在深色模式下显示 (hidden dark:block) */}
            {/* 浅色模式下保持干净，否则看起来像屏幕脏了 */}
            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 hidden dark:block bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

        </div>
    );
}