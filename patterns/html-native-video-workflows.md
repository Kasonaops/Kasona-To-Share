# Three video workflows on an HTML-native framework

A pattern for making motion graphics and explainer videos with Claude Code, where the video is code (HTML, CSS, animation) that an agent writes, a renderer plays frame by frame, and ffmpeg encodes. Three workflows: an ad spot for a software product from its website, a faceless explainer with self-drawn figures, and a release-notes clip from a pull request.

[HyperFrames](https://github.com/heygen-com/hyperframes) (open source, Apache 2.0, from HeyGen) is the worked example. [Remotion](https://www.remotion.dev) is the React-based alternative, covered in [remotion-video-generation](remotion-video-generation.md).

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)).
> 2. Create an empty folder for the video project and open it in Claude Code.
> 3. Paste, with your own details in the brackets:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/html-native-video-workflows.md. I want workflow [a, b or c] for [topic or link]. Tell me what you need to install and why before you do anything, then make a first version and show me still images before the full render.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md).

## Why video as code

The video is a web page that moves. The agent writes it, a renderer captures each frame, ffmpeg encodes. Every colour, timing and word is text the agent can change when you say "the second scene is too fast", and you do not pay for or hope on a new generation. Compared with a generative video model, this is much better at things that must be exact: logos, fonts, numbers, captions, brand colours. It is worse at photoreal footage.

## Install pointers (as documented by HyperFrames, check its README for the current text)

Requirements: Node.js 22 or newer, and ffmpeg.

For Claude Code, install the plugin, then call the router skill:

```bash
claude plugin marketplace add heygen-com/hyperframes
```

Then install the `hyperframes` plugin from that marketplace (the exact `claude plugin install` argument is in the README, or use the `/plugin` menu), and enable auto-update for it.

