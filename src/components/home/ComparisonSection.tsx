"use client";

import { motion } from "framer-motion";
import { X, Check, AlertTriangle, Zap, Shield, RotateCcw, BrainCircuit, Wallet } from "lucide-react";

export default function ComparisonSection() {
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