# Kasona To-Share

A small thank-you from the Kasona team: a curated collection of the AI agent skills, plugins, prompts and patterns that help us in our everyday work and business. We believe in sharing and building in public, so we're putting them out here for anyone to use.

This repository contains **only generic, reusable material**. It was deliberately created with fresh git history, separate from our internal repositories — it holds no customer data, no team information, no infrastructure details and no credentials.

> **Internal content does not belong here.** Anything customer-, team- or infrastructure-related lives in `Kasona-Team-Internal`. See [Contributing](#contributing).

See [INDEX.md](INDEX.md) for the full contents. New to GitHub or not sure how to actually use any of this? See [GETTING-STARTED.md](GETTING-STARTED.md), no developer experience required.

Questions, feedback, or ideas for what to share next? Reach out at [hallo@kasona.ai](mailto:hallo@kasona.ai).

## Layout

| Folder | What it holds |
| --- | --- |
| `plugins/` | Claude Code plugins, installable as-is |
| `skills/` | Agent skills following the `SKILL.md` convention |
| `Judgement/` | Modular decision toolkit: two engines (decision partner, board of advisors) plus plug-in ports for lenses, context, domain packs, tools and outputs |
| `patterns/` | Framework-agnostic implementation patterns — concept guides, not libraries |
| `prompts/` | Standalone prompts |

## Usage

Each skill follows the `SKILL.md` convention: a description with trigger conditions in frontmatter, followed by the instructions. Reference files live under `references/`.

Skills can be used directly in Claude Code, Claude.ai or comparable environments — copy the folder into your skills directory.

## Contributing

Before anything lands here it must pass the redaction check:

- [ ] No customer names, offers, pricing or contract data
- [ ] No team members, email addresses or personal data
- [ ] No Notion database IDs, internal URLs or workspace references
- [ ] No infrastructure details (servers, ports, tunnels, deployment paths)
- [ ] No API keys, tokens or credentials
- [ ] No absolute local filesystem paths
- [ ] No brand-specific voice or ICP definitions tied to a real person

Rule of thumb: if an outsider could learn something about customers, the team or our systems from it, it does not belong here.

When in doubt, do not commit — ask first. **A pushed commit cannot be reliably removed from git history.**

## Language

Written in English. See `CONVENTIONS.md` in `Kasona-Team-Internal` for the full rule.
