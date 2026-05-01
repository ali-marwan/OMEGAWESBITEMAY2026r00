"use client";

import Link from "next/link";
import {
  AlertCircle,
  Clock,
  DollarSign,
  Hammer,
  ShieldAlert,
  CheckCircle2
} from "lucide-react";
import type { AiPreliminaryReport } from "@/data/aiMockData";

const SEVERITY_COLOR: Record<
  AiPreliminaryReport["severity"],
  { bg: string; text: string; label: string }
> = {
  low: { bg: "bg-emerald-50", text: "text-emerald-700", label: "Low priority" },
  medium: { bg: "bg-amber-50", text: "text-amber-700", label: "Medium priority" },
  high: { bg: "bg-orange-50", text: "text-omega-orange", label: "High priority" },
  urgent: { bg: "bg-red-50", text: "text-red-700", label: "Urgent — act soon" }
};

export default function AiPreliminaryReportView({
  report
}: {
  report: AiPreliminaryReport;
}) {
  const sev = SEVERITY_COLOR[report.severity];

  const isHighRisk = report.severity === "high" || report.severity === "urgent";
  const hasSafetyFlag = report.complianceFlags.some((f) =>
    /safety/i.test(f)
  );

  return (
    <div className="px-5 py-5">
      <div className="eyebrow mb-2">Preliminary Assessment</div>
      <div className="flex items-center gap-2">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${sev.bg} ${sev.text}`}
        >
          <AlertCircle className="h-3 w-3" />
          {sev.label}
        </span>
      </div>

      {(isHighRisk || hasSafetyFlag) && (
        <div
          className={`mt-3 flex items-start gap-2 rounded-xl border p-3 text-[12.5px] leading-relaxed ${
            hasSafetyFlag
              ? "border-red-200 bg-red-50 text-red-700"
              : "border-amber-200 bg-amber-50 text-amber-800"
          }`}
        >
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <span>
            {hasSafetyFlag
              ? "Safety priority — do not bypass breakers, ignore burning smell, or run damaged equipment. Book inspection or call OMEGA directly."
              : "This is a preliminary AI assessment. Book an inspection to confirm scope and cost before any irreversible work."}
          </span>
        </div>
      )}

      <p className="mt-3 text-[14px] leading-relaxed text-omega-charcoal">
        {report.summary}
      </p>

      <div className="mt-4 space-y-3">
        <ReportSection
          icon={<CheckCircle2 className="h-4 w-4" />}
          title="What this likely is"
          body={report.possibleCauseOrScope}
        />

        <div className="grid grid-cols-2 gap-2">
          <FactCard
            icon={<DollarSign className="h-4 w-4 text-omega-orange" />}
            label="Indicative cost"
            value={report.estimatedCostRange}
          />
          <FactCard
            icon={<Clock className="h-4 w-4 text-omega-orange" />}
            label="Indicative timeline"
            value={report.estimatedTimeline}
          />
        </div>

        {report.requiredTrades.length > 0 && (
          <ReportSection
            icon={<Hammer className="h-4 w-4" />}
            title="Trades likely involved"
            body={report.requiredTrades.join(" · ")}
          />
        )}

        {report.riskIfIgnored && (
          <ReportSection
            icon={<ShieldAlert className="h-4 w-4" />}
            title="Risk if ignored"
            body={report.riskIfIgnored}
          />
        )}

        {report.complianceFlags.length > 0 && (
          <div className="rounded-xl border border-omega-border bg-white p-3.5">
            <div className="text-[11px] font-medium uppercase tracking-eyebrow text-omega-grey">
              Compliance / Building flags
            </div>
            <ul className="mt-2 space-y-1.5 text-[12.5px] text-omega-charcoal">
              {report.complianceFlags.map((c, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-1 inline-block h-1 w-1 shrink-0 rounded-full bg-omega-orange" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        {report.recommendedServiceTitle && (
          <Link
            href={`/marketplace/services/${report.recommendedServiceSlug}`}
            className="block rounded-xl border border-omega-orange/30 bg-omega-orange-soft/40 p-3.5 transition hover:bg-omega-orange-soft/70"
          >
            <div className="eyebrow-orange">Recommended Service</div>
            <div className="mt-1 text-[14px] font-medium text-omega-charcoal">
              {report.recommendedServiceTitle}
            </div>
            <div className="mt-1 text-[12px] text-omega-grey">
              Open in Marketplace →
            </div>
          </Link>
        )}
      </div>

      <div className="mt-5 space-y-2">
        {report.nextActions.map((a, i) => (
          <a
            key={i}
            href={a.href}
            target={a.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`block rounded-xl text-center text-[13.5px] font-medium transition ${
              i === 0
                ? "btn-primary py-3 px-4"
                : "btn-secondary py-3 px-4 border"
            }`}
          >
            {a.label}
          </a>
        ))}
      </div>

      <p className="mt-4 rounded-xl bg-omega-offwhite p-3 text-[11px] leading-relaxed text-omega-grey">
        {report.disclaimer}
      </p>
    </div>
  );
}

function ReportSection({
  icon,
  title,
  body
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-xl border border-omega-border bg-white p-3.5">
      <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-eyebrow text-omega-grey">
        <span className="text-omega-orange">{icon}</span>
        {title}
      </div>
      <div className="mt-1.5 text-[13px] leading-relaxed text-omega-charcoal">
        {body}
      </div>
    </div>
  );
}

function FactCard({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-omega-border bg-white p-3.5">
      <div className="flex items-center gap-1.5 text-[10.5px] font-medium uppercase tracking-eyebrow text-omega-grey">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-[12.5px] text-omega-charcoal">{value}</div>
    </div>
  );
}
