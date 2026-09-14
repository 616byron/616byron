# Maintaining this profile

## Edit content

Edit `README.md` directly. Keep project names, maturity and public availability accurate. A project being mentioned does not mean its source is public. Add a repository link only after confirming it is public and intended for this profile.

Keep skills separate from public projects. A skill Luciano confirms he uses can be listed without a public repository. Describe professional capabilities in general terms; never copy company material or imply that a private engagement is a public case study. Planned synthetic examples must remain labeled as plans until they exist.

Lead with data and automation, followed by software, AI and personal experiments. Keep the Toolbox grouped into Data & Automation and Software & AI, using native text that wraps on mobile. Preserve the LB / 616 artwork and palette.

Use `templates/PROJECT_README_TEMPLATE.md` when preparing an individual project's README. The template is a writing aid, not a statement that its sections or features already exist.

## Edit artwork

The SVG files in `assets/hero/` and `assets/projects/` are the editable source of truth. They contain real text and vector geometry, without embedded raster assets, scripts or remote resources.

The PNG files are committed so GitHub does not need a build step or an external rendering service. Regenerate them on a machine with Segoe UI, Segoe UI Bold and Consolas:

```sh
npm ci
npm run render:assets
```

The renderer uses a small native SVG library. It does not download a browser. On another operating system, deliberately choose available font families in the SVG and update the renderer before generating new PNGs. Do not distribute proprietary font files.

## Before publishing an update

1. Confirm the GitHub account and the `origin` repository.
2. Review each staged file and `git diff --cached --check`.
3. Check local asset paths and external links; view the README on desktop and mobile.
4. Inspect new files for credentials, personal data, internal URLs and copied private material. Do not stage internal audit reports or application configuration.
5. Commit the intended files explicitly and push without rewriting history.

This repository contains public profile material only. Detailed portfolio audit reports are kept separately in the owner's local workspace. Existing project READMEs, descriptions, visibility and pins are managed independently.
