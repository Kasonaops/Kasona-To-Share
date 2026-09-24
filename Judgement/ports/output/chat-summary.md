---
plug: output
name: chat-summary
purpose: ten lines you can paste into a message or a task
fallback: the one-page memo is used
---

# Output: Chat summary

## Reader and use

Someone who will read it inside a message, a ticket or a task. It has to survive being pasted.

## Length and register

At most ten short lines. No tables, no headings, plain text.

## Fields, in order

Decision, main reason, first step and date, review date, revisit trigger.

## Template

```
Decision: {one line}
Because: {outcome number one, plus the strongest reason}
Not chosen: {alternatives, with one-word reasons}
Watch for: {the main evidenced risk and its early warning signal}
First step: {action} by {date}
Review: {date}. Revisit if: {trigger}
Full record: {location}
```

## Rules for this output

- The never-drop fields that do not fit stay in the full record, and the last line points to it.
- Nothing simulated leaves without the word "simulated" next to it.
