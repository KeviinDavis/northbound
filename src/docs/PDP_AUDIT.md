# PDP Audit — As-Built State After Cordilline

> **Generated:** 2026-05-10 | **Cleaned:** 2026-05-10
> **Scope:** Read-only audit of the Project Detail Page template as implemented during the Cordilline build, updated to reflect a cleanup pass that removed dead fields, dead CSS, and dead components.
> **Purpose:** Canonical reference for the spec writer when generating content files and component specs for Field Provisions and Tidewater Hospitality.

---

## 1. Content File Shape

**File:** `src/content/projects/cordilline.js`

The file exports a named `project` object and a default export of the same object.

```js
/**
 * @typedef {Object} Project
 *
 * @property {string} slug
 *   — URL segment. Used by the dynamic route loader in page.js.
 *
 * @property {Object} header
 * @property {string} header.label
 *   — Small descriptor above the headline (e.g. "Work overview").
 * @property {string} header.headline
 *   — Single string. NOT a { desktop, mobile } pair.
 * @property {string[]} header.tagline
 *   — Array of strings. Each string renders as its own <span> block.
 *     Cordilline has 2 lines. The page maps over the array, so length is flexible.
 *
 * @property {Object} heroMedia
 * @property {string} heroMedia.src
 * @property {string} heroMedia.alt
 *
 * @property {Object} meta
 * @property {string} meta.client
 * @property {string} meta.year
 * @property {string[]} meta.scope
 *   — Array of strings. ProjectMeta joins them with ", ". Rendered with label "Key Focus:".
 *
 * @property {Object} intro
 * @property {string[]} intro.body
 *   — Array of paragraph strings. Cordilline has 3.
 *     All but the last paragraph get a bottom margin class.
 *
 * @property {Object[]} imagePair
 *   — Exactly 2 items. Rendered as stacked full-width images.
 * @property {string} imagePair[].src
 * @property {string} imagePair[].alt
 *
 * @property {Object} insight
 * @property {string} insight.eyebrow
 *   — Rendered uppercase via CSS (.offsetLabel).
 * @property {string} insight.body
 *   — Single string, not an array.
 * @property {Object[]} insight.mediaPair
 *   — Exactly 2 items. Rendered as a 2-column grid at 3/4 aspect ratio.
 * @property {string} insight.mediaPair[].src
 * @property {string} insight.mediaPair[].alt
 *
 * @property {Object[]} heroPair
 *   — Exactly 2 items. Each renders as its own full-width <Section> at 16/9.
 * @property {string} heroPair[].src
 * @property {string} heroPair[].alt
 *
 * @property {Object} range
 * @property {string} range.eyebrow
 * @property {string} range.body
 * @property {number} range.cols
 *   — Passed directly to <MediaGrid cols={}>. Cordilline uses 2.
 * @property {Object[]} range.items
 *   — Array length should match cols (or be a multiple of cols).
 * @property {Object} range.items[].media
 * @property {string} range.items[].media.src
 * @property {string} range.items[].media.alt
 *
 * @property {Object} closingLine
 * @property {string} closingLine.body
 *   — Single string. Rendered in a narrow container.
 */
```

### Key Differences from Expectations

| Observation | Detail |
|---|---|
| `header.headline` is a plain string | Not a `{ desktop, mobile }` pair. The home.js content file uses `{ desktop, mobile }` for headlines, but the PDP content does not. |
| `header.tagline` is a `string[]` | Not a single string or a desktop/mobile pair. The page maps over the array to produce block-level `<span>` elements. |
| `insight` is a single object | Not an array of insights. The original spec may have planned multiple insights; the build collapsed to one. |
| No `{ desktop, mobile }` pairs anywhere | Every text field in the PDP content is either a plain string or a `string[]`. Desktop/mobile headline switching is not used. |

---

## 2. Render Order + Section Inventory

**File:** `src/app/work/[slug]/page.js` (lines 37–197)

The page is a server component (`async function ProjectPage`). It dynamically imports the content module from `src/content/projects/[slug].js` via a `projectModules` lookup map (line 13–15).

### Render Order (top to bottom)

