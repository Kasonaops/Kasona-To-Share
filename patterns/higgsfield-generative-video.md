# Generative image and video clips with Higgsfield + Claude Code

A pattern for using a generative image and video platform, [Higgsfield](https://higgsfield.ai), as a clip factory that Claude Code drives for you: b-roll (supporting footage shown over or between main shots), product shots, character-consistent clips, motion transfer, reframing, upscaling and dubbing. The platform bundles many third-party and in-house models behind one account and one credit balance. Everything it makes is **raw material**. Anything that must be exact (text, logos, numbers, charts) is added afterwards in code, see [html-native-video-workflows](html-native-video-workflows.md) and [remotion-video-generation](remotion-video-generation.md).

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)) and a **paid Higgsfield account**. Only you can create the account and approve the sign-in.
> 2. Create an empty folder for the project and open it in Claude Code.
> 3. Paste, with your own details in the brackets:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/higgsfield-generative-video.md. I want [what you need, e.g. five 6-second b-roll clips for a video about X]. Tell me what you need me to set up first, and tell me the credit cost and wait for my yes before every generation.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md). Not sure this is the right approach? Start with [choosing-a-video-approach](choosing-a-video-approach.md).

Status of this page: written 2026-10-05 from the vendor's own help pages and from a read-only look at what its connector lists. Model names, limits and prices change often. Where a claim could not be confirmed from an official page it is marked **verify**.

## What it is and when to choose it

Choose it when you need footage you cannot film or cannot afford to film:

- **Atmosphere b-roll.** A street at dawn, hands working at a desk, an abstract "data flowing" shot, a product on a plinth.
- **Product shots.** Stills and short clips of a product from a photo or link, in studio or lifestyle settings. The platform ships ready-made presets for product shots, lifestyle scenes, banners and carousels.
- **Character-consistent clips.** One recurring person or mascot across many shots. The platform trains a reusable identity from photos (it calls this Soul ID, 20 or more photos of one person, up to 80) and has "Elements", reusable references for characters, places and props.
- **Motion transfer.** Take the movement from a reference video and apply it to a character image (Kling 3.0 Motion Control is the documented tool).
- **Reframe, outpaint, upscale, background removal.** Turn 16:9 into 9:16 by extending the picture, raise resolution, cut out a subject.
- **Dubbing and voice.** Translate and re-voice a finished video into 18 documented languages with lip sync, text-to-speech, voice change.
- **Clips from long videos.** A "clipper" tool turns a YouTube video into subtitled short clips.

Do **not** choose it for exact text, exact logos, charts, numbers, interface screenshots or anything a viewer may check against reality. Build those as code. The decision table in [choosing-a-video-approach](choosing-a-video-approach.md) covers the boundary.

## Setup (Claude Code, MCP or CLI)

MCP (Model Context Protocol) is a standard way to connect an AI assistant to an outside service; the connection is called a connector. A CLI is a command line interface, a tool you control by typing commands. There are two official routes. Both use your own account and its credits, and neither needs an API key (the secret code that lets software use an account).

| Route | For | How it connects |
| --- | --- | --- |
| **CLI plus skills** | Coding agents such as Claude Code | The agent installs the vendor's command line tool and companion skills, then you sign in once in a browser window |
| **MCP connector** | Chat agents (Claude on the web or desktop, Cowork) | Add a custom connector with the vendor's MCP server address, then authorize in the browser |

The vendor's help center documents the CLI route for Claude Code and gives a ready-made message to send to your agent. Easiest path: tell Claude Code *"Set up Higgsfield for me following the vendor's current instructions at https://higgsfield.ai/creator-hub/help-center/integrations/how-do-i-connect-higgsfield-to-ai-agent, and stop when I need to sign in."* Claude installs the CLI (after asking you), starts the browser sign-in, and you approve it. Adding the MCP server address directly to Claude Code with `claude mcp add --transport http` is plausible but not documented by the vendor for Claude Code: **verify**. If the connector already appears in your Claude account's connectors, check with `/mcp` whether Claude Code sees it.

