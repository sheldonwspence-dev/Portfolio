# Design direction: Redline

From Sheldon's design round with Claude in chat, Oct 17. Sheldon chose this direction from three options.

## The brief, in Sheldon's words

"Builder energy but polished — a bit messy but still polished. Think of a Mark Rober invention compared to an official factory product."

## The idea

The page is an engineering drawing set that someone has marked up. Everything is drafted with precision; the only mess is the engineer's red pen. Spend all the boldness on that red pen and keep everything else quiet.

## Color

Light mode:

| Token | Hex | Use |
|---|---|---|
| vellum | `#EEF1EF` | page background |
| sheet | `#F7F8F7` | card (sheet) surface |
| ink | `#181C20` | text, borders, drawing lines |
| ink-muted | `#4A535B` | secondary text |
| construction | `#8FA9B8` | thin guide lines and tick marks only, never text |
| redline | `#E2312B` | red-pen marks only: clouds, strokes |
| redline-text | `#C8251F` | any small red text (passes contrast where `#E2312B` doesn't) |

Dark mode (follows the system setting): the same drawing on a slate lightbox.

| Token | Hex |
|---|---|
| vellum | `#15191C` |
| sheet | `#1C2125` |
| ink | `#E6EAEC` |
| ink-muted | `#9AA6AE` |
| construction | `#4E6A7A` |
| redline | `#FF4A3D` |
| redline-text | `#FF6B5F` |

Define these as CSS custom properties on `:root`, redefined under `@media (prefers-color-scheme: dark)`. Check body text against its surface for at least 4.5:1 contrast.

## Type

- Headlines: Barlow Semi Condensed, 600–700. It's based on highway signage, so it reads as engineered.
- Body: Barlow, 400–500.
- Load both from Google Fonts. Fallback: `system-ui, sans-serif`.
- Scale: ratio 1.25 from a 16px body (16, 20, 25, 31, 39, 49). Body line height about 1.55. Keep line length under 70 characters.
- Use tabular figures (`font-variant-numeric: tabular-nums`) anywhere numbers line up, like the title block.
- Don't force uppercase with CSS. Sheldon's text sets its own case.

## Layout

- Left-aligned on a 12-column grid with generous margins. Mobile first; everything stacks cleanly on a phone.
- **The page frame:** a thin ink border around the whole page, like a drawing's border. Along its edges, small construction-blue tick marks at even intervals. Ticks only, no letters or numbers.
- **Each card is a drawing sheet:** a 1px ink border, square corners (0–2px radius), and no shadows. The four sections ("What I built", "The hard part", "What I learned", "Results") sit as views in a 2×2 grid on desktop and stack on mobile.
- **Each card has a title block** in its bottom-right corner, like a real drawing: small ruled cells for project, role, year and revision. Every label and value in it is a placeholder for Sheldon. On mobile it becomes a full-width strip at the card's bottom.
- **The "Also" strip is a parts list:** a compact ruled table (item number, description, link) instead of cards. Column headers are placeholders.
- **The Lumen deck** sits inside a view frame with construction-blue corner ticks. The deck keeps its own cream and amber; the contrast is intentional.
- Photos and slides sit in plain view frames. No decoration.

## The red pen (the one messy element)

- A hand-drawn-looking red revision cloud (a scalloped outline) around each card's Results section. Generate it as an SVG path from the element's size, with slight seeded irregularity in the scallops so no two clouds are identical. Redraw it on resize.
- That's it. No other red marks, and no other decoration competing with it.

## Motion

- One moment only: on first load, the revision clouds draw themselves in once (stroke-dashoffset), as if the engineer is marking up the drawing.
- With `prefers-reduced-motion`, the clouds appear instantly.
- No other animation: no fade-ins on scroll, and no hover effects beyond a clear link underline and visible keyboard focus.

## Avoid

- Rounded cards with soft shadows, gradients, or glow.
- Monospace fonts for labels.
- Arrows appended to links ("→").
- Middle-dot strings ("A · B · C").
- One word of a headline set in a contrasting color or italic.
- Anything cream, amber, or Georgia. That's Lumen's look, and the portfolio must stay distinct from it.
