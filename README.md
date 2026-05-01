# OMEGA — Property Care, Renovation, Engineering & Marketplace

Premium UAE-focused property website for **OMEGA CFM Building Contracting LLC**.

> One System for Property Care. Elevated by Engineering.

This repo contains the public OMEGA website, the OMEGA Marketplace storefront, the floating OMEGA AI Instant Assessment assistant, and the OMEGA AI Property Intelligence Platform (B2B) landing page.

## Three digital concepts (kept distinct)

| Product | Audience | Purpose |
| --- | --- | --- |
| **OMEGA Marketplace** | Individuals | Ecommerce-style booking of property services |
| **OMEGA AI Instant Assessment** | Individuals | Free floating assistant that routes users to the right service / inspection / quote |
| **OMEGA AI Property Intelligence Platform** | Corporates / property managers | Separate B2B system: dashboards, reports, BOQ, compliance flags, execution workflow |

These share the OMEGA brand and may share a backend AI engine, but they are not merged in the UI.

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with OMEGA design tokens (orange `#F36B21`, cream `#FBFAF7`, charcoal `#222`)
- **Inter** + **Fraunces** via `next/font/google`
- **lucide-react** icons
- Static data files in `/data` — backend-ready, swap-in later

## Routes

Public site
- `/`, `/about`, `/contact`
- `/services`, `/services/[slug]` (4 pillars)
- `/portfolio`, `/portfolio/[slug]` (8 projects)
- `/blog`, `/blog/[slug]` (10 SEO-ready posts)
- `/omega-ai-property-intelligence` (B2B platform)

Marketplace
- `/marketplace`, `/marketplace/categories`
- `/marketplace/services/[slug]` (21 services)
- `/marketplace/booking`, `/marketplace/inspection`, `/marketplace/quote-request`
- `/marketplace/checkout`, `/marketplace/account`, `/marketplace/orders`

Legal
- `/privacy`, `/terms`, custom 404

## Folder structure

```
app/                  # Next.js App Router pages
components/
  layout/             # Header, Footer, MobileNav, StickyMobileBar, Logo
  ai/                 # FloatingOmegaAI, AiPanel, AiAssessmentForm, AiPreliminaryReportView
  home/               # Home page sections
  marketplace/        # BookingFlow, CategoryIcon
  contact/            # ContactForm
  ui/                 # Section, PageHero, Marquee, AskOmegaAiButton
data/
  services.ts         # 4 service pillars
  marketplaceServices.ts  # 21 services across 10 categories
  blogPosts.ts        # 10 SEO-ready posts
  portfolio.ts        # 8 projects mapping to /public/Website-Projectmedia/
  aiMockData.ts       # Mock AI report generator (renovation + repair flows)
lib/
  constants.ts        # Company info, nav, footer, disclaimers
  utils.ts            # cn, slugify, formatPrice, buildWhatsAppLink
  seo.ts              # Metadata helper
public/
  omega-logo.svg
  models/omega-logo-final.glb
  Website-Projectmedia/  # Project gallery folders
```

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
npm run lint
```

## Brand & content rules

- Marketplace is the primary commercial CTA — highlighted in nav, hero, service pages.
- Login is a compact icon, not a main nav label.
- Floating OMEGA AI is available across the site (bottom-right). It opens via the chip, the mobile sticky bar, or the `omega:open-ai` window event.
- Inspection fee: **AED 100** (constant in `lib/constants.ts`).
- Service pricing is indicative only — every page includes the `PRICE_DISCLAIMER`.
- AI outputs include the `AI_DISCLAIMER` and escalate high-risk issues (structural cracks, electrical burning smell, gas, etc.).
- Authority work uses careful language ("may require", "subject to authority/building/community requirements"). No false approval guarantees.
- B2B platform is a separate page. It is mentioned briefly on home, never merged with Marketplace.

## Contact details (used across the site)

- **Phone / WhatsApp:** +971 56 660 5596
- **Email:** support@omegacfm.com
- **Office:** Office 501, Alpha Green Tower, JVC, Dubai
- **Instagram:** @omega_property_hub
- **Maps:** https://maps.app.goo.gl/qxRk516yBA56MwSL6

## What landed in the May refinement pass

- Fixed `bare:0` typo across 16 pages → `<Section bare>` prop with JSDoc safeguard
- Added `.prose-omega` article typography for blog detail
- Hid the floating AI chip on `< sm` (sticky bar already exposes the same entry)
- Bumped Header nav-collapse from `lg` → `xl` so Marketplace CTA isn't crowded on 1280–1366 laptops
- Hero brand mark: subtle SVG watermark (`/public/omega-mark.svg`) — replaced the GLB experiment for visual cleanliness and bundle size
- Migrated portfolio/blog cover images from `<img>` → `next/image`
- Added `app/sitemap.ts`, `app/robots.ts`, `app/opengraph-image.tsx` (build-time PNG via `next/og`)
- Extended `buildMetadata()` with `ogImage` and `type` (article/website)
- Added `Organization` + `LocalBusiness` JSON-LD on home, `Article` JSON-LD on blog detail
- Marketplace, portfolio, and blog filters now URL-driven (`?cat=`, `?q=`) — back-button safe, shareable
- Service detail "Ask OMEGA AI" now deep-links to the right flow + topic via marketplace-slug → AI-topic mapping
- BookingFlow: real `<input type="file">` (Photo/Video/Voice), `sessionStorage` persistence keyed on mode + service
- AI Assistant: real file input, `sessionStorage` persistence, severity-based banner inside the report, sheet height switched to `100dvh` for iOS keyboard handling, `omega:open-ai` event payload widened to `{ flow?, topic? }`
- Checkout: context-aware total via `?type=` (inspection / service / quote / custom) — no more hardcoded AED 100 outside inspection
- B2B page: `Platform Login` now routes to `/contact?team=enterprise&intent=login`
- 404 page now lists popular routes

## TODO — backend integration milestones

- [ ] Real AI API (Anthropic / OpenAI) wired to `AiAssessmentForm` and report generator
- [ ] Supabase auth for `/marketplace/account` (replace placeholder login)
- [ ] Supabase storage for AI media uploads (photo / video / voice) — file selection UI is already wired
- [ ] Stripe payments for `/marketplace/checkout` and inspection fee
- [ ] Lead database / CRM for booking, inspection, quote forms
- [ ] WhatsApp Cloud API + email notifications for new requests
- [ ] OMEGA AI Property Intelligence Platform — dashboards, BOQ generator, approval workflow
- [ ] Arabic locale (`/ar`) once English content is finalized

---

© OMEGA CFM Building Contracting LLC.
