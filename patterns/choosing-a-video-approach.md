# Choosing a video approach: footage, code, generation or avatar

A decision guide for the video patterns in this repository. Each approach is good at one kind of thing and bad at another. Most good short videos combine two or three of them, with one rule: **whatever must be exact is built or recorded, whatever only needs to feel right can be generated.**

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)).
> 2. Create an empty folder (or one with your footage in it) and open it in Claude Code.
> 3. Paste, with your own details in the brackets:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/choosing-a-video-approach.md. I want to make [describe the video, who watches it, how long]. I have [footage, script, product photos, nothing]. Recommend which approaches to combine, explain why in plain words, list what each step costs me in time and money, and wait for my yes before you build anything.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md).

## The six approaches in one line each

| Approach | One line | Pattern |
| --- | --- | --- |
| Recorded footage cleanup | A real person on camera, cut tight, framed for vertical | [talking-head-autocut](talking-head-autocut.md) |
| On-screen assets | Real logos, screenshots and visuals timed to what is said | [overlay-asset-research](overlay-asset-research.md) |
| Audio | Licensed music, effects, voice-led ducking, measured loudness | [audio-ducking-and-mix](audio-ducking-and-mix.md) |
| Code-built motion graphics | The video is a web page or React project an agent writes and renders | [html-native-video-workflows](html-native-video-workflows.md), [remotion-video-generation](remotion-video-generation.md) |
| Generative clips | A model invents footage or stills from a prompt | [higgsfield-generative-video](higgsfield-generative-video.md) |
| Avatars | A synthetic presenter speaks your script, optionally in many languages | [heygen-avatar-video](heygen-avatar-video.md) |

## Decision table

Find your situation, read across.

| Situation | Best approach | Why | Typical failure | Link |
| --- | --- | --- | --- | --- |
| You recorded yourself talking and it is rambling, with pauses and restarts | Footage cleanup | Word timestamps give surgical cuts; the real person stays real | Cutting from the transcript alone and leaving fillers in the audio; static crop that loses the face | [talking-head-autocut](talking-head-autocut.md) |
| A spoken video needs logos, screenshots or product visuals at the right moment | On-screen assets | Official sources, a manifest, a timed cue file; nothing invented | Fuzzy or outdated logos; screenshots with private data in them | [overlay-asset-research](overlay-asset-research.md) |
| Voice, music and effects fight each other, or loudness differs between platforms | Audio | Ducking follows the voice; loudness is measured, licences are recorded | Unlicensed tracks; music that masks the voice; clipping after normalisation | [audio-ducking-and-mix](audio-ducking-and-mix.md) |
| You need a branded ad spot, title cards, animated numbers or kinetic captions | Code-built motion graphics | Exact fonts, colours, logo and copy; edits are text changes, not new generations | Typographic stand-in instead of the real logo; rendering before looking at stills | [html-native-video-workflows](html-native-video-workflows.md) |
| You need charts, data stories or a product UI shown in motion | Code-built motion graphics | Numbers come from data, not from a model's guess | Hard-coded numbers that drift from the source; unchecked claims | [html-native-video-workflows](html-native-video-workflows.md) |
| You already have a React codebase and design tokens and want videos that match the app | Remotion | Reuse components and tokens; mature cloud rendering | Colours and fonts hard-coded in scenes instead of imported | [remotion-video-generation](remotion-video-generation.md) |
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
| Code-built video | Node.js 22 or newer, ffmpeg, a framework (HyperFrames or Remotion) | Voice provider account if you want a synthetic voice; the key goes in an environment variable you set |
| Generative clips | A command line tool or a connector, set up by the agent | A paid platform account, the browser sign-in, uploads of your reference files, consent for any real face or voice |
| Avatars | A connector or command line tool; optionally an API key | A platform account, the sign-in, an API key in an environment variable if you use the API, consent recording for a digital twin |

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
3. **Generated parts inspected.** Contact sheets for generated clips; no invented text or marks; faces and hands looked at.
4. **Presenter checks.** Any avatar or cloned voice has a consent note and a disclosure decision.
5. **Audio.** One voice, ducked music, no leftover native audio, measured loudness.
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
- **Tool facts from memory.** Models, endpoints and prices change monthly. Have the agent read the current vendor pages; mark what it cannot confirm.

## Cost and licensing notes (as of 2026-10-05, verify)

- Footage cleanup, code-built video and the audio pass run on your own computer with open-source tools; the main cost is your agent usage. Licences still apply to fonts, logos, music and any code framework you choose (the html-native pattern notes the differing licences of HyperFrames and Remotion).
- Generative and avatar platforms charge credits or plan fees and have their own terms about ownership, consent and acceptable use; see the cost sections of [higgsfield-generative-video](higgsfield-generative-video.md) and [heygen-avatar-video](heygen-avatar-video.md). No prices are repeated here because they change.
- Always ask the agent for a cost estimate before any paid generation, and keep a manifest of what was generated, with which tool, and under which rights.

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/choosing-a-video-approach.md
>
> I want to make `[what the video is, who watches, how long, which format, which language]`. I have `[raw footage / script / product photos / brand files / nothing yet]`.
>
> Do this and then stop for my answer: (1) ask me at most three questions; (2) walk through the decision questions in the pattern and recommend the approaches to combine, with one sentence of reasoning each; (3) list, per approach, what I must set up or approve myself (accounts, sign-ins, consent, licences), what it will cost me in time and in paid credits (estimate only, never spend), and the biggest risk; (4) write the contract between steps (size, frame rate, silent clips or not, who owns the clock); (5) tell me which parts must be exact and will be built in code; (6) list anything where a realistic synthetic person or voice is involved and what consent and labelling I need. Do not build or generate anything until I say yes. Mark anything you could not verify.
