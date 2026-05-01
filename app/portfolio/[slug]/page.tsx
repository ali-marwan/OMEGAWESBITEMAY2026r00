import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, MapPin, Calendar, ShoppingBag } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";
import { PORTFOLIO, getProjectBySlug } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return PORTFOLIO.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProjectBySlug(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: `${p.title} — OMEGA Portfolio`,
    description: p.summary,
    path: `/portfolio/${p.slug}`
  });
}

export default function PortfolioDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  return (
    <>
      <section className="border-b border-omega-border bg-omega-cream">
        <div className="container-edge pt-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey hover:text-omega-orange"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Portfolio
          </Link>
        </div>
        <div className="container-edge pt-6 pb-14 lg:pt-10 lg:pb-20">
          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="eyebrow-orange">{project.category}</div>
              <h1 className="display-lg mt-4 max-w-3xl text-balance text-omega-charcoal">
                {project.title}
              </h1>
              <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-omega-grey">
                {project.summary}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-white p-5 text-[13px]">
                <div className="grid grid-cols-2 gap-4">
                  {project.client && (
                    <div>
                      <div className="text-[10.5px] font-mono uppercase tracking-eyebrow text-omega-grey">
                        Client
                      </div>
                      <div className="mt-1 text-omega-charcoal">{project.client}</div>
                    </div>
                  )}
                  {project.location && (
                    <div>
                      <div className="text-[10.5px] font-mono uppercase tracking-eyebrow text-omega-grey">
                        Location
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-omega-charcoal">
                        <MapPin className="h-3.5 w-3.5 text-omega-orange" />
                        {project.location}
                      </div>
                    </div>
                  )}
                  {project.year && (
                    <div>
                      <div className="text-[10.5px] font-mono uppercase tracking-eyebrow text-omega-grey">
                        Year
                      </div>
                      <div className="mt-1 flex items-center gap-1.5 text-omega-charcoal">
                        <Calendar className="h-3.5 w-3.5 text-omega-orange" />
                        {project.year}
                      </div>
                    </div>
                  )}
                  <div>
                    <div className="text-[10.5px] font-mono uppercase tracking-eyebrow text-omega-grey">
                      Services
                    </div>
                    <div className="mt-1 text-omega-charcoal">
                      {project.services.join(" · ")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section bare className="py-14 lg:py-20">
        <div className="container-edge">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {project.gallery.map((src, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl border border-omega-border bg-omega-offwhite ${
                  i === 0
                    ? "min-h-[420px] md:col-span-2 md:row-span-2"
                    : "min-h-[260px]"
                }`}
              >
                <Image
                  src={encodeURI(src)}
                  alt={`${project.title} — image ${i + 1}`}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1024px) 66vw, (min-width: 768px) 100vw, 100vw"
                      : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  }
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white border-y border-omega-border">
        <div className="container-edge">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="eyebrow-orange">PROJECT NOTES</div>
              <h2 className="display-md mt-3 max-w-2xl text-balance text-omega-charcoal">
                What we focused on.
              </h2>
              <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-omega-grey">
                {project.description}
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-omega-cream p-6">
                <div className="eyebrow">Scope highlights</div>
                <ul className="mt-4 space-y-2.5">
                  {project.scope.map((s) => (
                    <li
                      key={s}
                      className="flex gap-2 text-[14px] text-omega-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-omega-orange" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-omega-black text-white">
        <div className="container-edge">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <div className="eyebrow-orange">SIMILAR WORK?</div>
              <h2 className="display-md mt-3 text-balance">
                Tell OMEGA what you're planning. We'll route you to the right next step.
              </h2>
            </div>
            <div className="flex flex-wrap items-center gap-3 lg:justify-end">
              <Link
                href="/marketplace/quote-request"
                className="btn-primary btn-lg"
              >
                <ShoppingBag className="h-4 w-4" /> Request Quotation
              </Link>
              <AskOmegaAiButton
                variant="secondary"
                className="btn-lg !bg-white/10 !text-white !border-white/15 hover:!bg-white/15"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
