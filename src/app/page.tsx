import Background from "@/components/Background";
import Hero from "@/components/Hero";
import ExperimentCard from "@/components/ExperimentCard";
import type { Experiment } from "@/types/experiment";


async function getExperiments(): Promise<Experiment[]> {
    const res = await fetch("http://localhost:3000/api/experiments", {
        cache: "no-store",
    });

    if (!res.ok) return [];

    return res.json();
}

export default async function Home() {
    // 🔥 从后端加载真实数据
    const experiments = await getExperiments();

    return (
        <main className="min-h-screen relative bg-transparent text-white">
            <Background />

            <div className="relative z-10 max-w-6xl mx-auto px-6 pb-24">
                {/* 顶部 Hero */}
                <Hero />

                {/* 实验大厅区域 */}
                <section className="mt-16">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-semibold">实验大厅</h2>
                        <span className="text-sm text-gray-400">
              当前可用实验：{experiments.length} 个
            </span>
                    </div>

                    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {experiments.map((exp: Experiment) => (
                            <ExperimentCard
                                key={exp.id}
                                name={exp.name}
                                subject={exp.subject}
                                description={exp.description ?? ""}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
}
