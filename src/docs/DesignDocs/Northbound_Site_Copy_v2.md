# Northbound — Site Copy Document (v2)

**Project:** Northbound (portfolio concept)
**Studio:** No-5 Studio — Kevin
**Status:** Source of truth for visual prototype + build
**Date:** April 2026
**Pages:** 6 (Homepage, Work, Services, About, Journal, Contact)
**Version:** 2 — Hero locked, About header updated, "outdoors" language applied where it strengthens the copy.

---

## How to use this document

This is the single source of truth for all Northbound copy and site structure. It pairs with the existing Northbound PDF site doc, which carries the visual design system. Use this doc for *what the site says*. Use the PDF for *how the site looks*.

Every page below is broken down by section. Every section names its component, its copy, and any notes about responsive behavior or layout. Where mobile copy needs to differ from desktop, both versions are provided.

A recommended prompt for Claude Design appears at the end of this document.

---

# 1. Brand Summary

**Name:** Northbound
**Location:** Portland, Oregon
**Established:** 2019
**Founder:** Maren Hollis
**Specialty:** Branding, identity, and digital for the outdoors — gear, apparel, guide services, retail, and outdoor media.

**One-liner:**
Northbound is a Portland design studio building brands for the outdoors.

**Voice:** Confident, plain-spoken, editorial. Short sentences. Specific words. No posturing, no villain, no industry jargon dressed up as insight. The credibility is in the specificity.

**The thesis in one sentence:**
Built, used and branded. We came up inside the outdoor industry. Now we build the brands.

**Founder shape:**
Maren Hollis spent her first years in the industry at Foothill Supply Co., a small Portland outdoor brand where she did everything — designed packs and softgoods, wrote the catalog, shot the lookbook. From there she moved to Heyburn, where she led product design across technical apparel and hardgoods for nearly a decade. Northbound opened in 2019 with a single thesis: design for the outdoor industry, and only the outdoor industry.

---

# 2. Site Architecture

Six pages. One repeating component pattern (project tiles on the Work index). Footer CTA repeats globally.

```
01 — Homepage
02 — Work
03 — Services
04 — About
05 — Journal
06 — Contact
```

**Cuts from the original PDF structure:**
- "Studio News" and "Behind the Design" merged into a single Journal page.
- "Case Studies" removed as a separate page. The 9 featured projects live on the Work index. Detail pages are deferred until real case studies exist.
- "Featured Clients" + "Brands We've Worked With" combined on the homepage into a single denser logo section.

---

# 3. Global Elements

These appear across every page. Build them as shared components.

## 3.1 Navigation

**Component:** `SiteHeader`

Top-left: Northbound wordmark with registered mark
Top-right nav (in order):

- Work
- Services
- About
- Journal
- Contact

**Mobile:** Hamburger triggers full-screen overlay nav. Same five links, stacked, all-caps.

**Notes:**
- Header sits on a transparent background over hero sections. Switches to solid Bone (`#EFEFEC`) on scroll past hero.
- Wordmark links to homepage.

## 3.2 Footer CTA Block

**Component:** `FooterCTA`

This sits above the standard site footer on every page. It's the closing note of every page.

**Headline (desktop):**
We would love to hear from you. Let's work — together.

**Headline (mobile):**
We would love to hear from you. Let's work — together.

**CTA button:** Start a project →

**Notes:**
- Headline runs as a large editorial type block. All-caps. Stays consistent across pages because it's the closing voice of the studio.
- This copy was strong in the original PDF and stays. It's one of the few pieces preserved from the source design.
- CTA links to Contact page.

## 3.3 Site Footer

**Component:** `SiteFooter`

Three columns on desktop. Stacked on mobile.

**Column 1 — Studio**
Northbound ®
Portland, Oregon
Established 2019

**Column 2 — Pages**
Work
Services
About
Journal
Contact

**Column 3 — Connect**
Instagram
LinkedIn
hello@northbound.studio

