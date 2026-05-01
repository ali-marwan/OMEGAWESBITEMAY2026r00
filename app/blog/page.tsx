"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogPosts";

export default function BlogPage() {
  const [active, setActive] = useState<(typeof BLOG_CATEGORIES)[number]>("All");

  const posts = useMemo(() => {
    if (active === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === active);
  }, [active]);

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

      <Section className="bare:0 py-14 lg:py-20">
        <div className="container-edge">
          <div className="flex flex-wrap items-center gap-2">
            {BLOG_CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full border px-4 py-2 text-[12.5px] font-medium transition ${
                  active === c
                    ? "border-omega-charcoal bg-omega-charcoal text-white"
                    : "border-omega-border bg-white text-omega-charcoal hover:border-omega-charcoal/30"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((p) => (
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
    </>
  );
}
