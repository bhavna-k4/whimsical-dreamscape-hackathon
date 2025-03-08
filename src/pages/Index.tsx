
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import SponsorsSection from "@/components/SponsorsSection";
import FaqSection from "@/components/FaqSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative">
        <HeroSection />
        <AboutSection />
        <ScheduleSection />
        <SponsorsSection />
        <FaqSection />
      </div>
    </div>
  );
};

export default Index;