**Bottom row:**
Left: © 2026 Northbound Studio
Right: Built in Portland

## 3.4 Global CTAs

Standard CTA labels used across the site. Consistency matters.

| Context | Label |
|---|---|
| Primary contact CTA | Start a project |
| View work | See the work |
| Read more (Journal) | Read the piece |
| About the studio | Meet the studio |
| Services detail | What we do |

No "Learn More." Anywhere.

## 3.5 Meta — Site-wide

**Site title:** Northbound — A Design Studio for the Outdoors
**Default meta description:** Northbound is a Portland design studio building brands for outdoor companies — gear, apparel, guide services, and the people who make them.
**Open Graph image:** Studio mark on Bone background, full-bleed.

---

# 4. Homepage

The homepage answers three questions in order: *What is this studio? What have they done? Who do you contact?*

## 4.1 Hero Section

**Component:** `HeroEditorial`

**Eyebrow (above headline, small caps):**
NORTHBOUND ® · PORTLAND, OREGON · EST. 2019

**Headline (desktop, all-caps, large editorial type):**
BUILT, USED AND BRANDED.

**Headline (mobile):**
BUILT, USED AND BRANDED.

**Sub-headline (sentence-case, below the all-caps headline, smaller scale but still prominent):**
A design studio for the outdoors.

**Sub-paragraph (below the hero pair, sentence-case body):**
A design studio working with gear companies, apparel labels, guide services, and the people who make them. Branding, identity, and digital — that's the whole offer.

**CTA:** See the work →

**Notes:**
- Headline runs at the largest type scale in the system. Three words across one line on desktop. May wrap to two lines on mobile.
- Sub-headline sits beneath the headline, smaller scale, but still functions as part of the hero — not body copy.
- No background image. Type is the hero.
- Sub-paragraph caps at 2 lines on desktop, 4 on mobile.

## 4.2 Featured Work — Block 01

**Component:** `FeaturedProjectFull`

A full-bleed project tile. The marquee piece. Image dominates, copy sits in the lower-left or lower-right.

**Project:** Cordilline
**Category label:** Apparel · Identity & Web
**Year:** 2025
**Caption headline:** A heritage apparel brand, modernized without losing its weight.
**CTA:** View project →

**Notes:**
- Image placeholder until real case study work exists. Use deep forest tone from palette (`#3A3A38` overlay range).
- Full viewport height on desktop. 70vh on mobile.

## 4.3 Featured Work — Block 02

**Component:** `FeaturedProjectGrid` (2-up)

Two project tiles side-by-side on desktop. Stacked on mobile.

**Project A:**
- Name: Field Provisions
- Category: Food & Outdoor Retail · Brand System
- Year: 2024
- Caption: A trail food company built around one idea — you eat better when you carry less.

**Project B:**
- Name: Tidewater Hospitality
- Category: Guide Services · Identity & Digital
- Year: 2025
- Caption: A new identity for a third-generation Oregon coast outfitter.

**Notes:**
- Tiles are 1:1 ratio on desktop, 4:5 on mobile.
- Hover state: caption text shifts up, CTA arrow appears.

## 4.4 About Preview

**Component:** `AboutPreviewSplit`

Two-column block. Left: short copy. Right: studio photo (placeholder for now).

**Eyebrow:** ABOUT THE STUDIO

**Headline:**
A studio for one industry. On purpose.

**Body:**
Northbound was founded in 2019 by Maren Hollis, after a decade designing gear and apparel for outdoor brands. The studio works with one kind of client — outdoor companies — because depth beats breadth when you actually know a category.

Branding, identity, and digital. Project-based engagements. Selective by design.

**CTA:** Meet the studio →

**Notes:**
- Image placeholder: candid studio shot, warm neutral palette. Not a portrait. Studio environment.
- Copy is intentionally short. The full About page does the heavier lifting.

## 4.5 Featured Clients & Brands

**Component:** `LogoWallDense`

