# Avatar and presenter videos with HeyGen + Claude Code

A pattern for producing talking-presenter videos without a camera: a digital avatar speaks a script you control, in a voice you chose or cloned with consent, optionally translated and lip-synced into other languages. [HeyGen](https://www.heygen.com) is the worked example. Claude Code can drive it through HeyGen's MCP connector, its command line tool or its HTTP API. The result is a clip you then finish with captions, overlays and a proper audio mix.

> **Not a developer? You do not need to read the rest of this page. Claude does.**
>
> 1. Get **Claude Code** (the Code tab in the Claude desktop app, see [claude.com/claude-code](https://claude.com/claude-code)) and a **HeyGen account**. Only you can create the account, approve the sign-in and, if you want a digital twin of yourself, record the consent clip.
> 2. Create an empty folder for the project and open it in Claude Code.
> 3. Paste, with your own details in the brackets:
>
>    *Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/heygen-avatar-video.md. I want a [length] presenter video about [topic] for [audience]. The script is in this folder / write it for me and show it to me first. Tell me what I need to set up myself, and make a 10-second test before the full video.*
>
> More help: [GETTING-STARTED.md](../GETTING-STARTED.md). Not sure an avatar is the right tool? Read [choosing-a-video-approach](choosing-a-video-approach.md).

Status of this page: written 2026-10-05 from HeyGen's developer documentation, help center and policies. Products and endpoints move quickly; claims that could not be confirmed from an official page are marked **verify**.

## What it is and when to choose it

Choose an avatar when the **message is spoken** and a human presenter helps, but filming is impractical:

- **Training and onboarding** videos that change often. Edit the script, re-render.
- **Product updates and announcements** by a presenter who is not available.
- **Many languages from one source.** Translation with voice cloning and lip sync across a long list of languages (the documentation gives different counts on different pages, from "30 plus" to "175 plus", so ask the API for the live list).
- **Personalised or batch videos** from a template and a data file (batch endpoints accept up to 100 items per request).
- **A consistent presenter** across a series, in several outfits or settings.

What HeyGen offers, in plain terms (names as in its docs):

| Capability | What it does |
| --- | --- |
| Video Agent | Prompt in, finished video out; it writes, casts and renders. Fast, but it decides a lot |
| Avatar video | You pick avatar look, voice and script; exact words, exact control |
| Digital twin | Avatar trained from footage of a real person, with a voice cloned from the same recording, after a consent step |
| Photo avatar | Avatar from one still image |
| Prompt avatar | A synthetic character described in text |
| Cinematic avatar | Prompt-directed shots from avatar looks |
| Video translation and lip sync | Translate an existing video, or replace its audio and re-sync the mouth |
| Voices | Stock catalogue, voice design from a description, instant clone, professional clone |
| Transparent-background avatar video | A WebM you can place into your own scenes |
| Brand kit and glossary | Colours, fonts, logo, and fixed pronunciation or no-translate terms |

Do **not** choose an avatar when the viewer needs trust in a real person's real words (statements, testimonials, apologies), when you need exact charts or interface demos as the main content (build those in code), or when you can simply film and clean up ([talking-head-autocut](talking-head-autocut.md)). Also see the generative clip route in [higgsfield-generative-video](higgsfield-generative-video.md) for scenes without a presenter.

## Setup (Claude Code: MCP, CLI or API)

HeyGen's own docs describe an order of preference for agents. Summarised:

1. **CLI or API with an API key.** Best for scripts, batches and anything repeatable; billed to API plans. The key lives in an environment variable on your machine (HeyGen's docs use the name `HEYGEN_API_KEY`).
2. **MCP over OAuth.** Quickest for a first test; no key; billed against your plan's credits. HeyGen's docs call it trial-scale and recommend a key for production.

Claude Code route for MCP, as documented by HeyGen (run in your terminal, not inside the Claude Code prompt):

```bash
claude mcp add --transport http heygen https://mcp.heygen.com/mcp/v1/
```

Then inside Claude Code run `/mcp` and complete the browser sign-in. `claude mcp list` should show it as connected. HeyGen also publishes official agent skills for video, avatar and translation work (a repository named `skills` under the heygen-com organisation); ask Claude to read their instructions before writing prompts.

What only you do:

1. Create the account and, for API use, create the API key in HeyGen's dashboard. Put it into an environment variable yourself. **Never paste a key into the chat or into a file in the project.** A good agent asks you to set it and reply "ready".
2. Approve the OAuth sign-in for MCP.
3. For a digital twin: the person being cloned opens a consent link and records a short statement on camera. The link expires after 24 hours; you can request a new one.
4. For a professional voice clone: it is a paid, beta feature that needs a purchased slot and 20 or more minutes of recordings (**verify** current status).

Verify the connection by asking for your profile and remaining credits (an MCP tool and an API call exist for this). If it fails, do not let the agent guess; read the error.

One date to know: HeyGen's docs say the older v1 and v2 endpoints are supported until 31 October 2026. New work should use v3. If you find old tutorials, check the version.

## Workflow, step by step

1. **Script first, on paper.** Write the spoken script in a file, short sentences, numbers written as they should be spoken, product names with a pronunciation note. Show it to the human before anything renders.
2. **Choose the presenter.** In order of risk, lowest first: a stock avatar from the library; a synthetic character from a prompt; your own digital twin (you, with consent); a photo avatar of someone with documented permission. Never a real person without their consent, never a public figure.
3. **Choose the voice.** Browse stock voices by language, describe the voice you want and let the platform propose up to three, or clone a voice you own (below). Listen to the preview before use.
4. **Ten-second test.** Render only the first sentences at the target size. Check lip sync on names and numbers, gaze, hands, and that the voice does not mispronounce the product. Fix pronunciation with the brand glossary rather than by misspelling the script.
5. **Full render.** Prefer the direct avatar video call when you need your exact words. Use Video Agent when you accept the agent's choices, and its chat mode when you want to approve a scene plan first. Poll the video until it completes (typically a few minutes) or use a webhook callback.
6. **Revise by scene.** Video Agent lets you edit named scenes and leave the others untouched. For direct avatar video, change the script and re-render the clip.
7. **Finish in code.** Add captions from the script (not from speech recognition), lower thirds, logos, charts and screenshots in an HTML or React composition. Place the avatar as a normal clip, or request a transparent-background render and put your own scene behind it. See [html-native-video-workflows](html-native-video-workflows.md).
8. **Mix and label.** Music under the voice ([audio-ducking-and-mix](audio-ducking-and-mix.md)), then decide on the disclosure label (below).

Translation workflow: render or record the source video once, request the target languages, use the proofread option (extract subtitles, edit the SRT, then generate) before spending credits on the final render, apply the glossary so product names stay untranslated, then have a native speaker review each language. Choose "precision" mode for faces that move a lot, are shown from the side or are partly hidden; "speed" is fine for static faces and drafts.

## The ElevenLabs voice question

Can you use a voice you made at a separate speech provider inside HeyGen? Documented answer, as of this writing:

- **In the web app, yes.** HeyGen's help center describes connecting ElevenLabs (and LMNT) by importing voices with a provider API key, in the studio, in the avatar settings and in the proofreading tool. The key is pasted **into HeyGen's own settings screen by you**, not into a chat. Give that key only the permissions HeyGen's article lists, rotate it if exposed, and revoke it when you stop using the integration.
- **Credits stay with the provider.** If the provider account runs out of credits, imported voices stop working in HeyGen (per the help center).
- **In the API and MCP**, the speech endpoints list ElevenLabs as a selectable engine for catalogue voices, and an account policy can block that vendor (the API then returns an access-restricted error). The docs also say an avatar's default voice can be any voice in your workspace "including imported clones". Whether you can import your **own** provider-hosted clone purely through the API, without the web app step, was not confirmed: **verify** before designing a fully automated pipeline around it.
- **HeyGen's own clones** are the simpler path: an instant clone from one recording (minutes), or a professional clone from 20 or more minutes of audio.
- **Consent applies equally.** Cloning or importing a voice of a real person requires that person's permission, whichever provider holds the clone.

## Prompt patterns that work

**Video Agent prompts** read like a brief. HeyGen's own prompting guide recommends: state the duration, add a style paragraph (name, exact colour values, art direction, how things move, what transitions do, one line of vibe), and paste the script if you want scene-by-scene control. Example:

> *Make a 30-second portrait video where a friendly presenter explains our new export feature to existing users. Follow the script below exactly, scene by scene. Use plain on-screen text for the three steps and no stock footage of people.*
>
> *Style: Clean Product Update. Off-white background, charcoal text, one teal accent. Calm pacing, simple fades, no sound effects.*
>
> *Script: Scene 1 (0 to 6 s) presenter on camera: "Exports just got faster." Scene 2 (6 to 20 s) three steps appear one by one, presenter voiceover. Scene 3 (20 to 30 s) presenter on camera with a short call to action.*

**Direct avatar video** needs no creativity in the prompt; it needs a clean script and the right ids. Let the agent list your avatar looks and voices, show you the names, and pin them in a project file so the series stays consistent.

**Pronunciation and terms.** Ask the agent to create a brand glossary with the product name, acronyms and any no-translate terms before the first render, then apply it to videos and translations.

**Looks and framing.** Ask for portrait for social, landscape for slides. Request the highest-fidelity engine that your avatar look supports, and check which engines a look accepts before requesting one (the API rejects unsupported combinations).

**Footage for a digital twin** (documented requirements): one person facing the camera the whole time, clear speech, quiet room, no music, face in frame throughout, 15 to 600 seconds with about two minutes at 1080p recommended. Record the consent clip separately.

## Quality checks

1. **Script against audio.** Transcribe the rendered audio and compare it with the script word by word. Numbers, names and dates are where it goes wrong.
2. **Lip sync at the hard words.** Product names, numbers, plosives. Scrub frame by frame.
3. **Face and hands.** Eye line, blinking, hand shapes, a head that moves oddly at sentence ends.
4. **Voice consistency.** Same voice, same speed across clips of a series.
5. **Captions.** Burn in captions from the script, not from speech recognition, and check line breaks.
6. **Translations.** A native speaker listens to each language. Lip sync cannot save a bad translation, and long phrases in some languages need more time than the source gives.
7. **Compositing edges.** If you used a transparent-background render, check hair and shoulders against your background in motion.
8. **Consent record.** The folder contains a note: who is depicted, who consented, date, scope, where the written consent is kept (outside the repository).
9. **Disclosure decision** made and recorded (below).

## Pitfalls

- **Treating "no consent step" as "no consent needed".** For photo avatars HeyGen runs no consent check and keeps no record; its docs say getting the subject's agreement and keeping your own record is your responsibility.
- **Cloning someone's voice from a public clip.** Not allowed without permission, and many platforms forbid it.
- **Letting Video Agent improvise facts.** It will happily write plausible claims. Paste your own checked script when facts matter.
- **Judging from the thumbnail.** Always watch the rendered clip at full size with sound.
- **Keys in prompts or files.** Use environment variables; never paste credentials into a chat.
- **Using OAuth for production volume.** HeyGen's own docs call it trial-scale; switch to a key for batches.
- **Old tutorials.** v1 and v2 endpoints end on 31 October 2026 per the docs.
- **Long monologues with static framing.** Viewers tire fast. Cut to overlays or screen content every few seconds.
- **Uncanny valley.** Stylised or clearly synthetic presenters are often better received than near-photoreal ones for sensitive topics.

## How HeyGen's open-source HyperFrames relates

HyperFrames is a **separate**, open-source (Apache 2.0) framework from the same company that turns HTML, CSS and seekable animation into MP4. It is not the avatar engine. You can use it with no HeyGen account, rendering locally with Node.js and ffmpeg. HeyGen's docs also describe a hosted render endpoint and a pipeline where an avatar clip, music and sound effects are composited into one designed scene, and its prompting guide says Video Agent builds its scenes in code with HyperFrames. For the code-based workflows, install pointers and quality gate, read [html-native-video-workflows](html-native-video-workflows.md). A sensible split: the avatar for the spoken part, HyperFrames or Remotion ([remotion-video-generation](remotion-video-generation.md)) for everything exact around it.

## Cost and licensing notes (as of 2026-10-05, verify)

- **Credits and plans.** MCP use draws on your plan's credits; API use is billed to API plans with per-operation pricing shown in the dashboard. Professional voice clones need paid slots. No prices are listed here on purpose; ask the agent to read your balance and the pricing page before a batch.
- **Ownership.** HeyGen's moderation policy says you own the rights to the photo or custom avatars you create and are responsible for not violating third-party rights. Its terms say it does not warrant that outputs are free of third-party claims. Read the current terms before commercial work.
- **Consent rules (binding on you).** Custom avatars of real individuals require that person's explicit consent; creating avatars of real individuals, including celebrities and public figures, without it is prohibited, as is representing anyone under 18. The depicted person can ask for removal, and you must honour it. Digital twins have a technical consent step (webcam recording; enterprise accounts have upload or waiver options).
- **Prohibited content.** Fraud, impersonation, disinformation, political persuasion and similar categories are listed in the moderation policy. Read it.
- **Disclosure.** Label synthetic presenters where platforms require it: YouTube asks creators to disclose realistic AI-generated or meaningfully altered content, and TikTok requires labels on realistic AI-generated content. In the EU, AI Act transparency rules (Article 50) apply from 2 August 2026, including disclosure for deepfakes; grace periods for some marking duties are being finalised: **verify**. Even where no rule applies, tell viewers in the description or on screen that the presenter is synthetic. This is not legal advice.
- **Data.** Footage and voice recordings for a twin are personal data. Store consent forms outside the repository, and delete avatars and cloned voices you no longer need (the API has delete calls).

## Prompt to give your agent

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/heygen-avatar-video.md
>
> Goal: a `[length]` presenter video about `[topic]` for `[audience]`, `[portrait or landscape]`, language `[language]`.
> Script: `[file name, or "draft one and wait for my approval"]`. Use only facts from `[sources I provide]`.
> Presenter: `[stock avatar / synthetic character / my own digital twin with consent]`. Voice: `[stock voice description / HeyGen clone I own / provider voice I own]`.
>
> Work in this order and stop where I say: (1) check what HeyGen access exists (connector, command line tool, or environment variable) and tell me what I must set up myself; never ask me to paste a key; (2) show me the script and wait for approval; (3) propose avatar and voice from my library and wait for approval; (4) create a glossary for names and terms; (5) render a 10-second test and report lip sync, pronunciation and any credit cost; (6) after my yes, render the full video; (7) transcribe the result and compare with the script; (8) write `consent-and-disclosure.md` listing who is depicted, who consented, and which platform labels apply. Never create an avatar or clone a voice of a real person unless I confirm in this chat that written consent exists. Mark anything you could not verify.
