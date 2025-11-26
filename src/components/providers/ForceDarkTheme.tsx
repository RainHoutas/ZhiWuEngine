"use client";
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function ForceDarkTheme({ children }: { children: React.ReactNode }) {
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        // 1. 进入主页：强制加标记、加类名
        document.documentElement.setAttribute("data-force-dark", "true");
        document.documentElement.classList.add("dark");
        // 临时把 color-scheme 改为 dark，防止浏览器原生控件变白
        document.documentElement.style.colorScheme = "dark";

        // 2. 离开主页：恢复
        return () => {
            document.documentElement.removeAttribute("data-force-dark");

            // 读取本地存储的真实偏好
            const storedTheme = localStorage.getItem("theme");

            if (storedTheme === "light") {
                document.documentElement.classList.remove("dark");
                // 关键：显式把 color-scheme 改回 light，
                // 这样 CSS 里的 html[style*="light"] 就会立即生效
                document.documentElement.style.colorScheme = "light";
            } else {
                // 如果是 dark 或 system(dark)，保持 dark 不动
                document.documentElement.style.colorScheme = "dark";
            }
        };
    }, []);

    return <>{children}</>;
}