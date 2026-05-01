"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/data/blogPosts";

type Cat = (typeof BLOG_CATEGORIES)[number];

export default function BlogList({ initialCat }: { initialCat: Cat }) {
  const router = useRouter();
  const [active, setActive] = useState<Cat>(initialCat);

  useEffect(() => {
    const next = active === "All" ? "/blog" : `/blog?cat=${encodeURIComponent(active)}`;
    router.replace(next, { scroll: false });
  }, [active, router]);

  const posts = useMemo(() => {
    if (active === "All") return BLOG_POSTS;
    return BLOG_POSTS.filter((p) => p.category === active);
  }, [active]);

  return (
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
  );
}

export function parseInitialBlogCat(value?: string): Cat {
  if (!value) return "All";
  const decoded = decodeURIComponent(value);
  return (BLOG_CATEGORIES as readonly string[]).includes(decoded)
    ? (decoded as Cat)
    : "All";
}
