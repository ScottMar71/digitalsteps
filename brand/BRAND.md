# Digital Steps — Brand Pack v1

Teaching-led IT and digital services. Norfolk, England.
Strapline: **Technology made simple. Confidence built step by step.**

---

## 1. Positioning

**Who we are for.** People of all ages and abilities who want to feel confident with technology: complete beginners, returners, small business owners, and anyone curious about AI.

**What we do.** Beginner computer tuition, digital skills training, AI education, business IT training, website development, app building.

**What we believe.** Technology should be accessible to everyone. Nobody should feel stupid for asking.

**One-line promise.** *We take the next step with you.*

**Personality (in order).** Patient → Clear → Warm → Quietly confident. Never clever at the reader's expense.

---

## 2. Voice

| Do | Don't |
|---|---|
| Short sentences. One idea each. | Jargon, acronyms without explanation |
| "You" and "we" | "Users", "clients", "solutions" |
| Name the fear, then remove it: *"No question is too small."* | Hype: "revolutionary", "cutting-edge", "unlock" |
| Gentle humour that laughs with the reader | Jokes about being bad with computers |
| Plain verbs: learn, build, fix, try | "Leverage", "empower" (show it, don't say it) |

**Headline pattern (borrowed from Brilean / Studio Nikita):** a plain sentence with one phrase highlighted.
Example: *"Technology, **one step at a time**."*

---

## 3. Colour

One warm paper, one ink, one bold accent. Nothing else at full strength.

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#F6F3EC` | Page background. Warm, not clinical. |
| `--paper-2` | `#EDE9DF` | Cards, inset panels, hover on paper. |
| `--line` | `#DAD5C8` | Hairlines, dividers, input borders. |
| `--ink` | `#1C1C1A` | Headlines, body text, primary buttons. |
| `--ink-soft` | `#5B5A55` | Secondary text, captions. (6.2:1 on paper) |
| `--ember` | `#E2561F` | **The accent.** Marks, highlights, focus rings, the "next step". |
| `--ember-deep` | `#B83E0F` | Accent used *as text* (links, small labels). 5.1:1 on paper. |

**Rules**
- Ember is a signal, not a theme. Max one ember element per viewport unless it is the logo (which carries two: the first step and the dot).
- Never set body text in ember; use `--ember-deep` for text.
- Ink text on ember passes AA (4.5:1) — an ember button must use ink text, never white.
- Dark sections are allowed (ink background, paper text) but only for short bands, never whole pages.

**Contrast (WCAG 2.2)**
- Ink on paper 15.4:1 ✔ · Ink-soft on paper 6.2:1 ✔ · Ember-deep on paper 5.1:1 ✔ · Ember on paper 3.4:1 ✔ (graphics / ≥24px text only).

---

## 4. Typography

**One family: Instrument Sans** (Google Fonts, variable). Open, humanist, friendly at large sizes, legible at small ones.

| Style | Size (desktop → mobile) | Weight | Tracking | Line-height |
|---|---|---|---|---|
| Display | 72 → 40px | 500 | −0.03em | 1.0 |
| H1 | 56 → 36px | 500 | −0.025em | 1.05 |
| H2 | 36 → 28px | 500 | −0.015em | 1.15 |
| Lede | 22 → 19px | 400 | 0 | 1.5 |
| Body | 18 → 17px | 400 | 0 | 1.6 |
| Label / kicker | 13px | 600 | +0.12em, uppercase | 1 |

**Rules**
- Body text is never smaller than 17px. Our readers are often over 60 or on a phone.
- Measure: 60–70 characters. `max-width: 36rem` on prose.
- Headlines use the two-tone pattern: whole line in `--ink`, the key phrase in `--ember-deep` *or* underlined with a 3px ember rule. Pick one per page.

---

## 5. Spacing, shape, layout

- Base unit 8px. Section padding 96px desktop / 56px mobile.
- Radius: pills (`999px`) for buttons and labels; `16px` for cards; `8px` for inputs.
- Buttons are at least 48px tall. Tap targets 44px minimum.
- Layout: generous left-aligned text columns. No centred paragraphs longer than two lines.
- Pill labels (Tokonoma): hairline border, ink text, uppercase 13px — used for categories and status, not decoration.

---

## 6. Motion

Calm by default.
- Allowed: fade-up on load (≤ 400ms, ease-out), hover lift of 2px, underline grows on hover, the ember dot in the logo gently "steps" once on page load.
- Not allowed: scroll-jacking, cursor followers, parallax, auto-playing video.
- Everything respects `prefers-reduced-motion: reduce`.

---

## 7. Accessibility baseline

- WCAG 2.2 AA throughout; AAA for body text contrast (we already exceed it).
- Visible focus ring: 3px ember, 3px offset, on every interactive element.
- Semantic landmarks, one `h1` per page, skip link on full pages.
- Text zoom to 200% without horizontal scroll.
- No information carried by colour alone (the ember "step" always has shape too).

---

## 8. Logo system

**Chosen: Option C — "Tile".** Options A and B are kept in `brand/logos/` for reference and previewed at `/brand`. All three share: the step motif, a single ember element, lowercase wordmark in Instrument Sans Medium.

### Option A — "Rise" (`option-a-rise.svg`)
One continuous line draws three steps and ends in an ember dot: *the next step*. Light, editorial, closest to the Brilean/Ravi feel.
Best for: website header, print letterhead. Weakest as a 16px favicon (the line gets thin) — use the dot-only variant there.

### Option B — "Stack" (`option-b-stack.svg`)
Three solid ascending blocks; the top block is ember. Bold, geometric, reads at any size.
Best for: favicon, app icon, social avatar, van/sign. Most confident of the three.

### Option C — "Tile" (`option-c-tile.svg`) — chosen
An ink rounded tile with three steps and an ember dot — an evolution of the original Digital Steps logo, so existing customers still recognise it. The first step is ember (*where you start*); the dot above the top step is ember (*the next step*). The middle and top steps are paper.
Best for: continuity with current materials; app-icon style contexts.

**Usage rules (all options)**
- Clear space: the height of one step on all sides.
- Minimum size: mark 24px; full lockup 120px wide.
- Mono versions: all-ink on paper, all-paper on ink. Never recolour the ember to anything else.
- Do not rotate, outline, add gradients or shadows, or set the wordmark in another typeface.

---

## 9. Imagery and illustration

- Photography: real people at real kitchen tables, natural light, hands on keyboards. No stock "happy office" shots.
- Illustration: the step motif only, drawn with the same stroke/radius as the logo. One illustration per screen.
- Icons: 1.5px stroke, rounded caps, ink only.

---

## 10. Applying the pack to the coming-soon page

- Paper background, ink type, the chosen mark at large scale (Brilean's "monogram at full scale").
- Headline in two tones with one highlighted phrase.
- One ember element: the mark's dot. Buttons are ink.
- Keep the humour, but it should reassure rather than perform: the reader should feel *"these people will be patient with me"*.
