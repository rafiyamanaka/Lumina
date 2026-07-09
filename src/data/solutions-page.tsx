import type { ReactNode } from "react";

import type { NavLink, ProcessStep } from "@/data/site-data";

export type SolutionPillar = {
  id: string;
  num: string;
  tag: string;
  bg: "pillar--cream" | "pillar--card";
  reverse: boolean;
  icon: ReactNode;
  title: string;
  lead: string;
  steps: ProcessStep[];
  deliverables: string[];
  score: {
    label: string;
    value: string;
    max: string;
    badge: string;
    rows: [string, string][];
  };
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const solutionsNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Programs", href: "/#programs" },
  { label: "Insights", href: "/#insights" },
  { label: "Resources", href: "/#resources" },
];

export const frameworkSteps: ProcessStep[] = [
  {
    title: "Diagnose",
    description:
      "We map the real problem before proposing a fix — current state, constraints, and what success needs to look like in numbers.",
  },
  {
    title: "Design",
    description:
      "We turn the diagnosis into a specific plan — the frameworks, sequencing, and ownership needed to execute without guesswork.",
  },
  {
    title: "Deploy",
    description:
      "We work inside your team to ship the plan — experiments, prototypes, campaigns, or systems, not just slide decks.",
  },
  {
    title: "Decide",
    description:
      "We close the loop with data, so every next decision is a documented choice rather than a fresh guess.",
  },
];

