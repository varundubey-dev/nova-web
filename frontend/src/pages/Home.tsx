import HeroSection from "@components/home/HeroSection";
import InstallSection from "@components/home/InstallSection";
import FeatureSection from "@components/home/FeatureSection";
import StatsSection from "@components/home/StatsSection";
import InteractiveSection from "@components/home/InteractiveSection";
import StdLibPreviewSection from "@components/home/StdLibPreviewSection";
import CallToActionSection from "@components/home/CallToActionSection";

export default function Home() {
  return (
    <>
      <title>Home • NOVA</title>
      <div className="min-h-screen">
        <HeroSection />
        <InstallSection />
        <StatsSection />
        <FeatureSection />
        <InteractiveSection />
        <StdLibPreviewSection />
        {/* Playground Preview to be added later */}
        <CallToActionSection />
      </div>
    </>
  );
}