A single denser logo section. Replaces the original PDF's two separate "Featured Clients" and "Brands We've Worked With" blocks.

**Eyebrow:** SELECT CLIENTS · 2019 — PRESENT

**Layout:** 4 columns on desktop, 2 on mobile. 12 logos total. All in monochrome Ink (`#171717`).

**Logo list (placeholders mapped to invented projects below):**
01. Cordilline
02. Field Provisions
03. Tidewater Hospitality
04. Common Path
05. Marlow Studies
06. Heron & Wells
07. Saltwater Society
08. Boulder Cache
09. Tarn Goods
10. Forest Table
11. Northern Bellwether
12. Lithic Trail Co.

**Notes:**
- Logos rendered as static placeholders for the prototype. Real logos generated at build time.
- No hover state. The wall is meant to read as a quiet credentials block.

## 4.6 Awards & Recognitions

**Component:** `AwardsTable`

A simple two-column table. No frills. The list is the design.

**Eyebrow:** AWARDS & RECOGNITIONS

**Headline:**
Selected work, recognized.

**Table content:**

| Year | Award |
|---|---|
| 2025 | Communication Arts — Typography Annual |
| 2025 | Brand New — Noted (Cordilline) |
| 2024 | Type Directors Club — Certificate of Typographic Excellence |
| 2024 | AIGA 50/50 Books — Honorable Mention |
| 2023 | Communication Arts — Design Annual |
| 2023 | The Webby Awards — Nominee, Outdoor & Adventure |
| 2022 | Brand New — Noted (Field Provisions) |
| 2021 | Print Magazine — Regional Design Annual |

**Notes:**
- All recognition entries reference real awards in the design industry. The wins/nominations are fictional.
- For the prototype, this is the full list. No "view all awards" link.

## 4.7 Latest from the Journal

**Component:** `JournalPreviewGrid` (3-up)

Three article previews from the Journal. Image, eyebrow, headline, date.

**Eyebrow:** FROM THE JOURNAL

**Section headline:**
Notes from the studio.

**Article 01:**
- Eyebrow: ESSAY
- Headline: Why the outdoor industry keeps redesigning the same logo.
- Date: March 2026

**Article 02:**
- Eyebrow: CASE NOTE
- Headline: Building a brand system for a guide service that's been running since 1962.
- Date: February 2026

**Article 03:**
- Eyebrow: STUDIO
- Headline: On working with one industry, on purpose.
- Date: January 2026

**CTA:** Read the journal →

## 4.8 Footer CTA Block

Global component. See section 3.2.

---

# 5. Work

The Work page is the studio's full project index. No filters, no sorting controls. The order is the curation.

## 5.1 Page Header

**Component:** `PageHeaderEditorial`

**Eyebrow:** 02 · WORK

**Headline (desktop):**
SEVEN YEARS. ONE INDUSTRY. SELECTED WORK FROM 2019 TO TODAY.

**Headline (mobile):**
SEVEN YEARS. ONE INDUSTRY. SELECTED WORK.

**Sub-paragraph:**
Branding, identity, and digital for outdoor companies. Project-based, scoped, selective. Northbound takes on roughly twelve engagements a year.

**Notes:**
- Header sits on Bone background, no image.
- Type is the hero of this page.

## 5.2 Project Index

**Component:** `ProjectIndexGrid`

A grid of 9 projects. 3 columns on desktop, 1 column on mobile. Each tile contains: image placeholder, project name, category, year.

### Project list (9 invented projects)

**01. Cordilline**
- Category: Apparel · Identity, Brand System, Web
- Year: 2025
- Caption: A heritage apparel brand, modernized without losing its weight.

**02. Field Provisions**
- Category: Food & Outdoor Retail · Brand System, Packaging, Web
- Year: 2024
- Caption: A trail food company built around carrying less and eating better.

**03. Tidewater Hospitality**
- Category: Guide Services · Identity, Digital, Print
- Year: 2025
- Caption: A new identity for a third-generation Oregon coast outfitter.

