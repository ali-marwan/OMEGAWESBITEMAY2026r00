import Link from "next/link";
import { ArrowLeft, ShoppingBag } from "lucide-react";

export default function NotFound() {
  return (
    <section className="container-edge flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <div className="eyebrow-orange">404</div>
      <h1 className="display-lg mt-4 max-w-xl text-balance text-omega-charcoal">
        We couldn't find that page.
      </h1>
      <p className="mt-4 max-w-md text-[15px] text-omega-grey">
        It may have moved, or you may have followed an outdated link. Try the OMEGA
        Marketplace or head back home.
      </p>
      <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
        <Link href="/" className="btn-secondary">
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
        <Link href="/marketplace" className="btn-primary">
          <ShoppingBag className="h-4 w-4" /> Open Marketplace
        </Link>
      </div>
    </section>
  );
}
