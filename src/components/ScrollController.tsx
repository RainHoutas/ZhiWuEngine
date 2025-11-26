"use client";

import { useEffect } from "react";

export default function ScrollController() {
    useEffect(() => {
        let timeoutId: NodeJS.Timeout;
        const html = document.documentElement;

        // 核心逻辑：滚动时加类，停下后删类
        const handleScroll = () => {
            html.classList.add("show-scrollbar");

            if (timeoutId) clearTimeout(timeoutId);

            // 1秒无操作后，移除类名（隐藏滚动条）
            timeoutId = setTimeout(() => {
                html.classList.remove("show-scrollbar");
            }, 1000);
        };

        // 监听 window 的滚动 (针对主页)
        window.addEventListener("scroll", handleScroll, { passive: true });

        // 同时也监听所有可能的内部滚动容器 (针对 Dashboard)
        // 使用 capture: true 捕获所有子元素的滚动事件
        window.addEventListener("scroll", handleScroll, { capture: true, passive: true });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("scroll", handleScroll, { capture: true });
            if (timeoutId) clearTimeout(timeoutId);
        };
    }, []);

    return null; // 这个组件不渲染任何东西
}