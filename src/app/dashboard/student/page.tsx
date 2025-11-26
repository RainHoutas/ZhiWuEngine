'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, BookOpen, Trophy, Activity, LucideIcon } from 'lucide-react';

// 用户接口
interface User {
    fullName: string;
    email: string;
}

// 🔥 1. 修改接口：不再传入复杂的颜色变量，而是直接传入具体的样式类名
interface StatCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    // 既然颜色是固定的，我们把样式逻辑封装在组件内部，或者传入“类型”
    variant: "blue" | "purple" | "green";
    delay: number;
}

export default function StudentDashboard() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await fetch('/api/auth/me', {
                    cache: 'no-store',
                    headers: { 'Cache-Control': 'no-cache' }
                });
                if (res.ok) {
                    const data = await res.json();
                    setUser(data);
                }
            } catch (error) {
                console.error("Failed to fetch user", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="space-y-8">

            {/* 欢迎头部 */}
            <header className="flex flex-col gap-2">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
                >
                    {loading ? (
                        <span className="animate-pulse bg-slate-200 dark:bg-slate-800 text-transparent rounded">加载中...</span>
                    ) : (
                        <>欢迎回来，<span className="text-cyan-600 dark:text-cyan-400">{user?.fullName || '同学'}</span> 👋</>
                    )}
                </motion.h1>
                <p className="text-slate-500 dark:text-slate-400">
                    今天也是探索真理的一天。准备好开始实验了吗？
                </p>
            </header>

            {/* 核心指标卡片 - 调用变简单了 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="进行中的实验"
                    value="3"
                    icon={Activity}
                    variant="blue" // 直接传变体名称
                    delay={0.1}
                />
                <StatCard
                    title="已完成课程"
                    value="12"
                    icon={BookOpen}
                    variant="purple"
                    delay={0.2}
                />
                <StatCard
                    title="平均实验得分"
                    value="88.5"
                    icon={Trophy}
                    variant="green"
                    delay={0.3}
                />
                <StatCard
                    title="平均实验得分"
                    value="88.5"
                    icon={Trophy}
                    variant="green"
                    delay={0.3}
                />
                <StatCard
                    title="平均实验得分"
                    value="88.5"
                    icon={Trophy}
                    variant="green"
                    delay={0.3}
                />
                <StatCard
                    title="平均实验得分"
                    value="88.5"
                    icon={Trophy}
                    variant="green"
                    delay={0.3}
                />
            </div>

            {/* 最近任务 */}
            <div className="rounded-2xl p-6 backdrop-blur-sm transition-colors duration-300
        bg-white border border-slate-200 shadow-sm
        dark:bg-slate-900/50 dark:border-white/10 dark:shadow-none
      ">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-800 dark:text-white">
                    <Clock size={18} className="text-slate-400" /> 最近活动
                </h3>
                <div className="flex flex-col items-center justify-center py-12 rounded-xl border-2 border-dashed
          border-slate-200 text-slate-400
          dark:border-white/5 dark:text-slate-500"
                >
                    <p>暂无最近的实验记录</p>
                    <button className="mt-4 px-6 py-2 rounded-lg font-bold transition-colors
            bg-cyan-100 text-cyan-700 hover:bg-cyan-200
            dark:bg-cyan-500 dark:text-slate-950 dark:hover:bg-cyan-400"
                    >
                        前往实验大厅
                    </button>
                </div>
            </div>

        </div>
    );
}

// 🔥 2. 子组件：使用静态类名映射
// 这样 Tailwind 就能 100% 识别所有的类名，不会被 Purge 掉
function StatCard({ title, value, icon: Icon, variant, delay }: StatCardProps) {

    // 定义样式映射表
    const styles = {
        blue: {
            iconColor: "text-cyan-600 dark:text-cyan-400",
            iconBg: "bg-cyan-50 dark:bg-cyan-500/20",
            border: "dark:border-cyan-500/20",
            glow: "bg-cyan-500"
        },
        purple: {
            iconColor: "text-purple-600 dark:text-purple-400",
            iconBg: "bg-purple-50 dark:bg-purple-500/20",
            border: "dark:border-purple-500/20",
            glow: "bg-purple-500"
        },
        green: {
            iconColor: "text-emerald-600 dark:text-emerald-400",
            iconBg: "bg-emerald-50 dark:bg-emerald-500/20",
            border: "dark:border-emerald-500/20",
            glow: "bg-emerald-500"
        }
    };

    const currentStyle = styles[variant];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`relative overflow-hidden rounded-2xl p-6 group transition-all duration-300
        /* 浅色基础 */
        bg-white border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-md
        
        /* 深色基础 */
        dark:bg-slate-900/40 dark:backdrop-blur-md dark:shadow-none
        
        /* 动态深色边框 */
        ${currentStyle.border}
      `}
        >
            {/* 深色模式下的边框高亮 */}
            <div className={`absolute inset-0 opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 ${currentStyle.border.replace('dark:border-', 'border-')}`} style={{ borderRadius: '1rem' }} />

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400">{title}</h3>

                    {/* 图标容器 */}
                    <div className={`p-2.5 rounded-xl transition-colors ${currentStyle.iconBg} ${currentStyle.iconColor}`}>
                        <Icon size={20} />
                    </div>
                </div>

                <p className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">{value}</p>
            </div>

            {/* 装饰流光 (确保 opacity 足够看清) */}
            <div className={`hidden dark:block absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-[40px] opacity-30 ${currentStyle.glow}`} />
        </motion.div>
    )
}