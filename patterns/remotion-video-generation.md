# Automated video generation with Remotion + Claude Code

A pattern for turning a codebase, service description, brand assets and website into animated videos automatically, using [Remotion](https://github.com/remotion-dev/remotion) (React-based video framework) driven by Claude Code.

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)). The browser version of Claude cannot do this, because it has to create files and render video on your computer.
> 2. Create an empty folder, for example `my-videos`, and open it in Claude Code.
> 3. Paste this, with your own details in the brackets:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/remotion-video-generation.md. Set it up for me in this folder, step by step. My product is [what it does, in one sentence], my website is [link], and my audience is [who watches]. Before installing anything, tell me what you will install and why. Then make one short test video of about 20 seconds.*
>
> Claude will ask before installing anything (usually Node.js), ask you for your logo and colours, and hand you a video file at the end. More help: [GETTING-STARTED.md](../GETTING-STARTED.md).

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

Principle: Claude never works from "whatever it remembers", it always works against a fixed reference structure in `/content_context`. That prevents the model from inventing facts.

## 2. Set up the references

- **Brand assets** (logo, colors, fonts, tone) → document in `master_context_brand.md`
- **Persona** (who watches this video?) → `master_context_persona.md`, e.g. "Professional investor, impatient, wants to see the value in 10 seconds"
- **Customer journey** (which step is being visualized?) → `master_context_journeys.md`, e.g. "Onboarding → first analysis → aha moment"

These three files are the basis every Remotion component refers back to, so the messaging stays consistent regardless of who or what generates the content.

## 3. Make the brand binding, not just documented

Writing the brand down in `master_context_brand.md` is necessary but not
sufficient. A prose description is something the model can drift away from
under pressure. Three mechanisms turn it into something it cannot get wrong.

**A token module, mirrored from the product's real source.** Put the colours,
fonts, radii and shadows in one typed module (`src/theme/tokens.ts`) that every
composition imports, and derive the values from wherever the product actually
defines them, the stylesheet or design-token file the live app ships. Add a
comment next to each value naming the line it came from. Then hardcoding a hex
or a font name anywhere in a composition becomes a reviewable mistake, and when
the product restyles, the diff shows you exactly which video values went stale.
Export a light and a dark set from the same module rather than branching on a
boolean deep inside components.

**One wordmark component that serves the real asset.** The single most common
failure is a typographic stand-in: the brand name set in the brand's headline
font, which looks plausible in isolation and is not the logo. Ship the actual
logo file, load it through a component (`<Wordmark />`), and let every scene use
that component. Three practical details:

- *Serve the same file the product serves.* Copying a logo into the video
  project and letting it age is how a video ends up carrying last year's mark.
- *Logo files usually carry transparent padding.* If the glyphs occupy, say, 42%
  of the file's height and callers think in font sizes, convert once inside the
  component (`height = fontSize * capHeightRatio / glyphRatio`) instead of making
  every call site guess. Keep the prop the call sites already pass, so swapping a
  text stand-in for the real asset stays a one-file change.
- *Pass the theme in.* A logo has a light-background and a dark-background
  variant, and they are not the same file. If your scenes already resolve a
  theme, thread it down to the wordmark rather than letting the component read a
  global, or the dark render quietly ships the light mark.

**Keep the instructions and the tokens in agreement.** This is the failure worth
guarding against: if the written pipeline instructions name a concrete value
("captions in Roboto at 48px") while the token module says something else, an
agent following the instructions produces off-brand output and no test catches
it, because the render succeeds. Instructions should point at the token module
and the style guide rather than restating values. Any concrete value that has to
appear in prose should name its source.

## 4. From code/service to animation

1. Claude reads your codebase / service description / website
2. Extracts key messages → writes them into `content_context`
3. Builds a script from that (scene by scene)
4. Translates the script into Remotion components (React), importing tokens and
   the wordmark rather than restyling per scene
5. Renders as MP4/WebM

Before publishing a re-render, check what actually changed. Render a still at a
frame where the change should be visible and look at it, in both themes, rather
than trusting that the composition compiled. If the videos are served from
object storage, re-download one afterwards and inspect a frame from it: an
upload that returns success can still leave the old asset in place behind a
cache.

## 5. Quick start

```bash
npx create-remotion
```

Then set up the folder structure above and see the [Remotion docs](https://www.remotion.dev/docs).
