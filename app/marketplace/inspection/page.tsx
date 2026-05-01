import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import BookingFlow from "@/components/marketplace/BookingFlow";
import { COMPANY, PRICE_DISCLAIMER } from "@/lib/constants";
import { Check } from "lucide-react";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Book Inspection — AED ${COMPANY.inspectionFee}`,
  description: "Book a paid OMEGA inspection. A technician attends, assesses the situation, and provides an indicative scope and quotation.",
  path: "/marketplace/inspection"
});

const INCLUDES = [
  "On-site visit at agreed time",
  "Assessment by qualified technician",
  "Indicative scope and price direction",
  "Brief written summary",
  "Engineer review available where required"
];

export default function InspectionPage({
  searchParams
}: {
  searchParams: { service?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="MARKETPLACE · INSPECTION"
        title={
          <>
            Book Inspection —{" "}
            <span className="text-omega-orange">AED {COMPANY.inspectionFee}</span>
          </>
        }
        description="If you don't know the scope yet, an OMEGA inspection is the best first step. A technician attends, assesses the situation, and provides an indicative scope and price."
        small
      />
      <Section bare className="py-14 lg:py-20">
        <div className="container-edge">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BookingFlow mode="inspection" preselectedService={searchParams.service} />
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-omega-border bg-omega-cream p-6">
                <div className="eyebrow-orange">What's included</div>
                <ul className="mt-4 space-y-2.5">
                  {INCLUDES.map((i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-[14px] text-omega-charcoal"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-omega-orange" />
                      {i}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-xl border border-omega-border bg-white p-4 text-[12.5px] text-omega-grey">
                  {PRICE_DISCLAIMER}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
