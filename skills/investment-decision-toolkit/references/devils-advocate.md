# Devil's Advocate Session

A dual-mode adversarial review. Mode A is a structured exit-case analysis for a position you
already hold. Mode B is a pre-mortem, run before a new buy or add, that assumes the position
has already failed and works backward from there. Both modes exist to prevent cognitive bias
from quietly destroying returns: the Devil's Advocate is not optimistic by design, its job is
to find the strongest possible case against the position.

> "If you want to know what a position is really worth, give the case to someone whose job is
> to destroy it." (adapted from institutional Investment Committee practice)

## 0. Two operating modes

| Mode | When | Question | Direction |
|---|---|---|---|
| **A: Exit review** | Position already held, crosses a review threshold | "Argue *now* against holding this." | Pre-sell |
| **B: Pre-mortem** | About to buy or add | "It is {horizon} later, and it *failed*. Why?" | Pre-buy |

Mode B uses Gary Klein's prospective hindsight: not "what could go wrong" (which triggers a
defensive reaction), but "it *did* go wrong" (which gives permission to be candid). It's the
symmetric counterpart to Mode A: a gate before capital goes in, where Mode A gates capital
coming out. This is the same underlying move as Charlie Munger's inversion ("invert, always
invert"): define failure first, then work backward from it. See
[decision-frameworks.md](decision-frameworks.md) for the named framework.

---

## Mode A: Exit review

### 1. When to trigger

A Devil's Advocate session is worth running whenever any of these conditions hold. Treat the
specific numbers as starting points, not universal thresholds; tune them to your own risk
tolerance:

| # | Trigger | Rough threshold |
|---|---|---|
| 1 | Performance drag | Position at more than roughly 15% unrealized loss |
| 2 | Concentration risk | Position exceeds roughly 25% of portfolio value |
| 3 | Thesis staleness | More than about 12 months since the thesis was last validated |
| 4 | Quality deterioration | Your quality score has dropped meaningfully since purchase |
| 5 | Negative guidance | Company guidance turns negative, lowered, or withdrawn |
| 6 | Management turnover | CEO departure, CFO change, or broader C-suite churn |
| 7 | Contrarian signal from tracked sources | A fund or investor you track sells while you hold |

### 2. Session structure: the prosecutor framework

#### Step 1: Charge sheet (data assembly)

Assemble the prosecution brief before the debate starts:

```
For {TICKER} ({COMPANY}):
├── Current quality score: X (was Y at purchase)
├── Current price vs. average cost: {±Z%}
├── Position weight: W% of portfolio
├── Days since last thesis validation: D
├── Latest earnings signal: {beat / miss / in line}
├── Guidance signal: {positive / neutral / negative}
├── Management quality: {your own assessment or score}
└── Activity from tracked sources: {none / a tracked fund sold / a tracked fund added}
```

#### Step 2: The prosecution case

