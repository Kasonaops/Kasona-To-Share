# Index

Every document in this repository. Regenerate when adding content.

## Root

| File | Purpose |
| --- | --- |
| [README.md](README.md) | What this repository is, contribution gate |
| [INDEX.md](INDEX.md) | This file |

## `plugins/`

Claude Code plugins, installable as-is.

| Plugin | Entry point | Purpose |
| --- | --- | --- |
| seo-audit | [SKILL.md](plugins/seo-audit/SKILL.md) | Technical SEO audit: categories, checks, reporting structure |
| seo-optimizing | [SKILL.md](plugins/seo-optimizing/plugins/seo/seo-optimizing/skills/seo-optimizing/SKILL.md) | SEO optimisation: analysis playbooks, keyword and ranking work |

**seo-audit references:** [audit-categories](plugins/seo-audit/references/audit-categories.md) · [cli-reference](plugins/seo-audit/references/cli-reference.md) · [configuration-guide](plugins/seo-audit/references/configuration-guide.md) · [troubleshooting](plugins/seo-audit/references/troubleshooting.md)

**seo-optimizing references:** [analysis-playbooks](plugins/seo-optimizing/plugins/seo/seo-optimizing/skills/seo-optimizing/references/analysis-playbooks.md) · [data-interpretation](plugins/seo-optimizing/plugins/seo/seo-optimizing/skills/seo-optimizing/references/data-interpretation.md) · [gsc-api-reference](plugins/seo-optimizing/plugins/seo/seo-optimizing/skills/seo-optimizing/references/gsc-api-reference.md) · [optimization-templates](plugins/seo-optimizing/plugins/seo/seo-optimizing/skills/seo-optimizing/references/optimization-templates.md) · [troubleshooting](plugins/seo-optimizing/plugins/seo/seo-optimizing/skills/seo-optimizing/references/troubleshooting.md)

## `skills/`

Agent skills following the `SKILL.md` convention.

| Skill | Entry point | Purpose |
| --- | --- | --- |
| error-handling-patterns | [SKILL.md](skills/error-handling-patterns/SKILL.md) | Robust error handling in agent workflows |
| excalidraw-diagrams | [SKILL.md](skills/excalidraw-diagrams/SKILL.md) | Generate Excalidraw diagrams programmatically |
| humanizing-text | [SKILL.md](skills/humanizing-text/SKILL.md) | Turn generic AI prose into natural language |
| skill-searcher | [SKILL.md](skills/skill-searcher/SKILL.md) | Find the right skill in a library by semantic match |
| ui-ux-pro-max | [SKILL.md](skills/ui-ux-pro-max/SKILL.md) | UI/UX reference: style systems, palettes, component patterns |

**error-handling-patterns references:** language-specific patterns for [Go](skills/error-handling-patterns/references/go-patterns.md) · [Python](skills/error-handling-patterns/references/python-patterns.md) · [Rust](skills/error-handling-patterns/references/rust-patterns.md) · [TypeScript](skills/error-handling-patterns/references/typescript-patterns.md)

**excalidraw-diagrams:** [examples](skills/excalidraw-diagrams/examples/) (api-flow, cicd-pipeline, user-registration) · [generators](skills/excalidraw-diagrams/diagrams-workflows/)

**ui-ux-pro-max:** [cloning_website](skills/ui-ux-pro-max/cloning_website.md) · [antigravity-skills-creator](skills/ui-ux-pro-max/antigravity-skills-creator.md) · `data/` holds the style, palette, typography and stack CSVs · `scripts/` holds the search and design-system helpers

## `patterns/`

Framework-agnostic implementation patterns. Concept guides, not libraries.

| Pattern | Purpose |
| --- | --- |
| [guided-tour-pattern](patterns/guided-tour-pattern.md) | Interactive onboarding walkthrough: spotlight overlay, step data model, persistence |

## `prompts/`

Standalone prompts.

| Prompt | Purpose |
| --- | --- |
| [ultimate-debugger-prompt](prompts/ultimate-debugger-prompt/README.md) | Structured debugging prompt with a worked example |
