"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef } from "react";
import { X, ShoppingBag, User, MessageCircle } from "lucide-react";
import { NAV_MAIN, COMPANY } from "@/lib/constants";

export default function MobileNav({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const mountedRef = useRef(false);

  // Imperatively set the transform so the browser doesn't get confused
  // by simultaneous parent-state changes (opacity / pointer-events) and
  // leave the panel stuck at its previous matrix value. First render
  // snaps to the closed state without animating; subsequent state changes
  // re-enable the CSS transition declared inline below.
  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;
    const target = open ? "translate3d(0, 0, 0)" : "translate3d(100%, 0, 0)";
    if (!mountedRef.current) {
      mountedRef.current = true;
      el.style.transition = "none";
      el.style.transform = target;
      // Force layout, then enable transitions for subsequent state changes.
      void el.offsetHeight;
      el.style.transition = "transform 280ms cubic-bezier(0.32, 0.72, 0, 1)";
      return;
    }
    el.style.transform = target;
  }, [open]);

  // Lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape, focus close button on open
  useEffect(() => {
    if (!open) return;
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
      className={`fixed inset-0 z-[60] transition-opacity duration-200 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-omega-black/45 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        style={{ willChange: "transform", transform: "translate3d(100%, 0, 0)" }}
        className="absolute right-0 top-0 flex h-full w-[88vw] max-w-[400px] flex-col overflow-y-auto bg-omega-cream shadow-elevated"
      >
        <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-omega-border px-5">
          <span className="font-display text-lg text-omega-charcoal">Menu</span>
          <button
            ref={closeBtnRef}
            aria-label="Close menu"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-omega-border bg-white text-omega-charcoal transition hover:border-omega-charcoal/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-omega-orange"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 px-5 py-4">
          {NAV_MAIN.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block border-b border-omega-border py-3.5 font-display text-[22px] leading-tight tracking-tight text-omega-charcoal hover:text-omega-orange"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="shrink-0 border-t border-omega-border bg-omega-cream px-5 pb-[max(env(safe-area-inset-bottom),1rem)] pt-5">
          <Link
            href="/marketplace"
            onClick={onClose}
            className="btn-primary btn-lg w-full"
          >
            <ShoppingBag className="h-4 w-4" />
            Open Marketplace
          </Link>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <Link
              href="/marketplace/account"
              onClick={onClose}
              className="btn-secondary btn-sm justify-center"
            >
              <User className="h-4 w-4" /> Account
            </Link>
            <a
              href={COMPANY.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="btn-secondary btn-sm justify-center"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-5 text-[11.5px] leading-relaxed text-omega-grey">
            <div>{COMPANY.legalName}</div>
            <div>{COMPANY.office}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
