---
name: decision-partner
description: A structured decision partner for any decision with no obviously correct answer, personal or professional, built on Robbins' OOC/EMR (Outcome, Options, Consequences / Evaluate, Mitigate, Resolve) as the underlying process. Reusable thinking tools (a risk pre-mortem, MECE option sorting, a structured multi-perspective debate, past/present/future triangulation, a next-best-affordable screen) plug in where they fit, and the field vocabulary, extra facts, advisors and the shape of the final output are all plugs (see the Judgement folder's ports). Use when someone wants to think through a hard decision: a job change, quitting, accepting or declining an offer, moving, a course of study, going self-employed, a pricing or product call, a hire, a partnership, "should I do X or Y," "I'm stuck on a decision," "help me think this through," or "I keep going in circles."
metadata:
  type: workflow
---

# Decision Partner

A process for decisions that don't have one obviously correct answer. It uses Robbins'
OOC/EMR as the container, and plugs in existing thinking tools wherever real reasoning work is
needed, rather than inventing new methods.

**The engine is domain-neutral and modular.** What changes from one decision to the next is
plugged in, not rewritten: the field's vocabulary and hard limits (a domain plug), extra facts
(a context plug), the advisors or personas (lens plugs), extra methods (tools) and the shape of
the deliverable (an output plug). See [../README.md](../README.md) and
[../ports/README.md](../ports/README.md). With nothing plugged in it still runs, on generic
defaults, and says so.

**Which engine.** This skill drives *one decision to a dated resolution*. If you first want
several worldviews to argue about a business, product or content question, open
[../board-of-advisors-blueprint/SKILL.md](../board-of-advisors-blueprint/SKILL.md), then come
back here. As a rule of thumb: a decision about your own time, identity, career or household
starts here. A decision about the business, the product, the offer or the audience starts with
the board and finishes here.

**Relationship to the decision journal:**
[references/decision-journal.md](references/decision-journal.md) remains the place for plain
journaling across three modes (prepare, reflect, retrospective). This skill is the stricter
process for the "prepare" mode and hands its record to the output plug (by default, a journal
entry). If you only want to look back on a past decision without the full process, go straight
to that journal reference.

---

## 0a. Plug check (first step of every session)

1. Read [../PLUGGED-IN.md](../PLUGGED-IN.md). Load the file for every row marked active.
2. State in one line what is active, for example: "Active: domain business-and-product, tools
   next-best-affordable, output one-page memo. No lens or context plugs, so personas are built
   from your situation and information gaps stay open."
3. A missing manifest, a missing file or an unreadable plug is named in that line and falls back
   to the default. Never pretend a plug was loaded.
4. Plugs add, they never remove. No plug can switch off a ground rule below or drop a
   never-drop field of the Decision Record ([../ports/README.md](../ports/README.md)).

**How each port shows up in the steps below:**

| Port | Where it is used |
|---|---|
| domain | Horizons in Step 5, option types and MECE buckets in Step 2, bias examples in section 7, overlooked consequences in Step 3, hard limits in section 10 |
| lens | The personas in Step 2. With no lens plug, build three or four situational personas |
| context | Any "must know" gap in Step 3. Query it, or log the gap as open |
| tools | Step 0b (the screen), Step 1 (sharp questions), Steps 2 to 5 (MECE, kill review, gate ladder, pre-mortem) |
| output | Section 9. The record is rendered by the active output plug |

## 0b. Screen first (optional, one minute)

For a new idea, not for a decision already forced by a deadline: run
[../ports/tools/next-best-affordable.md](../ports/tools/next-best-affordable.md) if plugged in. It
answers whether this is the next thing, the best version, and affordable in attention, cash and
people. A "go" earns the full process. A "park" needs a revisit trigger. A "drop" ends the
session with one sentence of why. For something already running that might need to stop, use
the kill review instead.

---

## 0. Ground rules that apply to all six steps

