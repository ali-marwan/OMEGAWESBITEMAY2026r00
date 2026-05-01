import MarketplaceHome from "@/components/marketplace/MarketplaceHome";
import {
  MARKETPLACE_CATEGORIES,
  type MarketplaceCategory
} from "@/data/marketplaceServices";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "OMEGA Marketplace — Property Services in Dubai & UAE",
  description:
    "Book property services with OMEGA. Browse AC, plumbing, electrical, leaks, renovation, fit-out, and AMC services. Inspection AED 100 or request a quote.",
  path: "/marketplace"
});

const VALID_CATS = MARKETPLACE_CATEGORIES.map((c) => c.name) as MarketplaceCategory[];

function parseCat(value?: string): MarketplaceCategory | null {
  if (!value) return null;
  const decoded = decodeURIComponent(value);
  return VALID_CATS.includes(decoded as MarketplaceCategory)
    ? (decoded as MarketplaceCategory)
    : null;
}

export default function MarketplacePage({
  searchParams
}: {
  searchParams: { cat?: string; q?: string };
}) {
  return (
    <MarketplaceHome
      initialCat={parseCat(searchParams.cat)}
      initialQuery={searchParams.q ?? ""}
    />
  );
}
