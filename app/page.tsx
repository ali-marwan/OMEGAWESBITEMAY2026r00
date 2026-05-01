import Hero from "@/components/home/Hero";
import { Marquee } from "@/components/ui/Marquee";
import OneSystem from "@/components/home/OneSystem";
import ServicePillars from "@/components/home/ServicePillars";
import AiPrompt from "@/components/home/AiPrompt";
import MarketplacePreview from "@/components/home/MarketplacePreview";
import PortfolioPreview from "@/components/home/PortfolioPreview";
import B2BMention from "@/components/home/B2BMention";
import BlogPreview from "@/components/home/BlogPreview";
import ContactCta from "@/components/home/ContactCta";
import {
  OrganizationJsonLd,
  LocalBusinessJsonLd
} from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <LocalBusinessJsonLd />
      <Hero />
      <Marquee
        items={[
          "Property Care",
          "Renovation",
          "Engineering",
          "Home Services",
          "AMC",
          "Inspection",
          "AI Assessment",
          "Marketplace",
          "Fit-Out",
          "Compliance Awareness"
        ]}
      />
      <OneSystem />
      <ServicePillars />
      <AiPrompt />
      <MarketplacePreview />
      <PortfolioPreview />
      <B2BMention />
      <BlogPreview />
      <ContactCta />
    </>
  );
}
