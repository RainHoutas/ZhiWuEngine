import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
    title: "知悟引擎",
    description: "AI 虚拟实验教学平台",
    icons: { icon: '/logo.png' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-CN" suppressHydrationWarning>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen w-screen overflow-hidden bg-slate-950`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}