import { HeroBanner } from "@/components/HeroBanner";

import { heroBadges } from "@/data/site-data";

export function HeroSection() {
  return (
    <HeroBanner
      eyebrow="Strategic Growth Partner"
      title={<>Your Strategic Partner from <em>Idea</em> to Growth.</>}
      description="We help founders validate ideas, build better products, and scale businesses with strategy, data, and execution."
      imageSrc="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?q=80&w=1600&auto=format&fit=crop"
      imageAlt="Tim Lumina Growth berdiskusi strategi bersama klien di ruang kerja"
      badges={heroBadges}
      actions={[
        { href: "#book", label: "Book a Call", variant: "primary" },
        { href: "#solutions", label: "View Solutions", variant: "outline" },
      ]}
    />
  );
}