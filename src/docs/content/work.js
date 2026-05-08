// src/content/work.js
// Northbound — Work page copy
// Source of truth: Northbound_Site_Copy_v2.md, §5 (Work)
//
// Consumers: PageHeaderEditorial, ProjectIndexGrid.

// Component: PageHeaderEditorial
export const pageHeader = {
  eyebrow: {
    left: '02 \u00B7 WORK',
    right: {
      desktop: '2019 \u2014 2026 \u00B7 09 PROJECTS',
      mobile: '09 PROJECTS',
    },
  },
  headline: {
    desktop: 'SEVEN YEARS. ONE INDUSTRY. SELECTED WORK FROM 2019 TO TODAY.',
    mobile: 'SEVEN YEARS. ONE INDUSTRY. SELECTED WORK.',
  },
  subParagraph:
    'Branding, identity, and digital for outdoor companies. Project-based, scoped, selective. Northbound takes on roughly twelve engagements a year.',
}

// Component: WorkGrid / WorkBlock
// Grid order matters — Cordilline, Field Provisions, and Tidewater lead.
export const projects = [
  {
    slug: 'cordilline',
    name: 'Cordilline',
    category: 'Apparel \u00B7 Identity, Brand System, Web',
    tags: ['Identity', 'Brand System', 'Web'],
    year: '2025',
    caption: 'A heritage apparel brand, modernized without losing its weight.',
    image: { src: '/images/work/Cordilline/CordillineFeature.webp', alt: 'Cordilline feature' },
    video: null,
    gallery: [],
  },
  {
    slug: 'field-provisions',
    name: 'Field Provisions',
    category: 'Food & Outdoor Retail \u00B7 Brand System, Packaging, Web',
    tags: ['Brand System', 'Packaging', 'Web'],
    year: '2024',
    caption: 'A trail food company built around carrying less and eating better.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'tidewater-hospitality',
    name: 'Tidewater Hospitality',
    category: 'Guide Services \u00B7 Identity, Digital, Print',
    tags: ['Identity', 'Digital', 'Print'],
    year: '2025',
    caption: 'A new identity for a third-generation Oregon coast outfitter.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'common-path',
    name: 'Common Path',
    category: 'Outdoor Nonprofit \u00B7 Brand System, Web',
    tags: ['Brand System', 'Web'],
    year: '2023',
    caption: 'A trail-stewardship nonprofit, rebuilt around the people who do the work.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'marlow-studies',
    name: 'Marlow Studies',
    category: 'Outdoor Media \u00B7 Identity, Editorial Design',
    tags: ['Identity', 'Editorial Design'],
    year: '2024',
    caption: 'A small-format magazine about long walks, slow rivers, and the people who write about them.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'heron-and-wells',
    name: 'Heron & Wells',
    category: 'Apparel \u00B7 Identity, Web',
    tags: ['Identity', 'Web'],
    year: '2022',
    caption: 'A waxed-canvas goods maker, repositioned for a second decade.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'saltwater-society',
    name: 'Saltwater Society',
    category: 'Outdoor Retail \u00B7 Brand System, Digital',
    tags: ['Brand System', 'Digital'],
    year: '2023',
    caption: 'A specialty surf and salt-water shop, treated like a magazine.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'boulder-cache',
    name: 'Boulder Cache',
    category: 'Climbing Gear \u00B7 Identity, Packaging',
    tags: ['Identity', 'Packaging'],
    year: '2021',
    caption: 'A small-batch climbing hardware company, built around one founder\u2019s notebook.',
    image: null,
    video: null,
    gallery: [],
  },
  {
    slug: 'tarn-goods',
    name: 'Tarn Goods',
    category: 'Hardgoods \u00B7 Identity, Web, Retail Environments',
    tags: ['Identity', 'Web', 'Retail Environments'],
    year: '2020',
    caption: 'An alpine goods brand, named after the lakes you only reach on foot.',
    image: null,
    video: null,
    gallery: [],
  },
]
