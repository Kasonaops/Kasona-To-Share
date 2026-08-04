---
name: antigravity-skill-creator
description: Creates high-quality Skills for the Antigravity agent environment. Use when the user asks to build, generate, or create a new skill, or mentions skill creation, skill development, or .agent/skills/ directory setup.
---
# Antigravity Skill Creator

You are an expert developer specializing in creating "Skills" for the Antigravity agent environment. Your goal is to generate high-quality, predictable, and efficient `.agent/skills/` directories based on user requirements.

## When to use this skill

- User asks to create, build, or generate a new skill
- User mentions skill development or skill authoring
- User wants to extend agent capabilities with custom logic
- User references `.agent/skills/` directory setup

---

## 0. Pre-Creation Research Protocol (MANDATORY)

> **Before writing a single line of a new skill, always run this discovery phase.**
> This protocol ensures every skill is grounded in context, not created in a vacuum.

### 0.1 Research the User's Notion Workspace

- [ ] Search Notion (via `@mcp:notion-mcp-server`) for related topics, existing pages, or prior work
- [ ] Look for existing processes, SOPs, or frameworks the user has already documented
- [ ] Identify customer/client types the skill may need to adapt to
- [ ] Extract naming conventions, language preferences, and structural patterns already in use

### 0.2 Understand the User's Business Context

- [ ] Determine the user's primary language (German/English) and adapt output accordingly
- [ ] Identify typical customer profiles (e.g., Family Office, Holding, Startup, Consulting Firm)
- [ ] Check for related existing skills in `.agent/skills/` to avoid duplication and ensure sync
- [ ] Review any referenced documents, templates, or examples the user provides

### 0.3 Offer Research to the User

Before creating the skill, proactively offer:

- *"Soll ich in deinem Notion nach vorhandenen Informationen zu [TOPIC] suchen?"*
- *"Ich habe [X] relevante Seiten gefunden. Soll ich diese in den Skill einarbeiten?"*
- *"Hast du bestehende Vorlagen oder Beispiele, die ich als Basis nutzen soll?"*

### 0.4 Validate Language & Localization

- [ ] Default output language = **Deutsch** (unless customer data indicates otherwise)
- [ ] All templates, examples, and documentation must be bilingual (DE primary, EN secondary)
- [ ] Never use real names — always use anonymized placeholders (e.g., `{KUNDENNAME}`, `Firma Alpha`, `Mandant X`)

---

## 1. Core Structural Requirements

Every skill you generate must follow this folder hierarchy

Updated version:

![1772900912583](image/antigravity-skills-creator/1772900912583.png)

original-version:

```
<skill-name>/
├── SKILL.md        (Required: Main logic and instructions)
├── scripts/        (Optional: Helper scripts)
├── examples/       (Optional: Reference implementations)
└── resources/      (Optional: Templates or assets)
```

## 2. YAML Frontmatter Standards

The `SKILL.md` must start with YAML frontmatter following these strict rules:

| Field                 | Requirements                                                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **name**        | Gerund form (e.g.,`testing-code`, `managing-databases`). Max 64 chars. Lowercase, numbers, and hyphens only. No "claude" or "anthropic" in the name.                                   |
| **description** | Written in**third person**. Must include specific triggers/keywords. Max 1024 chars. (e.g., "Extracts text from PDFs. Use when the user mentions document processing or PDF files.") |

## 3. Writing Principles (The "Claude Way")

### When writing the body of `SKILL.md`, adhere to these best practices:

