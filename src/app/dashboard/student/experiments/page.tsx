'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FlaskConical, Atom, Dna, Play, Search, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface Experiment {
    id: number;
    name: string;
    description: string;
    subject: string;
    coverImage?: string;
}

export default function ExperimentsPage() {
    const [experiments, setExperiments] = useState<Experiment[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        // 定义异步函数
        const fetchExperiments = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/experiments/list?subject=${filter}`, {
                    cache: 'no-store',
                    headers: { 'Cache-Control': 'no-cache' }
                });
                if (res.ok) {
                    // ✅ 修复 Unexpected any: 显式声明返回数据的类型
                    const data: Experiment[] = await res.json();
                    setExperiments(data);
                }
            } catch (error) {
                console.error("加载失败", error);
            } finally {
                setLoading(false);
            }
        };

        // ✅ 修复 Promise ignored: 使用 void 操作符
        // 这告诉 ESLint："我知道这是个 Promise，但我不需要在这里 await 它"
        void fetchExperiments();

    }, [filter]);

    const tabs = [
        { id: 'all', label: '全部', icon: Layers },
        { id: 'physics', label: '物理', icon: Atom },
        { id: 'chemistry', label: '化学', icon: FlaskConical },
        { id: 'biology', label: '生物', icon: Dna },
    ];

    return (
        <div className="space-y-8 pb-20">

            {/* 顶部标题 */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">实验大厅</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">选择一个课题，启动 WebGL 全息模拟</p>
                </div>

                {/* 筛选 Tabs */}
                <div className="flex p-1 bg-slate-100 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-white/10 overflow-x-auto max-w-full">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = filter === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setFilter(tab.id)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                                    isActive
                                        ? 'bg-white dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 shadow-sm'
                                        : 'text-slate-500 hover:text-slate-900 dark:hover:text-slate-200'
                                }`}
                            >
                                <Icon size={16} />
                                <span>{tab.label}</span>
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* 实验列表 */}
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-[320px] rounded-2xl bg-slate-100 dark:bg-white/5 animate-pulse border border-transparent dark:border-white/5" />
                    ))}
                </div>
            ) : experiments.length === 0 ? (
                <div className="py-32 text-center flex flex-col items-center justify-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-3xl bg-slate-50/50 dark:bg-slate-900/20">
                    <div className="w-16 h-16 rounded-full bg-slate-200 dark:bg-white/10 flex items-center justify-center mb-4 text-slate-400">
                        <Search size={32} />
                    </div>
                    <p className="text-slate-500 dark:text-slate-400 font-medium">该分类下暂无实验内容</p>
                </div>
            ) : (
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode='popLayout'>
                        {experiments.map((exp) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                key={exp.id}
                                className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-[380px]"
                            >
                                {/* 封面 */}
                                <div className="relative h-48 bg-slate-100 dark:bg-black/50 overflow-hidden shrink-0">
                                    {exp.coverImage ? (
                                        <Image
                                            src={exp.coverImage}
                                            alt={exp.name}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-slate-300 dark:text-slate-700">
                                            <FlaskConical size={48} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
                                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] font-bold uppercase bg-black/40 backdrop-blur-md border border-white/20 text-white tracking-wider">
                                        {exp.subject}
                                    </div>
                                </div>

                                {/* 内容 */}
                                <div className="p-5 flex-1 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 line-clamp-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                            {exp.name}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                                            {exp.description || "暂无简介，请直接进入实验探索。"}
                                        </p>
                                    </div>

                                    <Link
                                        href={`/dashboard/student/experiments/${exp.id}/play`}
                                        className="mt-4 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 font-medium hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-black transition-all group-hover:shadow-lg group-hover:shadow-cyan-500/20"
                                    >
                                        <Play size={18} fill="currentColor" />
                                        <span>开始实验</span>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
}