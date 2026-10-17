# Decisions

Format: `YYYY-MM-DD | decision | why | decided by`

2026-10-17 | Build with Claude Code instead of Cowork | Claude Code is made for repos, git and deploys; tagged commits double as build evidence | Claude proposed, Sheldon approved
2026-10-17 | Be open about AI assistance; no attempt to disguise AI-written code | Sheldon doesn't want to hide any of the work | Sheldon
2026-10-17 | Sheldon writes all visible text; code uses [PLACEHOLDER] markers | The Academy discourages AI-written text | Sheldon
2026-10-17 | Plain HTML/CSS/JS, no framework, no build step | Smallest thing Sheldon can read and explain end to end | Claude proposed, Sheldon approved
2026-10-17 | Embed all 9 deck slides, clickable, in a scaled iframe | Keeps the pitch interactive; the iframe stops the deck's keyboard handler from taking over the page and stops type clipping on phones | Sheldon chose clickable, Claude proposed the iframe approach
2026-10-17 | Portfolio gets its own visual identity through a separate design round, clearly different from the deck and Lumen | Lumen tells the concept-to-reality story; the portfolio is the story of what Sheldon made | Sheldon
2026-10-17 | Build the AmeriFab system diagram in-house as SVG | No existing diagram | Sheldon
2026-10-17 | Patent card stays a reserved slot for now | Waiting to hear from the patent attorney | Sheldon
2026-10-17 | Claude Code works through each milestone unattended, stopping only at installs, settings, and unsettled choices | More gets done between sessions | Sheldon chose background mode, Claude proposed the stop list
2026-10-17 | Sheldon writes all visible text in COPY.md and commits it himself; Claude moves it onto the page word for word | Keeps his words untouched, and his own commits show he wrote them | Claude proposed in flaw review, Sheldon approved
2026-10-17 | Commit the deck unchanged first, then fix the counter in a separate commit | History shows the original concept and the fix apart | Claude proposed in flaw review, Sheldon approved
2026-10-17 | Remove the committed .DS_Store and add it to .gitignore | Keeps a macOS junk file out of the public repo | Sheldon
2026-10-17 | .claude/settings.json has the allow, ask and deny rules but no defaultMode | Sheldon keeps auto mode | Sheldon
2026-10-17 | Deck nav stays at the deck's own styling but is fully opaque on touch screens (hover: none) | Phones can't hover, and CLAUDE.md allows this change | Claude decided, Sheldon to review
2026-10-17 | Add previous/next buttons beside the deck embed that click the deck's own buttons | The deck's nav shrinks to a few pixels when scaled to a phone; same-origin iframe makes this possible without more deck changes | Claude proposed, Sheldon approved
2026-10-17 | Scale the deck iframe with a few lines of JS (ResizeObserver) from a 1200x715 native size | CSS alone can't divide lengths reliably across browsers | Claude proposed, Sheldon approved
2026-10-17 | Every link URL, alt text, iframe title and button label is a placeholder id in COPY.md | Rule 1 covers all visitor-facing strings, including ones read only by screen readers | Claude decided, Sheldon to review
2026-10-17 | Claude commits the empty COPY.md template once, labeled as the template; every commit after that is Sheldon's | Rule 4 said Claude never commits COPY.md, and Sheldon made this one exception for the blank template | Sheldon
2026-10-17 | Design direction is Redline (engineering drawing set marked up with a red pen), written up in DESIGN.md | Fits the builder-but-polished brief and stays distinct from Lumen's cream/amber | Sheldon chose from Claude's options
2026-10-17 | Claude may commit COPY.md only to add empty slots, with a commit message saying so; never edit or commit Sheldon's text | New design elements need new placeholders, and this saves a manual commit each time | Sheldon
2026-10-17 | Self-host Barlow and Barlow Semi Condensed in assets/fonts/ with the OFL license beside them, instead of loading Google Fonts | Rule 7 forbids third-party requests, and Google Fonts would add one on every visit | Sheldon chose from Claude's options
2026-10-17 | Revision clouds go around the Results section of cards 1 to 7 only, not the Also strip | The Also strip is a parts list, not a card | Sheldon
2026-10-17 | Each revision cloud draws itself the first time it scrolls into view, not all at page load | Clouds below the fold would finish drawing before anyone saw them; it is still one draw-in per cloud | Claude proposed, Sheldon approved
2026-10-17 | Title block labels (project, role, year, revision) share one placeholder id each across all cards; values are per card | One label to write instead of seven, and the labels should match across sheets like a real drawing | Claude proposed, Sheldon approved
2026-10-17 | Also parts list gets new placeholders for item numbers, column headers and a separate link-text cell for Senate | Item numbers and headers are visitor-facing text under Rule 1 | Claude proposed, Sheldon approved
2026-10-17 | Fonts ship as TTF files (Barlow 400/500, Barlow Semi Condensed 600/700), not converted to WOFF2 | No conversion tool is installed and installing one needs approval; TTF works in every current browser | Claude proposed, Sheldon approved
2026-10-17 | Corner marks, center marks and dimension lines are ink; only the grid, frame ticks and deck corner ticks are construction blue | Marks drawn in blue would vanish against the blue grid, and real registration marks are black | Claude decided, Sheldon to review
2026-10-17 | One example detail view (empty image slot, three callouts, three notes) goes in the Now building card | The component needs a live instance to build and check, and the whiteboard sketches look like they belong there; Sheldon can move or remove it | Claude decided, Sheldon to review
2026-10-17 | Callout and note numbers come from CSS counters, not typed text | Bubbles and the notes list can't drift apart and there are no digits to treat as copy | Claude decided, Sheldon to review
