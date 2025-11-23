'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // 引入路由钩子
import {
    User,
    GraduationCap,
    ArrowRight,
    Lock,
    Mail,
    ChevronLeft,
    ShieldAlert,
    ShieldCheck,
    AlertCircle // 引入错误图标
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import {RadarBackground} from '@/components/ui/RadarBackground';

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

export default function LoginPage() {
    const router = useRouter();

    // UI 状态
    const [role, setRole] = useState<RoleType>('student');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState<string | null>(null); // 错误信息状态

    // 表单数据状态
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // 处理输入变化
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // 用户开始输入时，清除之前的错误提示
        if (errorMsg) setErrorMsg(null);
    };

    // 核心登录逻辑
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

            // 🛑 核心修复：角色一致性校验 (Frontend Guard)
            // 假设数据库返回的 role 是 "ADMIN", "STUDENT" (大写)
            // 而当前前端状态 role 是 "admin", "student" (小写)
            const serverRole = data.user.role.toUpperCase();
            const currentTabRole = role.toUpperCase();

            if (serverRole !== currentTabRole) {
                // 如果角色不匹配，抛出自定义错误
                throw new Error(
                    `您的账号属于【${getRoleName(serverRole)}】，请切换到对应入口登录`
                );
            }

            // 校验通过，执行跳转
            console.log('登录成功:', data.user);
            const targetRole = data.user.role.toLowerCase();
            router.push(`/dashboard/${targetRole}`);

        } catch (err) {
            console.error(err);

            // 类型收窄处理
            if (err instanceof Error) {
                setErrorMsg(err.message);
            } else {
                setErrorMsg("发生未知错误，请联系管理员");
            }

            setIsLoading(false);
        }
    };

    // 动画配置
    const springTransition = {
        type: "spring" as const,
        stiffness: 400,
        damping: 30
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
            <div className="absolute inset-0 z-0">
                <RadarBackground />
            </div>

            <div className="absolute top-6 left-6 z-20">
                <Link
                    href="/"
                    className="group flex items-center gap-2 rounded-full bg-slate-900/50 px-4 py-2 text-sm text-slate-400 backdrop-blur-md border border-white/5 hover:bg-slate-800 hover:text-white hover:border-cyan-500/30 transition-all duration-300"
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
                    <h1 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
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
                    className="w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl ring-1 ring-black/5"
                    style={{ borderRadius: 16 }}
                >
                    <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />

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
                                    className="mb-8 grid grid-cols-2 gap-2 rounded-lg bg-slate-950/50 p-1 border border-white/5"
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
                                                    className="absolute inset-0 rounded-md bg-cyan-500/20 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
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
                                    <div className="rounded-full bg-red-500/10 p-3 text-red-500 ring-1 ring-red-500/30">
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
                                        type="email" // 确保 API 接收的是 email 格式
                                        name="email" // 添加 name 属性用于绑定
                                        value={formData.email} // 绑定 value
                                        onChange={handleInputChange} // 绑定 onChange
                                        required
                                        placeholder={
                                            role === 'student' ? "student@example.com" :
                                                role === 'teacher' ? "teacher@school.edu" : "admin@zhiwu.com"
                                        }
                                        className={cn(
                                            "w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none transition-all duration-300",
                                            role === 'admin'
                                                ? "focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50"
                                                : "focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
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
                                        name="password" // 添加 name
                                        value={formData.password} // 绑定 value
                                        onChange={handleInputChange} // 绑定 onChange
                                        required
                                        placeholder="••••••••"
                                        className={cn(
                                            "w-full rounded-lg border border-white/10 bg-slate-950/50 py-3 pl-10 pr-4 text-sm text-slate-100 placeholder:text-slate-600 focus:bg-slate-900/80 focus:outline-none transition-all duration-300",
                                            role === 'admin'
                                                ? "focus:border-red-500/50 focus:ring-1 focus:ring-red-500/50"
                                                : "focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50"
                                        )}
                                    />
                                </div>
                            </div>

                            <motion.button
                                layout
                                type="submit"
                                disabled={isLoading}
                                className={cn(
                                    "group relative w-full overflow-hidden rounded-lg py-3 text-sm font-semibold text-slate-950 transition-all disabled:opacity-70 disabled:cursor-not-allowed",
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