export const solutionPillars: SolutionPillar[] = [
  {
    id: "business-strategy",
    num: "01",
    tag: "Business Strategy",
    bg: "pillar--cream",
    reverse: false,
    icon: <path d="M3 12h4l3 8 4-16 3 8h4" />,
    title: "Clarity before commitment.",
    lead:
      "Most founders move fast on an unproven premise — the wrong market, the wrong price, or a business model that can't survive its own unit economics. We slow that one decision down before you spend months building on it.",
    steps: [
      {
        title: "Market & Competitive Mapping",
        description:
          "We size the real opportunity and map who else is already solving this problem, so you know exactly where the whitespace is.",
      },
      {
        title: "Business Model Design",
        description:
          "We pressure-test revenue streams, pricing logic, and cost structure until the model survives scrutiny, not just optimism.",
      },
      {
        title: "Positioning & Go-to-Market Blueprint",
        description:
          "We define the message, the channel sequence, and the launch order, so go-to-market is a plan, not an improvisation.",
      },
      {
        title: "Validation Sprint",
        description: "We test the model's core assumptions with real prospects before you commit real budget to it.",
      },
    ],
    deliverables: [
      "Market opportunity brief",
      "Business model canvas, stress-tested",
      "Go-to-market roadmap",
      "Positioning statement your team can repeat verbatim",
    ],
    score: {
      label: "Strategy Clarity Score",
      value: "88",
      max: "100",
      badge: "Validated",
      rows: [["Market sized", "Yes"], ["Model stress-tested", "Yes"], ["GTM sequenced", "4 phases"]],
    },
  },
  {
    id: "product-strategy",
    num: "02",
    tag: "Product Strategy",
    bg: "pillar--card",
    reverse: true,
    icon: <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M9 7h6M9 11h6M9 15h3" />
    </>,
    title: "Build the right thing before you build fast.",
    lead:
      "Teams that ship quickly without validating the problem end up fast at building the wrong product. We put research and prioritization ahead of the roadmap, not after it.",
    steps: [
      {
        title: "User & Problem Research",
        description:
          "We talk to the people you're building for and map the friction they actually feel, not the one your team assumes.",
      },
      {
        title: "MVP Scoping",
        description:
          "We draw a hard line around what 'minimum' and 'lovable' really mean for this product, so scope creep has somewhere to stop.",
      },
      {
        title: "Roadmap Prioritization",
        description:
          "We sequence features by impact and effort, using a shared framework your team can reuse after we've left.",
      },
      {
        title: "Usability Validation",
        description: "We test the prototype with real users before a single line of production code is written.",
      },
    ],
    deliverables: ["User research synthesis", "MVP scope document", "Prioritized product roadmap", "Usability test findings & fixes"],
    score: {
      label: "Product-Market Signal",
      value: "76",
      max: "100",
      badge: "Testing",
      rows: [["Users interviewed", "18"], ["Features validated", "12"], ["Usability issues closed", "9"]],
    },
  },
  {
    id: "growth-marketing",
    num: "03",
    tag: "Growth & Marketing",
    bg: "pillar--cream",
    reverse: false,
    icon: <path d="M4 19h16M7 15l4-5 3 3 4-6" />,
    title: "Systematic growth, not scattered marketing.",
    lead:
      "Running five channels with no shared measurement isn't a growth strategy — it's five experiments with no conclusion. We give the funnel one owner and one scoreboard.",
    steps: [
      {
        title: "Funnel Diagnostic",
        description:
          "We map acquisition, activation, and retention together, and find exactly where the funnel is leaking before we spend on more traffic.",
      },
      {
        title: "Channel & Experiment Design",
        description:
          "We structure acquisition tests with clear hypotheses, so 'it didn't work' becomes a documented learning, not a dead end.",
      },
      {
        title: "Conversion Optimization",
        description:
          "We rework onboarding, pricing pages, and messaging where the data shows the drop-off actually happens.",
      },
      {
        title: "Retention System",
        description: "We build the lifecycle touchpoints that keep customers active long after the first purchase.",
      },
    ],
    deliverables: ["Full-funnel audit report", "Experiment backlog with hypotheses", "Conversion optimization plan", "Retention & lifecycle playbook"],
    score: {
      label: "Funnel Health Score",
      value: "79",
      max: "100",
      badge: "Optimizing",
      rows: [["Leak points found", "3"], ["Experiments running", "6"], ["Retention lift", "+18%"]],
    },
  },
  {
    id: "data-analytics",
    num: "04",
    tag: "Data & Analytics",
    bg: "pillar--card",
    reverse: true,
    icon: <path d="M4 19V9M10 19V5M16 19v-7M4 19h16" />,
    title: "Decisions backed by evidence, not memory.",
    lead:
      "When every team keeps its own spreadsheet, nobody actually agrees on the numbers. We build the one dashboard everyone trusts, and the habit of checking it before deciding.",
    steps: [
      {
        title: "KPI Framework Definition",
        description:
          "We align on one north-star metric and the handful of KPIs that actually move it, so reporting stops being a wish list.",
      },
      {
        title: "Data Infrastructure Audit",
        description:
          "We check what's tracked, what's missing, and what's simply wrong, before a single chart gets built.",
      },
      {
        title: "Dashboard & Reporting System",
        description: "We build the live dashboard that replaces the exported spreadsheet nobody trusts.",
      },
      {
        title: "Insight Cadence",
        description: "We set the recurring review rhythm that turns dashboards into decisions instead of decoration.",
      },
    ],
    deliverables: ["KPI framework document", "Data quality audit", "Live decision dashboard", "Weekly/monthly review cadence"],
    score: {
      label: "Data Maturity Score",
      value: "82",
      max: "100",
      badge: "Reliable",
      rows: [["KPIs defined", "9"], ["Tracking gaps closed", "14"], ["Review cadence", "Weekly"]],
    },
  },
  {
    id: "brand-experience",
    num: "05",
    tag: "Brand Experience",
    bg: "pillar--cream",
    reverse: false,
    icon: <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></>,
    title: "Consistency people can feel, before they can name.",
    lead:
      "A brand that looks different on every channel doesn't feel untrustworthy by accident — it feels untrustworthy because nothing repeats. We make the repetition deliberate.",
    steps: [
      {
        title: "Brand Audit",
        description:
          "We review every touchpoint your customer sees, and log exactly where the voice and visuals stop matching.",
      },
      {
        title: "Positioning & Voice",
        description:
          "We define the message pillars and tone rules that make your brand sound like one company, everywhere.",
      },
      {
        title: "Visual Identity System",
        description:
          "We set the logo usage, color, and typography rules your team can apply without asking us each time.",
      },
      {
        title: "Experience Alignment",
        description:
          "We carry the same voice and visuals from the homepage to the support inbox, so nothing feels like a different company.",
      },
    ],
    deliverables: ["Brand touchpoint audit", "Messaging & voice framework", "Visual identity guideline", "Cross-channel consistency checklist"],
    score: {
      label: "Brand Consistency Score",
      value: "91",
      max: "100",
      badge: "Aligned",
      rows: [["Touchpoints audited", "22"], ["Voice rules defined", "6"], ["Channels aligned", "8 / 8"]],
    },
  },
];

export const solutionFaqs: FaqItem[] = [
  {
    question: "How long does one solution engagement take?",
    answer:
      "Most single-discipline engagements run 4-8 weeks. Combined programs — like Growth Sprint, which blends strategy, growth, and data — run longer and are scoped during the diagnosis phase.",
  },
  {
    question: "Can we combine solutions across pillars?",
    answer:
      "Yes. Most clients start with one pillar and add a second once the first shows results. Business Strategy and Product Strategy are the most common starting pair.",
  },
  {
    question: "What if our business is pre-revenue?",
    answer:
      "We adjust the diagnosis phase to focus on validation over optimization. The framework stays the same; the metrics we track change.",
  },
  {
    question: "Do you build the dashboards and systems yourselves, or just advise?",
    answer:
      "Both. We work inside your team to build the actual deliverable — a dashboard, a roadmap, or a campaign — not just hand over a slide deck.",
  },
  {
    question: "What makes this different from a general consultant?",
    answer:
      "We stay through execution, not just the recommendation. Every engagement ends with a system your team can run without us.",
  },
];