"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ShoppingBag,
  ArrowUpRight,
  ClipboardList,
  Sparkles
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import {
  MARKETPLACE_CATEGORIES,
  MARKETPLACE_SERVICES,
  type MarketplaceCategory
} from "@/data/marketplaceServices";
import CategoryIcon from "@/components/marketplace/CategoryIcon";
import { COMPANY, PRICE_DISCLAIMER } from "@/lib/constants";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";

export default function MarketplaceHome({
  initialCat,
  initialQuery
}: {
  initialCat: MarketplaceCategory | null;
  initialQuery: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [activeCat, setActiveCat] = useState<MarketplaceCategory | null>(initialCat);

  // Sync URL with state (no scroll jump)
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeCat) params.set("cat", activeCat);
    if (query.trim()) params.set("q", query.trim());
    const qs = params.toString();
    const next = qs ? `/marketplace?${qs}` : "/marketplace";
    router.replace(next, { scroll: false });
  }, [activeCat, query, router]);

  const filtered = useMemo(() => {
    let list = MARKETPLACE_SERVICES;
    if (activeCat) list = list.filter((s) => s.category === activeCat);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.summary.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [query, activeCat]);

  const popular = MARKETPLACE_SERVICES.filter((s) => s.tags?.includes("popular"));

  return (
    <>
      <section className="relative overflow-hidden border-b border-omega-border bg-omega-cream">
        <div className="hero-glow absolute inset-0" aria-hidden />
        <div className="container-edge relative py-14 lg:py-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="eyebrow-orange">OMEGA MARKETPLACE</div>
              <h1 className="display-lg mt-4 max-w-2xl text-balance text-omega-charcoal">
                Book property services with OMEGA.
              </h1>
              <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-omega-grey lg:text-[18px]">
                Choose the service you need, request inspection, or let OMEGA AI guide
                you to the correct action.
              </p>

              <div className="mt-7 flex w-full max-w-xl items-center gap-2 rounded-full border border-omega-border bg-white px-4 py-2.5">
                <Search className="h-4 w-4 text-omega-grey" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search AC, leak, renovation, AMC, fit-out…"
                  className="w-full bg-transparent text-[14px] text-omega-charcoal placeholder:text-omega-warm-grey focus:outline-none"
                  aria-label="Search services"
                />
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-2">
                <Link
                  href="/marketplace/inspection"
                  className="btn-primary btn-sm"
                >
                  Book Inspection — AED {COMPANY.inspectionFee}
                </Link>
                <AskOmegaAiButton variant="secondary" className="btn-sm" />
                <Link
                  href="/marketplace/quote-request"
                  className="btn-ghost btn-sm"
                >
                  Request Quotation
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-2 lg:grid-cols-2">
                <HowCard step="01" title="Choose" body="Browse services or use AI to route." />
                <HowCard step="02" title="Confirm" body="Add property, scope, urgency." />
                <HowCard step="03" title="Book or quote" body="Direct booking or AED 100 inspection." />
                <HowCard step="04" title="Execute" body="OMEGA-supervised visit and report." />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section bare className="py-10 lg:py-14">
        <div className="container-edge">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveCat(null)}
              className={`rounded-full border px-4 py-2 text-[12.5px] font-medium ${
                activeCat === null
                  ? "border-omega-charcoal bg-omega-charcoal text-white"
                  : "border-omega-border bg-white text-omega-charcoal hover:border-omega-charcoal/30"
              }`}
            >
              All
            </button>
            {MARKETPLACE_CATEGORIES.map((c) => (
              <button
                key={c.name}
                onClick={() => setActiveCat(c.name)}
                className={`flex items-center gap-1.5 rounded-full border px-4 py-2 text-[12.5px] font-medium ${
                  activeCat === c.name
                    ? "border-omega-charcoal bg-omega-charcoal text-white"
                    : "border-omega-border bg-white text-omega-charcoal hover:border-omega-charcoal/30"
                }`}
              >
                <CategoryIcon name={c.icon} />
                {c.name}
              </button>
            ))}
          </div>
        </div>
      </Section>

      <Section bare className="pb-14 lg:pb-20">
        <div className="container-edge">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
            {filtered.length === 0 && (
              <div className="col-span-full rounded-2xl border border-omega-border bg-white p-10 text-center">
                <ClipboardList className="mx-auto h-8 w-8 text-omega-grey" />
                <h3 className="mt-4 font-display text-2xl text-omega-charcoal">
                  No services match.
                </h3>
                <p className="mt-2 text-[13.5px] text-omega-grey">
                  Try a different keyword, browse all categories, or ask OMEGA AI.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                  <button
                    onClick={() => {
                      setQuery("");
                      setActiveCat(null);
                    }}
                    className="btn-secondary btn-sm"
                  >
                    Reset filters
                  </button>
                  <AskOmegaAiButton variant="primary" className="btn-sm" />
                </div>
              </div>
            )}
          </div>

          <p className="mt-10 text-[12px] text-omega-grey">{PRICE_DISCLAIMER}</p>
        </div>
      </Section>

      <Section className="border-y border-omega-border bg-omega-offwhite">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="eyebrow-orange flex items-center gap-2">
                <Sparkles className="h-3 w-3" /> Need help choosing?
              </div>
              <h2 className="display-md mt-3 max-w-md text-balance text-omega-charcoal">
                Ask OMEGA AI.{" "}
                <span className="italic text-omega-grey">It'll route you in seconds.</span>
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-omega-grey">
                Describe the issue or upload a photo. OMEGA AI recommends the right
                service, indicates a cost range, and gets you to the next step.
              </p>
              <div className="mt-6">
                <AskOmegaAiButton variant="primary" className="btn-lg" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <h3 className="eyebrow mb-3">Popular services</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                {popular.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/marketplace/services/${s.slug}`}
                    className="group flex items-start gap-3 rounded-2xl border border-omega-border bg-white p-4 hover:border-omega-charcoal/20"
                  >
                    <div className="flex-1">
                      <div className="text-[12.5px] font-medium text-omega-charcoal">
                        {s.title}
                      </div>
                      <div className="mt-0.5 text-[11.5px] text-omega-grey">
                        {s.startingPrice ?? "Quote on request"} · {s.duration}
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-omega-grey group-hover:text-omega-orange" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function HowCard({ step, title, body }: { step: string; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-omega-border bg-white p-4">
      <div className="text-[10.5px] font-mono text-omega-grey">{step}</div>
      <div className="mt-2 font-display text-xl text-omega-charcoal">{title}</div>
      <div className="mt-1 text-[12.5px] text-omega-grey">{body}</div>
    </div>
  );
}

function ServiceCard({
  service
}: {
  service: (typeof MARKETPLACE_SERVICES)[number];
}) {
  return (
    <Link
      href={`/marketplace/services/${service.slug}`}
      className="group flex flex-col rounded-2xl border border-omega-border bg-white p-5 transition-all hover:border-omega-charcoal/20 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-2">
        <span className="pill">{service.category}</span>
        {service.tags?.includes("popular") && (
          <span className="pill-orange">Popular</span>
        )}
      </div>
      <h3 className="mt-3 text-[16px] font-medium text-omega-charcoal">
        {service.title}
      </h3>
      <p className="mt-1.5 text-[13px] text-omega-grey line-clamp-2">
        {service.summary}
      </p>
      <div className="mt-auto flex items-center justify-between pt-4 text-[12.5px]">
        <span className="font-medium text-omega-orange">
          {service.startingPrice ?? "Quote on request"}
        </span>
        <span className="text-omega-grey">{service.duration}</span>
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-omega-border pt-3 text-[11.5px]">
        <span className="text-omega-grey">
          {service.ctaPrimary === "book"
            ? "Direct booking"
            : service.ctaPrimary === "inspection"
            ? "Inspection-led"
            : "Quote on request"}
        </span>
        <ArrowUpRight className="h-4 w-4 text-omega-grey group-hover:text-omega-orange" />
      </div>
    </Link>
  );
}
