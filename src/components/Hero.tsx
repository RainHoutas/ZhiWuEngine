export default function Hero() {
    return (
        <section className="relative z-10 text-center py-40 px-6">
            {/* 主标题 */}
            <h1 className="text-6xl font-extrabold text-white drop-shadow-[0_0_20px_rgba(120,120,255,0.6)]">
                知悟引擎 · AI 虚拟实验教学平台
            </h1>

            {/* 副标题 */}
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
                以 AI 赋能中学实验教学——智能指导、实时纠错、实验报告生成、学情分析一体化。
            </p>

            {/* 按钮 */}
            <div className="mt-10 flex justify-center">
                <a
                    href="/experiments"
                    className="px-8 py-3 rounded-full text-lg font-semibold text-white
                     bg-gradient-to-r from-purple-600 to-blue-600
                     shadow-[0_0_15px_rgba(120,120,255,0.5)]
                     hover:shadow-[0_0_25px_rgba(120,120,255,0.9)]
                     transition-all duration-300"
                >
                    开始探索 →
                </a>

            </div>
        </section>
    );
}
