import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from 'next/image';
import SparklesText from "@/components/ui/sparkles-text";
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import BlurFade from "@/components/ui/blur-fade";
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

    // <><section id="header">
    //   <BlurFade delay={0.25} inView>
    //     <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
    //       Hello World 👋
    //     </h2>
    //   </BlurFade>
      
    //     <span className="text-pretty text-xl tracking-tighter sm:text-3xl xl:text-4xl/none">
    //       Nice to meet you
    //     </span>
    //   </BlurFade>
    // </section><>
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

        {/* <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/90 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-00/10">
            Define your style with us!
          </span>
          <BorderBeam size={500} duration={12} delay={9} />
        </div>
        </div> */}
        <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border ">
          <span className="pointer-events-none text-center text-xl font-semibold">
            Define your style with us!
          </span>
          <BorderBeam size={250} duration={5} delay={9} />
        </div>

        <div>
          <Card className="w-[350px] border-0">
            <CardHeader>
              <CardTitle>Create project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <span className="pointer-events-none text-center text-xl font-semibold">
                Define your style with us!
              </span>
            </CardContent>
          </Card>
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
      </></>
  );
}