**04. Common Path**
- Category: Outdoor Nonprofit · Brand System, Web
- Year: 2023
- Caption: A trail-stewardship nonprofit, rebuilt around the people who do the work.

**05. Marlow Studies**
- Category: Outdoor Media · Identity, Editorial Design
- Year: 2024
- Caption: A small-format magazine about long walks, slow rivers, and the people who write about them.

**06. Heron & Wells**
- Category: Apparel · Identity, Web
- Year: 2022
- Caption: A waxed-canvas goods maker, repositioned for a second decade.

**07. Saltwater Society**
- Category: Outdoor Retail · Brand System, Digital
- Year: 2023
- Caption: A specialty surf and salt-water shop, treated like a magazine.

**08. Boulder Cache**
- Category: Climbing Gear · Identity, Packaging
- Year: 2021
- Caption: A small-batch climbing hardware company, built around one founder's notebook.

**09. Tarn Goods**
- Category: Hardgoods · Identity, Web, Retail Environments
- Year: 2020
- Caption: An alpine goods brand, named after the lakes you only reach on foot.

**Notes:**
- Grid order matters. Cordilline, Field Provisions, and Tidewater are the strongest case studies and lead.
- Each tile uses warm neutral overlays from the palette range. No bright color tiles.
- Placeholder images for the prototype. Real photography/renders come at build time.

## 5.3 Footer CTA Block

Global component.

---

# 6. Services

Services exists to answer one question quickly: *what does this studio actually do?*

## 6.1 Page Header

**Component:** `PageHeaderEditorial`

**Eyebrow:** 03 · SERVICES

**Headline (desktop):**
BRANDING, IDENTITY, AND DIGITAL FOR THE OUTDOORS. THAT'S THE OFFER.

**Headline (mobile):**
BRANDING, IDENTITY, AND DIGITAL FOR THE OUTDOORS.

**Sub-paragraph:**
Northbound runs a small offer on purpose. Three core practices, applied to one kind of client. Every engagement starts with the brand and ends with the build.

## 6.2 Service Block — Branding

**Component:** `ServiceBlockSplit`

Two columns. Left: copy. Right: image placeholder showing brand system artifacts (logo, type, color, photography direction).

**Eyebrow:** 01 · BRANDING

**Headline:**
The strategy and the system.

**Body:**
Brand work at Northbound is research-led and product-aware. We start by understanding the company — what it makes, who buys it, where it sits in the category, and what's actually true about it. From there, we build the system: positioning, voice, naming when needed, and the visual identity that holds it all.

**Capabilities (list):**
- Brand strategy & positioning
- Audience and category research
- Naming
- Visual identity systems
- Voice and copy direction
- Brand guidelines

## 6.3 Service Block — Identity & Print

**Component:** `ServiceBlockSplit` (image left this time, alternating)

**Eyebrow:** 02 · IDENTITY & PRINT

**Headline:**
The artifacts that carry the brand.

**Body:**
Logos, marks, packaging, lookbooks, hangtags, retail signage, catalogs. The objects a brand actually shows up as. Northbound brings a product designer's eye to brand artifacts — every detail is treated as something that has to function in the world.

**Capabilities (list):**
- Logos and marks
- Packaging design
- Print collateral and editorial
- Catalogs and lookbooks
- Retail signage and environments
- Hangtags and product graphics

## 6.4 Service Block — Digital

**Component:** `ServiceBlockSplit`

**Eyebrow:** 03 · DIGITAL

**Headline:**
Websites that hold up.

**Body:**
Brand websites, ecommerce, and digital systems built on modern frameworks. Northbound writes the copy, designs the system, and ships the build. We keep digital scope tight — most clients don't need a hundred pages, they need ten that work.

**Capabilities (list):**
- Brand websites
- Shopify and headless ecommerce
- Editorial and content sites
- Design systems and component libraries
- Copy and content strategy
- Performance and accessibility

