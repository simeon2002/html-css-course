# Responsive Design Methodology (Desktop-First)

## 1. Build the fluid foundation first (before any media queries)
- Units: `rem`/`em` everywhere (font-size, spacing, sizing) — not `px`. Respects the user's browser zoom/font-size setting.
- Images: `width: 100%` (or `max-width: 100%`) so they scale with their container.
- Layout: `max-width` containers (not fixed px width) + flexbox/grid so content reflows naturally.
- Define a font-size scale and a spacing scale up front (e.g. 10/12/14/16/18/20/24/30/36/44/52/62/74/86/98px font sizes, 2/4/8/12/16/24/32/48/64/80/96/128px spacing) and stick to it everywhere — this is what makes visual hierarchy consistent without having to eyeball every value.
- Styling layers, in order of preference: utility classes (one-off visual tweaks, e.g. `.margin-bottom-lg`) → helper/layout classes (`.grid--center-v`, `.center-text`) → component classes (`.hero-btns`, `.step-number`) → one-off inline overrides only if nothing else fits.

## 2. Choose breakpoints
- 5–10 total, not more — diminishing returns and a maintenance headache past that.
- Pick by BOTH: common device-class widths (phone / tablet / landscape-tablet / small-desktop) AND wherever *this specific design* visually starts to break.
- Use `em` in `@media`, never `px` or `rem`. Media query units are always relative to the browser's default (16px) font-size regardless of any `html { font-size }` change elsewhere on the page — so `em` respects a user's browser zoom/font preference the way `px` never will.

## 3. At each breakpoint, run three checks
Not mutually exclusive — a single breakpoint often needs more than one of these at once.

1. **Does everything look uniformly too big for this viewport?**
   → Drop the root `html` font-size (as a `%`, not `px`, so it stays relative to the browser default). Scales every `rem` value on the page proportionally in one line. Blunt tool: can't create asymmetric changes.
2. **Does one specific element's hierarchy look off relative to everything else** (its font-size or spacing needs to shrink/grow *disproportionately*, not just in step with everything else)?
   → Override that element/section directly.
3. **Does the layout itself need to restructure** (columns collapsing to a stack, a box's width changing, flex-direction flipping)?
   → Override directly — root font-size can never do this.

**Rule of thumb:** about to hand-edit many unrelated selectors by roughly the same ratio? That's a root font-size job instead. Only one or two elements look wrong, or a grid/flex structure needs to change? Targeted override.

## Utility/helper classes vs. media queries
Utility classes (`.margin-bottom-lg`, `.center-text`, etc.) get applied once in HTML for one-off instances at build time. Don't override them inside `@media` — that would affect every unrelated element using that class across the whole page. Target the specific component class instead.

## Quick self-check when something feels off
- Font-size wrong relative to everything around it → check step 3.2 (element-specific override), not root font-size.
- Whole section feels cramped/too spacious after a layout change (e.g. going from 3 columns to 1) → padding/margin changes here are often *asymmetric* (top shrinks less than bottom, etc.) — that's a sign it correctly needed a targeted override, not root scaling. Root font-size can only ever shrink everything by the same ratio.
- Only touch this file's mental model, not the specific pixel values — breakpoint numbers and root font-size percentages are project-specific; the three-check process is what transfers to the next project.
