import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { PORTFOLIO } from "@/data/portfolio";

export default function PortfolioPreview() {
  const featured = PORTFOLIO.slice(0, 4);

  return (
    <Section>
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="SELECTED WORK"
            title={
              <>
                Built. Documented.
                <br />
                <span className="italic text-omega-grey">Delivered.</span>
              </>
            }
          />
          <Link href="/portfolio" className="btn-secondary btn-sm">
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              href={`/portfolio/${p.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-omega-border bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden bg-omega-offwhite">
                <img
                  src={encodeURI(p.cover)}
                  alt={p.title}
                  loading={i < 2 ? "eager" : "lazy"}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-5">
                <div>
                  <div className="text-[10.5px] font-medium uppercase tracking-eyebrow text-omega-grey">
                    {p.category}
                  </div>
                  <h3 className="mt-1 font-display text-2xl text-omega-charcoal">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-[13px] text-omega-grey">{p.summary}</p>
                </div>
                <ArrowUpRight className="mt-1 h-5 w-5 text-omega-grey group-hover:text-omega-orange" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
