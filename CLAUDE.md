# Portfolio site

Sheldon Spence's ongoing portfolio: the story of what he has made, for Common App readers and anyone who wants his resume. You (Claude Code) write the code. Sheldon makes the decisions and writes every word a visitor sees.

The Horowitz Andreessen Academy application this site was first built for is finished (submitted Oct 22, 2026). Static pages on GitHub Pages, served from `main` at `https://sheldonwspence-dev.github.io/Portfolio/`.

Every session ships one finished revision. Nothing half-built shows live: unfinished parts stay behind a `hidden` switch.

## How we work: background mode

Sheldon wants you to work through milestones without him watching.

- At the start of a milestone, post a short plan and wait for his go. After that, work through the whole milestone without stopping.
- Stop and wait only for:
  1. Installing anything or adding a dependency.
  2. Anything touching GitHub settings.
  3. A choice that changes what visitors see and isn't settled in this file.
- For smaller calls, pick the simpler option, log it as "Claude decided, Sheldon to review", and keep going.
- After each push, give Pages a few minutes, then check the live page with `curl`. Visual checks are Sheldon's job.
- End every milestone by appending a summary to `PROGRESS.md`: what changed, which files, decisions to review, and what Sheldon should look at in the diff. Write it in plain sentences he could use to explain the work.

## Rules

1. **Visible text is Sheldon's.** Every visitor-facing string (headings, body, link text, captions, alt text, page `<title>`, meta description) goes in as `[PLACEHOLDER id: what this text needs to do]`, where `id` is short and unique, like `tedx.learned`. List every placeholder in `COPY.md` as a `### id` heading, a one-line note on what it needs to do, and an empty line for Sheldon's text. Sheldon writes in `COPY.md` and commits it himself. When he says it's updated, move his text into the page exactly as written: no edits, no fixes, no rewording. If you spot a typo, note it in `PROGRESS.md` and leave it. The only exception is wording Sheldon wrote himself, shown in quotes below. Use it exactly.
2. **Scope grows by Sheldon's choice.** The old one-page limit is lifted (Nov 22, 2026). New pages and sheets are fine when Sheldon asks for them. Still no analytics, trackers or contact form. If an idea comes up mid-session that Sheldon hasn't asked for, add one line to `PARKED.md` and finish the session's revision first.
3. **Log decisions as they happen.** When a real choice is made, append one line to `DECISIONS.md`:
   `YYYY-MM-DD | decision | why | decided by`
   "Decided by" is one of: Sheldon / Claude proposed, Sheldon approved / Sheldon chose from Claude's options / Claude decided, Sheldon to review. Never backfill or embellish. This file becomes his build log.
4. **Honest history.** Small commits with plain messages. Don't remove or rewrite any AI attribution on commits. Claude may commit `COPY.md` only to add empty slots, with a commit message saying so. Never edit or commit Sheldon's text; commits with his text are his.
5. **Code Sheldon can defend.** Vanilla HTML/CSS/JS, no framework, no build step: `index.html` (cover), `built/`, `competed/`, `led/` (one `index.html` each, for clean URLs), one shared `styles.css` and `main.js`, `deck/`, `assets/`. Comment only where the why isn't obvious.
6. **No visual identity yet.** The look comes from a separate design round. Until Sheldon brings that back, style for structure only: system font stack, greys, spacing, responsive layout. Don't choose fonts, colors, or a style. When the direction arrives, it will be deliberately different from the deck and Lumen: no cream/amber palette, no Georgia.
7. **No trackers.** No third-party scripts. The one exception is the YouTube embed: use `youtube-nocookie.com` and load the player only when clicked.
8. **Keep the revision block current.** Every session that changes the live page adds one row to the revision block on the title sheet: the next letter, today's date, a factual description of eight words or fewer, By ("Claude" for code changes, "Sheldon" for text changes) and Approved ("Sheldon"). Put the new row at the top, keep the latest five rows visible and mark older rows `hidden`, and update the Next revision list. Log the row's description in `DECISIONS.md` only if it records a real choice.
9. **Check the live page after every push.** Load the live page and confirm it renders with no visible placeholders, because reviewers may be looking. Report anything that fails.

## Pages

Phone first, responsive. Light and dark mode follow the system setting. Every page has the same header: "Sheldon Spence" linking to the cover, and the Built / Competed / Led series nav. Every sheet has an anchor id so it can be linked directly, and a sheet number (B-01 and so on). Layout details are in `DESIGN.md`.

