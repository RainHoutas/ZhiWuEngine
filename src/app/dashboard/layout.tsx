'use client';

import Sidebar from '@/components/dashboard/Sidebar';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DashboardLayout({
                                            children,
                                        }: {
    children: React.ReactNode;
}) {
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="h-screen w-full flex bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-200 selection:bg-cyan-500/30 font-sans transition-colors duration-300">

            <Sidebar />

            {/* 逻辑判断：
         如果没加载完 OR 主题是 dark -> 用 skin-neon (青色)
         否则 -> 用 skin-gray (灰色)
      */}
            <main
                className={`flex-1 pl-64 h-full overflow-y-auto custom-scroll relative z-10 ${
                    !mounted || theme === 'dark' ? 'skin-neon' : 'skin-gray'
                }`}
            >
                <div className="max-w-7xl mx-auto p-8">
                    {children}
                </div>
            </main>

            <div className="fixed inset-0 z-0 pointer-events-none opacity-20 hidden dark:block bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        </div>
    );
}