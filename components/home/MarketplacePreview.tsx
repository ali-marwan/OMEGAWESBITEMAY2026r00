import Link from "next/link";
import { ArrowUpRight, ShoppingBag } from "lucide-react";
import {
  Wind,
  Droplets,
  Zap,
  Shield,
  Palette,
  Hammer,
  Wrench,
  CalendarCheck,
  ClipboardList,
  Building2
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { MARKETPLACE_CATEGORIES, MARKETPLACE_SERVICES } from "@/data/marketplaceServices";

const ICON_MAP: Record<string, React.ReactNode> = {
  wind: <Wind className="h-4 w-4" />,
  droplets: <Droplets className="h-4 w-4" />,
  zap: <Zap className="h-4 w-4" />,
  shield: <Shield className="h-4 w-4" />,
  palette: <Palette className="h-4 w-4" />,
  hammer: <Hammer className="h-4 w-4" />,
  wrench: <Wrench className="h-4 w-4" />,
  "calendar-check": <CalendarCheck className="h-4 w-4" />,
  "clipboard-list": <ClipboardList className="h-4 w-4" />,
  "building-2": <Building2 className="h-4 w-4" />
};

export default function MarketplacePreview() {
  const popular = MARKETPLACE_SERVICES.filter((s) => s.tags?.includes("popular")).slice(0, 4);

  return (
    <Section className="bg-omega-offwhite border-y border-omega-border">
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="OMEGA MARKETPLACE"
            title={
              <>
                Book property services
                <br />
                <span className="italic text-omega-grey">like you book anything else.</span>
              </>
            }
            description="Choose a service, request inspection, or let OMEGA AI guide you. Real ecommerce flow — built for property work."
          />
          <Link href="/marketplace" className="btn-primary btn-sm">
            <ShoppingBag className="h-4 w-4" />
            Open Marketplace
          </Link>
        </div>

        <div className="mt-12">
          <h3 className="eyebrow mb-3">Browse by category</h3>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
            {MARKETPLACE_CATEGORIES.map((c) => (
              <Link
                key={c.name}
                href={`/marketplace/categories?cat=${encodeURIComponent(c.name)}`}
                className="group flex items-start gap-3 rounded-2xl border border-omega-border bg-white p-4 transition-all hover:border-omega-charcoal/20"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-omega-orange-soft text-omega-orange">
                  {ICON_MAP[c.icon] ?? <Wrench className="h-4 w-4" />}
                </span>
                <span className="flex-1">
                  <span className="block text-[13px] font-medium text-omega-charcoal">
                    {c.name}
                  </span>
                  <span className="block text-[11.5px] text-omega-grey">
                    {c.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {popular.length > 0 && (
          <div className="mt-12">
            <h3 className="eyebrow mb-3">Popular services</h3>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {popular.map((s) => (
                <Link
                  key={s.slug}
                  href={`/marketplace/services/${s.slug}`}
                  className="group flex flex-col rounded-2xl border border-omega-border bg-white p-5 transition-all hover:border-omega-charcoal/20 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between">
                    <span className="pill">{s.category}</span>
                    <ArrowUpRight className="h-4 w-4 text-omega-grey group-hover:text-omega-orange" />
                  </div>
                  <h4 className="mt-3 text-[15.5px] font-medium text-omega-charcoal">
                    {s.title}
                  </h4>
                  <p className="mt-1.5 text-[12.5px] text-omega-grey line-clamp-2">
                    {s.summary}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-[12.5px] font-medium text-omega-orange">
                      {s.startingPrice ?? "Quote on request"}
                    </span>
                    <span className="text-[12px] text-omega-grey">
                      {s.duration}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
