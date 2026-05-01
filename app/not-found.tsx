import Link from "next/link";
import { ArrowLeft, ShoppingBag, ArrowUpRight } from "lucide-react";

const POPULAR = [
  { label: "Marketplace", href: "/marketplace" },
  { label: "Book Inspection — AED 100", href: "/marketplace/inspection" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/blog" },
  { label: "OMEGA AI Platform", href: "/omega-ai-property-intelligence" },
  { label: "Contact", href: "/contact" }
];

export default function NotFound() {
  return (
    <section className="container-edge flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="eyebrow-orange">404</div>
      <h1 className="display-lg mt-4 max-w-xl text-balance text-omega-charcoal">
        We couldn't find that page.
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-omega-grey">
        It may have moved, or you may have followed an outdated link. Try one of the
        popular routes below, or open the OMEGA Marketplace.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <Link href="/marketplace" className="btn-primary">
          <ShoppingBag className="h-4 w-4" /> Open Marketplace
        </Link>
      </div>

      <div className="mt-10 flex max-w-xl flex-wrap items-center justify-center gap-1.5">
        {POPULAR.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="inline-flex items-center gap-1 rounded-full border border-omega-border bg-white px-3 py-1.5 text-[12px] text-omega-charcoal hover:border-omega-charcoal/30"
          >
            {p.label}
            <ArrowUpRight className="h-3 w-3 text-omega-grey" />
          </Link>
        ))}
      </div>
    </section>
  );
}
