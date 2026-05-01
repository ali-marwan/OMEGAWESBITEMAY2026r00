import type { MetadataRoute } from "next";
import { SERVICES } from "@/data/services";
import { PORTFOLIO } from "@/data/portfolio";
import { BLOG_POSTS } from "@/data/blogPosts";
import { MARKETPLACE_SERVICES } from "@/data/marketplaceServices";

const SITE = "https://omegacfm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/about",
    "/contact",
    "/services",
    "/portfolio",
    "/blog",
    "/omega-ai-property-intelligence",
    "/marketplace",
    "/marketplace/categories",
    "/marketplace/booking",
    "/marketplace/inspection",
    "/marketplace/quote-request",
    "/marketplace/checkout",
    "/marketplace/account",
    "/marketplace/orders",
    "/privacy",
    "/terms"
  ].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : path === "/marketplace" ? 0.95 : 0.7
  }));

  const services: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const marketplace: MetadataRoute.Sitemap = MARKETPLACE_SERVICES.map((s) => ({
    url: `${SITE}/marketplace/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8
  }));

  const portfolio: MetadataRoute.Sitemap = PORTFOLIO.map((p) => ({
    url: `${SITE}/portfolio/${p.slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.6
  }));

  const blog: MetadataRoute.Sitemap = BLOG_POSTS.map((b) => ({
    url: `${SITE}/blog/${b.slug}`,
    lastModified: b.publishedAt ? new Date(b.publishedAt) : now,
    changeFrequency: "monthly" as const,
    priority: 0.7
  }));

  return [...staticRoutes, ...services, ...marketplace, ...portfolio, ...blog];
}
