import React from "react";
import ForceDarkTheme from "@/components/providers/ForceDarkTheme";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* ⚡️ 物理防闪白脚本：在页面渲染前 0.1ms 强行把背景设黑，把类名设为 dark */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `
            document.documentElement.classList.add('dark');
            document.documentElement.style.backgroundColor = '#020617';
          `,
                }}
            />

            <ForceDarkTheme>
                {/* 这里的样式只是为了兜底，实际背景色由 globals.css 的 body 控制 */}
                <div className="min-h-screen w-full bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
                    {children}
                </div>
            </ForceDarkTheme>
        </>
    );
}