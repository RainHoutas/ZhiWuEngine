import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar"; // ✅ 新增

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "知悟引擎 - AI 虚拟实验教学平台",
    description: "基于 Unity WebGL + AI 的中学实验教学平台",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="zh-CN">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
        >
        {/* 顶部导航栏 */}
        <NavBar />

        {/* 页面内容 */}
        <div className="pt-16">
            {children}
        </div>
        </body>
        </html>
    );
}
