// src/content/journal.js
// Northbound — Journal page copy
// Source of truth: Northbound_Site_Copy_v2.md, §8 (Journal)
//
// Consumers: PageHeaderEditorial, JournalIndexGrid.

// Component: PageHeaderEditorial
export const pageHeader = {
  eyebrow: '05 \u00B7 JOURNAL',
  headline: {
    desktop: 'STUDIO JOURNAL ',
    mobile: 'STUDIO JOURNAL',
  },
  subParagraph:
    'Long-form writing about brand, the outdoors, and the work of building one inside the other. Published when there\u2019s something worth saying.',
}

// Component: JournalIndexGrid
// 2 articles — 2 columns on desktop, 1 on mobile.
// Shape mirrors home.js journalPreview.articles: { slug, category, headline, date, image, excerpt }.
// Slugs match home.js exactly.
export const articles = [
  {
    slug: 'outdoor-industry-redesigning-same-logo',
    category: 'ESSAY',
    headline: 'Why the outdoor industry keeps redesigning the same logo.',
    date: 'March 2026',
    image: { src: '/images/journal/journal1.png', alt: 'Why the outdoor industry keeps redesigning the same logo' },
    excerpt:
      'A category-wide habit, examined. Mountains, sans-serifs, and the gravitational pull of the obvious.',
  },
  {
    slug: 'guide-service-since-1962',
    category: 'CASE NOTE',
    headline: 'Building a brand system for a guide service that\u2019s been running since 1962.',
    date: 'February 2026',
    image: { src: '/images/journal/journal2.png', alt: 'Building a brand system for a guide service since 1962' },
    excerpt:
      'What changes when the brand is older than most of its customers.',
  },
]
