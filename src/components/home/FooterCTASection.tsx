import React from "react";

const FooterCTASection: React.FC = () => {
    return (
        <section className="bg-slate-950 px-4 pb-10 pt-12 text-slate-100">
            <div className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 p-6 text-center shadow-2xl shadow-slate-900/80">
                <h2 className="text-xl font-semibold md:text-2xl">
                    准备好体验{" "}
                    <span className="bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                        知悟引擎
                    </span>{" "}
                    了吗？
                </h2>
                <p className="mt-2 text-sm text-slate-400 md:text-base">
                    让虚拟实验、AI 辅导与数据驱动评价真正走进中学课堂。
                    你可以用它做课堂展示、比赛答辩，或者作为未来教学改革的一块实验田。
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-3">
                    <a
                        href="/dashboard"
                        className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400"
                    >
                        🚀 进入平台 Demo
                    </a>
                    <a
                        href="#hero"
                        className="rounded-xl border border-slate-700 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur transition hover:-translate-y-0.5 hover:border-cyan-400"
                    >
                        📘 返回顶部
                    </a>
                </div>
                <div className="mt-4 text-xs text-slate-500">
                    © {new Date().getFullYear()} 知悟引擎 · AI 中学实验教学平台
                </div>
            </div>
        </section>
    );
};

export default FooterCTASection;
