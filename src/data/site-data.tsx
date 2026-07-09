import type { ReactNode } from "react";

export type NavLink = {
  label: string;
  href: string;
};

export type CounterStat = {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export type SolutionItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type PlanItem = {
  name: string;
  description: string;
  cta: string;
  items: string[];
  featured?: boolean;
};

export type CaseStudy = {
  title: string;
  description: string;
  result: string;
  accentFrom: string;
  accentTo: string;
};

export type TestimonialItem = {
  quote: string;
  name: string;
  role: string;
};

export type ArticleItem = {
  date: string;
  category: string;
  title: string;
};

export type ResourceItem = {
  title: string;
  icon: ReactNode;
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Programs", href: "#programs" },
  { label: "Insights", href: "#insights" },
  { label: "Resources", href: "#resources" },
];

export const heroBadges = [
  "Proven Strategy",
  "Growth Mindset",
  "Impact Alignment",
];

export const trustStats: CounterStat[] = [
  { value: 95, suffix: "%", label: "Strategy clarity improvement" },
  { value: 40, suffix: "+", label: "Growth projects supported" },
  { value: 12, prefix: "$", suffix: "M+", label: "Revenue opportunities identified" },
];

export const logos = [
  "NovaLab",
  "Greenbyte",
  "Orbit Studio",
  "Scalehub",
  "Foundry Co.",
  "Nexora",
  "Brightpath",
];

export const solutions: SolutionItem[] = [
  {
    title: "Business Strategy",
    description: "Market validation, business model design, positioning, and go-to-market planning.",
    icon: <path d="M3 12h4l3 8 4-16 3 8h4" />,
  },
  {
    title: "Product Strategy",
    description: "UX research, MVP planning, feature prioritization, and product roadmap creation.",
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M9 7h6M9 11h6M9 15h3" />
      </>
    ),
  },
  {
    title: "Growth & Marketing",
    description: "Funnel optimization, acquisition strategy, retention planning, and growth experiments.",
    icon: <path d="M4 19h16M7 15l4-5 3 3 4-6" />,
  },
  {
    title: "Data & Analytics",
    description: "KPI framework, dashboard systems, performance tracking, and decision insights.",
    icon: <path d="M4 19V9M10 19V5M16 19v-7M4 19h16" />,
  },
  {
    title: "Brand Experience",
    description: "Brand positioning, visual identity, messaging, and customer experience alignment.",
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <path d="M12 8v4l3 2" />
      </>
    ),
  },
];

export const processSteps: ProcessStep[] = [
  {
    title: "Initial Diagnosis",
    description:
      "We identify your current challenges, business goals, market position, and growth opportunities.",
  },
  {
    title: "Market & Product Validation",
    description:
      "We test assumptions against real market signals to confirm what's worth building and for whom.",
  },
  {
    title: "Strategy Roadmap",
    description:
      "We translate findings into a sequenced plan with clear priorities, owners, and milestones.",
  },
  {
    title: "Growth Execution",
    description: "We run the roadmap with you - shipping experiments, campaigns, and product improvements.",
  },
  {
    title: "Performance Optimization",
    description:
      "We measure outcomes against KPIs and refine the system for compounding, sustainable growth.",
  },
];

export const plans: PlanItem[] = [
  {
    name: "Launch Program",
    description: "For founders validating ideas and building their first MVP.",
    cta: "Start Launch",
    items: ["Idea validation", "Market research", "MVP roadmap", "Brand foundation"],
  },
  {
    name: "Growth Sprint",
    description: "For businesses that need faster performance improvement.",
    cta: "Start Sprint",
    items: ["Growth audit", "Funnel optimization", "Conversion strategy", "Experiment roadmap"],
    featured: true,
  },
  {
    name: "Scale Program",
    description: "For companies ready to expand product, team, and operations.",
    cta: "Start Scale",
    items: ["Product optimization", "KPI dashboard", "Growth system", "Strategic expansion plan"],
  },
];

export const cases: CaseStudy[] = [
  {
    title: "Helping a SaaS startup validate product-market fit",
    description: "Orbit Studio - reworked onboarding and pricing signals before their Series A.",
    result: "+42% activation",
    accentFrom: "#B9FF18",
    accentTo: "#071006",
  },
  {
    title: "Repositioning a D2C brand for stronger conversion",
    description: "Brightpath - clarified brand voice and simplified the purchase path.",
    result: "+31% conversion",
    accentFrom: "#E7EBD6",
    accentTo: "#8E927F",
  },
  {
    title: "Building a KPI dashboard for a scaling business",
    description: "Scalehub - unified scattered spreadsheets into one decision system.",
    result: "3x faster decisions",
    accentFrom: "#071006",
    accentTo: "#B9FF18",
  },
];

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "They helped us move from scattered ideas to a clear growth roadmap with measurable execution.",
    name: "Maya Reynolds",
    role: "Founder, Nexora Studio",
  },
  {
    quote: "Lumina gave our team a shared language for what to build next and why.",
    name: "Daniel Cho",
    role: "Co-founder, Orbit Studio",
  },
  {
    quote: "The KPI system alone paid for the engagement within a quarter.",
    name: "Aisyah Putri",
    role: "CEO, Scalehub",
  },
];

export const articles: ArticleItem[] = [
  {
    date: "Jan 8, 2026",
    category: "Strategy",
    title: "Turning Ideas into Strategy: The Founder's Growth Framework",
  },
  {
    date: "Jan 8, 2026",
    category: "Product",
    title: "How to Validate a Startup Idea Before Building an MVP",
  },
  {
    date: "Jan 8, 2026",
    category: "Growth",
    title: "Product-Market Fit Signals Every Founder Should Track",
  },
  {
    date: "Jan 8, 2026",
    category: "Data",
    title: "Why Data-Driven Decisions Help Businesses Scale Faster",
  },
];

export const resources: ResourceItem[] = [
  {
    title: "Business Model Canvas",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
  },
  {
    title: "Growth Checklist",
    icon: (
      <>
        <path d="M9 11l3 3 8-8M20 12v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h9" />
      </>
    ),
  },
  {
    title: "Product Roadmap Template",
    icon: <path d="M3 12h4l3-7 4 14 3-7h4" />,
  },
  {
    title: "KPI Dashboard Framework",
    icon: <path d="M4 19V9M10 19V5M16 19v-7M4 19h16" />,
  },
];