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
