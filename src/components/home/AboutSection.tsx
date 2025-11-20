import React from "react";

const AboutSection: React.FC = () => {
    return (
        <section
            id="about"
            className="bg-slate-950 px-4 py-16 text-slate-100 md:py-20"
        >
            <div className="mx-auto max-w-5xl">
                <div className="mb-10 text-center">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        为什么需要
                        <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                            {" "}
                            知悟引擎{" "}
                        </span>
                        ？
                    </h2>
                    <p className="mt-3 text-sm text-slate-400 md:text-base">
                        面向中学实验教学中“设备不足、安全风险高、实践机会少、学情难跟踪”等痛点，
                        知悟引擎试图用一套「虚拟实验 + AI 辅导 + 数据分析」的一体化方案来重构课堂。
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                    {/* 卡片 1 */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-3 text-lg font-medium text-cyan-300">
                            ⚗️ 虚拟实验，降低成本与风险
                        </div>
                        <p className="text-sm text-slate-300">
                            基于 Unity WebGL 的高拟真虚拟实验室，
                            不受场地、设备、药品限制，学生可以随时随地反复练习关键实验步骤，
                            大幅降低安全风险与耗材成本。
                        </p>
                    </div>

                    {/* 卡片 2 */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-3 text-lg font-medium text-indigo-300">
                            🤖 AI 实验助手，实时陪伴
                        </div>
                        <p className="text-sm text-slate-300">
                            AI 不仅能回答「是什么」，更能结合学生当前操作记录解释「为什么」：
                            为什么失败、哪里不规范、下一步应该怎么做，让不会提问的学生也能得到个性化辅导。
                        </p>
                    </div>

                    {/* 卡片 3 */}
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-lg shadow-slate-900/60">
                        <div className="mb-3 text-lg font-medium text-emerald-300">
                            📊 学情分析，一目了然
                        </div>
                        <p className="text-sm text-slate-300">
                            系统自动记录学生在每一步实验中的操作、耗时与错误，
                            帮助教师从「结果评价」走向「过程评价」，
                            以数据为依据精准定位班级共性问题与个体薄弱环节。
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