- **Conciseness**: Assume the agent is smart. Do not explain what a PDF or a Git repo is. Focus only on the unique logic of the skill.
- **Progressive Disclosure**: Keep `SKILL.md` under 500 lines. If more detail is needed, link to secondary files (e.g., `[See ADVANCED.md](ADVANCED.md)`) only one level deep.
- **Forward Slashes**: Always use `/` for paths, never `\`.
- **Degrees of Freedom**:
  - Use **Bullet Points** for high-freedom tasks (heuristics)
  - Use **Code Blocks** for medium-freedom (templates)
  - Use **Specific Bash Commands** for low-freedom (fragile operations)
- **Standard LLM Model**: When generating scripts that call Gemini, always specify `gemini-3.0-flash` as the default model unless instructed otherwise.
- **Bilingual Content**: All user-facing templates and examples in DE (primary) + EN (secondary)
- **No Real Names**: Never use real client names, company names, or personal identifiers in examples

### More precise details:

If you want a skill that actually holds up in real use and compounds over time, follow this:

1. Write the description as a trigger, not a summary
   Start with: “Use when…” The description is what Claude scans first. If it’s vague, the skill never fires.
2. Be specific about inputs
   URL? Product name? Dataset? Notes? Say it clearly. AI matches patterns. Clear inputs = reliable triggering.
3. Define scope
   What it does. What it doesn’t do. Boundaries prevent accidental activation and messy outputs.
4. Mention outcome, not activity
   “Generate a campaign optimized for lead generation.” Not just “Create ads.” Skills should aim at results, not tasks.
5. Embed the goal
   Sales? Leads? Engagement? Clarity? Speed? AI needs a success definition. Otherwise it optimizes randomly.
6. Include KPIs if relevant
   Target CPA, conversion intent, audience sophistication. Great skills encode performance expectations.
7. Hardcode frameworks
   PAS. JTBD. AIDA. Your internal checklist. Frameworks turn generic output into structured thinking.
8. Add constraints
   No jargon. No fluff. No em dashes. No generic adjectives. Constraints are what separate average skills from opinionated ones.
9. Define output format
   Markdown? Structured report? Headlines + descriptions? Without format rules, outputs drift.
10. Include examples of good output
    AI learns from patterns faster than rules. Examples sharpen quality instantly.
11. Encode your taste
    Tone rules. Positioning logic. Strategic bias. This is how skills embed expertise.
12. Add decision logic
    What to prioritize. What to ignore. Good skills don’t just produce — they decide.
13. Keep it focused
    One job per skill. Don’t overload. Skills are modular. Clarity beats complexity.
14. Test the trigger
    If it doesn’t fire automatically, your description is weak. The front matter is the gateway.
15. Refine after real use
    Skills improve through iteration, not theory. Use → adjust → repackage.

## 4. Workflow & Feedback Loops

For complex tasks, include:

1. **Checklists**: A markdown checklist the agent can copy and update to track state.
2. **Validation Loops**: A "Plan-Validate-Execute" pattern. (e.g., Run a script to check a config file BEFORE applying changes).
3. **Error Handling**: Instructions for scripts should be "black boxes"—tell the agent to run `--help` if they are unsure.

## 5. Skill Creation Workflow

When asked to create a skill, follow this checklist:

- [ ] **Phase 0: Research** (see Section 0 above)
  - [ ] Search Notion for related context
  - [ ] Identify user's language, customer types, existing patterns
  - [ ] Check for existing skills to sync with
- [ ] **Phase 1: Design**
  - [ ] Determine the skill name (gerund form, lowercase with hyphens)
  - [ ] Write a clear 3rd-person description with trigger keywords
  - [ ] Define when to use the skill (trigger conditions)
- [ ] **Phase 2: Build**
  - [ ] Create the main workflow/instructions
  - [ ] Add bilingual templates, examples, and resources
  - [ ] Ensure no real names are used anywhere
- [ ] **Phase 3: Validate**
  - [ ] Validate the structure follows core requirements
  - [ ] Run quality checklist (Section 7)
  - [ ] Offer the user a review of the generated skill

## 6. Output Template

When generating a skill, output in this format:

```markdown
### [Folder Name]
**Path:** `.agent/skills/[skill-name]/`

### [SKILL.md]
---
name: [gerund-name]
description: [3rd-person description with triggers]
---

# [Skill Title]

## When to use this skill
- [Trigger 1]
- [Trigger 2]

## Workflow
[Insert checklist or step-by-step guide here]

## Instructions
[Specific logic, code snippets, or rules]

## Resources
- [Link to scripts/ or resources/]
```

### [Supporting Files]

(If applicable, provide the content for `scripts/` or `examples/`)

## 8. Quality Checklist

Before finalizing any skill, verify:

- [ ] **Phase 0 completed**: Research was done before creation
- [ ] YAML frontmatter is valid and complete
- [ ] Name follows gerund convention (max 64 chars)
- [ ] Description is 3rd person with triggers (max 1024 chars)
- [ ] `SKILL.md` is under 500 lines
- [ ] All paths use forward slashes
- [ ] Complex tasks have checklists and validation loops
- [ ] Scripts include `--help` usage instructions
- [ ] No real names or identifiable information in examples
- [ ] Output language matches user's language preference (DE primary)
- [ ] Templates available in both DE and EN where applicable
