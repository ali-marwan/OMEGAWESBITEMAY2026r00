import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Clock,
  ShieldCheck,
  Sparkles,
  AlertTriangle
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";
import {
  MARKETPLACE_SERVICES,
  getMarketplaceServiceBySlug
} from "@/data/marketplaceServices";
import { inferAiPresetFromServiceSlug } from "@/data/aiMockData";
import { COMPANY, PRICE_DISCLAIMER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return MARKETPLACE_SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getMarketplaceServiceBySlug(params.slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.title} — OMEGA Marketplace`,
    description: s.summary,
    path: `/marketplace/services/${s.slug}`
  });
}

export default function MarketplaceServiceDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const s = getMarketplaceServiceBySlug(params.slug);
  if (!s) notFound();

  const related = s.relatedServices
    .map((slug) => getMarketplaceServiceBySlug(slug))
    .filter(Boolean);

  return (
    <>
      <section className="border-b border-omega-border bg-omega-cream">
        <div className="container-edge pt-10">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey hover:text-omega-orange"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Marketplace
          </Link>
        </div>

        <div className="container-edge pt-6 pb-14 lg:pb-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-2">
                <span className="pill">{s.category}</span>
                {s.tags?.map((t) => (
                  <span key={t} className="pill-orange capitalize">
                    {t}
                  </span>
                ))}
              </div>

              <h1 className="display-lg mt-5 max-w-2xl text-balance text-omega-charcoal">
                {s.title}
              </h1>
              <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-omega-grey">
                {s.summary}
              </p>

              <div className="mt-7 grid grid-cols-3 gap-2 max-w-md">
                <Fact
                  icon={<Sparkles className="h-3.5 w-3.5 text-omega-orange" />}
                  label="Starting"
                  value={s.startingPrice ?? "Quote"}
                />
                <Fact
                  icon={<Clock className="h-3.5 w-3.5 text-omega-orange" />}
                  label="Duration"
                  value={s.duration ?? "Variable"}
                />
                <Fact
                  icon={<ShieldCheck className="h-3.5 w-3.5 text-omega-orange" />}
                  label="Inspection"
                  value={`AED ${s.inspectionFee ?? COMPANY.inspectionFee}`}
                />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-white p-5">
                <h3 className="font-display text-2xl text-omega-charcoal">
                  How would you like to proceed?
                </h3>
                <div className="mt-4 space-y-2">
                  {s.ctaPrimary === "book" && (
                    <Link
                      href={`/marketplace/booking?service=${s.slug}`}
                      className="btn-primary btn-lg w-full"
                    >
                      Book this service
                    </Link>
                  )}
                  {s.ctaPrimary === "inspection" && (
                    <Link
                      href={`/marketplace/inspection?service=${s.slug}`}
                      className="btn-primary btn-lg w-full"
                    >
                      Book Inspection — AED {COMPANY.inspectionFee}
                    </Link>
                  )}
                  {s.ctaPrimary === "quote" && (
                    <Link
                      href={`/marketplace/quote-request?service=${s.slug}`}
                      className="btn-primary btn-lg w-full"
                    >
                      Request Quotation
                    </Link>
                  )}

                  {s.ctaPrimary !== "inspection" && (
                    <Link
                      href={`/marketplace/inspection?service=${s.slug}`}
                      className="btn-secondary btn-lg w-full"
                    >
                      Book Inspection — AED {COMPANY.inspectionFee}
                    </Link>
                  )}
                  {s.ctaPrimary !== "quote" && (
                    <Link
                      href={`/marketplace/quote-request?service=${s.slug}`}
                      className="btn-ghost btn-lg w-full"
                    >
                      Request Quotation
                    </Link>
                  )}
                  <AskOmegaAiButton
                    variant="ghost"
                    className="btn-lg w-full"
                    label="Ask OMEGA AI about this"
                    flow={inferAiPresetFromServiceSlug(s.slug)?.flow}
                    topic={inferAiPresetFromServiceSlug(s.slug)?.topic}
                  />
                  <a
                    href={buildWhatsAppLink(`Hi OMEGA, I'd like to inquire about: ${s.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost btn-lg w-full"
                  >
                    WhatsApp OMEGA
                  </a>
                </div>
                <p className="mt-4 text-[11px] text-omega-grey">
                  {PRICE_DISCLAIMER}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-white border-b border-omega-border">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <h2 className="display-md text-balance text-omega-charcoal">
                What this service involves.
              </h2>
              <p className="mt-5 text-[16px] leading-relaxed text-omega-grey">
                {s.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-omega-cream p-6">
                <div className="eyebrow">What's included</div>
                <ul className="mt-4 space-y-2.5">
                  {s.whatsIncluded.map((w) => (
                    <li
                      key={w}
                      className="flex gap-2 text-[14px] text-omega-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-omega-orange" />
                      {w}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-omega-cream">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-omega-border bg-white p-6">
                <div className="eyebrow-orange">Required information</div>
                <ul className="mt-4 space-y-2.5">
                  {s.requiredInfo.map((r) => (
                    <li
                      key={r}
                      className="flex gap-2 text-[14px] text-omega-charcoal"
                    >
                      <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-omega-orange" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-white p-6">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-omega-orange" />
                  <span className="text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey">
                    Important
                  </span>
                </div>
                <p className="mt-3 text-[13.5px] leading-relaxed text-omega-grey">
                  Indicative pricing only. The final price is confirmed after on-site
                  assessment, scope agreement, and OMEGA confirmation. For unclear
                  scopes, an inspection is the recommended first step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section className="bg-white border-y border-omega-border">
          <div className="container-edge">
            <h2 className="display-md text-balance text-omega-charcoal">
              Related services.
            </h2>
            <div className="mt-10 grid gap-3 md:grid-cols-3">
              {related.map(
                (r) =>
                  r && (
                    <Link
                      key={r.slug}
                      href={`/marketplace/services/${r.slug}`}
                      className="group rounded-2xl border border-omega-border bg-omega-cream p-5 hover:border-omega-charcoal/20"
                    >
                      <span className="pill">{r.category}</span>
                      <h3 className="mt-3 text-[15px] font-medium text-omega-charcoal">
                        {r.title}
                      </h3>
                      <p className="mt-1 text-[13px] text-omega-grey line-clamp-2">
                        {r.summary}
                      </p>
                      <div className="mt-3 text-[12px] font-medium text-omega-orange">
                        {r.startingPrice ?? "Quote on request"}
                      </div>
                    </Link>
                  )
              )}
            </div>
          </div>
        </Section>
      )}
    </>
  );
}

function Fact({
  icon,
  label,
  value
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-omega-border bg-white p-3">
      <div className="flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-eyebrow text-omega-grey">
        {icon}
        {label}
      </div>
      <div className="mt-1 text-[13px] font-medium text-omega-charcoal">{value}</div>
    </div>
  );
}
