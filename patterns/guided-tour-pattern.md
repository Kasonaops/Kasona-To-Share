# Guided Tour / Onboarding Walkthrough — Pattern Guide

A concept guide for building an interactive product tour like the ones found on modern SaaS dashboards: the screen dims, one UI element stays highlighted in a "spotlight", and a small explanation card walks the user through the app step by step.

This document describes the **idea and the building blocks**, not a finished implementation. It is framework-agnostic — the snippets are illustrative pseudocode/JS and can be adapted to React, Vue, vanilla JS, or anything else.

---

## The user experience

1. On the **first visit** to a page (e.g. the dashboard), the tour starts automatically with a centered welcome card ("Take a 1-minute tour?").
2. Each following step **highlights one element** of the UI: everything else is dimmed (dark overlay + slight blur), the target element stays fully visible inside a rounded "spotlight" cutout with a glowing accent border.
3. Next to the spotlight, an **explanation card** appears with a short title, 1–3 sentences of copy, progress dots, and *Back / Next / Skip* buttons.
4. The user can leave at any time (X button, *Skip*, or `Esc`). Once finished or dismissed, the tour never auto-starts again — but it stays **restartable** from a help/tutorials menu.

---

## Core building blocks

### 1. Steps as a data array

The whole tour is just data. Each step points at a target element via a CSS selector; the UI marks tour targets with `data-tour` attributes so the tour never depends on class names or DOM structure:

```js
// In the layout: <aside data-tour="sidebar">…</aside>
const TOUR_STEPS = [
  { // no target → centered welcome card, no spotlight
    title: 'Welcome!',
    body: 'This 1-minute tour shows you the most important areas…',
  },
  {
    target: '[data-tour="sidebar"]',
    title: 'Navigation',
    body: 'Switch between the main areas here.',
  },
  {
    target: '[data-tour="create-button"]',
    title: 'Create something',
    body: 'This is where your work usually starts.',
    // optional: force interaction instead of a "Next" button, see below
    clickTarget: true,
  },
  // …
];
```

Optional per-step extras that proved useful:

- `clickTarget: true` — hide the *Next* button and require the user to actually click the highlighted element to advance (learning by doing). The spotlight hole is click-through, so the real UI reacts.
- Side effects per step (switch a tab, open a panel, inject demo data) so the highlighted area actually has something to show. Run them in an effect/watcher when the step index changes.

### 2. Dimming overlay with a spotlight "hole"

A single full-screen, fixed-position layer provides the dimming (`rgba(10,12,16,.55)` + `backdrop-filter: blur(4px)` works well). The spotlight is a **hole cut out of that layer** using an `evenodd` `clip-path`: the outer subpath covers the viewport, an inner rounded-rect subpath over the target creates the cutout.

```js
// rounded-rect subpath for the hole (x/y/w/h from getBoundingClientRect + padding)
function roundedRectSubpath(x, y, w, h, r) {
  const R = Math.min(r, w / 2, h / 2);
  return `M${x + R} ${y} H${x + w - R} A${R} ${R} 0 0 1 ${x + w} ${y + R}
          V${y + h - R} A${R} ${R} 0 0 1 ${x + w - R} ${y + h} H${x + R}
          A${R} ${R} 0 0 1 ${x} ${y + h - R} V${y + R} A${R} ${R} 0 0 1 ${x + R} ${y} Z`;
}

overlay.style.clipPath =
  `path(evenodd, 'M0 0 H${vw} V${vh} H0 Z ${roundedRectSubpath(hx, hy, hw, hh, 14)}')`;
```

Why this approach (instead of e.g. four overlay rectangles or a huge `box-shadow` on a placeholder div):

- the blur applies everywhere **except** the target — the highlighted element stays pixel-sharp,
- rounded corners can follow the target's border radius,
- the hole is genuinely transparent, so `clickTarget` steps can let events through.

On top of the hole, render a separate thin **highlight ring** (absolute-positioned div, accent border + glow shadow, `pointer-events: none`) to draw the eye.

Simpler alternative if you don't need blur or click-through: one div positioned over the target with `box-shadow: 0 0 0 9999px rgba(0,0,0,.55)` — five lines, good enough for many cases.

### 3. Measuring the target (and keeping it fresh)

On every step change, resolve the selector and measure it:

