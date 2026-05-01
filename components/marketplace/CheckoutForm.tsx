"use client";

import Link from "next/link";
import { useState } from "react";
import { CreditCard, Lock, Check, ArrowLeft } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { COMPANY, PRICE_DISCLAIMER } from "@/lib/constants";
import { getMarketplaceServiceBySlug } from "@/data/marketplaceServices";

type CheckoutType = "inspection" | "service" | "quote" | "custom";

export default function CheckoutForm({
  type,
  serviceSlug
}: {
  type: CheckoutType;
  serviceSlug?: string;
}) {
  const [paid, setPaid] = useState(false);

  const service = serviceSlug ? getMarketplaceServiceBySlug(serviceSlug) : undefined;

  const isInspection = type === "inspection";
  const isQuote = type === "quote";
  const total = isInspection ? COMPANY.inspectionFee : null;

  if (paid) {
    return (
      <Section bare className="py-20 lg:py-28">
        <div className="container-edge max-w-2xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-omega-orange text-white">
            <Check className="h-6 w-6" />
          </div>
          <h1 className="display-lg mt-5 text-balance text-omega-charcoal">
            {isQuote ? "Request received." : "Thank you. Order confirmed."}
          </h1>
          <p className="mt-4 text-[15px] text-omega-grey">
            This is a checkout preview. Stripe integration will replace this confirmation
            once enabled. OMEGA will contact you to {isQuote ? "share your quotation" : "schedule the visit"}.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            <Link href="/marketplace" className="btn-secondary btn-sm">
              Back to Marketplace
            </Link>
            <Link href="/marketplace/orders" className="btn-primary btn-sm">
              View my requests
            </Link>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section bare className="py-14 lg:py-20">
      <div className="container-edge">
        <Link
          href="/marketplace"
          className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey hover:text-omega-orange"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> Back to Marketplace
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-omega-border bg-white p-6 lg:p-8">
              <div className="flex items-center justify-between">
                <div className="eyebrow-orange">CHECKOUT · PREVIEW</div>
                <span className="pill bg-white">Stripe — coming soon</span>
              </div>
              <h1 className="display-md mt-3 text-balance text-omega-charcoal">
                {total ? "Confirm and pay." : "Confirm your details."}
              </h1>
              <p className="mt-3 max-w-md text-[14px] text-omega-grey">
                {total
                  ? "Stripe payment integration is being prepared. This is a preview."
                  : "OMEGA will share a payment link directly when confirming the work scope."}
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setPaid(true);
                }}
                className="mt-6 space-y-4"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="label-base">Full name</label>
                    <input required className="input-base" />
                  </div>
                  <div>
                    <label className="label-base">Email for receipt</label>
                    <input required type="email" className="input-base" />
                  </div>
                </div>

                {total ? (
                  <>
                    <div>
                      <label className="label-base">Card number</label>
                      <div className="relative">
                        <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-omega-grey" />
                        <input
                          required
                          placeholder="•••• •••• •••• ••••"
                          className="input-base pl-9"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <label className="label-base">Expiry</label>
                        <input required placeholder="MM / YY" className="input-base" />
                      </div>
                      <div>
                        <label className="label-base">CVV</label>
                        <input required placeholder="•••" className="input-base" />
                      </div>
                      <div>
                        <label className="label-base">Country</label>
                        <select className="input-base">
                          <option>UAE</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <button type="submit" className="btn-primary btn-lg w-full">
                      <Lock className="h-4 w-4" /> Pay AED {total}.00
                    </button>
                  </>
                ) : (
                  <button type="submit" className="btn-primary btn-lg w-full">
                    <Lock className="h-4 w-4" />
                    {isQuote ? "Submit quotation request" : "Confirm and continue"}
                  </button>
                )}

                <p className="text-center text-[11px] text-omega-grey">
                  Stripe integration coming soon. No real charges in this preview.
                </p>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-[88px] rounded-2xl border border-omega-border bg-omega-cream p-6">
              <h3 className="font-display text-2xl text-omega-charcoal">Order summary</h3>
              <ul className="mt-4 divide-y divide-omega-border text-[13.5px]">
                {isInspection && (
                  <li className="flex items-center justify-between py-3">
                    <span className="text-omega-charcoal">
                      OMEGA Inspection{service ? ` — ${service.title}` : ""}
                    </span>
                    <span className="font-medium">AED {COMPANY.inspectionFee}.00</span>
                  </li>
                )}
                {!isInspection && service && (
                  <li className="flex items-center justify-between py-3">
                    <span className="text-omega-charcoal">{service.title}</span>
                    <span className="font-medium">{service.startingPrice ?? "Quote"}</span>
                  </li>
                )}
                {!isInspection && !service && (
                  <li className="flex items-center justify-between py-3">
                    <span className="text-omega-charcoal">
                      {isQuote ? "Quotation request" : "Service request"}
                    </span>
                    <span className="font-medium">Quote on request</span>
                  </li>
                )}
                <li className="flex items-center justify-between py-3 text-omega-grey">
                  <span>VAT (placeholder)</span>
                  <span>—</span>
                </li>
                <li className="flex items-center justify-between py-3 text-[15px] font-medium text-omega-charcoal">
                  <span>Total</span>
                  <span>{total ? `AED ${total}.00` : "Confirmed after scoping"}</span>
                </li>
              </ul>
              <p className="mt-4 text-[11.5px] text-omega-grey">{PRICE_DISCLAIMER}</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
