export type AiPreliminaryReport = {
  flowType: "renovation" | "repair" | "unknown";
  summary: string;
  possibleCauseOrScope: string;
  severity: "low" | "medium" | "high" | "urgent";
  recommendedServiceSlug: string;
  recommendedServiceTitle: string;
  estimatedCostRange: string;
  estimatedTimeline: string;
  requiredTrades: string[];
  riskIfIgnored: string;
  complianceFlags: string[];
  nextActions: { label: string; href: string }[];
  disclaimer: string;
};

export type AiFlowType = "renovation" | "repair" | "unknown";

export const AI_REPAIR_TOPICS = [
  { id: "ac-not-cooling", label: "AC not cooling", trade: "AC", severity: "high" as const },
  { id: "ac-leakage", label: "AC leaking water", trade: "AC", severity: "medium" as const },
  { id: "ceiling-leak", label: "Ceiling leak / water stain", trade: "Leak Detection", severity: "high" as const },
  { id: "bathroom-leak", label: "Bathroom leak", trade: "Plumbing", severity: "high" as const },
  { id: "electrical-tripping", label: "Electrical tripping", trade: "Electrical", severity: "high" as const },
  { id: "plumbing-leak", label: "Plumbing leak", trade: "Plumbing", severity: "high" as const },
  { id: "wall-cracks", label: "Wall cracks", trade: "Civil", severity: "medium" as const },
  { id: "paint-damage", label: "Paint damage / discoloration", trade: "Painting", severity: "low" as const },
  { id: "gypsum-damage", label: "Gypsum / ceiling damage", trade: "Gypsum", severity: "medium" as const },
  { id: "door-window", label: "Door / window issue", trade: "Handyman", severity: "low" as const }
];

export const AI_RENOVATION_TOPICS = [
  { id: "apartment-renovation", label: "Apartment renovation", scope: "Full apartment refurbishment" },
  { id: "villa-renovation", label: "Villa renovation", scope: "Villa-scale renovation including civil and MEP" },
  { id: "majlis-upgrade", label: "Majlis upgrade", scope: "Living and majlis transformation" },
  { id: "bathroom-renovation", label: "Bathroom renovation", scope: "Wet-area renovation" },
  { id: "kitchen-renovation", label: "Kitchen renovation", scope: "Kitchen refurbishment with cabinetry and services" },
  { id: "office-fitout", label: "Office / shop fit-out", scope: "Commercial fit-out execution" },
  { id: "interior-upgrade", label: "Interior upgrade", scope: "Targeted interior upgrade" }
];

export const AI_DEFAULT_DISCLAIMER =
  "This AI assessment is preliminary and based only on the information provided. Final diagnosis, cost, compliance requirement, timeline, and execution method must be confirmed by OMEGA after site inspection or engineer review.";

/**
 * Map a marketplace service slug to the most relevant AI flow + topic so a
 * "Ask OMEGA AI" button on a service page can deep-link the user into the
 * right starting point of the assistant.
 */
export function inferAiPresetFromServiceSlug(
  slug: string
): { flow: AiFlowType; topic: string } | undefined {
  // Renovation matches first (longer specific slugs)
  if (slug === "bathroom-renovation") return { flow: "renovation", topic: "bathroom-renovation" };
  if (slug === "kitchen-renovation") return { flow: "renovation", topic: "kitchen-renovation" };
  if (slug === "apartment-renovation") return { flow: "renovation", topic: "apartment-renovation" };
  if (slug === "villa-renovation") return { flow: "renovation", topic: "villa-renovation" };
  if (slug === "office-fitout") return { flow: "renovation", topic: "office-fitout" };

  // Repair flow inferences
  if (slug.startsWith("ac-")) return { flow: "repair", topic: "ac-not-cooling" };
  if (slug === "duct-cleaning") return { flow: "repair", topic: "ac-not-cooling" };
  if (slug.includes("leak-detection")) return { flow: "repair", topic: "ceiling-leak" };
  if (slug.includes("waterproofing")) return { flow: "repair", topic: "ceiling-leak" };
  if (slug.startsWith("plumbing")) return { flow: "repair", topic: "plumbing-leak" };
  if (slug === "drain-cleaning") return { flow: "repair", topic: "plumbing-leak" };
  if (slug === "water-heater-service") return { flow: "repair", topic: "plumbing-leak" };
  if (slug.startsWith("electrical-")) return { flow: "repair", topic: "electrical-tripping" };
  if (slug.startsWith("painting-")) return { flow: "repair", topic: "paint-damage" };
  if (slug.startsWith("gypsum-")) return { flow: "repair", topic: "gypsum-damage" };
  if (slug.startsWith("handyman-")) return { flow: "repair", topic: "door-window" };

  return undefined;
}

