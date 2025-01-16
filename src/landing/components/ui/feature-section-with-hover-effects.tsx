import { cn } from "@/lib/utils";
import {
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSectionWithHoverEffects() {
  const features = [
    {
      title: "High-Quality Fabrics",
      description:
        "We take pride in sourcing premium materials to ensure comfort and longevity. Whether it’s for a casual team outing or a corporate event, our products are built to last, maintaining their look and feel wash after wash.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Custom Design Services",
      description:
        "Our expert design team is dedicated to bringing your ideas to life. We’ll work with you to create unique, tailored designs, providing a digital copy for approval before production to ensure you’re completely satisfied.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Affordable Wholesale Pricing",
      description:
        "We understand the demands of running a business, which is why we offer competitive, wholesale pricing tailored to suit your needs. Outfit your team or stock up on branded products for promotional use, all at a price that fits your budget.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Quick Turnaround & Easy Ordering",
      description: "We make the process as simple as possible. From placing an order to receiving your products, we aim to streamline your experience so you can focus on what you do best—running your business.",
      icon: <IconCloud />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
