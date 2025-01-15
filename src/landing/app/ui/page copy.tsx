// "use client";
// import Image from "next/image";
// import React from "react";
// import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

// export default function AppleCardsCarouselDemo() {
//   const cards = data.map((card, index) => (
//     <Card key={card.src} card={card} index={index} />
//   ));

//   return (
//     <div className="w-full h-full py-20">
//       <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
//         Get to know your iSad.
//       </h2>
//       <Carousel items={cards} />
//     </div>
//   );
// }

// const DummyContent = () => {
//   return (
//     <>
//       {[...new Array(3).fill(1)].map((_, index) => {
//         return (
//           <div
//             key={"dummy-content" + index}
//             className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
//           >
//             <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
//               <span className="font-bold text-neutral-700 dark:text-neutral-200">
//                 The first rule of Apple club is that you boast about Apple club.
//               </span>{" "}
//               Keep a journal, quickly jot down a grocery list, and take amazing
//               class notes. Want to convert those notes to text? No problem.
//               Langotiya jeetu ka mara hua yaar is ready to capture every
//               thought.
//             </p>
//             <Image
//               src="/NG_Logo_Clear.png"
//               alt="Macbook mockup from Aceternity UI"
//               height="500"
//               width="500"
//               className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// };

// const data = [
//   {
//     category: "Artificial Intelligence",
//     title: "You can do more with AI.",
//     src: "/NG_Logo_Clear.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Productivity",
//     title: "Enhance your productivity.",
//     src: "/NG_Logo_Clear.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Product",
//     title: "Launching the new Apple Vision Pro.",
//     src: "/NG_Logo_Clear.png",
//     content: <DummyContent />,
//   },

//   {
//     category: "Product",
//     title: "Maps for your iPhone 15 Pro Max.",
//     src: "/NG_Logo_Clear.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "iOS",
//     title: "Photography just got better.",
//     src: "/NG_Logo_Clear.png",
//     content: <DummyContent />,
//   },
//   {
//     category: "Hiring",
//     title: "Hiring for a Staff Software Engineer",
//     src: "/NG_Logo_Clear.png",
//     content: <DummyContent />,
//   },
// ];


// import {
//   BellIcon,
//   CalendarIcon,
//   FileTextIcon,
//   GlobeIcon,
//   InputIcon,
// } from "@radix-ui/react-icons";

// import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";

// const features = [
//   {
//     Icon: FileTextIcon,
//     name: "Save your files",
//     description: "We automatically save your files as you type.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
//   },
//   {
//     Icon: InputIcon,
//     name: "Full text search",
//     description: "Search through all your files in one place.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
//   },
//   {
//     Icon: GlobeIcon,
//     name: "Multilingual",
//     description: "Supports 100+ languages and counting.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
//   },
//   {
//     Icon: CalendarIcon,
//     name: "Calendar",
//     description: "Use the calendar to filter your files by date.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
//   },
//   {
//     Icon: BellIcon,
//     name: "Notifications",
//     description:
//       "Get notified when someone shares a file or mentions you in a comment.",
//     href: "/",
//     cta: "Learn more",
//     background: <img className="absolute -right-20 -top-20 opacity-60" />,
//     className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
//   },
// ];

// export default function  BentoDemo() {
//   return (
//     <BentoGrid className="lg:grid-rows-3">
//       {features.map((feature) => (
//         <BentoCard key={feature.name} {...feature} />
//       ))}
//     </BentoGrid>
//   );
// }