| Rule | Why |
|---|---|
| Everything gets **written down**, nothing stays in your head | A ranked outcome, every option, both sides of every consequence, and a probability for each: none of that fits in working memory at once. Done in your head, the process becomes theater. |
| Start from the **outcome**, not the feeling | Fear, excitement, enthusiasm, pressure: any of them can mislead you. The feeling gets recorded (Step 1), but it doesn't steer. |
| This process **does not decide for you** | No decision is handed to you, only structured reflection. You decide at the end; Step 6 just forces you to actually do it. |
| No invented numbers | If a probability is only a guess, mark it as a guess. A number with no basis behind it gets quoted back later as if somebody had counted something. |
| A simulated voice is always labelled as simulated | A persona is a tool for generating options, never an opinion held by a real person. |

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
- Record your gut feeling here separately, not disguised as a goal. It is often illuminating in
  hindsight, so it gets its own line in the record.
- **If your own answer to "what do I want" is vague, use a sharp question** (plug:
  [../ports/tools/sharp-questions.md](../ports/tools/sharp-questions.md)): "Suppose this went
  really well and a year from now you look back. What would have to have happened for you to
  call it a good decision?" Write the answer down. It becomes the success criteria and usually
  hands you outcome number one.

**Avoid:** stating something that's actually an option as if it were an outcome ("take the job
in a new city" is an option, not an outcome).

---

## 2. Step O: Options, every path, including the uncomfortable ones

**The question:** what paths actually exist, including the ones I don't like?

**Tool 1, option generator: multi-persona debate.**
Three to four personas with genuinely opposing convictions debate the situation across four
rounds (opening, rebuttal, defense, common ground) and produce an option space that isn't a
straw man.

**Where the personas come from.** If lens plugs are active, use them (see
[../ports/lens/](../ports/lens/), and the provenance contract in
[../board-of-advisors-blueprint/references/lens-file-format.md](../board-of-advisors-blueprint/references/lens-file-format.md)).
If none are, build three or four situational personas from the decision itself, for example the
security-oriented voice, the keep-options-open voice and the all-in voice. Add the skeptic seat
or the customer seat from the ports if they fit. Every persona is labelled as simulated.
Everything about the format (four rounds, fair and strong representation of every position,
synthesis, naming blind spots) applies unchanged. For a full multi-lens session with routing
and grounding, hand over to the board skill instead.

The domain plug, if active, supplies the option types people forget in this field.

**Tool 2, sorting: MECE structuring.** (The domain plug suggests buckets. Pick one distinguishing
question per sort and stay with it.)
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
- Consequences for other people affected belong here too (a partner, a team, a customer).
  The domain plug lists the consequences that get overlooked in this field.
- Mark missing information here, and split it into "nice to know" and "must know before
  deciding," including a pragmatic way to actually get it. If a context plug can close a
  must-know gap, query it and use the real result. If none can, log the gap as **open**. Never
  guess what a query would have returned.

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
with the thought experiment:

> "It is {horizon} after the decision. It's turned into a disaster. Why?"

Not "what could go wrong," but "it **did** go wrong." This is Gary Klein's prospective
hindsight, the same underlying move as Munger's inversion. Pick a horizon at which the
decision can realistically be judged, and say it out loud before generating causes, because "it
failed" means different things at three months and at two years. The domain plug lists default
horizons per kind of decision. Without one: a quick reversible call, 3 to 6 months; a product
line or a job change, 12 to 18 months; a move, a course of study or a hire, 18 to 36.

Every cause raised sorts into exactly one bucket:

| Bucket | Definition | Action | Early warning signal |
|---|---|---|---|
| Tiger | Evidenced, plausible, checkable | Mitigate, or blocking if no mitigation exists | A concrete, observable signal |
| Paper Tiger | Fear-driven, no evidence, unfalsifiable | Park it, don't spend mitigation effort on it | None, unfalsifiable by definition |
| Elephant | A real concern nobody has voiced | Put it on the table, plus a bias check | A signal that the concern is materializing |

**The Elephant is the most important bucket.** In a business decision it is usually "are we doing
this because the work says so, or because a peer shipped it and it would be uncomfortable to be
the one who didn't?" In a personal decision it is often: what would I decide if nobody whose
opinion matters to me ever found out? If you can't name your own
Elephant, borrow one of the personas from Step 2 and give it the explicit job of saying it out
loud.

