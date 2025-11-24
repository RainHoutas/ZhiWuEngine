"use client";

import { motion } from "framer-motion";

export default function StatsBar() {
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