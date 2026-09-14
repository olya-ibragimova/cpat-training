# CPAT Training

A simple, static tracker for a 9-week CPAT (Candidate Physical Ability Test) preparation program, built from the IAFF CPAT Candidate Preparation Guide (Appendix B).

Sept 14 – Nov 15, 2026: 3 circuit sessions, 2 weighted stair climbs, 3 easy runs, 2 swims, and one full rest day per normal week, with lighter weeks and a taper built in around Lab Visit #2 and Lab Visit #3.

## Using it

Open `index.html` in a browser — no build step, no server, no dependencies. Check off each session as you complete it; checkmarks are saved in that browser's `localStorage`, so they persist across visits on the same device but don't sync anywhere. Use the Export/Import buttons at the bottom of the page to back up progress or move it to another device.

Two tabs:
- **Program** — the setup checklist, then the week-by-week schedule (tap a week to expand it).
- **Guide reference** — the 13 stretches, both circuits, chin-up progression, stair-climb pack loading, training principles, and cautions, straight from the guide.

## Deploying

A GitHub Actions workflow (`.github/workflows/pages.yml`) deploys the site to GitHub Pages on every push to `main`. To turn it on: **Settings → Pages → Build and deployment → Source: GitHub Actions**, in this repository.

## Editing the schedule

All program content lives in `data.js` as plain JS objects — weeks, days, sessions, and the reference tables. Edit it directly; `index.html`, `style.css`, and `app.js` don't need to change for schedule tweaks.
