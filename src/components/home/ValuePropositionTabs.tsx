"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
// 记得引入 LucideIcon 类型，因为我们在定义 tabs 数组时用到了
import { CheckCircle2, Beaker, Users, Building2, BarChart3, Globe2, type LucideIcon } from "lucide-react";
import clsx from "clsx";

type TabType = "student" | "teacher" | "school";
export default function ValuePropositionTabs() {
    const [activeTab, setActiveTab] = useState<TabType>("student");

    const tabs: { id: TabType; label: string; icon: LucideIcon }[] = [
        { id: "student", label: "学生 · 沉浸探索", icon: Beaker },
        { id: "teacher", label: "教师 · 双屏监控", icon: Users },
        { id: "school", label: "院校 · 普惠部署", icon: Building2 }
    ];

    const content = {
        student: {
            title: "虚拟预演，",
            highlight: "实体验证",
            desc: "在数字孪生世界中无限次试错。打破时空限制，让高危、微观、瞬态实验触手可及。",
            points: [
                "高危实验零风险模拟 (爆炸/腐蚀)",
                "AI 苏格拉底式引导提问",
                "游戏化成就系统与能力画像"
            ],
            color: "cyan"
        },
        teacher: {
            title: "全班学情，",
            highlight: "一屏尽览",
            desc: "告别传统实验课的“巡逻式”指导。实时监控 50+ 学生的操作进度，精准定位卡顿环节。",
            points: [
                "实时实验进度看板 (Live Dashboard)",
                "学生异常操作自动预警",
                "实验报告一键批量批改"
            ],
            color: "purple"
        },
        school: {
            title: "云端算力，",
            highlight: "降本增效",
            desc: "无需采购昂贵的高性能工作站。基于 WebGL 的云渲染技术，让百元级平板也能运行 3A 级实验。",
            points: [
                "Web 端即点即用，免安装维护",
                "API 模块化接入现有教务系统",
                "硬件采购成本降低 60% 以上"
            ],
            color: "emerald"
        }
    };

    return (
        <section className="py-24 relative overflow-hidden">
            {/* 背景光晕装饰 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-slate-900/50 blur-3xl rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">

                {/* 1. 顶部 HUD 导航栏 */}
                <div className="flex justify-center mb-16">
                    <div className="p-1.5 rounded-full bg-slate-950/80 border border-white/10 backdrop-blur-xl flex items-center gap-1 shadow-2xl">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={clsx(
                                    "relative px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 z-10",
                                    activeTab === tab.id ? "text-white" : "text-slate-400 hover:text-slate-200"
                                )}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activePill"
                                        className="absolute inset-0 bg-slate-800 rounded-full border border-white/10 shadow-lg"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                  <tab.icon size={16} className={activeTab === tab.id ? "text-cyan-400" : ""} />
                                    {tab.label}
                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* 2. 内容切换区 */}
                <div className="relative min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        >

                            {/* 左侧：文字信息 */}
                            <div className="space-y-8">
                                <div>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                                        {content[activeTab].title}
                                        <br />
                                        <span className={clsx(
                                            "text-transparent bg-clip-text bg-gradient-to-r",
                                            activeTab === 'student' ? "from-cyan-400 to-blue-500" :
                                                activeTab === 'teacher' ? "from-purple-400 to-pink-500" :
                                                    "from-emerald-400 to-teal-500"
                                        )}>
                      {content[activeTab].highlight}
                    </span>
                                    </h2>
                                    <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                                        {content[activeTab].desc}
                                    </p>
                                </div>

                                <ul className="space-y-4">
                                    {content[activeTab].points.map((point, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 + i * 0.1 }}
                                            className="flex items-center gap-3 text-slate-300"
                                        >
                                            <CheckCircle2 className={clsx(
                                                "w-5 h-5 flex-shrink-0",
                                                activeTab === 'student' ? "text-cyan-500" :
                                                    activeTab === 'teacher' ? "text-purple-500" :
                                                        "text-emerald-500"
                                            )} />
                                            <span>{point}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            {/* 右侧：全息 UI 模拟窗 */}
                            <div className="relative group">
                                <div className={clsx(
                                    // 修改点 1: opacity-30 -> opacity-60 (更亮)
                                    // 修改点 2: group-hover:opacity-50 -> group-hover:opacity-80 (悬停更亮)
                                    "absolute -inset-1 rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 blur-xl bg-gradient-to-r",

                                    activeTab === 'student' ? "from-cyan-500 to-blue-600" :
                                        activeTab === 'teacher' ? "from-purple-500 to-pink-600" :
                                            // 修改点 3: emerald-500 -> emerald-400 (使用更荧光的绿色)
                                            "from-emerald-400 to-teal-500"
                                )} />

                                {/* 界面容器 */}
                                <div className="relative h-[360px] rounded-2xl bg-slate-950 border border-white/10 overflow-hidden shadow-2xl">
                                    {/* 顶部 macOS 风格栏 */}
                                    <div className="h-8 bg-slate-900/50 border-b border-white/5 flex items-center px-4 gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-slate-700" />
                                    </div>

                                    {/* 内部动态 UI 内容 */}
                                    <div className="p-6 h-full relative">
                                        {activeTab === 'student' && <StudentInterfaceMockup />}
                                        {activeTab === 'teacher' && <TeacherInterfaceMockup />}
                                        {activeTab === 'school' && <SchoolInterfaceMockup />}
                                    </div>

                                    {/* 扫描线覆盖层 */}
                                    <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_2px,#000_3px)] bg-[length:100%_4px] opacity-20" />
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}

// --- 子组件：动态抽象 UI (Abstract UI Mockups) ---
// 这些组件使用 CSS + Motion 模拟界面，无需图片，性能极佳且风格统一

function StudentInterfaceMockup() {
    return (
        <div className="flex flex-col h-full gap-4">
            {/* 模拟 3D 视口 */}
            <div className="flex-1 rounded-lg border border-cyan-500/20 bg-cyan-900/10 relative overflow-hidden flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-24 h-24 border-2 border-dashed border-cyan-500/50 rounded-full flex items-center justify-center"
                >
                    <div className="w-16 h-16 border border-cyan-400/30 rounded-lg rotate-45" />
                </motion.div>
                {/* 数据浮标 */}
                <div className="absolute top-4 right-4 text-[10px] font-mono text-cyan-400 space-y-1">
                    <div>VEL: 4.2m/s</div>
                    <div>ACC: 9.8m/s²</div>
                </div>
            </div>
            {/* 模拟底部控制栏 */}
            <div className="h-12 flex gap-2">
                <div className="w-12 h-full rounded bg-slate-800/50 animate-pulse" />
                <div className="flex-1 h-full rounded bg-slate-800/50 flex items-center px-3 gap-2">
                    <div className="w-full h-2 rounded-full bg-slate-700 overflow-hidden">
                        <motion.div
                            initial={{ width: "0%" }} animate={{ width: "70%" }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="h-full bg-cyan-500"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeacherInterfaceMockup() {
    return (
        <div className="flex flex-col h-full gap-3">
            <div className="flex justify-between items-center mb-2">
                <div className="text-xs text-slate-500 font-mono">Live Monitoring</div>
                <div className="flex gap-1">
                    <BarChart3 size={12} className="text-purple-400" />
                </div>
            </div>
            {/* 模拟学生卡片网格 */}
            <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="aspect-video rounded bg-slate-800/50 border border-white/5 relative overflow-hidden p-2 flex flex-col justify-between"
                    >
                        <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-purple-500"
                                style={{ width: `${(i * 13 + 30) % 100}%` }}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="w-4 h-4 rounded-full bg-slate-600" />
                            <div className={`w-2 h-2 rounded-full ${i === 2 ? 'bg-red-500 animate-ping' : 'bg-green-500'}`} />
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* 底部数据条 */}
            <div className="mt-auto h-16 rounded border border-purple-500/20 bg-purple-900/10 p-3 flex items-center gap-4">
                <div className="flex-1 space-y-2">
                    <div className="h-2 w-1/2 bg-slate-700 rounded" />
                    <div className="h-2 w-3/4 bg-slate-700 rounded" />
                </div>
                <div className="text-xl font-bold text-purple-400">89%</div>
            </div>
        </div>
    );
}
function SchoolInterfaceMockup() {
    return (
        <div className="h-full relative flex items-center justify-center">
            {/* 地球/网络节点模拟 */}
            <div className="absolute inset-0 flex items-center justify-center">
                {/* 修改点 1: text-emerald-900/20 -> text-emerald-500/30 (颜色由深绿变亮绿)
             修改点 2: strokeWidth={0.5} -> strokeWidth={1} (线条变粗一倍，更清晰)
             修改点 3: 增加 drop-shadow 让地球发光
          */}
                <Globe2
                    className="text-emerald-500/30 w-48 h-48 drop-shadow-[0_0_10px_rgba(16,185,129,0.2)]"
                    strokeWidth={1}
                />
            </div>

            {/* 浮动节点 */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeInOut" }}
                    className={clsx(
                        // 修改点 4: border-emerald-500/30 -> border-emerald-400/60 (边框更亮)
                        // 修改点 5: bg-slate-900 -> bg-slate-900/80 (背景稍微透一点)
                        "absolute bg-slate-900/80 backdrop-blur-sm border border-emerald-400/60 p-2 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.15)] flex items-center gap-2",
                        i === 1 ? "top-10 left-10" : i === 2 ? "bottom-16 right-10" : "top-1/2 right-4"
                    )}
                >
                    {/* 修改点 6: 点变为 emerald-400 */}
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_5px_currentColor]" />
                    <div className="space-y-1">
                        {/* 修改点 7: 条纹颜色变亮 bg-slate-700 -> bg-emerald-900/40 */}
                        <div className="w-12 h-1.5 bg-emerald-900/40 rounded" />
                        <div className="w-8 h-1.5 bg-emerald-900/40 rounded" />
                    </div>
                </motion.div>
            ))}

            {/* 中央连接线 */}
            {/* 修改点 8: 颜色变亮 */}
            <div className="absolute inset-0 border border-emerald-400/20 rounded-full scale-75 animate-pulse" />

            {/* 左下角文字 */}
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-emerald-500 font-bold">
                NODES: Connected
                <br />
                LATENCY: 12ms
            </div>
        </div>
    );
}