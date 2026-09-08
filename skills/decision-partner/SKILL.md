---
name: decision-partner
description: A structured decision partner for personal life and career decisions, built on Robbins' OOC/EMR (Outcome, Options, Consequences / Evaluate, Mitigate, Resolve) as the underlying process, with reusable thinking tools from an investment-decision toolkit adapted and plugged in where they fit. Use when someone wants to think through a non-investing decision: a job change, quitting, accepting or declining an offer, moving, starting a course of study, going self-employed, a sabbatical, a relationship or living-situation call, "should I do X or Y," "I'm stuck on a decision," "help me think this through," or "I keep going in circles." Not for portfolio or position decisions, those run through the investing pipeline (see the investment-decision-toolkit skill in this repository).
metadata:
  type: workflow
---

# Decision Partner

A process for personal decisions that don't have one obviously correct answer. It uses
Robbins' OOC/EMR as the container, and plugs in existing thinking tools wherever real
reasoning work is needed, rather than inventing new methods that would just be personal-life
paraphrases of tools that already exist elsewhere.

**Why this skill exists as its own file, rather than folding into an existing one:** a
reasonable rule for when a new method deserves its own file is that it should overlap less
than half with something that already exists. This skill doesn't invent a method. It's an
**orchestration** for a different domain: the underlying tools are written in investing
language (positions, tickers, portfolios), and that language doesn't automatically carry over
to a life decision. The OOC/EMR framework itself (see
`skills/investment-decision-toolkit/references/decision-frameworks.md` in this repository) is
explicitly the right tool for non-investing decisions. This skill is the adaptation layer that
makes that concrete.

**Relationship to the investing decision journal:** the decision journal reference in the
investing toolkit remains the place for straightforward journaling across three modes
(prepare, reflect, retrospective). This skill doesn't replace it, it provides a stricter
process for the "prepare" mode specifically, adapted to personal decisions, and writes a
journal entry at the end in the same spirit. If you just want to reflect or look back on a
past decision without the full six-step process, go straight to that journal format.

---

## 0. Ground rules that apply to all six steps

| Rule | Why |
|---|---|
| Everything gets **written down**, nothing stays in your head | A ranked outcome, every option, both sides of every consequence, and a probability for each: none of that fits in working memory at once. Done in your head, the process becomes theater. |
| Start from the **outcome**, not the feeling | Fear, excitement, enthusiasm, pressure: any of them can mislead you. The feeling gets recorded (Step 1), but it doesn't steer. |
| This process **does not decide for you** | Same constraint as the investing decision journal: no decision is handed to you, only structured reflection. You decide at the end; Step 6 just forces you to actually do it. |
| No invented numbers | If a probability is only a guess, mark it as a guess. See §3 for what does and doesn't translate from investing language. |

---

## 1. Step O: Outcome, what do I actually want

**The question:** what should be true at the end, and why?

**Rules:**
- Write down at least three outcomes, then **rank** them. Without a ranking, Step 4 can't
  resolve, because two options serving different goals aren't comparable.
- Every outcome carries its own **why**. "More money" isn't an outcome; "being able to quit
  without financial pressure in two years" is.
- You must be able to name number one. If two goals are fighting for first place, that
  tension is the actual conflict at the heart of the decision, and it needs to be named before
  moving on.
