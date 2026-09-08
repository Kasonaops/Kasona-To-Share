# Plugging Structured Thinking Tools Into the Board

A lens supplies a worldview. It does not supply a method. Left alone, a lens produces opinion in
a recognisable voice, which is entertaining and thin. The board gets sharper when each lens
reaches for a real structured tool inside its own territory.

This repository already ships those tools. `skills/investment-decision-toolkit/` contains, in its
`references/` folder:

| Tool | What it does |
|---|---|
| `mece-structurer.md` | Sorts a messy problem into buckets that do not overlap and leave nothing out |
| `review-meeting-structure.md` | A repeatable agenda for a periodic review session |
| `devils-advocate.md` | A prosecutor pass: build the strongest case against the thing, including the exit case |
| `multi-persona-debate.md` | The four-round debate mechanic itself, in generic form |
| `temporal-triangulation.md` | Checks a thesis against its own past, present and future |
| `decision-journal.md` | Prepare, reflect and retrospective modes for writing decisions down |
| `decision-frameworks.md` | Six named frameworks, including inversion, one-way versus two-way doors, believability weighting, and Robbins' OOC/EMR |

`skills/decision-partner/` runs OOC/EMR end to end for a single personal decision. The toolkit's
language is investing language. Yours probably is not. The mapping below is the adaptation work.

## Mapping tools onto your own advisor domains

The pattern: for each lens, name the one or two tools that belong inside that lens's territory,
and write them into the lens file's section 1 as the method it reaches for. Then the debate is
not three voices asserting, it is three voices each running a real procedure and reporting the
result.

Worked mapping, using generic lens roles. Substitute your own.

| Lens role | Its natural tool | What that looks like in a session |
|---|---|---|
| Commercial or offer lens | Pre-mortem with risk triage | "Assume this offer flopped in six months. Which failures were fatal, which were noise?" |
| Iteration or validation lens | Riskiest-assumption test, plus MECE on the assumption set | "List every assumption this rests on, cleanly separated, then name the one that sinks the rest." |
| Craft or long-horizon lens | Temporal triangulation | "What did we believe about this a year ago, what changed, what has to be true in three years?" |
| Skeptic or prosecutor seat | Devil's advocate, exit case | "Build the case for not doing this, and for reversing it if we already did." |
| Structural or ops lens | One-way versus two-way doors | "Is this reversible? If yes, why are we deliberating instead of trying it?" |
| Buyer or customer seat | Inversion | "What would make me, the buyer, refuse this outright?" |

Two things this mapping is not. It is not an instruction to run every tool in every session, that
is the same over-firing problem the router exists to prevent. And it is not a way to make lenses
interchangeable: a lens keeps its worldview, the tool just gives it a procedure to run inside it.

## Risk triage in a pre-mortem

The pre-mortem in the toolkit sorts what came out of it into three kinds of risk, and the sorting
is the whole value:

- **Tiger**: genuinely fatal. It kills the thing. Design against it or do not proceed.
- **Paper tiger**: loud, frightening, and survivable. It gets the most airtime in most rooms and
  deserves the least.
- **Elephant**: large, obvious, and unmentioned. The thing everyone can see and nobody names.

Boards are very good at generating paper tigers, because paper tigers are the risks that are easy
to articulate. Force the triage explicitly, and force the elephant question out loud: "what is
the thing we are all not saying."

## Finding one: lay OOC/EMR over the session

Robbins' OOC/EMR (Outcome, Options, Consequences, then Evaluate, Mitigate, Resolve) is documented
in `skills/investment-decision-toolkit/references/decision-frameworks.md` and driven end to end in
`skills/decision-partner/`. Laying it over a board session exposes two gaps that almost every
advisor board has, including well-run ones.

**Gap 1: the board debates options and consequences, but never ranks the decider's outcomes
first.** A session opens with "should I do A or B." Those are options. Nobody asked what
should be true at the end and in what order of priority. So the lenses argue A versus B against
their own implicit goals rather than yours, the synthesis optimises for something nobody chose,
and the recommendation feels subtly wrong without anyone being able to say why. **Add an outcome
pass before round 1**: write down at least three outcomes you want, rank them, and state the
number one. Each outcome carries its own reason. "More revenue" is not an outcome, "being able to
stop taking client work within two years" is. If two outcomes are genuinely tied for first, that
tension is the real decision and the board should be arguing about that instead.

**Gap 2: consequences get argued without probabilities.** Lenses say "this could damage trust
with existing customers" and "this could unlock a new segment," and both sit in the synthesis
with equal visual weight. They are not equally likely and nobody said so. **Add a probability
pass in round 3 or at synthesis time**: for each consequence a lens raised, attach a rough
probability and mark it as an estimate. Two rules keep this honest. Never invent a precise-looking
number, a stated "maybe one in four, and that is a guess" is worth more than a fabricated 27%.
And record the estimate, so that when you revisit the decision you can see whether the board was
systematically too worried or not worried enough.

Both passes are cheap. Together they are the difference between a debate that entertains and a
decision process that converges.

## Finding two: weighting evidence from a watched operator

When you bring evidence from a real operator into a session ("someone working on a near-identical
problem shipped this six months ago"), the immediate question is how much that should count on
**this specific question**. Not in general. On this one.

Three factors, stated as a judgment, in one line:

1. **Domain proximity.** How close is their problem to your problem, actually? Same technical
   problem, same buyer, same business model, or just the same industry word?
2. **Shipped versus said.** Did they build it, run it, and live with the consequences, or did they
   describe it in a talk? A decision they made with their own money and calendar behind it counts
   very differently from a recommendation they gave to an audience.
3. **Recency.** How long ago, and has the ground moved since? In fast-moving areas an
   eighteen-month-old decision is a historical note, not evidence.

Then state the weighting plainly in the session, in the form: "close domain, they actually
shipped it, but it is fifteen months old, so I am treating this as strong evidence about the
mechanism and weak evidence about whether it still works." That sentence is the deliverable.

**Never turn this into an invented score.** A believability number attached to a person implies a
resolved track record behind it, and you almost certainly do not have one. Assigning 0.7 to
somebody creates a false precision that then propagates silently through every session it touches.
An honest stated judgment can be argued with. A number cannot, it just gets deferred to.

This is a deliberately light version of Dalio's believability weighting as described in
`skills/investment-decision-toolkit/references/decision-frameworks.md`. That reference sets out
what a real implementation would require, a stable source identity plus a track record of that
source's prior calls resolved against outcomes, and lists the honest open questions, chiefly what
counts as being right, whether the weight is one number or one per domain, and how a track record
gets built when most commentary never makes a falsifiable claim in the first place. Read it before
you are tempted to build a scoring system. In a board session you need the judgment, not the
system.

## Where the debate mechanic itself came from

The four-round structure in `session-protocol.md` is the same mechanic as
`skills/investment-decision-toolkit/references/multi-persona-debate.md`, generalised from
investment theses to strategic and personal decisions. If you want the mechanic without the whole
board, that reference is the shorter path.
