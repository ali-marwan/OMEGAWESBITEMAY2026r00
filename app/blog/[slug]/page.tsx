import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ShoppingBag } from "lucide-react";
import { Section } from "@/components/ui/Section";
import AskOmegaAiButton from "@/components/ui/AskOmegaAiButton";
import { ArticleJsonLd } from "@/components/seo/JsonLd";
import { BLOG_POSTS, getBlogPostBySlug } from "@/data/blogPosts";
import { AI_DISCLAIMER } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getBlogPostBySlug(params.slug);
  if (!p) return {};
  return buildMetadata({
    title: p.metaTitle,
    description: p.metaDescription,
    path: `/blog/${p.slug}`,
    type: "article"
  });
}

export default function BlogDetailPage({
  params
}: {
  params: { slug: string };
}) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category
  ).slice(0, 3);

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.metaDescription}
        slug={post.slug}
        publishedAt={post.publishedAt}
        category={post.category}
      />
      <section className="border-b border-omega-border bg-omega-cream">
        <div className="container-edge pt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-[12px] font-medium uppercase tracking-eyebrow text-omega-grey hover:text-omega-orange"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> All articles
          </Link>
        </div>
        <div className="container-edge pt-6 pb-14 lg:pb-20">
          <div className="flex items-center gap-2">
            <span className="pill">{post.category}</span>
            <span className="text-[11px] text-omega-grey">{post.readingTime}</span>
          </div>
          <h1 className="display-lg mt-4 max-w-4xl text-balance text-omega-charcoal">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[16.5px] leading-relaxed text-omega-grey lg:text-[18px]">
            {post.excerpt}
          </p>
        </div>
      </section>

      <Section bare className="py-14 lg:py-20">
        <div className="container-edge">
          <div className="grid gap-12 lg:grid-cols-12">
            <article className="prose-omega lg:col-span-8">
              {post.content.map((s, i) => (
                <section key={i} className="mb-10">
                  <h2 className="font-display text-[28px] leading-tight text-omega-charcoal">
                    {s.heading}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-omega-grey">
                    {s.body}
                  </p>
                </section>
              ))}

              <div className="mt-10 rounded-2xl border border-omega-border bg-omega-cream p-5 text-[12.5px] leading-relaxed text-omega-grey">
                <span className="eyebrow-orange mr-2">Disclaimer</span>
                {AI_DISCLAIMER}
              </div>
            </article>

            <aside className="lg:col-span-4">
              <div className="sticky top-[88px] space-y-3">
                <div className="rounded-2xl border border-omega-border bg-white p-5">
                  <div className="eyebrow-orange">NEXT STEP</div>
                  <h3 className="mt-2 font-display text-2xl text-omega-charcoal">
                    Acting on this article?
                  </h3>
                  <p className="mt-2 text-[13.5px] text-omega-grey">
                    Open the Marketplace, ask OMEGA AI, or book an inspection.
                  </p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link href="/marketplace" className="btn-primary btn-sm">
                      <ShoppingBag className="h-4 w-4" /> Open Marketplace
                    </Link>
                    <AskOmegaAiButton variant="secondary" className="btn-sm" />
                    <Link
                      href="/marketplace/inspection"
                      className="btn-ghost btn-sm"
                    >
                      Book Inspection — AED 100
                    </Link>
                  </div>
                </div>

                {related.length > 0 && (
                  <div className="rounded-2xl border border-omega-border bg-white p-5">
                    <div className="eyebrow">RELATED</div>
                    <ul className="mt-3 space-y-3">
                      {related.map((r) => (
                        <li key={r.slug}>
                          <Link
                            href={`/blog/${r.slug}`}
                            className="group block"
                          >
                            <div className="text-[13.5px] font-medium text-omega-charcoal group-hover:text-omega-orange">
                              {r.title}
                            </div>
                            <div className="mt-0.5 text-[11.5px] text-omega-grey">
                              {r.readingTime}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </Section>
    </>
  );
}
