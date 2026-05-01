import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { BLOG_POSTS } from "@/data/blogPosts";

export default function BlogPreview() {
  const featured = BLOG_POSTS.slice(0, 3);

  return (
    <Section>
      <div className="container-edge">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="OMEGA INSIGHTS"
            title={
              <>
                Built on engineering.
                <br />
                <span className="italic text-omega-grey">Written for owners.</span>
              </>
            }
          />
          <Link href="/blog" className="btn-secondary btn-sm">
            All articles <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {featured.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group flex flex-col rounded-2xl border border-omega-border bg-white p-6 transition-all hover:border-omega-charcoal/20 hover:shadow-soft"
            >
              <div className="flex items-center gap-2">
                <span className="pill">{p.category}</span>
                <span className="text-[11px] text-omega-grey">{p.readingTime}</span>
              </div>
              <h3 className="mt-4 font-display text-[24px] leading-tight text-omega-charcoal">
                {p.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-relaxed text-omega-grey line-clamp-3">
                {p.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-1.5 pt-5 text-[12px] font-medium text-omega-charcoal group-hover:text-omega-orange">
                Read article <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