## 6.5 How We Work

**Component:** `ProcessSection`

A simple horizontal scroll on desktop, vertical stack on mobile. Four phases. Each is a numbered card with headline and short body.

**Eyebrow:** HOW WE WORK

**Section headline:**
Four phases. No fixed timeline.

**Phase 01 — Intake**
We start with a conversation. What the company makes, what it needs, what's already working. Most engagements begin with a one-page brief.

**Phase 02 — Strategy**
The thinking before the design. Positioning, voice, audience, and the framework the rest of the work hangs on.

**Phase 03 — Design**
The brand system, identity artifacts, and digital design — built in parallel where it makes sense, in sequence where it doesn't.

**Phase 04 — Build & Hand-off**
The website goes live. The brand guidelines get delivered. The team gets trained on the system. We stay in touch.

## 6.6 Engagement Note

**Component:** `TextBlockNarrow`

A single paragraph, centered, small but firm.

**Headline:** A note on engagements.

**Body:**
Northbound takes on roughly twelve projects a year. We don't do retainer work, ongoing content, or paid media. Most engagements run between eight and sixteen weeks, scoped to the project and the client. If we're not the right fit, we'll say so.

## 6.7 Footer CTA Block

Global component.

---

# 7. About

The About page tells the studio's story and introduces the founder. It's the page that earns the credibility the rest of the site asserts.

## 7.1 Page Header

**Component:** `PageHeaderEditorial`

**Eyebrow:** 04 · ABOUT

**Headline (desktop):**
A STUDIO FOR ONE INDUSTRY. THE OUTDOORS.

**Headline (mobile):**
A STUDIO FOR ONE INDUSTRY. THE OUTDOORS.

**Sub-paragraph:**
Northbound is a Portland design studio working with outdoor companies. We started in 2019 with a narrow idea — design for one industry, and only that industry — and seven years in, the thesis has held.

## 7.2 Studio Origin

**Component:** `LongFormSection`

Long-form copy block, centered, narrow column. Magazine-style.

**Eyebrow:** THE STUDIO

**Headline:**
We started inside the industry we now serve.

**Body (paragraph 01):**
Northbound was founded by Maren Hollis in 2019, after a decade designing gear and apparel for outdoor brands. The studio's first office was a corner of a screen-printing shop in Northeast Portland. The second was a converted woodworking space three blocks east. The current studio is in the same neighborhood. We haven't moved far.

**Body (paragraph 02):**
The thesis hasn't changed either. Northbound works with outdoor companies — gear makers, apparel labels, guide services, retailers, and the occasional nonprofit — because depth beats breadth when you actually know a category. Our clients don't have to explain what a softshell is, or why the seam placement on a pack matters, or what makes one trail brand feel honest and another feel like a costume. We already know.

**Body (paragraph 03):**
The work is brand-first — strategy, identity, and digital. It always starts from the product, because that's where the founder started.

## 7.3 Founder

**Component:** `FounderProfileSplit`

Two-column section. Left: studio portrait of Maren (placeholder). Right: copy.

**Eyebrow:** THE FOUNDER

**Headline:**
Maren Hollis.

**Body:**
Maren spent the first years of her career at Foothill Supply Co., a small Portland outdoor brand where she did everything — designed packs and softgoods, wrote the catalog, shot the lookbook. From there she moved to Heyburn, where she led product design across technical apparel and hardgoods for nearly a decade.

She opened Northbound in 2019 with a single thesis: design for the outdoor industry, and only the outdoor industry. The studio's editorial sensibility — the typography, the restraint, the way the work reads — comes directly from those years inside the catalog and the gear room.

She still sketches every brand by hand before it goes digital.

**Notes:**
- Portrait should be working/candid, not posed. Studio environment.

## 7.4 What We Believe

**Component:** `BeliefsList`

A list of short statements. Numbered. All-caps eyebrows on the numbers, body in sentence case.

