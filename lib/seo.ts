import type { Metadata } from "next";

const SITE_NAME = "OMEGA CFM";
const SITE_URL = "https://omegacfm.com";

export function buildMetadata(opts: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${opts.path ?? ""}`;
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
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description
    }
  };
}
