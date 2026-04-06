---
name: seo-check
description: Audit pages for SEO integrity including meta tags, heading hierarchy, internal links, navigation consistency, schema markup, Core Web Vitals readiness, AI/LLM discoverability, and indexing safety. Use when reviewing or creating new pages.
user-invocable: true
disable-model-invocation: false
allowed-tools: Read Grep Glob Agent
argument-hint: "[file-path, glob-pattern, or 'all' for full site audit]"
---

# Comprehensive SEO Audit

Perform a thorough SEO audit on `$ARGUMENTS`. If no arguments provided, audit the homepage (`src/app/page.tsx`) and layout (`src/app/layout.tsx`).

If `$ARGUMENTS` is "all", audit every page in `src/app/**/page.tsx` plus layout, sitemap, robots, and schema files.

## Project Context

This is a Next.js App Router site for **Sub-Zero Repair Company** (DBA Fivestar Appliance Repair Pros), a local appliance repair business in South Florida. The site targets local SEO for 7 counties and 82+ cities.

- **Domain**: fivestarappliancerepairpros.com
- **Tech stack**: Next.js 16, React 19, Tailwind CSS 4, TypeScript
- **Key files**: `src/lib/constants.ts` (business data), `src/lib/schema.ts` (JSON-LD), `src/app/sitemap.ts`, `src/app/robots.ts`

---

## Audit Checklist

### 1. Meta Tags (Title & Description)

**Read the page's metadata export or generateMetadata function.**

#### Title Tag
- [ ] Present and unique to this page
- [ ] **50-60 characters** (hard limit: ~600px / 60 chars before truncation)
- [ ] Primary keyword front-loaded (near the beginning)
- [ ] Includes location for local pages (city or "South Florida")
- [ ] Uses `title.template` from layout correctly (check for `%s - Sub-Zero Repair Services` suffix)
- [ ] Does NOT repeat the template suffix in the page-level title

#### Meta Description
- [ ] Present and unique to this page
- [ ] **120-158 characters** (mobile truncates at ~120, desktop at ~158)
- [ ] Includes primary keyword naturally
- [ ] Contains a call-to-action ("Book now", "Call today", "Schedule service")
- [ ] Accurately describes the page content

#### Open Graph
- [ ] `og:title` set (60 chars max for best display)
- [ ] `og:description` set (100-200 chars)
- [ ] `og:url` set to canonical URL
- [ ] `og:type` is "website" for homepage, appropriate type for other pages
- [ ] `og:image` references a valid image (1200x630px minimum, 1.91:1 ratio)

#### Twitter Card
- [ ] `twitter:card` is set ("summary" or "summary_large_image")
- [ ] Consider `summary_large_image` for pages with strong hero imagery

#### Robots Directives
- [ ] Public pages: `index, follow`
- [ ] Utility pages (thank-you, checkins): should be `noindex, follow`
- [ ] `max-image-preview: large` for Google Discover eligibility

---

### 2. Heading Hierarchy

**Read the full JSX/TSX of the page component.**

- [ ] Exactly **one H1** per page
- [ ] H1 is **20-60 characters**, includes primary keyword
- [ ] H1 clearly communicates what the page is about
- [ ] **No skipped heading levels** (H1 > H2 > H3 > H4 — never H1 > H3 or H2 > H4)
- [ ] H2s divide the page into logical main sections
- [ ] H3s subdivide those sections (not used for styling)
- [ ] Headings are descriptive labels, not vague ("Our Services" is weak; "Sub-Zero Refrigerator Repair Services" is strong)
- [ ] No heading tags used purely for visual styling (sidebar titles, footer headings should use `<p>` or `<span>`)
- [ ] Section component headings maintain proper hierarchy when composed on the page

**Check across ALL section components imported by the page** — the heading hierarchy must be valid when all sections are combined.

---

### 3. Structured Data (JSON-LD Schema)

**Read `src/lib/schema.ts` and any inline `<script type="application/ld+json">` blocks.**

