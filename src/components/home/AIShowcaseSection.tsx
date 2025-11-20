import React from "react";

const AIShowcaseSection: React.FC = () => {
    return (
        <section
            id="ai-demo"
    className="bg-slate-950 px-4 py-16 text-slate-100 md:py-20"
    >
    <div className="mx-auto max-w-5xl">
    <div className="mb-8 text-center">
    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
        AI 实验助手 · 实时解答每一个“为什么”
                    </h2>
                    <p className="mt-2 text-sm text-slate-400 md:text-base">
        基于学生当前实验进度、操作记录与错误日志，AI 不再只给“标准答案”，
                        而是给出针对性的分析与引导建议，像一位随时在线的实验导师。
                    </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
        {/* 左侧：对话示例 */}
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4 shadow-lg shadow-slate-900/60">
    <div className="mb-3 text-sm font-medium text-cyan-300">
                            💬 学生 × AI 对话示例
    </div>
    <div className="space-y-3 text-sm text-slate-200">
    <div className="rounded-xl bg-slate-800/80 p-3">
    <div className="mb-1 text-xs text-slate-400">学生 · S01</div>
    <div>
    老师，我已经点燃铁丝了，但是没有看到明显的火星，算是失败了吗？
                                </div>
                                </div>
                                <div className="rounded-xl bg-cyan-500/10 p-3">
    <div className="mb-1 text-xs text-cyan-300">AI 实验助手</div>
    <div>
    你本次加热时长为 <span className="text-cyan-200">4.2
    秒</span>，
    低于推荐的 <span className="text-cyan-200">8～10 秒</span>。
    由于温度不足，燃烧现象不明显。建议：
                                    <br />
                                    1）适当延长加热时间；
                                    <br />
                                    2）保证酒精灯火焰处于蓝色外焰区域；
                                    <br />
                                    3）注意观察是否有火星四射和黑色固体生成。
                                </div>
                                </div>
                                <div className="rounded-xl bg-slate-800/80 p-3">
    <div className="mb-1 text-xs text-slate-400">学生 · S01</div>
    <div>原来是时间太短了，下次我会按提示来操作，谢谢！</div>
    </div>
    </div>
    </div>

    {/* 右侧：AI 能力说明 */}
    <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg shadow-slate-900/60">
    <div className="text-sm font-medium text-indigo-300">
                            🔍 AI 能做什么？
                        </div>
                        <ul className="space-y-2 text-sm text-slate-200">
        <li>· 结合「操作日志」分析学生哪一步出现了偏差，而不是只看最终结果。</li>
    <li>· 用自然语言解释实验原理、现象成因与安全规范。</li>
    <li>· 针对不同水平的学生给出不同难度的讲解与追问。</li>
    <li>· 自动归纳班级常见问题，反向支持教师改进教学设计。</li>
    </ul>

    <div className="mt-4 rounded-xl bg-slate-950/80 p-4 text-xs text-slate-300">
                            🎯 <span className="text-cyan-300">展示建议：</span> 在实际演示中，
    你可以预先准备几段「学生操作记录 + AI 回复」的样例，
                            通过按钮切换不同学科和难度，让评委/老师直观感受到 AI 的“懂学生”。
                        </div>
                        </div>
                        </div>
                        </div>
                        </section>
);
};

export default AIShowcaseSection;