export function generateMockRepairReport(topicId: string): AiPreliminaryReport {
  const topic = AI_REPAIR_TOPICS.find((t) => t.id === topicId);
  if (!topic) return generateUnknownReport();

  const map: Record<string, Partial<AiPreliminaryReport>> = {
    "ac-not-cooling": {
      possibleCauseOrScope:
        "Likely causes include low refrigerant from a slow leak, a frozen coil from blocked filters, a thermostat fault, or a compressor issue. Diagnosis requires on-site testing.",
      recommendedServiceSlug: "ac-not-cooling-diagnosis-repair",
      recommendedServiceTitle: "AC Not Cooling — Diagnosis & Repair",
      estimatedCostRange: "AED 199 – AED 1,200 depending on the cause",
      estimatedTimeline: "Typically resolved within a 1–2 hour visit; refill or part replacement may extend this",
      requiredTrades: ["AC technician"],
      riskIfIgnored:
        "Continued operation under fault can damage the compressor, increase electricity consumption, and turn a low-cost repair into a replacement.",
      complianceFlags: []
    },
    "ac-leakage": {
      possibleCauseOrScope:
        "Most common causes are a blocked condensate drain, a tilted indoor unit, or insulation failure on the chilled-water line. Each requires a different fix.",
      recommendedServiceSlug: "ac-not-cooling-diagnosis-repair",
      recommendedServiceTitle: "AC Service & Repair",
      estimatedCostRange: "AED 199 – AED 600",
      estimatedTimeline: "1–2 hours typical visit",
      requiredTrades: ["AC technician"],
      riskIfIgnored:
        "Persistent leakage can damage gypsum, finishes, and electrical fixtures below the unit, escalating the cost.",
      complianceFlags: []
    },
    "ceiling-leak": {
      possibleCauseOrScope:
        "Visible ceiling leaks are usually traced to balcony or wet-area waterproofing failure above, a slow plumbing joint leak, or AC drain backup. The leak source is rarely directly above the visible stain.",
      recommendedServiceSlug: "leak-detection-tracing",
      recommendedServiceTitle: "Leak Detection & Tracing",
      estimatedCostRange: "AED 299 – AED 1,500 for diagnosis and minor fix; major repair quoted separately",
      estimatedTimeline: "1–3 hours for diagnosis; repair scope depends on cause",
      requiredTrades: ["Leak detection", "Plumber", "Waterproofing where applicable"],
      riskIfIgnored:
        "Ongoing water ingress damages gypsum, paint, electrical fixtures, and may affect adjacent units. Acting early reduces total cost meaningfully.",
      complianceFlags: ["Building management notification recommended", "Coordination with upstairs unit may be required"]
    },
    "bathroom-leak": {
      possibleCauseOrScope:
        "Likely sources are tap or pipe joint leaks, a failed silicone seal, a leaking trap, or compromised waterproofing under tiles. Visual inspection and controlled testing identify the source.",
      recommendedServiceSlug: "leak-detection-tracing",
      recommendedServiceTitle: "Leak Detection & Tracing",
      estimatedCostRange: "AED 299 – AED 2,500 depending on source",
      estimatedTimeline: "1–3 hours for diagnosis",
      requiredTrades: ["Plumber", "Waterproofing where applicable"],
      riskIfIgnored:
        "Long-term water exposure damages adjacent finishes, can affect units below, and increases waterproofing rework cost.",
      complianceFlags: []
    },
    "electrical-tripping": {
      possibleCauseOrScope:
        "Repeated tripping is usually caused by an overloaded circuit, a faulty appliance, or a wiring fault. Diagnosis must be done safely without bypassing safety devices.",
      recommendedServiceSlug: "electrical-tripping-diagnosis",
      recommendedServiceTitle: "Electrical Tripping — Diagnosis",
      estimatedCostRange: "AED 199 – AED 900",
      estimatedTimeline: "1–2 hours typical visit",
      requiredTrades: ["Qualified electrician"],
      riskIfIgnored:
        "Repeatedly resetting a tripping breaker without diagnosis is a safety risk. Electrical faults can lead to overheating, damage, or fire.",
      complianceFlags: ["Safety priority — do not bypass breakers"]
    },
    "plumbing-leak": {
      possibleCauseOrScope:
        "Likely a tap, joint, valve, or pipe leak. Some leaks are visible; others present as moisture or rising water bills. Diagnosis is direct.",
      recommendedServiceSlug: "plumbing-leak-repair",
      recommendedServiceTitle: "Plumbing Leak Repair",
      estimatedCostRange: "AED 179 – AED 800",
      estimatedTimeline: "1–2 hours typical visit",
      requiredTrades: ["Plumber"],
      riskIfIgnored:
        "Slow leaks damage finishes and increase water bills. Pressurized leaks can cause sudden escalation.",
      complianceFlags: []
    },
    "wall-cracks": {
      possibleCauseOrScope:
        "Most wall cracks are cosmetic — settlement, paint, or finishing-related. A small percentage are structural. Visual inspection identifies which type.",
      recommendedServiceSlug: "site-inspection-quotation",
      recommendedServiceTitle: "Site Inspection & Quotation",
      estimatedCostRange: "AED 100 inspection; repair quoted by type",
      estimatedTimeline: "30–90 min inspection",
      requiredTrades: ["Site inspector", "Painter / finisher", "Engineer if structural concern"],
      riskIfIgnored:
        "Cosmetic cracks rarely worsen quickly. Structural cracks require timely engineer review — do not paint over without diagnosis.",
      complianceFlags: ["Escalate to engineer if structural cracks suspected"]
    },
    "paint-damage": {
      possibleCauseOrScope:
        "Paint damage is usually a finishing issue. If it's accompanied by moisture, the underlying cause is more important than the paint itself.",
      recommendedServiceSlug: "painting-touch-up",
      recommendedServiceTitle: "Painting Touch-Up & Repaint",
      estimatedCostRange: "From AED 299 per room",
      estimatedTimeline: "1–4 days depending on scope",
      requiredTrades: ["Painter"],
      riskIfIgnored:
        "Cosmetic only unless caused by moisture. If moisture is present, prioritize source diagnosis before repaint.",
      complianceFlags: []
    },
    "gypsum-damage": {
      possibleCauseOrScope:
        "Gypsum damage is often water-related. We recommend identifying any leak source first, then repairing the gypsum and finishing.",
      recommendedServiceSlug: "gypsum-ceiling-repair",
      recommendedServiceTitle: "Gypsum & Ceiling Repair",
      estimatedCostRange: "Quoted by scope",
      estimatedTimeline: "1–3 days",
      requiredTrades: ["Gypsum / finisher", "Leak detection if moisture suspected"],
      riskIfIgnored:
        "If moisture is present, repairing without source diagnosis means the damage will return.",
      complianceFlags: []
    },
    "door-window": {
      possibleCauseOrScope:
        "Most door and window issues are alignment, hinge, lock, or seal-related. A handyman visit usually resolves them in one session.",
      recommendedServiceSlug: "handyman-doors-windows",
      recommendedServiceTitle: "Handyman, Doors & Windows",
      estimatedCostRange: "From AED 149",
      estimatedTimeline: "1–2 hours",
      requiredTrades: ["Handyman"],
      riskIfIgnored: "Worsening alignment can damage frames and increase the eventual repair scope.",
      complianceFlags: []
    }
  };

  const detail = map[topicId] ?? {};

  return {
    flowType: "repair",
    summary: `Preliminary assessment for ${topic.label.toLowerCase()}. The cause and exact cost will be confirmed after on-site inspection.`,
    severity: topic.severity,
    nextActions: [
      { label: "Book Inspection — AED 100", href: "/marketplace/inspection" },
      { label: "Open Recommended Service", href: `/marketplace/services/${detail.recommendedServiceSlug ?? "site-inspection-quotation"}` },
      { label: "WhatsApp OMEGA", href: "https://wa.me/971566605596" }
    ],
    disclaimer: AI_DEFAULT_DISCLAIMER,
    possibleCauseOrScope: "",
    recommendedServiceSlug: "",
    recommendedServiceTitle: "",
    estimatedCostRange: "",
    estimatedTimeline: "",
    requiredTrades: [],
    riskIfIgnored: "",
    complianceFlags: [],
    ...detail
  } as AiPreliminaryReport;
}