#### LocalBusiness Schema (layout.tsx)
- [ ] `@type` includes `HomeAndConstructionBusiness`
- [ ] `@id` is set for cross-referencing (e.g., `https://domain.com/#business`)
- [ ] `name`, `alternateName` present
- [ ] `address` is a `PostalAddress` with: `streetAddress`, `addressLocality`, `addressRegion`, `postalCode`, `addressCountry`
- [ ] `geo` has `GeoCoordinates` with **5+ decimal places** precision
- [ ] `telephone` includes country code
- [ ] `email` present
- [ ] `url` is the canonical site URL
- [ ] `logo` and `image` point to valid URLs
- [ ] `openingHoursSpecification` uses structured array format (NOT the string `openingHours` format — Google prefers the structured version with `dayOfWeek`, `opens`, `closes`)
- [ ] `areaServed` lists all service areas as typed entities (`AdministrativeArea`, `City`, `State`)
- [ ] `hasOfferCatalog` lists services as `Offer` > `Service` items
- [ ] `sameAs` includes social profile URLs
- [ ] `foundingDate`, `priceRange`, `paymentAccepted`, `currenciesAccepted` present
- [ ] `knowsAbout` lists key expertise areas
- [ ] `slogan` present
- [ ] **No `aggregateRating`** on own site — Google does NOT show review stars for self-serving LocalBusiness reviews (policy since Sept 2019)

#### Page-Specific Schema
- [ ] Service pages have `Service` schema with `provider` referencing the LocalBusiness `@id`
- [ ] Blog posts have `BlogPosting` or `Article` schema with `author`, `datePublished`, `dateModified`
- [ ] FAQ sections have `FAQPage` schema with `Question`/`Answer` pairs
- [ ] City/area pages have location-specific `LocalBusiness` variant or `ServiceArea` schema
- [ ] `BreadcrumbList` schema matches visible breadcrumb navigation (if breadcrumbs exist)

#### WebSite Schema
- [ ] `SearchAction` only present if the site has a functional search endpoint — remove if `/search` doesn't exist
- [ ] `url` matches the canonical domain

#### Validation
- [ ] Schema is valid JSON (no syntax errors)
- [ ] Test with Google Rich Results Test conceptually — no deprecated or invented properties
- [ ] Schema content matches visible page content (not hidden or deceptive)

---

### 4. Internal Linking

**Read the page content and navigation components.**

#### Hub-and-Spoke Architecture
- [ ] Homepage links to all county hub pages
- [ ] County pages link to all their city pages AND back to the areas hub
- [ ] City pages link back to their county page, to the areas hub, and to all service pages
- [ ] Service pages link to the areas hub and mention key cities

#### Link Quality
- [ ] Anchor text is descriptive and keyword-rich (not "click here" or "learn more" alone)
- [ ] Anchor text varies across links to the same destination
- [ ] No orphan pages (unreachable except through sitemap)
- [ ] Related pages are contextually linked within content

#### Navigation
- [ ] Primary navigation is consistent across all pages
- [ ] Footer navigation includes links to key pages
- [ ] "Service Areas" section/links appear on service pages
- [ ] Blog posts include contextual links to service and area pages

---

### 5. Canonical Tags & Indexing

- [ ] Every page has a self-referencing canonical URL via `alternates.canonical`
- [ ] Canonical URLs use consistent format (trailing slash policy — pick one, stick with it)
- [ ] Canonical URLs use HTTPS
- [ ] No conflicting signals (canonical says URL A but sitemap lists URL B)
- [ ] `sitemap.ts` includes ALL indexable pages with canonical URLs
- [ ] `sitemap.ts` sets `lastModified` dates on priority pages
- [ ] `robots.ts` references the sitemap URL
- [ ] `robots.ts` does not block important resources (CSS, JS, images)
- [ ] `robots.ts` allows major AI crawlers: `GPTBot`, `ChatGPT-User`, `Google-Extended`, `ClaudeBot`, `Claude-Web`, `Anthropic-AI`, `PerplexityBot`, `Applebot-Extended`

