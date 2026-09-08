# Outputs and Templates

Two things a session can produce beyond the synthesis itself: a briefing for a real human, and a
journal entry for your future self.

## The real-advisor bridge

Real advisors are the third category, and the rule is absolute: **they are never simulated.** No
lens is written for someone you can actually call. The board's job for them is the opposite of
simulation, it prepares you so that the time you get with them is spent on judgment rather than
on context.

The failure mode this prevents is specific and easy to fall into. A lens produces a clean line.
The line goes into a message. The qualifier gets trimmed for length. Now a named person appears
to have said something they never said, and you cannot walk that back once someone else has
repeated it.

So: anything a session produces about what a simulated board thinks is labelled as simulated,
every time, in the artefact itself and not only in your intent.

### Profile template

Copy into `real-advisors/_template-profile.md`.

```markdown
# {Name}, real advisor profile

> No persona is simulated for this person. This file supports a briefing to them. It is never
> a "here is how they would answer" simulation.

## Why this person is on the board
{One or two sentences: what makes their perspective valuable, specifically.}

## What they want in a briefing
{Numbers first or story first, how direct they are, what they find a waste of their time.}

## Cadence
- Frequency: {monthly / at specific decisions / ad hoc}
- Format: {short written briefing / call prep / both}
- Last contact: {date}

## Topic history
| Date | Topic | What they said or decided | Revisit on |
|---|---|---|---|
| | | | |
```

### Briefing format, per topic

1. **Context.** What this is about, in two or three sentences. Assume they remember nothing.
2. **The concrete question.** What exactly you want them to help judge or decide. One question,
   not a status update with a question buried in it.
3. **What the simulated board already said**, if applicable. A short synthesis, explicitly
   labelled as simulated, never presented as anyone's real opinion.
4. **What you already think.** Your own current position and why. Withholding it to get an
   unbiased answer usually just costs a round trip.
5. **What would change your mind.** The most useful line in the whole briefing, and the one most
   people leave out.

You send it. The board never contacts a real advisor on your behalf.

## The decision journal

One plain markdown file per decision worth revisiting. That is the correct amount of
infrastructure. If you find yourself designing a schema, a database, or a sync target for this,
that is the fragmentation the format exists to prevent.

Set a boundary for what belongs here, and write it into the template so it is enforced at the
moment of writing. Journal the class of decision this board is actually for, strategy, scope,
pricing, positioning, creative direction, what to work on, and send any decision that already has
a home elsewhere to that home instead. A decision recorded in two places is a decision that will
disagree with itself later.

### Entry template

Copy into `decision-journal/_template-entry.md`.

```markdown
# Decision journal, {date}, {topic}

**Boundary:** this journal covers {the decision classes this board handles}. Decisions that
already have a home elsewhere are logged there, not here, and never in both.

**Lenses involved:** {which lenses, plus any real advisor consulted}

## The question
{One sentence.}

## Ranked outcomes
{What should be true at the end, in priority order, each with its reason. See the outcome pass in
thinking-tools-integration.md.}

## Assumptions behind this decision
- {stated explicitly, not left implicit}

## The synthesis point
{The most robust position the lenses converged on.}

## What actually tipped it
{Which lens or which argument decided it, and why. Often not the same as the synthesis.}

## Decision made
{Concrete and actionable.}

## Kill-criteria
{The conditions under which this gets abandoned, written so you would recognise them.}

## Bias check
{What bias could be at play. The most common one: a lens happened to confirm what you already
wanted, and you promoted it.}

## Open gaps at the time of deciding
{Anything from the information-gaps step that never closed.}

## Revisit on
{Date, plus what you will check.}
```

### Why the journal is worth the five minutes

The single most valuable field is "what actually tipped it," because it is the one you will
misremember. Six months later you will recall the reasoning that turned out to be right, not the
reasoning you actually used. Written down at the time, that field is the only honest record of
your own decision process, and reading a year of them back is the fastest available way to find
out where your judgment is systematically off.

For prepare, reflect and retrospective modes of journalling beyond a board session, see
`skills/investment-decision-toolkit/references/decision-journal.md` in this repository.
