# Maintaining this profile

## Edit content

Edit `README.md` directly. Keep project names, maturity and public availability accurate. A project being mentioned does not mean its source is public. Add a repository link only after confirming it is public and intended for this profile.

Keep skills separate from public projects. A skill Luciano confirms he uses can be listed without a public repository. Describe professional capabilities in general terms; never copy company material or imply that a private engagement is a public case study. Planned synthetic examples must remain labeled as plans until they exist.

Lead with data and automation, followed by software, AI and personal experiments. Keep the Toolbox grouped into Data & Automation and Software & AI, using native text that wraps on mobile. Preserve the LB / 616 artwork and palette.

Use `templates/PROJECT_README_TEMPLATE.md` when preparing an individual project's README. The template is a writing aid, not a statement that its sections or features already exist.

## Edit artwork

The SVG files in `assets/hero/`, `assets/projects/` and `assets/modules/` contain real text and vector geometry, without embedded raster assets, scripts or remote resources. Registry content is maintained in `assets/projects/registry.json`; `scripts/build-registry.cjs` owns its desktop/mobile composition. Keep the README text version and image descriptions aligned with those sources.

The PNG files are committed so GitHub does not need a build step or an external rendering service. Regenerate them on a machine with Segoe UI, Segoe UI Bold and Consolas:

```sh
npm ci
npm run build:registry
npm run render:assets
```

To render only specific folders, use `npm run render:assets -- modules` or `npm run render:assets -- projects modules`. The renderer rejects unknown folder names. No dependency changes are required.

The What I Build panel, project registry and focus artwork use separate mobile compositions, selected with `<picture>` up to a 1000 px viewport so the text remains readable beside GitHub's sidebar. Keep the complete meaning in alt text and retain the registry's expandable native text version. Full original project covers remain in the [design reference](DESIGN_DNA.md#artwork-reference).

## Project registry rules

Keep ecosystem membership separate from current focus. A prototype, research plan or unverified idea is not automatically active. The existing focus selection remains Guia IA and Two Paws until Luciano changes it. To change that selection, update `focus` in the manifest and adapt the focus composition; the generator deliberately stops when a different selection needs a layout update.

Digital Life Lab and Mini Chappie currently summarize owner-supplied ideas, with unverified stages. Verify their current files before replacing those labels. Also verify the robot's official name. Scientific Partner stays within Digital Life Lab; do not count it as an independent flagship. Career OS has research documents, not an implemented application. The inspected Presença IA rig is 2D; do not advertise 3D or a live AI connection without new evidence.

Describe project ideas only. Keep private repository links, internal architecture details, local paths and private code out of the public profile. Naming a project never authorizes changing its repository visibility. Record detailed source evidence and unresolved checks in the local `profile-audit/` folder outside this repository.

Keep local previews and verification output outside the public repository. A short public completion report may live in `docs/`; internal audit details and machine paths must stay local.

The renderer uses a small native SVG library. It does not download a browser. On another operating system, deliberately choose available font families in the SVG and update the renderer before generating new PNGs. Do not distribute proprietary font files.

## Before publishing an update

1. Confirm the GitHub account and the `origin` repository.
2. Review each staged file and `git diff --cached --check`.
3. Check local asset paths and external links; view the README on desktop and mobile.
4. Inspect new files for credentials, personal data, internal URLs and copied private material. Do not stage internal audit reports or application configuration.
5. Commit the intended files explicitly and push without rewriting history.

This repository contains public profile material only. Detailed portfolio audit reports are kept separately in the owner's local workspace. Existing project READMEs, descriptions, visibility and pins are managed independently.
