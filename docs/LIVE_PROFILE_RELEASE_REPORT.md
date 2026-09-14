# LB / 616 — Live Profile Release

Published on 14 September 2026 for Luciano's final visual review at **[github.com/616byron](https://github.com/616byron)**. The approved architecture and public copy are preserved. No further visual revision is part of this release.

## Release references

- Candidate branch: `profile/workstation-candidate`.
- Starting candidate: `34430bb84196f56ad7a4e78af90224988968e68f`.
- Main before publication: `be2300269c2b41ac16e0c664799027df1ecd5ad1`.
- Published and verified visual commit: `c2f6b8eae3e9446d2d86820d2bcc5efa4779c54d`.
- Publication: fast-forward from candidate to main, followed by a normal push. No force push, history deletion or PR.
- This report is a documentation-only completion after verification of the public profile; it does not change the published README or assets.

## Visual changes

| Area | Change |
| --- | --- |
| Boot | Four short terminal states, ending at **workspace ready**. 3.2 seconds, one play, then static. |
| Capability Console | A small amber node activates each of the four domains once. 2.8 seconds, then the original static panel. Composition unchanged. |
| Current Focus | Digital Life Lab leads the primary/core tier; Personal Project OS remains prominent beside it. Guia IA and Two Paws occupy smaller active modules. Mobile stacks the same hierarchy. |

Only **two areas** animate. Both use GitHub-served APNGs and separate static `prefers-reduced-motion` sources. The four desktop/mobile APNG exports total 976,480 bytes; a viewport selects at most 496,041 bytes of animation assets. No external animation service or new dependency was added.

The five-project Registry, eight disclosures, toolchain, professional practice, navigation and public wording are preserved. Scientific Partner stays within Digital Life Lab. Its approved registry panel remains unchanged and static. Presença IA stays in the Registry. Technical uncertainties remain in the candidate report and existing technical notes.

## Validation

**Before publication:** ten local layout cases and ten actual candidate-page cases passed at 320, 360, 390, 430 and 1440 px, in dark and light modes. Four motion checks on each surface verified both animations at mobile and desktop widths.

**After publication:** the actual public profile, not just the repository page, passed the same ten layout cases and four motion checks. Tests covered loaded images, useful alt text, static reduced-motion sources, eight pointer/keyboard disclosures, visible toolchain, project links and section anchors. Boot displayed four states; the capability animation displayed five states including its static end. Both stopped. Hero/focus image links and navigation to the public case-plan document also passed.

Final desktop, mobile and light screenshots were visually inspected. No README overflow or broken assets were found. Layout tests wait for full page load; a transient pre-layout capture was discarded and rerun. A direct HTTP link probe received a temporary 429; ordinary browser navigation subsequently returned 200 and rendered the document. These required no profile change.

Validation used Chromium. Asset checks confirmed correct APNG timing, one play, valid PNG checksums and final frames identical to their static alternatives. Thirty existing artwork files remained byte-identical. No credentials, private project links, repository visibility changes or changes to other repositories were introduced.

Final screenshots and detailed evidence are local in `_profile-work/live-final/`: `github-profile-desktop.png`, `github-profile-mobile-390.png`, `github-profile-mobile-320.png`, `github-profile-light.png`, `github-profile-project-expanded.png`, and validation JSON. These screenshots show the real public profile.

## Rollback and review

Safety tag **`profile-before-workstation-live`** exists locally and remotely and resolves to `be2300269c2b41ac16e0c664799027df1ecd5ad1`. If rollback is requested, restore that tree in a new commit from a clean main worktree and push normally; do not reset shared history or force push.

Quality review: subtle boot, flagship hierarchy, prominent Personal Project OS, visible Guia IA / Two Paws, clear Data & Automation, native interaction, working GitHub motion and mobile layout all passed. Excessive effects: **none identified**. Publication is complete; final visual acceptance belongs to Luciano.
