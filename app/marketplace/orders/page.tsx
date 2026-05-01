import Link from "next/link";
import { ShoppingBag, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "My Requests — OMEGA Marketplace",
  description: "View and track your OMEGA Marketplace requests, inspections, and quotations.",
  path: "/marketplace/orders"
});

const SAMPLE_ORDERS = [
  {
    id: "OM-2104-A1",
    title: "AC Not Cooling — Diagnosis & Repair",
    status: "Scheduled",
    date: "Tomorrow · 10:00–12:00",
    tone: "scheduled" as const,
    type: "Service"
  },
  {
    id: "OM-2103-B7",
    title: "Inspection — Bathroom Leak",
    status: "Report ready",
    date: "Last visit · 2 days ago",
    tone: "ready" as const,
    type: "Inspection"
  },
  {
    id: "OM-2101-C2",
    title: "Renovation Quotation — Kitchen",
    status: "Awaiting your approval",
    date: "Submitted · 5 days ago",
    tone: "pending" as const,
    type: "Quotation"
  }
];

export default function OrdersPage() {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE · MY REQUESTS"
        title="Your OMEGA requests."
        description="Track service bookings, inspections, and quotations. Sample data shown — your real requests will appear here once you sign in."
        small
      />
      <Section bare className="py-14 lg:py-20">
        <div className="container-edge">
          <div className="rounded-2xl border border-omega-orange/30 bg-omega-orange-soft/40 p-5 text-[13.5px] text-omega-charcoal">
            <span className="font-medium">Preview mode.</span>{" "}
            <span className="text-omega-grey">
              Authentication is being prepared. Sample requests below illustrate the
              experience.
            </span>
            <Link
              href="/marketplace/account"
              className="ml-3 font-medium text-omega-orange link-underline"
            >
              Sign in →
            </Link>
          </div>

          <div className="mt-8 grid gap-3">
            {SAMPLE_ORDERS.map((o) => (
              <div
                key={o.id}
                className="rounded-2xl border border-omega-border bg-white p-5 lg:p-6"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="pill">{o.type}</span>
                    <span className="text-[11px] font-mono text-omega-grey">
                      {o.id}
                    </span>
                  </div>
                  <StatusBadge tone={o.tone} label={o.status} />
                </div>
                <h3 className="mt-3 font-display text-2xl text-omega-charcoal">
                  {o.title}
                </h3>
                <div className="mt-1 flex items-center gap-2 text-[12.5px] text-omega-grey">
                  <Clock className="h-3.5 w-3.5 text-omega-orange" />
                  {o.date}
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-2">
                  <Link
                    href="/marketplace"
                    className="btn-secondary btn-sm"
                  >
                    View details
                  </Link>
                  <Link href="/contact" className="btn-ghost btn-sm">
                    Message OMEGA
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2">
            <Link
              href="/marketplace"
              className="group rounded-2xl border border-omega-border bg-white p-6 hover:border-omega-charcoal/20"
            >
              <ShoppingBag className="h-5 w-5 text-omega-orange" />
              <h3 className="mt-4 font-display text-2xl text-omega-charcoal">
                Open Marketplace
              </h3>
              <p className="mt-1 text-[13px] text-omega-grey">
                Book another service or browse categories.
              </p>
            </Link>
            <Link
              href="/marketplace/quote-request"
              className="group rounded-2xl border border-omega-border bg-omega-cream p-6 hover:border-omega-charcoal/20"
            >
              <Sparkles className="h-5 w-5 text-omega-orange" />
              <h3 className="mt-4 font-display text-2xl text-omega-charcoal">
                Request another quotation
              </h3>
              <p className="mt-1 text-[13px] text-omega-grey">
                Renovation, AMC, fit-out, engineering — define the scope.
              </p>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function StatusBadge({
  tone,
  label
}: {
  tone: "scheduled" | "ready" | "pending";
  label: string;
}) {
  const map = {
    scheduled: "bg-blue-50 text-blue-700",
    ready: "bg-emerald-50 text-emerald-700",
    pending: "bg-amber-50 text-amber-700"
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium ${map[tone]}`}
    >
      <CheckCircle2 className="h-3 w-3" />
      {label}
    </span>
  );
}
