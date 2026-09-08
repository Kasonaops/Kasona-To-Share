# Decision Journal

Acts as a structured reflection partner for decisions. Helps identify assumptions, surface
blind spots, and systematically capture insight for long-term learning. Produces decision
journal entries meant to be read again later, not just written once and forgotten.

Pair this with whatever trade log or decision record you already keep. The journal entry is
the reasoning behind an entry in that log, not a replacement for it.

## Input

- **Mode**: prepare a decision / reflect on a decision / retrospective review (required).
- **The decision or situation** (required).
- **Options**, if known (optional).
- **Prior thinking and assumptions** (optional).
- **Timeframe** for the decision (optional).
- **Stakeholders** affected (optional).
- **Prior journal entries** on the same topic (optional).

## Output

Format: a structured journal entry, roughly 300 to 600 words.

### Structure for "Prepare"

1. **Context**: what's the situation?
2. **Options**: what alternatives exist?
3. **Assumptions**: what assumptions underlie each option?
4. **Assumption check**: what if the opposite were true?
5. **Missing information**: what don't I know yet?
6. **Decision criteria**: how will I measure success?
7. **Gut feeling vs. analysis**: do they agree?
8. **Recommendation**: a leaning, with reasoning.
9. **Rejected options**: every option not chosen, with the reason it was rejected.
10. **Revisit triggers**: what would have to happen for a rejected option to come back on the
    table?

### Structure for "Retrospective"

1. **Original decision and assumptions.**
2. **Actual outcome.**
3. **Delta**: what turned out differently than expected?
4. **Rejected options in hindsight**: would one of them have worked better, and was that
   knowable at the time the decision was made?
5. **Decision quality vs. outcome quality**: was the decision sound given what was known at
   the time, independent of how it actually turned out? (See
   [decision-frameworks.md](decision-frameworks.md), Duke.)
6. **Lessons**: what did I learn?
7. **Patterns**: are there recurring themes across my decisions?

## Context and constraints

- Domain: decision theory, cognitive bias, reflection methods, journaling.
- Constraint: this tool does not make the decision for you, it only offers structured
  reflection. For legal or medical topics, defer to a qualified professional.

## Process

### Step 1: Clarify mode and context

Identify what kind of reflection this is and understand the starting situation.

- In "Prepare" mode: make every option and assumption explicit, including the ones that feel
  uncomfortable or unrealistic.
- In "Reflect" mode: separate the emotional layer from the rational one.
- In "Retrospective" mode: compare the original assumptions against what actually happened.

### Step 2: Surface and challenge assumptions

Make implicit assumptions visible and question them.

- For every assumption, ask: "what if the opposite is true?"
- Name cognitive biases where relevant (confirmation bias, sunk cost, anchoring, and so on).
- Do not confirm assumptions instead of challenging them, that defeats the point of this step.

### Step 3: Identify missing information

What doesn't the decision-maker know yet, and how much does it matter?

- Distinguish "nice to know" from "must know before deciding."
- Suggest a pragmatic way to get the missing information, not just a note that it's missing.

### Step 4: Record rejected options

Don't just log the option you chose, log every option you rejected, with the reason.

> **Why this matters:** this is exactly what a retrospective needs most and what tends to get
> lost in practice. Without the rejected options, a review can only ask whether the outcome
> was good ("resulting," see [decision-frameworks.md](decision-frameworks.md)), not whether
> the choice among the paths available at the time was the right one. This step is also the
> "Options" output of the OOC/EMR framework (see
> [decision-frameworks.md](decision-frameworks.md)) that would otherwise never get persisted
> anywhere.

Rules for this step:

- Give every rejected option exactly one rejection category:
  **(a) goal conflict** (doesn't serve outcome #1), **(b) consequence** (downside too large,
  even after mitigation), **(c) probability** (upside was too unlikely), **(d) not available**
  (a precondition was missing), **(e) deliberately deferred** (option stays open, just not
  now).
- Every rejected option needs a **revisit trigger**: an observable event that would put it
  back on the table. Category (e) without a trigger isn't a deferral, it's an unspoken
  rejection dressed up as one.
- Mark any option that was never seriously evaluated as such, rather than recording it as
  "considered and rejected."
- Do not build a straw-man list: one real option plus two obviously bad ones, so the decision
  already made looks justified.

### Step 5: Structure the journal entry

Bring everything into a clear, reviewable entry.

- Record a date and a review timeframe.
- State expected outcomes concretely and measurably.
- Document the gut feeling explicitly (it's often illuminating in hindsight).
- The rejected-options table is a mandatory part of every entry:

| Rejected Option | Category (a-e) | Reason in one sentence | Revisit Trigger |
|---|---|---|---|
| ... | ... | ... | ... |

## Definition of done

- [ ] Mode clearly identified (prepare / reflect / retrospective).
- [ ] All assumptions explicitly named.
- [ ] At least two assumptions actively challenged.
- [ ] Cognitive biases identified where relevant.
- [ ] Missing information named.
- [ ] Every rejected option recorded with category, reason, and revisit trigger.
- [ ] Decision criteria defined.
- [ ] Gut feeling vs. analysis comparison done.
- [ ] A review date is set for the retrospective.

## Retrospective questions worth asking every time

Beyond the structure above, two questions from Annie Duke's decision-quality framing are worth
asking explicitly, and separately, at every retrospective (see
[decision-frameworks.md](decision-frameworks.md)):

1. Given what was known at the time, was this a sound decision? (A process question, judged as
   of the decision date, not today.)
2. Separately: how did it actually turn out? (An outcome question, judged now, and partly a
   function of luck.)

The point of keeping these separate is to avoid "resulting": praising a thin, poorly evidenced
decision because it happened to work out, or punishing a well-reasoned one because it lost to
something genuinely unforeseeable. Either mistake teaches the wrong lesson for next time.
