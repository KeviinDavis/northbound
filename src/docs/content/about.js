// src/content/about.js
// Northbound — About page copy
// Source of truth: Northbound_Site_Copy_v2.md, §7 (About)
//
// Consumers: PageHeaderEditorial, LongFormSection, FounderProfileSplit,
//            BeliefsList, StudioInfoBlock.

// Component: PageHeaderEditorial
export const pageHeader = {
  eyebrow: {
    left: '04 \u00B7 ABOUT',
    right: {
      desktop: 'PORTLAND, OR \u00B7 EST. 2019',
      mobile: 'EST. 2019',
    },
  },
  headline: {
    desktop: 'A STUDIO FOR ONE INDUSTRY.\nTHE OUTDOORS.',
    mobile: 'THE ONE STUDIO FOR\nTHE OUTDOORS.',
  },
  subParagraph:
    'Northbound is a Portland design studio working with outdoor companies. We started in 2019 with a narrow idea \u2014 design for one industry, and only that industry \u2014 and seven years in, the thesis has held.',
}

// Component: LongFormSection
// §7.2 — Centered narrow column, magazine-style.
export const studioOrigin = {
  eyebrow: 'THE STUDIO',
  headline: {
    desktop: 'We started inside the industry we now serve.',
    mobile: 'We started inside the industry we now serve.',
  },
  body: [
    'Northbound was founded by Maren Hollis in 2019, after a decade designing gear and apparel for outdoor brands. The studio\u2019s first office was a corner of a screen-printing shop in Northeast Portland. The second was a converted woodworking space three blocks east. The current studio is in the same neighborhood. We haven\u2019t moved far.',
    'The thesis hasn\u2019t changed either. Northbound works with outdoor companies \u2014 gear makers, apparel labels, guide services, retailers, and the occasional nonprofit \u2014 because depth beats breadth when you actually know a category. Our clients don\u2019t have to explain what a softshell is, or why the seam placement on a pack matters, or what makes one trail brand feel honest and another feel like a costume. We already know.',
    'The work is brand-first \u2014 strategy, identity, and digital. It always starts from the product, because that\u2019s where the founder started.',
  ],
}

// Component: FounderProfileSplit
// §7.3 — Two columns: portrait left, copy right.
export const founder = {
  eyebrow: 'THE FOUNDER',
  headline: {
    desktop: 'Maren Hollis.',
    mobile: 'Maren Hollis.',
  },
  body: [
    'Maren spent the first years of her career at Foothill Supply Co., a small Portland outdoor brand where she did everything \u2014 designed packs and softgoods, wrote the catalog, shot the lookbook. From there she moved to Heyburn, where she led product design across technical apparel and hardgoods for nearly a decade.',
    'She opened Northbound in 2019 with a single thesis: design for the outdoor industry, and only the outdoor industry. The studio\u2019s editorial sensibility \u2014 the typography, the restraint, the way the work reads \u2014 comes directly from those years inside the catalog and the gear room.',
    'She still sketches every brand by hand before it goes digital.',
  ],
  portrait: {
    src: null, // TODO: founder portrait — working/candid, studio environment
    alt: 'Maren Hollis, founder of Northbound',
  },
}

// Component: BeliefsList
// §7.4
export const beliefs = {
  eyebrow: 'WHAT WE BELIEVE',
  headline: {
    desktop: 'A few things we hold to.',
    mobile: 'A few things we hold to.',
  },
  items: [
    {
      number: '01',
      title: 'DEPTH BEATS BREADTH.',
      body:
        'We work with one industry because knowing it well changes the work. There\u2019s no version of "we also do outdoor" that produces the same result.',
    },
    {
      number: '02',
      title: 'THE BRAND STARTS AT THE PRODUCT.',
      body:
        'Every good outdoor brand starts with something physical \u2014 a pack, a parka, a route, a place. We build out from there.',
    },
    {
      number: '03',
      title: 'RESTRAINT IS A FEATURE.',
      body:
        'The industry is loud enough already. Our work tends toward quiet because clarity is harder than ornament.',
    },
    {
      number: '04',
      title: 'WE DON\u2019T DO COSTUME.',
      body:
        'There\u2019s a way of writing about the outdoors that sounds like it\u2019s auditioning for a magazine cover. We don\u2019t do that. The brands we admire don\u2019t either.',
    },
    {
      number: '05',
      title: 'SCOPE IS A KINDNESS.',
      body:
        'Tight scopes make better work and better relationships. Most engagements are eight to sixteen weeks. We say no often.',
    },
  ],
}

// Component: StudioInfoBlock
// §7.5 — Three columns on desktop, stacked on mobile. Reads like a colophon.
export const studioColophon = {
  eyebrow: 'STUDIO',
  headline: 'STUDIO INFORMATION.',
  location: {
    label: 'LOCATION',
    lines: [
      'Northbound Studio',
      'Northeast Portland, Oregon',
      'By appointment',
    ],
  },
  team: {
    label: 'TEAM',
    lines: [
      'Maren Hollis, Founder & Creative Director',
      'Plus a rotating cast of trusted collaborators \u2014 designers, photographers, and writers who\u2019ve been part of the studio\u2019s work over the years.',
    ],
  },
  recognition: {
    label: 'RECOGNITION',
    lines: [
      'Communication Arts',
      'Brand New',
      'Type Directors Club',
      'AIGA 50 Books / 50 Covers',
      'Print Magazine',
      'The Webby Awards',
    ],
  },
}