What only you do:

1. Create the account and choose a paid plan. An active paid subscription is required for the agent routes (per the vendor's help center).
2. Approve the sign-in in your browser. Do not paste passwords or tokens into the chat.
3. Upload your own reference files through the upload window the agent opens for you. The agent cannot read images attached to the chat itself.
4. Give consent for any real person's face or voice you upload (see the licensing section).

Verify the connection by asking *"What is my credit balance?"* The agent should call a tool and return numbers. If it answers without a tool call, the connection is not live.

**Spending control.** There is no native credit cap through the agent routes; the vendor suggests a prompt-level rule: *"Before generating anything, tell me the credit cost and wait for my confirmation."* Put that rule in your project instructions file, and treat it as a convention, not a hard limit.

Do not hard-code model names in your instructions. Have the agent ask the platform which models exist and which fit the job (the connector offers a model search and a recommend-by-goal call), then record the choice in the shot list.

## Workflow, step by step

1. **Brief.** Goal, length, aspect ratio, where the clips will be used, what must be added later in code. Write it into `brief.md`.
2. **Shot list.** One row per clip: purpose, duration, camera, subject, start frame source, model, risk. A table works well (example below). The agent proposes, you approve before anything is spent.
3. **Style frames first.** Generate stills with an image model, pick the winners, and use them as the start frame (and optionally end frame) for video. Stills are cheaper than video, and a fixed start frame is the strongest consistency tool you have.
4. **Cheap test per shot.** Use a fast or budget model, or a draft mode if the model offers one (one current model lists a low-resolution draft that can be finalized later: **verify**), at the lowest resolution. Judge motion and framing, not sharpness.
5. **Final render of approved shots only.** Raise resolution and quality; switch audio off unless you want native audio.
6. **Download, conform, log.** Pull the files into the project, conform every clip to one frame rate, size and codec using ffmpeg (a free command line video tool), and write the generation manifest (below), one entry per clip.
7. **Hand off.** Clips go into the code-built composition, together with exact text, logos and numbers added in code, and the audio mix ([audio-ducking-and-mix](audio-ducking-and-mix.md)).

Shot list example:

| # | Purpose | Sec | Start frame | Camera | Model choice (ask the platform) | Risk |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Hook: calm morning desk | 5 | Still from step 3 | Slow push in | Image-to-video, mid tier | Hands |
| 2 | Product on plinth | 4 | Product photo | Orbit left | Reference-driven model | Label text |
| 3 | Wide city dawn | 6 | None | Static | Text-to-video, cheap | None |

Conform and generation manifest:

```bash
ffmpeg -i raw/clip01.mp4 -an -vf "scale=1080:1920:force_original_aspect_ratio=increase,crop=1080:1920,fps=30" \
  -c:v libx264 -crf 18 -pix_fmt yuv420p clips/clip01.mp4
```

```json
{
  "clip": "clip01.mp4",
  "purpose": "hook",
  "model": "name as listed by the platform on the day",
  "prompt_file": "prompts/clip01.txt",
  "start_frame": "stills/desk_v3.png",
  "credits_estimated": "from the platform's cost answer",
  "audio": "off",
  "rights_note": "no real person, no third-party logo"
}
```

The generation manifest is how you reproduce, explain or replace a clip later.

## Prompt patterns that work

Video prompts behave like a director's note for one continuous take. A reliable order:

1. **Subject and setting** in concrete nouns.
2. **One action**, in present tense, with a clear start and end.
3. **One camera move** (static, slow push in, orbit, handheld follow). Two moves in one short clip often fight each other.
4. **Light and lens**: time of day, soft or hard light, depth of field.
5. **Style**: a few words, not a paragraph.
6. **Locks**: what must not change or appear.

Examples (generic, replace the nouns):

> *A ceramic coffee mug on a pale oak desk beside a closed laptop, morning window light from the left, steam rising. Static camera, shallow depth of field, calm and clean, photoreal. No text, no logos, no people.*

> *Slow push in on hands typing on a plain keyboard, shallow focus, warm lamp light, evening. The screen is out of focus and blank. No readable text anywhere in frame.*

> *Wide aerial of an empty coastal road at sunrise, the camera glides forward at constant speed, long shadows, light haze. Cinematic, natural colour grade. No vehicles, no signs.*

**Start-frame prompts** (image-to-video): describe motion only, because the picture already fixes the content. *"The steam rises slowly. The camera pushes in 10 percent. Everything else stays still."* Over-describing the scene in an image-to-video prompt invites the model to change it.

**Multi-shot and references.** Some models accept several shots in one request, or reference images, reference videos and reference audio. Name each reference's role in the prompt ("image one is the character, the video is the motion reference"). For motion transfer you need two inputs: a character image with arms and hands visible and room around the body, and a clean motion video without camera cuts and with matching framing (per the vendor's guide for Kling 3.0 Motion Control).

