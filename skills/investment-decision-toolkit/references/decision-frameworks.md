# Decision Frameworks: Canonical Reference

A single, canonical reference for six named decision-theory frameworks that recur across
investing literature and across the rest of this toolkit. Some of these are already built
into the other reference files without ever being named explicitly; some are just useful
lenses worth knowing about even if you haven't built tooling around them yet. This file names
each one once, states the exact question it forces, shows what a bad application of it looks
like, and suggests generic attachment points, so you don't have to re-derive a framework that
already has a home, and so you know exactly what a careless application of it looks like
before you ship one.

This file is a reference, not a pipeline step. The other tools in this toolkit cite it; it
doesn't call them.

## 1. Munger: Inversion (and the latticework)

**What it asks, in one line:** instead of asking how to succeed, define failure first and work
backward from it. "Invert, always invert."

**The question to answer:** "It is {horizon} from now and this position, or this decision, is
a disaster. What specifically happened?"

**What a bad application looks like:** generating vague, unfalsifiable causes of failure ("the
market could drop," "something goes wrong") instead of specific, evidenced ones tied to this
exact company and this exact decision. Inversion done badly produces the same comfortable
hand-waving it was meant to prevent.

**Where it attaches:** the natural home is a pre-buy pre-mortem step, exactly this move (see
[devils-advocate.md](devils-advocate.md) Mode B), which already cites Gary Klein's prospective
hindsight framing. Munger's inversion and Klein's pre-mortem are the same operation, reached
from two different traditions (decision theory vs. behavioral psychology), not two different
frameworks.

**On the latticework half:** Munger's broader point, cross-disciplinary mental-model fluency,
isn't a per-decision checklist item, it's a reasoning style rather than a question with a fast
answer. It's best treated as something applied silently in the background of an analysis
rather than surfaced as its own UI step. Worth noting so it doesn't get mistaken for a gap
that needs closing.

## 2. Bezos: One-way vs. two-way doors

> **A scoping note worth stating up front:** this framework fits better as a lens for
> analyzing *someone else's* decision (an executive's public commitment, a company's
> strategic announcement) than for labeling your own trades. Position sizing and buy/sell
> timing already have their own tools (position-size bands, the 15-reasons-to-sell checklist
> in [devils-advocate.md](devils-advocate.md)). One-way/two-way doors is most useful applied
> to decisions you're evaluating from the outside, not decisions you're making about your own
> portfolio.

**What it asks, in one line:** is the decision under review reversible at low cost (a two-way
door), or effectively permanent (a one-way door)? Two-way doors deserve speed; one-way doors
deserve deliberate slowdown before conviction forms.

**The question to answer:** "How hard would it be for this company or this executive to walk
this back?"

**What a bad application looks like:** treating a cheap, hedgeable statement of intent (an
earnings-call aspiration, a "we're exploring options") as if it were a binding strategic
commitment, or the reverse, treating an actual structural commitment (a signed acquisition, a
spin-off filing, a plant broken ground, a resignation announced) as reversible just because
the person saying it could, in principle, change their mind. The framework fails the moment
door-type is asserted rather than evidenced.

**Where it attaches:** a natural home is an executive-quality or management-assessment
process, if you run one: it already asks whether a CEO's word matches outcomes, and door-type
is a missing lens on top of that, distinguishing a broken promise on something reversible from
a broken promise on something that was never walkable back to begin with. Any place you record
diligence questions about an executive's public statements is a reasonable place to add "was
this a one-way or two-way door" as an explicit prompt.

## 3. Dalio: Believability-weighted decision making

**What it asks, in one line:** weight an opinion by the credibility of the person or source
giving it, their track record and relevant expertise in the specific domain of the claim, not
by their confidence, seniority, or how recently or loudly they said it.

**The question to answer:** "Who said this, what is their track record specifically in this
domain, and does that track record earn the weight I'm about to give their view?"

**What it would need to actually work:** two things most setups don't have in one place:

1. **A source identity**: a stable record of *who* said a given claim (a named fund manager, a
   named commentator, a named analyst, a named executive), not just the claim itself.
2. **That source's track record**: a history of that source's prior calls, resolved against
   what actually happened, in the same domain as the current claim.

**Open questions, worth answering honestly before building any scoring system:**

- What counts as "being right"? A specific, falsifiable price or event call? A directional
  stance? Over what horizon, measured against what benchmark?
- Is believability one number per source, or does it need to be per-domain (a macro call and a
  single-stock call from the same person may deserve very different weights)?
- Most tracked commentary never states a timestamped, falsifiable claim in the first place.
  How would a track record even get built without asking sources to change what they publish?
