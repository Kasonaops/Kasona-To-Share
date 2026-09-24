# Index

Every document in this repository. Regenerate when adding content.

**Not technical?** You do not need to read these files. Paste a file's link into Claude and say what you want. Methods, skills and prompts work in any Claude. Patterns and plugins need **Claude Code**, because they build things on your computer. Copy-paste sentences: [GETTING-STARTED.md](GETTING-STARTED.md).

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

## `Judgement/`

A modular toolkit for thinking through decisions with no obviously correct answer, in any domain. Two engines, and five ports you plug your own material into like a USB stick: lenses (who advises), context (what is true), domain packs (how your field talks), tools (extra methods) and outputs (the shape of the deliverable). Built at Kasona Wealth Intelligence, where the investing version runs on our own data infrastructure. Start with [Judgement/README.md](Judgement/README.md).

| Entry | Purpose |
| --- | --- |
| [README.md](Judgement/README.md) | What it is, which engine to open, the five ports, the ground rules no plug can switch off |
| [PLUGGED-IN.md](Judgement/PLUGGED-IN.md) | The manifest: which plugs are active right now. Delete a row to unplug |
| [decision-partner](Judgement/decision-partner/SKILL.md) | Engine for one decision that is yours: OOC/EMR from ranked outcome to a dated decision, any domain |
| [board-of-advisors-blueprint](Judgement/board-of-advisors-blueprint/SKILL.md) | Engine for pressure-testing a decision from several angles: lens files with a provenance contract, routing, a four-round debate |
| [ports/README.md](Judgement/ports/README.md) | The plug contract, the Decision Record, how to add your own plug |

**decision-partner references:** [decision-frameworks](Judgement/decision-partner/references/decision-frameworks.md) · [decision-journal](Judgement/decision-partner/references/decision-journal.md)

**board-of-advisors-blueprint references:** [lens-file-format](Judgement/board-of-advisors-blueprint/references/lens-file-format.md) · [router](Judgement/board-of-advisors-blueprint/references/router.md) · [session-protocol](Judgement/board-of-advisors-blueprint/references/session-protocol.md) · [thinking-tools-integration](Judgement/board-of-advisors-blueprint/references/thinking-tools-integration.md) · [grounding-and-portability](Judgement/board-of-advisors-blueprint/references/grounding-and-portability.md) · [push-mode-digest](Judgement/board-of-advisors-blueprint/references/push-mode-digest.md) · [outputs-and-templates](Judgement/board-of-advisors-blueprint/references/outputs-and-templates.md)

**Ports (the plugs that ship with the sockets):**

| Port | Shipped plugs |
| --- | --- |
| lens | [template](Judgement/ports/lens/_template.md) · [skeptic-seat](Judgement/ports/lens/skeptic-seat.md) · [customer-seat](Judgement/ports/lens/customer-seat.md) |
| context | [template](Judgement/ports/context/_template.md) |
| domain | [template](Judgement/ports/domain/_template.md) · [personal-life-career](Judgement/ports/domain/personal-life-career.md) · [business-and-product](Judgement/ports/domain/business-and-product.md) |
| tools | [picker](Judgement/ports/tools/README.md) · [template](Judgement/ports/tools/_template.md) · [next-best-affordable](Judgement/ports/tools/next-best-affordable.md) · [kill-review](Judgement/ports/tools/kill-review.md) · [gate-ladder](Judgement/ports/tools/gate-ladder.md) · [sharp-questions](Judgement/ports/tools/sharp-questions.md) |
| output | [template](Judgement/ports/output/_template.md) · [decision-journal-entry](Judgement/ports/output/decision-journal-entry.md) · [one-page-memo](Judgement/ports/output/one-page-memo.md) · [real-advisor-briefing](Judgement/ports/output/real-advisor-briefing.md) · [chat-summary](Judgement/ports/output/chat-summary.md) |

## `patterns/`

Framework-agnostic implementation patterns. Concept guides, not libraries.

| Pattern | Purpose | Needs |
| --- | --- | --- |
| [guided-tour-pattern](patterns/guided-tour-pattern.md) | Interactive onboarding walkthrough: spotlight overlay, step data model, persistence | Claude Code, opened in your app's code folder |
| [remotion-video-generation](patterns/remotion-video-generation.md) | Turn a codebase, service description and brand assets into automated videos with Remotion + Claude Code | Claude Code, opened in an empty folder. Claude installs Node.js if missing, after asking |

## `prompts/`

Standalone prompts.

| Prompt | Purpose |
| --- | --- |
| [ultimate-debugger-prompt](prompts/ultimate-debugger-prompt/README.md) | Structured debugging prompt with a worked example |
