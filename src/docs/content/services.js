// src/content/services.js
// Northbound — Services page copy
// Source of truth: Northbound_Site_Copy_v2.md, §6 (Services)
//
// Consumers: PageHeaderEditorial, ServiceBlockSplit, ProcessSection, TextBlockNarrow.

// Component: PageHeaderEditorial
export const pageHeader = {
  eyebrow: {
    left: '03 \u00B7 SERVICES',
    right: {
      desktop: 'THREE PRACTICES \u00B7 ONE INDUSTRY',
      mobile: 'THREE PRACTICES',
    },
  },
  headline: {
    desktop: 'DIGITAL BRANDING,AND IDENTITY FOR THE OUTDOORS.',
    mobile: 'DIGITAL BRANDING,\nAND IDENTITY\nFOR THE OUTDOORS',
  },
  subParagraph:
    'Northbound runs a small offer on purpose. Three core practices, applied to one kind of client. Every engagement starts with the brand and ends with the build.',
}

// Component: ServiceBlockSplit
// §6.2 — Image right: brand system artifacts.
export const serviceBranding = {
  eyebrow: '01 \u00B7 BRANDING',
  headline: {
    desktop: 'The strategy and the system.',
    mobile: 'The strategy and the system.',
  },
  body:
    'Brand work at Northbound is research-led and product-aware. We start by understanding the company \u2014 what it makes, who buys it, where it sits in the category, and what\u2019s actually true about it. From there, we build the system: positioning, voice, naming when needed, and the visual identity that holds it all.',
  capabilities: [
    'Brand strategy & positioning',
    'Audience and category research',
    'Naming',
    'Visual identity systems',
    'Voice and copy direction',
    'Brand guidelines',
  ],
}

// Component: ServiceBlockSplit
// §6.3 — Image left (alternating layout).
export const serviceIdentityPrint = {
  eyebrow: '02 \u00B7 IDENTITY & PRINT',
  headline: {
    desktop: 'The artifacts that carry the brand.',
    mobile: 'The artifacts that carry the brand.',
  },
  body:
    'Logos, marks, packaging, lookbooks, hangtags, retail signage, catalogs. The objects a brand actually shows up as. Northbound brings a product designer\u2019s eye to brand artifacts \u2014 every detail is treated as something that has to function in the world.',
  capabilities: [
    'Logos and marks',
    'Packaging design',
    'Print collateral and editorial',
    'Catalogs and lookbooks',
    'Retail signage and environments',
    'Hangtags and product graphics',
  ],
}

// Component: ServiceBlockSplit
// §6.4
export const serviceDigital = {
  eyebrow: '03 \u00B7 DIGITAL',
  headline: {
    desktop: 'Websites that hold up.',
    mobile: 'Websites that hold up.',
  },
  body:
    'Brand websites, ecommerce, and digital systems built on modern frameworks. Northbound writes the copy, designs the system, and ships the build. We keep digital scope tight \u2014 most clients don\u2019t need a hundred pages, they need ten that work.',
  capabilities: [
    'Brand websites',
    'Shopify and headless ecommerce',
    'Editorial and content sites',
    'Design systems and component libraries',
    'Copy and content strategy',
    'Performance and accessibility',
  ],
}

// Component: ProcessSection
// §6.5 — Horizontal scroll on desktop, vertical stack on mobile.
export const process = {
  eyebrow: 'HOW WE WORK',
  headline: {
    desktop: 'Four phases. No fixed timeline.',
    mobile: 'Four phases. No fixed timeline.',
  },
  phases: [
    {
      number: '01',
      title: 'Intake',
      body:
        'We start with a conversation. What the company makes, what it needs, what\u2019s already working. Most engagements begin with a one-page brief.',
    },
    {
      number: '02',
      title: 'Strategy',
      body:
        'The thinking before the design. Positioning, voice, audience, and the framework the rest of the work hangs on.',
    },
    {
      number: '03',
      title: 'Design',
      body:
        'The brand system, identity artifacts, and digital design \u2014 built in parallel where it makes sense, in sequence where it doesn\u2019t.',
    },
    {
      number: '04',
      title: 'Build & Hand-off',
      body:
        'The website goes live. The brand guidelines get delivered. The team gets trained on the system. We stay in touch.',
    },
  ],
}

// Component: TextBlockNarrow
// §6.6
export const engagementNote = {
  eyebrow: 'ON ENGAGEMENTS',
  headline: {
    desktop: 'A note on engagements.',
    mobile: 'A note on engagements.',
  },
  body:
    'Northbound takes on roughly twelve projects a year. We don\u2019t do retainer work, ongoing content, or paid media. Most engagements run between eight and sixteen weeks, scoped to the project and the client. If we\u2019re not the right fit, we\u2019ll say so.',
}
