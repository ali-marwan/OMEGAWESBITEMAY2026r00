import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { SERVICES } from "@/data/services";

export default function ServicePillars() {
  return (
    <Section>
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="OMEGA SERVICE PILLARS"
            title={
              <>
                Built with depth.
                <br />
                <span className="italic text-omega-grey">Guided by engineering.</span>
              </>
            }
          />
          <Link
            href="/services"
            className="btn-secondary btn-sm hidden sm:inline-flex"
          >
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2">
          {SERVICES.map((s, idx) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-omega-border bg-white p-7 transition-all hover:shadow-elevated hover:border-omega-charcoal/15"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10.5px] font-mono text-omega-grey">
                    0{idx + 1}
                  </span>
                  <h3 className="mt-2 font-display text-[28px] leading-tight text-omega-charcoal">
                    {s.title}
                  </h3>
                </div>
                <ArrowUpRight className="mt-2 h-5 w-5 text-omega-grey group-hover:text-omega-orange transition-colors" />
              </div>

              <p className="mt-3 text-[14.5px] leading-relaxed text-omega-grey">
                {s.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {s.features.slice(0, 3).map((f) => (
                  <span key={f} className="pill">
                    {f}
                  </span>
                ))}
              </div>

              <div
                className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-omega-orange/0 blur-3xl transition-all group-hover:bg-omega-orange/10"
                aria-hidden
              />
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link href="/services" className="btn-secondary btn-sm w-full">
            All services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
