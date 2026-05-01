"use client";

import Link from "next/link";
import { ShoppingBag, MessageCircle, Sparkles } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export default function StickyMobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-omega-border bg-omega-cream/95 backdrop-blur lg:hidden">
      <div className="grid grid-cols-3">
        <Link
          href="/marketplace"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium text-omega-charcoal"
        >
          <ShoppingBag className="h-4 w-4 text-omega-orange" />
          Marketplace
        </Link>
        <button
          type="button"
          onClick={() => window.dispatchEvent(new CustomEvent("omega:open-ai"))}
          className="flex flex-col items-center justify-center gap-0.5 border-x border-omega-border py-2.5 text-[11px] font-medium text-omega-charcoal"
        >
          <Sparkles className="h-4 w-4 text-omega-orange" />
          Ask OMEGA AI
        </button>
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-0.5 py-2.5 text-[11px] font-medium text-omega-charcoal"
        >
          <MessageCircle className="h-4 w-4 text-omega-orange" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