- Record your gut feeling here separately, not disguised as a goal (see the investing decision
  journal: document the gut feeling explicitly, it's often illuminating in hindsight).

**Avoid:** stating something that's actually an option as if it were an outcome ("take the job
in a new city" is an option, not an outcome).

---

## 2. Step O: Options, every path, including the uncomfortable ones

**The question:** what paths actually exist, including the ones I don't like?

**Tool 1, option generator: multi-persona debate.**
Three to four personas with genuinely opposing convictions debate the situation across four
rounds (opening, rebuttal, defense, common ground) and produce an option space that isn't a
straw man. For personal decisions, build the personas from the life situation itself rather
than from investing philosophies, for example: the security-oriented voice, the
keep-options-open voice, the all-in voice.

> **A deliberate deviation from the source tool:** the multi-persona debate format in the
> investing toolkit optionally suggests a persona with live market or chart-data access for
> investing topics. That requirement drops entirely here, it doesn't make sense outside
> investing. Everything else about the format (four rounds, fair and strong representation of
> every position, synthesis, naming blind spots) still applies unchanged.

**Tool 2, sorting: MECE structuring.**
Sort the raw option space from the debate into mutually exclusive, collectively exhaustive
categories. Mutually exclusive means every option belongs, at its level, to exactly one
category. Collectively exhaustive means the categories cover the whole field, including the
category "do nothing, let the status quo continue," which is almost always a real option in a
personal decision and almost always forgotten. Every category should carry criteria and an
edge-case rule, same as in the source MECE method.

**Optional, if the decision has a recurring pattern: temporal triangulation.**
Three time perspectives on the same question. For a life decision, for example: how did I
handle this kind of decision ten years ago, how am I handling it now, how would I handle it
with the options available ten years from now? The value sits in the **constants** across all
three periods, which here means your own recurring patterns, and in the question of which
"future solution" is already possible today but is being blocked by old thinking.

**Rules:**
- At least four options, at least one of which feels genuinely uncomfortable.
- The status quo is always a listed option, with its own consequences in Step 3.
- Combinations (part-time, a trial period, starting something in parallel) are their own
  options, not footnotes to another option.

**Avoid:** one real option plus two obviously bad ones, so Step 2 becomes a justification for
a decision already made.

---

## 3. Step C: Consequences, both sides for every option

**The question:** what's the upside of each option, and what's the downside?

**Rules:**
- Both sides for **every** option, including your favorite one and including the status quo.
- Consequences, not feelings. "I'd feel guilty" is a feeling; "I'd be telling my team four
  weeks before launch that I'm leaving" is a consequence, and the feeling follows from it.
- Consequences for other people affected belong here too (see the investing decision journal's
  stakeholder input field).
- Mark missing information here, and split it into "nice to know" and "must know before
  deciding," including a pragmatic way to actually get it.

**Avoid:** collecting consequences and jumping straight to a decision. Without Step 4, the
list is close to worthless, because an emotionally vivid risk with no attached probability
gets treated as the default case.

---

## 4. Step E: Evaluate, probabilities and decision quality

**Question 1:** how probable is each consequence?

**Rules:**
- **Every** consequence from Step 3 gets an explicit probability. Rough bands are fine (very
  unlikely, unlikely, uncertain, likely, very likely), or percentages, but nothing stays blank.
- Every probability carries a short **reason**: what it's based on: experience, a documented
  observation, something someone directly involved said, or pure guesswork. Pure guesswork
  gets labeled as such.
- Check both extremes: a catastrophic consequence at near-zero probability is not a reason to
  freeze, and a spectacular upside at near-zero probability is not a reason to act. These two
  extremes are exactly what hijacks a decision.

**Question 2 (Annie Duke, decision quality vs. outcome quality):** these are two separate
questions, and they get answered separately.

| Question | Answerable when | What it evaluates |
|---|---|---|
| Was this a good decision? | **Now**, before the outcome | The process and the information available at decision time |
| Did it turn out well? | **Later**, at the review | The outcome, which also depends on luck |

- Write the decision-quality assessment **now**, independent of the outcome and before it's
  known. This entry is exactly what a later review needs to avoid "resulting": judging the
  decision purely by how it turned out.
- Record specifically: what you knew at the time, what you couldn't have known, and what makes
  you consider the process sound.

**Avoid:** at the later review, punishing a well-reasoned decision because it turned out badly,
or celebrating a thin one because it happened to work out. Both train the wrong lesson.

---

## 5. Step M: Mitigate, triage the risks and cap the downside

**The question:** can I combine parts of different options, and can I cap the downsides?

**Tool: the Tiger / Paper Tiger / Elephant triage**, adapted from a pre-mortem exercise. Start
with the thought experiment, in its personal-decision form:

> "It is {horizon} after the decision. It's turned into a disaster. Why?"

Not "what could go wrong," but "it **did** go wrong." This is Gary Klein's prospective
hindsight, the same underlying move as Munger's inversion. Pick a horizon at which the
decision can realistically be judged: for a job change, something like 12 to 18 months; for a
move or a course of study, more like 24 to 36.

Every cause raised sorts into exactly one bucket:

| Bucket | Definition | Action | Early warning signal |
|---|---|---|---|
| Tiger | Evidenced, plausible, checkable | Mitigate, or blocking if no mitigation exists | A concrete, observable signal |
| Paper Tiger | Fear-driven, no evidence, unfalsifiable | Park it, don't spend mitigation effort on it | None, unfalsifiable by definition |
| Elephant | A real concern nobody has voiced | Put it on the table, plus a bias check | A signal that the concern is materializing |

**The Elephant is the most important bucket in a personal decision.** In the investing version
of this triage, the Elephant is usually "are we buying because we did the work, or because an
authority in our network likes it?" Translated to a personal decision, it's often: what would
I decide if nobody whose opinion matters to me ever found out? If you can't name your own
Elephant, borrow one of the personas from Step 2 and give it the explicit job of saying it out
loud.

**The real work of this step:**
- Can I combine parts of two options instead of rejecting one entirely?
- Can I cap the worst case in advance: a deadline, a fallback option, a trial period, a
  financial buffer, a written agreement?
- What's the smallest testable version of this decision I could try before committing to the
  full version?

**Verdict, matching the source tool's pre-mortem structure:** cleared, cleared with
conditions, or rejected (at least one blocking Tiger with no mitigation).

**Avoid:** stopping at this step. Mitigating feels productive and can be used indefinitely as a
reason not to decide.

---

## 6. Step R: Resolve, decide and set a date

**The question:** what's the decision, and by when do I act?

**Rules, all three are mandatory:**

1. **A decision date.** The decision gets made on a specific date, and that date is in the
   entry. A decision made correctly but too late is worth less than the same decision made on
   time.
2. **An action step with a deadline.** What happens concretely, by when, who gets told.
3. **A review date.** When will you check whether the assumptions held (see the investing
   decision journal: record a date and a review timeframe)? At the review date, run the
   retrospective mode of the decision journal, and specifically in this order: read the
   decision-quality note you wrote at the time, first, then evaluate the outcome.

**Avoid:** "I'll let it sit" without a date. This is the step skipped most often, and the one
that carries the value.

---

## 7. Bias check for personal decisions

Adapted from the exit-review bias checklist and the assumption-challenging step in the
investing decision journal. Before the verdict in Step 6, answer every item explicitly, don't
skim past it.

| Bias | The forcing question | How it shows up in a personal decision |
|---|---|---|
| **Sunk cost** | Am I sticking with this path because I've already invested so much? | Years in training, in a job, in a city. The time already spent is gone either way; it shouldn't get a vote on the future. |
| **Confirmation bias** | Am I only looking for evidence that supports my leaning? | Asking exactly the people you already know will agree with you. |
| **Identity bias** | Am I rejecting an option because choosing it would mean I'm not who I think I am? | "I'm not an employee," "I'm not someone who gives up," "that's not who I am." That's a statement about self-image, not about the option itself. |
| **Social desirability / status anxiety** | How would I decide if nobody found out? | The title, what family or former colleagues would think, how it would sound told as a story. Directly related to the Elephant in Step 5. |
| **Anchoring on a single number** | Is my whole evaluation hanging on one number? | Salary, a grade, an age, a year. A number that happens to be measurable crowds out everything that isn't. |
| **Loss aversion** | Am I weighting what I'd give up more heavily than an equally sized thing I'd gain? | A safe, known state gets defended against an equally valuable uncertain one, purely because one is a loss and the other a gain. |
| **Status quo bias** | Am I staying just because staying doesn't require action? | Doing nothing doesn't feel like a decision, but it is one. That's why the status quo is listed as its own option with its own consequences in Step 2. |

---

## 8. Translation table: investing term to personal decision

The source tools are written in investing language. What's in the table below carries over
cleanly. What's in §8.2 doesn't carry over, and isn't replaced with an invented substitute,
it's simply left out.

### 8.1 What translates

| Investing term | Personal decision equivalent |
|---|---|
| Position | A life-path option: a concrete path you'd commit time and energy to |
| Thesis | An assumption about your own future, e.g. "this role gets me toward X in two years" |
| Thesis drift | The assumption that got you here no longer holds, and you haven't said so out loud yet |
| Concentration risk | Identity concentration: everything riding on one path, one employer, one city, one relationship |
| Position sizing | How big a first step to take: a trial period instead of jumping all the way in |
| Opportunity cost | What you're not doing while you do this, and what that costs over time |
| Sunk cost | Sunk cost, unchanged. Years invested are as weak an argument as money invested |
| Pre-mortem, prospective hindsight | It's a year later and it went wrong, why |
| Tiger, Paper Tiger, Elephant | An evidenced risk, a fear with no evidence, an unspoken concern |
| Early warning signal | An observable event that tells you the assumption is starting to fail |
| Review date | Review date, unchanged |
| Exit trigger, "what would make you sell" | What would have to happen for me to revisit this decision |
| Circle of competence | Can I explain what I'm getting into, in two plain sentences, without jargon |
| The sleep test | Does this option cost me sleep on an ongoing basis? That's a legitimate criterion |
| Decision journal, trade log | Decision journal, see the investing toolkit's decision-journal reference |

### 8.2 What does not translate

These terms have no counterpart in a personal decision. They don't get replaced with
made-up numbers; where they're missing, real precision is missing too, and that should be
stated plainly rather than papered over.

| Doesn't translate | Why |
|---|---|
| Price | There's no continuously observable price for a life path. There's no daily update telling you whether the decision is currently "right." |
| Valuation, fair value | There's no independently calculable "true value" of a life option to compare a price against. Any attempt would be an invented number. |
| Hard financial ratios (quality scores, return on equity, leverage, IRR) | These rest on audited accounting data. A personal decision has no audited data source, only your own judgment. |
| A return comparison between two options | Not computable. Salary is comparable; the rest of the consequences aren't, and comparing only salary is the anchoring bias from §7. |
| A benchmark | There's no index for a life well lived. Comparing yourself to other people isn't a benchmark, it's the social-desirability bias from §7. |
| Liquidity, exiting anytime | Many personal decisions are hard or impossible to unwind. That's exactly why Step 5 (capping the downside, the smallest testable version) matters more here than it does in a portfolio. |

> **An honest consequence of this:** because the numbers side is missing, the quality of this
> whole process rests entirely on Step 4. The probabilities are estimates, and they need to be
> presented as estimates with a stated reason. Writing them down as if they were facts just
> builds an investing-flavored decision with none of the actual data behind it.

---

## 9. Output: journal entry

Same format as the investing decision journal (a structured entry, 300 to 600 words),
extended with the two fields that OOC/EMR calls for and that a plain journal entry tends to
miss: rejected options with a reason, and a revisit condition.

```markdown
# Decision: {SHORT TITLE}
**Decision date:** {DATE} · **Review date:** {DATE}
**Mode:** Prepare (Decision Partner, OOC/EMR)

## 1. Situation
{What's at stake, who's affected, what's the deadline}

## 2. Outcomes, ranked
| Rank | Outcome | Why it matters to me |
|------|---------|------------------------|
| 1 | | |
| 2 | | |
| 3 | | |

**Gut feeling today:** {one sentence, unevaluated}

## 3. Options
| Option | Category (MECE) | Short description |
|--------|------------------|--------------------|
| A | | |
| B | | |
| C | | |
| D (status quo) | | |

## 4. Consequences and probabilities
| Option | Consequence | Direction | Probability | Where the estimate comes from |
|--------|-------------|-----------|--------------|-------------------------------|
| A | | Upside / downside | | Experience / observation / someone's statement / guess |

## 5. Missing information
| What I don't know | Must I know it before deciding? | How I'd get it |
|--------------------|----------------------------------|------------------|

## 6. Risk triage
| Risk | Bucket | Evidence | Mitigation | Early warning signal |
|------|--------|----------|------------|-----------------------|
| | Tiger / Paper Tiger / Elephant | | | |

**Elephant, said out loud:** {the concern I'd otherwise leave unsaid}

## 7. Bias check
| Bias | Applies? | What I'd say about it |
|------|-----------|--------------------------|
| Sunk cost | | |
| Confirmation bias | | |
| Identity bias | | |
| Social desirability / status anxiety | | |
| Anchoring on a single number | | |
| Loss aversion | | |
| Status quo bias | | |

## 8. Decision
**Chosen option:** {...}
**Reasoning, tied to outcome number one:** {...}
**First action step and deadline:** {...}

## 9. Rejected options and why
| Rejected option | Why rejected | Under what condition it becomes attractive again |
|-------------------|----------------|-----------------------------------------------------|

## 10. Decision quality, recorded before the outcome is known
- What I knew at decision time: {...}
- What I couldn't have known: {...}
- Why I consider the process sound: {...}
- **This assessment does not get revised retroactively at the review.**

## 11. What would have to happen for me to revisit this
| Trigger | Observable how | Checked by when |
|---------|------------------|-------------------|
```

**Definition of done:**

- [ ] Outcomes written down and ranked, number one is named
- [ ] At least four options, status quo included, at least one uncomfortable
- [ ] Both sides of the consequences for every option
- [ ] Every consequence has a probability with a stated reason
- [ ] Decision quality recorded separately from the outcome
- [ ] Risks sorted into exactly one bucket each, the Elephant said out loud
- [ ] At least one mitigation, or a smallest testable version
- [ ] Bias check fully answered
- [ ] Decision date, action step with deadline, and review date are all in the entry
- [ ] Rejected options recorded with a reason
- [ ] A revisit condition is recorded

---

## 10. Where this skill doesn't help

**Professional advice, non-negotiable.** The investing decision journal states explicitly:
for legal or medical topics, defer to a professional. The same applies here, and extends
further:

| Topic | What this skill can do | What it can't do, and who to ask instead |
|---|---|---|
| Legal (employment contract, notice period, severance agreement, custody, inheritance, visa) | Structure the decision and flag open legal questions as "must know before deciding" | No legal advice, no assessment of deadlines or clauses. A qualified lawyer for the relevant area. |
| Medical (diagnosis, treatment option, capacity to cope) | Structure the decision around the medical information | No medical assessment, no evaluation of treatment options. A doctor. |
| Acute psychological distress (exhaustion, ongoing low mood, crisis, thoughts of self-harm) | Nothing. This process is the wrong tool here. | Therapeutic or medical help. In an acute crisis, immediate professional help, not a journal entry. |
| Tax and financial (severance, self-employment, retirement planning) | Raise the question and flag it as an information gap | No tax or investment advice. A tax advisor, and a licensed advisor for any actual investment decision. |
| Conflict with other people involved | Clarify your own goals and options | Doesn't replace an actual conversation with the other person. A clarified position of your own is preparation, not the resolution. |

**Honest limits of the process itself:**

- It's built for decisions with **real alternatives**. Where there's no actual choice, this
  doesn't help; that's a coping situation, not a decision.
- It's built for decisions with **time**. For a decision that has to be made in ten minutes,
  this process is too slow; in that case, keep only Step 1 (what do I want) and Step 6
  (decide).
- The probabilities in Step 4 are **self-assessments with no external data**, see §8.2. The
  process makes the assessment visible and checkable, it doesn't make it correct.
- It doesn't replace another person. A multi-persona debate simulates perspectives; it doesn't
  replace someone who actually knows your situation.

---

## Sources

| Building block | Origin |
|---|---|
| The six-step OOC/EMR process | Tony Robbins, via the investment-decision-toolkit's decision-frameworks reference |
| Decision quality vs. outcome quality, "Resulting" | Annie Duke, *Thinking in Bets* |
| Prospective hindsight, "it went wrong, why" | Gary Klein; the same underlying move as Munger's inversion |
| Tiger / Paper Tiger / Elephant | Adapted from the pre-mortem structure in the investing toolkit's Devil's Advocate reference |
| Bias checklist basis | Adapted from the exit-review bias check and the assumption-challenging step in the investing decision journal |
| Option generator, four debate rounds | Adapted from the multi-persona debate reference |
| Mutually exclusive sorting of options | Adapted from the MECE structuring reference |
| Three time perspectives, constants and blind spots | Adapted from the temporal triangulation reference |
| Journal structure, review date, professional-advice constraint | Adapted from the investing decision journal reference |
