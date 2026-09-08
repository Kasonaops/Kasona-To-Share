---
name: investment-decision-toolkit
description: A toolkit of cognitive sub-tools for structuring portfolio review, not raw financial analysis. Use when running a periodic portfolio review or investment committee session, when a held position needs a structured exit-case analysis, when a buy or add decision needs a pre-mortem before capital goes in, when a strategic call has no clear right answer and would benefit from a multi-persona debate, when a thesis has gone stale and needs a past/present/future check, or when any investment decision needs a written journal entry instead of a memory of "we talked about it." Not a data pipeline: it assumes you already have quality scores, valuation models, and earnings data from elsewhere, and structures the thinking on top of them.
---

# Investment Decision Toolkit

A set of reusable thinking procedures for reviewing an investment portfolio: how to sort
positions, run a review meeting, stress-test a thesis from both sides, debate a decision
you're unsure about, check a stale thesis against time, and write down what you decided and
why. None of these tools produce a valuation, a quality score, or an earnings summary. They
assume that data exists somewhere in your own pipeline (a scoring model, a DCF, an earnings
feed) and structure the judgment layer that sits on top of it.

This is deliberately framework-agnostic: no specific data schema, database, or app is
assumed. Wire the trigger conditions and data sources to whatever you already have.

## Thinking tools vs. deliverables

Two different things live in a toolkit like this, and it's worth keeping them apart:

- **A thinking tool** is a reusable procedure you call in more than one situation: a way of
  running a debate, a way of sorting things into buckets, a way of forcing an assumption into
  the open. It earns its own reference file.
- **A deliverable** is a finished, formatted output you hand to a user or a decision-maker: a
  report, a memo, a filled-in template. It usually lives as a template inside whatever
  orchestrates the pipeline, not as its own tool.

The rule of thumb: a new method gets its own file only if it overlaps less than half with an
existing tool. Otherwise, fold the method into the tool it resembles and ship the new
capability as an output template rather than a new procedure. This keeps the toolkit from
growing a new file every time someone finds a new metaphor for the same underlying move. A
concrete example: a "pre-mortem" (imagine the decision already failed, work backward) is not
its own tool here. It's Devil's Advocate run in reverse, before a buy instead of before a
sell, using a risk-bucket structure borrowed from the categorization tool. See
[devils-advocate.md](references/devils-advocate.md) Mode B for how that plays out in practice.

## The pipeline shape

A full review cycle runs the tools in this order, though most of the individual tools also
work standalone:

```
1. Categorize positions           → mece-structurer.md
   (sort every holding into buckets by strategy, signal, and required action)
        │
        ▼
2. Run the review meeting         → review-meeting-structure.md
   (structured agenda: pulse check, prosecutor/sponsor debate per position, verdicts)
        │
        ├─ Troubled position (loss, concentration, stale thesis, quality drop)
        │       ▼
        │  3. Adversarial exit-case analysis   → devils-advocate.md (Mode A)
        │
        ├─ New buy or add under consideration
        │       ▼
        │  3. Pre-mortem before capital deploys → devils-advocate.md (Mode B)
        │
        ├─ Verdict is TRIM or EXIT, or the call has no clean answer
        │       ▼
        │  4. Multi-persona debate              → multi-persona-debate.md
        │
        ├─ Thesis is old or the signal is ambiguous
        │       ▼
        │  4. Past/present/future check          → temporal-triangulation.md
        │
        └─ Always, for any ADD/TRIM/EXIT decision
                ▼
           5. Decision journal entry             → decision-journal.md
```

`decision-frameworks.md` isn't a pipeline step. It's a reference the other tools cite when
they use a named piece of decision theory (Munger's inversion inside Devil's Advocate Mode B,
Duke's decision-quality-vs-outcome-quality split inside the journal's retrospective mode, and
so on) without re-explaining it every time.

`saas-quality-metrics.md` is also not a pipeline step. It's a domain reference for one
specific case: reviewing a software or SaaS holding, where standard valuation multiples miss
what actually matters (retention, payback period, growth efficiency).

## Reference files

| File | What it gives you |
|------|--------------------|
| [mece-structurer.md](references/mece-structurer.md) | A general method for sorting any list into mutually exclusive, collectively exhaustive categories, plus the specific bucket set for portfolio positions and for pre-mortem risks. |
| [review-meeting-structure.md](references/review-meeting-structure.md) | A standard operating procedure for a periodic investment review meeting: agenda, the 4-pillar rapid assessment, prosecutor/sponsor debate format, and a quality-gate checklist. |
| [devils-advocate.md](references/devils-advocate.md) | Dual-mode adversarial review. Mode A stress-tests a position you already hold and might sell. Mode B pre-mortems a position before you buy it. Includes the 15 canonical reasons to sell and the Tiger/Paper Tiger/Elephant risk triage. |
| [multi-persona-debate.md](references/multi-persona-debate.md) | A structured debate format between three or four personas with genuinely opposed philosophies, used to find the option set (and the synthesis) a single perspective would miss. |
| [temporal-triangulation.md](references/temporal-triangulation.md) | Analyze the same question from three time perspectives (past, present, future) to surface constants, blind spots, and a "future solution" you could prototype today. |
| [decision-journal.md](references/decision-journal.md) | A structured journal format for preparing, reflecting on, or retrospectively reviewing a decision, including a mandatory table of rejected options and revisit triggers. |
| [decision-frameworks.md](references/decision-frameworks.md) | Canonical reference for six named decision-theory frameworks (Munger, Bezos, Dalio, Duke, Naval, Robbins) that the other tools use or could use, with a worked example of what a bad application of each one looks like. |
| [saas-quality-metrics.md](references/saas-quality-metrics.md) | Software/SaaS-specific quality metrics (Rule of 40, net revenue retention, CAC payback, ARR bridge) for when a holding's business model doesn't fit a standard valuation lens. |

## Wiring it into your own agent

Every trigger condition mentioned in these files (a loss threshold, a staleness window, a
concentration limit) is a placeholder for whatever your own portfolio data actually looks
like. None of the reference files assume a specific database, app, or scoring system. Replace
"your quality score" with whatever scoring model you run, replace "your fair value model"
with whatever valuation approach you use, and keep the procedure.
