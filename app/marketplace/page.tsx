import MarketplaceHome, { parseInitialCategory } from "@/components/marketplace/MarketplaceHome";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "OMEGA Marketplace — Property Services in Dubai & UAE",
  description:
    "Book property services with OMEGA. Browse AC, plumbing, electrical, leaks, renovation, fit-out, and AMC services. Inspection AED 100 or request a quote.",
  path: "/marketplace"
});

export default function MarketplacePage({
  searchParams
}: {
  searchParams: { cat?: string; q?: string };
}) {
  return (
    <MarketplaceHome
      initialCat={parseInitialCategory(searchParams.cat)}
      initialQuery={searchParams.q ?? ""}
    />
  );
}
