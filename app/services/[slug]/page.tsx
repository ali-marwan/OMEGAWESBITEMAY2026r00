import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, ShoppingBag } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";
import { SERVICES, getServiceBySlug } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return buildMetadata({
    title: `${s.title} — UAE`,
    description: s.summary,
    path: `/services/${s.slug}`
  });
}

export default function ServiceDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        description={service.summary}
      />

      <Section className="bg-white border-b border-omega-border">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="text-[17px] leading-relaxed text-omega-charcoal">
                {service.description}
              </p>
              <p className="mt-5 text-[15px] leading-relaxed text-omega-grey">
                {service.positioning}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {service.ctas.map((c, i) => {
                  if (c.href === "#open-omega-ai") {
                    return (
                      <AskOmegaAiButton
                        key={i}
                        variant={c.variant === "primary" ? "primary" : c.variant === "secondary" ? "secondary" : "ghost"}
                        label={c.label}
                      />
                    );
                  }
                  const cls =
                    c.variant === "primary"
                      ? "btn-primary"
                      : c.variant === "secondary"
                      ? "btn-secondary"
                      : "btn-ghost";
                  return (
                    <Link key={i} href={c.href} className={`${cls} btn-sm`}>
                      {c.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-omega-cream p-6">
                <div className="eyebrow">What this includes</div>
                <ul className="mt-4 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[14px] text-omega-charcoal">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-omega-orange" />
                      <span>{f}</span>
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
          <div className="eyebrow-orange">USE CASES</div>
          <h2 className="display-md mt-4 max-w-3xl text-balance text-omega-charcoal">
            Where {service.shortTitle.toLowerCase()} fits.
          </h2>

          <div className="mt-10 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {service.useCases.map((u) => (
              <div
                key={u}
                className="rounded-xl border border-omega-border bg-white p-4 text-[14px] text-omega-charcoal"
              >
                {u}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white border-y border-omega-border">
        <div className="container-edge">
          <div className="eyebrow-orange">HOW IT WORKS</div>
          <h2 className="display-md mt-4 max-w-3xl text-balance text-omega-charcoal">
            A clear path from intake to handover.
          </h2>

          <div className="mt-10 grid gap-3 lg:grid-cols-4">
            {service.process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-omega-border bg-omega-cream p-6">
                <div className="text-[10.5px] font-mono text-omega-grey">{p.step}</div>
                <div className="mt-4 font-display text-2xl text-omega-charcoal">
                  {p.title}
                </div>
                <div className="mt-2 text-[13.5px] leading-relaxed text-omega-grey">
                  {p.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-omega-cream">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="eyebrow-orange">FAQ</div>
              <h2 className="display-md mt-4 text-balance text-omega-charcoal">
                Common questions.
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-omega-grey">
                Don't see what you need? Ask OMEGA AI or reach the team directly.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <AskOmegaAiButton variant="primary" />
                <Link href="/contact" className="btn-secondary btn-sm">
                  Speak to OMEGA
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-2">
                {service.faq.map((f) => (
                  <details
                    key={f.q}
                    className="group rounded-2xl border border-omega-border bg-white p-5 transition-all open:shadow-soft"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[15px] font-medium text-omega-charcoal">
                      {f.q}
                      <span className="text-omega-orange transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>
                    <p className="mt-3 text-[14px] leading-relaxed text-omega-grey">
                      {f.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-omega-black text-white">
        <div className="container-edge">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="eyebrow-orange">NEXT STEP</div>
              <h2 className="display-md mt-3 text-balance">
                Ready to start? Open the Marketplace or book an inspection.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link href="/marketplace" className="btn-primary btn-lg">
                <ShoppingBag className="h-4 w-4" /> Open Marketplace
              </Link>
              <Link
                href="/marketplace/inspection"
                className="btn btn-lg border border-white/15 text-white hover:bg-white/10"
              >
                Book Inspection — AED 100
              </Link>
              <AskOmegaAiButton
                variant="secondary"
                className="btn-lg !bg-white/10 !text-white !border-white/15 hover:!bg-white/15"
              />
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-1.5 border-t border-white/10 pt-6">
            <span className="text-[11px] uppercase tracking-eyebrow text-white/60">
              Related Services →
            </span>
            {SERVICES.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="rounded-full border border-white/15 px-3 py-1 text-[12px] text-white/80 hover:border-white/40 hover:text-white"
              >
                {s.shortTitle} <ArrowUpRight className="-mt-0.5 inline h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
