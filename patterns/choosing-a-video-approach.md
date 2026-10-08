# Choosing a video approach: footage, code, generation or avatar

**Start here for video.** This page is the entry point to all eight video patterns in this repository. Each approach is good at one kind of thing and bad at another. Most good short videos combine two or three of them, with one rule: **whatever must be exact is built or recorded, whatever only needs to feel right can be generated.**

**In five lines**

1. Real person on camera whose presence matters: film them, then clean up the recording ([talking-head-autocut](talking-head-autocut.md)).
2. Anything a viewer can check (text, numbers, logos, product screens): build it in code or take it from real files, never from a generative model.
3. Footage you cannot film: generate short, silent, text-free clips ([higgsfield-generative-video](higgsfield-generative-video.md)). A presenter who must speak but cannot be filmed: an avatar ([heygen-avatar-video](heygen-avatar-video.md)).
4. Every route ends in the same sound pass: licensed music, voice-led ducking, loudness of -16 LUFS ([audio-ducking-and-mix](audio-ducking-and-mix.md)).
5. Words such as verify, manifest, edit list and cue file are explained in [Words used in these patterns](#words-used-in-these-patterns) below.

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)).
> 2. Create an empty folder (or one with your footage in it) and open it in Claude Code.
> 3. Paste, with your own details in the brackets:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/choosing-a-video-approach.md. I want to make [describe the video, who watches it, how long]. I have [footage, script, product photos, nothing]. Recommend which approaches to combine, explain why in plain words, list what each step costs me in time and money, and wait for my yes before you build anything.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md).

## Decision table

Find your situation, read across.

| Situation | Best approach | Why | Typical failure | Link |
| --- | --- | --- | --- | --- |
| You recorded yourself talking and it is rambling, with pauses and restarts | Footage cleanup | Word timestamps give surgical cuts; the real person stays real | Cutting from the transcript alone and leaving fillers in the audio; static crop that loses the face | [talking-head-autocut](talking-head-autocut.md) |
| A spoken video needs logos, screenshots or product visuals at the right moment | On-screen assets | Official sources, a manifest, a timed cue file; nothing invented | Fuzzy or outdated logos; screenshots with private data in them | [overlay-asset-research](overlay-asset-research.md) |
| Voice, music and effects fight each other, or loudness differs between platforms | Audio | Ducking follows the voice; loudness is measured, licences are recorded | Unlicensed tracks; music that masks the voice; clipping after normalisation | [audio-ducking-and-mix](audio-ducking-and-mix.md) |
| You need a branded ad spot, title cards, animated numbers or kinetic captions (text that moves with the speech) | Code-built motion graphics | Exact fonts, colours, logo and copy; edits are text changes, not new generations | Typographic stand-in instead of the real logo; rendering before looking at stills | [html-native-video-workflows](html-native-video-workflows.md) |
| You need charts, data stories or a product interface shown in motion | Code-built motion graphics | Numbers come from data, not from a model's guess | Hard-coded numbers that drift from the source; unchecked claims | [html-native-video-workflows](html-native-video-workflows.md) |
| You already have a React codebase and design tokens and want videos that match the app | Remotion (code-built, React-based) | Reuse components and tokens; mature cloud rendering | Colours and fonts hard-coded in scenes instead of imported | [remotion-video-generation](remotion-video-generation.md) |
| A facts-based explainer for training or awareness | Code-built workflow with a facts file | Every claim has a source and a status before it is spoken | Voiceover makes an unchecked claim sound authoritative | [html-native-video-workflows](html-native-video-workflows.md) |
| You need atmosphere footage you cannot film (a place, a mood, an abstract idea) | Generative clips | Cheap, fast, no shoot; good for texture between exact parts | Garbled text and logos; physics errors; mixed frame rates | [higgsfield-generative-video](higgsfield-generative-video.md) |
| You need product stills or short product clips from a photo | Generative clips (reference-driven) | Consistent product placement across studio and lifestyle scenes | Labels and small print altered; product shape drift | [higgsfield-generative-video](higgsfield-generative-video.md) |
| One recurring character or mascot across many shots | Generative clips with a trained identity or references | Identity layer holds the face better than per-shot prompts | Drift across styles; two characters in one scene; no consent for a real face | [higgsfield-generative-video](higgsfield-generative-video.md) |
| A horizontal video must also exist as vertical | Generative reframe, or recompose in code | Reframe extends the picture; code can lay out a second aspect ratio exactly | Invented edges on faces; text cut off | [higgsfield-generative-video](higgsfield-generative-video.md) |
| A presenter must speak, but nobody can be filmed (or content changes often) | Avatar | Edit the script and re-render; same presenter every time | Consent missing; mispronounced names; viewers tire of a static talking head | [heygen-avatar-video](heygen-avatar-video.md) |
| An existing video must exist in several languages | Avatar platform translation, or generative dubbing | Voice cloning plus lip sync from one source | Bad translation polished into confident speech; no native review; lip sync on side angles | [heygen-avatar-video](heygen-avatar-video.md), [higgsfield-generative-video](higgsfield-generative-video.md) |
| Personalised or batch videos from a spreadsheet | Avatar templates, or code with variables | Same structure, different data | Sending a batch before checking one; personal data in logs | [heygen-avatar-video](heygen-avatar-video.md), [html-native-video-workflows](html-native-video-workflows.md) |
| A real expert's real opinion, testimonial or apology | Recorded footage | Trust depends on the real person | Replacing the person with an avatar to save time | [talking-head-autocut](talking-head-autocut.md) |

