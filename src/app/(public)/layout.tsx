import "../globals.css";
import Navbar from "@/components/NavBar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative min-h-screen text-slate-100">

            {/* 最底层背景（整个页面都有） */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-25%] left-[-10%] w-[60vw] h-[60vw]
                    bg-cyan-500/20 blur-[200px] rounded-full" />
                <div className="absolute bottom-[-25%] right-[-10%] w-[60vw] h-[60vw]
                    bg-indigo-500/20 blur-[200px] rounded-full" />
            </div>

            {/* 导航栏 + 内容 */}
            <div className="relative z-10">
                <Navbar />
                {children}
            </div>
        </div>
    );
}
