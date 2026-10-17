# Progress

## M0: skeleton (2026-10-17)

**What changed.** The page now exists with all eight cards in order. Cards 1 to 7 each have the four headings (What I built, The hard part, What I learned, Results), with a placeholder under each. Card 8 is the compact "Also" strip. The Lumen card embeds the deck in an iframe, labeled "Concept pitch, DECA ICDC 2026", with previous/next buttons under it. Light and dark mode follow the system setting. The styling is structure only: system fonts, greys, spacing.

**Commits, in order.**
1. Removed the committed `.DS_Store` and added `.gitignore`.
2. Deck: the counter is now set from `slides.length` on init (one line in `deck/index.html`). This is its own commit, so the original deck and the fix are separate in the history.
3. Deck: the nav is fully visible on touch screens (one CSS rule in `deck/index.html`). Also its own commit.
4. The skeleton: `index.html`, `styles.css`, `main.js`.
5. `.claude/settings.json`, `PROGRESS.md` and `DECISIONS.md` updates.

`COPY.md` is created and lists every placeholder id (47) with a note on what it needs to do. I did not commit it. That commit is yours.

**Decisions to review** (all in `DECISIONS.md`): the touch nav rule, the previous/next buttons beside the deck, how the deck is scaled, and treating link URLs, alt text and button labels as placeholders.

**Look at in the diff.**
- `main.js`: the scaling and the two buttons that click the deck's own nav. The buttons only work when the page is served over http(s), not opened as a file.
- `deck/index.html`: only two small changes, the counter line and the `@media (hover: none)` rule. No text or design changed.
- `.claude/settings.json`: the `curl` rule is a prefix match, not a true host restriction. The force-push denies don't catch `git -C . push --force`. Both are limits of how Claude Code matches rules.

**Things to know.**
- `pdftoppm` isn't installed. I need it in M2 for the slides, and I'll ask before installing.
- Two lines in `DECISIONS.md` are still marked "Sheldon to confirm" (the `COPY.md` workflow and the deck commit order).
- I haven't checked the page visually. That's your job.

## M1: Redline design (2026-10-17)

**What changed.** The page now looks like an engineering drawing set, following `DESIGN.md`. The colors are the Redline tokens, with a light set and a dark set that follows the system. Barlow Semi Condensed is the headline font and Barlow is the body font. Both are self-hosted in `assets/fonts/` with the OFL license beside them, so no request goes to Google. The whole page sits inside a thin ink border with small construction-blue tick marks. Each card is a square-cornered sheet with a 1px ink border and no shadow. Its four sections are views in a 2x2 grid on desktop and stack on a phone. Every card has a title block in its bottom-right corner (a full-width strip on a phone). The Also strip is a ruled parts-list table. The Lumen deck sits in a frame with blue corner ticks and keeps its own cream and amber. Each of cards 1 to 7 has a hand-drawn-looking red revision cloud around its Results section. The cloud is an SVG path that `main.js` generates from the section's size, with seeded irregularity so each card's cloud differs. It redraws on resize and draws itself in once. With reduced motion it appears instantly.

**Files.** `styles.css` (rewritten), `index.html` (views wrapper, title blocks, parts table, frame wrapper), `main.js` (cloud code added after the deck code), `assets/fonts/` (four TTFs and `OFL.txt`), `CLAUDE.md` (rule 4 changed as you asked), `COPY.md` (39 new empty slots, nothing existing touched), `DECISIONS.md`.

**Decisions to review** (all in `DECISIONS.md`):
- Each cloud draws when it first scrolls into view, not all at page load, because clouds below the fold would finish before anyone saw them.
- Title block labels (project, role, year, revision) share one placeholder id each across all cards. The values are per card.
- The Also table has new placeholders for item numbers, column headers and a link-text cell for Senate.
- The fonts are TTF, not WOFF2, because converting needs a tool I'd have to install.

**Contrast.** Checked against the 4.5:1 minimum. In light mode, ink on the sheet is 16.1 and ink-muted on the sheet is 7.4. In dark mode they are 13.4 and 6.5. The red text token isn't used anywhere yet, since the brief limits red to the clouds.

**Things to know.**
- The `also.senate` note in `COPY.md` still says "linked to the Instagram post", but the link is now its own `also.senate.link` cell. I left the old note alone because I may only add empty slots. Change or ignore it as you like.
- The page has no `h1`. Every card title is an `h2`, which screen-reader users may find odd. Adding one means new visitor text, so it's your call.
- Reading the live page shows the new markup and files are deployed. I haven't seen it rendered, and I have no browser here to screenshot it. Check these on a phone and a desktop: the tick marks near the frame corners, the 2x2 layout, the title block strip, and the clouds. The cloud scallop size (`SCALLOP`) and stroke width are easy to tune in `main.js` and `styles.css`.
- The Lumen deck now sits in a frame with a plain ink border. Its iframe scaling is unchanged.

**Look at in the diff.** The `main.js` cloud code is the only new logic. In `styles.css`, the `.frame::before` and `.view-ticks::before` rules draw the ticks with gradients.

## M1.5: title sheet, drafting details, detail view (2026-10-17)

**What changed.** `assets/incoming/` is now in `.gitignore` (done first, before any other commit), and nothing from it is in the repo. `DESIGN.md` now describes everything below, and I corrected the two lines it contradicted (the title block position and the left-aligned layout). On the page:
- A title sheet sits at the top inside the frame: an `h1` reading "Sheldon Spence", exactly as you wrote it, with a ruled line under it, then one line of text from the new `header.line` slot. It has no red.
- The content column is centered inside the page frame.
- On desktop each title block is one row of four cells along the card's bottom edge. On a phone it is still the stacked strip.
- Every sheet (cards and title sheet) has ink corner marks and a center mark just outside its border. Every card has a dimension line under its title, with arrowheads and end ticks and no text. Every card has a construction-blue grid in its empty areas. Content sits on solid sheet color, so the grid never runs under text.
- The detail view is built. The image sits in a plain view frame with up to three numbered callout bubbles, leader lines and target dots. A numbered notes list sits beside it on desktop and below it on a phone. `main.js` draws the leaders from `data-bubble` and `data-target` attributes (percent positions). The numbers come from CSS counters. I put one example in the Now building card, with an empty image slot and three notes.

**Commits.** Gitignore, then the approval of the four M1 decisions (I changed those four `DECISIONS.md` lines to "Claude proposed, Sheldon approved"), then `COPY.md` empty slots (its own commit, says so), then `DESIGN.md`, then the page changes, then the leader-line JS.

**Decisions to review** (in `DECISIONS.md`):
- Corner marks, center marks and dimension lines are ink, because blue ones would disappear against the blue grid. Only the grid and the frame and deck ticks are blue.
- The example detail view lives in the Now building card. Move or delete it freely.
- Callout and note numbers are CSS counters, not typed digits.

**New `COPY.md` slots.** `header.line`, `now.detail.image`, `now.detail.note1`, `now.detail.note2`, `now.detail.note3`.

**Things to know.**
- I haven't seen any of this rendered. Please check the grid brightness (it is the full construction color, so tell me if it's too loud), the arrowheads on the dimension line, the corner marks near the frame edge on a phone, and the leader lines.
- The grid and marks are drawn with plain CSS gradients. The bubble positions are guesses until a real image goes in.
- The images are not placed. See the list posted in chat.

**Look at in the diff.** `styles.css`: the `.card` grid background, `.card::before` marks, `.dimension`, and the `.detail` block. `main.js`: the last block.
