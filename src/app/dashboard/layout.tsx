export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-gray-100 text-slate-900">
            {/* 这是你之后的侧边栏 */}
            <aside className="w-64 bg-slate-900 text-slate-100 p-4">
                {/* 功能菜单 */}
                <div className="font-bold text-lg mb-6">知悟引擎后台</div>
                <nav className="space-y-3">
                    <a className="block hover:text-cyan-300" href="/dashboard/admin">管理首页</a>
                    <a className="block hover:text-cyan-300" href="/dashboard/admin/experiments">实验管理</a>
                    <a className="block hover:text-cyan-300" href="/dashboard/admin/classes">班级管理</a>
                    <a className="block hover:text-cyan-300" href="/dashboard/admin/stats">学情分析</a>
                </nav>
            </aside>

            <main className="flex-1 p-6">
                {children}
            </main>
        </div>
    );
}
