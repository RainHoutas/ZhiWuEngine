"use client";

import PublicNavbar from "@/components/home/PublicNavbar";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { ButtonMovingBorder } from "@/components/ui/ButtonMovingBorder";
import { StreamTextEffect } from "@/components/ui/StreamTextEffect";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { RadarBackground } from "@/components/ui/RadarBackground";
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

            {/* ==================== 2. 数据展示 (基于商业书 4.1.2) ==================== */}
            <StatsBar />

            {/* ==================== 3. 核心价值选项卡 (基于商业书 1.3.1) ==================== */}
            <ValuePropositionTabs />

            {/* ==================== 4. 技术核心 (基于商业书 1.3.2) ==================== */}
            <TechCoreSection />

            <AiDemoSection />

            {/* ==================== 5. 痛点对比 (基于商业书 1.1) ==================== */}
            <ComparisonSection />

            {/* ==================== 6. 底部 CTA ==================== */}
            <CTASection />

            <Footer />
        </div>
    );
}

// --- 子组件拆分 ---

function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* 背景层保持不变... */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-10 pointer-events-none"></div>
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />
            </div>
            <RadarBackground />
            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial="hidden" animate="visible" variants={fadeInUp}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-cyan-500/30 backdrop-blur-sm mb-8"
                >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
                    <span className="text-xs font-mono text-cyan-400 tracking-wider">基于 Unity WebGL + GLM-4 深度打造</span>
                </motion.div>

                <motion.h1
                    initial="hidden" animate="visible" variants={fadeInUp}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
                >
                    知悟引擎
                    <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            重新定义虚拟实验
          </span>
                </motion.h1>

                <motion.p
                    initial="hidden" animate="visible" variants={fadeInUp}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    首创“三层情境感知”AI 辅导机制，融合高保真 3D 物理引擎。
                    让每一次实验都安全、精准、触手可及。
                </motion.p>

                <motion.div
                    initial="hidden" animate="visible" variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10"
                >
                    {/* 替换原来的 Link */}
                    <Link href="/login">
                        <ButtonMovingBorder>
                            🚀 立即启动引擎
                        </ButtonMovingBorder>
                    </Link>

                    <Link href="#tech" className="px-8 py-3 text-slate-400 hover:text-white font-medium transition-colors border-b border-transparent hover:border-white/20">
                        探索技术架构 &rarr;
                    </Link>
                </motion.div>
            </div>
        </section>
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
    // 2. 使用这个类型来定义 state
    const [activeTab, setActiveTab] = useState<TabType>("student");

    const content: Record<TabType, { title: string; desc: string; points: string[]; image: string }> = {
        student: {
            title: "虚拟预演 + 实体验证",
            desc: "不再担心打破试管或操作危险化学品。在知悟引擎中，你可以无限次重置实验，AI 导师随时解答你的“傻问题”，直到完全掌握原理。",
            points: ["零风险高危实验模拟", "个性化 AI 答疑", "游戏化探索体验"],
            image: "bg-gradient-to-br from-cyan-900/40 to-blue-900/20"
        },
        teacher: {
            title: "独创“双屏互动”教学管理",
            desc: "告别传统的“围观式”教学。教师端实时监控全班学生的操作进度与数据，精准定位遇到困难的学生，从繁琐的器材准备中解放出来。",
            points: ["实时学情监控看板", "一键分发/回收实验数据", "自动批改实验报告"],
            image: "bg-gradient-to-br from-purple-900/40 to-indigo-900/20"
        },
        school: {
            title: "极低门槛的普惠教育",
            desc: "无需购买昂贵的 VR 头显或高端工作站。基于 WebGL 技术，普通浏览器即可运行电影级画质实验，真正实现优质教育资源的普惠共享。",
            points: ["免安装跨平台部署", "基于 API 的低成本架构", "完整覆盖考纲实验"],
            image: "bg-gradient-to-br from-emerald-900/40 to-teal-900/20"
        }
    };

    // 3. 显式定义 tab 列表，确保 id 符合 TabType
    const tabs: { id: TabType; label: string; icon: string; sub: string }[] = [
        { id: "student", label: "我是学生", icon: "🎓", sub: "自主探究" },
        { id: "teacher", label: "我是教师", icon: "👩‍🏫", sub: "教学赋能" },
        { id: "school", label: "教育管理者", icon: "🏛️", sub: "降本增效" }
    ];

    return (
        <section className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">专为未来课堂设计</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">连接课前预习、课中互动与课后巩固的全链路解决方案。</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12">
                    {/* 左侧：控制栏 */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {tabs.map((item) => (
                            <button
                                key={item.id}
                                // 4. 这里直接使用 item.id，不需要 as any，因为 tabs 数组已经定义了类型
                                onClick={() => setActiveTab(item.id)}
                                className={clsx(
                                    "p-6 rounded-2xl text-left transition-all border",
                                    activeTab === item.id
                                        ? "bg-slate-800 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.1)]"
                                        : "bg-slate-900/50 border-white/5 hover:bg-slate-800 hover:border-white/20"
                                )}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="text-2xl">{item.icon}</div>
                                    <div>
                                        <div className={clsx("font-bold text-lg", activeTab === item.id ? "text-white" : "text-slate-300")}>
                                            {item.label}
                                        </div>
                                        <div className="text-sm text-slate-500">{item.sub}</div>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* 右侧：内容展示区 (使用 SpotlightCard) */}
                    <div className="lg:w-2/3">
                        <SpotlightCard className="h-full flex flex-col">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4 }}
                                className="h-full flex flex-col"
                            >
                                <div className={`h-64 w-full ${content[activeTab].image} rounded-2xl flex items-center justify-center border border-white/5 mb-6`}>
                      <span className="text-slate-300 font-mono text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                        Live Preview
                      </span>
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-4">{content[activeTab].title}</h3>
                                <p className="text-slate-400 leading-relaxed mb-8 flex-grow">
                                    {content[activeTab].desc}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {content[activeTab].points.map((point, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm font-medium text-cyan-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                            {point}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </SpotlightCard>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TechCoreSection() {
    // 内容来源：商业书 1.3.2 技术融合突破
    return (
        <section id="tech" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* 背景装饰 */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        内核技术：<span className="text-cyan-400">情境原生</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl">
                        区别于传统的“功能叠加”，我们实现了 3D 场景与 GLM-4 大模型的深度耦合。
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* 左侧：技术可视化 */}
                    <div className="relative aspect-square rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse-slow">
                        <div className="absolute inset-0 border border-blue-500/10 rounded-full scale-75"></div>
                        <div className="absolute inset-0 border border-purple-500/10 rounded-full scale-50"></div>

                        {/* 中心核心 */}
                        <div className="z-10 text-center">
                            <div className="text-5xl mb-2">🧠</div>
                            <div className="font-bold text-white">GLM-4-Flash</div>
                            <div className="text-xs text-slate-500">微调模型</div>
                        </div>

                        {/* 环绕卫星 - 三层感知 (商业书 1.3.2) */}
                        <div className="absolute top-10 left-1/2 -translate-x-1/2 px-4 py-2 bg-slate-900 border border-cyan-500/50 rounded-lg text-xs text-cyan-300 shadow-lg">
                            空间感知 (Unity Coordinates)
                        </div>
                        <div className="absolute bottom-20 right-10 px-4 py-2 bg-slate-900 border border-blue-500/50 rounded-lg text-xs text-blue-300 shadow-lg">
                            步骤感知 (State Machine)
                        </div>
                        <div className="absolute bottom-20 left-10 px-4 py-2 bg-slate-900 border border-purple-500/50 rounded-lg text-xs text-purple-300 shadow-lg">
                            错误感知 (Error Detection)
                        </div>
                    </div>

                    {/* 右侧：技术说明 */}
                    <div className="space-y-8">
                        <div className="group">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm">01</span>
                                三层情境感知机制
                            </h3>
                            <p className="text-slate-400 text-sm pl-11 border-l border-white/10 ml-4 py-2">
                                AI 不仅知道“这道题怎么做”，更知道你“现在正在做什么”。系统实时捕捉学生在 Unity 场景中的操作路径、空间位置与错误行为，提供高达 89% 相关性的指导。
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                                <span className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-sm">02</span>
                                高保真物理/化学模拟
                            </h3>
                            <p className="text-slate-400 text-sm pl-11 border-l border-white/10 ml-4 py-2">
                                集成 NVIDIA Flex 粒子技术与电磁场算法。模拟化学反应速率、电路电流变化、牛顿力学碰撞，让每一帧画面都符合科学定律。
                            </p>
                        </div>

                        <div className="group">
                            <h3 className="text-xl font-bold text-white flex items-center gap-3 mb-2">
                                <span className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm">03</span>
                                云端轻量化渲染
                            </h3>
                            <p className="text-slate-400 text-sm pl-11 border-l border-white/10 ml-4 py-2">
                                通过纹理压缩与代码剔除优化，无需下载 2GB 的客户端。在 Chrome 浏览器中打开即用，从百元级平板到高性能 PC 均可流畅运行。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ComparisonSection() {
    // 内容来源：商业书 1.1 背景与痛点
    return (
        <section className="py-24 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-white mb-12">为什么要改变？</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* 传统方式 */}
                    <div className="p-8 rounded-3xl border border-red-500/10 bg-gradient-to-b from-red-900/10 to-transparent">
                        <h3 className="text-xl font-bold text-red-400 mb-6 flex items-center gap-2">
                            <span className="text-2xl">❌</span> 传统实验教学痛点
                        </h3>
                        <ul className="space-y-4 text-slate-400">
                            <li className="flex gap-3">
                                <span className="text-red-500/50">●</span>
                                <span><strong className="text-slate-300">高风险：</strong>强酸强碱、高压电等高危实验难以在课堂开展。</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-500/50">●</span>
                                <span><strong className="text-slate-300">高成本：</strong>精密仪器昂贵，损耗率高，农村学校难以普及。</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-500/50">●</span>
                                <span><strong className="text-slate-300">不可逆：</strong>实验试剂一旦混合无法复原，学生缺乏试错机会。</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-red-500/50">●</span>
                                <span><strong className="text-slate-300">指导难：</strong>一位老师面对 50 名学生，难以顾及每个人的操作细节。</span>
                            </li>
                        </ul>
                    </div>

                    {/* 知悟引擎 */}
                    <div className="p-8 rounded-3xl border border-green-500/10 bg-gradient-to-b from-green-900/10 to-transparent relative overflow-hidden">
                        {/* 装饰光 */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 blur-2xl rounded-full" />

                        <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                            <span className="text-2xl">✅</span> 知悟引擎解决方案
                        </h3>
                        <ul className="space-y-4 text-slate-300">
                            <li className="flex gap-3">
                                <span className="text-green-500">●</span>
                                <span><strong className="text-white">绝对安全：</strong>在虚拟空间模拟爆炸与腐蚀，零风险掌握危险操作。</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500">●</span>
                                <span><strong className="text-white">无限试错：</strong>一键重置实验环境，鼓励学生探索“如果这样做会怎样”。</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500">●</span>
                                <span><strong className="text-white">智能导师：</strong>AI 24小时在线，基于学生当前步骤提供苏格拉底式引导。</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-green-500">●</span>
                                <span><strong className="text-white">数据闭环：</strong>自动生成实验报告与能力画像，学习效果可视化。</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
function AiDemoSection() {
    return (
        <section className="py-20 bg-slate-950 relative border-t border-white/5">
            <div className="max-w-5xl mx-auto px-6">
                <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-10 relative overflow-hidden shadow-2xl">

                    {/* 顶部简单的 macOS 风格红绿灯装饰，增加窗口感 */}
                    <div className="flex gap-2 mb-8 border-b border-white/5 pb-4">
                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                        <div className="ml-4 text-xs text-slate-500 font-mono">zhiwu-engine-ai — bash — 80x24</div>
                    </div>

                    {/* 模拟聊天窗口界面 */}
                    <div className="space-y-6 font-mono text-sm md:text-base">

                        {/* 用户提问 */}
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                                User
                            </div>
                            <div className="text-slate-300 pt-1">
                                我刚才把小车的初始高度设为了 0.5m，为什么测出来的加速度还是不对？
                            </div>
                        </div>

                        {/* AI 回答 */}
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-cyan-600 flex items-center justify-center text-white font-bold text-xs shrink-0 relative">
                                AI
                                {/* AI 头像的小绿点状态 */}
                                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-slate-900 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                 </span>
                            </div>

                            <div className="text-cyan-100/90 pt-1 w-full">
                                <div className="text-xs text-cyan-500 mb-2 flex items-center gap-2 opacity-70">
                                    ⚡ Thinking Process...
                                </div>

                                {/* 使用新的 StreamTextEffect 组件 */}
                                <StreamTextEffect
                                    text="检测到操作日志：你在 10:02 将木块垫高了 5cm，导致斜面实际倾角发生变化（θ' > θ）。根据牛顿第二定律 a = g * sinθ，你需要重新测量角度。建议：点击右侧工具栏的【量角器】重新读取数据。"
                                    speed={40} // 打字速度，越小越快
                                    loop={true}
                                    delay={3000} // 打完后停留3秒
                                    cursorClassName="bg-cyan-400 h-4 w-2 rounded-sm" // 自定义光标样式
                                />
                            </div>
                        </div>

                    </div>
                </div>

                <p className="text-center text-slate-500 mt-6 text-sm">
                    * 演示：基于 GLM-4 的情境感知 AI 实时反馈
                </p>
            </div>
        </section>
    );
}
function CTASection() {
    return (
        <section className="py-32 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-cyan-900/20"></div>
            <div className="relative z-10 max-w-3xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-white mb-6">准备好开启未来实验室了吗？</h2>
                <p className="text-slate-400 mb-10 text-lg">
                    加入数千名师生的行列，体验 WebGL 与 AI 带来的教育变革。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/register" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-cyan-50 transition-colors">
                        免费注册账号
                    </Link>
                    <Link href="/contact" className="px-8 py-4 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/10 transition-colors">
                        联系商务演示
                    </Link>
                </div>
            </div>
        </section>
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