'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    User,
    GraduationCap,
    ArrowRight,
    Lock,
    Mail,
    ChevronLeft,
    ShieldAlert,
    ShieldCheck,
    AlertCircle
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {RadarBackground} from '@/components/ui/RadarBackground'; // 确保路径正确

// --- 工具函数 ---
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

function getRoleName(role: string) {
    switch (role.toUpperCase()) {
        case 'STUDENT': return '学生通道';
        case 'TEACHER': return '教师入口';
        case 'ADMIN': return '管理员控制台';
        default: return '其他入口';
    }
}

type RoleType = 'student' | 'teacher' | 'admin';

// --- 主组件 ---
export default function LoginPage() {
    const router = useRouter();

    // UI 状态
    const [role, setRole] = useState<RoleType>('student');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    // 表单数据
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errorMsg) setErrorMsg(null);
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || '登录失败，请稍后重试');
            }

            const serverRole = data.user.role.toUpperCase();
            const currentTabRole = role.toUpperCase();

            if (serverRole !== currentTabRole) {
                throw new Error(
                    `您的账号属于【${getRoleName(serverRole)}】，请切换到对应入口登录`
                );
            }

            console.log('登录成功:', data.user);
            const targetRole = data.user.role.toLowerCase();
            router.push(`/dashboard/${targetRole}`);

        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                setErrorMsg(err.message);
            } else {
                setErrorMsg("发生未知错误，请联系管理员");
            }
            setIsLoading(false);
        }
    };

    const springTransition = {
        type: "spring" as const,
        stiffness: 400,
        damping: 30
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">

            {/* ==================== 1. 增强型背景层 ==================== */}
            {/* ==================== 1. 增强型背景层 (高级质感版) ==================== */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-slate-950">

                {/* A. 基础雷达网格 */}
                <RadarBackground />

                {/* B. 顶部天光 (God Light) - 模拟来自上方的实验室光源 */}
                {/* 使用 radial-gradient 实现自然的扩散效果，不再是圆球，而是从顶部垂下的光幕 */}
                <div
                    className="absolute top-0 left-0 right-0 h-[800px] opacity-40"
                    style={{
                        background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.4) 0%, rgba(15,23,42,0) 70%)'
                    }}
                />

                {/* C. 底部底光 (Ground Reflection) - 增加深邃感 */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[600px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle at 80% 100%, rgba(168,85,247,0.4) 0%, rgba(15,23,42,0) 60%)'
                    }}
                />

                {/* D. 噪点纹理 (Noise) - 保持质感 */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* E. 悬浮粒子 - 保持动感 */}
                <BackgroundParticles />

            </div>

            {/* 返回首页按钮 */}
            <div className="absolute top-6 left-6 z-20">
                <Link
                    href="/"
                    className="group flex items-center gap-2 rounded-full bg-slate-900/50 px-4 py-2 text-sm text-slate-400 backdrop-blur-md border border-white/5 hover:bg-slate-800 hover:text-white hover:border-cyan-500/30 transition-all duration-300 shadow-lg"
                >
                    <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    <span>返回首页</span>
                </Link>
            </div>

            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        知悟 <span className="text-cyan-500">Engine</span>
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        云端虚拟实验室 · 三层情境感知系统
                    </p>
                </motion.div>

                <motion.div
                    layout
                    transition={springTransition}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    // 增加边框亮度和阴影，使卡片更具立体感
                    className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
                    style={{ borderRadius: 16 }}
                >
                    {/* 顶部流光线条 */}
                    <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-80" />

                    <div className="p-8">

                        <AnimatePresence mode="popLayout" initial={false}>
                            {role !== 'admin' ? (
                                <motion.div
                                    key="user-tabs"
                                    layout
                                    initial={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="mb-8 grid grid-cols-2 gap-2 rounded-lg bg-slate-950/50 p-1 border border-white/5 shadow-inner"
                                >
                                    {(['student', 'teacher'] as const).map((tabRole) => (
                                        <button
                                            key={tabRole}
                                            onClick={() => setRole(tabRole)}
                                            className={cn(
                                                "relative flex items-center justify-center gap-2 rounded-md py-2.5 text-sm font-medium transition-colors z-10",
                                                role === tabRole ? "text-white" : "text-slate-400 hover:text-slate-200"
                                            )}
                                        >
                                            {role === tabRole && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 rounded-md bg-cyan-500/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            {tabRole === 'student' ? <User size={16} /> : <GraduationCap size={18} />}
                                            <span>{tabRole === 'student' ? '学生通道' : '教师入口'}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="admin-header"
                                    layout
                                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.9, filter: 'blur(4px)' }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className="mb-8 flex flex-col items-center justify-center gap-2 border-b border-white/5 pb-4"
                                >
                                    <div className="rounded-full bg-red-500/10 p-3 text-red-500 ring-1 ring-red-500/30 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                                        <ShieldAlert size={24} />
                                    </div>
                                    <h2 className="text-lg font-semibold text-white">管理员控制台</h2>
                                    <button
                                        onClick={() => setRole('student')}
                                        className="text-xs text-slate-500 hover:text-cyan-500 hover:underline"
                                    >
                                        返回普通登录
                                    </button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* API 错误提示条 */}
                        <AnimatePresence>
                            {errorMsg && (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    animate={{ opacity: 1, height: 'auto', marginBottom: 16 }}
                                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                                    className="overflow-hidden rounded-md bg-red-500/10 border border-red-500/20 px-3 py-2"
                                >
                                    <div className="flex items-center gap-2 text-sm text-red-400">
                                        <AlertCircle size={16} />
                                        <span>{errorMsg}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.form
                            layout
                            transition={springTransition}
                            onSubmit={handleLogin}
                            className="space-y-5"
                        >
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    {role === 'admin' ? '管理员账号' : '账号 / 邮箱'}
                                </label>
                                <div className="group relative">
                                    {role === 'admin' ? (
                                        <ShieldCheck className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-red-400" />
                                    ) : (
                                        <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400" />
                                    )}
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder={
                                            role === 'student' ? "student@example.com" :
                                                role === 'teacher' ? "teacher@school.edu" : "admin@zhiwu.com"
                                        }
                                        className={cn(
                                            "w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none transition-all duration-300",
                                            role === 'admin'
                                                ? "focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50"
                                                : "focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                                        )}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between">
                                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">密码</label>
                                    {role !== 'admin' && (
                                        <Link href="#" className="text-xs text-cyan-500 hover:text-cyan-400 transition-colors">
                                            忘记密码?
                                        </Link>
                                    )}
                                </div>
                                <div className="group relative">
                                    <Lock className={cn(
                                        "absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors",
                                        role === 'admin' ? "group-focus-within:text-red-400" : "group-focus-within:text-cyan-400"
                                    )} />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="••••••••"
                                        className={cn(
                                            "w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none transition-all duration-300",
                                            role === 'admin'
                                                ? "focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50"
                                                : "focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                                        )}
                                    />
                                </div>
                            </div>

                            <motion.button
                                layout
                                type="submit"
                                disabled={isLoading}
                                className={cn(
                                    "group relative w-full overflow-hidden rounded-lg py-3 text-sm font-semibold text-slate-950 transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-lg",
                                    role === 'admin'
                                        ? "bg-red-500 hover:bg-red-400 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)]"
                                        : "bg-cyan-500 hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                                )}
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                  {isLoading ? (
                                      <>
                                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                                          <span>验证中...</span>
                                      </>
                                  ) : (
                                      <>
                                          <span>{role === 'admin' ? '系统登录' : '进入实验室'}</span>
                                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                      </>
                                  )}
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                            </motion.button>
                        </motion.form>
                    </div>

                    <motion.div
                        layout
                        transition={springTransition}
                        className="bg-slate-950/30 px-8 py-4 text-center border-t border-white/5"
                    >
                        {role !== 'admin' ? (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="space-y-3"
                            >
                                <p className="text-sm text-slate-400">
                                    还没有账号?{' '}
                                    <Link href="/register" className="font-medium text-cyan-500 hover:text-cyan-400 hover:underline transition-colors">
                                        立即注册
                                    </Link>
                                </p>
                                <div className="pt-1">
                                    <button
                                        onClick={() => setRole('admin')}
                                        className="text-[10px] text-slate-700 hover:text-slate-500 transition-colors"
                                    >
                                        管理员入口
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-[10px] text-slate-600"
                            >
                                © 知悟 Engine Admin System v1.0
                            </motion.p>
                        )}
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
}

// --- 子组件：背景粒子 ---
// 使用确定性算法生成，避免 hydration error
function BackgroundParticles() {
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        // 使用简单的伪随机数，确保服务端和客户端渲染一致
        left: `${(i * 19) % 100}%`,
        top: `${(i * 29) % 100}%`,
        size: (i % 3) + 1, // 1-3px
        duration: 10 + (i % 10), // 10-19s
        delay: i * 0.5
    }));

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-cyan-400/30 blur-[1px]"
                    style={{
                        left: p.left,
                        top: p.top,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100], // 向上漂浮
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: p.duration,
                        repeat: Infinity,
                        delay: p.delay,
                        ease: "linear"
                    }}
                />
            ))}
        </div>
    );
}