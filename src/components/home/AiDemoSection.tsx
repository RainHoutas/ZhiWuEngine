"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { StreamTextEffect } from "@/components/ui/StreamTextEffect";
import {
    Bot,
    User,
    Scan,
    Activity,
    Cpu,
    Search,
    AlertTriangle,
    CheckCircle2,
    Sparkles
} from "lucide-react";

export default function AiDemoSection() {
    // 模拟 AI 的思维过程状态
    const [step, setStep] = useState<"scanning" | "analyzing" | "replying">("scanning");

    // 自动循环演示流程
    useEffect(() => {
        const runSequence = () => {
            setStep("scanning");
            setTimeout(() => setStep("analyzing"), 3000); // 3秒后开始分析
            setTimeout(() => setStep("replying"), 5500);  // 再2.5秒后回复
        };

        runSequence();
        const interval = setInterval(runSequence, 18000); // 每18秒循环一次
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-white/5">
            {/* 背景装饰 */}
            <div className="absolute left-0 top-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
            <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* 标题区 */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        不像 AI，更像<span className="text-cyan-400">身边的导师</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        知悟引擎不只是生成文本。它“看”得见你的操作，“懂”得物理定律，<br />能在你犯错的那一刻提供精准点拨。
                    </p>
                </div>

                {/* 核心演示容器 */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">

                    {/* --- 左侧：全息实验场景 (Live Scene) --- */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-blue-500/5 rounded-2xl blur opacity-50 group-hover:opacity-80 transition-opacity" />

                        <div className="relative h-[400px] bg-slate-900 border border-white/10 rounded-2xl overflow-hidden flex items-center justify-center">
                            {/* 顶部状态栏 */}
                            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-20">
                                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/50 border border-white/10 backdrop-blur-md text-xs font-mono text-cyan-400">
                                    <Activity size={12} className="animate-pulse" />
                                    LIVE SIMULATION
                                </div>
                                <div className="text-[10px] font-mono text-slate-500">FRAME: 2404</div>
                            </div>

                            {/* 物理模型：斜面小车 (纯 CSS 绘制) */}
                            {/* 物理模型：斜面小车 (角度修复版) */}
                            <div className="relative w-full h-full overflow-hidden">

                                {/* 1. 旋转的宇宙 (斜面 + 滑块) */}
                                {/* 保持原有的定位不变 */}
                                <div
                                    className="absolute top-32 left-16 w-72 h-10 origin-left z-20"
                                    style={{ rotate: "25deg" }}
                                >
                                    {/* A. 斜面 */}
                                    <div className="absolute bottom-0 left-0 w-full h-1.5 bg-slate-600 rounded-full" />

                                    {/* B. 滑块 */}
                                    <motion.div
                                        className="absolute bottom-1.5 left-0 w-12 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded shadow-[0_-2px_10px_rgba(59,130,246,0.3)] border border-blue-400/50"
                                        animate={{ x: [0, 220] }}
                                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, ease: "easeIn" }}
                                    >
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_6px_white]" />
                                    </motion.div>
                                </div>

                                {/* 2. 静态参照物 & 角度标注 */}

                                {/* 辅助水平线：从斜面起始点水平向右延伸，作为角度参考 */}
                                {/* 计算逻辑：斜面容器 top-32(8rem) + 高度 2.5rem = 10.5rem (线的位置) */}
                                <div className="absolute top-[10.5rem] left-16 w-32 h-px border-t border-dashed border-slate-600/50 z-10" />

                                {/* 角度标注组件 */}
                                <div className="absolute top-[10.5rem] left-16 z-0">

                                    {/* 角度扇形/弧线 (保持不变) */}
                                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full border border-slate-600/40 border-t-0 border-l-0"
                                         style={{
                                             clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                             transform: "skewX(-25deg) rotate(25deg)",
                                             opacity: 0.5
                                         }}
                                    />

                                    {/* θ 文字：位置微调 */}
                                    {/* 修改点：top-4 -> top-1 (上移), left-10 -> left-12 (右移) */}
                                    <div className="absolute top-1 left-12 text-xs font-mono text-cyan-500 font-bold whitespace-nowrap">
                                        θ = 25°
                                    </div>
                                </div>

                                {/* 底部地面线 (装饰用) */}
                                <div className="absolute top-72 left-8 w-[85%] h-px border-t border-dashed border-slate-700/30 z-0" />

                                {/* 扫描线 */}
                                <AnimatePresence>
                                    {step === "scanning" && (
                                        <motion.div
                                            initial={{ top: "10%" }}
                                            animate={{ top: "90%" }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                                            className="absolute left-0 w-full h-1 bg-cyan-400/30 shadow-[0_0_20px_cyan] z-30"
                                        />
                                    )}
                                </AnimatePresence>
                            </div>


                            {/* 数据浮层 (识别结果) */}
                            <div className="absolute bottom-6 right-6 flex flex-col gap-2 items-end z-20">
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: step !== "scanning" ? 1 : 0, x: step !== "scanning" ? 0 : 20 }}
                                    className="px-3 py-1.5 bg-slate-950/80 border border-emerald-500/30 rounded text-xs font-mono text-emerald-400 flex items-center gap-2"
                                >
                                    <Scan size={12} /> Object Detected
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: step !== "scanning" ? 1 : 0, x: step !== "scanning" ? 0 : 20 }}
                                    transition={{ delay: 0.2 }}
                                    className="px-3 py-1.5 bg-slate-950/80 border border-cyan-500/30 rounded text-xs font-mono text-cyan-300"
                                >
                                    Mass: 2.0kg | µ: 0.15
                                </motion.div>
                            </div>

                            {/* 网格背景 */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
                        </div>
                    </div>

                    {/* --- 右侧：AI 交互界面 (Chat Interface) --- */}
                    <div className="lg:col-span-7 flex flex-col h-[400px] bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden relative backdrop-blur-sm">

                        {/* 顶部标题栏 */}
                        <div className="h-12 border-b border-white/5 bg-slate-950/50 flex items-center px-6 justify-between">
                            <div className="flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-cyan-400" />
                                <span className="text-sm font-bold text-slate-200">AI 实验助手</span>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                            </div>
                        </div>

                        {/* 聊天内容区 */}
                        <div className="flex-1 p-6 space-y-6 overflow-hidden relative">

                            {/* 用户提问 */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex gap-4 justify-end"
                            >
                                <div className="max-w-[80%] bg-slate-800 text-slate-200 px-4 py-3 rounded-2xl rounded-tr-sm text-sm leading-relaxed">
                                    小车下滑的加速度好像不对，是不是我摩擦系数设大了？
                                </div>
                                <div className="w-8 h-8 rounded-full bg-slate-700 border border-white/10 flex items-center justify-center shrink-0">
                                    <User size={14} className="text-slate-400" />
                                </div>
                            </motion.div>

                            {/* AI 回答区域 */}
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center shrink-0">
                                    <Bot size={16} className="text-cyan-400" />
                                </div>

                                <div className="flex-1 space-y-3">
                                    {/* 1. 思维链展示 (Thinking Process) */}
                                    <AnimatePresence mode="wait">
                                        {step === "analyzing" && (
                                            <motion.div
                                                key="thinking"
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="text-xs font-mono text-slate-500 space-y-1.5 border-l-2 border-cyan-500/20 pl-3"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
                                                    className="flex items-center gap-2"
                                                >
                                                    <Search size={10} className="animate-spin" /> 扫描实验环境参数...
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.2 }}
                                                    className="flex items-center gap-2 text-cyan-400"
                                                >
                                                    <Cpu size={10} /> 提取摩擦系数 µ = 0.15
                                                </motion.div>
                                                <motion.div
                                                    initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 2.0 }}
                                                    className="flex items-center gap-2 text-yellow-400"
                                                >
                                                    <AlertTriangle size={10} /> 检测到倾角 θ = 30°
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* 2. 最终回复 (Stream Text) */}
                                    {step === "replying" && (
                                        <div className="text-slate-200 text-sm leading-relaxed bg-cyan-950/10 border border-cyan-500/10 rounded-2xl rounded-tl-sm px-4 py-3 relative overflow-hidden">
                                            {/* 装饰背景 */}
                                            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-400 to-transparent" />

                                            <div className="mb-2 flex items-center gap-2 text-xs font-bold text-cyan-400">
                                                <CheckCircle2 size={12} /> 分析完成
                                            </div>

                                            <StreamTextEffect
                                                text="不是摩擦系数的问题。根据扫描，当前斜面倾角为 30°。在 µ=0.15 的情况下，下滑分力 mg*sin(30°) 远大于摩擦力。这里的加速度偏小，是因为你没有忽略【空气阻力】选项（当前设为 Level 2）。建议在右侧设置面板中关闭空气阻力后再试。"
                                                speed={30}
                                                loop={false} // 这里不需要循环打字，因为外层有大的循环逻辑
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* 底部输入框模拟 */}
                        <div className="p-4 border-t border-white/5 bg-slate-950/30">
                            <div className="h-10 bg-slate-900 rounded-lg border border-white/5 flex items-center px-4 text-xs text-slate-600">
                                Ask AI assistant...
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}