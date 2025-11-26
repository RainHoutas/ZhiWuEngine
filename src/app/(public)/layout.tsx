import React from "react";
import ForceDarkTheme from "@/components/providers/ForceDarkTheme";

export default function PublicLayout({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <>
            {/* 物理防闪白脚本 */}
            <script
                dangerouslySetInnerHTML={{
                    __html: `document.documentElement.setAttribute('data-force-dark', 'true');`,
                }}
            />

            <ForceDarkTheme>
                {/* 1. custom-scroll skin-neon: 应用刚才写的样式
           2. h-screen overflow-y-auto: 允许滚动
        */}
                <div className="h-screen w-full overflow-y-auto custom-scroll skin-neon bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
                    {children}
                </div>
            </ForceDarkTheme>
        </>
    );
}