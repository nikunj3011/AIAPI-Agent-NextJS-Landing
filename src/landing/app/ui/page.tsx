import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from 'next/image';
import SparklesText from "@/components/ui/sparkles-text";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
import { Card, Carousel } from "@/components/ui/apple-cards-carousel";
import { FeaturesSectionWithHoverEffects } from "@/components/ui/feature-section-with-hover-effects";
import { TestimonialsSection } from "@/components/ui/testimonial-with-marquee";
import { Footer, FooterBottom } from "@/components/ui/footer";
import Navigation from "@/components/ui/navigation";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LaunchUI from "@/components/logos/launch-ui";
import { FaqSection } from "@/components/ui/faq";
import { Feature } from "@/components/ui/feature-section-with-grid";
import { GradientText } from "@/components/ui/gradient-text";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
];
const DEMO_FAQS = [
  {
    question: "What makes your platform unique?",
    answer: "Our platform stands out through its intuitive design, powerful automation capabilities, and seamless integration options. We've focused on creating a user experience that combines simplicity with advanced features.",
  },
  {
    question: "How does the pricing structure work?",
    answer: "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support through multiple channels. This includes 24/7 live chat, detailed documentation, video tutorials, and dedicated account managers for enterprise clients.",
  },
];

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
              src="/NG_Logo_Clear.png"
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
const data2 = [
  {
  category: "Product",
  title: "Hoodie",
  src: "/hoodie.jpg",
  content: <DummyContent />,
},
{
  category: "Product",
  title: "Polo Tshirt",
  src: "/polo.jpg",
  content: <DummyContent />,
},
{
  category: "Product",
  title: "Caps",
  src: "/cap.jpg",
  content: <DummyContent />,
},
];
const testimonials = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai"
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech"
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive."
  }
]
const cards = data2.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  const data = [
  {
    category: "Product",
    title: "Hoodie",
    src: "/hoodie.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Polo Tshirt",
    src: "/polo.jpg",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Caps",
    src: "/cap.jpg",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/NG_Logo_Clear.png",
    content: <DummyContent />,
  },
];
const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeDemoVertical() {
  return (

    <><header className="sticky top-0 z-50 -mb-4 px-4 pb-4">
      <div className="fade-bottom absolute left-0 h-20 w-full bg-background/15 backdrop-blur-lg"></div>
      <div className="relative mx-auto max-w-container">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              NG
            </a>
            {/* <Navigation /> */}
          </NavbarLeft>
          <NavbarRight>
            <a href="/" className="hidden text-sm md:block">
              Sign in
            </a>
            <Button variant="default" asChild>
              <a href="/">Get Started</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a
                    href="/"
                    className="flex items-center gap-2 text-xl font-bold"
                  >
                    <span>Launch UI</span>
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Getting Started
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Components
                  </a>
                  <a
                    href="/"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Documentation
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
    
      <><BlurFade delay={0.25} inView>
        <div className="relative flex w-full flex-row items-center justify-center overflow-hidden">
          <Image src="/NG_Logo_Clear.png" alt="Logo" width={500} height={500} />
        </div>
      </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <div>
            <SparklesText text="Define your style with us!" className="relative flex h-[50px] w-full flex-row text-3xl items-center justify-center overflow-hidden" />
          </div>
        </BlurFade><>
          <div>
          <div className="space-y-8">
      {/* With border */}
      <GradientText
        colors={["#ff40aa", "#40aaff", "#ff40aa"]}
        showBorder
        className="text-2xl font-medium px-4 py-2"
      >
                Your trusted partner in custom corporate apparel and promotional products. We specialize in providing high-quality, customizable clothing solutions to meet the unique needs of businesses across various industries. Whether you’re looking to outfit your team, promote your brand, or offer thoughtful gifts to clients, we’re here to help you make a lasting impression
      </GradientText>
    </div>
            <h3>
              <span className="w-full h-full py-20 pointer-events-none text-center text-xl font-semibold">
              </span>
            </h3>
          </div>

          <div>
            {/* <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/90 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-00/10">
        Define your style with us!
      </span>
      <BorderBeam size={500} duration={12} delay={9} />
    </div>
    </div> */}

            <div className="relative flex  w-full flex-col items-center justify-center overflow-hidden rounded-lg border ">
              <div className="w-full h-full py-20">


                <Carousel items={cards} />
              </div>
              <BorderBeam size={550} duration={5} delay={9} />
            </div>

            <div className="w-full">
      <Feature />
    </div>
            <h3 className="w-full h-full py-20 pointer-events-none flex-col items-center justify-center text-center text-xl font-semibold">
              <span className="w-full h-full py-20 pointer-events-none flex-col items-center justify-center text-center text-xl font-semibold">
                WHY CHOOSE US?
              </span>
            </h3>

            <div className="min-h-screen w-full">
              <div className=" w-full">
                <FeaturesSectionWithHoverEffects />
              </div>
            </div>

            <TestimonialsSection
              title="Trusted by companies"
              description="Stand out with custom-printed t-shirts, caps, and hoodies that showcase your unique style and code."
              testimonials={testimonials} />

<FaqSection
      title="Frequently Asked Questions"
      description="Everything you need to know about our platform"
      items={DEMO_FAQS}
      
    />
    
            <footer className="sticky bottom-0 bg-white bg-opacity-100 p-4">
              <div className="mx-auto max-w-container">
                <Footer className="pt-0">
                  <FooterBottom className="mt-0 flex flex-col items-center gap-4 sm:flex-col md:flex-row">
                    <div>© 2024 Nikunj Rathod. All rights reserved</div>
                    <div className="flex items-center gap-4">
                      <a href="#">Sign in</a> <a href="#">Sign up</a>|
                      <a href="#">Privacy Policy</a>
                      <a href="#">Terms of Service</a>
                    </div>
                  </FooterBottom>
                </Footer>
              </div>
            </footer>
            {/* <Card className="w-[350px] border-0">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <span className="pointer-events-none text-center text-xl font-semibold">
          Daa!
        </span>
      </CardContent>
    </Card> */}
          </div>
          {/* <div className="relative flex w-full flex-row items-center justify-center overflow-hidden">
<NeonGradientCard className="max-w-sm items-center justify-center text-center">
  <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
    Neon Gradient Card
  </span>
</NeonGradientCard>
</div> */}
          {/*
  <Marquee pauseOnHover vertical className="[--duration:20s]">
    {firstRow.map((review) => (
      <ReviewCard key={review.username} {...review} />
    ))}
  </Marquee>
  <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
    {secondRow.map((review) => (
      <ReviewCard key={review.username} {...review} />
    ))}
  </Marquee> */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
        </></></>
  );
}
