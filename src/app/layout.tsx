import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LayoutClient from "@/components/LayoutClient";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "知悟引擎",
    description: "AI 虚拟实验教学平台",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh-CN">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutClient>
                {children}
            </LayoutClient>
        </body>
        </html>
    );
}
