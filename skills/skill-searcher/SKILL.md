---
name: skill-searcher
description: Search across all skill files in the workspace by keyword or tag. Useful for finding relevant skills before building new agents or when an agent needs to discover what capabilities already exist.
---

# Skill Searcher

A utility skill that scans your entire `skills/` directory tree to find relevant skills by keyword.

## When to Use

- Before building a new agent — check if a relevant skill already exists
- When an agent needs to discover capabilities it can use for a task
- For auditing: see all skills related to a topic (e.g., "notion", "telegram", "research")

## How to Use

### On a remote host

Tell the agent:
```
Search through all files in <SKILLS_DIR>/ for skills related to "[keyword]".
For each match, report:
- File path
- The skill name (from YAML frontmatter or first heading)
- A one-line summary
- Whether it's a shared skill or agent-specific
```

### From Antigravity (Local)

Search the local workspace skills:
```bash
grep -rl "[keyword]" /path/to/Gemini\ Gems/skills/ --include="*.md" | head -20
```

Or for a more structured search:
```bash
# Search SKILL.md files specifically for skill names and descriptions
find /path/to/Gemini\ Gems/skills/ -name "SKILL.md" -exec grep -l "[keyword]" {} \;
```

## Advanced: Self-Updating Skill Index

For faster searches, you can have the agent maintain a skill index:

```
Create and maintain a file at <SKILLS_DIR>/INDEX.md that lists every skill.
Format:
| Skill Name | Path | Description | Tags |
Update this index whenever a new skill is created.
```

This turns keyword search into a simple file read instead of a filesystem scan.

## Integration with Orchestrator

The orchestrator agent should reference this skill when it receives a task it's unsure how to handle:

```markdown
# In orchestrator soul.md, add:
When you receive a task and are unsure which sub-agent or skill to use:
1. First, check <SKILLS_DIR>/INDEX.md for matching skills
2. If no match, search all skill files with keyword matching
3. If still no match, research how to build the capability
```
