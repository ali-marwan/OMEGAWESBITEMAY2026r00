import CheckoutForm from "@/components/marketplace/CheckoutForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Checkout — OMEGA Marketplace",
  description: "Confirm your OMEGA service or inspection request. Stripe payment integration coming soon.",
  path: "/marketplace/checkout"
});

const VALID_TYPES = ["inspection", "service", "quote", "custom"] as const;
type CheckoutType = (typeof VALID_TYPES)[number];

export default function CheckoutPage({
  searchParams
}: {
  searchParams: { type?: string; service?: string };
}) {
  const type: CheckoutType = VALID_TYPES.includes(searchParams.type as CheckoutType)
    ? (searchParams.type as CheckoutType)
    : "inspection";

  return <CheckoutForm type={type} serviceSlug={searchParams.service} />;
}
