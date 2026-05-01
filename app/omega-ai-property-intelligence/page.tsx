import Link from "next/link";
import {
  Building2,
  ClipboardCheck,
  ShieldCheck,
  FileText,
  Layers,
  GitBranch,
  CalendarCheck,
  Hammer,
  Sparkles,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OMEGA AI Property Intelligence Platform — UAE B2B",
  description:
    "Property assessment, reporting, compliance risk tracking, and execution workflow — built for UAE portfolios. For property managers, landlords, corporates, and commercial operators.",
  path: "/omega-ai-property-intelligence"
});

const FEATURES = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Multi-property dashboard",
    body: "All units, all communities — one view of status, issues, approvals, and execution."
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "AI issue assessment",
    body: "AI intake on every reported issue. Severity, likely cause, recommended trade, and indicative cost."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Engineer review",
    body: "Engineer-reviewed reports for issues that need it — before BOQ, before approval, before execution."
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Property condition reports",
    body: "Structured PCR with photos, status by system, and recommendation register."
  },
  {
    icon: <Layers className="h-5 w-5" />,
    title: "BOQ & scope generation",
    body: "Draft BOQ and scope of work generated, then engineer-reviewed for accuracy."
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "UAE compliance flags",
    body: "Authority, building, and community considerations identified up-front, where applicable."
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "Approval workflow",
    body: "Approvals tracked and timestamped. No more 'who approved this' debates."
  },
  {
    icon: <CalendarCheck className="h-5 w-5" />,
    title: "Service & maintenance history",
    body: "Every visit, every recommendation, every warranty record — kept on the unit profile."
  },
  {
    icon: <Hammer className="h-5 w-5" />,
    title: "OMEGA execution integration",
    body: "Approved scopes can be routed to OMEGA execution — supervised trades, photo-documented."
  }
];

const WORKFLOW = [
  {
    title: "Onboard properties",
    body: "Add units, communities, and stakeholders. Each unit gets a profile."
  },
  {
    title: "Capture issues & scopes",
    body: "Tenant, manager, or AI-driven intake captures the request with media."
  },
  {
    title: "Assess & review",
    body: "AI runs preliminary assessment. Engineer reviews where the case requires it."
  },
  {
    title: "Generate BOQ & scope",
    body: "Draft BOQ and scope created and shared for owner or stakeholder approval."
  },
  {
    title: "Approve & execute",
    body: "On approval, scope is routed to OMEGA execution or to the client's contractor."
  },
  {
    title: "Report & archive",
    body: "Final report and warranty records attached to the unit profile."
  }
];

const FOR_WHO = [
  "Property managers handling multiple buildings or units",
  "Landlords with portfolios across communities",
  "Corporates managing branches, offices, and commercial spaces",
  "Restaurants, retail chains, clinics, and operators with multiple sites",
  "Holiday home managers and serviced apartment operators",
  "Real-estate operators needing structured PCRs and BOQs at scale"
];

