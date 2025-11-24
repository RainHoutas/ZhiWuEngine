"use client"; // 记得加上这个，因为用了 Framer Motion

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ButtonMovingBorder } from "@/components/ui/ButtonMovingBorder";
import { ArrowRight, Play, Sparkles } from "lucide-react";

export default function HeroSection() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        // 1. 布局调整：改为 pt-20 (移动端) / pt-32 (桌面端)，大幅上移内容
        <section className="relative min-h-screen w-full overflow-hidden bg-slate-950 flex flex-col justify-start pt-12 lg:pt-24">

            {/* --- 背景氛围层 --- */}
            <div className="absolute inset-0 z-0 pointer-events-none">

                {/* A. 增强版上帝之光 (双层叠加) */}
                {/* 外层柔光 */}
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-600/30 blur-[100px] rounded-full mix-blend-screen opacity-80" />
                {/* 核心强光 */}
                <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-blue-400/20 blur-[80px] rounded-full mix-blend-overlay" />

                {/* B. 底部透视网格地面 (虚化渐变版) */}
                <motion.div
                    style={{ y: y1, opacity }}
                    className="absolute bottom-0 left-0 w-full h-[60vh] perspective-[1000px]"
                >
                    {/* 1. 底部遮罩：保留这个是为了让网格最底部和页面背景自然融合 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />

                    <div
                        // 2. 调整整体浓度：0.6 -> 0.5 (折中方案，既清晰又不刺眼)
                        className="w-full h-full origin-bottom transform-3d rotate-x-[60deg] scale-150 opacity-50"
                        style={{
                            backgroundImage: `
                /* 3. 线条颜色：0.3 -> 0.25 (稍微柔和一点) */
                linear-gradient(to right, rgba(6,182,212,0.25) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(6,182,212,0.25) 1px, transparent 1px)
              `,
                            backgroundSize: '50px 50px',
                            animation: 'grid-flow 20s linear infinite',

                            /* 🔥 核心修改：使用 Mask 实现“上方虚化” */
                            /* to bottom 表示从上往下：顶部透明(0%) -> 到30%处变成完全不透明 */
                            maskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 40%, black 100%)'
                        }}
                    />
                </motion.div>

                {/* C. 修复粒子层级：Z-20 确保在网格之上 */}
                <div className="absolute inset-0 z-20">
                    <FloatingParticles />
                </div>

                {/* D. 环境光反射 (底部氛围) */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-900/20 to-transparent z-10 blur-xl" />
            </div>

            {/* --- 内容层 --- */}
            <div className="relative z-30 max-w-7xl mx-auto px-6 text-center">

                {/* 标题背后的辉光 (新增) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[60px] rounded-full -z-10" />

                {/* 状态 Badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-cyan-500/40 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(6,182,212,0.2)] hover:border-cyan-400 transition-colors cursor-default"
                >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-100"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
                    <span className="text-xs font-mono text-cyan-200 tracking-wider uppercase font-bold">
            System Online <span className="text-cyan-500/50 mx-2">|</span> V2.0 Ready
          </span>
                </motion.div>

                {/* 主标题 */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-4 relative z-10"
                >
                    <span className="block mb-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">知悟引擎</span>
                    <span className="block text-3xl md:text-5xl lg:text-6xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 pb-2 tracking-normal">
            重新定义虚拟实验
          </span>
                </motion.h1>

                {/* 副标题 */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
                >
                    首创 <span className="text-cyan-300 font-medium drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">三层情境感知</span> AI 辅导机制。
                    <br className="hidden md:block" />
                    在 WebGL 构建的 4K 级 3D 空间中，让每一次实验都安全、精准、触手可及。
                </motion.p>

                {/* 按钮组 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center relative z-20"
                >
                    <Link href="/login">
                        <div className="h-16 w-52">
                            <ButtonMovingBorder className="w-full h-full font-bold text-xl flex items-center justify-center gap-2 bg-slate-950/80">
                                <Play size={20} fill="currentColor" /> 立即启动
                            </ButtonMovingBorder>
                        </div>
                    </Link>

                    <Link
                        href="#tech"
                        className="group flex items-center gap-2 px-8 py-5 text-slate-300 hover:text-white font-medium transition-all rounded-full hover:bg-white/5 border border-white/5 hover:border-white/20 backdrop-blur-sm"
                    >
                        <Sparkles size={18} className="text-purple-400 group-hover:rotate-12 transition-transform" />
                        <span>探索技术架构</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes grid-flow {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }
        .transform-3d {
          transform-style: preserve-3d;
        }
      `}</style>
        </section>
    );
}

// 增强版粒子：更大、更亮、更多变
function FloatingParticles() {
    const particles = Array.from({ length: 30 }).map((_, i) => ({
        id: i,
        x: (i * 13) % 100,
        y: (i * 7) % 100,
        size: (i % 3) + 1, // 1-3px 大小不一
        duration: 15 + (i % 10),
        delay: i * 0.5
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-cyan-300/60 blur-[1px] shadow-[0_0_5px_cyan]"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size
                    }}
                    animate={{
                        y: [0, -150],
                        opacity: [0, 0.8, 0],
                        scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}