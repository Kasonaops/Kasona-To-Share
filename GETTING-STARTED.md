# Getting Started (no coding, no GitHub experience needed)

Everything in this repository is a set of instructions **for Claude**, not for you. You never have
to read the technical parts. Your job is to get the right file in front of Claude and tell it, in
plain language, what you want. Claude reads the file and does the rest.

This page tells you exactly what to click and what to type.

---

## Step 1: What kind of thing are you looking at?

There are four kinds of things in here. The folder a file lives in tells you which one it is.

| Folder | What it is, in plain words | What you need | Can Claude.ai in the browser do it? |
| --- | --- | --- | --- |
| `Judgement/` and `skills/` | A **method**. Claude follows a proven step-by-step process with you, for example to think through a hard decision | Any Claude account | Yes |
| `patterns/` | A **recipe for building something**, for example cutting a video, making motion graphics or building an onboarding tour | **Claude Code**, because Claude creates real files and runs programs on your computer | No, you need Claude Code |
| `prompts/` | A **ready-made text** you copy into a chat and fill in | Any Claude account | Yes |
| `plugins/` | An **add-on for Claude Code** | Claude Code | No |

**What is Claude Code?** The version of Claude that can work inside a folder on your computer:
create files, install tools and run them, always asking you before it does something. The easiest
way to get it is the **Code** tab in the Claude desktop app. See
[claude.com/claude-code](https://claude.com/claude-code) for download and setup. You need a paid
Claude plan for it.

---

## Step 2: Give it to Claude

This repository is public, so the fastest way is to **paste the link**. No download, no GitHub
account.

### Option A: Paste the link (easiest)

1. Open the file you want on GitHub and copy the address from your browser's address bar.
2. Open Claude (Claude Code for `patterns/` and `plugins/`, any Claude for the rest).
3. Paste one of the sentences from Step 3 below, with the link in it.

If Claude says it cannot open the link, use Option B.

### Option B: Download and drag in

1. On the repository's main page on GitHub, click the green **Code** button, then **Download ZIP**.
2. Double-click the ZIP to unzip it. You now have a normal folder.
3. **Claude Code:** open the folder you want to work in, then drag the unzipped folder (or just the
   one you need, for example `Judgement`) into it. **Claude.ai:** drag the files into the chat.
4. Paste one of the sentences from Step 3.

To grab a single file instead of the whole ZIP: open the file on GitHub, click **Raw**, and save the
page (Cmd+S on Mac, Ctrl+S on Windows).

### Option C: Connect GitHub (stays up to date)

In Claude, open **Settings, then Connectors**, connect **GitHub**, and approve the login once.
After that Claude can read the repository directly whenever you mention it.

---

## Step 3: Copy one of these sentences

Replace the part in `[brackets]` with your own words. That is all the "programming" there is.

### A hard decision (Judgement toolkit, any Claude)

> Read the Judgement toolkit at https://github.com/Kasonaops/Kasona-To-Share/tree/main/Judgement,
> start with its README, and use the decision-partner to walk me through this decision step by
> step: [describe your situation in two or three sentences]. Ask me one question at a time.

Want several viewpoints arguing first? Swap the last part for: "use the board-of-advisors-blueprint
to help me set up a small advisor board for [your field] and run one session on [your question]."

### Video: which one do I need?

There are eight video recipes. **If you are not sure which one you need, start with the first one below.** It asks what you have and what you want, then tells you which recipes to combine, what each step costs you, and waits for your yes. All video recipes need **Claude Code**, and all of them work the same way: Claude asks before it installs anything, asks before it spends any paid credits, and publishes nothing. What you get is files in your folder. For each recipe below, open the folder it names in Claude Code, paste the quoted sentence and replace the parts in [brackets] with your own words.

| If you want to ... | Use |
| --- | --- |
| Decide what to use, or combine several approaches | Choosing a video approach (start here) |
| Clean up a recording of yourself talking | Cut a talking-head recording |
| Show real logos and screenshots at the right moment | On-screen logos and screenshots |
| Add music, sound effects and a proper volume | Music, sound effects and loudness |
| Make an ad, explainer or release-notes clip built as code | Motion-graphics videos built as code |
| Make on-brand videos from a product you already have as code | Automated videos from your product |
| Create footage you cannot film | Generated clips |
| Have a presenter speak without filming anyone | A presenter video with an avatar |

#### Not sure which video approach to use? (choosing-a-video-approach pattern)

- **You get:** a written recommendation of which approaches to combine, with the risks and the cost in time and money. No video is built yet.
- **Prepare:** nothing. Open the folder with your material (or an empty one) in Claude Code.
- **Safety:** nothing is installed, bought or published; Claude waits for your yes before it builds anything.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/choosing-a-video-approach.md
> I want to make [describe the video, who watches it, how long]. I have [footage, script, photos, or
> nothing yet]. Recommend which approaches to combine, tell me what each step will cost me, and wait
> for my yes before you build anything.

#### A short video cut from a raw recording (talking-head-autocut pattern)

- **You get:** one vertical short with silences, "um"s and false starts removed, plus an edit list (a small file listing which parts are kept) you can change and re-render.
- **Prepare:** put your raw video in a new folder and open that folder in Claude Code.
- **Safety:** Claude shows you the edit list before it renders anything, and asks before installing any tools. Nothing is published.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/talking-head-autocut.md
> and cut the video in this folder into one vertical short of about [length] for [platform]. Show me
> the edit list before you render anything, and ask before installing any tools.

#### On-screen logos and screenshots for a video (overlay-asset-research pattern)

- **You get:** a list of moments that need a visual, the logos and screenshots collected from official sources, a manifest (a list recording where each file came from), and a cue file with the exact time each visual appears.
- **Prepare:** open the folder with your video and its transcript (or script) in Claude Code.
- **Safety:** Claude shows you every asset and its source before anything is built, and asks before installing anything. Nothing is published.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/overlay-asset-research.md
> and find the moments in this transcript that need an on-screen visual. Collect logos and screenshots
> from official sources only, and show me the list of assets with their sources before you build
> anything.

#### Music, sound effects and loudness for a video (audio-ducking-and-mix pattern)

- **You get:** your video with the music dipping under the voice, sound effects in the right places, and a consistent final loudness (-16 LUFS, a standard measure of how loud a video sounds), plus a manifest of every sound and its licence.
- **Prepare:** open the folder with your video or voice recording and the music and sound effect files you downloaded yourself. Read the licence of each file; Claude can note what it sees but cannot clear a licence for you.
- **Safety:** Claude uses only the files you give it, asks before installing anything, and publishes nothing.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/audio-ducking-and-mix.md
> and mix the voice, music and sound effects in this folder so the music dips under my voice. Tell me
> the loudness before and after, and list anything about the licences I still need to check myself.

#### Motion-graphics videos built as code (html-native-video-workflows pattern)

- **You get:** an ad spot from your product's website, an explainer with checked facts, or a release-notes clip from a pull request (a proposed code change on GitHub). First as still images, then as a video file.
- **Prepare:** open an **empty folder** in Claude Code. Have the website link, topic or pull request link ready. If you want a synthetic voice, you need an account at a voice provider; the key goes into an environment variable that you set yourself, never into the chat.
- **Safety:** Claude tells you what it will install and why, and waits for your yes. Nothing is published.

Choose a, b or c:

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/html-native-video-workflows.md
> and do workflow [a: ad spot from my product's website / b: explainer video on a topic, with
> checked facts / c: release-notes clip from a pull request] for [website link, topic or pull request
> link]. Tell me what you will install and why before you do it, and show me still images before you
> make the full video.

#### Automated videos from your product (remotion-video-generation pattern)

- **You get:** a small project that turns your product description, website and brand assets into on-brand videos, and one test video of about 20 seconds. Plan roughly an hour for the first video, most of it answering Claude's questions.
- **Prepare:** create an **empty folder** (for example `my-videos`), open it in Claude Code, and have your logo, brand colours and website link ready.
- **Safety:** Claude checks what is missing on your computer (usually Node.js, a free tool for running JavaScript programs) and asks before installing it. Nothing is published. Check whether your company needs a paid Remotion licence.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/remotion-video-generation.md
> Set it up for me in this folder, step by step. My product is [what it does, in one sentence],
> my website is [link], and my audience is [who watches]. Before installing anything, tell me
> what you will install and why. Then make one short test video of about 20 seconds.

#### Generated clips: b-roll, product shots, consistent characters (higgsfield-generative-video pattern)

- **You get:** short generated clips and stills (b-roll means supporting footage shown over the main shots), a shot list you approved, and a record of how each clip was made.
- **Prepare:** you need your own paid Higgsfield account. Only you can create it and approve the sign-in; Claude will tell you when. Open an **empty folder** in Claude Code.
- **Safety:** generating costs credits on your account. Claude tells you the model, length and estimated cost before every generation and waits for your yes. It asks before installing anything and publishes nothing.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/higgsfield-generative-video.md
> and make [number] short clips for [what the video is about], format [vertical or horizontal]. Write
> a shot list first and wait for my approval. Before every generation tell me the model, length and
> estimated credit cost and wait for my yes. Do not put text or logos into generated clips.

#### A presenter video with an avatar, or a translated version (heygen-avatar-video pattern)

- **You get:** a presenter video spoken from your script by a synthetic avatar, a 10-second test first, and a note listing who is depicted, who consented and which labels apply.
- **Prepare:** you need your own HeyGen account. If you want an avatar of a real person (including yourself), that person must record a short consent clip themselves; Claude cannot do that for you. Never paste an API key (the secret code that lets software use your account) into the chat; Claude will tell you how to set it up safely. Open an **empty folder** in Claude Code.
- **Safety:** Claude asks before installing anything and before spending credits, and never creates an avatar or voice of a real person without your confirmed written consent. Nothing is published; you decide about labelling before you publish.

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/heygen-avatar-video.md
> and make a [length] presenter video about [topic] for [audience] from this script: [file name, or
> "write one and show it to me first"]. Make a 10-second test first, and tell me what I must label
> or get consent for before I publish.

### An onboarding tour for your web app (guided-tour pattern, Claude Code only)

Open the folder that contains your app's code in Claude Code, then paste:

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/guided-tour-pattern.md
> and build a first-visit guided tour for this app with five steps. Show me the steps as a list
> before you write any code.

### A ready-made prompt (prompts folder, any Claude)

Open the prompt's folder, copy the text from `prompt.txt`, paste it into a new chat, and fill in the
parts in capital letters.

### Any other skill (any Claude)

> Read the skill at [link to its SKILL.md] and use it on this: [your situation or question].

---

## Step 4: What to expect

- Claude will ask you questions. Answer them. The value of these files is the structure: they make
  sure no important step is skipped.
- In Claude Code, Claude asks for permission before it creates files or installs anything. Read the
  request and click allow if it makes sense to you. If you are unsure, ask Claude "what does this do
  and is it safe?" before allowing.
- Nothing here sends your data anywhere by itself. You decide what you share with Claude and, for the generated-clip and avatar recipes, what you upload to those platforms.

## Stuck?

Tell Claude exactly what you see, for example "it says command not found" or "nothing happened
after I clicked allow". It can almost always fix it. If something in this guide does not work the
way it is described, reach out at [hallo@kasona.ai](mailto:hallo@kasona.ai).

## For developers

```bash
git clone https://github.com/Kasonaops/Kasona-To-Share.git
```

Copy a skill folder into your skills directory, point your agent at a `SKILL.md`, or install a
plugin from `plugins/`.
