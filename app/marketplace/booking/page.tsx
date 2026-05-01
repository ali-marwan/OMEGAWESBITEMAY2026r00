import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import BookingFlow from "@/components/marketplace/BookingFlow";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Service — OMEGA Marketplace",
  description: "Book a property service through OMEGA Marketplace.",
  path: "/marketplace/booking"
});

export default function BookingPage({
  searchParams
}: {
  searchParams: { service?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE · BOOK SERVICE"
        title="Book a service."
        description="Tell OMEGA what you need. We'll confirm the visit and indicative price before scheduling."
        small
      />
      <Section className="bare:0 py-14 lg:py-20">
        <div className="container-edge max-w-3xl">
          <BookingFlow mode="booking" preselectedService={searchParams.service} />
        </div>
      </Section>
    </>
  );
}
