'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, BookOpen, Search, GraduationCap } from 'lucide-react';

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

    // 获取班级列表
    const fetchClasses = async () => {
        try {
            const res = await fetch('/api/class/my');
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

    // 加入班级逻辑
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
                alert('加入成功！'); // 以后可以换成更漂亮的 Toast 提示
                setInviteCode('');
                fetchClasses(); // 刷新列表
            } else {
                alert(data.message);
            }
        } catch (error) {
            alert('请求失败，请稍后重试');
        } finally {
            setJoining(false);
        }
    };

    return (
        <div className="space-y-8">

            {/* 1. 顶部操作区 */}
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">我的班级</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-1">查看已加入的教学班级</p>
                </div>

                {/* 简单的加入班级表单 */}
                <form onSubmit={handleJoin} className="flex gap-2 w-full md:w-auto">
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-cyan-500 transition-colors" />
                        <input
                            type="text"
                            placeholder="输入6位邀请码"
                            value={inviteCode}
                            onChange={(e) => setInviteCode(e.target.value)}
                            className="pl-9 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-500 transition-all w-full md:w-64 text-sm text-slate-900 dark:text-white placeholder:text-slate-500"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={joining || !inviteCode}
                        className="flex items-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {joining ? <span className="animate-spin">⏳</span> : <Plus size={18} />}
                        <span>加入</span>
                    </button>
                </form>
            </div>

            {/* 2. 班级列表 */}
            {loading ? (
                <div className="text-slate-500">加载中...</div>
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
                            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 p-6 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                                    <BookOpen size={24} />
                                </div>
                                <span className="px-2 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-500">
                  ID: {cls.id}
                </span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-500 transition-colors">
                                {cls.name}
                            </h3>

                            <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-6">
                                <GraduationCap size={16} />
                                <span>教师: {cls.teacherName}</span>
                            </div>

                            <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex justify-between items-center text-xs text-slate-400">
                                <span>加入时间: {new Date(cls.joinedAt).toLocaleDateString()}</span>
                                <button className="text-cyan-500 hover:underline">查看详情 &rarr;</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            )}
        </div>
    );
}