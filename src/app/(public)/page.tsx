import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ExperimentsSection from "@/components/home/ExperimentsSection";
import AIShowcaseSection from "@/components/home/AIShowcaseSection";
import AnalyticsSection from "@/components/home/AnalyticsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import FooterCTASection from "@/components/home/FooterCTASection";

export default async function Home() {
    return (
        <main className="relative min-h-screen text-slate-100">
        <HeroSection />
            <AboutSection />
            <ExperimentsSection />
            <AIShowcaseSection />
            <AnalyticsSection />
            <FeaturesSection />
            <FooterCTASection />
        </main>
    );
}
