import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About OMEGA — UAE Property Execution & Engineering",
  description:
    "OMEGA CFM Building Contracting LLC — UAE-based property execution company combining home services, renovation, engineering, AMC, and AI-guided assessment.",
  path: "/about"
});

const PRINCIPLES = [
  {
    title: "Engineering-led, not handyman-led",
    body: "Even our smallest visit is reviewed against engineering logic. The right answer is sometimes 'don't do it yet, do this first'."
  },
  {
    title: "Documented and reviewed",
    body: "Photos, scope, recommendations, and reports — every visit leaves a record. We trust process more than memory."
  },
  {
    title: "UAE-specific",
    body: "Buildings, communities, and authorities matter. Generic 'best practice' isn't enough. Our approach is built for the UAE context."
  },
  {
    title: "Honest pricing direction",
    body: "Indicative ranges before site visit, scoped quote after inspection, and a final price before execution. No surprise costs at handover."
  },
  {
    title: "Three digital concepts, one brand",
    body: "Marketplace for individuals. AI Instant Assessment as the assistant layer. AI Property Intelligence Platform for B2B portfolios. Same brand, different products."
  },
  {
    title: "Refusal to overpromise",
    body: "We don't claim authority approvals we can't deliver, prices we can't honor, or speed we can't sustain. Less marketing, more execution."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT OMEGA"
        title={
          <>
            A UAE property execution company —{" "}
            <span className="italic text-omega-grey">built around process.</span>
          </>
        }
        description={`${COMPANY.legalName} delivers integrated property care, renovation, and engineering services across the UAE. We're built for owners, tenants, landlords, property managers, and businesses who want clarity before execution.`}
      />

      <Section className="bg-white border-b border-omega-border">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="display-md text-balance text-omega-charcoal">
                We connect property care, repair, assessment, renovation, and
                engineering into one OMEGA system.
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-omega-grey">
                Most property work in the UAE is fragmented — a handyman for one thing,
                a contractor for another, an engineer for a third. OMEGA exists because
                that fragmentation is where projects fail. Scope drifts. Reports go
                missing. Trades blame each other. Owners overpay.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-omega-grey">
                OMEGA closes the gap with structured intake, engineer-aware diagnosis,
                supervised execution, and reporting that survives the project. Whether
                you booked a 60-minute AC visit or a six-month villa renovation, the
                process is the same: scan, diagnose, estimate, plan, execute.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/marketplace" className="btn-primary btn-sm">
                  <ShoppingBag className="h-4 w-4" /> Open Marketplace
                </Link>
                <AskOmegaAiButton variant="secondary" />
                <Link href="/contact" className="btn-ghost btn-sm">
                  Speak to OMEGA
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-omega-cream p-6">
                <div className="eyebrow">Quick facts</div>
                <ul className="mt-4 divide-y divide-omega-border text-[14px] text-omega-charcoal">
                  <li className="flex justify-between py-3">
                    <span className="text-omega-grey">Legal entity</span>
                    <span className="text-right">{COMPANY.legalName}</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span className="text-omega-grey">Location</span>
                    <span className="text-right">Dubai, UAE</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span className="text-omega-grey">Coverage</span>
                    <span className="text-right">UAE-wide</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span className="text-omega-grey">Pillars</span>
                    <span className="text-right">Home Services · AMC · Renovation · Engineering</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span className="text-omega-grey">Digital</span>
                    <span className="text-right">Marketplace · AI Assistant · B2B Platform</span>
                  </li>
                  <li className="flex justify-between py-3">
                    <span className="text-omega-grey">Inspection fee</span>
                    <span className="text-right">AED {COMPANY.inspectionFee}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-omega-cream">
        <div className="container-edge">
          <SectionHeader
            eyebrow="HOW WE WORK"
            title={
              <>
                Six things we hold to —{" "}
                <span className="italic text-omega-grey">on every project.</span>
              </>
            }
          />
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {PRINCIPLES.map((p, i) => (
              <div
                key={p.title}
                className="rounded-2xl border border-omega-border bg-white p-6"
              >
                <div className="text-[10.5px] font-mono text-omega-grey">
                  0{i + 1}
                </div>
                <h3 className="mt-3 font-display text-2xl text-omega-charcoal">
                  {p.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-omega-grey">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-omega-black text-white">
        <div className="container-edge text-center">
          <h2 className="display-lg mx-auto max-w-3xl text-balance">
            Practical property guidance for owners.{" "}
            <span className="italic text-white/60">
              Built on engineering. Written for owners.
            </span>
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/marketplace" className="btn-primary btn-lg">
              <ShoppingBag className="h-4 w-4" /> Explore Marketplace
            </Link>
            <Link
              href="/contact"
              className="btn btn-lg border border-white/15 text-white hover:bg-white/10"
            >
              Speak to OMEGA
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
