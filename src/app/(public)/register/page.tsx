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
    AlertCircle,
    UserCircle2, // 新增图标：姓名
    CheckCircle2 // 新增图标：成功
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { RadarBackground } from '@/components/ui/RadarBackground';

// --- 工具函数 ---
function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

type RoleType = 'student' | 'teacher'; // 注册页没有管理员

export default function RegisterPage() {
    const router = useRouter();

    // UI 状态
    const [role, setRole] = useState<RoleType>('student');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [successMsg, setSuccessMsg] = useState<string | null>(null);

    // 表单数据
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errorMsg) setErrorMsg(null);
    };

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMsg(null);
        setSuccessMsg(null);

        try {
            const res = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    password: formData.password,
                    role: role // 将当前选中的 Tab 作为角色传给后端
                })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || '注册失败');
            }

            // 注册成功
            setSuccessMsg("账号创建成功！即将跳转登录...");

            // 延迟跳转，让用户看到成功提示
            setTimeout(() => {
                router.push('/login');
            }, 1500);

        } catch (err) {
            console.error(err);
            if (err instanceof Error) {
                setErrorMsg(err.message);
            } else {
                setErrorMsg("发生未知错误");
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

            {/* ==================== 背景层 (无痕修复版) ==================== */}
            <div className="absolute inset-0 z-0 pointer-events-none bg-slate-950">

                {/* A. 基础雷达网格 */}
                <RadarBackground />

                {/* B. 顶部天光 (God Light) - 修复分层线 */}
                <div
                    className="absolute top-0 left-0 right-0 h-[800px] opacity-40"
                    style={{
                        // 1. 改为 transparent
                        background: 'radial-gradient(circle at 50% 0%, rgba(34,211,238,0.4) 0%, transparent 70%)',
                        // 2. 关键修复：添加底部遮罩，让 800px 边缘处彻底虚化
                        maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
                    }}
                />

                {/* C. 底部底光 (Ground Reflection) - 修复分层线 */}
                <div
                    className="absolute bottom-0 left-0 right-0 h-[600px] opacity-30"
                    style={{
                        background: 'radial-gradient(circle at 20% 100%, rgba(168,85,247,0.4) 0%, transparent 60%)',
                        // 顶部遮罩，防止上方出现切线
                        maskImage: 'linear-gradient(to top, black 60%, transparent 100%)',
                        WebkitMaskImage: 'linear-gradient(to top, black 60%, transparent 100%)'
                    }}
                />

                {/* D. 噪点纹理 */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                {/* E. 粒子 */}
                <BackgroundParticles />
            </div>

            {/* 返回首页 */}
            <div className="absolute top-6 left-6 z-20">
                <Link
                    href="/"
                    className="group flex items-center gap-2 rounded-full bg-slate-900/50 px-4 py-2 text-sm text-slate-400 backdrop-blur-md border border-white/5 hover:bg-slate-800 hover:text-white hover:border-cyan-500/30 transition-all duration-300 shadow-lg"
                >
                    <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                    <span>返回首页</span>
                </Link>
            </div>

            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-8 text-center"
                >
                    <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        加入 <span className="text-cyan-500">知悟</span>
                    </h1>
                    <p className="mt-2 text-sm text-slate-400">
                        开启您的三层情境感知实验之旅
                    </p>
                </motion.div>

                <motion.div
                    layout
                    transition={springTransition}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
                    style={{ borderRadius: 16 }}
                >
                    <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-80" />

                    <div className="p-8">

                        {/* 角色选择 Tab */}
                        <div className="mb-6 grid grid-cols-2 gap-2 rounded-lg bg-slate-950/50 p-1 border border-white/5 shadow-inner">
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
                                    <span>我是{tabRole === 'student' ? '学生' : '教师'}</span>
                                </button>
                            ))}
                        </div>

                        {/* 提示信息区域 */}
                        {/* 提示信息区域 (修复版：分离动画层与样式层) */}
                        <AnimatePresence mode="wait">
                            {errorMsg && (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    // 1. 外层只负责裁剪，没有任何样式
                                    className="overflow-hidden"
                                >
                                    {/* 2. 内层负责样式 (边框/背景/Margin) */}
                                    <div className="mb-4 rounded-md bg-red-500/10 border border-red-500/20 px-3 py-2">
                                        <div className="flex items-center gap-2 text-sm text-red-400">
                                            <AlertCircle size={16} />
                                            <span>{errorMsg}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            {successMsg && (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    // 1. 外层只负责裁剪
                                    className="overflow-hidden"
                                >
                                    {/* 2. 内层负责样式 */}
                                    <div className="mb-4 rounded-md bg-emerald-500/10 border border-emerald-500/20 px-3 py-2">
                                        <div className="flex items-center gap-2 text-sm text-emerald-400">
                                            <CheckCircle2 size={16} />
                                            <span>{successMsg}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.form
                            layout
                            transition={springTransition}
                            onSubmit={handleRegister}
                            className="space-y-4"
                        >
                            {/* 1. 姓名输入 */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    真实姓名
                                </label>
                                <div className="group relative">
                                    <UserCircle2 className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400" />
                                    <input
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="例如：张三"
                                        className="w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* 2. 邮箱输入 */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    邮箱地址
                                </label>
                                <div className="group relative">
                                    <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400" />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        placeholder="your@email.com"
                                        className="w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* 3. 密码输入 */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                                    设置密码
                                </label>
                                <div className="group relative">
                                    <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500 transition-colors group-focus-within:text-cyan-400" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                        minLength={6}
                                        placeholder="至少 6 位字符"
                                        className="w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 shadow-[0_0_10px_rgba(6,182,212,0.1)] transition-all duration-300"
                                    />
                                </div>
                            </div>

                            <motion.button
                                layout
                                type="submit"
                                disabled={isLoading || successMsg !== null}
                                className="group relative w-full overflow-hidden rounded-lg bg-cyan-500 py-3 text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-2 shadow-lg"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                  {isLoading ? (
                                      <>
                                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-slate-950 border-t-transparent" />
                                          <span>创建账户中...</span>
                                      </>
                                  ) : successMsg ? (
                                      <>
                                          <CheckCircle2 size={18} />
                                          <span>注册成功</span>
                                      </>
                                  ) : (
                                      <>
                                          <span>立即注册</span>
                                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                      </>
                                  )}
                                </span>
                                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                            </motion.button>
                        </motion.form>
                    </div>

                    <div className="bg-slate-950/30 px-8 py-4 text-center border-t border-white/5">
                        <p className="text-sm text-slate-400">
                            已有账号?{' '}
                            <Link href="/login" className="font-medium text-cyan-500 hover:text-cyan-400 hover:underline transition-colors">
                                直接登录
                            </Link>
                        </p>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}

// 复用粒子组件
function BackgroundParticles() {
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        left: `${(i * 19) % 100}%`,
        top: `${(i * 29) % 100}%`,
        size: (i % 3) + 1,
        duration: 10 + (i % 10),
        delay: i * 0.5
    }));

    return (
        <div className="absolute inset-0 overflow-hidden">
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-cyan-400/30 blur-[1px]"
                    style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
                    animate={{ y: [0, -100], opacity: [0, 0.8, 0] }}
                    transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
                />
            ))}
        </div>
    );
}