| # | JSX Comment | Content Key(s) | Component(s) | Conditional? |
|---|---|---|---|---|
| 1 | Section 01 — Site Header | (none — global) | `<Header variant="overlay" />` | Always |
| 2 | Section 02 — Project Header | `header.label`, `header.headline`, `header.tagline` | Inline JSX within `<Section>` + `<Container>` | Always |
| 3 | Section 03 — Hero Media | `heroMedia.src`, `heroMedia.alt` | `<Media>` with `aspectRatio="16/9"` and `priority` | Always |
| 4 | Section 05 — Meta + Intro | `meta.*`, `intro.body` | `<ProjectMeta>` + inline paragraph loop | Always |
| 5 | Section 06 — Image Pair | `imagePair[0]`, `imagePair[1]` | Two `<Media>` in a flex column | Always |
| 6 | Section 08 — Insight | `insight.eyebrow`, `insight.body`, `insight.mediaPair[0]`, `insight.mediaPair[1]` | Inline offset text block + 2-col `<Media>` grid at `3/4` | Always |
| 7 | Section 10 — Identity Hero (first) | `heroPair[0]` | `<Media>` at `16/9` | Always |
| 8 | (continued) — Identity Hero (second) | `heroPair[1]` | `<Media>` at `16/9` with `.heroSection` (zero padding) | Always |
| 9 | Section 11 — Range | `range.eyebrow`, `range.body`, `range.cols`, `range.items` | Inline offset text block + `<MediaGrid>` | Always |
| 10 | Section 14 — Closing Line | `closingLine.body` | Inline `<p>` in `<Container variant="narrow">` | Always |
| 11 | Section 15 — Footer CTA | (global — `footerCTA` + `email` from site.js) | `<FooterCTA>` | Always |

### Sections From the Original 16-Section Plan That Are Missing

The JSX comments skip section numbers 04, 07, 09, 12, 13, and 16. Based on the code:

| Missing Section | Evidence | Notes |
|---|---|---|
| Section 04 | Number skipped in comments | Likely merged into Section 03 or removed. |
| Section 07 | Number skipped | Insight sections may have been consolidated from multiple to one. |
| Section 09 — Pull Quote | Number skipped | Removed from render. No content key for it exists. Orphaned CSS was deleted in cleanup pass. |
| Section 12 | Number skipped | Likely a second insight or showcase that was cut. |
| Section 13 | Number skipped | Removed from render. Orphaned CSS was deleted in cleanup pass. |
| Section 16 | Number skipped | Likely a navigation/pagination section that was cut. |

### Conditional Rendering

**None.** Every section renders unconditionally. There are no `{project.foo && ...}` guards. If a content key is missing, the page will throw at runtime. The spec writer must supply every key listed in Section 1.

---

## 3. New Components — Actual Prop API

### ProjectMeta

**File:** `src/components/ProjectMeta/index.jsx`

```js
/**
 * @param {Object} props
 * @param {Object} props.meta
 * @param {string} props.meta.client   — Rendered with label "Client:"
 * @param {string} props.meta.year     — Rendered with label "Year:"
 * @param {string|string[]} props.meta.scope — Rendered with label "Key Focus:". If array, joined with ", ".
 *
 *   The component's internal `rows` config maps:
 *     { label: "Client",    key: "client" }
 *     { label: "Year",      key: "year" }
 *     { label: "Key Focus", key: "scope" }
 */
```

**Rendering details:**
- Uses a `<dl>` with `<dt>` (label) and `<dd>` (value).
- Array values are joined with `", "`.
- No default values. Missing keys will render `undefined`.

### MediaGrid

**File:** `src/components/MediaGrid/index.jsx`

```js
/**
 * @param {Object} props
 * @param {number} props.cols       — Number of columns. Maps to CSS class `.cols2` or `.cols3`.
 * @param {Object[]} props.items
 * @param {Object} props.items[].media
 * @param {string} props.items[].media.src
 * @param {string} props.items[].media.alt
 *
 * Layout:
 *   - Mobile (<768px): single-column flex stack, gap --space-2xl.
 *   - Desktop (≥768px): CSS grid, cols determined by `.cols{n}` class.
 *   - Only `.cols2` and `.cols3` are defined in CSS. Other values will fall back to single-column.
 *
 * No default values. If `cols` is omitted, no column class is applied (grid with no template = single column).
 * If `items` is omitted or empty, renders an empty <ul>.
 */
```

### FooterCTA (pre-existing, used by PDP)

**File:** `src/components/FooterCTA/index.jsx`

```js
/**
 * @param {Object} props
 * @param {Object} props.footerCTA
 * @param {string} props.footerCTA.eyebrow
 * @param {Object} props.footerCTA.headline
 * @param {string} props.footerCTA.headline.desktop
 * @param {string} props.footerCTA.headline.mobile
 * @param {Object} props.footerCTA.cta
 * @param {string} props.footerCTA.cta.label
 * @param {string} props.footerCTA.cta.href
 * @param {string} props.email
 * @param {string} [props.variant="default"]
 */
```

Not new — existed before the PDP build. Included for completeness since the PDP template uses it.

