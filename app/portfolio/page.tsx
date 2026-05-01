import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import PortfolioGrid, {
  parseInitialPortfolioCat
} from "@/components/portfolio/PortfolioGrid";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "OMEGA Portfolio — UAE Property Projects",
  description:
    "Selected OMEGA projects across hospitality, retail, residential, and engineering coordination — executed under OMEGA supervision in the UAE.",
  path: "/portfolio"
});

export default function PortfolioPage({
  searchParams
}: {
  searchParams: { cat?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="OMEGA PORTFOLIO"
        title={
          <>
            Built. Documented.{" "}
            <span className="italic text-omega-grey">Delivered.</span>
          </>
        }
        description="Selected projects across hospitality, retail, residential, and engineering coordination — executed under OMEGA supervision."
      />

      <Section bare className="py-14 lg:py-20">
        <PortfolioGrid initialCat={parseInitialPortfolioCat(searchParams.cat)} />
      </Section>
    </>
  );
}
