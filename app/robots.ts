import type { MetadataRoute } from "next";

const SITE = "https://omegacfm.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/marketplace/checkout", "/marketplace/account", "/marketplace/orders"]
      }
    ],
    sitemap: `${SITE}/sitemap.xml`
  };
}
