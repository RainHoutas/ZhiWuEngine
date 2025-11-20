"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();


    // ===== 隐藏式滚动条 + 滚动时显示霓虹光条 =====
    useEffect(() => {
        let timer: NodeJS.Timeout;

        const showScrollbar = () => {
            document.documentElement.classList.add("show-scrollbar");

            clearTimeout(timer);
            timer = setTimeout(() => {
                document.documentElement.classList.remove("show-scrollbar");
            }, 800); // 停止滚动 0.8s 后自动隐藏
        };

        window.addEventListener("scroll", showScrollbar);

        return () => window.removeEventListener("scroll", showScrollbar);
    }, []);

    return (
        <>
            {children}
        </>
    );
}
