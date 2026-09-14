# Maintaining the Workstation Candidate

Work only on `profile/workstation-candidate`. Do not merge, push main or create a PR without Luciano's subsequent instruction. The candidate began at main `be2300269c2b41ac16e0c664799027df1ecd5ad1`.

## Content

Edit `README.md` for native names, links, status, disclosure content and navigation. Keep `assets/projects/registry.json` aligned. Current Focus contains Personal Project OS (research), Guia IA and Two Paws; it is a selection, not the entire registry.

Digital Life Lab remains a long-term flagship with unverified implementation. Scientific Partner belongs within it. Presença IA is being reconsidered; do not imply a technology migration, 3D implementation or live AI connection has been completed.

Describe professional capabilities without client, employer, metrics, internal data or private code. Public cases use the existing synthetic-data plan. Never change project repository visibility as part of a profile edit.

## Assets

`assets/hero/` and the original Guia IA / Two Paws covers preserve approved source references. New compositions live in `assets/workstation/`; their source is `scripts/build-workstation.cjs`.

```sh
npm ci
npm run build:workstation
```

On PowerShell with script execution disabled, use `npm.cmd`. The generator uses the existing resvg dependency and Windows Segoe UI / Consolas fonts. It creates editable SVGs, PNG exports and APNGs without additional packages. `boot.png` and `boot-mobile.png` are APNG files; `boot-static*.png` are their static alternatives. Do not overwrite the animated files with a generic PNG-only renderer.

`npm run render:assets` remains available for the original hero/projects/modules only. The old nine-project registry generator and its obsolete composite artwork were removed on this candidate branch; history and main preserve the previous version.

## Preview and compatibility

Use the existing local `_profile-work/` infrastructure outside this public repository. The workstation harness renders through GitHub's Markdown API, captures historical references and tests pointer/keyboard disclosures, nested details, anchors, image loading, reduced-motion sources and APNG playback. It also verifies the actual GitHub candidate branch after push.

The local profile preview mirrors GitHub profile content widths: 238, 278, 308 and 348 px at mobile viewports of 320, 360, 390 and 430 px. It adds the heading anchors that the Markdown API omits; the actual GitHub branch page is tested separately. Preview CSS belongs only to the local harness, never the README.

Before pushing: review the explicit file list, `git diff --check`, responsive screenshots, native content and private-data checks. Push only `profile/workstation-candidate`. Reconfirm that remote main still matches the baseline SHA. Keep machine paths and detailed audit notes outside the public repository.
