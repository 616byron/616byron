# Data & Automation — future portfolio plan

**Status: planning only.** None of the projects below has been created as part of this profile update. The names are working titles, not links to existing repositories or claims of completed work.

The goal is to make practical data and automation skills visible through small, reproducible public examples. Professional experience can be described without a public repository; these future examples will provide material visitors can inspect and run.

## Data boundaries

- Generate all records from scratch using documented rules and a fixed random seed. Use 100% fictional scenarios and synthetic data, including orders, deliveries, carriers and operational events.
- Do not anonymize, adapt or export company spreadsheets, schemas, dashboards, scripts, reports or workflows. Design the examples independently.
- Use invented identifiers such as `ORDER-0001` and `CARRIER-A`. Avoid real names, addresses, account identifiers and contact details.
- State prominently in each README and output that the scenario and data are fictional. Any SLA threshold or business rule is a demonstration assumption.
- Report only results actually measured from the synthetic example. A simulated improvement is not a professional achievement or a claim about a company.
- Publish only standalone demonstration code and artifacts, with no credentials, internal URLs or links to private source repositories.

## Recommended order

| Order | Working title | Purpose | First deliverable |
|---|---|---|---|
| 1 | Data & Automation Lab | Show an end-to-end operational reporting pipeline | One reproducible synthetic orders-to-deliveries report |
| 2 | Apps Script Automation Lab | Show spreadsheet scripting and workflow automation | One fictional Google Sheets workbook with a manual menu-driven flow |
| 3 | Operations Data Lab | Deepen integration, validation and repeatable processing | A multi-file pipeline that safely handles reruns and invalid records |
| 4 | Automation Casebook | Explain the reasoning behind small automations | One case grounded in a completed, runnable synthetic example |

Start with a narrow Data & Automation Lab. Add the Apps Script example to show a different automation surface. Build Operations Data Lab only when it demonstrates something beyond the first lab; if the scope overlaps, extend the first project instead. Write casebook entries after there is a working example to document.

## 1. Data & Automation Lab

**Question:** Which fictional deliveries missed an explicitly defined SLA, and where should an operator look first?

**Tools:** Python, SQL, Excel and Power Query.

**Proposed flow:** Python generates synthetic CSV files → SQL loads and transforms them → curated CSV exports feed Excel through Power Query → a refreshable report summarizes volume, delivery time, missing events and SLA status.

Model orders, deliveries, carriers and status events. Include intentional missing dates, duplicate events and late deliveries. Define the meaning of each date, the reporting period and the SLA denominator, including how open or incomplete deliveries are handled. Use a local SQL database for reproducibility, without requiring a corporate system or paid service.

First scope:

- A small seeded generator and a data dictionary with explicit relationships.
- SQL transformations and documented quality checks.
- Power Query steps with portable input paths and an Excel report built solely from the generated outputs.
- A clear run-and-refresh guide, sample outputs and actual screenshots of the fictional report once implemented.

Proposed structure:

```text
README.md
data/synthetic/
src/generate_data.py
src/run_pipeline.py
sql/schema.sql
sql/transform.sql
power-query/
excel/
docs/data-dictionary.md
docs/assumptions.md
docs/screenshots/
checks/
```

Completion evidence: generated row counts reconcile across the pipeline; expected late and invalid records are identified; Excel refreshes from a configurable folder; screenshots match the committed synthetic dataset. Record the required Excel/Power Query environment and provide CSV outputs for readers without Excel.

## 2. Apps Script Automation Lab

**Question:** How can a fictional operations team consolidate several sheets and prepare a daily exception report without repeating the same manual steps?

**Tools:** Google Sheets and Google Apps Script.

Use fictional input tabs for orders and delivery updates. Add a custom menu to validate input, consolidate records, flag missing information and generate a report tab. Start with visible in-sheet alerts and manual execution; an optional scheduled trigger can come later. No real recipients or outgoing email are needed for the initial example.

First scope:

- A documented workbook layout and a script to populate synthetic sample rows.
- A custom menu with clear actions and completion/error messages.
- Consolidation that can be rerun without duplicating records.
- Exception alerts, report generation and a simple execution log inside the fictional workbook.
- Setup instructions explaining permissions and any optional trigger installation/removal.

Proposed structure:

```text
README.md
src/Code.gs
src/Menu.gs
src/Consolidation.gs
src/Reports.gs
src/SampleData.gs
docs/workbook-layout.md
docs/setup.md
docs/scenarios.md
examples/synthetic/
```

Completion evidence: a fresh workbook can be populated and operated from the menu; a second consolidation produces no duplicates; invalid input appears in the exception report. Show actual screenshots only after the flow works. Choose sharing settings separately when preparing the future demo.

## 3. Operations Data Lab

**Question:** Can daily fictional CSV exports be turned into consistent, traceable reports even when files arrive late or contain malformed records?

**Tools:** CSV, SQL, Python and Excel / Power Query.

This project should extend the engineering depth of the first lab. Focus on repeated runs, file ingestion, quality rules, rejected rows, incremental updates and reconciliation, rather than creating another similar dashboard.

First scope:

- Synthetic daily CSV batches, including duplicates and deliberately invalid records.
- Python ingestion into a local SQL database, with a record of each run.
- Explicit SQL transformations and a separate output for rejected records.
- Curated exports consumed by Excel / Power Query.
- A short explanation of how reruns and corrected input files are handled.

Proposed structure:

```text
README.md
data/synthetic/batches/
src/generate_batches.py
src/ingest.py
src/export_reports.py
sql/
power-query/
excel/
docs/pipeline.md
docs/quality-rules.md
checks/
```

Completion evidence: processing the same batch twice leaves the final data unchanged; malformed records are accounted for; input, accepted and rejected counts reconcile; the final Excel view can be regenerated from the documented inputs.

## 4. Automation Casebook

**Format:** problem → approach → automation → result.

Keep each case small and based on a completed synthetic demonstration. Suggested future cases are CSV consolidation, spreadsheet validation, exception reporting and recurring report preparation. Each case should link to public runnable code only after that code exists.

Proposed structure:

```text
README.md
cases/
  01-csv-consolidation.md
  02-spreadsheet-validation.md
  03-exception-reporting.md
examples/synthetic/
templates/case.md
```

Each entry should explain:

1. **Problem:** the fictional context, inputs and repetitive steps.
2. **Approach:** assumptions, tool choice and a small before/after workflow.
3. **Automation:** what was implemented, how to run it and how failures are handled.
4. **Result:** verified output and any measurements from the synthetic run, including method and limitations. Leave numerical claims out until measured.

Do not present these stories as client engagements, employment history or production deployments. Do not assign time savings or percentages in advance.

## When to add a project to the profile

Before a planned example becomes Selected Work, confirm that it exists, uses only synthetic inputs, can be reproduced from its documentation and has been reviewed for accidental secrets or private material. Label its actual maturity and limitations. Add a verified public link only when publication is separately authorized and complete.

No repository creation, project implementation, visibility change or company-material publication is part of this plan.
