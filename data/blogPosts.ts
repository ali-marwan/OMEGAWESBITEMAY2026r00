export type BlogPost = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  content: { heading: string; body: string }[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ac-not-cooling-in-dubai",
    title: "AC Not Cooling in Dubai: Common Causes and What to Check First",
    metaTitle: "AC Not Cooling in Dubai — Causes and What to Check | OMEGA Insights",
    metaDescription:
      "Practical guide to why AC units stop cooling in Dubai apartments and villas, and what an owner or tenant should check before booking a service.",
    category: "Home Services",
    excerpt:
      "When the AC is running but the room isn't cooling, the cause is usually one of a few common issues. Here's what to check and what to leave to a technician.",
    readingTime: "5 min read",
    publishedAt: "2026-04-22",
    content: [
      {
        heading: "Why this matters in Dubai",
        body: "In Dubai, an AC failure during summer is more than an inconvenience — it affects health, sleep, and pets. Understanding the most common causes helps owners and tenants act faster and avoid spending on the wrong fix."
      },
      {
        heading: "First, check the obvious",
        body: "Before assuming a major fault, confirm that the thermostat is set correctly, the breaker is on, and any zoned controls are not in fan-only mode. Filters that are heavily blocked can also cause poor cooling and frozen coils."
      },
      {
        heading: "Common technical causes",
        body: "Low refrigerant from a slow leak, a frozen evaporator coil, a failing capacitor or fan motor, blocked condensate drains, and duct leaks in ducted systems are the most common technical causes. None of these should be diagnosed by guesswork — a brief technician visit is far cheaper than a wrong refill."
      },
      {
        heading: "What an OMEGA visit looks like",
        body: "A technician attends, checks airflow, temperatures, and pressures, inspects the unit, and gives an indicative cause and quotation. Filter cleaning and basic checks are typically included in the service visit."
      },
      {
        heading: "When to escalate",
        body: "Burning smell, water dripping inside the unit, repeated breaker tripping, or a sudden loud noise are signals to switch off the unit and book an inspection rather than continue running it."
      }
    ]
  },
  {
    slug: "ceiling-leak-apartment",
    title: "Ceiling Leak in an Apartment: What Owners and Tenants Should Do",
    metaTitle: "Ceiling Leak in Dubai Apartment — Steps for Owners and Tenants | OMEGA",
    metaDescription:
      "What to do when you notice a ceiling leak in an apartment in Dubai — practical steps for owners, tenants, and property managers.",
    category: "Property Care",
    excerpt:
      "A ceiling leak rarely starts where it shows. Acting in the right order saves cost, preserves evidence, and keeps the relationship with the upstairs neighbor calm.",
    readingTime: "6 min read",
    publishedAt: "2026-04-18",
    content: [
      {
        heading: "Stop the spread first",
        body: "Place a container under the drip, move electronics and furniture away, and switch off any nearby electrical fixtures if water is dripping near them. Don't drill or open the ceiling — leave that to a technician."
      },
      {
        heading: "Document everything",
        body: "Photos, videos, time and date stamps, and any communication with the building or neighbor matter later. If the source turns out to be the unit above, this evidence helps for insurance, building management, or recovery."
      },
      {
        heading: "Notify the right parties",
        body: "Inform building management. If you're a tenant, also inform the landlord or property manager. Where appropriate, the building may coordinate access to the unit above to identify the source."
      },
      {
        heading: "Diagnose before repair",
        body: "Painting over a stain without finding the source guarantees the leak will return. An OMEGA leak detection visit traces the most likely source through inspection and where appropriate controlled testing, so the actual issue is fixed once."
      },
      {
        heading: "Common causes in apartments",
        body: "Failed waterproofing on the balcony or wet area above, a slow plumbing joint leak, an AC drain backing up, or a chiller line condensation issue are the most common causes. Each needs a different repair."
      }
    ]
  },
  {
    slug: "bathroom-renovation-dubai-cost-factors",
    title: "Bathroom Renovation in Dubai: Cost Factors and Approval Considerations",
    metaTitle: "Bathroom Renovation Dubai — Cost and Approval Factors | OMEGA",
    metaDescription:
      "What drives the cost of a bathroom renovation in Dubai, what approvals or building requirements may apply, and how to scope the project properly.",
    category: "Renovation",
    excerpt:
      "Bathrooms touch tile, plumbing, waterproofing, electrical, ventilation, and finishing. Cost depends less on size and more on what's behind the walls.",
    readingTime: "7 min read",
    publishedAt: "2026-04-15",
    content: [
      {
        heading: "What actually drives cost",
        body: "Surface materials matter, but the bigger drivers are the existing waterproofing condition, the routing of plumbing, the ventilation, and whether layout changes are required. A like-for-like refresh is far cheaper than a layout change."
      },
      {
        heading: "Approvals and building requirements",
        body: "Many buildings in Dubai require notification or approval for any wet-area or layout change. Working without that can lead to fines or stop-work issues. OMEGA can support the preparation and coordination, but final authority and building approvals remain subject to the relevant requirements."
      },
      {
        heading: "Sequencing matters",
        body: "Demolition, plumbing rough-in, waterproofing, tiling, sanitary, electrical, ventilation, finishing — out-of-sequence work causes rework. A documented scope and sequence keeps the timeline realistic."
      },
      {
        heading: "Common owner mistakes",
        body: "Choosing materials before scope is finalized, skipping a moisture check on existing walls, ignoring ventilation, and underestimating snagging time. These tend to be the small decisions that affect long-term cost."
      },
      {
        heading: "How OMEGA approaches it",
        body: "Inspection first, then a documented scope and BOQ, then engineering review where applicable, then execution under supervision. We share progress and a snagging-ready handover."
      }
    ]
  },
  {
    slug: "villa-renovation-dubai-planning",
    title: "Villa Renovation in Dubai: Planning, Scope, and Common Mistakes",
    metaTitle: "Villa Renovation in Dubai — Planning and Common Mistakes | OMEGA",
    metaDescription:
      "How to plan a villa renovation in Dubai, what scope decisions matter most, and where owners commonly underestimate cost or time.",
    category: "Renovation",
    excerpt:
      "Villas combine civil, MEP, exterior, and finishing scopes. Treating it as a 'big apartment' is the most common planning error.",
    readingTime: "8 min read",
    publishedAt: "2026-04-10",
    content: [
      {
        heading: "Treat it as a project, not a job",
        body: "Villa renovation needs a project plan: scope, drawings, sequence, milestones, and a clear list of approvals or community requirements. Without a plan, costs drift and timelines extend."
      },
      {
        heading: "Engineering before finishes",
        body: "Decisions about MEP, structural elements, and waterproofing should be locked before fine finishing. Owners often start with finishes and discover late that a layout choice triggers larger cost downstream."
      },
      {
        heading: "Community and authority awareness",
        body: "Many villa communities have specific requirements about exterior changes, structural changes, and contractor accreditation. OMEGA flags these early so the plan accounts for them."
      },
      {
        heading: "Where projects usually slip",
        body: "Material lead times, change orders, snagging, and approvals. A well-managed villa renovation accepts that a buffer is real and budgets for it rather than reacting to it."
      },
      {
        heading: "What to ask any contractor",
        body: "How is scope documented? How are change orders handled? How is quality reviewed? Who supervises trades on site? Vague answers should be a warning sign."
      }
    ]
  },
  {
    slug: "amc-dubai-what-to-include",
    title: "Annual Maintenance Contract in Dubai: What Should Be Included?",
    metaTitle: "AMC Dubai — What Should Be Included in a Property AMC | OMEGA",
    metaDescription:
      "What a useful Annual Maintenance Contract should include in Dubai, what to look out for, and where most generic AMC contracts fall short.",
    category: "Property Care",
    excerpt:
      "Most AMC contracts are vague. A useful AMC reads like a small operating manual for your property — visit frequency, scope, response, reporting, and limits.",
    readingTime: "6 min read",
    publishedAt: "2026-04-05",
    content: [
      {
        heading: "Visit frequency and scope",
        body: "An AMC should specify how many preventive visits, what's checked each visit, and what's included versus quoted separately. Vague phrases like 'general maintenance' are a warning sign."
      },
      {
        heading: "Emergency response",
        body: "Define what counts as an emergency, how fast someone responds, and what is and isn't covered in that response. Without this, expectations drift after the first incident."
      },
      {
        heading: "Reporting",
        body: "Each visit should be reported. Photo-documented findings and a register of recommendations protect both the owner and the service provider."
      },
      {
        heading: "Limits",
        body: "Spare parts, materials, and out-of-scope works should be defined. A clear limit prevents disputes when bigger items arise mid-year."
      },
      {
        heading: "How OMEGA structures AMC",
        body: "OMEGA Property Care AMC includes scheduled visits, scoped checks, photo-documented reporting, a recommendation register, and engineer-led oversight. Plans differ by property type, size, and use."
      }
    ]
  },
  {
    slug: "waterproofing-uae-warning-signs",
    title: "Waterproofing Problems in UAE Properties: Warning Signs and Risks",
    metaTitle: "UAE Waterproofing Warning Signs — Owners and Property Managers | OMEGA",
    metaDescription:
      "How to recognize early signs of waterproofing failure in UAE apartments and villas, and why timing matters when addressing it.",
    category: "Engineering",
    excerpt:
      "Waterproofing rarely fails suddenly. Recognizing the early signs prevents the bigger costs that come with delayed action.",
    readingTime: "5 min read",
    publishedAt: "2026-03-28",
    content: [
      {
        heading: "Early signs in apartments",
        body: "Faint stains on a ceiling, paint discoloration in a corner, a slight musty smell, or efflorescence on a wall are early indicators. These often appear long before a visible drip."
      },
      {
        heading: "Common locations",
        body: "Balconies, bathroom and kitchen wet areas, terraces above habitable space, and joints around AC chiller lines are the typical points. In villas, the roof, terrace, and external wall junctions are the usual culprits."
      },
      {
        heading: "Why delay is costly",
        body: "Once water reaches finishes, the cost is no longer a waterproofing fix — it's a finishing rebuild as well. Acting on early signs is dramatically cheaper than reacting after damage."
      },
      {
        heading: "What inspection involves",
        body: "Visual inspection, moisture testing, and where appropriate controlled testing identify the source. We don't recommend opening finishes until the source is confirmed."
      },
      {
        heading: "Repair direction",
        body: "Repair scope ranges from localized resealing to full waterproofing rework. The right level depends on age, condition, and risk. We recommend the level that solves the actual problem, not more."
      }
    ]
  },
  {
    slug: "fit-out-dubai-building-considerations",
    title: "Fit-Out Works in Dubai: Building Management and Authority Considerations",
    metaTitle: "Fit-Out Dubai — Building and Authority Considerations | OMEGA",
    metaDescription:
      "What property managers and operators should know about fit-out in Dubai — building approvals, authority awareness, and execution coordination.",
    category: "Engineering",
    excerpt:
      "Fit-out is rarely just a build. The building, the authority, and the operator each have requirements. Skipping any of them costs time later.",
    readingTime: "6 min read",
    publishedAt: "2026-03-20",
    content: [
      {
        heading: "Building requirements",
        body: "Most commercial buildings in Dubai have a fit-out manual: approved contractor lists, working hours, deposit requirements, and protection rules. This sets the baseline."
      },
      {
        heading: "Authority awareness",
        body: "DCD, DEWA, DM, DDA, Trakhees, TECOM and others may have requirements depending on the location and use. OMEGA flags applicable authorities early in the planning."
      },
      {
        heading: "Where execution slips",
        body: "MEP coordination conflicts, late approvals, finishing rework, and snagging are typical slip points. A clear scope, drawings, and sequence reduces these risks."
      },
      {
        heading: "OMEGA's role",
        body: "OMEGA provides drawings coordination, MEP review, scope and BOQ preparation, and execution under supervision. Approval submissions remain subject to authority and consultant requirements."
      }
    ]
  },
  {
    slug: "electrical-tripping-when-to-call-pro",
    title: "Electrical Tripping in Apartments: When to Call a Professional",
    metaTitle: "Electrical Tripping Dubai — When to Call a Professional | OMEGA",
    metaDescription:
      "How to think about electrical tripping in Dubai apartments, what's safe to check yourself, and when to bring in a qualified technician.",
    category: "Home Services",
    excerpt:
      "Electrical safety devices trip for a reason. Repeatedly resetting them without understanding the cause is the wrong response.",
    readingTime: "4 min read",
    publishedAt: "2026-03-12",
    content: [
      {
        heading: "Why circuits trip",
        body: "Overload, short circuit, or earth leakage. Each cause is different, and the right response depends on which one is happening."
      },
      {
        heading: "What you can safely check",
        body: "Unplug recent or suspect appliances, confirm if a single circuit or the main breaker trips, note when it happens. That's it — don't open the DB or bypass anything."
      },
      {
        heading: "When to call a technician",
        body: "Repeated tripping, any burning smell, warm sockets, visible damage, or tripping under no obvious load are reasons to stop and call a qualified person. Safety devices exist for a reason."
      },
      {
        heading: "What an OMEGA visit covers",
        body: "DB inspection, circuit and load testing, identification of the affected circuit or appliance, and a clear repair recommendation."
      }
    ]
  },
  {
    slug: "property-inspection-before-renovation",
    title: "Property Inspection Before Renovation: Why It Matters",
    metaTitle: "Property Inspection Before Renovation in Dubai | OMEGA",
    metaDescription:
      "Why a structured property inspection before renovation in Dubai prevents cost surprises and scope creep, and what should be included.",
    category: "Renovation",
    excerpt:
      "An inspection before renovation is the cheapest insurance you'll buy on the project. It defines reality before you commit to a scope.",
    readingTime: "5 min read",
    publishedAt: "2026-03-05",
    content: [
      {
        heading: "What inspection captures",
        body: "Existing condition, hidden defects where visible, system status, and likely scope risks. It's the difference between estimating and assuming."
      },
      {
        heading: "Why owners skip it",
        body: "Schedule pressure, optimism, or a contractor who claims they don't need it. The cost of skipping shows up later, usually as a change order."
      },
      {
        heading: "What a good inspection report includes",
        body: "Photos, condition observations, scope direction, risk flags, and where applicable a high-level cost direction. The report should be readable by a non-technical owner."
      },
      {
        heading: "OMEGA approach",
        body: "An inspection visit at AED 100 captures the property state. The report informs scope, BOQ, and the renovation plan."
      }
    ]
  },
  {
    slug: "repair-replace-or-renovate",
    title: "How to Decide Between Repair, Replacement, and Renovation",
    metaTitle: "Repair, Replace, or Renovate? — Decision Guide | OMEGA",
    metaDescription:
      "A practical owner's guide to deciding when to repair, replace, or renovate property elements in Dubai homes and commercial spaces.",
    category: "Property Care",
    excerpt:
      "Sometimes the cheapest decision now is the most expensive one over five years. Here's a simple way to decide.",
    readingTime: "5 min read",
    publishedAt: "2026-02-28",
    content: [
      {
        heading: "Repair when",
        body: "The item is in fair condition, the issue is localized, the cost is small relative to replacement, and the remaining life is reasonable."
      },
      {
        heading: "Replace when",
        body: "Repair is recurring, parts are unavailable, the item is end-of-life, or replacement reduces ongoing risk and cost."
      },
      {
        heading: "Renovate when",
        body: "Multiple elements are aging together, layout or use is changing, or the property's value is held back by outdated finishing."
      },
      {
        heading: "How OMEGA helps",
        body: "An inspection or AI assessment frames the decision honestly — sometimes repair is the right answer; sometimes it isn't. We'd rather tell you the right answer than the bigger one."
      }
    ]
  }
];

export function getBlogPostBySlug(slug: string) {
  return BLOG_POSTS.find((b) => b.slug === slug);
}

export const BLOG_CATEGORIES = ["All", "Home Services", "Property Care", "Renovation", "Engineering"] as const;
