"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ButtonMovingBorder } from "@/components/ui/ButtonMovingBorder";
import { Rocket, ArrowRight, Sparkles,Cpu, Globe, Box, Layers } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden flex flex-col items-center justify-center">

            {/* --- 背景层：时空隧道 --- */}
            <div className="absolute inset-0 bg-slate-950">
                {/* 1. 基础噪点 */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* 2. 放射状加速线 (Warp Lines) */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-[-50%] w-[200%] h-[200%] opacity-20"
                    style={{
                        background: "conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(6,182,212,0.1) 60deg, transparent 120deg, transparent 180deg, rgba(59,130,246,0.1) 240deg, transparent 360deg)"
                    }}
                />

                {/* 3. 中心能量核心 (Pulsing Core) */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[100px] rounded-full mix-blend-screen pointer-events-none"
                />

                {/* 4. 星星粒子向外飞散 (已修复随机数问题) */}
                <WarpStars />
            </div>

            {/* --- 内容层 --- */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

                {/* 顶部小标签 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-white/10 backdrop-blur-md mb-8 text-xs font-mono text-cyan-300"
                >
                    <Rocket size={12} className="text-purple-400" />
                    <span>READY TO LAUNCH</span>
                </motion.div>

                {/* 主标题 */}
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight"
                >
                    准备好开启
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-[0_0_20px_rgba(6,182,212,0.5)]">
            下一代实验室了吗？
          </span>
                </motion.h2>

                {/* 描述 */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                >
                    加入数千所创新院校的行列。无需部署服务器，无需高端显卡，
                    <br className="hidden md:block" />
                    现在注册，即刻获得 <span className="text-white font-medium">14天全功能免费试用</span>。
                </motion.p>

                {/* 按钮组 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                >
                    <Link href="/register">
                        <div className="h-14 w-52">
                            <ButtonMovingBorder className="w-full h-full font-bold text-lg bg-slate-950 hover:bg-slate-900 transition-colors">
                                🚀 免费注册账号
                            </ButtonMovingBorder>
                        </div>
                    </Link>

                    <Link href="/contact" className="group flex items-center gap-2 px-8 py-4 bg-slate-800/50 border border-white/10 text-white font-medium rounded-xl hover:bg-slate-800 hover:border-white/20 transition-all backdrop-blur-sm">
                        <Sparkles size={18} className="text-yellow-400" />
                        <span>联系商务演示</span>
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform text-slate-400 group-hover:text-white" />
                    </Link>
                </motion.div>

                {/* 底部信任背书 -> 改为：技术栈展示 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-4"
                >
                    {/* 修改文字标题 */}
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">
                        Powered by Top-tier Technologies
                    </p>

                    {/* 修改图标区域 */}
                    <div className="flex gap-8 opacity-50 grayscale mix-blend-screen text-slate-300">

                        {/* 1. Unity / 3D 引擎 */}
                        <div className="flex items-center gap-2">
                            <Box size={20} />
                            <span className="font-bold text-sm">Unity WebGL</span>
                        </div>

                        {/* 2. AI 模型 */}
                        <div className="flex items-center gap-2">
                            <Cpu size={20} />
                            <span className="font-bold text-sm">GLM-4 AI</span>
                        </div>

                        {/* 3. 前端框架 */}
                        <div className="flex items-center gap-2">
                            <Globe size={20} />
                            <span className="font-bold text-sm">Next.js 14</span>
                        </div>

                        {/* 4. 物理算力 */}
                        <div className="flex items-center gap-2 hidden sm:flex">
                            <Layers size={20} />
                            <span className="font-bold text-sm">NVIDIA Flex</span>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}

// 子组件：向外飞散的星星 (Warp Speed Effect)
// ✅ 修复：使用确定性算法替代 Math.random()，解决 Purity Error
function WarpStars() {
    const stars = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        // 使用质数乘法取模，生成伪随机但固定的位置
        left: `${(i * 17) % 100}%`,
        top: `${(i * 23) % 100}%`,
        delay: (i % 5) * 0.5,
        duration: 2 + (i % 3)
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute w-0.5 h-0.5 bg-white rounded-full"
                    style={{ left: star.left, top: star.top }}
                    animate={{
                        scale: [0, 1, 3],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        delay: star.delay,
                        ease: "linear"
                    }}
                >
                    {/* 拖尾效果 */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rotate-45 transform origin-center" />
                </motion.div>
            ))}
        </div>
    );
}