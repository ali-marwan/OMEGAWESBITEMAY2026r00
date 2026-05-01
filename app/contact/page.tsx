import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Sparkles,
  ShoppingBag,
  ArrowUpRight
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";
import ContactForm from "@/components/contact/ContactForm";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";

export const metadata = buildMetadata({
  title: "Contact OMEGA — UAE Property Services",
  description:
    "Reach OMEGA by phone, WhatsApp, email, or office visit. For service work, open the Marketplace. For corporate inquiries, request a platform demo.",
  path: "/contact"
});

const CONTACT_CARDS = [
  {
    icon: <MessageCircle className="h-5 w-5 text-omega-orange" />,
    label: "WhatsApp",
    value: COMPANY.phone,
    href: COMPANY.whatsappHref,
    cta: "Open WhatsApp",
    external: true
  },
  {
    icon: <Phone className="h-5 w-5 text-omega-orange" />,
    label: "Phone",
    value: COMPANY.phone,
    href: COMPANY.phoneHref,
    cta: "Call OMEGA",
    external: false
  },
  {
    icon: <Mail className="h-5 w-5 text-omega-orange" />,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    cta: "Send email",
    external: false
  },
  {
    icon: <MapPin className="h-5 w-5 text-omega-orange" />,
    label: "Office",
    value: COMPANY.office,
    href: COMPANY.mapsHref,
    cta: "View on Google Maps",
    external: true
  },
  {
    icon: <Instagram className="h-5 w-5 text-omega-orange" />,
    label: "Instagram",
    value: COMPANY.instagram,
    href: COMPANY.instagramHref,
    cta: "Follow OMEGA",
    external: true
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="SPEAK TO OMEGA"
        title={
          <>
            Tell us what your property needs.{" "}
            <span className="italic text-omega-grey">
              We'll route you to the right next step.
            </span>
          </>
        }
        description="Marketplace for direct booking. AI for instant guidance. Inspection for clarity. Engineering team for serious scopes."
      />

      <Section bare className="py-14 lg:py-20">
        <div className="container-edge">
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {CONTACT_CARDS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noopener noreferrer" : undefined}
                className="group rounded-2xl border border-omega-border bg-white p-6 transition-all hover:border-omega-charcoal/20 hover:shadow-soft"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-omega-orange-soft">
                    {c.icon}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-omega-grey group-hover:text-omega-orange" />
                </div>
                <div className="mt-5 text-[10.5px] font-medium uppercase tracking-eyebrow text-omega-grey">
                  {c.label}
                </div>
                <div className="mt-1 text-[15px] font-medium text-omega-charcoal">
                  {c.value}
                </div>
                <div className="mt-4 text-[12px] font-medium text-omega-orange">
                  {c.cta}
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-omega-orange/30 bg-omega-orange-soft/40 p-6">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-omega-orange text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-5 text-[10.5px] font-medium uppercase tracking-eyebrow text-omega-orange">
                FASTEST ROUTE
              </div>
              <div className="mt-1 text-[15px] font-medium text-omega-charcoal">
                Ask OMEGA AI
              </div>
              <div className="mt-2 text-[12.5px] text-omega-grey">
                Describe the issue or upload media. OMEGA AI will recommend the right
                service or escalate to a person.
              </div>
              <div className="mt-4">
                <AskOmegaAiButton variant="primary" className="btn-sm" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white border-y border-omega-border">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="eyebrow-orange">SEND A MESSAGE</div>
              <h2 className="display-md mt-3 max-w-md text-balance text-omega-charcoal">
                Tell us what you need —{" "}
                <span className="italic text-omega-grey">we'll come back to you.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-omega-grey">
                For service work, the Marketplace is the fastest path. For corporate or
                engineering inquiries, this form goes directly to our team.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/marketplace" className="btn-primary btn-sm">
                  <ShoppingBag className="h-4 w-4" /> Open Marketplace
                </Link>
                <Link
                  href="/omega-ai-property-intelligence"
                  className="btn-secondary btn-sm"
                >
                  Corporate Demo
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-omega-cream">
        <div className="container-edge">
          <div className="overflow-hidden rounded-2xl border border-omega-border bg-white">
            <div className="grid gap-8 p-8 lg:grid-cols-2 lg:p-12">
              <div>
                <div className="eyebrow-orange">VISIT US</div>
                <h2 className="display-md mt-3 text-balance text-omega-charcoal">
                  {COMPANY.office}
                </h2>
                <p className="mt-5 max-w-md text-[15px] leading-relaxed text-omega-grey">
                  Drop by during business hours, or schedule a meeting in advance.
                </p>
                <a
                  href={COMPANY.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-dark btn-sm mt-6 inline-flex"
                >
                  <MapPin className="h-4 w-4" /> Open in Google Maps
                </a>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-xl border border-omega-border bg-omega-offwhite">
                <iframe
                  src="https://www.google.com/maps?q=Alpha%20Green%20Tower%20JVC%20Dubai&output=embed"
                  loading="lazy"
                  className="h-full w-full"
                  title="OMEGA Office — Alpha Green Tower, JVC, Dubai"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
