// src/content/home.js
// Source: Northbound_Site_Copy_v2.md §4
// Cross-checked against: Northbound__Site_PDF.pdf (desktop), Northbound__Mobile_Design_Pass__375px.pdf (mobile)
//
// Conventions: plain JS, ES named exports, { desktop, mobile } headlines always (even if identical),
// no shared CTA dictionary, curly apostrophes and em dashes preserved, multi-paragraph bodies as arrays,
// images null with TODO comments, kebab-case slugs matching work.js / journal.js where they appear in both.
//
// FooterCTA copy lives in site.js, not here. Meta lives in site.js (homepage uses the global default).

// Component: HeroEditorial
// Source: v2 §4.1
export const hero = {
  eyebrow: "NORTHBOUND ® · PORTLAND, OREGON · EST. 2019",
  headline: {
    desktop: "BUILT,\nUSED AND\nBRANDED.",
    mobile: "BUILT,\nUSED AND\nBRANDED.",
  },
  subHeadline: "A design studio for the outdoors.",
  body: "Working with gear companies, apparel labels, guide services, and the people who make them. Branding, identity, and digital \u2014 that\u2019s the whole offer.",
  ctas: [
    { label: "See the work \u2192", href: "/work" },
    { label: "What we do \u2192", href: "/services" },
  ],
};

// Component: FeaturedProjectFull
// Source: v2 §4.2
export const featuredFull = {
  slug: "cordilline",
  name: "Cordilline",
  category: "Apparel \u00B7 Identity & Web",
  year: "2025",
  caption: "A heritage apparel brand, modernized without losing its weight.",
  cta: { label: "View project \u2192", href: "/work/cordilline" },
  // TODO: Cordilline marquee image — full-bleed, deep forest tone overlay (Soft Ink range).
  image: null,
};

// Component: FeaturedProjectGrid (cols=2) wrapping ProjectTile
// Source: v2 §4.3
export const featuredGrid = {
  cols: 2,
  projects: [
    {
      slug: "field-provisions",
      name: "Field Provisions",
      category: "Food & Outdoor Retail \u00B7 Brand System",
      year: "2024",
      caption: "A trail food company built around one idea \u2014 you eat better when you carry less.",
      cta: { label: "View project \u2192", href: "/work/field-provisions" },
      // TODO: Field Provisions tile image — 1:1 desktop, 4:5 mobile, warm-neutral overlay.
      image: null,
    },
    {
      slug: "tidewater-hospitality",
      name: "Tidewater Hospitality",
      category: "Guide Services \u00B7 Identity & Digital",
      year: "2025",
      caption: "A new identity for a third-generation Oregon coast outfitter.",
      cta: { label: "View project \u2192", href: "/work/tidewater-hospitality" },
      // TODO: Tidewater Hospitality tile image — 1:1 desktop, 4:5 mobile, warm-neutral overlay.
      image: null,
    },
  ],
};

// Component: AboutSplit (with cta)
// Source: v2 §4.4
export const aboutPreview = {
  eyebrow: "ABOUT THE STUDIO",
  headline: {
    desktop: "A studio for one industry. On purpose.",
    mobile: "A studio for one industry. On purpose.",
  },
  body: [
    "Northbound was founded in 2019 by Maren Hollis, after a decade designing gear and apparel for outdoor brands. The studio works with one kind of client \u2014 outdoor companies \u2014 because depth beats breadth when you actually know a category.",
    "Branding, identity, and digital. Project-based engagements. Selective by design.",
  ],
  cta: { label: "Meet the studio \u2192", href: "/about" },
  imageSide: "right",
  // TODO: Studio environment photo — candid, warm neutral palette, Northeast Portland workspace.
  // Not a portrait. Per copy doc §4.4 notes.
  image: null,
  imageMeta: "STUDIO.JPG — 2026",
  imageCaption: "STUDIO ENVIRONMENT, NORTHEAST PORTLAND",
};

// Component: LogoWallDense
// Source: v2 §4.5
export const logoWall = {
  eyebrow: "SELECT CLIENTS \u00B7 2019 \u2014 PRESENT",
  // 12 logos. 4 cols desktop, 2 cols mobile. Monochrome Ink. Static placeholders.
  logos: [
    { slug: "cordilline", name: "Cordilline" },
    { slug: "field-provisions", name: "Field Provisions" },
    { slug: "tidewater-hospitality", name: "Tidewater Hospitality" },
    { slug: "common-path", name: "Common Path" },
    { slug: "marlow-studies", name: "Marlow Studies" },
    { slug: "heron-and-wells", name: "Heron & Wells" },
    { slug: "saltwater-society", name: "Saltwater Society" },
    { slug: "boulder-cache", name: "Boulder Cache" },
    { slug: "tarn-goods", name: "Tarn Goods" },
    { slug: "forest-table", name: "Forest Table" },
    { slug: "northern-bellwether", name: "Northern Bellwether" },
    { slug: "lithic-trail-co", name: "Lithic Trail Co." },
  ],
};

