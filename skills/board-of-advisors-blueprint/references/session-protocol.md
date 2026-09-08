# The Session Protocol

The full run, from a question to a synthesis you can act on. Steps 1 to 3 are what make the
debate argue from something real rather than from whatever happened to be in context. Skip them
only for a genuinely small single-lens question where nothing would be gained, and skip them
deliberately rather than by forgetting.

## Step 0: Route

Pick the lens or lenses. See `router.md`. State the choice and the reason in one line before
anything else happens.

## Step 1: Framing

Before loading any lens, restate the question back in two parts:

1. **The facts you were actually given.**
2. **The assumptions buried in how it was framed.**

Then name any visible lean or visible worry, plainly: "you are framing this as a choice between
A and B, which reads like you have already ruled out C," or "the way this is worded, you sound
more worried about the cost of being wrong than about the cost of being slow."

This is the board's own opening move, done once, before any worldview enters the room. It is not
a lens's job, because a lens will read the framing through its own priors and will not see the
frame as a frame. Most bad board sessions are traceable to a frame nobody examined: the lenses
argue brilliantly inside a question that should not have been asked in that shape.

## Step 2: Confirm the roster

For a full debate, state the three lenses you picked and why, one line each, and ask for
confirmation or a swap before round 1 starts. This is cheap and it catches the case where the
person asking knows a fourth voice is the one that actually matters here.

Skip for a single-lens answer. There is nothing to confirm.

## Step 3: Information gaps, before anyone votes

Each selected lens names, in one line, **the single piece of information it would most want
before giving a real judgment.** Not a wishlist. The one thing that would actually move its
answer.

Then, and only then, try to close those gaps:

- If a grounding source can answer it, query it and use the real result. See
  `grounding-and-portability.md`.
- If a real person can answer it in a minute, ask them.
- If neither, **log it as an explicit open gap.**

The rule that makes this work: **a lens may vote around a real gap, it may never vote as if the
gap were closed.** An honestly logged open gap is more useful than a confident answer built on an
invented fact, because the gap is actionable and the invention is not detectable later.

This step also does something the four rounds cannot: it frequently ends the session early. Half
the time the gaps make it obvious that the decision is not ready to be argued, it is waiting on
one fact somebody can go and get.

## Step 4: Round 1, opening statements

Each lens states its position from its own worldview and from the package assembled in steps 1 to
3, **without seeing the other lenses' positions.**

If all voices run in one context window, they can be nudged by whatever came earlier. That is the
known cost of the single-session shape, and it is why round 1 requires blind openings and why the
forced-dissent rule in round 2 exists. Running each lens as a separate isolated session buys real
independence at the cost of setup, runtime and fragility. Start single-session. Move to isolated
sessions only if you observe the contamination problem in practice, not preemptively.

## Step 5: Round 2, rebuttal

Each lens attacks the others' weakest points, from its own worldview, at full strength. No
strawmanning: argue each position as its strongest self, including the one you find least
convincing.

**The forced-dissent rule.** If two or more lenses land in near-total agreement after round 1, do
not let it stand. Explicitly assign one lens, or a neutral prosecutor pass, to argue the
strongest case against the emerging consensus before moving on.

Agreement that was never pressure-tested is not a finding. It is a blind spot shared by every
voice in the room, and the more comfortable it feels the more likely that is. Easy consensus is
usually a sign that the lenses are too similar, that the framing pre-decided the answer, or that
the question was not actually hard.

## Step 6: Round 3, defence

Each lens responds to the attacks and refines its position. Refinement counts: a lens that
concedes a point and narrows its claim has done its job better than one that repeats round 1
louder.

## Step 7: Round 4, synthesis

Produce all seven of these explicitly. A synthesis that is only a blended position is not a
synthesis, it is an average.

1. **Recommendation.** The most robust position, stated plainly, as an action.
2. **Consensus.** Where the lenses agree, especially where the agreement is surprising given how
   differently they think. This is usually the most reliable part of the output.
3. **Dissent.** Where they genuinely diverge, and under which lens's worldview the
   recommendation stops holding. Name the worldview, not just the disagreement.
4. **Kill-criteria.** The concrete conditions under which this recommendation should be
   abandoned, not merely revisited. Write them so you would recognise them if they happened.
5. **Next steps.** What is actually done with this, concretely, by whom, when.
6. **Blind spots.** Pulled from each lens file's own blind-spot section, plus anything the
   forced-dissent pass surfaced.
7. **Open information gaps.** Everything from step 3 that stayed open, restated so it is not
   quietly lost between the debate and the decision.

## Step 8: Stay in session

The synthesis is not the end of the conversation by default. Offer to keep going: press one
specific lens harder, react to the synthesis and get a lens's response to the reaction, or reopen
a round that went too fast. Every lens stays in character and bound by its own file for as long
as the session runs.

Close only when the person says they are done, or the conversation visibly moves on.

## Optional endings

- **A real-advisor briefing**, if the decision is headed to an actual human. See
  `outputs-and-templates.md`. Never hand over a simulated answer in a real person's name.
- **A decision journal entry**, for a call worth revisiting later. See `outputs-and-templates.md`.
  Plain markdown, one file per decision. Do not build a database for it.

## Quality bar for a run

- Every position argued as its strongest self, no lens favoured, no lens strawmanned.
- Every information gap either closed with a real source or logged as open, never invented.
- Blind spots named for every lens used.
- The synthesis says something more useful than "it depends."
- The most developed lens file did not win by default just because it had the most material.
