import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import BlogList, { parseInitialBlogCat } from "@/components/blog/BlogList";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "OMEGA Insights — UAE Property Guidance",
  description:
    "Practical UAE property guidance — what to check, when to escalate, and how to scope the work properly. Built on engineering, written for owners.",
  path: "/blog"
});

export default function BlogPage({
  searchParams
}: {
  searchParams: { cat?: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="OMEGA INSIGHTS"
        title={
          <>
            Built on engineering.{" "}
            <span className="italic text-omega-grey">Written for owners.</span>
          </>
        }
        description="Practical UAE property guidance — what to check, when to escalate, and how to scope the work properly."
      />

      <Section bare className="py-14 lg:py-20">
        <BlogList initialCat={parseInitialBlogCat(searchParams.cat)} />
      </Section>
    </>
  );
}
