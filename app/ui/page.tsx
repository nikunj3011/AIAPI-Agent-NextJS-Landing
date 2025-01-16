import Header from "./components/header";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSectionComponent from "./components/TestimonialsSection";
import MainFeaturesSection from "./components/MainFeaturesSection";
import Faq from "./components/Faq";
import FooterSection from "./components/Footer";

export default function MarqueeDemoVertical() {
  return (
    <> 
      <Header />
      <div className="w-full">
        <HeroSection />
      </div>

      <div className="w-full">
        <MainFeaturesSection />
      </div>
        <FeaturesSection />

      <div className="w-full">
        <TestimonialsSectionComponent />
      </div>

      <div className="w-full">
        <Faq />
      </div>
      <FooterSection />
    </>
  );
}