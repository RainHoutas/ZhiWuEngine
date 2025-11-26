"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ForceDarkTheme({ children }: { children: React.ReactNode }) {
    // 引入 theme 是为了让组件跟随主题上下文重新渲染，确保逻辑正确
    const { theme } = useTheme();

    useEffect(() => {
        // 1. 再次确认加上标记 (防止 script 执行慢了)
        document.documentElement.setAttribute("data-force-dark", "true");
        document.documentElement.classList.add("dark");

        // 2. 卸载时 (离开主页)
        return () => {
            document.documentElement.removeAttribute("data-force-dark");

            // 检查用户真实设置，如果是 light，就把 dark 类移除
            // 注意：这里直接读 localStorage 是最准的
            if (localStorage.getItem("theme") === "light") {
                document.documentElement.classList.remove("dark");
            }
        };
    }, []);

    return <>{children}</>;
}