Both a generative platform and an avatar platform can make "a person talking". Prefer the avatar tool when the spoken words and lip sync matter, the generative tool when the person is a silent character in a scene.

## All eight video patterns in one line each

| Pattern | What it is for, in plain words |
| --- | --- |
| **choosing-a-video-approach** (this page) | Decide which of the other seven to use, and in which order to combine them |
| [talking-head-autocut](talking-head-autocut.md) | Turn a raw recording of one person talking into a tight vertical short: pauses, fillers and restarts removed |
| [overlay-asset-research](overlay-asset-research.md) | Find the real logos, screenshots and document excerpts a spoken video should show, and when to show them |
| [audio-ducking-and-mix](audio-ducking-and-mix.md) | Add licensed music and sound effects, make music dip under the voice, and set the final loudness |
| [html-native-video-workflows](html-native-video-workflows.md) | Build ad spots, explainers and release-notes clips as code (HTML) that an agent writes and renders |
| [remotion-video-generation](remotion-video-generation.md) | Build on-brand videos as a React project, reusing your product's colours, fonts and logo |
| [higgsfield-generative-video](higgsfield-generative-video.md) | Generate short footage and stills you cannot film (b-roll, product shots, a consistent character) |
| [heygen-avatar-video](heygen-avatar-video.md) | Make a synthetic presenter speak your script, optionally translated into other languages |

## Where to find visual inspiration

Look here for a look, a pacing or a chart idea **before** designing a new scene. These are **references only**: nothing is mirrored, and nothing is copied into your project unless the licence allows it. Checked on 2026-10-08; robots.txt files and licences change, so re-check before any automated access.

**Rules**

1. References only. Browse by hand, or let Claude open one page at a time where the site allows it. Never bulk-crawl or mirror.
2. Never copy videos, images, Lottie files, component code or prompts verbatim unless the licence allows it. Rebuild the idea in your own brand colours and fonts.
3. Credit open-source code and keep the licence notice (MIT, ISC and Apache-2.0 require it).
4. Prefer official packages and exports (npm, a CLI, a CSV download) over scraping.
5. Check robots.txt before any automated access. Content signals are `search`, `ai-input` and `ai-train`. A site that blocks Claude's crawler by name is for humans to browse.

Access legend: **manual** = a person browses; **page by page** = Claude in a browser reads one URL at a time, read-only; **package** = npm, CLI or installable skill; **API/CSV** = a documented export.

