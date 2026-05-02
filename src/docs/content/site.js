// src/content/site.js
// Northbound — Global content
// Source of truth: Northbound_Site_Copy_v2.md, §3 (Global Elements)
//
// Consumers: SiteHeader, SiteFooter, FooterCTA, app metadata.
// Page-level content lives in the per-page content files.

export const meta = {
  siteTitle: 'Northbound — A Design Studio for the Outdoors',
  description:
    'Northbound is a Portland design studio building brands for outdoor companies — gear, apparel, guide services, and the people who make them.',
  // Open Graph image: studio mark on Bone background, full-bleed.
  // TODO: og image asset path once final mark is designed
  ogImage: null,
}

export const wordmark = {
  // Top-left of SiteHeader. Links to homepage.
  text: 'Northbound',
  registeredMark: true,
  href: '/',
}

export const nav = {
  // Top-right of SiteHeader. Same five links on mobile (full-screen overlay).
  links: [
    { label: 'Work', href: '/work' },
    { label: 'Services', href: '/services' },
    { label: 'About', href: '/about' },
    { label: 'Journal', href: '/journal' },
    { label: 'Contact', href: '/contact' },
  ],
}

export const footerCTA = {
  // Global component. Sits above SiteFooter on every page EXCEPT Contact.
  // Locked headline — preserved across versions.
  eyebrow: 'Let\u2019s work',
  headline: {
    desktop: 'We would love to hear from you. Let\u2019s work \u2014 together.',
    mobile: 'We would love to hear from you. Let\u2019s work \u2014 together.',
  },
  cta: {
    label: 'Start a project',
    href: '/contact',
  },
}

export const footer = {
  // 3 columns on desktop, stacked on mobile.
  columns: {
    studio: {
      label: 'Studio',
      lines: ['Northbound \u00AE', 'Portland, Oregon', 'Established 2019'],
    },
    pages: {
      label: 'Pages',
      // Mirrors nav.links — kept duplicated so footer can evolve independently.
      links: [
        { label: 'Work', href: '/work' },
        { label: 'Services', href: '/services' },
        { label: 'About', href: '/about' },
        { label: 'Journal', href: '/journal' },
        { label: 'Contact', href: '/contact' },
      ],
    },
    connect: {
      label: 'Connect',
      links: [
        { label: 'Instagram', href: null }, // TODO: confirm Instagram URL
        { label: 'LinkedIn', href: null }, // TODO: confirm LinkedIn URL
        { label: 'hello@northbound.studio', href: 'mailto:hello@northbound.studio' },
      ],
    },
  },
  bottomRow: {
    left: '\u00A9 2026 Northbound Studio',
    right: 'Built in Portland',
  },
}