**The real work of this step:**
- Can I combine parts of two options instead of rejecting one entirely?
- Can I cap the worst case in advance: a deadline, a fallback option, a trial period, a
  financial buffer, a written agreement?
- What's the smallest testable version of this decision I could try before committing to the
  full version?

**Also here: shrink or kill something already running** with the kill review
([../ports/tools/kill-review.md](../ports/tools/kill-review.md)), and **check an opportunity in
a fixed order** with the gate ladder
([../ports/tools/gate-ladder.md](../ports/tools/gate-ladder.md)) if plugged in.

**Verdict of the pre-mortem:** cleared, cleared with
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
3. **A review date.** When will you check whether the assumptions held? Record a date and a
   review timeframe (the domain plug suggests defaults). At the review date, run the
   retrospective mode of the decision journal, and specifically in this order: read the
   decision-quality note you wrote at the time, first, then evaluate the outcome.

**Avoid:** "I'll let it sit" without a date. This is the step skipped most often, and the one
that carries the value.

---

## 7. Bias check

Before the verdict in Step 6, answer every item explicitly, don't skim past it. The domain plug
supplies how each bias typically shows up in your field. The forcing questions are generic.

| Bias | The forcing question |
|---|---|
| **Sunk cost** | Am I sticking with this path because I've already invested so much? The time or money already spent is gone either way; it shouldn't get a vote on the future. |
| **Confirmation bias** | Am I only looking for evidence that supports my leaning? Who did I ask, and did I pick people I knew would agree? |
| **Identity bias** | Am I rejecting an option because choosing it would mean I'm not who I think I am? That's a statement about self-image, not about the option. |
| **Social desirability / status anxiety** | How would I decide if nobody found out? |
| **Anchoring on a single number** | Is my whole evaluation hanging on one number? A number that happens to be measurable crowds out everything that isn't. |
| **Loss aversion** | Am I weighting what I'd give up more heavily than an equally sized thing I'd gain? |
| **Status quo bias** | Am I staying just because staying doesn't require action? Doing nothing is a decision too, which is why it is listed as its own option in Step 2. |

---

## 8. What a domain plug changes, and what it cannot

The engine is generic. A domain plug (see [../ports/domain/](../ports/domain/)) changes how it
feels in your field: horizons, option types, MECE buckets, bias examples, overlooked
consequences, hard limits and vocabulary. It cannot change the six steps, the ground rules or
the never-drop fields.

**What no domain has, and the process does not pretend to have:**

| Missing | Why |
|---|---|
| A continuously observable price | A decision has no daily update telling you whether it is currently "right" |
| An independent "true value" of an option | Any attempt would be an invented number |
| Audited data | Most personal and many business decisions rest on your own judgement, not on audited accounts |
| A benchmark | Comparing yourself to other people is not a benchmark, it is the social desirability bias |
| Liquidity, the ability to exit at any time | Many decisions are hard or impossible to unwind. That is exactly why Step 5 (cap the downside, the smallest testable version) matters |

> **An honest consequence of this:** where the numbers side is missing, the quality of the whole
> process rests on Step 4. The probabilities are estimates and must be presented as estimates,
> with a stated basis. Writing them down as if they were facts builds a decision that looks
> rigorous and has none of the data behind it.

---

## 9. Output: the Decision Record, rendered by the output plug

Throughout the session, keep the **Decision Record**: one fixed structure, defined in
[../ports/README.md](../ports/README.md), whatever the final format. At the end, hand it to the
active output plug (see [../ports/output/](../ports/output/)):

| Plug | Use it for |
|---|---|
| decision-journal-entry (default) | The full record, read again at the review date |
| one-page-memo | Someone who was not in the room |
| real-advisor-briefing | An actual person whose judgement you want. You send it. Never simulated |
| chat-summary | Ten lines to paste into a message or a task |