---

## 4. Route-Private Components

**Directory:** `src/app/work/[slug]/_components/` — **deleted during cleanup pass.**

No route-private components exist. The `SplitInsight` component that previously lived here was unused dead code and has been removed. All PDP rendering is handled by shared components (`ProjectMeta`, `MediaGrid`, `FooterCTA`) and inline JSX in `page.js`.

---

## 5. Styling Deviations

### Breakpoint Strategy

**CLAUDE.md specifies:** Desktop-first, base styles target desktop, `max-width` media queries to adapt down.

**Actual implementation:** All media queries in PDP CSS use `min-width: 768px` — this is **mobile-first**, the opposite of the spec.

Files affected:
- `src/app/work/[slug]/page.module.css`
- `src/components/MediaGrid/MediaGrid.module.css`

All use `@media (min-width: 768px)`. The single breakpoint value `768px` is consistent, but the direction is inverted from the CLAUDE.md spec.

### Token Usage

All spacing, color, and typography values reference CSS custom properties from `tokens.css`. **No hardcoded hex colors found.** No hardcoded pixel font sizes.

One hardcoded value noted:

| File | Line | Value | Note |
|---|---|---|---|
| `page.module.css` | 21 | `border-top: 1px solid var(--color-stroke)` | The `1px` is hardcoded. Acceptable — there is no `--border-width` token. |
| `page.module.css` | 108 | `max-width: 45rem` | Hardcoded max-width on `.introBody`. No token exists for this. |
| `page.module.css` | 148 | `padding-left: 35%` | Hardcoded percentage offset for `.offsetTextBlock`. No token for this. |
| `page.module.css` | 171 | `max-width: 25rem` | Hardcoded max-width on `.offsetTextBlockLeft`. |

These are layout constraints, not visual tokens, and are reasonable exceptions.

### Class Name Conventions

- Page-level styles use camelCase: `.headerSection`, `.backLink`, `.metaIntroGrid`, etc.
- Component-level styles use camelCase: `.root`, `.row`, `.label`, `.grid`, `.item`, etc.
- Dynamic class composition in MediaGrid: `` `${styles.grid} ${styles[`cols${cols}`]}` `` — template literal to build `cols2`, `cols3`, etc.

---

## 6. Image Asset Conventions

**Directory:** `public/images/work/Cordilline/`

### Folder Naming

- Capital `C` in `Cordilline` — matches the brand name's proper casing.
- Convention: `/public/images/work/{BrandName}/` with PascalCase folder name.

### File Inventory

| Filename | Referenced In | Extension | Notes |
|---|---|---|---|
| `Cordilline.webp` | — | `.webp` | Not referenced in `cordilline.js`. May be a logo/thumbnail. |
| `CordillineBundle.webp` | `range.items[0].media.src` | `.webp` | |
| `CordillineCatelog.webp` | `heroPair[0].src` | `.webp` | Note: "Catelog" is a misspelling of "Catalog". |
| `CordillineEditorial.webp` | `heroPair[1].src` | `.webp` | |
| `CordillineFeature.webp` | `work.js` (index card) | `.webp` | Not in `cordilline.js`. Used only for the work grid tile. |
| `CordillineFocus.webp` | `heroMedia.src` | `.webp` | |
| `CordillineHero.webp` | `imagePair[1].src` | `.webp` | |
| `CordillineLogo.webp` | — | `.webp` | Not referenced in `cordilline.js`. |
| `CordillineSewing.webp` | — | `.webp` | Not referenced in `cordilline.js`. |
| `CordillineStorefront.webp` | `imagePair[0].src` | `.webp` | |
| `CordillineTagLine.webp` | `insight.mediaPair[0].src` | `.webp` | |
| `CordillineVibe.webp` | `range.items[1].media.src` | `.webp` | |
| `CordillineWorkshop.webp` | `insight.mediaPair[1].src` | `.webp` | |
| `CORDILLINE.png` | `home.js` `featuredFull.image` | `.png` | **Non-webp.** Used for the homepage featured card. |
| `CORDILLINEbeach2.png` | — | `.png` | Not referenced anywhere. Untracked file (git status shows `??`). |

### Naming Convention

- PascalCase prefix: `Cordilline` + descriptive suffix (e.g., `Focus`, `Bundle`, `Editorial`).
- All PDP images are `.webp`. The only `.png` files are for the homepage featured card (`CORDILLINE.png`) and an unreferenced file (`CORDILLINEbeach2.png`).
- No numbered filenames. Descriptive names only.

### Aspect Ratios Used