export function generateMockRenovationReport(topicId: string): AiPreliminaryReport {
  const topic = AI_RENOVATION_TOPICS.find((t) => t.id === topicId);
  if (!topic) return generateUnknownReport();

  const map: Record<string, Partial<AiPreliminaryReport>> = {
    "apartment-renovation": {
      possibleCauseOrScope:
        "Apartment renovation typically involves civil, MEP, finishing, and snagging. Scope depends on whether it's a refresh, a partial change, or a full reconfiguration.",
      recommendedServiceSlug: "apartment-renovation",
      recommendedServiceTitle: "Apartment Renovation",
      estimatedCostRange: "AED 25,000 – AED 350,000+ depending on scope and finish level",
      estimatedTimeline: "4–12 weeks typical",
      requiredTrades: ["Civil", "Plumbing", "Electrical", "AC", "Finishing"],
      riskIfIgnored: "",
      complianceFlags: [
        "Building management notification typically required",
        "Approvals may be required for layout or wet-area changes"
      ]
    },
    "villa-renovation": {
      possibleCauseOrScope:
        "Villa renovation often spans civil, MEP, exterior, and finishing scopes. Engineering review and a phased plan are recommended.",
      recommendedServiceSlug: "villa-renovation",
      recommendedServiceTitle: "Villa Renovation",
      estimatedCostRange: "Project-based — usually AED 150,000 – AED 1.5M+ depending on scope",
      estimatedTimeline: "Project-based",
      requiredTrades: ["Civil", "MEP", "Finishing", "External works"],
      riskIfIgnored: "",
      complianceFlags: [
        "Community and authority requirements often apply",
        "Structural changes require engineer involvement"
      ]
    },
    "majlis-upgrade": {
      possibleCauseOrScope:
        "Majlis upgrades typically focus on finishing, lighting, ceiling, and built-in elements. Scope is largely interior.",
      recommendedServiceSlug: "apartment-renovation",
      recommendedServiceTitle: "Interior & Majlis Upgrade",
      estimatedCostRange: "AED 20,000 – AED 200,000+",
      estimatedTimeline: "2–6 weeks typical",
      requiredTrades: ["Civil minor works", "Electrical", "Finishing"],
      riskIfIgnored: "",
      complianceFlags: []
    },
    "bathroom-renovation": {
      possibleCauseOrScope:
        "Bathroom renovation typically covers waterproofing, tiles, sanitary, plumbing, electrical, ventilation, and finishing.",
      recommendedServiceSlug: "bathroom-renovation",
      recommendedServiceTitle: "Bathroom Renovation",
      estimatedCostRange: "AED 12,000 – AED 80,000+ depending on size and finish level",
      estimatedTimeline: "2–4 weeks typical",
      requiredTrades: ["Civil", "Plumbing", "Electrical", "Tiling", "Finishing"],
      riskIfIgnored: "",
      complianceFlags: ["Building approval may be required for wet-area changes"]
    },
    "kitchen-renovation": {
      possibleCauseOrScope:
        "Kitchen renovation involves cabinets, counters, appliances, plumbing, electrical, and ventilation.",
      recommendedServiceSlug: "kitchen-renovation",
      recommendedServiceTitle: "Kitchen Renovation",
      estimatedCostRange: "AED 15,000 – AED 150,000+",
      estimatedTimeline: "3–6 weeks typical",
      requiredTrades: ["Plumbing", "Electrical", "Cabinetry", "Finishing"],
      riskIfIgnored: "",
      complianceFlags: []
    },
    "office-fitout": {
      possibleCauseOrScope:
        "Commercial fit-out scope depends on the building, the use, and the operator. Drawings, MEP, finishing, and authority awareness are critical.",
      recommendedServiceSlug: "office-fitout",
      recommendedServiceTitle: "Office, Clinic & Retail Fit-Out",
      estimatedCostRange: "Project-based — depends on size and complexity",
      estimatedTimeline: "Project-based",
      requiredTrades: ["Drawings coordination", "Civil", "MEP", "Finishing"],
      riskIfIgnored: "",
      complianceFlags: [
        "Building fit-out manual requirements",
        "DCD, DEWA, DM, DDA, Trakhees, TECOM where applicable"
      ]
    },
    "interior-upgrade": {
      possibleCauseOrScope:
        "Targeted interior upgrade — finishes, lighting, joinery, paint. Scope is usually compact and finish-focused.",
      recommendedServiceSlug: "apartment-renovation",
      recommendedServiceTitle: "Interior Upgrade",
      estimatedCostRange: "AED 8,000 – AED 80,000+",
      estimatedTimeline: "1–4 weeks typical",
      requiredTrades: ["Finishing", "Electrical minor", "Joinery"],
      riskIfIgnored: "",
      complianceFlags: []
    }
  };

  const detail = map[topicId] ?? {};

  return {
    flowType: "renovation",
    summary: `Preliminary scope direction for ${topic.label.toLowerCase()}. Final scope, cost, and timeline are confirmed after site inspection and BOQ.`,
    severity: "low",
    nextActions: [
      { label: "Request Quotation", href: `/marketplace/quote-request?service=${detail.recommendedServiceSlug ?? "apartment-renovation"}` },
      { label: "Book Inspection — AED 100", href: "/marketplace/inspection" },
      { label: "WhatsApp OMEGA", href: "https://wa.me/971566605596" }
    ],
    disclaimer: AI_DEFAULT_DISCLAIMER,
    possibleCauseOrScope: "",
    recommendedServiceSlug: "",
    recommendedServiceTitle: "",
    estimatedCostRange: "",
    estimatedTimeline: "",
    requiredTrades: [],
    riskIfIgnored: "",
    complianceFlags: [],
    ...detail
  } as AiPreliminaryReport;
}

export function generateUnknownReport(): AiPreliminaryReport {
  return {
    flowType: "unknown",
    summary:
      "Based on what you described, the OMEGA team is the right next step. We'll either guide you to a service, recommend an inspection, or escalate to an engineer.",
    possibleCauseOrScope:
      "Multiple possible directions. A short site inspection at AED 100 usually resolves uncertainty quickly.",
    severity: "low",
    recommendedServiceSlug: "site-inspection-quotation",
    recommendedServiceTitle: "Site Inspection & Quotation",
    estimatedCostRange: "AED 100 inspection; service or scope quoted after",
    estimatedTimeline: "30–90 min inspection",
    requiredTrades: ["To be confirmed after inspection"],
    riskIfIgnored: "",
    complianceFlags: [],
    nextActions: [
      { label: "Book Inspection — AED 100", href: "/marketplace/inspection" },
      { label: "WhatsApp OMEGA", href: "https://wa.me/971566605596" },
      { label: "Speak to OMEGA Team", href: "/contact" }
    ],
    disclaimer: AI_DEFAULT_DISCLAIMER
  };
}
