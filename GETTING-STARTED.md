# Getting Started (No GitHub Experience Needed)

This page is for anyone who wants to use what is in this repository but has never used GitHub before. You do not need to know git, the command line, or any developer tools to get value out of this. Pick whichever of the three paths below sounds easiest to you.

## Path 1: Download and drag in (fastest, zero setup)

1. On this repository's GitHub page, click the green **Code** button near the top.
2. Click **Download ZIP**.
3. Unzip the file on your computer, you now have a normal folder.
4. Open Claude:
   - In **Claude Code**: drag the folder (or the specific skill folder you want, e.g. `skills/decision-partner`) into your project, or just tell Claude in the chat "read the SKILL.md in this folder and use it" and point it at the unzipped location.
   - In **Claude.ai with Cowork**: drag the folder into the chat, or upload the files you want. Tell Claude what you want to do with them, for example "use the decision-partner skill on my situation."
5. That's it. Claude reads the file and follows its instructions for the rest of that conversation.

You can also just download a single file instead of the whole ZIP: open the file on GitHub, click the **Raw** button (or the download icon), and save it. Works exactly the same.

## Path 2: Connect GitHub to Claude (no downloading, always up to date)

If you already have, or are willing to create, a free GitHub account:

1. Create a GitHub account at [github.com](https://github.com) if you do not have one (free, takes a minute, just an email and a password).
2. In Claude, go to **Settings > Connectors** (or **Connectors** in the sidebar, depending on where you are using Claude).
3. Find **GitHub** in the list and connect it. This asks you to log into your GitHub account and approve the connection, you do this once.
4. Once connected, give Claude this repository's link in the chat and ask it to use a specific skill or pattern from it, for example: "Look at the decision-partner skill in [this repo link] and help me think through [your situation]."
5. Claude fetches the file directly through the connection, no download needed. This is the easiest way to always get the current version, since the repository may be updated over time.

## Path 3: Clone it with git (for developers)

If you are comfortable with git:

```bash
git clone https://github.com/Kasonaops/Kasona-To-Share.git
```

Then reference any `SKILL.md` file directly in your own agent setup, copy a `skills/` folder into your own skills directory, or point Claude Code at the local path.

## What to actually do once you have a skill

Every skill in this repo lives in its own folder and has a file called `SKILL.md`. That file tells Claude (or another AI agent) what the skill does and when to use it, you do not need to read or understand the technical parts yourself. The simplest way to use one:

1. Get the skill's `SKILL.md` in front of Claude (any of the three paths above).
2. Describe your actual situation or question in plain language.
3. Ask Claude to apply that skill to it, e.g. "walk me through the decision-partner framework for [my decision]" or "build me an advisor board using the board-of-advisors-blueprint for [my domain]."
4. Answer the questions Claude asks you. The value of these skills is in the structure, not in any hidden magic, they exist to make sure you (or the AI helping you) do not skip steps that are easy to skip when thinking alone.

## Questions

If something in this guide does not work the way it is described, or you get stuck, reach out at [hallo@kasona.ai](mailto:hallo@kasona.ai).
