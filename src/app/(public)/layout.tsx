import "../globals.css";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen text-slate-100">

            {/* 导航栏 + 内容 */}
            <div className="relative z-10">

                {children}
            </div>
        </div>
    );
}
