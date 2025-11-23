"use client";

import PublicNavbar from "@/components/home/PublicNavbar";
import Link from "next/link";
import { useState, useEffect} from "react";
import { ButtonMovingBorder } from "@/components/ui/ButtonMovingBorder";
import { StreamTextEffect } from "@/components/ui/StreamTextEffect";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { RadarBackground } from "@/components/ui/RadarBackground";
import { motion, useScroll, useTransform ,AnimatePresence} from "framer-motion";
import {
    Cpu,
    Layers,
    Zap,
    Activity,
    Database,
    Network,
    CheckCircle2,
    Beaker,
    Users,
    Building2,
    BarChart3,
    Globe2,
    LucideIcon,
    ArrowRight,
    Play,
    Sparkles,
    Bot,
    User,
    Scan,
    Search,
    AlertTriangle,
    X, Check,  Shield, RotateCcw, BrainCircuit, Wallet, Rocket, Star
} from "lucide-react";
import clsx from "clsx";

// 动画配置
const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
};

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden font-sans">
            <PublicNavbar />

            {/* ==================== 1. HERO 区域 ==================== */}
            <HeroSection />

            {/* ==================== 2. 数据展示 ==================== */}
            <StatsBar />

            {/* ==================== 3. 核心价值选项卡  ==================== */}
            <ValuePropositionTabs />

            {/* ==================== 4. 技术核心  ==================== */}
            <TechCoreSection />

            <AiDemoSection />

            {/* ==================== 5. 痛点对比  ==================== */}
            <ComparisonSection />

            {/* ==================== 6. 底部 CTA ==================== */}
            <CTASection />

            <Footer />
        </div>
    );
}

// --- 子组件拆分 ---