**Eyebrow:** WHAT WE BELIEVE

**Section headline:**
A few things we hold to.

**01 — DEPTH BEATS BREADTH.**
We work with one industry because knowing it well changes the work. There's no version of "we also do outdoor" that produces the same result.

**02 — THE BRAND STARTS AT THE PRODUCT.**
Every good outdoor brand starts with something physical — a pack, a parka, a route, a place. We build out from there.

**03 — RESTRAINT IS A FEATURE.**
The industry is loud enough already. Our work tends toward quiet because clarity is harder than ornament.

**04 — WE DON'T DO COSTUME.**
There's a way of writing about the outdoors that sounds like it's auditioning for a magazine cover. We don't do that. The brands we admire don't either.

**05 — SCOPE IS A KINDNESS.**
Tight scopes make better work and better relationships. Most engagements are eight to sixteen weeks. We say no often.

## 7.5 Studio Information

**Component:** `StudioInfoBlock`

A clean info block. Three columns on desktop, stacked on mobile. Reads like a colophon.

**Eyebrow:** STUDIO

**Column 01 — LOCATION**
Northbound Studio
Northeast Portland, Oregon
By appointment

**Column 02 — TEAM**
Maren Hollis, Founder & Creative Director
Plus a rotating cast of trusted collaborators — designers, photographers, and writers who've been part of the studio's work over the years.

**Column 03 — RECOGNITION**
Communication Arts
Brand New
Type Directors Club
AIGA 50 Books / 50 Covers
Print Magazine
The Webby Awards

## 7.6 Footer CTA Block

Global component.

---

# 8. Journal

The Journal merges what was originally Studio News and Behind the Design into one editorial section. For a small studio, one strong Journal beats two thin sections.

## 8.1 Page Header

**Component:** `PageHeaderEditorial`

**Eyebrow:** 05 · JOURNAL

**Headline (desktop):**
NOTES FROM THE STUDIO. ESSAYS, CASE NOTES, AND THE OCCASIONAL OPINION.

**Headline (mobile):**
NOTES FROM THE STUDIO.

**Sub-paragraph:**
Long-form writing about brand, the outdoors, and the work of building one inside the other. Published when there's something worth saying.

## 8.2 Journal Index

**Component:** `JournalIndexGrid`

A grid of journal articles. 2 columns on desktop, 1 on mobile. Each entry: optional image placeholder, eyebrow category, headline, date, short excerpt.

### Article 01

- **Category eyebrow:** ESSAY
- **Headline:** Why the outdoor industry keeps redesigning the same logo.
- **Date:** March 2026
- **Excerpt:** A category-wide habit, examined. Mountains, sans-serifs, and the gravitational pull of the obvious.

### Article 02

- **Category eyebrow:** CASE NOTE
- **Headline:** Building a brand system for a guide service that's been running since 1962.
- **Date:** February 2026
- **Excerpt:** What changes when the brand is older than most of its customers.

### Article 03

- **Category eyebrow:** STUDIO
- **Headline:** On working with one industry, on purpose.
- **Date:** January 2026
- **Excerpt:** The thesis behind the studio, seven years in.

### Article 04

- **Category eyebrow:** ESSAY
- **Headline:** A short defense of the catalog.
- **Date:** December 2025
- **Excerpt:** Print isn't dead. It's just sitting on the coffee table doing the work the website forgot how to do.

### Article 05

- **Category eyebrow:** CRAFT
- **Headline:** How we write product copy for gear we'd actually carry.
- **Date:** November 2025
- **Excerpt:** Specificity, restraint, and the long, slow death of "engineered for adventure."

### Article 06

- **Category eyebrow:** STUDIO
- **Headline:** Conversations with the people we work with: Heron & Wells.
- **Date:** October 2025
- **Excerpt:** A waxed-canvas goods maker on heritage, restraint, and second decades.

### Article 07

