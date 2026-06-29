import HeroSection from "@pages/home/HeroSection";
import InstallSection from "@pages/home/InstallSection";
import FeatureSection from "@pages/home/FeatureSection";
import StatsSection from "@pages/home/StatsSection";
import InteractiveSection from "@pages/home/InteractiveSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <InstallSection />
      <StatsSection />
      <FeatureSection />
      <InteractiveSection />
    </div>
  );
}
