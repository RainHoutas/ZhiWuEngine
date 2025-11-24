"use client";

// 1. 引入拆分后的组件
import PublicNavbar from "@/components/layout/PublicNavbar"; // 或者 @/components/layout/PublicNavbar
import HeroSection from "@/components/home/HeroSection";
import StatsBar from "@/components/home/StatsBar";
import ValuePropositionTabs from "@/components/home/ValuePropositionTabs";
import TechCoreSection from "@/components/home/TechCoreSection";
import AiDemoSection from "@/components/home/AiDemoSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer"; // 假设你放到了 layout

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 overflow-x-hidden font-sans">
            <PublicNavbar />

            <main>
                <HeroSection />
                <StatsBar />
                <ValuePropositionTabs />
                <TechCoreSection />
                <AiDemoSection />
                <ComparisonSection />
                <CTASection />
            </main>

            <Footer />
        </div>
    );
}