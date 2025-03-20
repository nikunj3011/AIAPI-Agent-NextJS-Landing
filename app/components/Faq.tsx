import { FaqSection } from "@/components/ui/faq";

const DEMO_FAQS = [
  {
    question: "What makes your platform unique?",
    answer:
      "Our platform stands out through its intuitive design, Competitive Pricing without Compromising Quality, and no hidden costs. We've focused on creating a user experience that combines simplicity with advanced features.",
  },
  {
    question: "What is the typical turnaround time for products?",
    answer:
      "Our standard turnaround time is 3-5 business days for most printed products. However, we also offer expedited printing options for urgent orders. Please contact us for more information.",
  },
  {
    question: "How does the pricing structure work?",
    answer:
      "We offer flexible, transparent pricing tiers designed to scale with your needs. Each tier includes a core set of features, with additional capabilities as you move up. All plans start with a 14-day free trial.",
  },
  {
    question: "Can I customize the design of my printed products?",
    answer:
      "Yes, we offer custom design services for all our printed products. Our team of expert designers will work with you to create a design that meets your specifications and branding requirements. We also accept customer-supplied designs.",
  },
];

const Faq = () => {
  return (
    <FaqSection
      title="Frequently Asked Questions"
      description="Everything you need to know about our platform"
      items={DEMO_FAQS}
    />
  );
};

export default Faq;