| Source | What it is | Use it when | How we access it | Licence and robots signals | Notes |
| --- | --- | --- | --- | --- | --- |
| **Motion and video looks** | | | | | |
| [Prompt Motion](https://prompt-motion.com/) | About 230 motion videos made with an AI model, with the prompts, plus 4 installable skills | You want motion-design looks, launch-film pacing, transitions | Manual for the videos; package for the skills | `search=yes`, `ai-train=no`, `use=reference`; Claude, GPT and other AI crawlers disallowed. Videos and prompts are the authors'. Skills are MIT or Apache-2.0 per repo | Prompts are mostly generic; the value is the visual reference |
| [Remotion showcase](https://www.remotion.dev/showcase) and [templates](https://www.remotion.dev/templates) | Community videos and about 20 starter templates for React-based video | You want to see what code-built video can look like, or start a scene family (audio bars, 3D, code) | Manual or page by page; templates via package | No restrictive robots rules found. Free licence for individuals and teams of up to 3, company licence above that | See [remotion-video-generation](remotion-video-generation.md) |
| [HyperFrames catalog](https://hyperframes.heygen.com/) | Registry of about 400 blocks (charts, transitions, shaders, caption styles) for HTML-native video | Before hand-building any named effect | Package (`hyperframes catalog`, `hyperframes add`) | Apache-2.0 repo; site signals `ai-train=yes`, `search=yes`, `ai-input=yes`. Check each item's licence | Official source for ready-made blocks, see [html-native-video-workflows](html-native-video-workflows.md) |
| [LottieFiles](https://lottiefiles.com/) | Marketplace for Lottie vector animations | You need a small animated icon or transition | Manual search; package (`lottie-web`, MIT) for playback | `Allow: /`, API paths disallowed. **Licence per file**, record it for every asset | Never use a file without a licence note |
| [Dribbble: ui-inspo tag](https://dribbble.com/tags/ui-inspo) | Designers' shots and short clips | Mood, layout and colour for a dashboard scene | Manual only (answers scripts with a challenge page) | Copyrighted by each designer, inspiration only | Do not place a shot in a published video |
| **Data visualisation and charts** | | | | | |
| [FT Visual Vocabulary](https://ft-interactive.github.io/visual-vocabulary/) and [Chart Doctor](https://github.com/ft-interactive/chart-doctor) | A chart-type poster (change over time, ranking, deviation, relationship) and chart critiques | Choosing the right chart for a number story before you design the scene | Manual or page by page | Chart Doctor repo: MIT. Visual Vocabulary: no licence declared, reference only. The publisher's main site disallows Claude crawlers | Use the chart-type names in your brief |
| [Flourish examples](https://flourish.studio/examples/) and [animated charts](https://flourish.studio/blog/animated-charts/) | No-code chart templates with animation (bar chart race, annotated lines, time sliders) | You want reveal pacing: when the axis moves, when the annotation appears | Manual or page by page | Claude crawlers disallowed except public sections (`/blog/`, `/examples/`, `/learn/` and similar). Charts belong to their creators | Timing reference only; do not screen-record their charts |
| [Datawrapper blog](https://www.datawrapper.de/blog) and [academy](https://academy.datawrapper.de/) | Chart-design guidance with before/after examples | A chart scene feels cluttered; colours, labels, annotations | Manual or single-page read | `Allow: /`, no AI signals. Summarise, do not copy text | Good for label and source-line rules |
| [D3 Graph Gallery](https://d3-graph-gallery.com/), [Data to Viz](https://www.data-to-viz.com/), [Observable Plot](https://observablehq.com/plot/) | Chart reference implementations and a chart-type decision tree | You need the maths or shape of a chart (scales, areas, slopes) | Package (`d3-scale`, `d3-shape`, `d3-interpolate`, ISC) inside your React or HTML video; galleries by hand | D3: ISC. Observable answers scripts with HTTP 429, so browse by hand. Gallery code licences vary: verify before copying | Use the official modules, not pasted notebooks |
| [Our World in Data](https://ourworldindata.org/) | Open charts and datasets (economy, demographics, energy) | You need real macro numbers with a citable source | API/CSV download per chart; manual browsing | No robots restrictions. Charts and data are CC BY 4.0 per the site (verify per chart); credit is mandatory | Cite the site and the original source |
| [The Pudding](https://pudding.cool/) | Visual essays with scroll-driven chart storytelling | You want story structure: hook number, one chart, one reveal | Manual | No robots.txt (404). Content copyrighted; code repos have their own licences | Narrative reference only |
| [Information is Beautiful Awards](https://www.informationisbeautiful.net/awards/) | Annual gallery of the best data visualisations | Quick scan of creative chart forms | Manual | Only one path disallowed. Works belong to the entrants | Reference only |
| [Visual Capitalist](https://www.visualcapitalist.com/) | Finance and economy infographics | Layout and hierarchy ideas for finance graphics | Manual only (HTTP 403 to scripts) | Copyrighted, reference only | Do not reproduce infographics |
| [Bloomberg Graphics](https://www.bloomberg.com/graphics/) | Premium market and economy visual stories | Quality benchmark for annotated finance charts | Manual only | Claude crawlers disallowed by name. Copyrighted | Humans browse |
| [Reuters Graphics](https://www.reuters.com/graphics/) | Newsroom charts, maps, explainers | Benchmark for clear news charts | Manual only | robots.txt prohibits automated collection without written consent | No automated access, not even one page |
| **UI components and front end** | | | | | |
| Curated public Pinterest boards for UI and data visualisation | Image boards of UI and chart designs | Mood boards before a dashboard or chart scene | Manual only | `User-agent: *` is `Disallow: /`, so no automated access. Images belong to their creators | Pick 3 to 5 images by hand and describe them in words in your brief |
| [Uiverse](https://uiverse.io/) | Community library of CSS and Tailwind UI elements | A small animated UI detail (loader, toggle, button) | Manual copy of one element, or the open-source repo | Only `/admin` disallowed; the site answers scripts with HTTP 403. Elements are MIT per the repo (verify per element, keep the notice) | CSS-only, easy to port into HTML video |
| [21st.dev](https://21st.dev/) | Community catalog of React and shadcn components, shaders, gradients | Gradient or shader backgrounds, React component ideas | Manual; package (shadcn registry install) | `ai-train=no`, `search=yes`, `ai-input=yes`; some paths disallowed. Terms restrict republishing code and design assets: read each component's licence | Static visual components work best inside a React video build; strip hover logic |
| [Mobbin](https://mobbin.com/) | Paid library of real app screens and flows | Seeing how apps lay out numbers, empty states, onboarding | Manual (login) | `*` allowed, one AI bot restricted. Screenshots belong to the apps | Reference only |
| **3D** | | | | | |
| [Spline](https://spline.design/) | Browser-based 3D design tool with community files | A rotating 3D object, glass or gradient hero, abstract background | Design by hand, then export a video or image sequence; or `@splinetool/react-spline` (MIT) for live embeds | `ai-train=yes`, `search=yes`, `ai-input=yes`, `Allow: /`. **Community files: licence per file** | For rendered video prefer the export route: it is deterministic |

**Sites that forbid even single-page automated access (2026-10-08):** Pinterest, Reuters. Visual Capitalist and Uiverse return HTTP 403 to scripts, Observable returns 429, Dribbble shows a challenge page. Bloomberg, the Financial Times main site and Prompt Motion disallow Claude's crawlers by name. Treat all of these as human-browsed.

## Words used in these patterns

- **verify.** Written in the text: the author could not confirm the statement from an official page, so check the vendor's current page before relying on it. As a value in a manifest file (for example `"commercial_use": "verify"`): a person must read the licence and replace it with a real answer. Nothing is ready to publish while a `verify` is left in a manifest.
- **Edit list (EDL).** A small file that says which parts of a recording to keep, in which order and with which framing. You approve it before anything is rendered. Short for edit decision list.
- **Cue file.** A file (`cues.json`) that says when each on-screen visual appears and disappears, computed from the words of the transcript.
- **Manifest.** A list with one entry per file (logo, screenshot, music track, generated clip) recording where it came from and under which licence or permission. Nothing goes into the video that is not in the manifest.
- **Contract.** A short shared file stating the size, frame rate and rules every tool's output must follow, so the pieces fit together (see Workflow below).
- **Loudness standard.** All patterns use **-16 LUFS integrated, -1.5 dBTP true peak**. LUFS is the average perceived loudness of the whole video; dBTP is the highest level the sound reaches (true peak), which should stay below -1.5. Some platforms play back at about -14 LUFS; -16 is a safe, consistent target. Platforms differ and change their rules, so verify per platform. Details in [audio-ducking-and-mix](audio-ducking-and-mix.md).
- **ffmpeg** is the free command line tool that cuts, converts and measures video and audio; **ffprobe** is its companion that reports a file's size, frame rate and codec.
- **b-roll** is supporting footage shown over or between the main shots.

## A quick way to decide

Ask in this order:

1. **Is there a real person whose real presence matters?** Film them, then clean up.
2. **What must be exact?** Text, numbers, logos, product screens. That part is code, drawn over everything else.
3. **Does a presenter have to speak and nobody can be filmed?** Avatar, with consent and a label.
4. **Is there a gap that only footage can fill?** Generate short, silent, text-free clips for that gap.
5. **Last: audio.** Every route ends in the same mix and loudness pass.

If the answer to two questions is yes, you are combining approaches. That is normal.

## Setup (Claude Code, and what you create or approve yourself)

This page needs nothing installed. The approaches it points to do. Claude asks before installing anything.

| Approach | On your computer | Accounts and approvals only you can give |
| --- | --- | --- |
| Footage cleanup | ffmpeg, a transcriber with word timestamps, Python | Nothing, but you decide which recordings may be processed |
| On-screen assets | A browser or scraper the agent can use | Permission to use each logo or screenshot; you check licences |
| Audio | ffmpeg | Licences for music and effects; you download licensed files yourself |
| Code-built video | Node.js and ffmpeg, plus a framework (HyperFrames needs Node.js 22 or newer; for Remotion check its current requirement: verify) | A text-to-speech (TTS) provider account if you want a synthetic voice; the key goes in an environment variable you set |
| Generative clips | A command line tool or a connector, set up by the agent | A paid platform account, the browser sign-in, uploads of your reference files, consent for any real face or voice |
| Avatars | A connector or command line tool; optionally an API key (an API is the way a service lets software control it) | A platform account, the sign-in, an API key in an environment variable if you use the API, consent recording for a digital twin |

Never paste keys, tokens or passwords into the chat or into project files. If the agent asks, stop and set them as environment variables yourself.

## Workflow, step by step

1. **Brief in five lines.** Goal, audience, length and format, language, what the viewer should do or know afterwards.
2. **Inventory.** What do you already have: recordings, a script, brand files, product photos, data, licensed music. Real material beats generated material.
3. **Mark the exact parts.** Underline every piece of text, number, logo and screen that a viewer might check. Those go to code or to real files.
4. **Pick approaches** using the decision table, fewest first. Every added tool adds a sign-in, a cost and a place for style to drift.
5. **Write the contract** (below) so every tool delivers files that fit together.
6. **Build the cheapest approved test** of each part, and look at it before any full render or paid generation.
7. **Assemble in one place**, normally the code-built composition, because it can hold recordings, generated clips, avatar clips, overlays and audio on one timeline.
8. **Audio pass and quality gate**, then decide labels and publish.

The contract can be a short file the whole project reads:

```json
{
  "format": { "size": [1080, 1920], "fps": 30 },
  "clock": "voiceover",
  "clips": { "audio": "off", "text_in_frame": "none", "logos_in_frame": "none" },
  "exact_in_code": ["titles", "captions", "numbers", "logo", "screenshots"],
  "labels": "synthetic presenter or realistic generated footage must be disclosed",
  "rights_manifest": "manifest.json"
}
```

## Prompt patterns that work

Ask for a recommendation, not for a build:

> *I have a 3-minute recording of me explaining X, brand files, and no budget for paid tools. I want a 45-second vertical clip. Recommend the cheapest combination and say what you would not generate.*

Ask for the risk list per approach:

> *For each approach you recommend, name the most likely failure on this specific video and the check that would catch it before I publish.*

Ask for a ladder of cost:

> *Give me three versions of the plan: free (only my own footage and code), light (one paid generation tool, under ten clips), full (avatar plus generated clips). Say what I lose at each step down.*

Ask for the boundary explicitly:

> *List every element in this video that a viewer could fact-check or recognise (text, numbers, logos, product screens, real people) and say how each will be produced.*

## Quality checks for a combined video

1. **One spec.** Every clip, whatever its origin, has the same size, frame rate and codec. Probe them with ffprobe.
2. **Exact parts verified.** Captions against the script, numbers against the data file, logos against the real files.
3. **Generated parts inspected.** Contact sheets (a grid of still frames from a clip) for generated clips; no invented text or marks; faces and hands looked at.
4. **Presenter checks.** Any avatar or cloned voice has a consent note and a disclosure decision.
5. **Audio.** One voice, ducked music, no leftover native audio, loudness measured and at -16 LUFS integrated, -1.5 dBTP true peak (see the loudness standard above).
6. **Rights manifest.** Every font, music file, logo, generated clip and avatar has a line stating source and permission.
7. **Fresh-eyes viewing.** Watch the whole thing once at full size with sound, on a phone if the target is a phone.

## Worked example: a 40-second vertical product update, three approaches

Brief: a software company announces a new export feature. Audience: existing users. Format 9:16. Voiceover in one language. No presenter on camera.

**Approaches combined:** generative clips (atmosphere), code-built motion graphics (everything exact), audio mix (voice, music, loudness).

1. **Plan and contract.** The agent writes `brief.md`, the spoken script (about 90 words for 40 seconds), and a shot list. The contract between steps is fixed up front: 1080 by 1920, 30 frames per second, clips silent, all text and logos added in code, the voiceover file is the master clock.
2. **Generated b-roll (2 or 3 clips, 4 to 6 seconds each).** An abstract, text-free "files moving smoothly" scene, a calm desk scene, a closing light sweep. Stills first, cheap tests, finals only for approved shots, then conformed with ffmpeg and logged. See [higgsfield-generative-video](higgsfield-generative-video.md).
3. **Code-built layer.** A composition in HTML or React places the clips on a timeline and adds the three steps of the feature as animated text, the real logo file, an animated "3x faster" number that comes from a measured value in a data file, and captions generated from the script. See [html-native-video-workflows](html-native-video-workflows.md). Snapshot stills at each scene before the full render.
4. **Audio.** A text-to-speech or recorded voice, a licensed quiet music bed ducked under the voice, one whoosh effect on the title reveal, measured loudness. See [audio-ducking-and-mix](audio-ducking-and-mix.md).
5. **Review gate.** Contact sheet of the generated clips (no hallucinated text), caption check against the script, number check against the data file, loudness reading, licence manifest, disclosure line if the footage looks realistic.

Why this split: the generated footage only provides mood, where an error is harmless; the code layer carries every fact; the audio pass makes it sound finished. Swap step 2 for an avatar clip to get a spoken presenter instead, or for a cleaned-up recording to make it personal.

## What not to use it for

- **Evidence.** Generated footage and avatars depict nothing real. Do not use them to document an event, a product test, a customer result or a person's statement.
- **Impersonation.** No real person's face or voice without their consent; no public figures; no lookalikes of celebrities or private individuals.
- **Exact text, logos and numbers from a generative model.** Add them in code from the real file or data.
- **Facts you have not checked.** Fluent narration does not make a claim true.
- **Health, legal, financial or safety advice delivered by a synthetic presenter** without a human expert who reviewed and accepts responsibility for the script.
- **Anything that must not be labelled.** If the video would work only because viewers believe it is real, do not make it. Where platforms or laws require a label for realistic synthetic media, apply it.
- **Sensitive content with real people's data.** Do not feed private footage, customer data or secrets into hosted generation tools you have not reviewed.
- **A shortcut around a missing licence.** Generated or not, music, fonts and logos still need rights.

## Pitfalls when combining approaches

- **Mismatched specs.** Different frame rates, sizes or colour handling between generated clips, avatar renders and recordings. Conform everything to one spec first.
- **No master clock.** Decide whether the voiceover or the picture leads. The voice usually leads.
- **Two voices.** A generated clip with its own sound plus your voiceover. Strip native audio.
- **Style whiplash.** A photoreal clip next to a flat vector scene feels accidental. Pick a visual rule and apply colour treatment consistently.
- **Paying twice.** Do not generate in the hosted tool what code gives you for free (titles, captions, charts).
- **Skipping the label.** Decide on disclosure when you plan, not when you publish.
- **Two code engines in one project.** If you use HyperFrames skills and also want Remotion, name the engine you want in every request, because the HyperFrames router skill otherwise takes over any video request. Details under "Router precedence" in [html-native-video-workflows](html-native-video-workflows.md).
- **Tool facts from memory.** Models, endpoints and prices change monthly. Have the agent read the current vendor pages; mark what it cannot confirm.

## Cost and licensing notes (as of 2026-10-05, verify)

- Footage cleanup, code-built video and the audio pass run on your own computer with open-source or free tools; the main cost is your agent usage. Licences still apply to fonts, logos, music and any code framework you choose. Remotion's licence may require a paid plan for some companies: check whether yours does. HyperFrames is open source under Apache 2.0.
- Generative and avatar platforms charge credits or plan fees and have their own terms about ownership, consent and acceptable use; see the cost sections of [higgsfield-generative-video](higgsfield-generative-video.md) and [heygen-avatar-video](heygen-avatar-video.md). No prices are repeated here because they change.
- Always ask the agent for a cost estimate before any paid generation, and keep a manifest of what was generated, with which tool, and under which rights.

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/choosing-a-video-approach.md
>
> Goal: `[what the video is, who watches, how long, which format, which language]`.
> References: `[raw footage / script / product photos / brand files / nothing yet]`.
> Taste: `[mood, pace, what to avoid]`.
>
> Work in this order and stop for my answer: (1) ask me at most three questions; (2) walk through the decision questions in the pattern and recommend the approaches to combine, with one sentence of reasoning each; (3) list, per approach, what I must set up or approve myself (accounts, sign-ins, consent, licences), what it will cost me in time and in paid credits (estimate only, never spend), and the biggest risk; (4) write the contract between steps (size, frame rate, silent clips or not, who owns the clock); (5) tell me which parts must be exact and will be built in code; (6) list anything where a realistic synthetic person or voice is involved and what consent and labelling I need. Do not build or generate anything until I say yes. Ask before you install anything or spend anything. Mark anything you could not verify as `verify`.
