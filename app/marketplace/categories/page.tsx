import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import {
  MARKETPLACE_CATEGORIES,
  MARKETPLACE_SERVICES
} from "@/data/marketplaceServices";
import CategoryIcon from "@/components/marketplace/CategoryIcon";
import { ArrowUpRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Marketplace Categories — OMEGA",
  description:
    "Browse OMEGA Marketplace by category — AC, plumbing, electrical, leaks, painting, renovation, handyman, AMC, inspection, fit-out across the UAE.",
  path: "/marketplace/categories"
});

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE · CATEGORIES"
        title={
          <>
            Browse OMEGA services{" "}
            <span className="italic text-omega-grey">by category.</span>
          </>
        }
        description="Each category covers a clear scope. Pick what fits — or open the service that best matches your issue."
      />

      <Section bare className="py-14 lg:py-20">
        <div className="container-edge">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {MARKETPLACE_CATEGORIES.map((c) => {
              const services = MARKETPLACE_SERVICES.filter(
                (s) => s.category === c.name
              );
              return (
                <div
                  key={c.name}
                  className="rounded-2xl border border-omega-border bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-omega-orange-soft text-omega-orange">
                      <CategoryIcon name={c.icon} />
                    </span>
                    <span className="text-[11px] uppercase tracking-eyebrow text-omega-grey">
                      {services.length} services
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-2xl text-omega-charcoal">
                    {c.name}
                  </h3>
                  <p className="mt-1 text-[13px] text-omega-grey">{c.description}</p>

                  <ul className="mt-4 space-y-1">
                    {services.slice(0, 4).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/marketplace/services/${s.slug}`}
                          className="group flex items-center justify-between border-b border-omega-border py-2 text-[13px]"
                        >
                          <span className="text-omega-charcoal group-hover:text-omega-orange">
                            {s.title}
                          </span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-omega-grey group-hover:text-omega-orange" />
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/marketplace?cat=${encodeURIComponent(c.name)}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-charcoal hover:text-omega-orange"
                  >
                    View all in {c.name} <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}
