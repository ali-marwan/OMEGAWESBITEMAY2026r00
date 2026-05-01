"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PORTFOLIO, PORTFOLIO_CATEGORIES } from "@/data/portfolio";

export default function PortfolioPage() {
  const [active, setActive] = useState<(typeof PORTFOLIO_CATEGORIES)[number]>("All");

  const projects = useMemo(() => {
    if (active === "All") return PORTFOLIO;
    return PORTFOLIO.filter((p) => p.category === active);
  }, [active]);

  return (
    <>
      <PageHero
        eyebrow="OMEGA PORTFOLIO"
        title={
          <>
            Built. Documented.{" "}
            <span className="italic text-omega-grey">Delivered.</span>
          </>
        }
        description="Selected projects across hospitality, retail, residential, and engineering coordination — executed under OMEGA supervision."
      />

      <Section className="bare:0 py-14 lg:py-20">
        <div className="container-edge">
          <div className="flex flex-wrap items-center gap-2">
            {PORTFOLIO_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[12.5px] font-medium transition ${
                  active === c
                    ? "border-omega-charcoal bg-omega-charcoal text-white"
                    : "border-omega-border bg-white text-omega-charcoal hover:border-omega-charcoal/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, i) => (
              <Link
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-omega-border bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden bg-omega-offwhite">
                  <img
                    src={encodeURI(p.cover)}
                    alt={p.title}
                    loading={i < 3 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <div className="flex items-center justify-between">
                    <span className="pill">{p.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-omega-grey group-hover:text-omega-orange" />
                  </div>
                  <h3 className="font-display text-2xl text-omega-charcoal">{p.title}</h3>
                  <p className="text-[13px] leading-relaxed text-omega-grey line-clamp-2">
                    {p.summary}
                  </p>
                  <div className="mt-auto flex items-center gap-3 text-[11px] text-omega-grey">
                    {p.location && <span>{p.location}</span>}
                    {p.year && <span>· {p.year}</span>}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
