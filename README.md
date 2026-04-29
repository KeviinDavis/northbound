# Studio System Core

A reusable Next.js starter architecture built for structured, high-fidelity builds.

This repository is infrastructure.  
It is not a project.  
It is a foundation.

---

## Purpose

This template provides:

- A locked spacing system (rem + clamp based)
- A reusable layout primitive layer
- A neutral token structure
- A predictable folder architecture
- A constrained AI build workflow

Every new project begins here.

---

## What This System Guarantees

- Fluid, scalable spacing
- Consistent vertical rhythm
- Clean layout composition
- Token-based styling (no arbitrary values)
- Controlled architecture boundaries
- No layout drift across projects

---

## Core Architecture

### App Layer

```
/app
  layout.js
  globals.css
```

### Layout Primitives

```
/components/layout
  Section
  Container
  Header
  Footer
```

### UI Primitives

```
/components/ui
  Button
  Media
```

### Tokens

```
/styles/tokens.css
```

---

## What Changes Per Project

When starting a new project:

You may change:

- Fonts
- Color tokens
- Metadata (title/description)
- Container max width (if necessary)
- Brand assets

You must NOT change:

- Spacing scale
- Fluid clamp typography scale
- Section/Container structure
- Token naming conventions
- Core layout primitives

Spacing is structural math.
Typography and color define brand identity.

---

## Rules

- All spacing must use tokens.
- No hardcoded color values.
- No arbitrary pixel-based typography.
- Use rem units.
- Use clamp() for fluid scaling.
- No inline styles.
- CSS Modules only.
- No new layout primitives without system update.

---

## Starting a New Project

1. Click **Use this template**.
2. Clone new repository locally.
3. Run:

```
npm install
npm run dev
```

4. Immediately:
   - Update metadata
   - Update fonts
   - Update color tokens
   - Remove placeholder content

5. Commit baseline:

```
git commit -am "Project baseline from Studio System Core"
```

Then begin building.

---

## Versioning

If the spacing system or layout primitives require improvement:

- Update this repository.
- Commit changes intentionally.
- Treat updates as system version upgrades.

Do not patch spacing per project.

---

## AI Workflow (Optional)

If using AI tools:

- Structural translation happens outside this repo.
- Implementation must follow system constraints.
- Do not allow AI to modify architecture.
- AI assists — it does not design the system.

---

## Philosophy

Consistency reduces friction.
Structure reduces decision fatigue.
Systems compound over time.

Build with discipline.
