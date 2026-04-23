import HeroSection from "@/components/sections/HeroSection";
import TrustSection from "@/components/sections/TrustSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import DestinationsSection from "@/components/sections/DestinationsSection";
import SuccessStoriesSection from "@/components/sections/SuccessStoriesSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <div className="bg-white">
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <DestinationsSection />
      <SuccessStoriesSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}
