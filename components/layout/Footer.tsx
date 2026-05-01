import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  ArrowUpRight,
  ShoppingBag
} from "lucide-react";
import {
  COMPANY,
  FOOTER_LEGAL,
  FOOTER_QUICK,
  FOOTER_SERVICES
} from "@/lib/constants";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-omega-border bg-omega-offwhite pb-24 pt-16 lg:pb-16">
      <div className="container-edge">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-omega-grey">
              One System for Property Care. Elevated by Engineering. Property
              services, renovation, and engineering depth across the UAE — connected
              into one OMEGA service structure.
            </p>
            <Link
              href="/marketplace"
              className="btn-dark btn-sm mt-6 inline-flex"
            >
              <ShoppingBag className="h-4 w-4" />
              Open Marketplace
            </Link>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-4">Services</h4>
            <ul className="space-y-2.5 text-[14px] text-omega-charcoal">
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="hover:text-omega-orange transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="eyebrow mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-[14px] text-omega-charcoal">
              {FOOTER_QUICK.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="hover:text-omega-orange transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="eyebrow mb-4">Contact</h4>
            <ul className="space-y-3 text-[14px] text-omega-charcoal">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 text-omega-orange" />
                <a href={COMPANY.phoneHref} className="hover:text-omega-orange">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-omega-orange" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="hover:text-omega-orange"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-omega-orange" />
                <a
                  href={COMPANY.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-omega-orange"
                >
                  {COMPANY.office}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4 text-omega-orange" />
                <a
                  href={COMPANY.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-omega-orange"
                >
                  {COMPANY.instagram}
                </a>
              </li>
            </ul>

            <a
              href={COMPANY.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey hover:text-omega-orange"
            >
              View on Google Maps <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-omega-border pt-6 text-[12px] text-omega-grey lg:flex-row lg:items-center">
          <div>© {new Date().getFullYear()} {COMPANY.legalName}.</div>
          <div className="flex items-center gap-5">
            {FOOTER_LEGAL.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-omega-orange">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
