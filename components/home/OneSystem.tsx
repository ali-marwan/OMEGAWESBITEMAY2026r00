import { Section, SectionHeader } from "@/components/ui/Section";
import {
  ShieldCheck,
  ClipboardCheck,
  Hammer,
  Settings2,
  Sparkles
} from "lucide-react";

const PIPELINE = [
  { step: "Scan", icon: <Sparkles className="h-4 w-4" />, body: "AI intake or inspection captures property reality." },
  { step: "Diagnose", icon: <ClipboardCheck className="h-4 w-4" />, body: "Likely cause, scope, and priority — engineer-aware." },
  { step: "Estimate", icon: <ShieldCheck className="h-4 w-4" />, body: "Indicative cost and timeline before you commit." },
  { step: "Plan", icon: <Settings2 className="h-4 w-4" />, body: "Scope, BOQ, drawings, approvals where needed." },
  { step: "Execute", icon: <Hammer className="h-4 w-4" />, body: "Supervised trades, photo-documented progress." }
];

export default function OneSystem() {
  return (
    <Section className="bg-white border-y border-omega-border">
      <div className="container-edge">
        <SectionHeader
          eyebrow="ONE OMEGA SYSTEM"
          title={
            <>
              Care, repair, assessment, renovation, and engineering —
              <span className="italic text-omega-grey"> connected.</span>
            </>
          }
          description="OMEGA exists to remove the gap between knowing something is wrong and getting the right thing done. Every step is structured. Every visit is reported. Every recommendation is reviewed."
        />

        <div className="mt-14 grid gap-3 lg:grid-cols-5">
          {PIPELINE.map((p, i) => (
            <div
              key={p.step}
              className="relative rounded-2xl border border-omega-border bg-omega-cream p-5 hover:bg-white transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] font-mono text-omega-grey">
                  0{i + 1}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-omega-orange-soft text-omega-orange">
                  {p.icon}
                </span>
              </div>
              <div className="mt-5 font-display text-2xl text-omega-charcoal">
                {p.step}
              </div>
              <div className="mt-2 text-[13px] leading-relaxed text-omega-grey">
                {p.body}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[12.5px] text-omega-grey">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-omega-orange" />
            Engineer-aware service across every tier
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-omega-orange" />
            UAE-specific compliance awareness
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-omega-orange" />
            Photo-documented, reviewed, reported
          </span>
        </div>
      </div>
    </Section>
  );
}
