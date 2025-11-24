import Link from "next/link";
import Image from "next/image";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 relative overflow-hidden">
            {/* 1. 顶部装饰线 (渐变淡出，比纯 border 更高级) */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

                <div className="flex flex-col md:flex-row justify-between items-center gap-8">

                    {/* --- 左侧：品牌区域 --- */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            {/* 图片 Logo + 呼吸光晕 */}
                            <div className="relative w-10 h-10 flex items-center justify-center">
                                <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/logo.svg"
                                        alt="知悟引擎 Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                            <span className="text-2xl font-bold text-slate-200 tracking-wide group-hover:text-white transition-colors">
                                知悟引擎
                            </span>
                        </Link>
                        <p className="text-slate-500 text-sm max-w-xs text-center md:text-left">
                            赋能未来的云端虚拟实验室，让每一次探索都触手可及。
                        </p>
                    </div>

                    {/* --- 右侧：社交媒体图标 --- */}
                    <div className="flex gap-4">
                        <SocialLink href="#" icon={<Github size={20} />} label="Github" />
                        <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
                        <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" />
                        <SocialLink href="mailto:contact@zhiwu.com" icon={<Mail size={20} />} label="Email" />
                    </div>
                </div>

                {/* 分割线 */}
                <div className="my-8 h-px w-full bg-white/5" />

                {/* --- 底部：链接与版权 --- */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© 2025 Zhiwu Engine. All rights reserved.</p>

                    <div className="flex gap-8">
                        <Link href="/about" className="hover:text-cyan-400 transition-colors">关于我们</Link>
                        <Link href="/docs" className="hover:text-cyan-400 transition-colors">产品文档</Link>
                        <Link href="/privacy" className="hover:text-cyan-400 transition-colors">隐私协议</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// --- 子组件：社交图标按钮 ---
function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            aria-label={label}
            className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
        >
            {icon}
        </a>
    );
}