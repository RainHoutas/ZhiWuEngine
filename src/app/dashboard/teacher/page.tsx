'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Users, FlaskConical, Activity } from 'lucide-react';

export default function TeacherDashboard() {
    const [user, setUser] = useState<{ fullName: string } | null>(null);

    useEffect(() => {
        fetch('/api/auth/me').then(res => res.json()).then(data => setUser(data));
    }, []);

    return (
        <div className="space-y-8">
            <header>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                    您好，<span className="text-purple-600 dark:text-purple-400">{user?.fullName || '老师'}</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    这是您的教学控制台，请从左侧菜单开始管理班级。
                </p>
            </header>

            {/* 快捷统计 (目前是静态的) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/10 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                            <Users size={24} />
                        </div>
                        <div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">管理班级</div>
                            <div className="text-2xl font-bold text-slate-900 dark:text-white">--</div>
                        </div>
                    </div>
                </div>

                {/* 更多卡片可以按需添加 */}
            </div>
        </div>
    );
}