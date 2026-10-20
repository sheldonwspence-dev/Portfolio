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

- The content column is centered inside the page frame (revised in M1.5; it was left-aligned) on a 12-column grid with generous margins. Mobile first; everything stacks cleanly on a phone.
- **The page frame:** a thin ink border around the whole page, like a drawing's border. Along its edges, small construction-blue tick marks at even intervals. Ticks only, no letters or numbers.
- **Each card is a drawing sheet:** a 1px ink border, square corners (0–2px radius), and no shadows. The four sections ("What I built", "The hard part", "What I learned", "Results") sit as views in a 2×2 grid on desktop and stack on mobile.
- **Each card has a title block** along its bottom edge, like a real drawing: small ruled cells for project, role, year and revision. Every label and value in it is a placeholder for Sheldon. On desktop it is one row of four cells spanning the card. On mobile it is a stacked strip (two rows of two) at the card's bottom.
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

## M1.5 additions

Added Oct 17, after the first look at Redline. Same rules apply: red only in the revision clouds, nothing cream or amber.

### Page header: the title sheet

- At the top inside the frame, styled as the drawing set's title sheet: an `h1` reading "Sheldon Spence" (Sheldon's words, used exactly) with a ruled line under it, then one line of text (placeholder `header.line`).
- It is a sheet like the cards (ink border, square corners, corner and center marks) but has no grid. No red anywhere in it.

### Drafting details on every sheet

- **Corner marks and a center mark:** thin ink marks just outside each corner of every sheet, and a short mark across the middle of each edge, like registration marks on a drawing. They sit outside the border so the title block never covers them.
- **Dimension line:** under each card title, a thin ink line with arrowheads and end ticks. No text on it.
- **Grid:** a clearly visible construction-blue grid, like notebook paper, shows through in each card's empty areas (the margins and the gaps between views). Content (text, views, title block, embeds) sits on solid sheet color so the grid never runs under text. Construction blue only, never red.
- The title sheet, the page frame ticks and the deck's corner ticks stay as before.

### Detail view (reusable component)

For photos and sketches. The image sits in a plain view frame. Up to three numbered callout bubbles sit on the image, each with a leader line and a small dot marking the point it describes. A short numbered notes list sits beside the image on desktop and below it on a phone. Notes are placeholders. The numbers are drawn by CSS counters, not typed, so the bubbles and the list can't drift apart. Bubbles and leaders are ink with a thin halo in the sheet color so they read on both light and dark photos.

## M1.6 additions

Added Oct 19, after seeing the page rendered. Same rules apply: red only in the revision clouds, no shadows.

- **Sheet index:** on wide screens (88rem and up), a list of the cards stays fixed down the left margin, numbered 01, 02 and so on like a drawing set's sheet index, each entry using the card's title as it already appears. Clicking one jumps to that card. The numbers come from a CSS counter and the titles are copied from the card headings by `main.js`, so the list can't drift from the page. Hidden on phones and narrower screens. The "Also" strip isn't a card, so it isn't listed.
- **Stacked sheets:** every card has a second 1px ink outline offset 6px down and to the right, behind it, like a stack of drawings. A line only, no shadow.
- **Drafting-table grid:** a very faint construction-blue grid (the same 24px cell as the card grid, at 16% strength) runs across the whole page background. The cards keep their own, more visible grid.
- **Tighter header:** the title sheet keeps its content but its vertical padding and the space around the rule under the name are roughly halved.
- **Less dead space:** the gaps between cards and the padding inside cards are cut by about a third (card padding 1.25rem to 0.85rem, gap between cards 2.5-4rem to 1.65-2.65rem, and the gaps inside cards and between views to match).

## Avoid

- Rounded cards with soft shadows, gradients, or glow.
- Monospace fonts for labels.
- Arrows appended to links ("→").
- Middle-dot strings ("A · B · C").
- One word of a headline set in a contrasting color or italic.
- Anything cream, amber, or Georgia. That's Lumen's look, and the portfolio must stay distinct from it.
