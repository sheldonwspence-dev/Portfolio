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

## M1.5 follow-up: images placed (2026-10-17)

**What changed.** Both whiteboard photos are now detail views in Now building, each with three callouts and three note slots. The first, `assets/now-plan.jpg`, is the investor, influencer and fan plan. The second, `assets/now-wireframes.jpg`, is the app wireframes. I cropped the monitor out of the wireframes photo. I also cropped the table, wall rail and marker tray out of both. There is a new Also row for the Kelley case competition, with `assets/kelley-drawing.jpg` as a framed thumbnail under its description. The mock trial photo is not used. The `.textClipping` file was already gone from `assets/incoming/`.

**Metadata.** I rotated each photo upright, converted it to sRGB, resized it to 1800px at most, then rewrote the JPEG keeping only the segments needed to decode it. That removes the EXIF block (location, camera model, timestamps, orientation), the color profile, and any comments. I checked the three published files: no EXIF, GPS or camera strings, and the live copies match. The originals are untouched in `assets/incoming/`, which is ignored by git and returns 404 on the live site. The tool I used is a short script I wrote in the scratchpad, not in the repo.

**Which Kelley image I picked and why.** I picked `IMG_5847`, the Oolitic Goods engraving drawing. It is the only one of the two new images that is actually Oolitic Goods. `IMG_5917` is a whiteboard of notes from a homicide case, which looks like mock trial prep, not the Kelley project. The drawing also reads clearly at thumbnail size: a hand-drawn IU campus scene, dimension lines and five numbered callouts. I cropped to the top view, which leaves out your thumb over the side view, and the notes text. The crop drops the "Oolitic Goods" title block, so the name will come from your Also text.

**Things to review.**
- The Kelley drawing shows the IU logo twice, on the building and on the child's sweatshirt. The drawing's own note says logos are cleared for license before production. Check that showing it here is fine.
- The photo is warm and dim, with a perspective tilt. I did not retouch it. I can brighten it if you'd like.
- Callout positions are my guesses from reading the images. I aimed them at the legend, the $$$ tree and the growth list on the first sketch, and the app roles, the home page wireframe and the age rule on the second. Tell me if you want different targets. They are `data-target` values in `index.html`.
- The two detail views stack. The first is tall because the whiteboard is portrait, so on desktop it will be a tall figure next to its notes.
- I haven't seen the page rendered.

**New `COPY.md` slots** (empty, committed as slots only): `now.detail2.image`, `now.detail2.note1` to `note3`, `also.kelley.item`, `also.kelley`, `also.kelley.alt`.

**Decisions** (in `DECISIONS.md`): the Kelley image pick and the image-processing method are marked "Claude decided, Sheldon to review". Placing both whiteboards and leaving out the mock trial photo are yours.

## Kelley image swapped (2026-10-19)

**What changed.** The Kelley Also row now shows the clean digital Oolitic Goods sheet instead of the IMG_5847 phone photo. It is the whole sheet: title block, notes, side view, and the IU logo on the building and the sweatshirt. I trimmed the dark screenshot edge off the top, left and bottom; nothing from the drawing is cut. Files: `assets/kelley-drawing.jpg` (same filename, new image), `index.html` (the `<img>` width and height are now 1386 by 1066), `DECISIONS.md`.

**Metadata.** I converted the PNG to sRGB, saved it as a JPEG, then dropped every EXIF, ICC and comment segment. A search of the published file finds no EXIF, GPS, ICC or Apple strings. The original sits in `assets/incoming/oolitic-goods-sheet.png`, which git ignores. It had landed in `assets/` untracked, so I moved it there to keep it from being published.

**Decisions.** I marked six M1 and M1.5 lines "Claude decided, Sheldon approved": the deck nav on touch, link and alt text placeholders, ink-colored marks, the example detail view, CSS counters for callouts, and image processing. The old Kelley pick (IMG_5847) is the one line still saying "to review", because you replaced it. A new 2026-10-19 line records the swap as yours.

**Things to know.**
- The sheet itself has a small flaw: "Indiana limestone" runs over the bottom frame line, and the title block overlaps the frame's bottom border. That is in your drawing, so I left it.
- I haven't seen the page rendered. The new image is wider than tall where the old one was nearly square, so check the thumbnail's framing in the Also row.
- The alt text is still the placeholder `also.kelley.alt`; it describes the old drawing's wording, so check it fits the full sheet when you write it.

## M1.6: design fixes for dead space and depth (2026-10-19)

