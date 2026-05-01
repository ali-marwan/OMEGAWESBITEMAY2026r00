import Link from "next/link";
import { ArrowUpRight, Building2 } from "lucide-react";
import { Section } from "@/components/ui/Section";

export default function B2BMention() {
  return (
    <Section className="border-y border-omega-border bg-omega-cream">
      <div className="container-edge">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow-orange">FOR CORPORATES & PROPERTY MANAGERS</div>
            <h2 className="display-md mt-4 text-balance text-omega-charcoal">
              Managing multiple properties?{" "}
              <span className="italic text-omega-grey">
                There's a separate platform for that.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-omega-grey">
              The{" "}
              <span className="font-medium text-omega-charcoal">
                OMEGA AI Property Intelligence Platform
              </span>{" "}
              is a B2B system for landlords, property managers, and corporates — multi-property
              dashboards, AI assessment, engineer review, BOQ generation, compliance flags,
              and execution workflow.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/omega-ai-property-intelligence"
                className="btn-dark btn-lg"
              >
                Explore the Platform
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link href="/contact?team=enterprise" className="btn-ghost btn-lg">
                Request Corporate Demo
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-omega-border bg-white p-6 shadow-soft">
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
                      24 properties · 6 communities
                    </div>
                  </div>
                </div>
                <span className="pill">Demo</span>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-[11.5px]">
                <Stat label="Open issues" value="14" />
                <Stat label="Awaiting approval" value="6" />
                <Stat label="In execution" value="9" />
              </div>

              <div className="mt-4 space-y-2">
                <RowItem unit="JVC · Apt 1502" status="Engineer review" tone="dark" />
                <RowItem unit="Marina · Office 14F" status="BOQ ready" tone="orange" />
                <RowItem unit="Hills · Villa B-22" status="In execution" tone="default" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-omega-border bg-omega-offwhite p-3">
      <div className="text-[10px] font-medium uppercase tracking-eyebrow text-omega-grey">
        {label}
      </div>
      <div className="mt-0.5 font-display text-2xl text-omega-charcoal">{value}</div>
    </div>
  );
}

function RowItem({
  unit,
  status,
  tone
}: {
  unit: string;
  status: string;
  tone: "dark" | "orange" | "default";
}) {
  const dot =
    tone === "dark"
      ? "bg-omega-black"
      : tone === "orange"
      ? "bg-omega-orange"
      : "bg-omega-grey";
  return (
    <div className="flex items-center justify-between rounded-xl border border-omega-border bg-omega-offwhite px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="text-[12.5px] text-omega-charcoal">{unit}</span>
      </div>
      <span className="text-[11px] text-omega-grey">{status}</span>
    </div>
  );
}