// Component: LogoWallCycle
// Source: v2 §4.5 (cycling variant)
export const logoWallCycle = {
  eyebrow: "SELECT CLIENTS \u00B7 2019 \u2014 PRESENT",
  shuffle: false,
  loopDelay: 1.5,
  duration: 0.9,
  logos: [
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea9d37fbceb3be49cb_logo-webflow.svg", alt: "Webflow" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea48d4fb0c708dd1dc_logo-microsoft.svg", alt: "Microsoft" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea9ba384ff47fa5d51_logo-asana.svg", alt: "Asana" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370eaec918fbd4a0acc12_logo-snapchat.svg", alt: "Snapchat" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea155a551c08692a03_logo-google.svg", alt: "Google" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370eafdf2b295d65f9450_logo-bluesky.svg", alt: "Bluesky" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea68a433ee5808ed90_logo-codepen.svg", alt: "CodePen" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea2ebc0415055d04f3_logo-linkedin.svg", alt: "LinkedIn" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea7699561e6f9f008f_logo-android.svg", alt: "Android" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea753f2afe2f6b036f_logo-apple.svg", alt: "Apple" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370eabec1e0c00348b5ed_logo-twitter.svg", alt: "Twitter" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea0e0e1dc81a9b5799_logo-osmo.svg", alt: "Osmo" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea36c91584afe43e2d_logo-medium.svg", alt: "Medium" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370ea87b05cdce0387084_logo-eventbrite.svg", alt: "Eventbrite" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370eaf4465d763c2f9b2a_logo-behance.svg", alt: "Behance" },
    { src: "https://cdn.prod.website-files.com/68836e3f51ac98fec14ceed2/688370eaec1d445957d7e3a1_logo-chatgpt.svg", alt: "ChatGPT" },
    { src: "https://cdn.simpleicons.org/spotify/white", alt: "Spotify" },
    { src: "https://cdn.simpleicons.org/github/white", alt: "GitHub" },
    { src: "https://cdn.simpleicons.org/netflix/white", alt: "Netflix" },
    { src: "https://cdn.simpleicons.org/airbnb/white", alt: "Airbnb" },
    { src: "https://cdn.simpleicons.org/dropbox/white", alt: "Dropbox" },
    { src: "https://cdn.simpleicons.org/figma/white", alt: "Figma" },
    { src: "https://cdn.simpleicons.org/notion/white", alt: "Notion" },
    { src: "https://cdn.simpleicons.org/stripe/white", alt: "Stripe" },
    { src: "https://cdn.simpleicons.org/shopify/white", alt: "Shopify" },
    { src: "https://cdn.simpleicons.org/discord/white", alt: "Discord" },
    { src: "https://cdn.simpleicons.org/twitch/white", alt: "Twitch" },
    { src: "https://cdn.simpleicons.org/pinterest/white", alt: "Pinterest" },
    { src: "https://cdn.simpleicons.org/youtube/white", alt: "YouTube" },
    { src: "https://cdn.simpleicons.org/uber/white", alt: "Uber" },
  ],
};

// Component: AwardsTable
// Source: v2 §4.6
export const awards = {
  eyebrow: "AWARDS & RECOGNITIONS",
  headline: {
    desktop: "Selected work, recognized.",
    mobile: "Selected work, recognized.",
  },
  entries: [
    { year: "2025", award: "Communication Arts \u2014 Typography Annual" },
    { year: "2025", award: "Brand New \u2014 Noted (Cordilline)" },
    { year: "2024", award: "Type Directors Club \u2014 Certificate of Typographic Excellence" },
    { year: "2024", award: "AIGA 50/50 Books \u2014 Honorable Mention" },
    { year: "2023", award: "Communication Arts \u2014 Design Annual" },
    { year: "2023", award: "The Webby Awards \u2014 Nominee, Outdoor & Adventure" },
    { year: "2022", award: "Brand New \u2014 Noted (Field Provisions)" },
    { year: "2021", award: "Print Magazine \u2014 Regional Design Annual" },
  ],
};

// Component: JournalPreviewGrid (cols=3, showExcerpt=false) wrapping JournalCard
// Source: v2 §4.7
export const journalPreview = {
  eyebrow: "FROM THE JOURNAL",
  headline: {
    desktop: "Notes from the studio.",
    mobile: "Notes from the studio.",
  },
  cols: 3,
  showExcerpt: false,
  articles: [
    {
      slug: "outdoor-industry-redesigning-same-logo",
      category: "ESSAY",
      headline: "Why the outdoor industry keeps redesigning the same logo.",
      date: "March 2026",
      // TODO: Essay cover image — March 2026.
      image: null,
    },
    {
      slug: "guide-service-since-1962",
      category: "CASE NOTE",
      headline: "Building a brand system for a guide service that\u2019s been running since 1962.",
      date: "February 2026",
      // TODO: Case note cover image — February 2026.
      image: null,
    },
    {
      slug: "one-industry-on-purpose",
      category: "STUDIO",
      headline: "On working with one industry, on purpose.",
      date: "January 2026",
      // TODO: Studio cover image — January 2026.
      image: null,
    },
  ],
  cta: { label: "Read the journal \u2192", href: "/journal" },
};
