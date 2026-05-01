import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing the use of OMEGA's website, marketplace, and services.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Terms of Service" small />
      <Section bare className="py-14 lg:py-20">
        <div className="container-edge max-w-3xl text-[15px] leading-relaxed text-omega-grey">
          <p>
            These Terms govern your use of the {COMPANY.legalName} website, marketplace,
            AI assistant, and related services.
          </p>

          <h2 className="mt-10 font-display text-2xl text-omega-charcoal">
            Service descriptions and pricing
          </h2>
          <p className="mt-3">
            All service descriptions, indicative pricing, and timelines are provided as
            general direction. Final price, scope, and timeline are subject to site
            condition, final scope, inspection, and OMEGA confirmation.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">
            Inspection fee
          </h2>
          <p className="mt-3">
            The OMEGA inspection fee is AED {COMPANY.inspectionFee} unless otherwise
            agreed in writing. The fee covers an on-site visit and brief written summary.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">
            AI assistance disclaimer
          </h2>
          <p className="mt-3">
            The OMEGA AI Instant Assessment provides preliminary guidance only. Final
            diagnosis, cost, compliance requirements, timeline, and execution method are
            confirmed by OMEGA after site inspection or engineer review.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">
            Authority and building approvals
          </h2>
          <p className="mt-3">
            OMEGA can support authority-related preparation and coordination where
            applicable. Final authority and building approvals remain subject to the
            relevant authority, building, and community requirements.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">Liability</h2>
          <p className="mt-3">
            Liability is limited to the value of services contracted unless required
            otherwise by applicable UAE law. OMEGA is not responsible for losses arising
            from work executed by third parties not under OMEGA supervision.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">Contact</h2>
          <p className="mt-3">
            Questions:{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-medium text-omega-orange link-underline"
            >
              {COMPANY.email}
            </a>
            .
          </p>

          <p className="mt-10 text-[12px] text-omega-grey">
            These terms are provided as a placeholder and will be updated.
          </p>
        </div>
      </Section>
    </>
  );
}