---

### 6. NAP Consistency

**Check `src/lib/constants.ts` and all places the business info appears.**

- [ ] Business name is identical everywhere (website, schema, footer, contact page)
- [ ] Address format is identical everywhere (same abbreviations: "St." vs "Street", "FL" vs "Florida")
- [ ] Phone number format is identical everywhere (same formatting: dashes, parentheses, spaces)
- [ ] Email is consistent across all references

---

### 7. Core Web Vitals Readiness

**Check for performance anti-patterns in the code.**

#### LCP (< 2,500ms target)
- [ ] Hero/LCP image uses `priority` prop on Next.js `Image` component
- [ ] No `loading="lazy"` on above-the-fold images
- [ ] Images use WebP or AVIF format
- [ ] Images are appropriately sized (not serving 2000px in a 400px container)

#### CLS (< 0.1 target)
- [ ] All images have explicit `width` and `height` (or `fill` with sized container)
- [ ] Fonts use `display: 'swap'` (via `next/font`)
- [ ] No content injected above existing content after load
- [ ] Embeds/iframes have reserved space

#### INP (< 200ms target)
- [ ] No heavy computation in event handlers
- [ ] Third-party scripts are deferred or async
- [ ] Client components are minimal — prefer server components

#### General Performance
- [ ] No unnecessary `"use client"` directives on pages that could be server components
- [ ] Dynamic imports used for heavy below-the-fold components
- [ ] No render-blocking external resources

---

### 8. AI/LLM Discoverability

- [ ] `public/llms.txt` exists with: H1 heading, blockquote summary, markdown sections, H2-delimited file lists
- [ ] `public/llms-full.txt` exists with full content for LLM consumption
- [ ] `<link rel="llms-txt" href="/llms.txt" />` in layout head
- [ ] `ai-content-declaration` meta tag describes the site factually
- [ ] `robots.ts` allows AI crawler bots (see list in section 5)
- [ ] AI profile page exists with comprehensive entity schema (`/ai-profile/`)
- [ ] Critical content is server-rendered (not behind client-side JS)
- [ ] Structured data models the business as entities with explicit properties

---

### 9. Content Quality Signals

- [ ] Each page has **unique content** — no duplicate/near-duplicate pages (especially city pages — they must NOT be simple city-name swaps)
- [ ] Content is substantive (300+ words for service pages, 200+ for city pages)
- [ ] Content answers likely user questions
- [ ] Content includes relevant local details where applicable
- [ ] No keyword stuffing — reads naturally
- [ ] Images have descriptive `alt` text (not just "image" or empty)

---

### 10. Mobile & Accessibility

- [ ] No horizontal scrolling on mobile
- [ ] Touch targets are 48x48px minimum
- [ ] Text is readable without zooming (16px+ base font)
- [ ] Proper HTML semantics (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`)
- [ ] ARIA labels on icon-only buttons and links
- [ ] Color contrast meets WCAG AA (4.5:1 for normal text, 3:1 for large text)

---

## Output Format

For each file audited, report:

```
## [file-path]:[line-number-range]

### Score: [X/10]

### Issues Found

🔴 **Critical** (blocks indexing or severely harms rankings)
- [Issue description] — Line [N]
  Fix: [specific recommendation]

🟡 **Warning** (reduces visibility or misses opportunity)
- [Issue description] — Line [N]
  Fix: [specific recommendation]

🔵 **Info** (best practice improvement)
- [Issue description] — Line [N]
  Fix: [specific recommendation]

### Passed Checks
✅ [List of checks that passed]
```

End with a **Summary Table**:

| File | Score | Critical | Warnings | Info |
|------|-------|----------|----------|------|
| ... | .../10 | N | N | N |

And a **Priority Action List** — the top 5 highest-impact fixes across all audited files, ordered by SEO impact.
