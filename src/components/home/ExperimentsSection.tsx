import React from "react";

const experiments = [
    {
        tag: "化学 · 氧化还原",
        title: "铁丝在氧气中燃烧虚拟实验",
        desc: "模拟点燃、加热、燃烧、生成氧化物的全过程，学生可多次尝试，观察现象并对比不同操作参数的影响。",
        highlight: "支持记录加热时长、点燃次数、现象描述等关键行为，用于后续 AI 分析与学情统计。",
    },
    {
        tag: "物理 · 力学",
        title: "单摆周期测量实验",
        desc: "在线调整摆长、质量、初始角度等参数，实时观察周期变化，引导学生理解 T²–L 之间的近似线性关系。",
        highlight: "自动采集每次测量的周期数据，生成拟合曲线，并交给 AI 帮助学生解读偏差来源。",
    },
    {
        tag: "生物 · 显微观察",
        title: "植物细胞切片虚拟观察",
        desc: "模拟显微镜的调焦、移动、放大过程，训练学生掌握标准显微观察步骤与视野选择方法。",
        highlight: "记录调焦次数、视野停留区域等行为，用于分析学生是否掌握显微操作要领。",
    },
];

const ExperimentsSection: React.FC = () => {
    return (
        <section
            id="experiments"
            className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 text-slate-100 md:py-20"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            精选示例实验
                        </h2>
                        <p className="mt-2 max-w-xl text-sm text-slate-400 md:text-base">
                            每个实验都是一个独立的 Unity WebGL 模块，可按需加载、灵活组合。
                            以下为部分示例实验展示，适合集成到课堂或比赛 Demo 中。
                        </p>
                    </div>
                    <div className="text-xs text-slate-400">
                        实际系统中可扩展更多学科与章节 · 支持模块化接入
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {experiments.map((exp) => (
                        <div
                            key={exp.title}
                            className="group flex flex-col rounded-2xl border border-slate-800/80 bg-slate-900/80 p-4 shadow-lg shadow-slate-900/60 transition hover:-translate-y-1 hover:border-cyan-400/60 hover:shadow-cyan-500/20"
                        >
                            {/* 上方：预留 WebGL 预览区域 */}
                            <div className="mb-3 h-36 rounded-xl border border-dashed border-slate-700/80 bg-gradient-to-br from-slate-800 to-slate-900 text-[11px] text-slate-400 flex items-center justify-center text-center px-2">
                                这里可以嵌入对应实验的 Unity WebGL 画面（或预览截图）
                            </div>

                            <div className="mb-1 text-xs text-cyan-300">{exp.tag}</div>
                            <div className="mb-2 text-sm font-medium md:text-base">
                                {exp.title}
                            </div>
                            <p className="mb-2 flex-1 text-xs text-slate-300 md:text-sm">
                                {exp.desc}
                            </p>
                            <p className="mt-1 rounded-lg bg-slate-800/80 p-2 text-[11px] text-cyan-200">
                                💡 {exp.highlight}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperimentsSection;
