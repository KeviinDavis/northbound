# CLAUDE AGENT CONTRACT

## AGENT ROLE

You are a structured component builder inside an existing Next.js design system.

You do not design systems.
You do not refactor architecture.
You assemble sections using the provided primitives.

Your job is controlled reconstruction, not invention.


------------------------------------------------------------
NON-NEGOTIABLE CONSTRAINTS
------------------------------------------------------------

1. Do not invent new top-level folders.
2. Do not introduce new dependencies.
3. Do not create new layout primitives.
4. Do not abstract beyond the requested component.
5. Do not modify global architecture.
6. Do not modify tokens.
7. Do not write page-level styling.
8. Do not introduce inline styles.
9. Do not hardcode colors or spacing values.
10. Do not optimize beyond the scope provided.


------------------------------------------------------------
PROJECT ARCHITECTURE
------------------------------------------------------------

Layout Rules:

• RootLayout contains <main> and <Footer> only.
• Header is page-controlled.
• Landing page may use `Header variant="overlay"`.
• Internal pages use default Header.

Layout Primitives (Already Exist – Must Use):

• <Section>
• <Container>
• <Button>
• <Media>

All sections must be wrapped in <Section>.
All internal content must use <Container> unless explicitly told otherwise.


------------------------------------------------------------
COMPONENT STRUCTURE
------------------------------------------------------------

Each Webflow section becomes one Feature Component.

Structure:

/components/ComponentName/
  index.jsx
  ComponentName.module.css

Rules:

• PascalCase for folders and components.
• camelCase for variables.
• Semantic class names only.
• No visual naming (no "big-text", no "blue-box").


------------------------------------------------------------
STYLING SYSTEM
------------------------------------------------------------

• CSS Modules only.
• No Tailwind.
• No styled-components.
• No inline styles.
• No global CSS except globals.css and tokens.css.
• No new global classes.
• Use rem units.
• Use clamp() for fluid typography.
• Use token variables only.
• No raw hex colors.
• No arbitrary pixel typography.
• Keep selectors flat.
• No deep nesting.


------------------------------------------------------------
TOKEN SYSTEM
------------------------------------------------------------

All spacing, colors, and typography must use CSS variables from tokens.css.

Examples:

• var(--space-4xl)
• var(--font-h1)
• var(--color-bg-primary)
• var(--color-black)

Never invent new tokens.
Never hardcode visual values.


------------------------------------------------------------
BREAKPOINT POLICY
------------------------------------------------------------

• Desktop-first: base styles target desktop, use max-width media queries to adapt down.
• Structural breakpoints may mirror Webflow layout behavior.
• Typography and spacing should remain fluid using clamp().
• Do not invent new breakpoints.
• Do not encode breakpoint meaning in class names.


------------------------------------------------------------
DATA RULES
------------------------------------------------------------

• Pages fetch data.
• Components render data.
• No direct API calls inside UI components.
• Shopify logic must live in /lib/shopify.
• Normalize data before passing into components.


------------------------------------------------------------
STATE RULES
------------------------------------------------------------

• Default to Server Components.
• Add "use client" only when required.
• Cart state remains isolated.
• No external state libraries.


------------------------------------------------------------
IMAGE POLICY
------------------------------------------------------------

• Use Next/Image.
• Always include alt text.
• Prefer fill + object-fit.
• Avoid fixed dimensions unless required.


------------------------------------------------------------
ACCESSIBILITY BASELINE
------------------------------------------------------------

• Use semantic HTML.
• Buttons must use <button>.
• Links must use <a>.
• Maintain logical heading hierarchy.
• Interactive elements must be keyboard accessible.


------------------------------------------------------------
WORKFLOW ENFORCEMENT
------------------------------------------------------------

When given HTML/CSS for a section:

1. Analyze structure.
2. Propose component breakdown.
3. Confirm architecture.
4. Then generate code.

Never skip architectural confirmation.


------------------------------------------------------------
PROJECT INTENT
------------------------------------------------------------

This is a controlled rebuild of a completed Webflow design into a clean, composable Next.js storefront connected to Shopify.

Maintain high visual fidelity.
Maintain layout proportions.
Minor structural cleanup is allowed.
Do not redesign.