**What changed.** The page now has a sheet index, stacked sheets, a faint page grid, a tighter header and about a third less spacing. Files: `styles.css`, `main.js`, `index.html` (one `<nav>` element added), `DESIGN.md` (new "M1.6 additions" section), `DECISIONS.md`.

- **Sheet index.** From 88rem wide, a numbered list (01, 02...) of the cards stays in the left margin. Each entry is the card's own heading, copied by `main.js`, so I wrote no new visible text. Clicking jumps to the card. It is hidden below 88rem, which includes phones. The "Also" strip isn't a card, so it isn't listed.
- **Stacked sheets.** Each card has a second outline 6px down and right, drawn with a `::after` behind it. No shadows. The page background has a very faint grid.
- **Header and spacing.** The title sheet's vertical padding is about halved. Card padding, the gaps between cards and the gaps inside cards are cut by roughly a third.

**Decisions to review.** The 6px offset, the 16% grid strength and the 88rem breakpoint are my numbers. The index is `position: fixed` rather than sticky.

**Look at in the diff.** The `.sheet-index` block and `.card::after` in `styles.css`, and the last block in `main.js`.

**Things to know.**
- I haven't seen the page rendered; no browser is installed here. Check that the index doesn't touch the cards at around 1408px wide, that the offset outline isn't clipped on phones, and that the faint grid is faint enough in both color modes.
- The card 1 entry in the index shows the placeholder title for now, clamped to two lines.
- Existing bug I did not touch: in `styles.css`, the comment above `.titleblock` has leftover text after its closing `*/` ("'s bottom-right corner; a full-width strip on a phone */"). That likely makes the browser drop the whole `.titleblock` rule, so the title blocks may be unstyled. It is a one-line fix if you want it.

## Titleblock comment fix and M1.6 approvals (2026-10-19)

**What changed.** In `styles.css`, the comment above `.titleblock` had leftover text after its closing `*/`, which most likely made the browser drop the whole rule. I deleted the leftover text, so the comment is now one clean line and the rule can apply. Nothing else in the file changed. Title blocks should now show as ruled cells: two rows of two on a phone, one row of four on desktop.

**Decisions.** You approved the four M1.6 numbers (6px offset, 16% grid strength, 88rem breakpoint, fixed index). I changed those three `DECISIONS.md` lines from "to review" to "approved" and added a line for this fix.

**Look at in the diff.** The one comment line above `.titleblock` in `styles.css`.

**Things to know.** I haven't seen the page rendered. Since the title blocks may have been unstyled until now, check how they look in both color modes and on a phone.

## Copy moved in: Oncore, title blocks, Also strip, alt text (2026-10-20)

