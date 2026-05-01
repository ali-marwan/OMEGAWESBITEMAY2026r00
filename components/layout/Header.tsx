"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User, Menu, ShoppingBag } from "lucide-react";
import { NAV_MAIN } from "@/lib/constants";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200 ${
          scrolled
            ? "border-omega-border bg-omega-cream/85 backdrop-blur"
            : "border-transparent bg-omega-cream"
        }`}
      >
        <div className="container-edge flex h-[72px] items-center justify-between">
          <Logo />

          <nav className="hidden lg:flex items-center gap-7">
            {NAV_MAIN.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[13.5px] tracking-tight transition-colors ${
                    active
                      ? "text-omega-charcoal"
                      : "text-omega-grey hover:text-omega-charcoal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/marketplace/account"
              aria-label="Account / Login"
              className="hidden sm:inline-flex h-10 w-10 items-center justify-center rounded-full border border-omega-border bg-white text-omega-charcoal hover:border-omega-charcoal/30"
            >
              <User className="h-4 w-4" />
            </Link>

            <Link
              href="/marketplace"
              className="btn-primary btn-sm hidden sm:inline-flex"
            >
              <ShoppingBag className="h-4 w-4" />
              Marketplace
            </Link>

            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-omega-border bg-white text-omega-charcoal lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav open={open} onClose={() => setOpen(false)} />
    </>
  );
}
