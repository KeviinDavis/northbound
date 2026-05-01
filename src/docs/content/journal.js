// src/content/journal.js
// Northbound — Journal page copy
// Source of truth: Northbound_Site_Copy_v2.md, §8 (Journal)
//
// Consumers: PageHeaderEditorial, JournalIndexGrid.

// Component: PageHeaderEditorial
export const pageHeader = {
  eyebrow: '05 \u00B7 JOURNAL',
  headline: {
    desktop: 'NOTES FROM THE STUDIO. ESSAYS, CASE NOTES, AND THE OCCASIONAL OPINION.',
    mobile: 'NOTES FROM THE STUDIO.',
  },
  subParagraph:
    'Long-form writing about brand, the outdoors, and the work of building one inside the other. Published when there\u2019s something worth saying.',
}

// Component: JournalIndexGrid
// 8 articles — 2 columns on desktop, 1 on mobile.
// Shape mirrors home.js journalPreview.articles: { slug, category, headline, date, image, excerpt }.
// Slugs for articles 01–03 match home.js exactly.
export const articles = [
  {
    slug: 'outdoor-industry-redesigning-same-logo',
    category: 'ESSAY',
    headline: 'Why the outdoor industry keeps redesigning the same logo.',
    date: 'March 2026',
    image: null, // TODO: article image — Article 01
    excerpt:
      'A category-wide habit, examined. Mountains, sans-serifs, and the gravitational pull of the obvious.',
  },
  {
    slug: 'guide-service-since-1962',
    category: 'CASE NOTE',
    headline: 'Building a brand system for a guide service that\u2019s been running since 1962.',
    date: 'February 2026',
    image: null, // TODO: article image — Article 02
    excerpt:
      'What changes when the brand is older than most of its customers.',
  },
  {
    slug: 'one-industry-on-purpose',
    category: 'STUDIO',
    headline: 'On working with one industry, on purpose.',
    date: 'January 2026',
    image: null, // TODO: article image — Article 03
    excerpt:
      'The thesis behind the studio, seven years in.',
  },
  {
    slug: 'defense-of-the-catalog',
    category: 'ESSAY',
    headline: 'A short defense of the catalog.',
    date: 'December 2025',
    image: null, // TODO: article image — Article 04
    excerpt:
      'Print isn\u2019t dead. It\u2019s just sitting on the coffee table doing the work the website forgot how to do.',
  },
  {
    slug: 'product-copy-for-gear-we-carry',
    category: 'CRAFT',
    headline: 'How we write product copy for gear we\u2019d actually carry.',
    date: 'November 2025',
    image: null, // TODO: article image — Article 05
    excerpt:
      'Specificity, restraint, and the long, slow death of "engineered for adventure."',
  },
  {
    slug: 'conversations-heron-and-wells',
    category: 'STUDIO',
    headline: 'Conversations with the people we work with: Heron & Wells.',
    date: 'October 2025',
    image: null, // TODO: article image — Article 06
    excerpt:
      'A waxed-canvas goods maker on heritage, restraint, and second decades.',
  },
  {
    slug: 'case-against-accent-colors',
    category: 'ESSAY',
    headline: 'The case against accent colors.',
    date: 'September 2025',
    image: null, // TODO: article image — Article 07
    excerpt:
      'A note on neutral palettes, signal-to-noise ratios, and why the loudest color is usually the wrong one.',
  },
  {
    slug: 'northbound-brand-strategy-doc',
    category: 'PROCESS',
    headline: 'What a Northbound brand strategy doc actually looks like.',
    date: 'August 2025',
    image: null, // TODO: article image — Article 08
    excerpt:
      'Pulling back the curtain on the document that runs every project.',
  },
]