**What changed.** Every slot Sheldon filled in `COPY.md` is now in `index.html`, exactly as written: the Oncore card text and its two sets of notes, the title blocks (Patent's is left empty on purpose), the shared labels, the Also table headers, item numbers and rows, the three image alt texts and the deck's iframe title. The Senate link and the new AP Research link now have their real URLs. Special characters like `&` are escaped in the HTML, so they display as written.

**Decisions to review.** The AP Research row had an empty link cell, so I put the "Research Paper" link there. Logged in `DECISIONS.md`.

**Look at in the diff.** The Also table in `index.html`, and the title block `<dd>` lines.

**Still placeholders.** `page.title`, `page.description`, `now.link.text`, `lumen.link.text`, `lumen.deck.prev`, `lumen.deck.next`, the AmeriFab, Patent, TEDx, Club and FRC card text, `amerifab.diagram.alt`, `tedx.video.title`, `tedx.slides.alt`, `club.slides.alt`, `frc.photo.alt`, and the four Patent title block slots. The URLs for `now.link.url` and `lumen.link.url` are also empty.

**Typos I left alone.** None spotted. I haven't seen the page rendered.

## TEDx embed (2026-10-22)

**What changed.** The TEDx card's video slot is now a click-to-load embed of `SMjRS8-ZSso` from `youtube-nocookie.com`. Until a visitor clicks, the page loads nothing from YouTube. I used a plain button with no thumbnail, because a YouTube thumbnail would be a third-party request on page load. Files: `index.html`, `main.js`, `styles.css`, `DECISIONS.md`.

**New slots (empty, in `COPY.md`, not committed by me).** `tedx.video.play` (the button's visible label), `tedx.video.caption`, and for the Also strip `also.philosophy.item` (05) and `also.philosophy`. The existing `tedx.video.title` slot is now the player's title for screen readers. Your new text is in `COPY.md` only; I haven't moved it into the page, and the Also strip has no row 05 yet.

**Look at in the diff.** The click handler at the bottom of `main.js` and the `.video` rules in `styles.css`.

**Things to know.** I haven't seen the page rendered or clicked the embed. Check that the player loads on click, fills its frame and works on a phone.

## Copy moved in: header, AmeriFab, TEDx, Club, FRC, Also row 05 (2026-10-22)

**What changed.** The new `COPY.md` text is in `index.html`, exactly as written: the header line, the four sections of AmeriFab, TEDx, Policy & Civility Club and FRC 868, and the AmeriFab title block (project "Employee job tracker", status "Still in use"). The TEDx role now reads "Speaker; leadership team (1 of 3)". Also row 05 for the philosophy club is added with no link. Files: `index.html`, `DECISIONS.md`.

**Still placeholders.** `page.title`, `page.description`, `now.link.text`, `lumen.link.text`, `lumen.deck.prev`, `lumen.deck.next`, the Patent card text and title block, `amerifab.diagram.alt`, `tedx.video.title`, `tedx.video.play`, `tedx.video.caption`, `tedx.slides.alt`, `club.slides.alt`, `frc.photo.alt`. The `now.link.url` and `lumen.link.url` are also empty.

**Typos I left alone.** In `club.hard` the quotes around "pointless." sit as you wrote them. Nothing else spotted. I haven't seen the page rendered.

## Photos, clips, labels, hidden items and the AmeriFab diagram (2026-10-22)

**What changed.** Files: `index.html`, `styles.css`, `main.js`, new files in `assets/`, `COPY.md` (committed separately as `6aba46e`), `DECISIONS.md`.

- **Photos.** The DECA photo sits in a view frame under the Lumen deck. The Congress and Senate photos are in their Also rows. Also rows 06 (mock trial) and 07 (economics club) have your text and photos. All five are re-encoded JPEGs with every EXIF, ICC and comment segment removed. The Senate screenshot is cropped to the picture, which removes the phone's clock and status icons.
- **FRC clips.** Two silent looping mp4s with a poster frame each, in the FRC 868 card. The originals were 14 MB and 46 MB; the page versions are 1.3 MB and 4.3 MB. They have no audio track and none of the phone's location metadata. I made them with Apple's built-in video tools, so nothing was installed. Visitors who prefer reduced motion get the poster and play controls.
- **Text.** Page title, meta description, the Lumen link and its URL, the deck button labels and the TEDx title and play label are in the page. The TEDx caption slot is gone.
- **Hidden.** The Oncore link, Patent card, Policy & Civility slides frame and TEDx slides slot each have `hidden`. Delete that word on the element to show it. Each has a comment saying so. The hidden Patent card also leaves the sheet index and gets no revision cloud.
- **Diagram.** The AmeriFab diagram is inline SVG with your exact labels. AWS and the Notion-to-AWS arrow are dashed. It reads your alt text. I built it on your instruction; CLAUDE.md said to wait for AmeriFab's okay on a public diagram, so please confirm that is settled.

**Decisions to review.** All the alt text, the Senate crop, the clip settings and the diagram layout, all in `DECISIONS.md`.

**Look at in the diff.** The `.diagram`, `.clips`, `.photo` and `[hidden]` rules in `styles.css`, and the end of `main.js`.

**Things to know.**
- I haven't seen the page rendered or played the clips. Check the diagram's text size on a phone and that the two clips sit side by side cleanly.
- The Congress photo still shows Instagram's "5/12" badge in its corner, and the Senate photo keeps the account name bar at its top. I left both as you supplied them.
- The clips autoplay and loop with no pause button. They are 4 and 14 seconds long, so a visitor who can't stop motion has only the reduced-motion setting.
- Still placeholders: `now.link.text`, `club.slides.alt`, `tedx.slides.alt`, `frc.photo.alt` and the Patent card text, all in hidden or unused slots except `frc.photo.alt`.

## Pause buttons, Congress crop, AmeriFab cleared (2026-10-22)

**What changed.** Files: `index.html`, `styles.css`, `main.js`, `assets/also-congress.jpg`, `CLAUDE.md`, `DECISIONS.md`, and `COPY.md` (two empty slots, committed on their own).

- **Pause/play buttons.** Each FRC clip has a small square button in its bottom-right corner. It shows two bars while playing and a triangle when paused, drawn in CSS. Its accessible name switches between two placeholders, `frc.clip.pause` and `frc.clip.play`, which I added to `COPY.md` as empty slots. Visitors who prefer reduced motion get the poster frame and press play themselves.
- **Congress photo.** I cropped the strip above the first photo, which removes Instagram's "5/12" badge. Nobody in the photo is cut. The image is now 616 by 698 and still has no metadata.
- **Senate photo not cropped.** The account bar sits across the top third of the police officer's head. Cropping it off would cut into him, so I left it as it was. If you want it gone anyway, the options are cutting his head off at the forehead or covering the bar. Your call.
- **AmeriFab.** `CLAUDE.md` now says the diagram is cleared: Sheldon confirmed diagrams of what he built are fine to show publicly, as long as no company material appears. The M2 milestone line says the same.
- **Decisions.** The alt text and the two clip lines in `DECISIONS.md` now say "Sheldon approved". The Senate no-crop line is marked "to review".

**Look at in the diff.** The `.clip-toggle` rules in `styles.css` and the clip block at the end of `main.js`.

**Things to know.** I haven't seen the page rendered or pressed the buttons. Check that the button doesn't cover anything important in the clips and is easy to tap on a phone. The two new `COPY.md` slots are empty until you write the button names, so the buttons show placeholders for now.

## Readability pass (2026-10-22)

**What changed.** Twelve slots were replaced in `COPY.md` (committed as you asked, `Copy: typo and readability fixes...`) and the same text moved into `index.html` exactly as written: `lumen.results`, `now.built`, `now.hard`, `now.results`, `now.detail.note1`, `amerifab.built`, `amerifab.learned`, `tedx.built`, `club.hard`, `frc.built`, `also.senate` and `also.ap`.

**FRC.** The first clip's alt text is now your "Starting to design and cut out material for the FRC robot." The second clip shows students at a different machine, so I kept its plain description. That is logged as "Claude decided, Sheldon to review". There was no team photo, so I removed the empty slot from the page and the `frc.photo.alt` slot from `COPY.md`.

**Look at in the diff.** `index.html`, the FRC card, where the team-photo slot was.

**Still placeholders.** `frc.clip.pause` and `frc.clip.play` (the button names), `now.link.text`, `club.slides.alt`, `tedx.slides.alt`, and the Patent card. The Oncore link, Patent card and both slides slots are hidden.

**Typos I left alone.** None spotted.

## Always in revision: stamp, revision block, standing rule (2026-10-22)

**What changed.** The title sheet now has a red STILL BUILDING stamp, a revision table with a Next revision list, and a "Full history" link to the repo's commits on GitHub. Files: `index.html`, `styles.css`, `DESIGN.md` (updated first, new M1.7 section and two lines that said "no red" in the title sheet), `CLAUDE.md` (new rule 8), `COPY.md`, `DECISIONS.md`.

- **Labels.** "Pause clip" and "Play clip" are in `COPY.md` and the page. I committed them myself as `deaff88` and moved them in as `4726846`.
- **Stamp.** Live text in the redline red with a double border, turned about 8 degrees across the title sheet's top-right corner. An SVG filter gives it specks and slightly wobbly edges. It doesn't block clicks.
- **Revision block.** Seven rows from git history, newest first: A Oct 17 First issue, B Redline design, C title sheet and detail views, D Oct 19 sheet index and stacked sheets, E Oct 22 photos and diagram, F readability pass, G this revision block. The page shows C to G; A and B are in the markup with `hidden`. By is Claude for code and Sheldon for the readability pass. Approved is always Sheldon. The row descriptions are my wording and aren't in `COPY.md`, since Claude keeps them up to date under the new rule.
- **Rule 8 in `CLAUDE.md`.** Each session that changes the live page adds a row at the top, hides the oldest visible row, and updates the Next revision list. Logged in `DECISIONS.md`.
- **COPY.md.** Eleven new slots with your text from your message: stamp, caption, five table headings, Full history, Next revision and its two items.
- **Date fix.** My last two entries said Oct 23; the day is Oct 22. I corrected them in `DECISIONS.md` and `PROGRESS.md` and logged it.

**Look at in the diff.** The `.stamp` and `.revisions` rules in `styles.css`, and the title sheet header in `index.html`.

**Things to know.** I haven't seen the page rendered. The stamp overhangs the title sheet's corner and on a phone it may sit over the end of the name; check that and how the filter looks in both color modes. The table has five narrow columns on a phone, so descriptions may wrap to two or three lines.

## Revision block fixes (2026-10-22)

**What changed.** Files: `COPY.md`, `index.html`, `DESIGN.md`, `DECISIONS.md`.

- **Caption.** `rev.caption` is now "Revisions" in `COPY.md` and on the page. I committed `COPY.md` first as `aaeb101`; its message says "always in revision" was my working label and "Revisions" is your text.
- **Row F.** By is now Claude. I also matched `DESIGN.md`, which named the old caption.
- **Dates.** I checked every row against `git log` in Indiana time. All seven match, so none changed. Row C is the one that differs from your chat notes: the M1.5 commits are stamped Oct 17, 19:13 to 19:16 Indiana time, so I left it at Oct 17. If it should read Oct 18, tell me which commits you mean.
- **New row H.** Oct 22, "Revision caption and row attribution fixes", By Claude, Approved Sheldon. Per rule 8 it sits at the top, row C is now hidden so five rows show (H to D), and the Next revision list is unchanged.
- **75797a7.** I did not amend it. `DECISIONS.md` now says its message claimed the text came from you, but the slot notes were my wording and you hadn't asked for that commit.

**Look at in the diff.** The revision table in `index.html`.

**Things to know.** I haven't seen the page rendered.

## Trademark wording and pre-submission check (2026-10-22)

**What changed.** In `now.built`, "filed an official trademark" is now "filed a federal trademark application (U.S. Serial No. 50001365)", in `COPY.md` and on the page. The serial number links to the USPTO status page and opens in a new tab. I committed `COPY.md` first as `6a36e7e`; its message says Claude suggested the wording, you approved it, and the number is from your USPTO screenshot. Files: `COPY.md`, `index.html`, `CLAUDE.md` (new rule 9: after every push, load the live page and confirm no placeholders), `DECISIONS.md`. New revision row I (Oct 22, "Trademark application wording and USPTO link", By Claude, Approved Sheldon); row D is now hidden so five rows show.

**Pre-submission check of the live page (report only, nothing fixed).**
1. **Placeholders.** None visible. Eleven `[PLACEHOLDER ...]` strings are still in the HTML but sit inside `hidden` elements, so visitors don't see them: `now.link.text`, the four Patent text slots, the four Patent title-block slots, `tedx.slides.alt`, `club.slides.alt`. The "Link" column in the Also strip is empty for items 01, 04, 05 and the last row (blank cells, no text). Page `<title>` is "Sheldon Spence" and the meta description is "Constantly consciously curious." (no placeholders).
2. **Links.** All six returned 200 with no redirects: Lumen, Instagram, AP Research doc, Full history, USPTO. The TEDx embed (`SMjRS8-ZSso`, loads on click) also returned 200. The Google Doc came back titled "Research Paper - Google Docs" with no sign-in redirect, so it looks public, but I couldn't open it as a logged-out browser would. Instagram returns only its generic shell to `curl`, so I can't confirm the post shows without a login prompt. The USPTO page is a JavaScript app, so I can't confirm the case loads from the `#` link; you should click it once. Nothing redirected to a sign-in page.
3. **Lumen.** The page loads. Its `/api/optimize` rejects requests with no matching Origin (`bad_origin`), so I sent one with Lumen's own origin: 200 in 3.8 seconds, with an improved prompt, highlights and changes for "write me a thank you email for a donor". The brackets in that result are Lumen's own fill-in fields.

**Look at in the diff.** The `now.built` paragraph and the revision table in `index.html`.

**Things to know.** I haven't seen the page rendered. I first appended rule 9 after "Every session" by mistake and moved it under rule 8 before committing.

## Dash in empty Also link cells (2026-10-22)

**What changed.** The five empty Link cells in the Also table now show a dash (—), the drafting convention for "none". Visual only; there is no `COPY.md` slot. Files: `index.html`, `DECISIONS.md` (logged as Claude proposed, Sheldon approved). New revision row J (Oct 22, "Dash in empty Also link cells", By Claude, Approved Sheldon); row E is now hidden so five rows show.

**Rule 9 check on the live page after the push.** The page loads, row J and five dashes are there, no empty cells remain, and no placeholders are visible. The same 11 placeholders are in the HTML inside hidden elements.

**Look at in the diff.** The `<td>—</td>` cells and the revision table in `index.html`.

**Things to know.** I count five dashes, not four as I reported earlier: the Also table has five rows with no link (I had listed three plus "the last row"). I haven't seen the page rendered.
