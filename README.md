# Marwah Travels (Next.js) — Recent SEO Changes & Setup Guide

## What Changed (Client Summary)

- Global SEO
  - Added Google Search Console verification meta tag and HTML verification file.
  - Integrated Google Analytics (GA4) with Measurement ID `G-MJ6Y9357FT`.
  - Added comprehensive Open Graph and Twitter Card tags.
  - Implemented TravelAgency JSON‑LD schema site‑wide.
  - Implemented canonical tags globally and on key pages.
  - Created custom 404 page.
  - Added dynamic breadcrumbs.
  - Added frontend sitemap page at `/pages/sitemap` (XML sitemap already present in `public/sitemap.xml`).

- Per‑page Meta (as requested)
  - Home `/` — Title and Description updated.
  - Packages `/pages/packages` — Title and Description added.
  - Blogs `/pages/blogs` — Title and Description added.
  - Testimonials `/pages/testimonials` — Title and Description added.
  - About `/pages/about` — Title and Description added.

- Content/UX
  - Enforced single H1 per page; sections now use H2/H3.
  - Improved image `alt` text (packages, package detail, footer, nav/logo, awards).
  - Added Social Share component on blogs list and blog detail pages.
  - Added Article schema to blog detail.
  - Added social links in Navbar/Footer (placeholders — replace with official URLs).

## New/Confirmed Frontend Libraries

Install from the `Marwah-Travels` directory:
```bash
npm install next react react-dom @mui/material @emotion/react @emotion/styled @mui/icons-material react-awesome-reveal react-fast-marquee react-player react-countup react-circular-progressbar
npm install --save-dev typescript @types/react @types/react-dom
```
(Already listed in package.json; the command ensures a clean local setup.)

## How to Run (Frontend)

```bash
cd Marwah-Travels
npm install
npm run dev
# App runs at http://localhost:3000
```

## Google Integrations (No action needed if domain is live)

- Search Console: Meta tag is in `app/layout.tsx`; HTML verification file at `public/googlee542c1e5cf699583.html`.
- Analytics: GA4 tag is in `app/layout.tsx` and tracks page views.

## Backend (Laravel) — Notes

These SEO tasks are frontend-only. The Laravel app serves data; no additional backend changes are required for the SEO features above. To run backend locally (if needed):
```bash
cd Marwah_backend
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

## Where the Changes Live

- Global head/meta/schema: `app/layout.tsx`
- Dynamic meta helper (existing): `components/DynamicMetaTags.tsx`
- Per‑page metas: `app/pages/*/page.tsx`
- Breadcrumbs: `components/Breadcrumb.tsx` (mounted in `app/layout.tsx`)
- Social share: `components/SocialShare.tsx` (blogs + blog_detail)
- Article schema: `components/ArticleSchema.tsx` (attached in blog_detail)
- Frontend sitemap page: `app/pages/sitemap/page.tsx`
- 404 page: `app/not-found.tsx`
- Alt text improvements: `components/PackagesSection.tsx`, `app/pages/package_detail/page.tsx`, `components/Footer.tsx`, `components/Navbar.tsx`

## After Deployment — Client Checklist

1. Replace placeholder social links in Navbar/Footer with your official profile URLs.
2. In Google Search Console, verify property (HTML tag/file is already present).
3. Confirm GA4 is receiving data for property `G-MJ6Y9357FT`.
4. Optional: connect Google Business Profile (handled outside code).

## Support

If anything fails during `npm install` or launch, run `npm cache clean --force` and try again. Share console errors for quick help.
