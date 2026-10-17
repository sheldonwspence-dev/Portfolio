# Portfolio site

Sheldon Spence's portfolio for his Horowitz Andreessen Academy Founding Class application: the story of what he has made. You (Claude Code) write the code. Sheldon makes the decisions and writes every word a visitor sees.

Due Oct 26 (hard deadline Nov 5). One static page on GitHub Pages, served from `main` at `https://sheldonwspence-dev.github.io/Portfolio/`.

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
2. **Scope is fixed.** One page with the cards below. No extra pages, blog, contact form, analytics, or theme toggle. If anyone proposes more, say "That's a feature. Parking it.", add one line to `PARKED.md`, and get back to the milestone.
3. **Log decisions as they happen.** When a real choice is made, append one line to `DECISIONS.md`:
   `YYYY-MM-DD | decision | why | decided by`
   "Decided by" is one of: Sheldon / Claude proposed, Sheldon approved / Sheldon chose from Claude's options / Claude decided, Sheldon to review. Never backfill or embellish. This file becomes his build log.
4. **Honest history.** Small commits with plain messages. Don't remove or rewrite any AI attribution on commits. Never commit `COPY.md` yourself; those commits are Sheldon's.
5. **Code Sheldon can defend.** Vanilla HTML/CSS/JS, no framework, no build step: `index.html`, `styles.css`, `main.js`, `deck/`, `assets/`. Comment only where the why isn't obvious.
6. **No visual identity yet.** The look comes from a separate design round. Until Sheldon brings that back, style for structure only: system font stack, greys, spacing, responsive layout. Don't choose fonts, colors, or a style. When the direction arrives, it will be deliberately different from the deck and Lumen: no cream/amber palette, no Georgia.
7. **No trackers.** No third-party scripts. The one exception is the YouTube embed: use `youtube-nocookie.com` and load the player only when clicked.

## Page

Phone first, responsive. Light and dark mode follow the system setting.

Cards 1–7 each have four sections with these exact headings: "What I built", "The hard part", "What I learned", "Results". Everything under them is a placeholder. The notes after each card name are context for you, not text to render.

1. **"Now building: [Startup]"** (the startup name is a placeholder). Notes: co-founder, registered trademark (Sheldon confirmed), v0 in development. Link to the startup's landing page (URL placeholder).
2. **"Lumen"**. The DECA deck, embedded and clickable, labeled "Concept pitch, DECA ICDC 2026". Link to the live tool (URL placeholder until Sheldon picks Lumen's public link).
3. **"AmeriFab"**. Production AI system. Slot for an inline SVG system diagram, built later from Sheldon's parts list. Every label in the diagram is his.
4. **"Patent"**. Reserved slot, placeholders only. Don't render "patent pending" or any status until Sheldon confirms the wording.
5. **"TEDx"**. Talk embedded from the official TEDx YouTube channel (URL from Sheldon), plus slides.
6. **"Policy & Civility Club"**. Founded by Sheldon. Slides.
7. **"FRC 868"**. Team photo plus his role.
8. **"Also"**. A compact strip, not a full card: Congress event, Senate (Instagram link), AP Research paper.

## The deck (card 2)

- Sheldon has committed the deck unchanged at `deck/index.html`. Make the counter fix its own commit, so the history shows the original and the fix separately.
- The fix: the counter is hardcoded "1 / 6" on first load, but the deck has 9 slides and the script already counts correctly after the first click. Set the counter from `slides.length` on init.
- Change the deck's code only where embedding needs it: the counter, and making the nav usable on touch (it sits at 40% opacity until hover, and phones don't hover). Never change its text or design.
- Embed it with an iframe, never inline. Its keyboard handler and `overflow: hidden` would take over the page. Render it at its native size and scale it down to the card's width so its fixed-pixel type doesn't clip on phones.

## PDF slides (cards 5 and 6)

Sheldon supplies PDFs. Convert the pages to images (`pdftoppm` if it's installed; ask before installing anything) and show them in one small shared viewer with previous/next, a counter, keyboard and swipe. Link the original PDF too.

## Milestones

- **M0, Oct 17.** Sheldon has already committed `CLAUDE.md`, `DECISIONS.md` and `deck/index.html`. Build the skeleton: all eight cards in order with placeholders, deck embedded and clickable with the counter fixed (separate commit), light/dark working. Write `.claude/settings.json` (next section), create `COPY.md` and `PROGRESS.md`, push, and confirm the page is live. Ask Sheldon to confirm any `DECISIONS.md` lines marked "Sheldon to confirm" and update them. Finish by telling him to type `/exit` and start a fresh session next time, so the permissions file loads. Stop.
- **M1, Oct 19–20.** Apply the design direction Sheldon brings back from the design round.
- **M2, Oct 20–21.** Assets in: TEDx embed, PDF slides, FRC photo, links. The AmeriFab diagram goes in only after Sheldon confirms AmeriFab is fine with a public diagram.
- **M3, Oct 22.** Final check: phone and desktop, both color modes, keyboard only. List every remaining placeholder id for Sheldon.
- **By Oct 25.** Move Sheldon's finished `COPY.md` text in. Site submitted Oct 26.

## Permissions file (M0)

Create `.claude/settings.json` so background runs don't stall on approvals. Check the current permission-rule syntax in the Claude Code docs first. Commit it; it's part of the public record of how Claude was allowed to work.

- `defaultMode`: `acceptEdits`
- allow: `git add`, `git commit`, `git push`, `git status`, `git diff`, `git log`, `curl` to `sheldonwspence-dev.github.io`, `pdftoppm`, and a local static file server for previews
- ask: `git tag`, any package install (`brew`, `npm`, `pip`)
- deny: reading `.env` files, force pushes, `sudo`, `rm -rf`

## Every session

Read this file, the last 10 lines of `DECISIONS.md`, and the latest entry in `PROGRESS.md`. Say which milestone is next and your plan for it in a few lines. Wait for Sheldon's go, then run the milestone.
