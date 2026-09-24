---
plug: output
name: real-advisor-briefing
purpose: a briefing you send to an actual person whose judgement you want, so their time goes on judgement, not on context
fallback: the one-page memo is used
---

# Output: Real-advisor briefing

## Reader and use

A real human: a mentor, an investor, a senior friend, a board member, a specialist. They are
never simulated, and no lens is written for them. This briefing prepares you and them.

**You send it. The engine never contacts anyone on your behalf.** Review the draft before it
leaves the conversation.

## Length and register

Half a page to one page. Assume they remember nothing. Their preferred register (numbers first or
story first, how direct) is in their profile, if you keep one.

## Fields, in order

Context, the concrete question, what the simulated board said (labelled), what you already
think, what would change your mind.

## Template

```markdown
# Briefing for {Name}: {topic}

**Context.** {two or three sentences}

**The concrete question.** {one question, not a status update with a question buried in it}

**What a simulated board already said.** {short synthesis. Explicitly labelled as SIMULATED,
never presented as anyone's real opinion. Omit this section if no board ran.}

**What I already think, and why.** {your own current position. Withholding it to get an
unbiased answer usually just costs a round trip.}

**What would change my mind.** {the most useful line in the briefing, and the one most people
leave out}
```

## Optional profile file, per person

```markdown
# {Name}, real advisor profile

> No persona is simulated for this person. This file supports a briefing to them.

- Why this person is on the board: {what makes their view valuable, specifically}
- What they want in a briefing: {numbers first or story first, how direct, what wastes their time}
- Cadence: {monthly / at specific decisions / ad hoc}, last contact {date}

| Date | Topic | What they said or decided | Revisit on |
|---|---|---|---|
```

## Rules for this output

- Anything a session says about a simulated voice is labelled simulated, in the text itself and
  not only in your intent. A clean line loses its qualifier the moment it is trimmed for length.
- A named person must never appear to have said something they did not say.