```js
const el = document.querySelector(step.target);
const r = el.getBoundingClientRect();
const hole = { top: r.top - PAD, left: r.left - PAD,
               width: r.width + 2 * PAD, height: r.height + 2 * PAD }; // PAD ≈ 6px
```

Keep the measurement up to date while the step is active:

- re-measure on `resize` and on `scroll` (with `capture: true`, so scrolls inside nested containers count),
- additionally poll on a short interval (~400 ms) to catch layout shifts that fire no event (images loading, animations, async data),
- throttle via `requestAnimationFrame`,
- optionally `el.scrollIntoView({ block: 'nearest' })` before measuring so the target is on screen.

If the selector matches nothing (element not rendered yet / feature-flagged away), fall back to the centered-card mode instead of showing a broken spotlight.

### 4. The explanation card

A fixed-position card (~340 px wide) with:

- a small uppercase kicker line ("Tour" / "Step 2 of 5"),
- title + short body copy (keep it to 1–3 sentences; nobody reads more mid-tour),
- progress dots (active dot stretched wider, e.g. 16 px vs 6 px),
- footer buttons: **Skip** (first step) / **Back**, and **Start tour** / **Next** / **Done**,
- an X close button.

**Positioning logic** — simple and sufficient:

1. Try to the **right** of the hole (`hole.right + 16px`), if the card fits in the viewport.
2. Else try to the **left**.
3. Else center it horizontally, clamped to the viewport with a 12 px margin.
4. Vertically: align with the top of the hole, clamped so the card never leaves the screen.
5. No target at all (welcome/final step) → center of the screen.

Animate `top`/`left` (and the clip-path) with a ~250 ms ease transition so the spotlight visibly *travels* between steps — this contributes a lot to the polished feel.

**Z-index layering:** dim layer < highlight ring < card (e.g. 200 / 201 / 202), above everything else in the app.

### 5. Keyboard & dismissal

- `Esc` → close the tour.
- `←` / `→` → previous / next step (disable `→` on `clickTarget` steps).
- Closing at any point counts as "seen" (see persistence below) — don't nag.

### 6. Persistence & auto-start

```js
const TOUR_KEY = 'myapp_dashboard_tour_v1'; // bump the version to re-show after big redesigns

// on first page visit, after auth/data has settled:
if (!localStorage.getItem(TOUR_KEY)) startTour();

// on finish OR dismiss:
localStorage.setItem(TOUR_KEY, '1');
```

Notes:

- Wrap `localStorage` access in `try/catch` (private mode / blocked storage).
- Guard the auto-start so it fires **once** per mount and only after loading states are done — otherwise the tour measures a skeleton screen.
- Always offer a manual **"Restart tour"** entry point (help menu, tutorials tab). The auto-start flag must never lock users out of the tour.

---

## Nice-to-haves that make a tour feel good

- **Demo data during the tour**: steps that showcase a list/portfolio inject fake demo objects so new users (with an empty account) still see a populated UI. Flagged internally (e.g. `__demo: true`) and removed when the tour ends.
- **Interactive steps** (`clickTarget`): letting the user perform the first real action themselves (upload, create) instead of just reading about it.
- **Glassmorphism styling** on the card (`backdrop-filter: blur(20px)`, subtle border, big soft shadow) to match the dimmed backdrop.
- The welcome step frames the effort: *"takes about 1 minute"* + a reminder that the tour is restartable.

## Pitfalls

- **Don't couple the tour to the DOM structure** — only `data-tour` attributes. Refactors then can't silently break the tour (worst case: a step falls back to the centered card).
- **Mobile**: fixed 340 px cards and side-positioning don't work on small screens. Either switch to a bottom-sheet card, or skip spotlighting entirely on narrow viewports.
- **`clip-path: path()` browser support** is fine in all modern browsers, but if you must support very old ones, use the `box-shadow` fallback.
- **Scrolling containers**: `getBoundingClientRect()` is viewport-relative, which is exactly what `position: fixed` overlays need — but only if you re-measure on scroll (capture phase!).
- Existing libraries ([driver.js](https://driverjs.com/), [react-joyride](https://react-joyride.com/), [shepherd.js](https://shepherdjs.dev/)) implement the same pattern. A hand-rolled version is ~200 lines and gives full control over styling and interactive steps; a library is fine if you just need the basics.