export default function AiPlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="OMEGA AI · PROPERTY INTELLIGENCE PLATFORM"
        title={
          <>
            Property assessment, reporting, compliance risk tracking, and execution
            workflow —{" "}
            <span className="italic text-omega-grey">built for UAE portfolios.</span>
          </>
        }
        description="For property managers, landlords, corporates, and commercial operators who need structured property intelligence before approving repair, renovation, or maintenance work."
      />

      <Section className="bg-white border-b border-omega-border">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-omega-border bg-omega-cream p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-omega-black text-white">
                      <Building2 className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-[12.5px] font-medium text-omega-charcoal">
                        Portfolio Dashboard
                      </div>
                      <div className="text-[11px] text-omega-grey">
                        Demo · 24 properties
                      </div>
                    </div>
                  </div>
                  <span className="pill-orange">Coming soon</span>
                </div>

                <div className="mt-5 grid grid-cols-4 gap-2 text-[11.5px]">
                  <Stat label="Properties" value="24" />
                  <Stat label="Open" value="14" />
                  <Stat label="Approvals" value="6" />
                  <Stat label="Executing" value="9" />
                </div>

                <div className="mt-4 space-y-2">
                  <Row unit="JVC · Apt 1502" status="Engineer review" priority="High" />
                  <Row unit="Marina · Office 14F" status="BOQ ready" priority="Medium" />
                  <Row unit="Hills · Villa B-22" status="In execution" priority="Medium" />
                  <Row unit="Downtown · Retail R-3" status="AI triaged" priority="Low" />
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="eyebrow-orange">FOR B2B PORTFOLIOS</div>
              <h2 className="display-md mt-3 text-balance text-omega-charcoal">
                Different from the OMEGA AI assistant on this site.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-omega-grey">
                The floating <span className="font-medium text-omega-charcoal">OMEGA AI Instant Assessment</span>{" "}
                is a free assistant that helps individuals find the right service.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-omega-grey">
                The <span className="font-medium text-omega-charcoal">OMEGA AI Property Intelligence Platform</span>{" "}
                is a separate B2B system: multi-property dashboards, engineer-reviewed reports, BOQ generation,
                compliance flags, approvals, and execution workflow.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/contact?team=enterprise"
                  className="btn-dark btn-lg"
                >
                  Request Corporate Demo
                </Link>
                <Link href="#platform-login" className="btn-secondary btn-lg">
                  Platform Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-omega-cream">
        <div className="container-edge">
          <SectionHeader
            eyebrow="WHO IT'S FOR"
            title={
              <>
                Designed for{" "}
                <span className="italic text-omega-grey">portfolio operators.</span>
              </>
            }
          />
          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {FOR_WHO.map((w) => (
              <div
                key={w}
                className="flex items-start gap-3 rounded-xl border border-omega-border bg-white p-4"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-omega-orange" />
                <span className="text-[14px] text-omega-charcoal">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white border-y border-omega-border">
        <div className="container-edge">
          <SectionHeader
            eyebrow="PLATFORM FEATURES"
            title={
              <>
                Everything a portfolio operator needs —{" "}
                <span className="italic text-omega-grey">in one system.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-omega-border bg-omega-cream p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-omega-orange-soft text-omega-orange">
                  {f.icon}
                </span>
                <h3 className="mt-4 font-display text-2xl text-omega-charcoal">
                  {f.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-omega-grey">
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-omega-cream">
        <div className="container-edge">
          <SectionHeader
            eyebrow="WORKFLOW"
            title={
              <>
                From intake to execution —{" "}
                <span className="italic text-omega-grey">on the same platform.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {WORKFLOW.map((w, i) => (
              <div
                key={w.title}
                className="rounded-2xl border border-omega-border bg-white p-6"
              >
                <div className="text-[10.5px] font-mono text-omega-grey">
                  STEP 0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-2xl text-omega-charcoal">
                  {w.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-omega-grey">
                  {w.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-omega-black text-white" id="platform-login">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="eyebrow-orange">CORPORATE ACCESS</div>
              <h2 className="display-lg mt-4 text-balance">
                The OMEGA AI Property Intelligence Platform is currently in invite mode.
              </h2>
              <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/70">
                Request a demo to see your portfolio set up on the platform. Existing
                clients can log in to access dashboards, reports, BOQs, and execution status.
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact?team=enterprise"
                  className="btn-primary btn-lg"
                >
                  Request Corporate Demo
                </Link>
                <button
                  type="button"
                  className="btn btn-lg border border-white/15 text-white hover:bg-white/10"
                  aria-label="Platform login (coming soon)"
                >
                  Platform Login
                </button>
                <Link
                  href="/contact"
                  className="btn btn-lg text-white hover:underline"
                >
                  Speak to OMEGA <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <div className="eyebrow-orange flex items-center gap-2">
                  <Sparkles className="h-3 w-3" /> Two distinct products
                </div>
                <ul className="mt-4 space-y-3 text-[13.5px] text-white/80">
                  <li className="rounded-xl border border-white/10 bg-white/5 p-4">
                    <div className="text-[11px] font-medium uppercase tracking-eyebrow text-white/50">
                      Floating OMEGA AI
                    </div>
                    <div className="mt-1 font-medium text-white">
                      Free individual assistant
                    </div>
                    <div className="mt-1 text-white/70">
                      Available across this website. Helps individuals route to the right
                      service or escalation.
                    </div>
                  </li>
                  <li className="rounded-xl border border-omega-orange/30 bg-omega-orange/10 p-4">
                    <div className="text-[11px] font-medium uppercase tracking-eyebrow text-omega-orange">
                      OMEGA AI Property Intelligence Platform
                    </div>
                    <div className="mt-1 font-medium text-white">
                      Corporate B2B system
                    </div>
                    <div className="mt-1 text-white/80">
                      Multi-property dashboards, reports, BOQs, compliance flags, approvals,
                      and execution.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-omega-border bg-white p-3">
      <div className="text-[10px] font-medium uppercase tracking-eyebrow text-omega-grey">
        {label}
      </div>
      <div className="mt-0.5 font-display text-2xl text-omega-charcoal">{value}</div>
    </div>
  );
}

function Row({
  unit,
  status,
  priority
}: {
  unit: string;
  status: string;
  priority: string;
}) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-omega-border bg-white px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <span className="h-1.5 w-1.5 rounded-full bg-omega-orange" />
        <span className="text-[12.5px] text-omega-charcoal">{unit}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] text-omega-grey">{status}</span>
        <span className="pill text-[10.5px]">{priority}</span>
      </div>
    </div>
  );
}
