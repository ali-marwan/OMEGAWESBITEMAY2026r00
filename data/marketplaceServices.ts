export type MarketplaceService = {
  slug: string;
  title: string;
  category: MarketplaceCategory;
  summary: string;
  description: string;
  startingPrice?: string;
  inspectionFee?: number;
  duration?: string;
  urgency?: "low" | "medium" | "high";
  requiredInfo: string[];
  whatsIncluded: string[];
  relatedServices: string[];
  ctaPrimary: "book" | "quote" | "inspection";
  tags?: string[];
};

export type MarketplaceCategory =
  | "AC & Cooling"
  | "Plumbing"
  | "Electrical"
  | "Leaks & Waterproofing"
  | "Painting & Finishing"
  | "Renovation"
  | "Handyman"
  | "Maintenance"
  | "Inspection & Quotation"
  | "Fit-Out";

export const MARKETPLACE_CATEGORIES: {
  name: MarketplaceCategory;
  description: string;
  icon: string;
}[] = [
  { name: "AC & Cooling", description: "Service, repair, refill, replacement, ducting", icon: "wind" },
  { name: "Plumbing", description: "Leaks, drains, water heaters, fittings", icon: "droplets" },
  { name: "Electrical", description: "Tripping, sockets, lighting, DB review", icon: "zap" },
  { name: "Leaks & Waterproofing", description: "Source tracing, sealing, balcony fixes", icon: "shield" },
  { name: "Painting & Finishing", description: "Touch-up, full unit, premium finish", icon: "palette" },
  { name: "Renovation", description: "Bathrooms, kitchens, full units, fit-out", icon: "hammer" },
  { name: "Handyman", description: "Doors, windows, fittings, small fixes", icon: "wrench" },
  { name: "Maintenance", description: "AMC, scheduled visits, preventive care", icon: "calendar-check" },
  { name: "Inspection & Quotation", description: "Site assessment and scoped quotation", icon: "clipboard-list" },
  { name: "Fit-Out", description: "Office, clinic, retail, restaurant", icon: "building-2" }
];

