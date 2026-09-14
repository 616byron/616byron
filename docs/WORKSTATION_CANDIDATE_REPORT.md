# LB / 616 — Workstation Candidate

Workstation direction approved by Luciano. This branch remains a candidate, with an editorial and UX cleanup for visual review. Reviewed on 14 September 2026.

## Editorial and UX cleanup

Starting reference: `dc0565c47180b8a2c2344252730320be40e43de0`. This pass changes public wording and removes redundant disclosures; it does not redesign the page. Public labels now describe direction and stage. Source availability and technical uncertainty remain documented below, outside the README.

Disclosures reduced from **12 to 8**: five project records and three professional practice areas. Toolchain is always visible. TRACE became one native workflow sentence. Scientific Partner remains inside Digital Life Lab as visible subsystem content, without another toggle. Current Focus retains the same three projects; its Personal Project OS label now reads **ARCHITECTURE / PLANNING** in both artwork and native text.

## Architecture

Hero / system boot → System Profile → Capability Console → Professional Toolchain → Current Focus → Project Registry → Professional Practice → Now → 616 footer.

The original hero retains its graphite / amber identity, with a short boot sequence. A connected capability panel replaces separate generic cards. Native disclosures and navigation make the page explorable. Data & Automation lead the professional content; the synthetic-data portfolio plan remains linked.

## Project selection

| Project | Placement and verified limits |
| --- | --- |
| Digital Life Lab | Public: **FLAGSHIP · LONG-TERM PROJECT**; expanded by default. Internal: direction confirmed by the owner, current source files unavailable. Implementation remains **unverified**, including Scientific Partner, its research subsystem. |
| Personal Project OS | Public: **CORE · ARCHITECTURE / PLANNING**; Current Focus. Internal: architecture research and planning; implementation has not started. |
| Guia IA | Current Focus; private, in development. Original book identity preserved. |
| Two Paws | Current Focus; private, pre-production with local gameplay prototypes. Original cat identity preserved. |
| Presença IA | Public: **EXPERIMENT · TECHNOLOGY EXPLORATION**. Internal: engine undecided. An earlier Godot 2D rig is documented; continued implementation, 3D and live AI integration are unverified. No migration was performed. Engine comparison stays in the local `PRESENCA_TECH_REVIEW.md`. |

Excluded: Ruptura, Chappie Local, old Mini Chappie, Jarvis, and projects outside the selected living ecosystem. Jarvis is not Luciano's project. Current Digital Life Lab and robot source files remain missing from the inspected material; the robot is excluded by the latest scope. No repository was made public.

## Interaction and motion

- Eight native `details` elements: five project records and three professional practice areas; clear summaries, pointer and keyboard operation.
- Five top navigation links, project anchors, clickable hero/focus artwork and a return link.
- One animation concept: desktop/mobile APNG boot cursor, one three-second play, then a static end state. Reduced-motion preferences select separate static images. No animated SVG dependency.
- README uses supported Markdown/HTML and raster images, with no custom CSS, runtime JavaScript, iframe or injected script. Build and preview scripts are external to the rendered README.

GitHub documents [native collapsed sections](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections). Compatibility was also checked on the [actual candidate branch](https://github.com/616byron/616byron/tree/profile/workstation-candidate), not inferred solely from documentation.

## Validation

Cleanup: all ten local profile-layout cases passed in Chromium, at 320, 360, 390, 430 and 1440 px in dark and light modes. Checks include public wording, stages, eight disclosures, visible toolchain/subsystem, pointer/keyboard controls, anchors, images, alt text and reduced-motion source selection. Desktop, 320 px and light screenshots were visually inspected. No overflow was detected. The expanded-project capture shows Digital Life Lab open.

Cleanup previews are in `_profile-work/workstation-cleanup/`: `github-profile-desktop.png`, `github-profile-mobile-390.png`, `github-profile-mobile-320.png`, `github-profile-light.png` and `github-profile-project-expanded.png`. Verification JSON is retained beside them. Hero, boot APNG, palette, capability artwork, navigation and hierarchy are preserved; only the focus artwork's OS wording changes.

Baseline validation at `f86197a`: all 16 local profile-layout cases and 16 actual GitHub branch cases passed in Chromium at 320–1440 px in both themes, including the then-nested keyboard interaction. The GitHub-served APNG changed frames and settled as intended. No new motion or duration change is part of this cleanup.

Desktop preserves visual hierarchy; separate mobile artwork stacks the complex panels. Dark panels remain visible in light mode. Every image has useful alt text; essential names, stages, tools and links also exist as native text. This is browser and keyboard verification, not a full assistive-technology audit.

Local artifacts in `_profile-work/workstation/`: the four requested `github-profile-*.png` previews; closed/expanded detail captures; actual branch captures; `comparison-A-B-C-D.png`; verification JSON; and the private Presença technology analysis. Local profile previews emulate profile content widths; the live captures show the repository branch page because main was not changed.

## Historical comparison and identity

**A / 198bb8d:** approved hero and book/cat identities preserved; navigation, connected panels and native records add structure and interaction. **B / 976c848:** Data & Automation remain central, with 256 default-visible native words after cleanup versus 317 in B. **C / 25e5ebe:** the four generic boxes and reduced project presence are replaced by a hierarchical ecosystem.

Internal cleanup review: the workstation identity and five-project hierarchy remain intact; Project Registry is the main interaction area. The four redundant accordions are removed. Public copy has no audit or QA language; source and engine uncertainties remain in this report and local technical notes. The three professional practice disclosures remain useful for optional capability detail. The direction is approved; visual acceptance of this cleanup remains Luciano's decision.

## Delivery

- Branch: `profile/workstation-candidate`, created from main `be2300269c2b41ac16e0c664799027df1ecd5ad1`.
- Original implementation: `f86197aa0e7659263b976fa420712d4699993b3a`; cleanup reference: `dc0565c`. The cleanup commit uses `refactor(profile): clean public workstation copy`.
- Candidate push: completed. Main push: **NO**. Merge: **NO**. PR: **NO**.
- Private-data and asset checks passed; original approved source artwork was preserved. Project repository visibility was unchanged.
