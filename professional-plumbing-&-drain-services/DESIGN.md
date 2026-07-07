# Professional Plumbing & Drain Services Design System

## 1. Atmosphere & Identity

Professional Plumbing & Drain Services should feel calm, fast, and technically trustworthy. The signature is "clean water precision": deep ink surfaces, bright service-red action points, blue utility accents, local photography, and measured motion that makes emergency support feel immediate without feeling noisy.

## 2. Color

### Palette

| Role | Token | Light | Dark | Usage |
|------|-------|-------|------|-------|
| Surface/primary | --surface-primary | #F7FAFC | #07111F | Body background |
| Surface/secondary | --surface-secondary | #FFFFFF | #0D1B2E | Cards and forms |
| Surface/elevated | --surface-elevated | #EEF4F8 | #12263D | Raised panels |
| Surface/ink | --surface-ink | #07111F | #07111F | Header, footer, dark bands |
| Text/primary | --text-primary | #07111F | #F7FAFC | Headlines, body |
| Text/secondary | --text-secondary | #516172 | #B8C5D1 | Supporting copy |
| Text/inverse | --text-inverse | #FFFFFF | #FFFFFF | Text on dark surfaces |
| Border/default | --border-default | #D9E2EA | #20364D | Cards, dividers |
| Border/subtle | --border-subtle | #EAF0F5 | #17283B | Soft separation |
| Accent/primary | --accent-primary | #D92828 | #FF4A4A | CTAs, urgent actions |
| Accent/hover | --accent-hover | #B81D24 | #FF6B6B | CTA hover |
| Accent/utility | --accent-utility | #0C6B9A | #35A8D8 | Process and service cues |
| Status/success | --status-success | #12805C | #2DD4A1 | Form success |
| Status/warning | --status-warning | #B7791F | #F6AD55 | Emergency notices |
| Status/error | --status-error | #C53030 | #FC8181 | Validation errors |

### Rules

- Red is reserved for urgency, calls, active nav, and primary actions.
- Utility blue supports process, water, and technical details.
- Dark ink bands anchor trust moments and emergency CTAs.

## 3. Typography

### Scale

| Level | Size | Weight | Line Height | Tracking | Usage |
|-------|------|--------|-------------|----------|-------|
| Display | clamp(44px, 7vw, 88px) | 800 | 0.95 | 0 | Hero title |
| H1 | clamp(38px, 5vw, 68px) | 800 | 1 | 0 | Page title |
| H2 | clamp(30px, 4vw, 48px) | 800 | 1.08 | 0 | Section headers |
| H3 | 22px | 800 | 1.2 | 0 | Card titles |
| Body/lg | 18px | 500 | 1.65 | 0 | Lead paragraphs |
| Body | 16px | 400 | 1.65 | 0 | Default text |
| Body/sm | 14px | 500 | 1.5 | 0 | Secondary text |
| Caption | 12px | 700 | 1.4 | 0.06em | Labels, metadata |

### Font Stack

- Primary: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif
- Display: Oswald, Inter, system-ui, sans-serif
- Mono: "SFMono-Regular", Consolas, monospace

### Rules

- Display type is used for strong service headings, never long paragraphs.
- Letter spacing is 0 except small uppercase labels.

## 4. Spacing & Layout

### Base Unit

All spacing derives from 4px.

| Token | Value | Usage |
|-------|-------|-------|
| --space-1 | 4px | Tight icon gaps |
| --space-2 | 8px | Compact groups |
| --space-3 | 12px | Form field internals |
| --space-4 | 16px | Standard text gaps |
| --space-5 | 20px | Comfortable inline spacing |
| --space-6 | 24px | Card padding |
| --space-8 | 32px | Card groups |
| --space-10 | 40px | Section inner breaks |
| --space-12 | 48px | Major content breaks |
| --space-16 | 64px | Page rhythm |
| --space-20 | 80px | Desktop sections |
| --space-24 | 96px | Hero spacing |

### Grid

- Max content width: 1180px
- Column system: CSS grid with 12-column desktop and single-column mobile
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px

### Rules

- Fixed-format media uses aspect-ratio to prevent layout shift.
- Cards use an 8px radius unless the surface is a modal or hero media.

## 5. Components

### Button
- Structure: button or link with optional icon and text.
- Variants: primary, secondary, outline, ghost.
- Spacing: --space-3 to --space-5.
- States: hover lifts 2px, active returns to baseline, focus uses accent utility outline, disabled lowers opacity.
- Accessibility: visible focus ring, no icon-only buttons without aria-label.
- Motion: 160ms transform and background transition.

### Service Card
- Structure: image, icon badge, title, copy, link.
- Variants: compact grid card, detailed alternating row.
- Spacing: --space-6 card padding and --space-8 grid gap.
- States: hover scales image and raises surface.
- Accessibility: image alt describes service context.
- Motion: GSAP scroll reveal, transform-only hover.

### Page Hero
- Structure: eyebrow, title, lead copy, optional actions, local image.
- Variants: home hero and interior hero.
- Spacing: --space-20 desktop, --space-12 mobile.
- States: no interaction except CTAs.
- Accessibility: one h1 per page.
- Motion: Framer page entry and subtle GSAP media parallax.

### Lightbox
- Structure: modal dialog with image, caption, close, previous, next.
- Variants: gallery only.
- Spacing: --space-5.
- States: keyboard Escape closes; arrow buttons cycle images.
- Accessibility: role dialog, aria-modal, labelled close controls.
- Motion: Framer opacity and scale transitions.

### FAQ Accordion
- Structure: button heading plus answer panel.
- Variants: standard.
- Spacing: --space-5.
- States: open, closed, hover, focus.
- Accessibility: aria-expanded and controlled answer region.
- Motion: Framer height and opacity transition.

## 6. Motion & Interaction

### Timing

| Type | Duration | Easing | Usage |
|------|----------|--------|-------|
| Micro | 120-180ms | ease-out | Buttons, links |
| Standard | 220-320ms | ease-in-out | Cards, accordion |
| Emphasis | 480-700ms | cubic-bezier(0.16, 1, 0.3, 1) | Hero and page entries |
| Scroll reveal | 600-800ms | power3.out | GSAP section reveals |

### Rules

- Animate transform and opacity only.
- Respect prefers-reduced-motion for GSAP and Framer Motion.
- Motion marks progress, page context, and affordance. Decorative idle motion is avoided.

## 7. Depth & Surface

### Strategy

Mixed: crisp borders for precision, soft shadows for service cards and modals, and tonal shifts for dark trust bands.

| Level | Value | Usage |
|-------|-------|-------|
| Subtle | 0 1px 2px rgba(7, 17, 31, 0.06) | Forms, small cards |
| Default | 0 18px 45px rgba(7, 17, 31, 0.10) | Service cards |
| Prominent | 0 30px 80px rgba(7, 17, 31, 0.22) | Lightbox, hero media |