The AI (or a designated devil's advocate) argues the strongest possible case for selling,
along four vectors:

| Vector | What the prosecutor argues | Where the evidence comes from |
|---|---|---|
| **Thesis drift** | The original thesis no longer holds. Name the *specific* assumptions that broke, not vague unease. | Your original written thesis vs. current reality |
| **Quality erosion** | Your quality criteria are failing. Point to the exact criterion, not a general "it's worse now" (debt ratio breach, margin compression, ROE below your bar). | Your quality scoring recalculation |
| **Competitive destruction** | The moat is eroding: a competitor, a technology shift, or a regulatory change is weakening the company's position. | Recent research and news |
| **Opportunity cost** | Capital is trapped here. What could this same capital do elsewhere? | Whatever comparison you run against alternative candidates |

#### Step 3: The defense

The AI then switches sides and argues the strongest case to hold:

| Vector | What the sponsor argues | Where the evidence comes from |
|---|---|---|
| **Thesis intact** | Core drivers remain valid despite the noise. | Your original bull case |
| **Mean reversion** | Current weakness is cyclical, not structural. | Multi-period earnings trend |
| **Catalyst ahead** | A known upcoming event could re-rate the stock. | Next earnings date, product launches, regulatory decisions |
| **Sunk-cost awareness** | Explicitly flag if the defense is actually sunk-cost bias in disguise. | See [decision-journal.md](decision-journal.md) bias check |

#### Step 4: Verdict

The human reviews both cases and renders one of three verdicts:

| Verdict | Meaning | Next action |
|---|---|---|
| **Re-underwrite** | Thesis weakened but recoverable. Set a 30/60/90-day review with explicit conditions. | Document in the decision journal, set a calendar reminder. |
| **Trim** | Reduce the position to lower risk while continuing to monitor. | Generate a trade recommendation to reduce to a target weight. |
| **Liquidate** | Thesis is broken with no path to recovery that justifies the capital lock-up. | Generate an exit recommendation, log the sell reason. |

### 3. The 15 reasons to sell

Every sell decision should map to at least one of these canonical reasons. If you can't point
to a number, you're probably selling on emotion.

**Category A: Thesis destruction (1 to 3)**

| # | Reason | Kill signal |
|---|---|---|
| 1 | Original thesis busted | Moat misjudged; outside forces dominate; management can't execute; an adverse legal ruling; brand deterioration; entering less profitable adjacent businesses; being structurally disrupted; a shift in the industry that management missed; political or regulatory hostility management won't adapt to |
| 2 | Accounting irregularities | You can no longer trust the numbers or management, full stop |
| 3 | A mega-acquisition you don't like | Large acquisitions usually destroy value and distract management. Relative size matters: a company roughly 1.5x the target's size making the acquisition is a big deal; a company 30x the target's size making it is largely irrelevant |

**Category B: Exhaustion and alternatives (4 to 6)**

| # | Reason | Kill signal |
|---|---|---|
| 4 | Thesis complete, no second act | Organic revenue growth has slowed to low single digits; profit growth below roughly 10%; the company is too big to keep compounding at the old rate; better opportunities exist elsewhere |
| 5 | Culture deterioration | Employee sentiment plunges; mass management exodus; visible leadership derailment |
| 6 | Extreme valuation vs. realistic ceiling | Price has run far ahead of any realistic fair value; appreciation without fundamental backing |

**Category C: Portfolio management (7 to 11)**

| # | Reason | Kill signal |
|---|---|---|
| 7 | Position too large | Roughly above 15% for a low-risk high-conviction holding, or above 10% for a higher-risk one (tune to your own bands) |
| 8 | Lost interest | You no longer want to follow the company closely enough to hold it responsibly |
| 9 | Company gets acquired | A deal with a high likelihood of closing |
| 10 | Need the money | A major personal expense, or avoiding high-interest debt |
| 11 | Tax-loss harvesting | Selling a position you've already lost confidence in, to offset gains elsewhere |

**Category D: Systematic and values-based (12 to 15)**

| # | Reason | Kill signal |
|---|---|---|
| 12 | A clearly better alternative | You've found a higher-quality opportunity with a better risk/return profile; holding the weaker name is itself an opportunity cost |
| 13 | Systematic quality breakdown | Your quality score has dropped below your own hard bar; leverage has crossed your threshold; a sustained earnings drawdown; return on capital has fallen below your minimum |
| 14 | Ethical or values misalignment | A shift in your own values makes the business model incompatible, regardless of profitability |
| 15 | The sleep test | The volatility or the situation is causing you real stress; selling for peace of mind is a legitimate reason |

### 4. Output format

```markdown
# Devil's Advocate Report: {TICKER} ({COMPANY})
**Date:** {DATE}
**Trigger:** {TRIGGER_TYPE}

## Prosecution Brief
| Data Point | Value | Signal |
|-----------|-------|--------|
| Quality score | X (was Y) | green / yellow / red |
| Unrealized P/L | ±Z% | green / yellow / red |
| Position weight | W% | green / yellow / red |
| Thesis age | D days | green / yellow / red |
| Management quality | (your assessment) | green / yellow / red |

## The Case Against (Prosecutor)
1. **Thesis drift:** {specific assumption that broke}
2. **Quality erosion:** {which criterion failed}
3. **Competitive destruction:** {who is winning and why}
4. **Opportunity cost:** {what else this capital could do}

## The Case For (Sponsor)
1. **Thesis intact:** {why the core drivers still hold}
2. **Mean reversion:** {why the weakness is temporary}
3. **Catalyst ahead:** {specific upcoming event}
4. **Sunk-cost check:** {is this defense actually bias?}

## "What Would Make You Sell?"
→ {Explicit trigger condition that would force an exit}
→ {Review date by which this trigger is evaluated}

## Verdict: {RE-UNDERWRITE / TRIM / LIQUIDATE}
**Sell reason(s) invoked:** #{NUMBER}: {REASON_NAME}
**Confidence:** {1-5}
**Review date:** {DATE}
```

### 5. Cognitive bias checklist

Before finalizing a verdict, explicitly acknowledge each of these:

- [ ] **Anchoring:** Am I anchored to my purchase price or a past high?
- [ ] **Sunk cost:** Am I holding because I've "already put in the work"?
- [ ] **Confirmation bias:** Am I only seeking data that confirms my existing view?
- [ ] **Endowment effect:** Would I buy this stock today at this price? If not, why hold it?
- [ ] **Narrative fallacy:** Am I telling myself a story the data doesn't actually support?
- [ ] **Status quo bias:** Am I holding just because selling requires effort?

> Howard Marks' "unbuy" test: think about the price-to-value ratio and the opportunity cost.
> Would you buy this today?

---

## Mode B: Pre-mortem before buy or add

> Mode A challenges positions you already hold. Mode B challenges positions you're about to
> buy, at the exact moment conviction is highest and stress-testing is most valuable. The
> strongest bias hides in a buy you're excited about, not in a loser you already regret.

### B.1 When to trigger

| # | Trigger | Note |
|---|---|---|
| 1 | New position (first buy of a name) | Always |
| 2 | Add or averaging down on an existing position | Always |
| 3 | Conviction driven mainly by an external signal (a tracked fund's filing, a network recommendation, a public figure's take) | Mandatory: this is exactly where an unspoken "Elephant" risk tends to hide, see B.3 |
| 4 | An add would push the position past your concentration threshold | Mandatory |

### B.2 The thought experiment (prospective hindsight / Munger's inversion)

```
"It is {HORIZON} after we bought {TICKER}. The position is a disaster,
 down materially, the thesis is broken. Work backward: WHY did it fail?"
```

- The horizon should match your own investment style. A rough starting point: for a
  long-horizon, quality-first style, 24 to 36 months; for a growth or turnaround style with
  more execution risk, 12 to 18 months.
- Generate concrete, evidenced causes, not "the market could drop" but something like "a
  named revenue segment collapsed under a risk already flagged in the prior quarter's
  guidance."

### B.3 Risk triage

See [mece-structurer.md](mece-structurer.md) for the full bucket-set definition. Every cause
raised in B.2 sorts into exactly one bucket:

| Bucket | Definition | Action | Early warning signal |
|---|---|---|---|
| **Tiger** | Evidenced, probable, falsifiable risk | Mitigate, or block the buy if no mitigation exists | One concrete, observable metric or event to watch for |
| **Paper Tiger** | Anxiety-driven, no evidence, unfalsifiable | Park it, don't spend mitigation effort here | None, by definition unfalsifiable |
| **Elephant** | A real but unspoken concern nobody has raised | Force it onto the table, plus a cognitive bias check | A signal that the unspoken concern is starting to materialize |

> **The Elephant is the point of Mode B.** Mode A finds kill-shots in the data; it never
> surfaces the social thing nobody says out loud. The most common Elephant in a buy decision:
> *"Are we buying because we did the work, or because someone whose judgment we respect likes
> this and nobody wants to contradict them?"* Route this to
> [multi-persona-debate.md](multi-persona-debate.md): one persona should be explicitly tasked
> with voicing it.

### B.4 Verdict

| Verdict | Meaning | Next action |
|---|---|---|
| **Buy cleared** | No unmitigated Tiger, no live Elephant | Execute. Log Tiger watch-items. |
| **Buy with conditions** | Tigers exist but are mitigable | Execute at reduced size and/or set explicit pre-conditions and a review date. |
| **Buy rejected** | At least one blocking Tiger with no mitigation | Don't buy. Re-screen later if conditions change. |

All Tiger mitigations and the Elephant verdict should be written as assumptions into a
decision journal entry (see [decision-journal.md](decision-journal.md)) with an explicit
review date.

### B.5 Output format

```markdown
# Pre-Mortem Report: {TICKER} ({COMPANY})
**Date:** {DATE} · **Action under review:** {BUY / ADD, target size W%}
**Horizon:** {HORIZON}

## Scenario
It is {HORIZON} after the {BUY/ADD}. The position failed. Below: why.

## Why It Failed (Prospective Hindsight)
1. {concrete, evidenced cause}
2. {...}

## Risk Triage
| Risk | Bucket | Evidence | Action | Early Warning Signal |
|------|--------|----------|--------|-----------------------|
| ...  | Tiger      | {source} | Mitigate / blocking | {concrete, observable signal} |
| ...  | Paper Tiger | none     | Park |: |
| ...  | Elephant   | unspoken | On the table + bias check | {signal the concern is materializing} |

## Verdict: {BUY CLEARED / WITH CONDITIONS / REJECTED}
**Unmitigated Tigers:** {N} · **Elephant raised:** {yes/no}
**Conditions / watch-items:** {...} · **Review date:** {DATE}
```

---

## References

| Source | What it contributes |
|---|---|
| Gary Klein, prospective hindsight / pre-mortem method | The "it already failed, work backward" framing used in Mode B |
| Charlie Munger, inversion ("invert, always invert") | The same underlying operation as Mode B's prospective hindsight; see [decision-frameworks.md](decision-frameworks.md) |
| Howard Marks, "unbuy" philosophy | The price-to-value-ratio plus opportunity-cost framework behind the Mode A bias check |
| Institutional re-underwriting practice | The trigger thresholds and re-underwrite/trim/liquidate verdict structure in Mode A |
