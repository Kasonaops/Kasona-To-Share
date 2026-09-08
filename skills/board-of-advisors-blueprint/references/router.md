# The Router

The router is the decision you make before the board says anything: which lens or lenses does
this question actually need, and does it warrant a debate at all.

## Why routing exists

Firing the whole board at every question is the default failure of persona setups, and it fails
in three ways at once. It costs more. It produces a longer output that says less, because a
synthesis across five voices with nothing at stake converges on the blandest common position.
And it trains you to skim, which means you stop noticing when a lens says something genuinely
surprising.

The rule of thumb: **one or two lenses for a focused answer. Three lenses and the full four-round
debate only for a genuine strategic fork with no clearly correct answer.**

## Signs a question needs a single lens

- It falls squarely inside one lens's territory. A pricing tweak, a copy decision, a scoping call.
- You already know roughly what you want to do and you want it stress-tested, not re-opened.
- It is reversible and cheap to undo.
- You could describe the decision in one sentence without any "but on the other hand."

## Signs a question warrants a full debate

- Two defensible answers pull in opposite directions and both have real costs.
- The decision is hard or expensive to reverse.
- It touches more than one domain at once: a pricing decision that is also a positioning
  decision that is also a capacity decision.
- You notice yourself avoiding it, or re-litigating it weekly without resolving it.
- The obvious answer is obvious to you specifically, which is a reason to check whether it is
  obvious because it is right or because it is yours.

## Building your own routing table

One row per question type. Write it in your own domain's language, not in abstractions.

```markdown
| Question type | Lens(es) | Mode |
|---|---|---|
| {offer, pricing, packaging} | {commercial lens} | Single lens |
| {new feature, scope, build vs. validate} | {iteration lens} | Single lens |
| {creative or content direction} | {craft lens} | Single lens |
| {what to work on, leverage, long game} | {positioning lens} | Single lens |
| {a genuine strategic fork} | Pick the three that most disagree about this | Full debate |
| {a question needing facts you have on file} | The fitting lens plus a grounding source | Single lens plus grounding |
| {a question where a watched operator actually shipped something relevant} | The fitting lens plus that observed evidence | Single lens plus evidence |
```

Two notes on the last two rows.

**Grounding.** A lens routed with a grounding source is not a different lens, it is the same lens
with facts instead of assumptions. See `grounding-and-portability.md`.

**Watched operators are not routed here by default.** They run in push mode: they arrive on a
schedule, they are not summoned for a question. The one exception is the operator working on a
problem close enough to yours that what they demonstrably shipped is evidence. Two hard rules
when you pull that in:

1. The operator is never simulated. No "here is what they would tell you." You cite what they
   demonstrably did or said, and nothing more.
2. The evidence supports a lens, it does not replace one. The lens still supplies the judgment.

See `push-mode-digest.md` and, for how much weight that evidence should carry,
`thinking-tools-integration.md`.

## Recording the routing decision

Even for a single-lens answer, state which lens you picked and why, in one line. Two reasons: it
lets the person reading the answer disagree with the choice rather than only with the content,
and it makes the routing table improvable, because you can see later which questions you kept
misrouting.

## Adding a lens to the routing

1. Write the lens file first, with real source reading behind it.
2. Add one row here: which question type is this lens the first call for.
3. If the new lens takes over a question type from an existing lens, say so in the row rather
   than leaving two lenses silently competing for the same questions.
