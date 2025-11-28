'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    BookOpen,
    FlaskConical,
    History,
    Settings,
    LogOut,
    Users,
    BarChart3,
    ChevronRight,
    ShieldAlert,
    Sun,
    Moon
} from 'lucide-react';
import { clsx } from 'clsx';
import { useTheme } from "next-themes";
import { useState, useEffect } from 'react';
import Image from 'next/image'; // 新增

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, 0);
        return () => clearTimeout(timer);
    }, []);
    // 1. 路由判断
    const isTeacher = pathname.startsWith('/dashboard/teacher');
    const isAdmin = pathname.startsWith('/dashboard/admin');

    // 2. 菜单配置
    const studentMenus = [
        { href: '/dashboard/student', label: '概览', icon: LayoutDashboard },
        { href: '/dashboard/student/classes', label: '我的班级', icon: BookOpen },
        { href: '/dashboard/student/experiments', label: '实验大厅', icon: FlaskConical },
        { href: '/dashboard/student/history', label: '历史记录', icon: History },
    ];

    const teacherMenus = [
        { href: '/dashboard/teacher', label: '教学概览', icon: LayoutDashboard },
        { href: '/dashboard/teacher/classes', label: '班级管理', icon: Users },
        { href: '/dashboard/teacher/analysis', label: 'AI 学情分析', icon: BarChart3 },
    ];

    const adminMenus = [
        { href: '/dashboard/admin', label: '系统概览', icon: ShieldAlert },
        { href: '/dashboard/admin/users', label: '用户管理', icon: Users },
    ];

    const menus = isAdmin ? adminMenus : (isTeacher ? teacherMenus : studentMenus);

    const handleLogout = async () => {
        try {
            // 1. 调用后端接口清除 HttpOnly Cookie (服务端操作)
            await fetch('/api/auth/logout', { method: 'POST' });

            // 2. 为了以防万一，前端也清一下普通 Cookie (客户端操作)
            document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";

            // 3. 跳转
            router.push('/login');
            router.refresh();
        } catch (error) {
            console.error("Logout failed", error);
            // 即使失败也要强制跳转
            router.push('/login');
        }
    };

    return (
        <aside
            className={clsx(
                "fixed left-0 top-0 h-screen w-64 flex flex-col z-50 backdrop-blur-xl border-r transition-colors duration-300",
                // 🎨 核心样式适配：
                // 浅色：白底 + 浅灰边框
                "bg-white/80 border-slate-200",
                // 深色：黑底 + 微光边框
                "dark:bg-slate-950/90 dark:border-white/10"
            )}
        >

            {/* Logo 区 - 升级版 */}
            <div className="h-16 flex items-center px-6 border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
                <Link
                    // 智能跳转：根据当前身份跳回对应的首页，而不是只会跳 /dashboard
                    href="/"
                    className="flex items-center gap-3 group w-full"
                >
                    {/* 图片 Logo 容器 */}
                    <div className="relative w-9 h-9 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                        {/* 装饰：深色模式下的背光 (Hover时显示) */}
                        <div className="absolute inset-0 bg-cyan-500/30 blur-lg rounded-full opacity-0 dark:group-hover:opacity-100 transition-opacity duration-500" />

                        {/* 你的 Logo */}
                        <Image
                            src="/logo.svg" // 确保你的 public 目录下有这个文件
                            alt="知悟引擎"
                            fill
                            className="object-contain"
                            priority // 优先加载 LCP
                        />
                    </div>

                    {/* 文字信息 */}
                    <div className="flex flex-col">
            <span className="font-bold tracking-wide text-sm text-slate-800 dark:text-slate-100 transition-colors duration-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400">
              知悟引擎
            </span>
                        <span className="text-[10px] uppercase font-mono text-slate-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-cyan-600/70 dark:group-hover:text-cyan-500/70">
              {isAdmin ? 'ADMIN' : (isTeacher ? 'TEACHER' : 'STUDENT')} CONSOLE
            </span>
                    </div>
                </Link>
            </div>

            {/* 导航菜单区 */}
            <nav className="flex-1 py-6 px-3 space-y-1 overflow-y-auto">
                {menus.map((link) => {
                    // 路由匹配逻辑
                    let isActive = false;
                    if (link.href === '/dashboard/student' || link.href === '/dashboard/teacher' || link.href === '/dashboard/admin') {
                        isActive = pathname === link.href;
                    } else {
                        isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                    }

                    const Icon = link.icon;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={clsx(
                                "relative flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium border transition-colors duration-200",
                                isActive
                                    // 选中状态：
                                    // 浅色：淡青边框 + 深青文字
                                    // 深色：微光边框 + 白字
                                    ? "border-cyan-200 text-cyan-700 dark:border-cyan-500/20 dark:text-white"
                                    // 未选中状态：
                                    // 浅色：透明边框 + 深灰字 + 悬停黑字
                                    // 深色：透明边框 + 浅灰字 + 悬停白字
                                    : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
                            )}
                        >
                            {/* 选中背景滑块 (layoutId 动画) */}
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-item-bg"
                                    // 背景色适配：浅色用极淡青色，深色用半透明青色
                                    className="absolute inset-0 rounded-xl -z-10 bg-cyan-50 dark:bg-cyan-500/10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}

                            {/* 选中指示条 */}
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active-indicator"
                                    className="absolute left-0 w-1 h-6 bg-cyan-500 rounded-r-full"
                                />
                            )}

                            {/* 图标颜色适配 */}
                            <Icon size={20} className={clsx(isActive ? "text-cyan-600 dark:text-cyan-400" : "currentColor")} />

                            <span className="relative z-10">{link.label}</span>

                            {/* 箭头颜色适配 */}
                            {isActive && (
                                <ChevronRight size={14} className="ml-auto text-cyan-600/50 dark:text-cyan-500/50" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* 底部操作区 */}
            <div className="p-4 border-t space-y-2 border-slate-200 dark:border-white/5 transition-colors duration-300">

                {/* 主题切换按钮 */}
                {mounted ? (
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
              text-slate-600 hover:bg-slate-100
              dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                    >
                        {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        <span>{theme === "dark" ? "浅色模式" : "深色模式"}</span>
                    </button>
                ) : (
                    // 💀 骨架屏 (Skeleton)：在加载时显示一个灰色的占位框
                    // 作用：占据同样的空间，防止下方按钮跳动
                    <div className="w-full flex items-center gap-3 px-3 py-2 rounded-lg">
                        <div className="w-[18px] h-[18px] bg-slate-200 dark:bg-white/10 rounded animate-pulse" />
                        <div className="w-20 h-4 bg-slate-200 dark:bg-white/10 rounded animate-pulse" />
                    </div>
                )}

                <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
            text-slate-600 hover:bg-slate-100
            dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
                >
                    <Settings size={18} />
                    <span>账户设置</span>
                </Link>

                <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors
            text-red-600 hover:bg-red-50
            dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-500/10"
                >
                    <LogOut size={18} />
                    <span>退出登录</span>
                </button>
            </div>
        </aside>
    );
}