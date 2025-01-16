import {TestimonialsSection } from "@/components/ui/testimonial-with-marquee";

interface Testimonial {
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
  href?: string;
}

const testimonials: Testimonial[] = [
  {
    author: {
      name: "Emma Thompson",
      handle: "@emmaai",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    },
    text: "Using this AI platform has transformed how we handle data analysis. The speed and accuracy are unprecedented.",
    href: "https://twitter.com/emmaai",
  },
  {
    author: {
      name: "David Park",
      handle: "@davidtech",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    text: "The API integration is flawless. We've reduced our development time by 60% since implementing this solution.",
    href: "https://twitter.com/davidtech",
  },
  {
    author: {
      name: "Sofia Rodriguez",
      handle: "@sofiaml",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    text: "Finally, an AI tool that actually understands context! The accuracy in natural language processing is impressive.",
  },
];

const TestimonialsSectionComponent = () => {
  return (
    <TestimonialsSection
      title="Trusted by companies"
      description="Stand out with custom-printed t-shirts, caps, and hoodies that showcase your unique style and code."
      testimonials={testimonials}
    />
  );
};

export default TestimonialsSectionComponent;