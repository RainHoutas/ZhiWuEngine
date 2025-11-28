'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Users, BookOpen, Search, GraduationCap, CheckCircle2, AlertCircle, X } from 'lucide-react';

interface ClassItem {
    id: number;
    name: string;
    teacherName: string;
    joinedAt: string;
}

export default function MyClassesPage() {
    const [classes, setClasses] = useState<ClassItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [inviteCode, setInviteCode] = useState('');
    const [joining, setJoining] = useState(false);

    // --- 自定义 Toast 状态 ---
    const [toast, setToast] = useState<{ show: boolean; msg: string; type: 'success' | 'error' }>({
        show: false,
        msg: '',
        type: 'success'
    });

    // 显示 Toast 的辅助函数
    const showToast = (msg: string, type: 'success' | 'error') => {
        setToast({ show: true, msg, type });
        // 3秒后自动消失
        setTimeout(() => setToast((prev) => ({ ...prev, show: false })), 3000);
    };

    // --- 获取班级列表 ---
    const fetchClasses = async () => {
        try {
            // 🛑 核心修复：添加 cache: 'no-store'，强制不缓存，解决"加入了但不显示"的问题
            const res = await fetch('/api/class/my', {
                cache: 'no-store',
                headers: { 'Cache-Control': 'no-cache' }
            });

            if (res.ok) {
                const data = await res.json();
                setClasses(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    // --- 加入班级逻辑 ---
    const handleJoin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!inviteCode.trim()) return;

        setJoining(true);
        try {
            const res = await fetch('/api/class/join', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ inviteCode }),
            });

            const data = await res.json();

            if (res.ok) {
                // ✅ 使用漂亮的 Toast 替代 alert
                showToast(`成功加入班级 (ID: ${data.classId})`, 'success');
                setInviteCode('');
                // 立即刷新列表
                await fetchClasses();
            } else {
                showToast(data.message || '加入失败', 'error');
            }
        } catch (error) {
            showToast('网络请求失败，请稍后重试', 'error');
        } finally {
            setJoining(false);
        }
    };

    return (
        <div className="space-y-8 relative">

            {/* --- 顶部 Toast 通知组件 --- */}
            {/* 固定在页面顶部居中，层级最高 */}
            <AnimatePresence>
                {toast.show && (
                    <motion.div
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.9 }}
                        className={`fixed top-24 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-6 py-3 rounded-full shadow-2xl backdrop-blur-md border ${
                            toast.type === 'success'
                                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-600 dark:text-emerald-400'
                                : 'bg-red-500/10 border-red-500/50 text-red-600 dark:text-red-400'
                        }`}
                    >
                        {toast.type === 'success' ? <CheckCircle2 size={20} /> : <AlertCircle size={20} />}
                        <span className="font-medium text-sm">{toast.msg}</span>
                        <button onClick={() => setToast(prev => ({...prev, show: false}))} className="ml-2 opacity-60 hover:opacity-100">
                            <X size={16} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 1. 顶部操作区 */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">我的班级</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">查看已加入的教学班级</p>
                </div>

                {/* 加入班级表单 */}
                <form onSubmit={handleJoin} className="flex gap-2 w-full md:w-auto">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-x-0 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="输入6位邀请码"
                            value={inviteCode}
                            onChange={(e) => setInviteCode(e.target.value.toUpperCase())} // 自动转大写
                            className="pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 transition-all w-full md:w-64 text-sm text-slate-900 dark:text-white placeholder:text-slate-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={joining || !inviteCode}
                        className="flex items-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-cyan-500/20"
                    >
                        {joining ? <span className="animate-spin">⏳</span> : <Plus size={18} />}
                        <span>加入</span>
                    </button>
                </form>
            </div>

            {/* 2. 班级列表 */}
            {loading ? (
                // 骨架屏加载状态
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[1,2,3].map(i => (
                        <div key={i} className="h-40 rounded-2xl bg-slate-200 dark:bg-white/5 animate-pulse" />
                    ))}
                </div>
            ) : classes.length === 0 ? (
                // 空状态
                <div className="flex flex-col items-center justify-center py-20 border-2 border-dashed border-slate-200 dark:border-white/5 rounded-2xl bg-slate-50 dark:bg-slate-900/50">
                    <div className="w-16 h-16 bg-slate-200 dark:bg-slate-800 rounded-full flex items-center justify-center mb-4 text-slate-400">
                        <BookOpen size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">暂无班级</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">
                        输入老师提供的邀请码，加入你的第一个班级吧！
                    </p>
                </div>
            ) : (
                // 卡片网格
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls, index) => (
                        <motion.div
                            key={cls.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900/40 backdrop-blur-sm border border-slate-200 dark:border-white/10 p-6 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                                    <BookOpen size={24} />
                                </div>
                                <span className="px-2 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-500">
                  ID: {cls.id}
                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                                {cls.name}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                <GraduationCap size={16} />
                                <span>教师: {cls.teacherName}</span>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex justify-between items-center text-xs text-slate-400">
                                <span>加入时间: {new Date(cls.joinedAt).toLocaleDateString()}</span>
                                <button className="text-cyan-600 dark:text-cyan-400 font-medium hover:underline flex items-center gap-1">
                                    查看详情 <span className="text-[10px]">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}