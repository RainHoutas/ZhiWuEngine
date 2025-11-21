"use client";
import { useEffect } from "react";
import { motion, useAnimate, stagger } from "framer-motion";

export const TextGenerateEffect = ({
                                       words,
                                       className = "",
                                       loop = true,
                                   }: {
    words: string;
    className?: string;
    loop?: boolean;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split("");

    useEffect(() => {
        // 定义一个清理计时器的变量
        let timeoutId: NodeJS.Timeout;
        // 标记当前 effect 是否活跃（防止组件卸载后执行动画）
        let isMounted = true;

        const runAnimation = async () => {
            // 安全检查：如果组件卸载了或 scope 没准备好，直接停止
            if (!isMounted || !scope.current) return;

            try {
                // 1. 重置状态：瞬间变透明 (duration: 0)
                await animate("span", { opacity: 0 }, { duration: 0 });

                // 2. 执行打字机动画
                // 再次检查挂载状态
                if (!isMounted) return;
                await animate(
                    "span",
                    { opacity: 1 },
                    { duration: 0.5, delay: stagger(0.05) }
                );

                // 3. 处理循环
                if (loop && isMounted) {
                    // 这里的 3000 是停留阅读时间 (3秒)
                    timeoutId = setTimeout(runAnimation, 3000);
                }
            } catch (error) {
                // 捕获动画被中断可能产生的错误，忽略即可
            }
        };

        // 启动动画
        runAnimation();

        // 清理函数
        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, [animate, loop, words]); // 加入 words 依赖，如果文字变了也会重播

    return (
        <div className={className}>
            <div className="mt-4">
                <div className="dark:text-white text-black leading-snug tracking-wide">
                    <motion.div ref={scope}>
                        {wordsArray.map((word, idx) => {
                            return (
                                <motion.span
                                    key={word + idx}
                                    className="dark:text-white text-slate-200 opacity-0 inline-block mr-[1px]"
                                >
                                    {word}
                                </motion.span>
                            );
                        })}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};