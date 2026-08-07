# Automated video generation with Remotion + Claude Code

A pattern for turning a codebase, service description, brand assets and website into animated videos automatically, using [Remotion](https://github.com/remotion-dev/remotion) (React-based video framework) driven by Claude Code.

## Optional add-ons

- **Voiceover:** any TTS provider with a stable voice ID and API key (e.g. ElevenLabs)
- **Avatars:** HeyGen
- **Other generated video:** Higgsfield (via MCP)

## 1. Folder structure

```
/your-project
/content_context          ← all references/facts
  master_context_brand.md
  master_context_persona.md
  master_context_journeys.md
/project-setup            ← the project's "constitution"
  claude.md                ← goal, tone, rules
  style_guide.md
  task_plan.md
/remotion
  /src
    compositions/          ← individual video scenes as React components
    assets/                ← logos, fonts, colors from brand assets
    root.tsx
```

Principle: Claude never works from "whatever it remembers" — it always works against a fixed reference structure in `/content_context`. That prevents the model from inventing facts.

## 2. Set up the references

- **Brand assets** (logo, colors, fonts, tone) → document in `master_context_brand.md`
- **Persona** (who watches this video?) → `master_context_persona.md`, e.g. "Professional investor, impatient, wants to see the value in 10 seconds"
- **Customer journey** (which step is being visualized?) → `master_context_journeys.md`, e.g. "Onboarding → first analysis → aha moment"

These three files are the basis every Remotion component refers back to, so the messaging stays consistent regardless of who or what generates the content.

## 3. From code/service to animation

1. Claude reads your codebase / service description / website
2. Extracts key messages → writes them into `content_context`
3. Builds a script from that (scene by scene)
4. Translates the script into Remotion components (React)
5. Renders as MP4/WebM

## Quick start

```bash
npx create-remotion
```

Then set up the folder structure above and see the [Remotion docs](https://www.remotion.dev/docs).
