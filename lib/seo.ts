import type { Metadata } from "next";

const SITE_NAME = "OMEGA CFM";
const SITE_URL = "https://omegacfm.com";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
}): Metadata {
  const url = `${SITE_URL}${opts.path ?? ""}`;
  const og = opts.ogImage ? [{ url: opts.ogImage, width: 1200, height: 630 }] : undefined;
  return {
    title: opts.title,
    description: opts.description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE_NAME,
      type: opts.type ?? "website",
      images: og
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: opts.ogImage ? [opts.ogImage] : undefined
    }
  };
}
