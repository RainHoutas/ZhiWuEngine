import Sidebar from '@/components/dashboard/Sidebar';
import React from "react";

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 font-sans transition-colors duration-300">

            {/* 侧边栏固定 */}
            <Sidebar />

            {/* 主内容区：
          pl-64: 让出侧边栏位置
          不再设置 overflow，跟随 body 滚动
      */}
            <main className="flex-1 pl-64 relative z-10">
                <div className="max-w-7xl mx-auto p-8">
                    {children}
                </div>
            </main>

            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 hidden dark:block bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
    );
}