- **Category eyebrow:** ESSAY
- **Headline:** The case against accent colors.
- **Date:** September 2025
- **Excerpt:** A note on neutral palettes, signal-to-noise ratios, and why the loudest color is usually the wrong one.

### Article 08

- **Category eyebrow:** PROCESS
- **Headline:** What a Northbound brand strategy doc actually looks like.
- **Date:** August 2025
- **Excerpt:** Pulling back the curtain on the document that runs every project.

**Notes:**
- 8 articles total — enough to make the grid feel populated, not overstuffed.
- No filtering or category tabs. The page is short enough to scan.
- Article detail pages exist as a template but content for each is deferred until real content is written.

## 8.3 Footer CTA Block

Global component.

---

# 9. Contact

The Contact page is short on purpose. It does one job.

## 9.1 Page Header

**Component:** `PageHeaderEditorial`

**Eyebrow:** 06 · CONTACT

**Headline (desktop):**
TELL US ABOUT THE PROJECT.

**Headline (mobile):**
TELL US ABOUT THE PROJECT.

**Sub-paragraph:**
Northbound takes on roughly twelve projects a year. If you're working on something in the outdoors — a brand, a relaunch, a digital build — we'd like to hear about it.

## 9.2 Contact Form

**Component:** `ContactFormBlock`

Two-column layout on desktop. Form left, studio info right. Stacked on mobile.

### Form fields:

- Your name (required)
- Company (required)
- Email (required)
- What kind of company is it? (dropdown)
  - Gear / hardgoods
  - Apparel
  - Guide service / outfitter
  - Retail
  - Outdoor media
  - Nonprofit
  - Other
- What are you working on? (textarea, required)
- Approximate budget (dropdown, optional)
  - Under $25K
  - $25K – $50K
  - $50K – $100K
  - $100K+
  - Not sure yet
- Timeline (optional, single-line)

**Submit button:** Send the brief →

### Right column — studio info

**Studio:**
Northbound ®
Northeast Portland, Oregon

**Direct:**
hello@northbound.studio

**Press:**
press@northbound.studio

**Social:**
Instagram
LinkedIn

**Notes:**
- No phone number. The studio doesn't take cold calls.
- Form should send a confirmation email with the same calm, plain voice as the rest of the site.

## 9.3 Closing Note

**Component:** `TextBlockNarrow`

A short paragraph below the form. Quiet send-off.

**Headline:** What happens next.

**Body:**
We read every brief that comes through. If the project is a fit, we'll get back to you within a week with a few questions and next steps. If it's not, we'll tell you that too — and try to point you toward someone who'd be a better match.

## 9.4 Footer CTA Block

The global Footer CTA can be omitted on the Contact page (since the page itself is the CTA), or kept for consistency. **Recommendation:** omit on Contact, keep everywhere else.

---

# 10. Component Library — Quick Reference

A summary of every named component used in the doc, for the build phase. These should be built as reusable React components.

| Component | Used on |
|---|---|
| `SiteHeader` | Global |
| `SiteFooter` | Global |
| `FooterCTA` | Global (omit on Contact) |
| `HeroEditorial` | Homepage |
| `PageHeaderEditorial` | Work, Services, About, Journal, Contact |
| `FeaturedProjectFull` | Homepage |
| `FeaturedProjectGrid` | Homepage |
| `AboutPreviewSplit` | Homepage |
| `LogoWallDense` | Homepage |
| `AwardsTable` | Homepage |
| `JournalPreviewGrid` | Homepage |
| `ProjectIndexGrid` | Work |
| `ServiceBlockSplit` | Services |
| `ProcessSection` | Services |
| `TextBlockNarrow` | Services, Contact |
| `LongFormSection` | About |
| `FounderProfileSplit` | About |
| `BeliefsList` | About |
| `StudioInfoBlock` | About |
| `JournalIndexGrid` | Journal |
| `ContactFormBlock` | Contact |

---

# 11. Recommended Prompt for Claude Design

