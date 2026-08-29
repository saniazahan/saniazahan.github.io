# Sania Zahan — Portfolio

A redesign of the original Tailwind Toolbox profile-card site into a
standalone, self-hosted design grounded in the actual subject matter:
gait and gesture analysis. No CDN framework — plain HTML/CSS/JS, so
it's fast and fully yours to edit.

## What changed

- **Design system**: dark "field notebook" palette (ink, paper, amber
  signal accent, sage), Space Grotesk (display) + Source Serif 4
  (body) + JetBrains Mono (data/labels), instead of the default
  Tailwind CDN look.
- **Signature element**: the animated gait-cycle line under the hero
  on every page — a literal reference to your gesture/gait research,
  not a decorative divider.
- **Sections restructured**:
  - `index.html` — Overview: hero, focus-area tags, about/stance,
    a short "Field log," and one spotlighted project.
  - `project.html` — full project grid (two cards now: the CVPR
    FGAHI 2023 work, and an "in progress" card for the mRNA work
    mentioned in your bio — replace with real detail whenever ready).
  - `activity.html` — replaces the old "Coming soon" placeholder with
    a real, dated log of talks/awards/collaborations (pulled from the
    News section on the old homepage, which felt like a better home
    for it).
  - `contact.html` — same info (email, office, map), restyled.
- **Dropped**: `forge.html` (looked like a leftover test file —
  the "I think, therefore I am" placeholder) and the light/dark
  toggle (the site is designed as a single deliberate dark theme;
  say the word if you'd like a toggle added back).
- Images are now local (`/images`) instead of hot-linked to raw
  GitHub URLs, and compressed for the web — `profile.jpg` went from
  13&nbsp;MB to ~150&nbsp;KB.

## To finish

- Drop your real project figure at `images/model_cls_fgahi_2023.png`
  (there's a graceful fallback if it's missing).
- Add `cv.pdf` at the site root — the CV link expects it there.
- Swap the placeholder Google Scholar / paper / code links in
  `project.html` and the sidebar for your real URLs.
- Update the map `<iframe>` in `contact.html` if your office changes.

## Deploying to GitHub Pages

1. Push this folder's contents to the root of your
   `<username>.github.io` repo (or any repo, then enable Pages).
2. In the repo, go to **Settings → Pages**, set the source to the
   branch you pushed (usually `main`) and folder `/ (root)`.
3. Your site will be live at `https://<username>.github.io/` (or the
   repo's Pages URL) within a minute or two.

No build step — it's static HTML/CSS/JS throughout.
