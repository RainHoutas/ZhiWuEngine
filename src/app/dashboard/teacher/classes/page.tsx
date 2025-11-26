'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Copy, Users, Trash2, X } from 'lucide-react';

interface ClassItem {
    id: number;
    name: string;
    inviteCode: string;
    _count: { members: number };
}

export default function ClassManagementPage() {
    const [classes, setClasses] = useState<ClassItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [newClassName, setNewClassName] = useState('');
    const [creating, setCreating] = useState(false);

    // 获取班级列表
    const fetchClasses = async () => {
        try {
            const res = await fetch('/api/class/my');
            if (res.ok) {
                const data = await res.json();
                setClasses(data);
            }
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchClasses();
    }, []);

    // 创建班级
    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newClassName.trim()) return;

        setCreating(true);
        try {
            const res = await fetch('/api/class/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: newClassName }),
            });

            if (res.ok) {
                setNewClassName('');
                setShowCreateModal(false);
                fetchClasses(); // 刷新列表
            } else {
                alert('创建失败');
            }
        } finally {
            setCreating(false);
        }
    };

    // 复制邀请码
    const copyCode = (code: string) => {
        navigator.clipboard.writeText(code);
        alert(`邀请码 ${code} 已复制！`);
    };

    return (
        <div className="space-y-8 relative">

            {/* 顶部栏 */}
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">班级管理</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">创建班级并分发邀请码给学生</p>
                </div>
                <button
                    onClick={() => setShowCreateModal(true)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20"
                >
                    <Plus size={18} /> 创建新班级
                </button>
            </div>

            {/* 班级列表 */}
            {loading ? (
                <div className="text-slate-500">加载中...</div>
            ) : classes.length === 0 ? (
                <div className="py-20 text-center border-2 border-dashed border-slate-200 dark:border-white/10 rounded-2xl">
                    <p className="text-slate-500">您还没有创建任何班级</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls, idx) => (
                        <motion.div
                            key={cls.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 hover:shadow-xl transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-600 dark:text-purple-400">
                                    <Users size={24} />
                                </div>
                                <button className="text-slate-400 hover:text-red-500 transition-colors p-2">
                                    <Trash2 size={18} />
                                </button>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{cls.name}</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">学生人数: {cls._count.members}</p>

                            {/* 邀请码区域 */}
                            <div className="flex items-center justify-between p-3 bg-slate-50 dark:bg-black/30 rounded-lg border border-slate-200 dark:border-white/5">
                                <div className="flex flex-col">
                                    <span className="text-[10px] text-slate-400 uppercase tracking-wider">邀请码</span>
                                    <span className="text-lg font-mono font-bold text-cyan-600 dark:text-cyan-400 tracking-widest">
                    {cls.inviteCode}
                  </span>
                                </div>
                                <button
                                    onClick={() => copyCode(cls.inviteCode)}
                                    className="p-2 rounded-lg hover:bg-white dark:hover:bg-white/10 text-slate-500 hover:text-cyan-500 transition-colors"
                                    title="复制邀请码"
                                >
                                    <Copy size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}

            {/* 创建班级弹窗 (Modal) */}
            <AnimatePresence>
                {showCreateModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        {/* 背景遮罩 */}
                        <motion.div
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                            onClick={() => setShowCreateModal(false)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* 弹窗主体 */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="relative w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-2xl"
                        >
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-slate-900 dark:text-white">创建新班级</h2>
                                <button onClick={() => setShowCreateModal(false)} className="text-slate-500 hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>

                            <form onSubmit={handleCreate} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                                        班级名称
                                    </label>
                                    <input
                                        type="text"
                                        autoFocus
                                        placeholder="例如：高二(3)班 物理进阶"
                                        value={newClassName}
                                        onChange={(e) => setNewClassName(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-500 text-slate-900 dark:text-white transition-all"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={creating || !newClassName}
                                    className="w-full py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-colors disabled:opacity-50"
                                >
                                    {creating ? '创建中...' : '确认创建'}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

        </div>
    );
}