Paste the following into Claude Design alongside the Northbound PDF and this copy doc.

---

> I'm rebuilding a portfolio concept site called **Northbound** — a fictional Portland design studio specializing in branding for outdoor companies.
>
> **Two source materials are attached:**
>
> 1. **The Northbound PDF site doc** — use this for the visual design system ONLY. Specifically: typography (Inter sans, all weights, all-caps headlines, sentence-case body), color palette (Bone #EFEFEC, Paper #F5F5F2, Ink #171717, Soft Ink #3A3A38, Muted #8E8C86, Stone #D8D5D0 — no accent colors), layout patterns (editorial restraint, magazine-style hierarchy), and component inventory (hero blocks, project tiles, logo walls, awards tables, journal previews, footer CTA).
>
> 2. **The Northbound Site Copy document** (this file) — use this for ALL copy, ALL page structure, and ALL component organization. Do not pull any copy from the PDF. The PDF copy reflects the original studio (Dash Studio) and does not match Northbound's voice.
>
> **Page architecture has changed from 8 pages to 6:**
> - The original "Studio News" and "Behind the Design" pages are merged into a single Journal page.
> - "Case Studies" is removed as a standalone page. Projects live on the Work index.
> - "Featured Clients" and "Brands We've Worked With" are combined into one Logo Wall on the homepage.
>
> **Hero treatment is specific:**
> - Headline: "BUILT, USED AND BRANDED." (all-caps, largest type scale)
> - Sub-headline below it, smaller but still part of the hero: "A design studio for the outdoors." (sentence-case)
> - Sub-paragraph below the hero pair, body-scale.
>
> **Voice notes for the design:**
> - Northbound's tone is confident, plain-spoken, editorial. No villain, no posturing, no "We tell stories that inspire" energy. Layout decisions should reinforce that quiet confidence — restraint, generous whitespace, strong typographic hierarchy.
> - The studio is a specialist. The design should feel focused and dense in content where appropriate (Work index, Journal index) and spacious where it should breathe (hero, about origin, footer CTA).
>
> **Build deliverable:** A high-fidelity visual prototype of all 6 pages at desktop (1440px) and mobile (375px) breakpoints, matching the Northbound PDF's visual system but using only the copy and structure from this document.
>
> Confirm understanding of this scope before proceeding.

---

# 12. Open Items / Deferred

For Kevin's reference, the following are intentionally not built into this doc and should be addressed at build time:

- **Real photography and case study imagery** — All image placeholders use the warm-neutral palette as overlay tones until real assets exist.
- **Logo design for Northbound** — Wordmark is referenced but not designed. The PDF treats it as set type. Final wordmark TBD.
- **Logo placeholders for the 9 featured clients** — These are typeset placeholders for the prototype. Real sub-brand logos can be designed at build time if the portfolio piece warrants it.
- **Case study detail pages** — Deferred until real case studies exist. Template should be designed but not populated.
- **Journal article detail pages** — Same logic. Template designed, content deferred.
- **Microcopy** — Form validation messages, 404 page, privacy/terms — to be written in the same voice at build time.

---

# 13. Changelog

**v2 — April 2026**
- Hero locked: "BUILT, USED AND BRANDED." with sub-headline "A design studio for the outdoors."
- About page header updated: "A STUDIO FOR ONE INDUSTRY. THE OUTDOORS."
- Services page header updated: "BRANDING, IDENTITY, AND DIGITAL FOR THE OUTDOORS."
- Site meta title updated to "A Design Studio for the Outdoors"
- Journal sub-paragraph updated to use "the outdoors"
- Brand Summary one-liner updated to use "the outdoors"
- "Outdoor industry" preserved on About page where the phrase is doing strategic work (the thesis line, the founder bio) — these stay because they accurately describe the positioning.

**v1 — April 2026**
- Initial full site copy doc.

---

**End of document.**

*Northbound — Portland, Oregon — Established 2019*
