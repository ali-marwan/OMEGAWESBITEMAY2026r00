export type ServicePillar = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  description: string;
  positioning: string;
  features: string[];
  useCases: string[];
  process: { step: string; title: string; description: string }[];
  faq: { q: string; a: string }[];
  ctas: { label: string; href: string; variant: "primary" | "secondary" | "ghost" }[];
};

export const SERVICES: ServicePillar[] = [
  {
    slug: "home-services",
    title: "OMEGA Home Services",
    shortTitle: "Home Services",
    eyebrow: "RESIDENTIAL · COMMERCIAL · UAE",
    summary:
      "Fast, structured property repair and maintenance services for apartments, villas, and commercial spaces.",
    description:
      "OMEGA Home Services covers the everyday issues that keep a property running — from AC and plumbing to electrical, leaks, finishing, and handyman scopes. Every job is logged, every visit is reported, and every recommendation is reviewed before execution.",
    positioning:
      "Day-to-day service work — booked through Marketplace, executed by qualified trades, supervised under OMEGA's process.",
    features: [
      "Same-day or scheduled visit windows",
      "Trade-qualified technicians supervised by OMEGA",
      "Photo-documented before/after for every visit",
      "Inspection report option for unclear scopes",
      "Transparent pricing per visit, scope, or AMC"
    ],
    useCases: [
      "AC service, refill, cleaning, repair, replacement",
      "Plumbing — taps, drains, water heaters, leaks",
      "Electrical — tripping, sockets, switches, lights, DBs",
      "Leak detection and source tracing",
      "Painting — touch-up, full unit, premium finish",
      "Gypsum and ceiling repair",
      "Waterproofing fixes for balconies and wet areas",
      "Handyman, door, window, and small fixings",
      "General apartment, villa, and commercial maintenance"
    ],
    process: [
      {
        step: "01",
        title: "Describe the issue",
        description:
          "Open Marketplace or talk to OMEGA AI. Describe the issue, share photos or a video, and we'll guide you to the right service."
      },
      {
        step: "02",
        title: "Inspection or direct booking",
        description:
          "For unclear scopes, book a paid inspection (AED 100). For known issues, book the service directly with an indicative price."
      },
      {
        step: "03",
        title: "Service visit",
        description:
          "An OMEGA-supervised technician attends, executes the agreed scope, and documents the work with photos."
      },
      {
        step: "04",
        title: "Report and aftercare",
        description:
          "We share a short report and any recommendations. AMC clients get history tracked across all visits."
      }
    ],
    faq: [
      {
        q: "How do I book a service?",
        a: "Open the OMEGA Marketplace, choose the service category, and follow the booking flow. If you're unsure what's needed, ask OMEGA AI or book a paid inspection."
      },
      {
        q: "What is the inspection fee?",
        a: "An OMEGA inspection is AED 100. The technician attends, diagnoses the issue, and provides an indicative scope and price. The fee is separate from any subsequent service work."
      },
      {
        q: "Do you offer emergency visits?",
        a: "Yes — for urgent issues like major leaks or electrical safety risks, message OMEGA on WhatsApp and we will route the request to the closest available team."
      }
    ],
    ctas: [
      { label: "Open Marketplace", href: "/marketplace", variant: "primary" },
      { label: "Book Inspection — AED 100", href: "/marketplace/inspection", variant: "secondary" },
      { label: "Ask OMEGA AI", href: "#open-omega-ai", variant: "ghost" }
    ]
  },
  {
    slug: "property-care-system-amc",
    title: "OMEGA Property Care System AMC",
    shortTitle: "Property Care AMC",
    eyebrow: "AMC · PREVENTIVE CARE · REPORTING",
    summary:
      "A structured property care and annual maintenance system for owners, landlords, property managers, and recurring service needs.",
    description:
      "The Property Care System replaces ad-hoc maintenance with a planned, reported, and supervised approach. Each property has a record. Each visit is logged. Each recommendation is documented for owner approval.",
    positioning:
      "Built for owners and property managers who want fewer surprises, clearer reporting, and one accountable team across visits.",
    features: [
      "Annual preventive maintenance schedule",
      "AC and plumbing periodic checks",
      "Electrical safety review",
      "Emergency response support",
      "Property condition tracking with photo records",
      "Monthly or per-visit reporting",
      "Tenant and owner coordination",
      "Recommendation register with approval status"
    ],
    useCases: [
      "Landlords with single or multiple units",
      "End-users who want their own home cared for properly",
      "Property managers handling multiple units across communities",
      "Commercial spaces — clinics, retail, offices, restaurants",
      "Holiday homes that need pre-arrival readiness checks"
    ],
    process: [
      {
        step: "01",
        title: "Property profiling",
        description:
          "We capture property type, age, systems in place, and known issues. Each unit gets its own AMC profile."
      },
      {
        step: "02",
        title: "Plan and schedule",
        description:
          "We propose a preventive plan — visit frequency, scope per visit, included items, and emergency response terms."
      },
      {
        step: "03",
        title: "Execution and reporting",
        description:
          "Scheduled visits are executed and logged. Findings, photos, and recommendations are reported every cycle."
      },
      {
        step: "04",
        title: "Renewal and review",
        description:
          "Each year we review what changed in the property and update the plan, scope, and pricing accordingly."
      }
    ],
    faq: [
      {
        q: "Is AMC the same as a maintenance contract?",
        a: "It's similar in concept, but the OMEGA Property Care System is structured around reporting, photo-documentation, recommendation tracking, and engineer-led oversight rather than a generic per-visit contract."
      },
      {
        q: "Do you cover emergencies under AMC?",
        a: "Each AMC plan defines what is included — preventive visits, included repairs, emergency response, and any limits. We share the plan in writing before signing."
      },
      {
        q: "Can a property manager onboard multiple units?",
        a: "Yes. For portfolios, the OMEGA AI Property Intelligence Platform is the recommended layer for tracking units, reports, BOQs, and approvals across many properties."
      }
    ],
    ctas: [
      { label: "Request AMC Quotation", href: "/marketplace/quote-request?type=amc", variant: "primary" },
      { label: "Book Inspection — AED 100", href: "/marketplace/inspection", variant: "secondary" },
      { label: "Talk to OMEGA", href: "/contact", variant: "ghost" }
    ]
  },
  {
    slug: "renovation",
    title: "OMEGA Renovation",
    shortTitle: "Renovation",
    eyebrow: "INTERIOR · FIT-OUT · UPGRADE",
    summary:
      "Renovation and interior upgrade services guided by engineering, cost control, and execution coordination.",
    description:
      "Renovation projects fail when scope, design, and execution are not aligned. OMEGA Renovation runs the project end-to-end — from inspection and scope to drawings, MEP coordination, finishes, and authority-aware execution.",
    positioning:
      "Renovation built on engineering, written for owners — apartments, villas, majlis, kitchens, bathrooms, offices, and shop fit-outs.",
    features: [
      "Pre-renovation inspection and scope documentation",
      "Concept and finishing direction with the client",
      "Civil and MEP coordination under one team",
      "Authority and building management awareness where applicable",
      "Material and finish sourcing support",
      "Execution under OMEGA supervision",
      "Snagging, handover, and aftercare",
      "Documented before/after"
    ],
    useCases: [
      "Apartment renovation and upgrades",
      "Villa renovation and extensions",
      "Majlis and living space transformation",
      "Bathroom renovation",
      "Kitchen renovation",
      "Office, clinic, and retail fit-out",
      "Restaurant fit-out coordination",
      "Holiday home upgrades"
    ],
    process: [
      {
        step: "01",
        title: "Inspection and scope",
        description:
          "We attend the property, capture conditions, discuss intent, and define the scope with the owner."
      },
      {
        step: "02",
        title: "Design and BOQ",
        description:
          "Concept direction is aligned with budget. A BOQ and scope of work are drafted with engineering review."
      },
      {
        step: "03",
        title: "Approvals and prep",
        description:
          "Where applicable, building and authority requirements are checked and prepared before execution begins."
      },
      {
        step: "04",
        title: "Execution and handover",
        description:
          "OMEGA runs the site, coordinates trades, manages quality, and delivers a snagged, photographed handover."
      }
    ],
    faq: [
      {
        q: "Do you handle authority approvals?",
        a: "OMEGA can support authority-related coordination and technical preparation where applicable. Final authority approvals are subject to the relevant authority, building, and community requirements."
      },
      {
        q: "How long does a typical renovation take?",
        a: "Timelines depend on scope. A bathroom renovation may run a few weeks, a full villa renovation can run several months. We share a project timeline after scope and BOQ are confirmed."
      },
      {
        q: "Do you provide design or only execution?",
        a: "We support design direction in coordination with the client. For dedicated design work, we align the design layer with our engineering and execution team to keep scope realistic."
      }
    ],
    ctas: [
      { label: "Request Quotation", href: "/marketplace/quote-request?type=renovation", variant: "primary" },
      { label: "Book Inspection — AED 100", href: "/marketplace/inspection", variant: "secondary" },
      { label: "View Portfolio", href: "/portfolio", variant: "ghost" }
    ]
  },
  {
    slug: "engineering-solutions",
    title: "OMEGA Engineering Solutions",
    shortTitle: "Engineering",
    eyebrow: "DRAWINGS · DESIGN · AUTHORITY",
    summary:
      "Drawings, design coordination, technical review, MEP coordination, and authority-related support where applicable.",
    description:
      "OMEGA Engineering Solutions exists for projects that need more than execution — they need technical clarity, scoped drawings, MEP review, and informed authority navigation. We work with owners, fit-out clients, and other contractors who need an engineering partner.",
    positioning:
      "Engineering depth for renovation, fit-out, and property work that needs drawings, design coordination, or technical review.",
    features: [
      "Site assessment and condition reporting",
      "Drawings coordination — civil, finishes, MEP layouts",
      "MEP review and conflict-checking",
      "Technical reporting and engineer-reviewed scope",
      "BOQ and scope of work review",
      "DCD, DEWA, DM, DDA, Trakhees, TECOM risk awareness where applicable",
      "Fit-out and renovation technical support",
      "Coordination with main contractors and consultants"
    ],
    useCases: [
      "Renovation requiring authority-aware planning",
      "Office, clinic, retail, and restaurant fit-out",
      "Property condition and risk reporting",
      "Drawing coordination for property changes",
      "Owners needing an independent engineering review",
      "Property managers needing technical scope review before approval"
    ],
    process: [
      {
        step: "01",
        title: "Brief and site review",
        description:
          "We capture the brief, attend the property, and outline the technical scope and required deliverables."
      },
      {
        step: "02",
        title: "Drawings and review",
        description:
          "Drawings, MEP layouts, and scope are prepared or reviewed. Conflicts and risks are flagged early."
      },
      {
        step: "03",
        title: "Authority awareness",
        description:
          "Where applicable, we identify which authorities or building approvals may apply and prepare accordingly."
      },
      {
        step: "04",
        title: "Execution coordination",
        description:
          "We hand over to execution — either the OMEGA team or the client's team — with documented scope and drawings."
      }
    ],
    faq: [
      {
        q: "Can OMEGA submit drawings to authorities?",
        a: "OMEGA can support authority-related preparation and coordination where applicable. Submission and approval are subject to the relevant authority, consultant, and building requirements."
      },
      {
        q: "Do you work with other contractors?",
        a: "Yes. Engineering Solutions is often used by owners or third-party contractors who need drawings, scope review, MEP coordination, or technical reporting independently."
      },
      {
        q: "Do you issue stamped drawings?",
        a: "Stamped, authority-grade drawings are subject to the qualifications of the certifying entity. Where stamping is required, OMEGA coordinates with appropriately qualified parties."
      }
    ],
    ctas: [
      { label: "Talk to Engineering", href: "/contact?team=engineering", variant: "primary" },
      { label: "Request Quotation", href: "/marketplace/quote-request?type=engineering", variant: "secondary" },
      { label: "Read Insights", href: "/blog", variant: "ghost" }
    ]
  }
];

export function getServiceBySlug(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}