| Section | Aspect Ratio | Count |
|---|---|---|
| Hero Media (Section 03) | `16/9` | 1 image |
| Image Pair (Section 06) | `16/9` | 2 images |
| Insight Media (Section 08) | `3/4` | 2 images |
| Hero Pair (Sections 10) | `16/9` | 2 images |
| Range / MediaGrid (Section 11) | `4/5` | 2 images (hardcoded in MediaGrid) |

---

## 7. Changes to work.js / home.js

### work.js

**File:** `src/docs/content/work.js`

Cordilline entry (lines 28–37):

```js
{
  slug: 'cordilline',
  name: 'Cordilline',
  category: 'Apparel · Identity, Brand System, Web',
  tags: ['Identity', 'Brand System', 'Web'],
  year: '2025',
  caption: 'A heritage apparel brand, modernized without losing its weight.',
  image: { src: '/images/work/Cordilline/CordillineFeature.webp', alt: 'Cordilline feature' },
  video: null,
  gallery: [],
}
```

**Key observations:**
- The work index **duplicates** `name`, `category`, `year`, and `caption` — it does NOT pull from `cordilline.js`.
- `image` uses a separate asset (`CordillineFeature.webp`) not referenced in the PDP content.
- `image` is an `{ src, alt }` object, not a bare string.
- `tags` is an array used for filtering; not present in the PDP content.
- `video` and `gallery` are null/empty — reserved for future use.
- Each new project needs an entry here with all fields populated.

### home.js

**File:** `src/docs/content/home.js`

Cordilline appears in `featuredFull` (lines 29–37):

```js
export const featuredFull = {
  slug: "cordilline",
  name: "Cordilline",
  category: "Apparel · Identity & Web",
  year: "2025",
  caption: "A heritage apparel brand, modernized without losing its weight.",
  cta: { label: "View project →", href: "/work/cordilline" },
  image: "/images/work/Cordilline/CORDILLINE.png",
};
```

**Key observations:**
- `image` is a bare **string** here (not `{ src, alt }`). The `FeaturedProjectFull` component passes `content.name` as the `alt` prop.
- Uses a `.png` file, not `.webp`.
- `category` wording differs from `work.js` (`"Identity & Web"` vs `"Identity, Brand System, Web"`).
- `caption` matches `work.js` exactly.
- `cta` has `label` and `href`.
- Data is **fully duplicated** — no import from `cordilline.js` or `work.js`.

Field Provisions and Tidewater Hospitality already have placeholder entries in `featuredGrid.projects` (lines 43–64) with `image: null` and TODO comments. They also exist in `work.js` (lines 39–58) with `image: null`.

### Pattern for Next Two Projects

For each new project, the spec writer must produce:

1. **`src/content/projects/{slug}.js`** — Full PDP content matching the typedef in Section 1.
2. **Entry in `src/docs/content/work.js` `projects` array** — Duplicated summary fields + tile image.
3. **Entry in `src/docs/content/home.js`** — If featured: update `featuredGrid.projects[n]` with image and confirm field values.
4. **Register in `src/app/work/[slug]/page.js` `projectModules` map** — Add `'{slug}': () => import("@/content/projects/{slug}")`.

---

## 8. Open Bugs / Known Issues

### Breakpoint Direction Mismatch

All PDP media queries use `min-width` (mobile-first). CLAUDE.md specifies desktop-first with `max-width`. This is a systemic inconsistency across every CSS module in the PDP build.

### Non-webp Images

- `CORDILLINE.png` is used on the homepage featured card (`home.js:36`). All other project images are `.webp`.
- `CORDILLINEbeach2.png` exists in the asset folder but is unreferenced and untracked in git.

### Unreferenced Image Assets

The following `.webp` files exist on disk but are not referenced in any content file:

| Filename | Possible Use |
|---|---|
| `Cordilline.webp` | May be a small logo or thumbnail |
| `CordillineLogo.webp` | Logo asset, possibly for a section that was cut |
| `CordillineSewing.webp` | Workshop/detail shot, possibly for a section that was cut |

### No Missing Alt Text

All `<Media>` calls in `page.js` pass an `alt` prop sourced from content. No missing alt text.

### Heading Hierarchy

- `<h1>` — Project headline (Section 02, line 52)
- `<h2>` — FooterCTA headline (via component)
- No `<h2>` used for section eyebrows (they use `<p>`)
- Heading hierarchy is clean within the PDP.

### Accessibility Note

- The back link `← All Work` (line 45–47) uses `&larr;` as decorative text. It is a `<Link>` (renders `<a>`), which is correct.
- No `aria-label` on the back link, but the visible text is sufficient.