- Where would a believability weight actually change a decision: surfaced to the user as a
  number, or used silently to filter which signals reach the user at all?

**Where it attaches:** if built, this would sit alongside whatever signal-tracking process you
already run (13F monitoring, analyst-note ingestion, commentator tracking), as the layer that
tracks those sources against outcomes over time. It's also the honest answer to the "network
authority" Elephant that a pre-mortem exercise surfaces (see
[devils-advocate.md](devils-advocate.md) §B.3): *"Are we buying because we did the work, or
because a source we respect likes it and nobody wants to contradict them?"* Believability
weighting is the tool that would let that Elephant question be answered with a number instead
of a gut check, but building it is out of scope until the open questions above are resolved.

## 4. Duke: Decision quality vs. outcome quality ("Resulting")

> **This is arguably the most important framework here.** Most review processes can tell you
> what you decided and what happened to the position afterward. Almost none can tell you
> whether you had a good process or a good draw, which is the single most important thing a
> review discipline is supposed to answer.

**What it asks, in one line:** a decision's quality is a property of the reasoning and
information available *at the time it was made*, a separate question from whether the outcome
was good, because a sound decision can have a bad draw and a reckless one can get lucky. Annie
Duke calls judging a decision by its outcome alone "resulting."

**The two questions to answer, kept explicitly separate:**

1. "Given what I knew when I decided, was this a sound decision?" (process, judged as of the
   decision date)
2. "Separately: how did it actually turn out?" (outcome, judged now)

**What a bad application looks like:** answering only the second question and calling it a
review. Praising a position that worked out despite a thin, evidence-free thesis ("it worked,
so it must have been right"), or punishing a well-reasoned, well-evidenced position that lost
to a genuinely unforeseeable event. Either mistake teaches the wrong lesson going forward, and
is exactly what "resulting" produces.

**Where it attaches:** the retrospective mode of a decision journal (see
[decision-journal.md](decision-journal.md)) is the closest natural home. It already compares
original assumptions to actual outcomes, but the useful addition is separating a
decision-quality verdict from an outcome-quality verdict as two distinct, independently
answered questions, scored apart rather than just compared. Any quarterly or periodic review
process you run should ask the process-vs-outcome question directly, as its own field, filled
in independently of (and ideally before) the outcome field.

## 5. Naval: Specific knowledge, leverage, and accountability

**What it asks, in one line:** as a filter on *which* bets to take (not how big to size one
already chosen, and not whether to hold or sell one already owned): do you have specific
knowledge here that can't be easily copied or taught, is the position leveraged so being right
pays off disproportionately, and are you personally accountable for the call, your name and
capital on it, not a committee's? Separately: is this an iterated game with this company or
market, where staying in and compounding matters, or a one-off bet?

**The question to answer:** "Do I actually have an edge here that isn't just access to the
same information everyone else has, does being right here pay off disproportionately, and
whose name is on this decision?"

**What a bad application looks like:** mistaking familiarity or enthusiasm for specific
knowledge, buying a stock because you use and like the product, with no actual edge on the
business itself. On the long-game half: treating a long-term compounding position as a one-off
trade and exiting on a single quarter's noise, which trades away the compounding advantage of
staying in an iterated game for a one-off "win."

**Where it attaches:** the nearest existing kin is a "circle of competence" gate: can you
explain the business and how it makes money in two plain sentences, without jargon? That
question is one proxy for specific knowledge, not the whole test; it checks understanding, not
edge, leverage, or accountability. A management-assessment process that scores a company's own
skin-in-the-game assesses accountability from the company's side, a related but distinct
question from whether the investor has accountability. If you screen new candidates before
deeper analysis, this filter fits best as a pre-screen step there, run before the deeper
research process opens up.

## 6. Robbins: OOC/EMR (Outcome, Options, Consequences / Evaluate, Mitigate, Resolve)

> **Attribution note:** this is Tony Robbins' six-step decision process, usually written
> OOC/EMR.

**What it asks, in one line:** don't start a decision from the emotion it produces (anxiety,
fear, excitement, passion, any of them can lead you astray). Start from the outcome you want,
and walk six written steps in order until the decision resolves itself.

**The six steps, in order:**