export const MARKETPLACE_SERVICES: MarketplaceService[] = [
  {
    slug: "ac-not-cooling-diagnosis-repair",
    title: "AC Not Cooling — Diagnosis & Repair",
    category: "AC & Cooling",
    summary: "Technician attends, diagnoses the cause, and quotes the repair.",
    description:
      "When AC stops cooling, the cause can be a low refrigerant charge, a frozen coil, a thermostat issue, a duct leak, or a compressor problem. We attend, diagnose, and either repair on the spot or quote the required scope.",
    startingPrice: "From AED 199",
    inspectionFee: 100,
    duration: "1–2 hours typical visit",
    urgency: "high",
    requiredInfo: [
      "AC type (split, ducted, central, window)",
      "How long the issue has been present",
      "Last service date if known",
      "Photos or a short video of the unit"
    ],
    whatsIncluded: [
      "On-site diagnosis",
      "Filter clean and quick check",
      "Performance test",
      "Recommendation and indicative quotation"
    ],
    relatedServices: ["ac-general-service", "duct-cleaning", "ac-installation"],
    ctaPrimary: "book",
    tags: ["popular"]
  },
  {
    slug: "ac-general-service",
    title: "AC General Service",
    category: "AC & Cooling",
    summary: "Filter clean, coil check, drain clear, and performance test.",
    description:
      "A general service helps prevent breakdowns and improves cooling performance. Suitable as a recurring item under AMC or before peak summer.",
    startingPrice: "From AED 149 per unit",
    inspectionFee: 100,
    duration: "45–60 min per unit",
    urgency: "low",
    requiredInfo: ["Number of units", "AC type", "Last service date"],
    whatsIncluded: ["Filter clean", "Coil check", "Drain clear", "Performance test", "Service report"],
    relatedServices: ["ac-not-cooling-diagnosis-repair", "duct-cleaning"],
    ctaPrimary: "book"
  },
  {
    slug: "duct-cleaning",
    title: "AC Duct Cleaning",
    category: "AC & Cooling",
    summary: "Duct inspection and deep cleaning for ducted and central units.",
    description:
      "Duct cleaning improves indoor air quality, reduces dust circulation, and can extend equipment life. Recommended after fit-out works or when occupants notice dust or odor.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "Half-day to full-day",
    urgency: "low",
    requiredInfo: ["Apartment or villa", "Number of ducted zones", "Last duct cleaning date if any"],
    whatsIncluded: ["Duct inspection", "Cleaning", "Sanitization option", "Before/after photos"],
    relatedServices: ["ac-general-service"],
    ctaPrimary: "quote"
  },
  {
    slug: "leak-detection-tracing",
    title: "Leak Detection & Tracing",
    category: "Leaks & Waterproofing",
    summary: "Find the source of ceiling, wall, balcony, or floor leaks.",
    description:
      "Visible water on a ceiling or wall is rarely where the leak starts. Our team traces the likely source through inspection, moisture testing, and where appropriate, controlled testing — and recommends the right repair.",
    startingPrice: "From AED 299",
    inspectionFee: 100,
    duration: "1–3 hours",
    urgency: "high",
    requiredInfo: [
      "Where the leak is visible",
      "When it started",
      "Whether you live above, below, or in the affected unit",
      "Photos or short video"
    ],
    whatsIncluded: ["Visual inspection", "Moisture and surface checks", "Likely cause report", "Repair recommendation"],
    relatedServices: ["waterproofing-balcony", "plumbing-leak-repair"],
    ctaPrimary: "book",
    tags: ["popular", "urgent"]
  },
  {
    slug: "waterproofing-balcony",
    title: "Balcony & Wet-Area Waterproofing",
    category: "Leaks & Waterproofing",
    summary: "Recoat, reseal, or rework balconies, bathrooms, and wet zones.",
    description:
      "Failed balcony waterproofing is a common cause of ceiling leaks in apartments. We assess the existing condition, recommend the appropriate level of repair, and execute with documented scope.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "1–5 days depending on scope",
    urgency: "medium",
    requiredInfo: ["Balcony or wet-area size", "Current visible damage", "Building or community name", "Floor level"],
    whatsIncluded: ["Surface assessment", "Scope and BOQ", "Execution under OMEGA supervision", "Photo documentation"],
    relatedServices: ["leak-detection-tracing"],
    ctaPrimary: "quote"
  },
  {
    slug: "plumbing-leak-repair",
    title: "Plumbing Leak Repair",
    category: "Plumbing",
    summary: "Tap, pipe, joint, water heater, or drain leak repair.",
    description:
      "Most plumbing leaks worsen if delayed. We attend, identify the source, and either repair on the spot or quote a scoped fix.",
    startingPrice: "From AED 179",
    inspectionFee: 100,
    duration: "1–2 hours",
    urgency: "high",
    requiredInfo: ["Where the leak is", "Item involved (tap, pipe, heater)", "Photo or video"],
    whatsIncluded: ["On-site diagnosis", "Direct repair where possible", "Recommendation if scope expands"],
    relatedServices: ["water-heater-service", "drain-cleaning"],
    ctaPrimary: "book"
  },
  {
    slug: "water-heater-service",
    title: "Water Heater Service / Replacement",
    category: "Plumbing",
    summary: "Service or replace electric water heaters.",
    description:
      "We service or replace heaters depending on age, condition, and safety. Old heaters with corrosion or leaks should be replaced rather than repeatedly serviced.",
    startingPrice: "From AED 199",
    inspectionFee: 100,
    duration: "1–3 hours",
    urgency: "medium",
    requiredInfo: ["Brand and capacity", "Age", "Issue (no hot water, leak, tripping)"],
    whatsIncluded: ["Inspection", "Service or replacement quote", "Disposal of old unit if replacement"],
    relatedServices: ["plumbing-leak-repair"],
    ctaPrimary: "book"
  },
  {
    slug: "drain-cleaning",
    title: "Drain Cleaning & Unclogging",
    category: "Plumbing",
    summary: "Clear blocked sinks, showers, and floor drains.",
    description:
      "We unblock drains using appropriate tools and check for likely future blockage points. For recurring blockages we recommend a deeper inspection.",
    startingPrice: "From AED 149",
    inspectionFee: 100,
    duration: "30–90 min",
    urgency: "high",
    requiredInfo: ["Which drain", "How long blocked", "Backup signs in other fixtures"],
    whatsIncluded: ["Mechanical clearing", "Flow test", "Recommendation"],
    relatedServices: ["plumbing-leak-repair"],
    ctaPrimary: "book"
  },
  {
    slug: "electrical-tripping-diagnosis",
    title: "Electrical Tripping — Diagnosis",
    category: "Electrical",
    summary: "Identify why a circuit or main breaker keeps tripping.",
    description:
      "Repeated tripping is usually a sign of an overloaded circuit, a faulty appliance, or a wiring fault. We diagnose carefully — never bypass safety devices.",
    startingPrice: "From AED 199",
    inspectionFee: 100,
    duration: "1–2 hours",
    urgency: "high",
    requiredInfo: ["Which breaker trips", "When it trips", "Recent appliance changes", "Burning smell if any"],
    whatsIncluded: ["Visual DB inspection", "Load and circuit test", "Diagnosis report", "Repair quote"],
    relatedServices: ["electrical-socket-light-repair"],
    ctaPrimary: "book",
    tags: ["safety"]
  },
  {
    slug: "electrical-socket-light-repair",
    title: "Sockets, Switches & Lighting",
    category: "Electrical",
    summary: "Faulty sockets, switches, lights, and minor electrical works.",
    description:
      "We repair or replace sockets, switches, light fittings, and small electrical items. Larger or load-related changes are reviewed first.",
    startingPrice: "From AED 149",
    inspectionFee: 100,
    duration: "30–90 min",
    urgency: "medium",
    requiredInfo: ["Which item", "Quantity", "Photos if possible"],
    whatsIncluded: ["On-site repair or replacement", "Brief safety check"],
    relatedServices: ["electrical-tripping-diagnosis"],
    ctaPrimary: "book"
  },
  {
    slug: "painting-touch-up",
    title: "Painting Touch-Up & Repaint",
    category: "Painting & Finishing",
    summary: "Wall touch-up, room repaint, or full unit repaint.",
    description:
      "From small touch-up to full repaint with surface prep and finish-grade work. We confirm the scope, color, and finish before starting.",
    startingPrice: "From AED 299 per room",
    inspectionFee: 100,
    duration: "1–4 days",
    urgency: "low",
    requiredInfo: ["Area to be painted", "Existing color and finish", "Whether furniture is in place"],
    whatsIncluded: ["Surface prep", "Two-coat finish", "Cleanup"],
    relatedServices: ["gypsum-ceiling-repair"],
    ctaPrimary: "book"
  },
  {
    slug: "gypsum-ceiling-repair",
    title: "Gypsum & Ceiling Repair",
    category: "Painting & Finishing",
    summary: "Repair cracked, water-damaged, or sagging gypsum and ceilings.",
    description:
      "We repair or rework affected areas, and where the cause is a leak or moisture, we ensure that's addressed first.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "1–3 days",
    urgency: "medium",
    requiredInfo: ["Affected area", "Likely cause if known", "Photos"],
    whatsIncluded: ["Inspection", "Scope quote", "Repair and finish"],
    relatedServices: ["painting-touch-up", "leak-detection-tracing"],
    ctaPrimary: "quote"
  },
  {
    slug: "handyman-doors-windows",
    title: "Handyman, Doors & Windows",
    category: "Handyman",
    summary: "Door alignment, locks, hinges, window seals, small fixings.",
    description:
      "Small, accumulating issues — sticky doors, loose handles, broken hinges, worn seals — handled in one structured visit.",
    startingPrice: "From AED 149",
    inspectionFee: 100,
    duration: "1–2 hours",
    urgency: "low",
    requiredInfo: ["List of items", "Photos preferred"],
    whatsIncluded: ["Multi-item visit", "Minor parts where included", "Scope confirmation before extras"],
    relatedServices: ["painting-touch-up"],
    ctaPrimary: "book"
  },
  {
    slug: "bathroom-renovation",
    title: "Bathroom Renovation",
    category: "Renovation",
    summary: "Full bathroom renovation under engineering-led execution.",
    description:
      "Tiles, sanitary, plumbing, lighting, ventilation, finishing — bathrooms touch every trade. We document scope, control quality, and report progress.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "2–4 weeks typical",
    urgency: "low",
    requiredInfo: ["Bathroom size", "Whether full or partial", "Tenant or owner-occupied", "Building or community"],
    whatsIncluded: ["Scope and BOQ", "Trades coordination", "Execution under OMEGA supervision", "Snagging and handover"],
    relatedServices: ["kitchen-renovation", "apartment-renovation"],
    ctaPrimary: "quote",
    tags: ["popular"]
  },
  {
    slug: "kitchen-renovation",
    title: "Kitchen Renovation",
    category: "Renovation",
    summary: "Cabinets, counters, appliances, plumbing, electrical, finishing.",
    description:
      "Kitchen renovation needs careful sequencing — plumbing, electrical, ventilation, and cabinetry must align. We coordinate the trades and the timeline.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "3–6 weeks typical",
    urgency: "low",
    requiredInfo: ["Kitchen size", "Open or closed", "Existing services", "Cabinet preference"],
    whatsIncluded: ["Scope and BOQ", "Cabinet and surface coordination", "Execution under OMEGA supervision"],
    relatedServices: ["bathroom-renovation", "apartment-renovation"],
    ctaPrimary: "quote"
  },
  {
    slug: "apartment-renovation",
    title: "Apartment Renovation",
    category: "Renovation",
    summary: "Full or partial apartment renovation, end-to-end.",
    description:
      "From single-room work to full apartment refurbishment, we run the project across civil, MEP, and finishing under one supervised plan.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "4–12 weeks depending on scope",
    urgency: "low",
    requiredInfo: ["Unit size", "Scope intent", "Building or community", "Occupancy status"],
    whatsIncluded: ["Inspection", "Scope and BOQ", "Authority/building awareness", "Execution and snagging"],
    relatedServices: ["bathroom-renovation", "kitchen-renovation", "villa-renovation"],
    ctaPrimary: "quote"
  },
  {
    slug: "villa-renovation",
    title: "Villa Renovation",
    category: "Renovation",
    summary: "Villa-scale renovation with civil and MEP coordination.",
    description:
      "Villas usually need broader scope — exterior, structural finishes, MEP, landscaping coordination. OMEGA runs the engineering and execution layer in parallel.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "Project-based",
    urgency: "low",
    requiredInfo: ["Villa size", "Scope intent", "Community", "Existing drawings if available"],
    whatsIncluded: ["Scope and BOQ", "Engineering review", "Execution under OMEGA supervision"],
    relatedServices: ["apartment-renovation", "office-fitout"],
    ctaPrimary: "quote"
  },
  {
    slug: "office-fitout",
    title: "Office, Clinic & Retail Fit-Out",
    category: "Fit-Out",
    summary: "Commercial fit-out under engineering-led coordination.",
    description:
      "Commercial fit-out depends on the building, the authority, and the operator. We align the technical layer with what the building actually allows and what the operator needs.",
    startingPrice: "Quote on request",
    inspectionFee: 100,
    duration: "Project-based",
    urgency: "low",
    requiredInfo: ["Space size", "Use type", "Building", "Drawings if available"],
    whatsIncluded: ["Scope and BOQ", "Drawings coordination", "Authority/building awareness", "Execution"],
    relatedServices: ["villa-renovation"],
    ctaPrimary: "quote"
  },
  {
    slug: "general-maintenance-visit",
    title: "General Maintenance Visit",
    category: "Maintenance",
    summary: "Multi-trade visit for accumulated small jobs.",
    description:
      "When several small things need attention — bulbs, fittings, minor leaks, paint touch-up — a single multi-trade visit is more efficient than separate calls.",
    startingPrice: "From AED 199",
    inspectionFee: 100,
    duration: "2–4 hours",
    urgency: "low",
    requiredInfo: ["List of items", "Photos preferred"],
    whatsIncluded: ["Multi-trade visit", "Scope confirmation", "Report"],
    relatedServices: ["handyman-doors-windows", "painting-touch-up"],
    ctaPrimary: "book"
  },
  {
    slug: "amc-property-care",
    title: "Property Care AMC",
    category: "Maintenance",
    summary: "Annual maintenance contract with reporting and engineer oversight.",
    description:
      "OMEGA Property Care AMC adds preventive scheduling, reporting, and engineer-led oversight to your property. Plans differ by property type, size, and usage.",
    startingPrice: "Quote on request",
    duration: "12 months",
    urgency: "low",
    requiredInfo: ["Property type", "Size", "Number of AC units", "Existing issues if any"],
    whatsIncluded: ["Scheduled visits", "Periodic AC, plumbing, electrical checks", "Reports", "Recommendation register"],
    relatedServices: ["general-maintenance-visit"],
    ctaPrimary: "quote"
  },
  {
    slug: "site-inspection-quotation",
    title: "Site Inspection & Quotation",
    category: "Inspection & Quotation",
    summary: "AED 100 site inspection with engineer-aware reporting.",
    description:
      "If you don't know the scope yet, an OMEGA inspection is the best first step. A technician attends, assesses the situation, and provides an indicative scope and price.",
    startingPrice: "AED 100",
    inspectionFee: 100,
    duration: "30–90 min",
    urgency: "low",
    requiredInfo: ["Property location", "What you'd like assessed", "Photos if available"],
    whatsIncluded: ["On-site visit", "Indicative scope", "Indicative price", "Brief written summary"],
    relatedServices: ["amc-property-care"],
    ctaPrimary: "inspection",
    tags: ["popular"]
  }
];

export function getMarketplaceServiceBySlug(slug: string) {
  return MARKETPLACE_SERVICES.find((s) => s.slug === slug);
}

export function getMarketplaceServicesByCategory(category: MarketplaceCategory) {
  return MARKETPLACE_SERVICES.filter((s) => s.category === category);
}
