import React from "react";

const FeaturesSection: React.FC = () => {
    return (
        <section
            id="features"
            className="bg-slate-950 px-4 py-16 text-slate-100 md:py-20"
        >
            <div className="mx-auto max-w-5xl space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        技术架构与项目优势
                    </h2>
                    <p className="mt-2 text-sm text-slate-400 md:text-base">
                        知悟引擎从一开始就按照「可扩展、可维护、可复用」的工程思路设计，
                        便于后续扩展更多实验与接入多种 AI 模型。
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-2 text-sm font-medium text-cyan-300">
                            🧩 模块化实验 · 灵活接入
                        </div>
                        <p className="text-xs text-slate-300 md:text-sm">
                            每一个实验都是一个独立的 Unity WebGL 构建包，通过统一接口与后端进行数据交互，
                            可按章节、学科、难度进行组合与按需加载，降低前端首屏压力。
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-2 text-sm font-medium text-indigo-300">
                            🔗 Web 前端 + AI + 数据一体化
                        </div>
                        <p className="text-xs text-slate-300 md:text-sm">
                            基于 Next.js + Node.js + Prisma + MySQL 的后端能力，
                            将 Web 前端、虚拟实验与 AI 服务统一在同一套数据与权限体系下管理。
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-2 text-sm font-medium text-emerald-300">
                            📈 面向教学评价的完整闭环
                        </div>
                        <p className="text-xs text-slate-300 md:text-sm">
                            从“学生做实验”到“AI 过程反馈”到“学情可视化报告”，
                            形成一条完整的数据闭环，为教研与决策提供客观依据。
                        </p>
                    </div>
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-2 text-sm font-medium text-pink-300">
                            🏆 面向竞赛与落地双场景
                        </div>
                        <p className="text-xs text-slate-300 md:text-sm">
                            既可以作为创新创业 / 人工智能 + 教育方向的参赛作品展示，
                            也可以进一步打磨成真实学校可部署的教学工具。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