function HeroSection() {
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

function StatsBar() {
    // 数据来源：商业书 4.1.2 预期应用效果 & 1.3.3 价值定位
    const stats = [
        { label: "AI 情境相关性", value: "89%", desc: "精准理解实验步骤与错误" },
        { label: "设备适配率", value: "90%+", desc: "WebGL 免安装，低配电脑流畅运行" },
        { label: "部署成本", value: "1/3", desc: "相比同类竞品大幅降低" },
        { label: "核心实验覆盖", value: "128+", desc: "紧扣国家中学课程标准" },
    ];

    return (
        <section className="py-10 border-y border-white/5 bg-slate-900/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, idx) => (
                    <div key={idx} className="text-center group">
                        <div className="text-3xl md:text-4xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                            {stat.value}
                        </div>
                        <div className="text-sm font-bold text-slate-400 mb-1">{stat.label}</div>
                        <div className="text-xs text-slate-500">{stat.desc}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
type TabType = "student" | "teacher" | "school";
function ValuePropositionTabs() {
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
                                {/* 卡片光效背景 */}
                                <div className={clsx(
                                    "absolute -inset-1 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 blur-xl bg-gradient-to-r",
                                    activeTab === 'student' ? "from-cyan-500 to-blue-600" :
                                        activeTab === 'teacher' ? "from-purple-500 to-pink-600" :
                                            "from-emerald-500 to-teal-600"
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
                <Globe2 className="text-emerald-900/20 w-48 h-48" strokeWidth={0.5} />
            </div>

            {/* 浮动节点 */}
            {[1, 2, 3].map((i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, delay: i, repeat: Infinity, ease: "easeInOut" }}
                    className={clsx(
                        "absolute bg-slate-900 border border-emerald-500/30 p-2 rounded-lg shadow-lg flex items-center gap-2",
                        i === 1 ? "top-10 left-10" : i === 2 ? "bottom-16 right-10" : "top-1/2 right-4"
                    )}
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <div className="space-y-1">
                        <div className="w-12 h-1.5 bg-slate-700 rounded" />
                        <div className="w-8 h-1.5 bg-slate-700 rounded" />
                    </div>
                </motion.div>
            ))}

            {/* 中央连接线 */}
            <div className="absolute inset-0 border border-emerald-500/10 rounded-full scale-75 animate-pulse" />
            <div className="absolute bottom-4 left-4 font-mono text-[10px] text-emerald-600">
                NODES: Connected
                <br />
                LATENCY: 12ms
            </div>
        </div>
    );
}

function TechCoreSection() {
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

function ComparisonSection() {
    const features = [
        {
            title: "安全性",
            old: "高危隐患",
            oldDesc: "接触强酸/高压电/易燃物，安全事故频发。",
            new: "绝对安全",
            newDesc: "虚拟仿真环境，模拟爆炸零伤害，胆大心细。",
            icon: Shield
        },
        {
            title: "容错率",
            old: "不可逆转",
            oldDesc: "试剂混合无法复原，操作失误即导致实验失败。",
            new: "无限重置",
            newDesc: "一键时光倒流，鼓励学生大胆试错，探索边界。",
            icon: RotateCcw
        },
        {
            title: "教学指导",
            old: "顾此失彼",
            oldDesc: "1位老师难以同时纠正50名学生的细微动作。",
            new: "AI 1v1",
            newDesc: "三层情境感知，每个学生都有专属 AI 助教。",
            icon: BrainCircuit
        },
        {
            title: "建设成本",
            old: "极高昂",
            oldDesc: "精密仪器采购+维护+耗材，百万级资金投入。",
            new: "普惠化",
            newDesc: "仅需普通电脑/平板，软件定义硬件，成本降90%。",
            icon: Wallet
        }
    ];

    return (
        <section className="py-32 bg-slate-950 relative overflow-hidden">
            {/* 背景分割线 */}
            <div className="absolute inset-0 flex">
                <div className="w-1/2 h-full bg-slate-900/20 border-r border-white/5" />
                <div className="w-1/2 h-full bg-slate-950" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        <span className="text-slate-500 line-through decoration-red-500/50 decoration-2 mr-4 opacity-50">传统实验</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              VS 虚拟引擎
            </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        从“昂贵高危”的物理教具，进化为“智能无限”的数字资产。
                    </p>
                </div>

                {/* 对比卡片列表 */}
                <div className="grid gap-6">
                    {features.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="grid grid-cols-1 md:grid-cols-11 gap-4 items-stretch group"
                        >

                            {/* 左侧：旧时代 (Legacy) */}
                            <div className="md:col-span-5 relative p-6 bg-slate-900/50 border border-white/5 rounded-2xl md:rounded-r-none md:border-r-0 flex flex-col justify-center transition-colors group-hover:bg-red-950/10 group-hover:border-red-500/20">
                                <div className="flex items-start justify-between mb-2">
                                    <h3 className="text-lg font-bold text-slate-400 group-hover:text-red-400 transition-colors flex items-center gap-2">
                                        <X size={18} className="text-slate-600 group-hover:text-red-500" />
                                        {item.old}
                                    </h3>
                                </div>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    {item.oldDesc}
                                </p>
                                {/* 装饰：旧电视扫描线 */}
                                <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.3)_50%)] bg-[size:100%_4px] opacity-0 group-hover:opacity-20 pointer-events-none rounded-2xl" />
                            </div>

                            {/* 中间：VS 连接器 */}
                            <div className="hidden md:flex md:col-span-1 items-center justify-center relative">
                                <div className="w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent absolute top-0 left-1/2 -translate-x-1/2" />
                                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-white/10 flex items-center justify-center z-10 relative shadow-xl group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-500">
                                    <item.icon size={20} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                                </div>
                            </div>

                            {/* 右侧：新纪元 (Next Gen) */}
                            <div className="md:col-span-5 relative p-6 bg-slate-800/20 border border-white/10 rounded-2xl md:rounded-l-none md:border-l-0 flex flex-col justify-center backdrop-blur-sm transition-all duration-500 group-hover:bg-cyan-950/20 group-hover:border-cyan-500/30">
                                {/* 只有右侧有高亮光晕 */}
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                                            <Check size={18} className="text-emerald-500 group-hover:text-cyan-400" />
                                            {item.new}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300">
                                        {item.newDesc}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

                {/* 底部总结 */}
                <div className="mt-20 p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4">不仅是体验的升级，更是<span className="text-cyan-400">效率的革命</span></h3>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center mt-8">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">90<span className="text-sm text-cyan-500">%</span></div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">成本降低</div>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">0<span className="text-sm text-red-500">Risk</span></div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">安全隐患</div>
                            </div>
                            <div className="w-px h-12 bg-white/10 hidden sm:block" />
                            <div className="text-center">
                                <div className="text-3xl font-bold text-white mb-1">24<span className="text-sm text-slate-500">/7</span></div>
                                <div className="text-xs text-slate-500 uppercase tracking-wider">AI 随时待命</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
function AiDemoSection() {
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

function CTASection() {
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

                {/* 底部信任背书 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-white/5 flex flex-col items-center gap-4"
                >
                    <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">Trusted by innovative teams</p>
                    <div className="flex gap-8 opacity-40 grayscale mix-blend-screen">
                        {/* 简单的 Logo 占位符 */}
                        <div className="h-8 w-24 bg-white/20 rounded" />
                        <div className="h-8 w-24 bg-white/20 rounded" />
                        <div className="h-8 w-24 bg-white/20 rounded" />
                        <div className="h-8 w-24 bg-white/20 rounded hidden sm:block" />
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

function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-white/10 py-12 text-slate-500 text-sm">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-cyan-600 rounded-md"></div>
                    <span className="font-bold text-slate-300">知悟引擎</span>
                </div>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white">关于我们</a>
                    <a href="#" className="hover:text-white">产品文档</a>
                    <a href="#" className="hover:text-white">隐私协议</a>
                </div>
                <p>© 2025 Zhiwu Engine. All rights reserved.</p>
            </div>
        </footer>
    );
}