| # | Step | The question it forces | Non-negotiable |
|---|------|------------------------|----------------|
| 1 | **O: Outcome** | "What do I actually want here, and why?" | Written down, never held in the head. Outcomes are ranked, and each carries its own "why." You must be able to name number one. |
| 2 | **O: Options** | "What are all the paths, including the ones I dislike?" | No pretending there's only one option, that's the story that produces the stress. List them all, ugly ones included. |
| 3 | **C: Consequences** | "For each option, what's the upside and what's the downside?" | Both sides for every option, to the best of current knowledge, stated as consequences, not feelings. |
| 4 | **E: Evaluate** | "How probable is each of those consequences?" | Without probability the list is theatre. A catastrophic downside at near-zero probability is not a reason to freeze, and a spectacular upside at near-zero probability is not a reason to act. Extremes on both ends are what hijack a decision. |
| 5 | **M: Mitigate** | "Can I combine parts of two options, and can I cap the downsides?" | This is where the creative work happens, and it only works because steps 1 to 4 took the decision out of the head and put it on paper, out of fear and into evidence. Almost always there's a mitigation available. |
| 6 | **R: Resolve** | "Decide, and act on it in time." | The step skipped most often, and the one that carries the value. A resolved decision made late is worth less than the same decision made on time. |

**The question to answer, all at once:** "What's my ranked number-one outcome here, what are
my real options, what are the weighted consequences of each, and what have I done to cap the
downside before I commit?"

**What a bad application looks like:**

- Running it entirely in your head. The framework explicitly requires writing, because you
  can't hold ranked outcomes, options, both consequence sides, and probabilities all at once.
- Skipping the ranking in step 1: an unranked outcome list makes every later step
  unresolvable, since two options serving different outcomes can't be meaningfully compared.
- Presenting a straw-man option set (one real path plus two obviously bad ones), so step 2
  becomes a justification of a decision already made.
- Listing consequences without step 4, the classic failure mode this framework is designed to
  catch: an emotionally vivid tail risk gets treated as the base case because nobody attached
  a probability to it.
- Stopping at step 5. Mitigation feels productive and can be used indefinitely as a reason not
  to resolve.

**How it differs from the other five frameworks here:** every other framework in this file is
a *lens* on one aspect of a decision (invert it, is it reversible, whose opinion counts, was it
process or luck, do I have edge). OOC/EMR is the *container* those lenses sit in: an end-to-end
sequence from "what do I want" to "decided." That's why it earns a place here rather than
replacing anything, and also why it shouldn't be pushed into the position-review pipeline
described in the main [SKILL.md](../SKILL.md): that pipeline (categorize positions, structured
review meeting, adversarial analysis, decision journal) is already the investing-specific
instance of the same shape. OOC/EMR is the general form, and it's the right tool for decisions
the pipeline doesn't cover: business, product, pricing, personal, or allocation-level choices.

**Where it attaches:**

- **The decision journal is the primary home** (see [decision-journal.md](decision-journal.md)):
  its "prepare" mode already collects assumptions and bias, and its rejected-options table
  with categories and revisit triggers is exactly the step-2 output of OOC/EMR that would
  otherwise never get persisted anywhere.
- **The Duke framework (§4 above) is the natural pair**: steps 3 and 4 (consequences plus
  probabilities, written before the outcome is known) are exactly the record you need later
  to judge decision quality apart from outcome quality. Without them, a retrospective can only
  do "resulting."
- **A pre-mortem covers step 5 for buy decisions** (see [devils-advocate.md](devils-advocate.md)
  Mode B): the Tiger/Paper Tiger/Elephant triage is a mitigation pass, and the Paper-Tiger
  bucket is step 4 (a probability judgment) under a different name. A pre-mortem that never
  names a mitigation has stopped at step 3.
- **A multi-persona debate is a step-2 generator** (see
  [multi-persona-debate.md](multi-persona-debate.md)): personas with opposing philosophies are
  a reliable way to produce an option set that isn't a straw man.
- **Non-investing use:** OOC/EMR is the right structural container for personal and career
  decisions too, run outside the investing-specific pipeline. See
  `skills/decision-partner/SKILL.md` in this repository for a full walkthrough adapted to that
  domain.

## References

| Framework | Source |
|---|---|
| Inversion / latticework | Charlie Munger, "invert, always invert"; also Farnam Street's "Core Mental Models" |
| Prospective hindsight (a paired concept, not the same framework) | Gary Klein's pre-mortem method |
| One-way vs. two-way doors | Jeff Bezos, 1997 Amazon shareholder letter |
| Believability-weighted decision making | Ray Dalio, *Principles* |
| Decision quality vs. outcome quality ("Resulting") | Annie Duke, *Thinking in Bets* |
| Specific knowledge, leverage, accountability | Naval Ravikant, "How to Get Rich" |
| OOC/EMR (Outcome, Options, Consequences / Evaluate, Mitigate, Resolve) | Tony Robbins |
