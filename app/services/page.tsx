import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { SERVICES } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "OMEGA Services — Property Care, Renovation, Engineering",
  description:
    "Four service pillars under one OMEGA system: Home Services, Property Care AMC, Renovation, and Engineering Solutions across the UAE.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="OMEGA SERVICES"
        title={
          <>
            Four pillars. <span className="italic text-omega-grey">One system.</span>
          </>
        }
        description="From day-to-day repair to engineering-led renovation, OMEGA covers what UAE property work actually demands — supervised, reported, and execution-ready."
      />

      <Section className="bare:0 py-20 lg:py-24">
        <div className="container-edge">
          <div className="grid gap-3 lg:grid-cols-2">
            {SERVICES.map((s, idx) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col rounded-2xl border border-omega-border bg-white p-7 transition-all hover:border-omega-charcoal/20 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10.5px] font-mono text-omega-grey">0{idx + 1}</span>
                    <div className="eyebrow mt-2">{s.eyebrow}</div>
                    <h2 className="mt-2 font-display text-[34px] leading-tight text-omega-charcoal">
                      {s.title}
                    </h2>
                  </div>
                  <ArrowUpRight className="mt-2 h-5 w-5 text-omega-grey group-hover:text-omega-orange" />
                </div>
                <p className="mt-3 text-[15px] leading-relaxed text-omega-grey">
                  {s.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {s.features.slice(0, 4).map((f) => (
                    <span key={f} className="pill">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-charcoal group-hover:text-omega-orange">
                  Open {s.shortTitle} <ArrowUpRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