**Character consistency tips.**

- Train the identity on a **clean, varied** photo set: different angles and expressions, good light, no sunglasses, one person per photo, at least one full-height shot, recent photos. A small clean set beats a large messy one.
- Expect "clearly the same person", not a pixel-identical face. Extreme style or angle changes can drift.
- A trained identity holds one person. For two or more consistent characters in a scene use reusable Elements.
- Reuse the same start frame, same words for the character, and the same model across the series. Switching models mid-series changes the look.
- The trained identity is not exportable as a file (per the vendor): plan to stay on the platform for that character.

**Reframing and upscaling.** Generate at the final aspect ratio when you can; reframe is for rescuing footage, and it invents the extra picture. Upscale last, once, on approved clips. Check faces and fine texture afterward.

**Native audio.** Several models can generate sound with the picture. Treat it as a scratch track. Mute it, then build voice, music and effects deliberately ([audio-ducking-and-mix](audio-ducking-and-mix.md)).

## Quality checks

Run these before a clip enters the edit:

1. **Contact sheet** (a grid of still frames from the clip). `ffmpeg -i clip.mp4 -vf "fps=2,scale=320:-1,tile=6x2" sheet.png` and look at it. Hands, faces, text-like shapes and objects that appear or vanish show up immediately.
2. **First and last frame.** Does the clip start where the start frame was, and end somewhere usable for a cut?
3. **Hallucinated text and logos.** Any readable text or brand mark that you did not supply is a defect. Regenerate or crop.
4. **Physics and continuity.** Liquids, hands holding objects, fabric, reflections, number of fingers or legs.
5. **Spec conformity.** Frame rate, size, codec and aspect ratio match the project. Variable frame rate is a common cause of sync drift: conform with ffmpeg as above.
6. **Series consistency.** Put all clips of one character or product side by side. Same face, same colours, same proportions?
7. **Rights note.** The generation manifest entry is filled: no real person without consent, no third-party mark, no celebrity lookalike.
8. **Disclosure decision.** Realistic synthetic footage may need a label (see the licensing section).

## Where it is weak, and what to build as code instead

| Weak spot | Why it matters | Build instead |
| --- | --- | --- |
| Text in frame (titles, captions, signs, packaging) | Garbled or changing letters, especially in motion | Titles and captions as HTML or React layers over the clip |
| Exact brand logos | Models invent near-misses | The real logo file as an overlay component |
| Charts, diagrams, numbers, interface (UI) screenshots | Plausible but wrong; viewers may rely on them | Data-driven charts in code; real screenshots (see [overlay-asset-research](overlay-asset-research.md)) |
| Long takes and precise timing | Clips are seconds long; timing varies per generation | Cut several short clips on a timeline you control |
| Hands, object handling, crowds | Frequent artefacts | Frame so they are out of shot or blurred, or film it for real |
| Speech from a character | Lip sync and voice vary | An avatar tool ([heygen-avatar-video](heygen-avatar-video.md)) or recorded footage ([talking-head-autocut](talking-head-autocut.md)) |
| Same face over many scenes without setup | Drift | Trained identity or reference elements, same start frames |

