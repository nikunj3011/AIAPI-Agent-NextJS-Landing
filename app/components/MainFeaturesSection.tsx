import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//NG_Logo_Clear.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const data = [
  {
    category: "",
    title: "Hoodie",
    src: "https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//hoodie.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Polo Tshirt",
    src: "https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//polo.jpg",
    content: <DummyContent />,
  },
  {
    category: "",
    title: "Caps",
    src: "https://nikunj3011.github.io/AIAPI-Agent-NextJS-Landing//cap.jpg",
    content: <DummyContent />,
  },
];

const cards = data.map((card, index) => (
  <Card key={card.src} card={card} index={index} />
));
const MainFeaturesSection = () => {
  return (
    <>
      <div>
          <div className="space-y-8">
          </div>
          <h3>
            <span className="w-full h-full py-20 pointer-events-none text-center text-xl font-semibold"></span>
          </h3>
        </div>
          <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border ">
            <div className="w-full h-full py-20">
              <Carousel items={cards} />
            </div>
            <BorderBeam size={550} duration={5} delay={9} />
          </div>
    </>
  );
};

export default MainFeaturesSection;