import { Feature } from "@/components/ui/feature-section-with-grid";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";

const FeaturesSection = () => {
  return (
    <>
      <div className="w-full">
        <Feature />
      </div>
      <h3 className="w-full h-full py-20 pointer-events-none flex-col items-center justify-center text-center text-xl font-semibold">
        WHY CHOOSE US?
      </h3>
        <div className="w-full">
            <FeaturesSectionWithHoverEffects />
        </div>
    </>
  );
};

export default FeaturesSection;