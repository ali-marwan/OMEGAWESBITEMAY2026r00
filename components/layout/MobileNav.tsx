"use client";

import Link from "next/link";
import { X, ShoppingBag, User, MessageCircle } from "lucide-react";
import { NAV_MAIN, COMPANY } from "@/lib/constants";

export default function MobileNav({
  open,
  onClose
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-[60] transition-opacity ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 bg-omega-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-full max-w-[420px] transform bg-omega-cream shadow-elevated transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-[72px] items-center justify-between border-b border-omega-border px-5">
          <span className="font-display text-lg">Menu</span>
          <button
            aria-label="Close"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-omega-border bg-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col px-5 py-6">
          {NAV_MAIN.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="border-b border-omega-border py-4 font-display text-2xl tracking-tight text-omega-charcoal"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="px-5 pb-8">
          <Link
            href="/marketplace"
            onClick={onClose}
            className="btn-primary btn-lg w-full"
          >
            <ShoppingBag className="h-4 w-4" />
            Open Marketplace
          </Link>
          <div className="mt-3 grid grid-cols-2 gap-3">
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
              className="btn-secondary btn-sm justify-center"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <div className="mt-6 text-[12px] text-omega-grey">
            <div>{COMPANY.legalName}</div>
            <div>{COMPANY.office}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
