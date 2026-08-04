---
name: excalidraw-diagrams
description: Creates Excalidraw flowcharts and diagrams from text descriptions. Use when user asks to create a flowchart, draw a diagram, visualize a process, make an architecture diagram, or mentions excalidraw, workflow visualization, or decision trees. Supports DSL, DOT/Graphviz, and JSON formats.
---
# Excalidraw Diagrams

Create professional flowcharts, architecture diagrams, and process visualizations as Excalidraw files.

## Output Convention

- **Always** save files with the `.excalidraw` extension (e.g. `my_diagram.excalidraw`)
- **Default save path**: If the user doesn't specify a path, save to the current project folder or the artifact directory.
- **If user specifies a folder**: Save there with a descriptive filename in snake_case + `.excalidraw`
- The CLI will **not** auto-append the extension — you must include `.excalidraw` in `-o` explicitly.

```bash
# ✅ Correct
npx @swiftlysingh/excalidraw-cli create --inline "..." -o /path/to/my_diagram.excalidraw

# ❌ Wrong — extension missing
npx @swiftlysingh/excalidraw-cli create --inline "..." -o /path/to/my_diagram
```

## Capabilities

1. **DSL / Text-to-Diagram**: Best for simple flowcharts and sequences.
2. **Advanced Layouts (JSON / Scripts)**: Best for strictly structured diagrams like Kanban boards, Timelines, or complex Architectures.

## Quick Start (DSL)

```bash
npx @swiftlysingh/excalidraw-cli create --inline "[A] -> [B] -> [C]" -o diagram.excalidraw
```

## Advanced: Programmatic Generation (Node.js)

For complex specific layouts (like Board views, Swimlanes) where DSL is too limited, generate the Excalidraw JSON directly using a Node.js script.

### Key Rules for Text Binding in JSON

If you generate JSON manually, **text must be bound explicitly** to visible containers, otherwise it may appear invisible or misplaced.

1. **Bidirectional Binding**:
   * Container: `boundElements: [{ id: "textId", type: "text" }]`
   * Text: `containerId: "containerId"`
2. **Grouping**:
   * Add both to the same `groupIds: ["sharedGroupId"]`.
3. **Dimensions**:
   * You MUST calculate and set `width` and `height` for Text elements. (Approx: `fontSize * 0.6 * charLength`).

### Template: Generative Script

```javascript
// Minimal Example
const card = {
  id: "card1",
  type: "rectangle",
  x: 0, y: 0, width: 200, height: 100,
  boundElements: [{ id: "text1", type: "text" }],
  groupIds: ["g1"]
};

const text = {
  id: "text1",
  type: "text",
  text: "Hello World",
  x: 10, y: 10, width: 100, height: 20, // Must be set!
  containerId: "card1",
  groupIds: ["g1"]
};
```

## DSL Syntax Reference

| Syntax      | Element   | Use For                 |
| ----------- | --------- | ----------------------- |
| `[Label]`   | Rectangle | Process steps, actions  |
| `{Label?}`  | Diamond   | Decisions, conditionals |
| `(Label)`   | Ellipse   | Start/End points        |
| `[[Label]]` | Database  | Data storage            |
| `->`        | Arrow     | Connections             |

## CLI Commands

```bash
# Inline DSL (Heredoc for multi-line) — always include .excalidraw extension in -o
npx @swiftlysingh/excalidraw-cli create --inline "$(cat <<'EOF'
(Start) -> [Process] -> (End)
EOF
)" -o output.excalidraw
```
