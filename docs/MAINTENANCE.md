# Maintaining the Workstation Candidate

Visual work is developed on `profile/workstation-candidate`. Luciano authorized this release to main after candidate validation, followed by verification of `https://github.com/616byron`. The previous main is `be2300269c2b41ac16e0c664799027df1ecd5ad1`; preserve the rollback tag `profile-before-workstation-live`. Do not begin another revision after publication without a new instruction.

## Content

Edit `README.md` for native names, links, status, disclosure content and navigation. Keep `assets/projects/registry.json` aligned. Current Focus leads with Digital Life Lab (long-term flagship) and Personal Project OS (core architecture); Guia IA and Two Paws are smaller active modules. Presença IA remains in the registry. Flagship placement does not change the research project's implementation status.

Use portfolio language in public copy. Digital Life Lab is a long-term project; Presença IA is a technology exploration. Keep missing-source notes, unverified implementation and engine decisions in `docs/WORKSTATION_CANDIDATE_REPORT.md` and local technical notes. The registry has five project disclosures; Scientific Partner is native content inside Digital Life Lab. Three further disclosures cover professional practice. Toolchain and workflow stay visible without toggles.

Digital Life Lab remains a long-term flagship with unverified implementation. Scientific Partner belongs within it. Presença IA is being reconsidered; do not imply a technology migration, 3D implementation or live AI connection has been completed.

Describe professional capabilities without client, employer, metrics, internal data or private code. Public cases use the existing synthetic-data plan. Never change project repository visibility as part of a profile edit.

## Assets

`assets/hero/` and the original Guia IA / Two Paws covers preserve approved source references. New compositions live in `assets/workstation/`; their source is `scripts/build-workstation.cjs`.

```sh
npm ci
npm run build:workstation
```

On PowerShell with script execution disabled, use `npm.cmd`. The generator uses the existing resvg dependency and Windows Segoe UI / Consolas fonts. It creates editable SVGs, PNG exports and APNGs without additional packages. Boot APNGs play four states over 3.2 seconds; capability motion activates four nodes and settles after 2.8 seconds. Each plays once. `boot-static*.png` and the original `capability-console*.png` without `motion` are their reduced-motion alternatives. Do not overwrite animated files with a PNG-only renderer. Keep motion limited to these two areas.

`npm run render:assets` remains available for the original hero/projects/modules only. The old nine-project registry generator and its obsolete composite artwork were removed on this candidate branch; history and main preserve the previous version.

## Preview and compatibility

Use the existing local `_profile-work/` infrastructure outside this public repository. The workstation harness renders through GitHub's Markdown API, captures historical references and tests pointer/keyboard disclosures, anchors, image loading, reduced-motion sources and APNG playback. The cleanup harness also checks eight disclosures, public labels and visible toolchain/subsystem content. It verifies the actual GitHub candidate branch after push.

The local profile preview mirrors GitHub profile content widths: 238, 278, 308 and 348 px at mobile viewports of 320, 360, 390 and 430 px. It adds the heading anchors that the Markdown API omits; the actual GitHub branch page is tested separately. Preview CSS belongs only to the local harness, never the README.

Before publication: review the explicit file list, `git diff --check`, responsive screenshots, native content and private-data checks. Validate the candidate served by GitHub, record the previous main, create the safety tag, and use a normal merge or fast-forward without force push. After pushing main, verify the public profile itself. Keep machine paths and detailed audit notes outside the public repository.
