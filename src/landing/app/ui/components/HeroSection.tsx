import BlurFade from "@/components/ui/blur-fade";
import SparklesText from "@/components/ui/sparkles-text";
import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <BlurFade delay={0.25} inView>
        <div className="relative flex w-full flex-row items-center justify-center overflow-hidden">
          <Image
            src="/NG_Logo_Clear.png"
            alt="Logo"
            width={500}
            height={500}
          />
        </div>
      </BlurFade>
      <BlurFade delay={0.25 * 2} inView>
        <div>
          <SparklesText
            text="Define your style with us!"
            className="relative flex h-[50px] w-full flex-row text-3xl items-center justify-center overflow-hidden"
          />

          <h3 className="w-full h-full py-20 pointer-events-none flex-col items-center justify-center text-center text-xl text-muted-foreground ">
              Your trusted partner in custom corporate apparel and promotional
              products. We specialize in providing high-quality, customizable
              clothing solutions to meet the unique needs of businesses across
              various industries. Whether you’re looking to outfit your team,
              promote your brand, or offer thoughtful gifts to clients, we’re
              here to help you make a lasting impression
          </h3>
        </div>
      </BlurFade>
    </>
  );
};

export default HeroSection;