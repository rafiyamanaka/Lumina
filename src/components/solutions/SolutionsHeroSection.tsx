import { HeroBanner } from "@/components/HeroBanner";

export function SolutionsHeroSection() {
  return (
    <HeroBanner
      className="hero--sub"
      eyebrow="Solutions Deep Dive"
      title={<>Five disciplines, <em>one</em> growth partnership.</>}
      description="The five solutions on our homepage are the short version. Here's exactly how we run each one with you — the frameworks we use, what you get at the end, and how we measure whether it worked."
      imageSrc="https://images.unsplash.com/photo-1646617747563-4f080bddf282?q=80&w=1600&auto=format&fit=crop"
      imageAlt="Tim Lumina Growth memetakan diagram strategi di atas kertas"
      actions={[
        { href: "#book", label: "Book a Call", variant: "primary" },
        { href: "#framework", label: "See Our Framework", variant: "outline" },
      ]}
    />
  );
}