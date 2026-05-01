import PageHero from "@/components/ui/PageHero";
import AccountPanel from "@/components/marketplace/AccountPanel";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Account — OMEGA Marketplace",
  description:
    "Sign in to view your OMEGA service requests, inspections, AI assessments, and saved properties.",
  path: "/marketplace/account"
});

export default function AccountPage() {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE · ACCOUNT"
        title="Sign in to OMEGA."
        description="Log in to view your service requests, inspections, AI assessments, and saved properties."
        small
      />
      <AccountPanel />
    </>
  );
}
