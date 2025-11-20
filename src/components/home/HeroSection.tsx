"use client";

import React from "react";

const HeroSection: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative  min-h-[80vh] overflow-hidden text-white "
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw]
            bg-cyan-400/30 blur-[200px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw]
            bg-indigo-400/30 blur-[220px] rounded-full" />
            </div>


            <div className="relative mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-4 py-16 md:flex-row md:items-center md:gap-10 md:py-24">
                {/* 左侧文案 */}
                <div className="flex-1 space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-slate-900/60 px-3 py-1 text-xs text-cyan-300 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        新一代 · AI 赋能的中学虚拟实验平台
                    </div>

                    <h1 className="text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl lg:text-6xl">
                        <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-300 bg-clip-text text-transparent">
                            知悟引擎
                        </span>
                        <span className="mt-3 block text-slate-100">
                            让每一位学生都能
                            <span className="text-cyan-300"> 做实验 · 懂原理 · 看数据</span>
                        </span>
                    </h1>

                    <p className="max-w-xl text-sm text-slate-300 md:text-base">
                        基于 Unity WebGL 的云端虚拟实验室，融合 AI 实验助手与学情分析引擎，
                        为中学物理、化学、生物提供安全、低成本、高可视化的实验教学新范式。
                    </p>

                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#experiments"
                            className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
                        >
                            🚀 立即体验示例实验
                        </a>
                        <a
                            href="#ai-demo"
                            className="rounded-xl border border-slate-600/80 bg-slate-900/60 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400/70"
                        >
                            🤖 查看 AI 助手效果
                        </a>
                        <a
                            href="#analytics"
                            className="rounded-xl border border-transparent px-5 py-2.5 text-sm font-medium text-slate-300 underline/50 hover:text-cyan-300"
                        >
                            📊 学情分析可视化
                        </a>
                    </div>

                    <div className="flex flex-wrap gap-6 pt-2 text-xs text-slate-400 md:text-sm">
                        <div>
                            <div className="text-cyan-300">· 支持多学科实验</div>
                            <div>物理 / 化学 / 生物 实验模块化接入</div>
                        </div>
                        <div>
                            <div className="text-cyan-300">· AI 实时答疑</div>
                            <div>步骤纠错 / 原理解释 / 现象分析</div>
                        </div>
                    </div>
                </div>

                {/* 右侧“拟仪表盘”预览卡片 */}
                <div className="mt-10 flex-1 md:mt-0">
                    <div className="relative mx-auto max-w-md rounded-3xl border border-slate-700/60 bg-slate-900/80 p-5 shadow-2xl shadow-cyan-500/20 backdrop-blur">
                        {/* 顶部标签 */}
                        <div className="mb-4 flex items-center justify-between text-xs text-slate-400">
                            <span className="rounded-full bg-slate-800/80 px-3 py-1 text-[11px]">
                                实验课堂 · 实时监控
                            </span>
                            <span className="flex items-center gap-1">
                                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                                在线人数：32
                            </span>
                        </div>

                        {/* 中间三块“效果预览” */}
                        <div className="space-y-3">
                            {/* WebGL 预览占位 */}
                            <div className="h-32 rounded-2xl border border-slate-700/70 bg-gradient-to-br from-slate-800 to-slate-900 p-3">
                                <div className="mb-2 flex items-center justify-between text-[11px] text-slate-300">
                                    <span>铁丝在氧气中燃烧 · 虚拟实验</span>
                                    <span className="text-cyan-300">WebGL 运行中</span>
                                </div>
                                <div className="flex h-[72px] items-center justify-center rounded-xl border border-dashed border-slate-600/80 text-[11px] text-slate-400">
                                    这里实际嵌入 Unity WebGL 实验画面（Demo）
                                </div>
                            </div>

                            {/* AI 对话预览 */}
                            <div className="grid gap-3 md:grid-cols-2">
                                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3 text-[11px]">
                                    <div className="mb-1 text-slate-300">AI 实验助手</div>
                                    <div className="space-y-1 text-slate-400">
                                        <div className="rounded-lg bg-slate-800/80 p-2">
                                            学生：为什么我加热铁丝后现象不明显？
                                        </div>
                                        <div className="rounded-lg bg-cyan-500/10 p-2 text-cyan-100">
                                            AI：你加热时间不足 5 秒，未达到反应所需温度。
                                            建议延长加热时间至 8～10 秒，并观察火星四射等现象。
                                        </div>
                                    </div>
                                </div>

                                {/* 学情小卡片 */}
                                <div className="rounded-2xl border border-slate-700/70 bg-slate-900/80 p-3 text-[11px] text-slate-300">
                                    <div className="mb-2 flex items-center justify-between">
                                        <span>班级学情概览</span>
                                        <span className="text-slate-400">实时更新</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">实验完成率</span>
                                            <span className="text-cyan-300">86%</span>
                                        </div>
                                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                                            <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">高频错误 · 步骤 3</span>
                                            <span className="text-amber-300">32%</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span className="text-slate-400">需要重点辅导学生</span>
                                            <span className="text-pink-300">5 人</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 底部标注 */}
                        <div className="mt-4 flex items-center justify-between text-[11px] text-slate-500">
                            <span>· Demo 仅为展示效果，实际数据来自真实操作日志 ·</span>
                            <span className="text-slate-400">知悟引擎 · v1.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
