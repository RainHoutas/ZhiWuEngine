"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Database, Network } from "lucide-react";

export default function TechCoreSection() {
    // 核心特性数据
    const features = [
        {
            id: "01",
            title: "三层情境感知机制",
            desc: "AI 不仅知道原理，更实时捕捉空间坐标、操作步骤与错误行为。空间+状态+错误三维判定，精准度高达 89%。",
            icon: <Layers className="w-6 h-6 text-cyan-300" />,
            color: "from-cyan-500/20 to-blue-500/5",
            border: "group-hover:border-cyan-500/50"
        },
        {
            id: "02",
            title: "高保真物理引擎集成",
            desc: "内嵌 NVIDIA Flex 粒子算法。从流体力学的粘滞系数到刚体碰撞的动量守恒，每一帧渲染都严格遵循物理定律。",
            icon: <Zap className="w-6 h-6 text-purple-300" />,
            color: "from-purple-500/20 to-indigo-500/5",
            border: "group-hover:border-purple-500/50"
        },
        {
            id: "03",
            title: "云端原子级渲染",
            desc: "独创流式传输技术，将 GB 级 Unity 资产压缩至毫秒级加载。在 Chrome 中即可获得 4K 60FPS 的沉浸式体验。",
            icon: <Database className="w-6 h-6 text-emerald-300" />,
            color: "from-emerald-500/20 to-teal-500/5",
            border: "group-hover:border-emerald-500/50"
        }
    ];

    return (
        <section id="tech" className="relative py-32 bg-slate-950 overflow-hidden">
            {/* --- 背景氛围层 --- */}
            <div className="absolute inset-0 pointer-events-none">
                {/* 顶部聚光灯 */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-cyan-900/20 blur-[120px] rounded-full mix-blend-screen" />
                {/* 底部网格 */}
                <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-slate-900 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* --- 标题区 --- */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        内核技术：<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">情境原生 (Context Native)</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        拒绝简单的 API 调用。我们将 LLM 大模型直接植入 Unity 渲染管线，<br className="hidden md:block"/>构建了“视、听、感”一体化的数字孪生引擎。
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* --- 左侧：全息反应堆 (Holographic Reactor) --- */}
                    <div className="lg:col-span-5 relative flex items-center justify-center h-[500px]">
                        {/* 核心发光体 */}
                        <div className="relative w-64 h-64 flex items-center justify-center">
                            {/* 内部  标志 */}
                            <motion.div
                                animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 20px rgba(6,182,212,0.2)", "0 0 60px rgba(6,182,212,0.6)", "0 0 20px rgba(6,182,212,0.2)"] }}
                                transition={{ duration: 3, repeat: Infinity }}
                                className="w-32 h-32 bg-slate-900 rounded-full border border-cyan-500/50 flex flex-col items-center justify-center z-20 relative shadow-[0_0_40px_rgba(6,182,212,0.3)]"
                            >
                                <Cpu className="w-10 h-10 text-cyan-400 mb-1" />
                                <span className="text-xs font-bold text-white tracking-widest">多态大模型</span>
                                <span className="text-[10px] text-cyan-500/80">CORE</span>

                                {/* 扫描线特效 */}
                                <div className="absolute inset-0 rounded-full overflow-hidden">
                                    <motion.div
                                        animate={{ top: ["-100%", "200%"] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                        className="absolute left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent opacity-50"
                                    />
                                </div>
                            </motion.div>

                            {/* 轨道 1: 逆时针快转 */}
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 w-full h-full rounded-full border border-dashed border-cyan-500/30 z-10"
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-slate-900 border border-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
                            </motion.div>

                            {/* 轨道 2: 顺时针慢转 + 椭圆 */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-12 rounded-full border border-white/5 z-0"
                            >
                                <div className="absolute bottom-10 right-4 w-4 h-4 bg-blue-500/20 backdrop-blur-sm border border-blue-400 rounded-full flex items-center justify-center">
                                    <div className="w-1 h-1 bg-blue-400 rounded-full" />
                                </div>
                            </motion.div>

                            {/* 轨道 3: 装饰性大环 */}
                            <motion.div
                                animate={{ rotate: 360, scale: [1, 1.02, 1] }}
                                transition={{ rotate: { duration: 60, repeat: Infinity, ease: "linear" }, scale: { duration: 5, repeat: Infinity } }}
                                className="absolute -inset-24 rounded-full border border-slate-800 z-0 opacity-50"
                            >
                                {/* 装饰刻度 */}
                                <div className="absolute top-1/2 -right-1 w-2 h-8 bg-slate-800" />
                                <div className="absolute top-1/2 -left-1 w-2 h-8 bg-slate-800" />
                                <div className="absolute -bottom-1 left-1/2 w-8 h-2 bg-slate-800" />
                            </motion.div>

                            {/* 浮动的数据面板 */}
                            <FloatingBadge className="top-[-80px] left-[-40px]" text="Spatial: (x,y,z)" delay={0} color="text-cyan-300" />
                            <FloatingBadge className="bottom-[-60px] right-[-20px]" text="Err: 0.02%" delay={1.5} color="text-red-300" />
                            <FloatingBadge className="top-[40px] right-[-90px]" text="Net: Stable" delay={0.8} color="text-emerald-300" />

                        </div>
                    </div>

                    {/* --- 右侧：功能卡片堆栈 --- */}
                    <div className="lg:col-span-7 space-y-6">
                        {features.map((item, index) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15, duration: 0.5 }}
                                className={`group relative p-6 rounded-xl border border-white/10 bg-slate-900/40 backdrop-blur-md transition-all duration-500 hover:bg-slate-800/60 ${item.border}`}
                            >
                                {/* 卡片背景渐变 */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                                <div className="relative z-10 flex gap-5">
                                    {/* 图标容器 */}
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-slate-950 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        {item.icon}
                                    </div>

                                    {/* 文字内容 */}
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="text-xs font-mono text-slate-500/80 border border-white/10 px-1.5 py-0.5 rounded">{item.id}</span>
                                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                                        </div>
                                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                                            {item.desc}
                                        </p>
                                    </div>



                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

// 辅助小组件：浮动数据标签
function FloatingBadge({ className, text, delay, color }: { className: string, text: string, delay: number, color: string }) {
    return (
        <motion.div
            animate={{ y: [0, -10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 4, repeat: Infinity, delay: delay, ease: "easeInOut" }}
            className={`absolute ${className} px-3 py-1 rounded border border-white/10 bg-slate-950/80 backdrop-blur-md text-[10px] font-mono ${color} shadow-lg z-30 pointer-events-none`}
        >
            <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-current animate-pulse`} />
                {text}
            </div>
        </motion.div>
    );
}