**Never-drop fields, in every output:** ranked outcomes, options including the status quo,
probability with its basis, decision and first step with a deadline, decision date and review
date, rejected options with category and revisit trigger, decision quality written before the
outcome is known, and the simulated label on any persona voice. If the format cannot hold them,
the output points to where the full record lives.

**Definition of done:**

- [ ] Plug check line stated, fallbacks named
- [ ] Outcomes written down and ranked, number one is named
- [ ] At least four options, status quo included, at least one uncomfortable
- [ ] Both sides of the consequences for every option
- [ ] Every consequence has a probability with a stated basis (or "no basis")
- [ ] Decision quality recorded separately from the outcome
- [ ] Risks sorted into exactly one bucket each, the Elephant said out loud
- [ ] At least one mitigation, or a smallest testable version
- [ ] Bias check fully answered
- [ ] Decision date, action step with deadline, and review date are all recorded
- [ ] Rejected options recorded with category, reason and revisit trigger
- [ ] A revisit condition is recorded
- [ ] Output rendered by the active output plug, with never-drop fields intact

---

## 10. Where this skill doesn't help

**Professional advice, non-negotiable.** For legal or medical topics, defer to a professional.
The domain plug lists the specific hard limits of your field. The generic floor:

| Topic | What this skill can do | What it can't do, and who to ask instead |
|---|---|---|
| Legal (contracts, deadlines, custody, inheritance, visa, IP) | Structure the decision and flag open legal questions as "must know before deciding" | No legal advice, no assessment of deadlines or clauses. A qualified lawyer for the relevant area. |
| Medical (diagnosis, treatment, capacity to cope) | Structure the decision around the medical information you provide | No medical assessment. A doctor. |
| Acute psychological distress (exhaustion, ongoing low mood, crisis, thoughts of self-harm) | Nothing. This process is the wrong tool here. | Therapeutic or medical help. In an acute crisis, immediate professional help, not a journal entry. |
| Tax and financial (severance, self-employment, financing, retirement) | Raise the question and flag it as an information gap | No tax or investment advice. A tax advisor, and a licensed advisor for any actual investment decision. |
| Conflict with other people involved | Clarify your own goals and options | Doesn't replace an actual conversation with the other person. A clarified position of your own is preparation, not the resolution. |

**Honest limits of the process itself:**

- It's built for decisions with **real alternatives**. Where there's no actual choice, this
  doesn't help; that's a coping situation, not a decision.
- It's built for decisions with **time**. For a decision that has to be made in ten minutes,
  keep only Step 1 (what do I want) and Step 6 (decide).
- The probabilities in Step 4 are **self-assessments** unless a context plug supplied a real
  figure. The process makes the assessment visible and checkable, it doesn't make it correct.
- It doesn't replace another person. A multi-persona debate simulates perspectives; it doesn't
  replace someone who actually knows your situation.

---

## Sources

| Building block | Origin |
|---|---|
| The six-step OOC/EMR process | Tony Robbins, see [references/decision-frameworks.md](references/decision-frameworks.md) section 6 |
| Decision quality vs. outcome quality, "Resulting" | Annie Duke, *Thinking in Bets*, see [references/decision-frameworks.md](references/decision-frameworks.md) section 4 |
| Prospective hindsight, "it went wrong, why" | Gary Klein; the same underlying move as Munger's inversion (section 1 of the same reference) |
| Tiger / Paper Tiger / Elephant | A pre-mortem risk triage: genuinely fatal risks, loud-but-survivable risks, and the concern nobody has named out loud |
| Bias checklist basis | Standard cognitive-bias literature |
| Option generator, structured multi-perspective debate | Arguing a decision from several genuinely opposed viewpoints, so the option set isn't a straw man |
| Mutually exclusive, collectively exhaustive sorting of options | MECE structuring, a standard consulting technique |
| Three time perspectives, constants and blind spots | Checking a belief against its own past, present and future |
| Next, Best, Affordable | See [../ports/tools/next-best-affordable.md](../ports/tools/next-best-affordable.md) |
| Journal structure, review date, rejected options, professional-advice constraint | See [references/decision-journal.md](references/decision-journal.md) |