Other agents or a standalone install: `npx skills add heygen-com/hyperframes`, or `npx hyperframes skills update` for the core set. Manual CLI loop:

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # live preview in the browser
npx hyperframes render       # MP4 output
```

The project ships skills the agent loads on demand. The router skill picks the workflow; the three used below are `product-launch-video`, `faceless-explainer` and `pr-to-video`. There are more skills for captions, talking-head overlays, motion graphics and audio (for the audio side see [audio-ducking-and-mix](audio-ducking-and-mix.md)). Claude asks before installing anything.

## The prompting principle: goal, references, taste

Do not write a step-by-step recipe. Current models do better when you give them:

1. **Goal.** What the video is for, who watches, how long, which format.
2. **References.** The files and sources it must use: a website URL, a facts file, a brand file, a voice, music files. Anything it should not invent.
3. **Taste.** What it should feel like. This is the part the model cannot guess: pace, mood, type, how illustrated, what to avoid.

Then let the agent choose the steps. Add structure only where mistakes are expensive (facts, brand, licences), as in the checks below.

## Workflow A: ad spot for a software or service product from its URL

You cannot film a service, but you can show what it does for the customer. Input is the product's website.

Flow:

1. **Brand extraction.** From the site, collect the logo (official file), fonts, colour palette and the product's own wording. Write them into a brand file the whole project reads (for example `brand.md`, or a video design spec; HyperFrames documents a `frame.md` format for this, verify). Whether the framework's launch skill does this extraction itself is **verify**; if not, have the agent do it with a scraping tool.
2. **Script.** 20 to 30 seconds, one promise, one proof, one call to action. Show what the product does for the customer, not an interface tour.
3. **Voiceover.** Pick a voice at a text-to-speech provider (ElevenLabs is one example) and give the agent its voice ID. The API key lives in an environment variable on your machine and is never pasted into a prompt or a file.
4. **Background music.** A licensed library track, quiet. See [audio-ducking-and-mix](audio-ducking-and-mix.md).
5. **Build, then QA gate** (below).

Prompt template:

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/html-native-video-workflows.md, workflow A.
> Goal: a `[length]` ad spot for `[product]` aimed at `[audience]`, format `[16:9 or 9:16]`, language `[language]`. Source of truth: `[website URL]`.
> References: extract the logo, fonts and colours from the site into `brand.md` and use only those. Voice: `[provider and voice ID]`, key is in the environment variable `[name]`. Music: `[file]`, keep it quiet under the voice.
> Taste: `[the look, e.g. lives in the product's own visual world; calm or energetic; what to avoid]`. Ask me at most three questions before you start. Show stills before the full render.

## Workflow B: faceless explainer with self-drawn figures

For teaching a topic: courses, onboarding, awareness training. The look is illustrated 2D figures. Two rules do the real work.

- **Every figure is drawn by the agent** (as vector shapes with draw-on animation). Nothing is pulled from the web, which avoids image licensing questions.
- **Every fact comes from an official source and is checked before render.** The agent researches, but the research ends in a facts file that you can read.

Facts file entries:

```json
{
  "facts": [
    {
      "id": "f3",
      "claim": "Check the sender address before you click.",
      "source_url": "https://example.gov/advice/page",
      "source_type": "official authority",
      "retrieved": "2026-01-15",
      "quote": "short verbatim excerpt supporting the claim",
      "status": "checked"
    }
  ]
}
```

Dates are placeholders. Gate: no scene is written from a claim whose `status` is not `checked`, and the voiceover text uses only `checked` claims. If an official source cannot be found, the claim is removed, not softened.

Prompt template:

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/html-native-video-workflows.md, workflow B.
> Goal: a `[length, e.g. 1 minute]` explainer on `[topic]` for `[audience]`, language `[language]`.
> References: research `[named official sources, e.g. the relevant authority and a consumer organisation]` and write `facts.md` with a source URL, date and short quote for each claim. Do not use a claim without a source. Stop and show me the facts file before writing the script. Voice: `[provider and voice ID]`.
> Taste: playful, illustrated 2D figures like a good classroom explainer, drawn by you as vector shapes, nothing fetched from the internet. Calm pacing, one idea per scene. Music and effects: `[provided files or "none"]`.

## Workflow C: release-notes clip from a pull request

Input is a pull request. The HyperFrames router has a workflow that reads it through the GitHub CLI (`gh`) and turns it into a changelog, feature-reveal or fix explainer.

Flow: the agent reads the title, description, changed files and diff, picks the one or two changes a user would care about, writes a 20 to 45 second script, shows short code or interface moments, and adds narration or captions.

Prompt template:

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/html-native-video-workflows.md, workflow C.
> Goal: a `[length]` release-notes clip for `[audience: users or developers]` from `[pull request URL or owner/repo#number]`, using the `gh` CLI to read it.
> References: only the pull request, its linked issue and the repository's own README for names. Do not describe anything that is not in the diff.
> Taste: `[plain and fast, or polished launch style]`. Show code only where it helps, and scan every diff excerpt for secrets, internal URLs and personal data before it is rendered.

## The QA gate (all three workflows)

Never ship on "it rendered". Before the final render:

1. **Lint.** Run the framework's linter (`npx hyperframes lint`; the CLI also lists `check` and `doctor`, see its docs) and fix every error.
2. **Snapshot stills.** Render still frames at each scene's first, middle and last moment (the CLI lists a `snapshot` command, verify its options) and look at them: text readable, nothing cut off, logo correct, brand colours right.
3. **Caption check.** Compare on-screen captions word by word with the script or voiceover. Check names, numbers and line breaks.
4. **Audio check.** Voice clear over music, loudness measured (see [audio-ducking-and-mix](audio-ducking-and-mix.md)).
5. **Facts and licences.** For workflow B every claim `checked`; for A and C every logo and music file has a manifest entry.

## HyperFrames or Remotion?

| | HyperFrames | Remotion |
| --- | --- | --- |
| Authoring | HTML, CSS and seekable animation | React components |
| Build step | None, `index.html` plays as-is | Bundler |
| Agent handoff | Plain HTML files | A React project |
| Licence | Apache 2.0 | Source-available Remotion licence (check whether your company needs a paid one, verify) |
| Cloud rendering | Local and AWS Lambda | Remotion Lambda, described by HyperFrames as the more mature cloud renderer |

Choose HyperFrames when you want the shortest path from an agent to a video, plain files you can open anywhere, and no build tooling. Choose Remotion when you already have a React codebase and components to reuse (for example product UI in a video), a token module shared with the app, or a need for its established cloud rendering. The brand-binding ideas in [remotion-video-generation](remotion-video-generation.md) apply to both.

## One creator's report on time and cost

These numbers come from a single public video by one creator, using a recent top-tier model at high or extra-high effort. They are anecdotes, not benchmarks; your results depend on model, effort setting and prompt.

- Short vertical cut from a raw talking-head recording: about 15 to 20 minutes for the first result, then several rounds of taste changes (see [talking-head-autocut](talking-head-autocut.md)).
- 30-second ad spot from a detailed prompt: about 40 minutes.
- 1-minute faceless explainer: about 60 minutes.
- Cost: no per-render fee from the open-source renderer (per its README); the cost was usage from a Claude plan plus the text-to-speech plan. Changes after the first render were described as costing only more tokens, not a new generation.

## Pitfalls

- **Step-by-step prompts.** They cap the result at your own imagination. Give goal, references and taste.
- **No taste input.** The agent cannot guess your look. Name what to avoid as clearly as what to aim for.
- **Unchecked facts in an explainer.** The voice makes wrong claims sound authoritative. Gate on the facts file.
- **Typographic stand-ins for logos.** Use the real file, or no logo.
- **Rendering before stills.** A full render is the slowest way to find a layout bug.
- **Keys in prompts.** Use environment variables; never paste credentials into a chat or a file in the project.
- **Skill and CLI details from memory.** Names and options change between releases. Read the README or run `--help`.
- **Publishing a pull-request clip with private detail.** Diffs can contain internal names, URLs or tokens. Check each excerpt.

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/html-native-video-workflows.md
>
> Pick the workflow that fits: A (ad spot from a product website), B (faceless explainer with self-drawn figures and checked facts) or C (release-notes clip from a pull request). I want workflow `[A, B or C]` for `[product, topic or pull request link]`.
>
> Goal: `[length, format, language, who watches, what they should do or know afterwards]`.
> References: `[website URL, official sources to research, brand file, voice and where its key is stored as an environment variable, music files with licences]`. Use nothing else and invent no facts, logos or figures.
> Taste: `[the look and feel, pace, what to avoid]`.
>
> First tell me what you need to install and why, and wait for my answer. Ask at most three questions. Then build a first version, run the QA gate from the pattern (lint, snapshot stills, caption check), show me the stills, and only then do the full render. Report anything you marked as unverified.
