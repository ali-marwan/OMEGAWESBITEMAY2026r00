import Link from "next/link";
import { MessageCircle, ShoppingBag, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";

export default function ContactCta() {
  return (
    <Section className="bg-omega-black text-white">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="eyebrow-orange">SPEAK TO OMEGA</div>
            <h2 className="display-lg mt-4 text-balance">
              Tell us what your property needs.{" "}
              <span className="italic text-white/60">
                We'll route you to the right next step.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/70">
              Marketplace for direct booking. AI for instant guidance. Inspection for
              clarity. Engineering team for serious scopes. Pick the path that fits.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/marketplace" className="btn-primary btn-lg">
                <ShoppingBag className="h-4 w-4" />
                Open Marketplace
              </Link>
              <AskOmegaAiButton
                variant="secondary"
                className="btn-lg !bg-white/10 !text-white !border-white/15 hover:!bg-white/15"
                label="Ask OMEGA AI"
              />
              <a
                href={COMPANY.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-lg border border-white/15 text-white hover:bg-white/10"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-display text-2xl">Direct contact</h3>
              <ul className="mt-5 space-y-4 text-[14px]">
                <li className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/60">Phone / WhatsApp</span>
                  <a href={COMPANY.phoneHref} className="font-medium hover:text-omega-orange">
                    {COMPANY.phone}
                  </a>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/60">Email</span>
                  <a href={`mailto:${COMPANY.email}`} className="font-medium hover:text-omega-orange">
                    {COMPANY.email}
                  </a>
                </li>
                <li className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-white/60">Office</span>
                  <a
                    href={COMPANY.mapsHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-right font-medium hover:text-omega-orange"
                  >
                    {COMPANY.office}
                  </a>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-white/60">Instagram</span>
                  <a
                    href={COMPANY.instagramHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium hover:text-omega-orange"
                  >
                    {COMPANY.instagram}
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-white/80 hover:text-omega-orange"
              >
                Open contact page <ArrowUpRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
