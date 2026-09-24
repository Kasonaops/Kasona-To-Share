# Kasona To-Share

A small thank-you from the Kasona team: a curated collection of the AI agent skills, plugins, prompts and patterns that help us in our everyday work and business. We believe in sharing and building in public, so we're putting them out here for anyone to use.

This repository contains **only generic, reusable material**. It was deliberately created with fresh git history, separate from our internal repositories. It holds no customer data, no team information, no infrastructure details and no credentials.

> **Internal content does not belong here.** Anything customer-, team- or infrastructure-related lives in `Kasona-Team-Internal`. See [Contributing](#contributing).

## Start here (60 seconds, no coding)

You do not read these files yourself. **Claude reads them.** You paste a link into Claude and say what you want.

1. Find what you want in the table below.
2. Open the right Claude: the normal chat for methods and prompts, **Claude Code** for anything that builds something on your computer.
3. Paste: *"Read [link to the file] and [what you want, in your own words]."*

Exact copy-paste sentences for every item, and what to do if a link does not open: **[GETTING-STARTED.md](GETTING-STARTED.md)**. Full list of every file: [INDEX.md](INDEX.md).

Questions, feedback, or ideas for what to share next? Reach out at [hallo@kasona.ai](mailto:hallo@kasona.ai).

## Layout

| Folder | What it holds | In plain words | Use it in |
| --- | --- | --- | --- |
| [`Judgement/`](Judgement/README.md) | Modular decision toolkit: two engines (decision partner, board of advisors) plus plug-in ports for lenses, context, domain packs, tools and outputs | Think through a hard decision with a proven process | Any Claude |
| [`skills/`](skills/) | Agent skills following the `SKILL.md` convention | A method Claude follows with you | Any Claude |
| [`patterns/`](patterns/) | Framework-agnostic implementation patterns, concept guides rather than libraries | A recipe Claude uses to build something for you, for example automated product videos | Claude Code |
| [`prompts/`](prompts/) | Standalone prompts | Text you copy into a chat and fill in | Any Claude |
| [`plugins/`](plugins/) | Claude Code plugins, installable as-is | Add-ons for Claude Code | Claude Code |

## Usage

Each skill follows the `SKILL.md` convention: a description with trigger conditions in frontmatter, followed by the instructions. Reference files live under `references/`.

Skills can be used directly in Claude Code, Claude.ai or comparable environments: copy the folder into your skills directory.

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

When in doubt, do not commit. Ask first. **A pushed commit cannot be reliably removed from git history.**

## Language

Written in English. See `CONVENTIONS.md` in `Kasona-Team-Internal` for the full rule.