- **Cover (`index.html`):** title sheet (name, tagline, intro slot, STILL BUILDING stamp, revision block), the sheet index grouped by series (number, title, Status, link), W-01 (AP Research paper, linked straight to the paper), and the contact block (GitHub; email, LinkedIn and resume PDF behind switches). Never put Sheldon's personal Gmail or a phone number anywhere in the repo.
- **B, Built (`built/`):** B-01 Lumen, B-02 AmeriFab, B-03 FRC 868, B-04 LunLux (index row live, sheet hidden), B-05 Patent (index row "Patent pending", sheet hidden), B-06 Diamond Challenge (index row only), B-07 Oncore (compact, last).
- **C, Competed (`competed/`):** C-01 DECA ICDC 2026 (see sheet B-01), C-02 Mock Trial, C-03 Kelley case competition.
- **L, Led (`led/`):** L-01 Policy & Civility Club (with a press list that links out to HiLite and copies none of its text or photos), L-02 TEDx, L-03 Congress Event Head, L-04 Senate, L-05 Economics Club, L-06 Philosophy discussion club.

Full sheets have four sections with these exact headings: "What I built", "The hard part", "What I learned", "Results", and a title block. Compact sheets (the former Also rows) have a heading, Sheldon's text, a photo and a link where there is one.

## The deck (sheet B-01)

- Sheldon has committed the deck unchanged at `deck/index.html`. Make the counter fix its own commit, so the history shows the original and the fix separately.
- The fix: the counter is hardcoded "1 / 6" on first load, but the deck has 9 slides and the script already counts correctly after the first click. Set the counter from `slides.length` on init.
- Change the deck's code only where embedding needs it: the counter, and making the nav usable on touch (it sits at 40% opacity until hover, and phones don't hover). Never change its text or design.
- Embed it with an iframe, never inline. Its keyboard handler and `overflow: hidden` would take over the page. Render it at its native size and scale it down to the card's width so its fixed-pixel type doesn't clip on phones.

## PDF slides (TEDx, if Sheldon adds them)

Sheldon supplies PDFs. Convert the pages to images (`pdftoppm` if it's installed; ask before installing anything) and show them in one small shared viewer with previous/next, a counter, keyboard and swipe. Link the original PDF too.

## Milestones (finished; kept as the record of the first build)

- **M0, Oct 17.** Sheldon has already committed `CLAUDE.md`, `DECISIONS.md` and `deck/index.html`. Build the skeleton: all eight cards in order with placeholders, deck embedded and clickable with the counter fixed (separate commit), light/dark working. Write `.claude/settings.json` (next section), create `COPY.md` and `PROGRESS.md`, push, and confirm the page is live. Ask Sheldon to confirm any `DECISIONS.md` lines marked "Sheldon to confirm" and update them. Finish by telling him to type `/exit` and start a fresh session next time, so the permissions file loads. Stop.
- **M1, Oct 19–20.** Apply the design direction Sheldon brings back from the design round.
- **M2, Oct 20–21.** Assets in: TEDx embed, PDF slides, FRC photo, links. The AmeriFab diagram is cleared to go in: Sheldon confirmed diagrams of what he built are fine to show publicly, as long as no company material appears.
- **M3, Oct 22.** Final check: phone and desktop, both color modes, keyboard only. List every remaining placeholder id for Sheldon.
- **By Oct 25.** Move Sheldon's finished `COPY.md` text in. Site submitted Oct 26.

## Permissions file (M0)

Create `.claude/settings.json` so background runs don't stall on approvals. Check the current permission-rule syntax in the Claude Code docs first. Commit it; it's part of the public record of how Claude was allowed to work.

- `defaultMode`: `acceptEdits`
- allow: `git add`, `git commit`, `git push`, `git status`, `git diff`, `git log`, `curl` to `sheldonwspence-dev.github.io`, `pdftoppm`, and a local static file server for previews
- ask: `git tag`, any package install (`brew`, `npm`, `pip`)
- deny: reading `.env` files, force pushes, `sudo`, `rm -rf`

## Every session

Read this file, `DESIGN.md`, the last 10 lines of `DECISIONS.md`, and the latest entry in `PROGRESS.md`. Say what the session's revision is and your plan for it in a few lines. Wait for Sheldon's go, then run it through to the push.
