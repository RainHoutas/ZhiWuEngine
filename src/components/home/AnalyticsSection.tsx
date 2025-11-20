import React from "react";

const AnalyticsSection: React.FC = () => {
    return (
        <section
            id="analytics"
    className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-16 text-slate-100 md:py-20"
    >
    <div className="mx-auto max-w-6xl">
    <div className="mb-8 text-center">
    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        学情分析 · 让数据说话
    </h2>
    <p className="mt-2 text-sm text-slate-400 md:text-base">
        通过对实验过程数据的采集与可视化分析，知悟引擎帮助教师从「结果评分」走向「过程诊断」，
                        为精准教学和分层辅导提供依据。
                    </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
        {/* 卡片 1：完成率 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
    <div className="mb-2 text-sm font-medium text-cyan-300">
                            ✅ 实验完成率概览
    </div>
    <p className="mb-3 text-xs text-slate-300">
        快速查看班级整体完成情况，筛选未完成或多次失败的学生，帮助教师有针对性地进行补救教学。
                        </p>
                        <div className="flex items-center justify-between text-xs text-slate-300">
        <span>完成率</span>
        <span className="text-emerald-300">86%</span>
        </div>
        <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-800">
    <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-emerald-400 to-cyan-400" />
        </div>
        <div className="mt-3 text-[11px] text-slate-400">
        支持按班级、实验、时间段筛选，查看不同维度的完成统计。
                        </div>
                        </div>

    {/* 卡片 2：错误分布 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
    <div className="mb-2 text-sm font-medium text-indigo-300">
                            ⚠️ 高频错误步骤分布
    </div>
    <p className="mb-3 text-xs text-slate-300">
        从“哪里做错了”入手，帮助教师发现实验教学中的共性难点，
                            精准调整讲解重点与板书设计。
                        </p>
                        <div className="space-y-2 text-[11px] text-slate-300">
    <div className="flex items-center justify-between">
        <span>步骤 3 · 加热时长不足</span>
    <span className="text-amber-300">32%</span>
        </div>
        <div className="flex items-center justify-between">
        <span>步骤 4 · 现象记录不完整</span>
    <span className="text-amber-300">24%</span>
        </div>
        <div className="flex items-center justify-between">
        <span>步骤 1 · 器材选择错误</span>
    <span className="text-amber-300">15%</span>
        </div>
        </div>
        <div className="mt-3 text-[11px] text-slate-400">
        错误分布可导出为报告，为教研组备课与校本课程开发提供数据支持。
                        </div>
                        </div>

    {/* 卡片 3：学生画像 */}
    <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
    <div className="mb-2 text-sm font-medium text-emerald-300">
                            👤 学生实验画像
    </div>
    <p className="mb-3 text-xs text-slate-300">
        综合操作规范度、完成效率、错误类型、提问情况等多维度指标，
                            为每一位学生生成「实验学习画像」。
                        </p>
                        <ul className="space-y-2 text-[11px] text-slate-300">
        <li>· 操作规范度：★★★★☆</li>
    <li>· 实验完成效率：★★★☆☆</li>
    <li>· 安全意识：★★★★★</li>
    <li>· 主动提问次数：偏低（建议引导）</li>
    </ul>
    <div className="mt-3 text-[11px] text-slate-400">
        面向家长会、学期评价与综合素质评价提供可视化支撑材料。
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>
);
};

export default AnalyticsSection;
