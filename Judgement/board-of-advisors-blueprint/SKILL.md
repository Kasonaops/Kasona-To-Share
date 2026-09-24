---
name: board-of-advisors-blueprint
description: A blueprint for building your own personal board of advisors, a folder of simulated thinker lenses you consult on hard decisions, a separate list of real operators you watch but never simulate, and a bridge to the real humans you actually report to. Use when someone wants to build an advisor board, a persona debate setup, a "what would X say about this" system, or a structured way to pressure-test a decision that has no obviously correct answer, and wants the file structure, the provenance rules, the routing logic and the session protocol rather than a one-off answer. Also use when an existing persona setup keeps producing confident-sounding opinions that nobody can trace back to a source. Modular by design: lenses, grounding sources, a domain pack, extra thinking tools and the shape of the output are all plugs (see the Judgement folder's ports).
---

# Board of Advisors Blueprint

How to build a personal board of advisors that you can actually trust: a small set of thinking
lenses distilled from work you have genuinely read, a routing rule so you do not summon all of
them for every question, and a session protocol that forces the board to argue from real
information instead of from vibes.

This is a blueprint, not a finished board. You supply the thinkers, the domain, and the
grounding sources. Everything here is the scaffolding around them.

## How this fits the Judgement ports

This blueprint is one of two engines in the `Judgement/` folder. What you build with it is not a
monolith: each part of your board is a plug that can be swapped without touching the rest.

| Part of your board | Port | Plug format and shipped examples |
|---|---|---|
| `advisors/` | lens | [../ports/lens/_template.md](../ports/lens/_template.md), plus a skeptic seat and a customer seat |
| `grounding.md` | context | [../ports/context/_template.md](../ports/context/_template.md) |
| Domain vocabulary, horizons, hard limits | domain | [../ports/domain/](../ports/domain/) |
| Thinking methods a lens can reach for | tools | [../ports/tools/README.md](../ports/tools/README.md) |
| Synthesis, briefing, journal entry | output | [../ports/output/](../ports/output/) |

**Plug check, first step of every session.** Read [../PLUGGED-IN.md](../PLUGGED-IN.md), load
what is active, and state in one line what is plugged in and what fell back to a default. A
missing plug is named, never pretended. Plugs add, they never remove a ground rule or drop a
never-drop field of the Decision Record ([../ports/README.md](../ports/README.md)).

**Which engine.** A board session surfaces perspectives you would not have generated alone. To
drive one decision that is yours (your own time, career, household) to a dated resolution, use
[../decision-partner/SKILL.md](../decision-partner/SKILL.md). For business, product, offer,
content and team questions, start here and finish there.

## What you end up with

A single portable folder that works with no tooling at all:

```
your-board/
  SKILL.md                     the orchestrator, adapted from this blueprint
  advisors/
    _template-lens.md          the copy-paste lens template
    <one file per lens>.md
  watched/
    README.md                  who you watch, what transfers, what does not
  real-advisors/
    _template-profile.md       how you brief an actual human
  decision-journal/
    _template-entry.md         one plain markdown entry per decision
  router.md                    which lens(es) for which question type
  grounding.md                 one line per grounding source, no IDs, no credentials
```

Nothing in that folder needs a database, an API key, or a running service. Grounding sources are
a pointer layer you plug in if you have one, and the board degrades honestly if you do not.

## The three categories that must stay separate

This is the part worth stealing even if you build nothing else. Three kinds of people end up on
a board, and they are governed by three different rules.

| Category | Mode | What it is | Hard rule |
|---|---|---|---|
| **Advisors** (simulated) | Pull | Lenses distilled from published work you have read. You bring a decision, the lens answers from its own worldview. | Every claim is traceable to a source, and marked by where it came from. |
| **Watched operators** | Push | Real people a step or two ahead of you, observed on a schedule. You do not ask them anything, you record what they demonstrably did. | Never simulated. You cite what they shipped or said, never "here is what they would tell you." |
| **Real advisors** | Neither | Actual humans you report to, mentors, an investor, a board member, a senior friend. | Never simulated at all. The board prepares a briefing for them, and you send it yourself. |

**Why collapsing these causes real damage.** The failure mode is a simulated answer that leaves
the room as a real person's opinion. It happens by drift, not by intent: a lens produces a
sharp line, the line gets pasted into a message, the qualifier falls off, and now a named human
is on record for something they never said. The same drift in the other direction is quieter and
just as bad: you simulate somebody you actually watch, the model fills the gaps with plausible
invention, and you start acting on a fabricated version of a real operator's judgment. Keep the
three in three folders, keep the labels on every output, and make the rule explicit in your own
SKILL.md rather than trusting yourself to remember it mid-session.

## The build order

Do these in order. The first three get you a working board in an afternoon.

1. **Write one lens, not twelve.** Pick the single thinker whose work you have read most
   carefully and who is most relevant to the decisions you actually face. Fill in
   `references/lens-file-format.md`'s template for that one person. Resist the roster. A board of
   one honest lens beats a board of twelve invented ones.
2. **Use it on a real decision, single-lens, no debate.** You will find out immediately whether
   the heuristics you wrote down are specific enough to change an answer. Vague heuristics
   produce generic advice, and you can only see that against a real question.
3. **Write the router.** One row: this question type goes to this lens. A router with one row is
   still a router, and it establishes the habit of choosing before summoning.
4. **Add a second and third lens that genuinely disagree with the first.** A debate between three
   voices that share a worldview produces consensus that means nothing. Pick for conflict.
5. **Run the full session protocol once.** Framing, roster, information gaps, four rounds,
   synthesis. See `references/session-protocol.md`.
6. **Add the real-advisor bridge** when you first have a decision you would take to an actual
   human. See `references/outputs-and-templates.md`.
7. **Add grounding** when you notice sessions arguing from memory instead of facts. See
   `references/grounding-and-portability.md`.
8. **Add the push-mode digest last**, if at all. See `references/push-mode-digest.md`. It is a
   companion, not the main event.

**Adding a lens means doing the source reading first.** This is the one rule that keeps the
whole thing from turning into a costume party. A persona invented from general knowledge alone
breaks the provenance contract, because you have no way to tell later which parts of it you can
rely on. If you want a lens for a thinker you have not properly read, either read them first or
write the file with every section marked as unverified general knowledge and treat it
accordingly.

## How a session runs, in short

The long form is in `references/session-protocol.md`. The shape:

P. **Plug check.** Read the manifest, state what is plugged in, name any fallback.
0. **Route.** Which lens or lenses does this question actually need, and which thinking tool, if
   a tool would answer it better than a debate? Usually one or two lenses, often one lens plus
   one tool.
1. **Frame.** Restate the question in two parts: the facts you were given, and the assumptions
   buried in how it was framed. Name any visible lean. Then **rank the outcomes**: what should be
   true at the end, in order, each with its why. Without a ranking the lenses argue toward
   different goals and the synthesis silently picks one for you.
2. **Confirm the roster.** State the chosen lenses and why, in one line each, before anyone
   speaks.
3. **Information gaps.** Each lens names the one thing that would actually move its answer. Close
   what a real source can close. Log the rest as explicit open gaps.
4. **Round 1, opening statements.** Each lens states its position without seeing the others.
5. **Round 2, rebuttal**, including the forced-dissent rule.
6. **Round 3, defence.**
7. **Round 4, synthesis**: recommendation, consensus, dissent, kill-criteria, next steps, blind
   spots, remaining open gaps. Before writing the recommendation, run a **probability pass** on
   the two or three consequences that actually carry it: how likely, and on what basis. A lens
   may argue around an honestly stated uncertainty. It may never assert a probability it made
   up.
8. **Stay in session.** The synthesis is not the end of the conversation.

## Reference files

| File | What it covers |
|---|---|
| [lens-file-format.md](references/lens-file-format.md) | The lens template, the provenance contract, what a good heuristic looks like |
| [router.md](references/router.md) | Mapping question types to lenses, single lens versus full debate |
| [session-protocol.md](references/session-protocol.md) | Framing, gaps, four rounds, forced dissent, synthesis, staying in session |
| [thinking-tools-integration.md](references/thinking-tools-integration.md) | Plugging structured decision tools into each lens's territory, the OOC/EMR overlay, weighting evidence |
| [grounding-and-portability.md](references/grounding-and-portability.md) | The pointer-file pattern, the fallback rule, keeping the folder safe to share |
| [push-mode-digest.md](references/push-mode-digest.md) | The optional watched-operator digest loop and its human gate |
| [outputs-and-templates.md](references/outputs-and-templates.md) | Real-advisor briefing template, decision journal entry template, how they map to output plugs |
| [../ports/README.md](../ports/README.md) | The plug contract, the Decision Record, and how to add your own plug |

## Related skills in this repository

- [`../decision-partner/`](../decision-partner/SKILL.md) is the OOC/EMR process applied to a
  single decision, in any domain, and its `references/` folder carries the two pieces this board's own reference files build on: the
  six named decision frameworks (including OOC/EMR itself) and a general-purpose decision
  journal. See `references/thinking-tools-integration.md` for how to map that OOC/EMR overlay,
  plus a pre-mortem and structured multi-perspective debate, onto your own lenses. A board
  session and a decision-partner run answer different questions: the board surfaces perspectives
  you would not have generated alone, the decision partner drives one decision to a resolution.
  They compose well in that order.

## Failure modes to design against

- Defaulting to the debate when a single named tool would answer it better: a pre-mortem before
  a commitment, a kill review on something already running, a MECE pass on a tangled option set.
  Say out loud which tool you are running (see `../ports/tools/README.md`).
- Running a debate without ranking the outcomes first. The lenses argue toward different goals
  and the synthesis picks a winner without saying so.
- Asserting a probability nobody has a basis for. An invented number survives the session and
  gets quoted back as evidence.
- Firing the whole board at a question one lens could answer alone. Cost goes up, the synthesis
  gets blurrier, and you learn less.
- A lens file with no blind-spot section. The synthesis round has nothing to correct for and
  quietly treats every voice as equally reliable everywhere.
- Letting the most developed lens win by default because its file has the most material in it.
- Quoting a lens's unverified general-knowledge section as if it were sourced.
- Inventing what a grounding source would have said instead of naming the gap.
- Treating easy agreement as a finding. See the forced-dissent rule.
- Building a database for the decision journal. Plain markdown files, one per decision, are the
  correct amount of infrastructure.