Some image models in the catalog are tagged by the vendor as strong at text rendering, and one family is tagged for vector logos and icons. That helps stills, but verify every letter, and keep logos as supplied files.

## Pitfalls

- **Generating before approving the shot list.** Credits are the budget; stills first, finals last.
- **Letting the agent pick the model silently.** Ask it to state model, duration, resolution and estimated cost for each request.
- **Prompting like a screenplay.** One action, one camera move per clip.
- **Mixed specs.** Clips from different models arrive at different frame rates and sizes. Conform them all.
- **Keeping native audio by accident.** It clashes with your mix. Disable it or strip it with `-an`.
- **Uploading a real person's face or voice without consent.** See below.
- **Assuming the web plan's unlimited or free generations apply.** Per the vendor, they apply only on the website, not through the agent routes.
- **Treating the model list in this pattern as current.** It will be stale. Query the platform.
- **Using clips as evidence.** Generated footage depicts nothing real. Never use it where viewers would take it as documentation.

## Cost and licensing notes (as of 2026-10-05, verify)

- **Credits.** Every generation through the agent routes deducts credits at standard rates; cost depends on model, resolution, duration and options. No prices are listed here on purpose. Ask the agent for the estimate before each request.
- **Unlimited and free generations.** Per the vendor, they apply only on its own website, not through MCP or CLI.
- **Ownership and commercial use.** The vendor's help center summarises its terms (section 4.4): it does not claim ownership of your inputs or outputs and does not restrict commercial use of outputs; rights survive cancellation; outputs are not guaranteed exclusive. Plans with watermarks put the mark into the file at generation. Read the current terms yourself before client or paid work, and ask a lawyer for anything high-stakes.
- **Your warranties.** By uploading content you represent that you hold the rights, including consent from anyone whose name, likeness or voice appears. Use your own face and voice, or people who gave written permission. Do not imitate celebrities or private individuals.
- **Third-party models.** Each underlying model has its own safety filters; flags can be false positives. Rephrase the prompt; do not try to bypass filters (the terms prohibit it).
- **Labelling.** Major platforms ask creators to disclose realistic AI-generated or meaningfully altered content (YouTube and TikTok both document this in their help centers). In the EU, the AI Act's transparency rules (Article 50) apply from 2 August 2026, including labelling of deepfakes by those who publish them; details and grace periods are still being finalised: **verify**. This is not legal advice.
- **Privacy.** Uploaded photos may count as biometric data under some laws. Read the vendor's privacy policy before uploading faces of other people.

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/higgsfield-generative-video.md
>
> Goal: `[what the clips are for, e.g. five b-roll clips for a 40-second vertical video about X]`, format `[9:16 or 16:9]`, language of any on-screen text `[language]` (text will be added later in code, so generate clips without text or logos).
> References: `[product photos, brand colours file, character photos I own or have permission to use]`. Use nothing else and do not imitate any real person or brand.
> Taste: `[mood, pace, light, what to avoid]`.
>
> Order of work, stop where I say: (1) check that Higgsfield is connected by asking for my credit balance; if it is not connected, tell me what I must do myself and stop; (2) write `brief.md` and a shot list table and wait for my approval; (3) ask the platform which models fit each shot, and tell me model, duration, resolution and estimated credits per request; (4) generate stills first, show me the contact sheet, wait for approval; (5) generate cheap test clips, then finals only for approved shots, audio off; (6) conform every clip to `[size, fps]`, build a contact sheet, fill the generation manifest. Ask for my yes before every generation that spends credits. Ask before you install anything. Never paste or store any token, key or password. Mark anything you could not verify as `verify`.
