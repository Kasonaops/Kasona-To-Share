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
| `patterns/` | A **recipe for building something**, for example a machine that turns your product into animated videos | **Claude Code**, because Claude creates real files and runs programs on your computer | No, you need Claude Code |
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

### Automated videos from your product (Remotion pattern, Claude Code only)

1. In Claude Code, open an **empty folder** for the project (create a new one, for example
   `my-videos`).
2. Paste:

> Read this pattern: https://github.com/Kasonaops/Kasona-To-Share/blob/main/patterns/remotion-video-generation.md
> Set it up for me in this folder, step by step. My product is [what it does, in one sentence],
> my website is [link], and my audience is [who watches]. Before installing anything, tell me
> what you will install and why. Then make one short test video of about 20 seconds.

What happens next: Claude checks what is missing on your computer (for Remotion that is usually
Node.js), asks before installing it, builds the folder structure from the pattern, asks you for your
logo and brand colours, and renders a first video file you can open. Plan roughly an hour for the
first video, most of it answering Claude's questions.

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
- Nothing here sends your data anywhere by itself. You decide what you share with Claude.

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
