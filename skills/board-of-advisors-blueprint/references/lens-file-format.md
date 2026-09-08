# The Lens File Format

A lens is one markdown file that turns a body of published work into something a model can argue
from. It is not a biography, and it is not an "act like X now" prompt. It is a compact record of
how a specific person decides things, plus an honest statement of where that record came from.

## The provenance contract

This is the most important rule in the whole setup, and the easiest one to let slide.

Every lens file separates two kinds of content:

- **Notes-extract**: material drawn from your own notes on the source. You read the book, watched
  the talks, took notes, and distilled from those notes. You can point at where it came from.
- **General knowledge**: material the model produced about that thinker from its general
  training, with nothing of yours behind it. Plausible, often roughly right, and not verified.

Both are allowed in a lens. Mixing them silently is not.

**Why it matters in practice.** Six months later you will want to quote a lens in something that
matters: a memo, a pitch, a post, a message to a real advisor. At that moment the only question
is "can I stand behind this attribution." If the file does not tell you which half of it is
yours and which half is the model's paraphrase of a book it may or may not have read closely,
the answer is no, and the whole file becomes unusable for anything public. A general-knowledge
lens that is honestly labelled stays useful for private thinking. An unlabelled one poisons
everything downstream.

**How to enforce it:**

- A status line at the top of every lens file, stating which mode the file is in.
- If notes-extract, name the sources, so a claim can be traced back.
- A dedicated final section for anything that is general knowledge only, with an explicit warning
  to verify before quoting.
- A rule in your own SKILL.md: never quote a general-knowledge section verbatim in anything that
  leaves the conversation without checking it against the source first.

## The five sections

**1. Core heuristics.** Two to five central thinking tools, each as a row: the name, what it says
in one compact line, and how you actually apply it to a decision. The third column is what makes
the lens useful. "Test the riskiest assumption first" is a slogan. "Before building, ask which
assumption, if false, makes the rest irrelevant, and test that one rather than the easiest one"
is a heuristic you can run.

**2. This person's typical questions.** Three to five questions they would ask about almost any
decision, in their own register. This is what separates a lens from a generic opinion during a
debate: in round 1 the lens does not summarise its philosophy, it interrogates your situation
with these.

**3. Blind spots. Mandatory.** Every school of thought is systematically wrong somewhere. Name
where. This section exists for the synthesis round: without it, the synthesis has no way to
discount a voice in the territory where that voice is predictably unreliable, and it silently
treats all lenses as equally credible on every question. If you cannot name a blind spot, you
have not understood the thinker well enough to build the lens yet. Where a blind spot is covered
by another lens on your board, say so, that pairing is exactly what a debate is for.

**4. A worked example.** How this lens would concretely evaluate one real decision from your own
domain. Short. Its job is to prove the heuristics in section 1 are specific enough to produce a
different answer than the neighbouring lens would.

**5. Explicitly flagged general knowledge.** Everything not backed by your own notes, gathered in
one place, clearly lower-confidence.

## The template

Copy this into `advisors/_template-lens.md` and duplicate it per lens.

```markdown
# {Name} Lens, {core work or source}

**Status of this file:**
{one of:}
- Notes-extract from my own notes. Sources listed below.
- Distilled entirely from general knowledge about this person's published work, not verified
  against the source.

If notes-extract, sources:
- {source title, edition, or the notes document it came from}

---

## 1. Core heuristics

| Heuristic | What it says | How to apply it |
|---|---|---|
| {name} | {one compact line} | {a concrete instruction that changes an answer} |

## 2. This person's typical questions

- "{question 1}"
- "{question 2}"
- "{question 3}"

## 3. Blind spots of this lens

Required. Where is this school of thought systematically wrong, and which other lens on the
board covers that gap?

- {blind spot, plus the counterpart lens if there is one}

## 4. Applied to a real decision in my domain

{Three to six sentences: a concrete decision, and how this lens specifically would evaluate it.}

## 5. Explicitly flagged as general knowledge

{Anything above that is not backed by my own notes goes here, restated. Verify against the
source before quoting it anywhere that leaves this conversation.}
```

## Picking who goes on the board

- **Read them first.** The reading is the work. The file is a byproduct.
- **Pick for disagreement.** Three lenses that would give the same answer are one lens with extra
  steps. A board earns its cost when a speed-and-iteration voice, a craft-and-patience voice, and
  a commercial voice pull a decision in three directions.
- **A role can be a lens.** Not every seat has to be a named author. A buyer or customer seat, a
  skeptical CFO seat, or a "the person who has to maintain this in two years" seat can be built
  the same way, sourced from real interviews, real transcripts, or real support tickets you have
  actually read. The provenance contract applies identically: say where the material came from.
- **Public thinkers are the easiest starting point** because the source material is available and
  you can go back and check a claim. Any published author, operator, or investor whose work you
  have read closely works. What does not work is a name you admire but have not read.

## What a thin lens looks like, and why it is still worth writing

An honest one-page lens with three heuristics, four questions, two blind spots and one worked
example will outperform an elaborate one you padded. Padding is where invention creeps in, and
invention is exactly what the provenance contract exists to keep out. Write thin, use it, and let
the file grow only when a real session shows you a gap.
