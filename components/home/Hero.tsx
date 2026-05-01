"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, ShoppingBag, MessageCircle, Sparkles } from "lucide-react";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";

const OmegaLogo3D = dynamic(() => import("@/components/ui/OmegaLogo3D"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <img src="/omega-logo.svg" alt="" className="h-12 w-auto opacity-40" />
    </div>
  )
});

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-omega-cream">
      <div className="hero-glow absolute inset-0" aria-hidden />
      <div className="absolute inset-0 grid-bg opacity-50" aria-hidden />
      <div
        className="pointer-events-none absolute right-4 top-24 hidden h-[200px] w-[200px] opacity-70 lg:block xl:right-12 xl:h-[260px] xl:w-[260px]"
        aria-hidden
      >
        <OmegaLogo3D className="h-full w-full" />
      </div>

      <div className="container-edge relative z-[1] pt-14 pb-20 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow-orange animate-fade-in-up">
              <span className="inline-block h-1 w-1 rounded-full bg-omega-orange" />
              Property Care · Renovation · Engineering · UAE
            </div>

            <h1 className="display-xl mt-6 text-balance text-omega-charcoal animate-fade-in-up [animation-delay:80ms]">
              One System for{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Property Care.</span>
                <span
                  className="absolute -bottom-1 left-0 right-0 h-2 bg-omega-orange/20"
                  aria-hidden
                />
              </span>
              <br />
              <span className="font-display italic text-omega-grey">
                Elevated by Engineering.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-omega-grey lg:text-[18.5px] animate-fade-in-up [animation-delay:160ms]">
              Integrated property solutions across the UAE — from home services and
              property health reports to renovation, engineering support, and AI-guided
              intake and routing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 animate-fade-in-up [animation-delay:240ms]">
              <Link href="/marketplace" className="btn-primary btn-lg">
                <ShoppingBag className="h-4 w-4" />
                Explore Marketplace
              </Link>
              <AskOmegaAiButton variant="secondary" className="btn-lg" />
              <Link href="/contact" className="btn-ghost btn-lg">
                <MessageCircle className="h-4 w-4" />
                Speak to Our Team
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 text-[12px] uppercase tracking-eyebrow text-omega-grey animate-fade-in-up [animation-delay:320ms]">
              {["Care", "Repair", "Assessment", "Renovation", "Engineering", "Execution"].map(
                (w, i) => (
                  <span key={w} className="flex items-center gap-2">
                    {w}
                    {i < 5 && (
                      <span className="h-1 w-1 rounded-full bg-omega-orange/60" />
                    )}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative animate-fade-in-up [animation-delay:200ms]">
      <div className="relative overflow-hidden rounded-3xl border border-omega-border bg-white p-6 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="eyebrow">
            <Sparkles className="h-3 w-3 text-omega-orange" />
            OMEGA AI · Live Routing
          </div>
          <span className="pill-orange">UAE</span>
        </div>

        <div className="mt-6 space-y-3">
          <div className="rounded-2xl bg-omega-offwhite p-4">
            <div className="text-[11px] font-medium uppercase tracking-eyebrow text-omega-grey">
              You said
            </div>
            <div className="mt-1 text-[14px] text-omega-charcoal">
              "AC drips water onto the gypsum ceiling in my apartment in JVC."
            </div>
          </div>

          <div className="rounded-2xl border border-omega-orange/20 bg-omega-orange-soft/40 p-4">
            <div className="flex items-center justify-between">
              <div className="eyebrow-orange">OMEGA AI · Recommended</div>
              <span className="pill bg-white">Medium urgency</span>
            </div>
            <div className="mt-2 text-[14px] font-medium text-omega-charcoal">
              AC + Leak Detection visit
            </div>
            <div className="mt-1 text-[12.5px] text-omega-grey">
              Likely a blocked condensate drain or insulation issue. Fix before the
              gypsum stains spread.
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2 text-[11.5px]">
              <span className="pill">AED 199–600</span>
              <span className="pill">1–2 hr visit</span>
              <span className="pill">AC · Plumbing</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href="/marketplace/inspection"
              className="rounded-xl border border-omega-charcoal/15 bg-white px-3 py-2.5 text-center text-[12.5px] font-medium text-omega-charcoal hover:border-omega-charcoal/30"
            >
              Book Inspection — AED 100
            </Link>
            <Link
              href="/marketplace"
              className="rounded-xl bg-omega-black px-3 py-2.5 text-center text-[12.5px] font-medium text-white"
            >
              Open Service →
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-omega-border bg-white p-4 shadow-soft sm:block">
        <div className="eyebrow">Inspection Fee</div>
        <div className="mt-1 font-display text-3xl text-omega-charcoal">AED 100</div>
        <div className="mt-1 text-[11px] text-omega-grey">
          Engineer-aware site visit
        </div>
      </div>

      <div className="absolute -right-4 top-8 hidden rotate-2 rounded-xl border border-omega-border bg-white px-3 py-2 shadow-soft md:block">
        <div className="flex items-center gap-2 text-[11px] text-omega-charcoal">
          <ArrowRight className="h-3 w-3 text-omega-orange" />
          Scan → Diagnose → Estimate → Plan → Execute
        </div>
      </div>
    </div>
  );
}
