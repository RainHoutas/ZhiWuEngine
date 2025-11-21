"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface StreamTextProps {
    text: string;
    className?: string;
    cursorClassName?: string;
    speed?: number; // 打字速度 (ms)
    loop?: boolean; // 是否循环
    delay?: number; // 循环间隔 (ms)
}

export const StreamTextEffect = ({
                                     text,
                                     className = "",
                                     cursorClassName = "",
                                     speed = 30,
                                     loop = true,
                                     delay = 3000,
                                 }: StreamTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const indexRef = useRef(0); // 使用 ref 来追踪当前索引，避免闭包问题
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // 启动打字逻辑
        const startTyping = () => {
            // 如果已经打完了
            if (indexRef.current >= text.length) {
                setIsTyping(false);
                if (loop) {
                    timeoutRef.current = setTimeout(() => {
                        setDisplayedText(""); // 清空文本
                        indexRef.current = 0; // 重置索引
                        setIsTyping(true); // 重新开始打字状态
                        startTyping(); // 递归调用开始
                    }, delay);
                }
                return;
            }

            // 继续打字
            timeoutRef.current = setTimeout(() => {
                // 获取当前应该显示的字符
                const nextChar = text.charAt(indexRef.current);
                setDisplayedText((prev) => prev + nextChar);
                indexRef.current += 1;
                startTyping();
            }, speed); // 这里可以加一点随机数模拟 AI 的“思考”顿挫感
        };

        // 初始化
        startTyping();

        // 清理函数
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [text, speed, loop, delay]); // 依赖项非常简单，保证稳定性

    return (
        <div className={`${className} inline-block leading-relaxed tracking-wide`}>
            {/* 渲染已生成的文本 */}
            <span dangerouslySetInnerHTML={{ __html: displayedText.replace(/\n/g, "<br/>") }} />

            {/* 渲染光标：只在打字时，或者一直显示 */}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
                className={`inline-block w-2 h-5 ml-1 align-middle bg-cyan-400 ${cursorClassName}`}
            />
        </div>
    );
};