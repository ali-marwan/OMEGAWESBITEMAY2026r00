"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { PORTFOLIO, PORTFOLIO_CATEGORIES, type PortfolioProject } from "@/data/portfolio";

type Cat = (typeof PORTFOLIO_CATEGORIES)[number];

export default function PortfolioGrid({ initialCat }: { initialCat: Cat }) {
  const router = useRouter();
  const [active, setActive] = useState<Cat>(initialCat);

  useEffect(() => {
    const next = active === "All" ? "/portfolio" : `/portfolio?cat=${encodeURIComponent(active)}`;
    router.replace(next, { scroll: false });
  }, [active, router]);

  const projects: PortfolioProject[] = useMemo(() => {
    if (active === "All") return PORTFOLIO;
    return PORTFOLIO.filter((p) => p.category === active);
  }, [active]);

  return (
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
            <div className="relative aspect-[4/3] overflow-hidden bg-omega-offwhite">
              <Image
                src={encodeURI(p.cover)}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={i < 3}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
  );
}

