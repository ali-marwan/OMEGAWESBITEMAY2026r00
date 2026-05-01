export type PortfolioProject = {
  slug: string;
  title: string;
  client?: string;
  category:
    | "Commercial Fit-Out"
    | "Residential Renovation"
    | "Property Care"
    | "Engineering Coordination"
    | "Interior Upgrade";
  summary: string;
  description: string;
  scope: string[];
  services: string[];
  location?: string;
  year?: string;
  cover: string;
  gallery: string[];
};

const M = "/Website-Projectmedia";

export const PORTFOLIO: PortfolioProject[] = [
  {
    slug: "amazon",
    title: "Amazon — Commercial Works",
    client: "Amazon",
    category: "Commercial Fit-Out",
    summary: "Commercial-grade execution for an enterprise operator.",
    description:
      "Coordinated commercial works delivered under OMEGA supervision, with attention to safety, scheduling, and finish quality required by an enterprise operator.",
    scope: ["Commercial finishing", "MEP coordination", "Trade scheduling", "Snagging and handover"],
    services: ["Engineering Solutions", "Renovation"],
    location: "Dubai",
    year: "Recent",
    cover: `${M}/Amazon/Amazon1.png`,
    gallery: [
      `${M}/Amazon/Amazon1.png`,
      `${M}/Amazon/Amazon2.jpg`,
      `${M}/Amazon/Amazon3.png`,
      `${M}/Amazon/Amazon4.jpg`
    ]
  },
  {
    slug: "marriott",
    title: "Marriott — Hospitality Works",
    client: "Marriott",
    category: "Commercial Fit-Out",
    summary: "Hospitality-grade finish standards under brand requirements.",
    description:
      "Hospitality projects come with brand standards, operational hours, and finish-quality benchmarks. OMEGA ran the works under those constraints with documented progress.",
    scope: ["Brand-aligned finishing", "Out-of-hours execution", "Trade coordination"],
    services: ["Renovation", "Engineering Solutions"],
    location: "Dubai",
    year: "Recent",
    cover: `${M}/Marriott/marriott 1.jpeg`,
    gallery: [
      `${M}/Marriott/marriott 1.jpeg`,
      `${M}/Marriott/marriott 2.jpg`,
      `${M}/Marriott/marriott 3.jpeg`
    ]
  },
  {
    slug: "imtiaz-dubai-hills",
    title: "IMTIAZ — Dubai Hills",
    client: "IMTIAZ Developments",
    category: "Engineering Coordination",
    summary: "Developer-side engineering and execution coordination.",
    description:
      "Working alongside a developer requires a different layer of coordination — drawings, scope alignment, and documented execution. OMEGA delivered against developer-grade requirements.",
    scope: ["Engineering coordination", "Drawings alignment", "Execution"],
    services: ["Engineering Solutions"],
    location: "Dubai Hills",
    year: "Recent",
    cover: `${M}/IMTIAZ - DUBAI HILLS/1.png`,
    gallery: [
      `${M}/IMTIAZ - DUBAI HILLS/1.png`,
      `${M}/IMTIAZ - DUBAI HILLS/2.png`,
      `${M}/IMTIAZ - DUBAI HILLS/3.png`,
      `${M}/IMTIAZ - DUBAI HILLS/4.png`
    ]
  },
  {
    slug: "maan-properties-main-entrance",
    title: "MAAN Properties — Main Entrance",
    client: "MAAN Properties",
    category: "Engineering Coordination",
    summary: "Main entrance design and execution coordination.",
    description:
      "Main entrance work in a managed building demands awareness of community rules, finish quality, and resident impact. OMEGA executed with that context in mind.",
    scope: ["Entrance design coordination", "Finishing execution", "Community awareness"],
    services: ["Engineering Solutions", "Renovation"],
    location: "Dubai",
    year: "Recent",
    cover: `${M}/MAAN PROPERTIES- MAIN ENTRANCE/1.png`,
    gallery: [
      `${M}/MAAN PROPERTIES- MAIN ENTRANCE/1.png`,
      `${M}/MAAN PROPERTIES- MAIN ENTRANCE/2.png`,
      `${M}/MAAN PROPERTIES- MAIN ENTRANCE/3.png`,
      `${M}/MAAN PROPERTIES- MAIN ENTRANCE/4.png`,
      `${M}/MAAN PROPERTIES- MAIN ENTRANCE/5.png`
    ]
  },
  {
    slug: "metahub",
    title: "MetaHub — Workspace",
    client: "MetaHub",
    category: "Commercial Fit-Out",
    summary: "Modern workspace fit-out execution.",
    description:
      "Workspace fit-out delivered under OMEGA's engineering-led approach — drawings, scope, MEP, finishing, and handover.",
    scope: ["Workspace fit-out", "MEP coordination", "Finishing"],
    services: ["Renovation", "Engineering Solutions"],
    location: "Dubai",
    year: "Recent",
    cover: `${M}/MetaHub/1.png`,
    gallery: [
      `${M}/MetaHub/1.png`,
      `${M}/MetaHub/2.png`,
      `${M}/MetaHub/3.png`,
      `${M}/MetaHub/4.png`
    ]
  },
  {
    slug: "q-motors",
    title: "Q Motors — Showroom",
    client: "Q Motors",
    category: "Commercial Fit-Out",
    summary: "Automotive showroom finish and execution.",
    description:
      "Showroom environments demand a specific level of finish and lighting. OMEGA executed with attention to surfaces, lighting, and brand presentation.",
    scope: ["Showroom finishing", "Lighting alignment", "Surface execution"],
    services: ["Renovation"],
    location: "Dubai",
    year: "Recent",
    cover: `${M}/Q Motors/Q motors 1.png`,
    gallery: [
      `${M}/Q Motors/Q motors 1.png`,
      `${M}/Q Motors/Q motors 2.png`
    ]
  },
  {
    slug: "greens-residential",
    title: "Greens — Residential Upgrade",
    category: "Residential Renovation",
    summary: "Residential interior upgrade in The Greens community.",
    description:
      "A residential interior upgrade in a managed community — quiet hours, community rules, and resident-friendly execution informed the plan.",
    scope: ["Interior upgrade", "Finishing", "Resident-friendly scheduling"],
    services: ["Renovation"],
    location: "The Greens, Dubai",
    year: "Recent",
    cover: `${M}/Greens/1.png`,
    gallery: [
      `${M}/Greens/1.png`,
      `${M}/Greens/2.jpg`
    ]
  },
  {
    slug: "sheikha-residence",
    title: "Sheikha Residence — Premium Interior",
    category: "Residential Renovation",
    summary: "High-end residential interior works.",
    description:
      "Premium residential interior with attention to finish quality and material standards. Executed with documented scope and supervised trades.",
    scope: ["Premium finishing", "Materials coordination", "Snagging and handover"],
    services: ["Renovation", "Engineering Solutions"],
    location: "Dubai",
    year: "Recent",
    cover: `${M}/Sheikha/sheikha 1/1.jpg`,
    gallery: [
      `${M}/Sheikha/sheikha 1/1.jpg`,
      `${M}/Sheikha/sheikha 1/2.jpg`,
      `${M}/Sheikha/sheikha 2/1.jpg`,
      `${M}/Sheikha/sheikha 2/2.jpg`,
      `${M}/Sheikha/sheikha 2/3.jpg`
    ]
  }
];

export function getProjectBySlug(slug: string) {
  return PORTFOLIO.find((p) => p.slug === slug);
}

export const PORTFOLIO_CATEGORIES = [
  "All",
  "Commercial Fit-Out",
  "Residential Renovation",
  "Engineering Coordination",
  "Property Care",
  "Interior Upgrade"
] as const;
