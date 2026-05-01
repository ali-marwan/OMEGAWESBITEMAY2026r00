import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { COMPANY } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How OMEGA collects, uses, and protects your information.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="LEGAL" title="Privacy Policy" small />
      <Section bare className="py-14 lg:py-20">
        <div className="container-edge max-w-3xl text-[15px] leading-relaxed text-omega-grey">
          <p>
            This Privacy Policy describes how {COMPANY.legalName} ("OMEGA", "we", "us")
            collects, uses, and protects information that you provide when interacting
            with our website, marketplace, AI assistant, or services.
          </p>

          <h2 className="mt-10 font-display text-2xl text-omega-charcoal">
            Information we collect
          </h2>
          <p className="mt-3">
            When you use OMEGA Marketplace, the AI assistant, the contact form, or
            request inspection or quotation, we may collect contact details, property
            information, and any media or descriptions you choose to share.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">How we use it</h2>
          <p className="mt-3">
            We use the information to respond to requests, schedule visits, provide
            service, generate reports, and improve our service quality. We do not sell
            your data to third parties.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">AI processing</h2>
          <p className="mt-3">
            When you interact with the OMEGA AI Instant Assessment, your inputs may be
            processed to generate preliminary guidance. AI outputs are preliminary and
            require OMEGA confirmation before execution.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">Data retention</h2>
          <p className="mt-3">
            We retain information only as long as needed to provide the service or as
            required by applicable UAE law.
          </p>

          <h2 className="mt-8 font-display text-2xl text-omega-charcoal">Contact</h2>
          <p className="mt-3">
            For privacy questions, contact{" "}
            <a
              href={`mailto:${COMPANY.email}`}
              className="font-medium text-omega-orange link-underline"
            >
              {COMPANY.email}
            </a>
            .
          </p>

          <p className="mt-10 text-[12px] text-omega-grey">
            This policy is provided as a placeholder and will be updated. Please review
            it periodically.
          </p>
        </div>
      </Section>
    </>
  );
}
