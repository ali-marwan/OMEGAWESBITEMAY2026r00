import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import BlogList from "@/components/blog/BlogList";
import { BLOG_CATEGORIES } from "@/data/blogPosts";
import { buildMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export const metadata = buildMetadata({
  title: "OMEGA Insights — UAE Property Guidance",
  description:
    "Practical UAE property guidance — what to check, when to escalate, and how to scope the work properly. Built on engineering, written for owners.",
  path: "/blog"
});

type Cat = (typeof BLOG_CATEGORIES)[number];

function parseCat(value?: string): Cat {
  if (!value) return "All";
  const decoded = decodeURIComponent(value);
  return (BLOG_CATEGORIES as readonly string[]).includes(decoded)
    ? (decoded as Cat)
    : "All";
}

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
        <BlogList initialCat={parseCat(searchParams.cat)} />
      </Section>
    </>
  );
}
