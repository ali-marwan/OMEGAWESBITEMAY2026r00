import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingOmegaAI from "@/components/ai/FloatingOmegaAI";
import StickyMobileBar from "@/components/layout/StickyMobileBar";
import { COMPANY } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500"]
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.shortName} CFM | Property Care, Renovation, Engineering & Marketplace Services in Dubai`,
    template: `%s | ${COMPANY.shortName} CFM`
  },
  description: `${COMPANY.legalName} provides property care, home services, renovation, engineering support, and AI-guided service assessment across the UAE. Explore the OMEGA Marketplace or speak to our team.`,
  metadataBase: new URL("https://omegacfm.com"),
  openGraph: {
    title: `${COMPANY.shortName} | Property Care · Renovation · Engineering · UAE`,
    description: COMPANY.description,
    type: "website",
    siteName: COMPANY.shortName
  },
  icons: {
    icon: "/omega-logo.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-omega-cream font-sans text-omega-charcoal antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-omega-black focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="pt-[72px]">
          {children}
        </main>
        <Footer />
        <FloatingOmegaAI />
        <StickyMobileBar />
      </body>
    </html>
  );
}
