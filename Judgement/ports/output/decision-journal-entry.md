---
plug: output
name: decision-journal-entry
purpose: the full written record of one decision, meant to be read again at the review date
fallback: this is the default output
---

# Output: Decision journal entry

## Reader and use

You, at the review date. Also anyone you hand the decision to later. One plain markdown file per
decision. That is the correct amount of infrastructure: if you catch yourself designing a schema,
a database or a sync target for it, that is the fragmentation this format exists to prevent.

## Length and register

300 to 600 words for a normal decision. Tables where a table is clearer than prose.

## Fields, in order

All fields of the Decision Record, in the order of the template below.

## Template

```markdown
# Decision: {SHORT TITLE}
**Decision date:** {DATE} · **Review date:** {DATE}
**Mode:** Prepare · **Domain:** {domain plug in use} · **Plugs active:** {one line}

## 1. Situation
{What is at stake, who is affected, what is the deadline}

## 2. Screen (if run)
{Next, Best, Affordable, or the gate ladder result}

## 3. Outcomes, ranked
| Rank | Outcome | Why it matters |
|------|---------|----------------|
| 1 | | |
| 2 | | |
| 3 | | |

**Gut feeling today:** {one sentence, unevaluated}

## 4. Options
| Option | Category | Short description |
|--------|----------|-------------------|
| A | | |
| B | | |
| C | | |
| D (status quo) | | |

## 5. Consequences and probabilities
| Option | Consequence | Direction | Probability | Where the estimate comes from |
|--------|-------------|-----------|-------------|-------------------------------|
| A | | Upside / downside | | Experience / observation / someone's statement / guess / no basis |

## 6. Missing information
| What I don't know | Must I know it before deciding? | How I would get it |
|-------------------|---------------------------------|--------------------|

## 7. Risk triage
| Risk | Bucket | Evidence | Mitigation | Early warning signal |
|------|--------|----------|------------|----------------------|
| | Tiger / Paper Tiger / Elephant | | | |

**Elephant, said out loud:** {the concern I would otherwise leave unsaid}

## 8. Bias check
| Bias | Applies? | What I would say about it |
|------|----------|---------------------------|
| Sunk cost | | |
| Confirmation bias | | |
| Identity bias | | |
| Social desirability | | |
| Anchoring on one number | | |
| Loss aversion | | |
| Status quo bias | | |

## 9. Board input (only if a board session ran)
**Lenses used:** {list, every one labelled SIMULATED}
**Consensus:** · **Dissent:** · **Blind spots:** · **Kill-criteria:**

## 10. Decision
**Chosen option:** {...}
**Reasoning, tied to outcome number one:** {...}
**First action step and deadline:** {...}

## 11. Rejected options and why
| Rejected option | Category (a-e) | Why | Revisit trigger |
|-----------------|----------------|-----|-----------------|

Categories: (a) goal conflict, (b) consequence too large after mitigation, (c) upside too
unlikely, (d) not available, (e) deliberately deferred. A deferral with no trigger is an
unspoken rejection. An option never seriously evaluated is marked "not evaluated".

## 12. Decision quality, recorded before the outcome is known
- What I knew at decision time: {...}
- What I could not have known: {...}
- Why I consider the process sound: {...}
- **This assessment is not revised retroactively at the review.**

## 13. What would have to happen for me to revisit this
| Trigger | Observable how | Check by when |
|---------|----------------|---------------|
```

## Rules for this output

- Never fill a probability with a number that has no basis. "No basis" is a valid entry.
- Every simulated voice from a board session is labelled as simulated inside the entry itself.
- At the review, read section 12 first, then evaluate the outcome. Not the other way round.
