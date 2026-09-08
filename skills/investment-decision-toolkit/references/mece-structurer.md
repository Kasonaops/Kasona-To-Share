# MECE Structurer

A method for sorting a dataset or list of elements into a MECE structure: Mutually Exclusive
(no element fits more than one category at the same level) and Collectively Exhaustive (every
element fits somewhere, nothing is left over).

This is a general-purpose categorization tool, not investing-specific. The worked example
below applies it to portfolio positions, because that's the most common use inside this
toolkit, but the method works on any list: risks, product features, customer segments,
meeting agenda items.

## Required input

- **Dataset or list**: the elements to categorize.
- **Context**: what the categorization is for (analysis, presentation, strategic decision).
- **Desired depth** (optional): how many levels of hierarchy.

## Process

1. **Understand the input.** Read the elements and the stated purpose. Identify obvious
   groupings and patterns before forcing a structure onto them.
2. **Develop the MECE structure.**
   - Build categories that don't overlap: each element belongs to exactly one category at a
     given level.
   - Make sure the categories, taken together, cover every element. Nothing gets dropped
     because it didn't fit cleanly.
   - Add sub-categories only if a deeper structure actually helps; sub-categories must follow
     the same MECE rules.
3. **Validate.** Check the structure against the two MECE rules directly: does anything
   overlap, and is anything missing?
4. **Optimize.** Fix any remaining overlaps, check that the granularity matches the purpose
   (too coarse loses the point of categorizing, too fine becomes unusable), and check that the
   structure is actually understandable to whoever will use it.
5. **Document.** Describe each category clearly, show the structure hierarchically, and give
   at least one worked example of an element being assigned to a category with a stated
   reason.

## Output format

**1. Category structure (table)**

| Level 1 category | Level 2 category (if any) | Description |
|---|---|---|

**2. Assignment logic (table)**

| Category | Criteria | Edge-case rule |
|---|---|---|

**3. Worked example (table)**

| Example element | Assigned category | Reasoning |
|---|---|---|

**4. Validation**: a short statement confirming the structure is MECE, plus an honest note on
any remaining weak spots or ambiguous cases.

## Self-check before shipping the output

1. Is every category genuinely mutually exclusive? No element could reasonably sit in two.
2. Are all elements assigned? No gaps.
3. Is the assignment logic transparent, not just asserted?
4. Would a domain expert agree with the boundary calls, or does this need their input?

Escalate to a human when: the dataset is too large or too ambiguous for a confident manual
categorization, the categories require domain expertise you don't have, or more than one
valid MECE structure exists (in which case, present the variants and recommend one rather
than picking silently).

## Worked bucket set: portfolio positions by strategy, signal, action

A specific MECE structure worth having ready-made, because it recurs in every portfolio
review: sorting every held position along three independent dimensions at once.

| Dimension | Categories (MECE within the dimension) |
|---|---|
| **Strategy** | Core holding / Tactical / Speculative / Legacy (kept for tax or sentimental reasons, not conviction) |
| **Signal** | Thesis intact / Thesis weakening / Thesis broken / Signal unclear |
| **Action** | Hold / Add / Trim / Exit / Needs deeper review |

Every position gets exactly one label from each dimension. The combination (not any single
dimension alone) is what should drive review priority: a Core holding with a broken thesis is
a very different conversation than a Speculative position with a broken thesis, even though
both say "broken thesis."

## Worked bucket set: pre-mortem risk triage

A second ready-made structure, used when triaging the risks surfaced by a pre-buy pre-mortem
(see [devils-advocate.md](devils-advocate.md) Mode B). Every risk raised in a pre-mortem
exercise sorts into exactly one of three buckets:

| Bucket | Definition | What it is not |
|---|---|---|
| **Tiger** | Evidenced, probable, falsifiable risk | Not a vague worry, a vague worry doesn't clear the evidence bar |
| **Paper Tiger** | Anxiety-driven, no evidence, unfalsifiable | Not something you spend mitigation effort on |
| **Elephant** | Real but unspoken concern nobody has raised out loud | Not the same as a Tiger: an Elephant is defined by the silence around it, not by its evidence level |

This bucket set is intentionally exhaustive: any risk you can name falls into one of these
three, and forcing the sort is itself the useful part of the exercise, because "I'm not sure
which bucket this goes in" is usually a sign the risk hasn't actually been thought through.
