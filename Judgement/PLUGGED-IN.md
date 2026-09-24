# PLUGGED-IN

The manifest. Both engines read this file first, in the **plug check** step, and state in one
line what is active. Anything not listed here is not used, so unplugging a plug means deleting
its row.

Paths are relative to the `Judgement/` folder. Put your own plugs in a `my-plugs/` folder next
to `ports/` if you want to keep them apart from the shipped ones. Nothing requires it.

If this file is missing or empty, the engines run on their defaults and say so.

## Active plugs

### lens (who advises)

Used by the board. The decision partner uses lens plugs as the personas in Step 2 if any are
plugged in, and builds situational personas from your situation if none are.

| Active | Plug file | Note |
| --- | --- | --- |
| yes | ports/lens/skeptic-seat.md | Shipped example. Argues the strongest case against |
| yes | ports/lens/customer-seat.md | Shipped example. Argues as the person who has to buy or live with it |

### context (what is true)

| Active | Plug file | Note |
| --- | --- | --- |
| no | ports/context/_template.md | Copy the template, describe one source, then switch to yes |

With no context plug active, every information gap is logged as open. Nothing is guessed.

### domain (how this field talks)

Exactly one domain plug is active at a time. If two are listed as active, the engine asks which
one applies.

| Active | Plug file | Note |
| --- | --- | --- |
| yes | ports/domain/personal-life-career.md | Job, move, study, living situation, self-employment |
| no | ports/domain/business-and-product.md | Pricing, offer, product scope, hires, partnerships |

### tools (extra thinking methods)

The built-in tools (OOC/EMR, pre-mortem triage, MECE, temporal triangulation, one-way versus
two-way doors, believability weighting, decision quality versus outcome quality) are always
available. This table lists the optional extras.

| Active | Plug file | Note |
| --- | --- | --- |
| yes | ports/tools/next-best-affordable.md | Three-question screen before a session |
| yes | ports/tools/kill-review.md | Prosecutor pass on something already running |
| yes | ports/tools/gate-ladder.md | Ordered gates, cheap disqualifiers first |
| yes | ports/tools/sharp-questions.md | A short bank of questions to pull one at a time |

### output (the shape of the deliverable)

Exactly one output plug is the default. The engine can also render a second one on request.

| Active | Plug file | Note |
| --- | --- | --- |
| default | ports/output/decision-journal-entry.md | Full written record, meant to be read again later |
| yes | ports/output/one-page-memo.md | Short version for someone who was not in the room |
| yes | ports/output/real-advisor-briefing.md | Briefing you send to an actual human |
| yes | ports/output/chat-summary.md | Ten lines you can paste into a message |

## Session preferences (optional)

| Setting | Value | Meaning |
| --- | --- | --- |
| language | English | Language of the session and of the output |
| depth | normal | `quick` (screen plus one tool), `normal` (full process), `deep` (full process plus board) |
| journal folder | decision-journal/ | Where journal entries are written, one markdown file per decision |
