import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import BookingFlow from "@/components/marketplace/BookingFlow";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request Quotation — OMEGA Marketplace",
  description: "Request a written quotation from OMEGA — renovation, AMC, fit-out, engineering, or any defined scope.",
  path: "/marketplace/quote-request"
});

export default function QuoteRequestPage({
  searchParams
}: {
  searchParams: { service?: string; type?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE · QUOTATION"
        title="Request a quotation."
        description="Tell OMEGA the scope. Our team will respond with a written quotation, recommended approach, and timeline direction."
        small
      />
      <Section className="bare:0 py-14 lg:py-20">
        <div className="container-edge max-w-3xl">
          <BookingFlow mode="quote" preselectedService={searchParams.service} />
        </div>
      </Section>
    </>
  );
}
