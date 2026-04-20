# Portfolio Update — ContextForge Addition & UI Polish

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ContextForge as a featured project, update related site sections from resume content, and replace all gradient title text with polished solid colors.

**Architecture:** Single-source data model in `src/data/resume.ts` — all content changes go there. UI color changes touch `src/index.css` (remove `.gradient-text` or replace its definition) and `src/components/Projects.tsx` (per-card color themes). No new components required.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v3, Framer Motion, Vite

---

## Design Decisions

### Gradient Removal
- **Hero "Patel"**: Replace `gradient-text` class with `text-primary-500` (`#088395` vivid teal)
- **About subtitle**: Replace `gradient-text` class with `text-primary-300` (`#7AB2B2` soft teal)
- The `.gradient-text` CSS class itself should be removed from `index.css`

### Project Card Color Themes
Each featured card uses one solid accent color throughout (border, metrics, tags, bottom bar, dots):

| Card | Color | Hex |
|------|-------|-----|
| ContextForge (new, position 1) | Teal | `#088395` / `#7AB2B2` |
| LLM-Powered RAG Chatbot (position 2) | Amber | `#E5A44E` / `#EFBF7A` |
| Fine-Tuning Large Language Models (position 3) | Violet | `#8B5CF6` / `#C4B5FD` |

No gradient on any title text, heading, or metric value. Decorative card bottom bars may use a subtle same-hue gradient (e.g. `#088395 → #7AB2B2`) as a visual polish element only — they are not text.

---

## Content Changes

### `src/data/resume.ts`

**Add ContextForge project** (insert as first item in `projects` array, `featured: true`):
```ts
{
  name: "ContextForge — LLM Context Analytics Platform",
  tech: ["FastAPI", "DuckDB", "Celery", "OpenAI", "Next.js", "Docker"],
  period: "Jan 2026 – Apr 2026",
  link: "https://github.com/raj-013/ContextForge",
  featured: true,
  metrics: [
    { value: "30%", label: "Token Reduction" },
    { value: "100+", label: "Context Variants" },
  ],
  bullets: [
    "Built a self-hosted LLM context analytics platform (69 modules, 216 tests) to measure Quality-Per-Token (QPT), reducing unnecessary token usage by 20–30%.",
    "Developed a FastAPI backend with PostgreSQL metadata storage, DuckDB analytics, MinIO/Parquet trace storage, and Celery workers for async experiment execution.",
    "Implemented a Next.js dashboard, Python CLI, LangChain callback handler, and OpenAI SDK wrapper to ingest traces, analyze token cost and waste, and compare context strategies end-to-end.",
    "Added experiment evaluation and GitHub regression gating to measure QPT, enabling before/after comparison of context policies on benchmark workflows.",
  ],
}
```

**Move "Real-Time Predictive Maintenance"** from `featured: true` to `featured: false` (demote to "More Projects" so featured grid stays at 3).

**Update skills** — add to existing categories based on both resumes:
- `Languages` category: add `"TypeScript"` (from SDE resume)
- `Data & Libraries` category: add `"DuckDB"`, `"OpenSearch"` (from both resumes)
- `Backend` — add new category `"Backend & APIs"`: `["FastAPI", "Django", "REST APIs", "Celery"]`

**Update Hero stats** in `Hero.tsx`:
- `{ value: '7', label: 'Projects Built' }` → `{ value: '8', label: 'Projects Built' }`

### `src/components/About.tsx`
Update About body text to mention ContextForge (already the most recent production project):
- Replace: `"I'm passionate about bridging the gap between ML research and production-ready software."`
- With: `"Most recently I built ContextForge, an LLM context analytics platform for measuring token efficiency in production RAG systems. I'm passionate about bridging the gap between ML research and production-ready software."`

---

## UI Changes

### `src/index.css`
Remove the `.gradient-text` class entirely:
```css
/* DELETE this block: */
.gradient-text {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary-50 to-accent-400;
}
```

### `src/components/Hero.tsx`
Line 50: `<span className="gradient-text">Patel</span>`
→ `<span className="text-primary-500">Patel</span>`

### `src/components/About.tsx`
Line 18: `<span className="gradient-text">at the intersection...</span>`
→ `<span className="text-primary-300">at the intersection...</span>`

### `src/components/Projects.tsx`
Replace the `featuredGradients` and `featuredAccents` arrays with a single `featuredThemes` array that holds per-card color config for border, header bg, metric text, tag bg/text/border, dot color, and bottom bar:

```ts
const featuredThemes = [
  {
    // ContextForge — Teal
    border: 'border-[#088395]/40',
    headerBg: 'bg-[#088395]/10',
    bar: 'from-[#088395] to-[#7AB2B2]',
    metricText: 'text-[#7AB2B2]',
    tagBg: 'bg-[#088395]/10 text-[#7AB2B2] border-[#088395]/25',
    dot: 'bg-[#088395]/70',
  },
  {
    // RAG Chatbot — Amber
    border: 'border-[#E5A44E]/35',
    headerBg: 'bg-[#E5A44E]/10',
    bar: 'from-[#E5A44E] to-[#EFBF7A]',
    metricText: 'text-[#EFBF7A]',
    tagBg: 'bg-[#E5A44E]/10 text-[#EFBF7A] border-[#E5A44E]/25',
    dot: 'bg-[#E5A44E]/70',
  },
  {
    // Fine-Tuning — Violet
    border: 'border-[#8B5CF6]/35',
    headerBg: 'bg-[#8B5CF6]/10',
    bar: 'from-[#8B5CF6] to-[#C4B5FD]',
    metricText: 'text-[#C4B5FD]',
    tagBg: 'bg-[#8B5CF6]/10 text-[#C4B5FD] border-[#8B5CF6]/25',
    dot: 'bg-[#8B5CF6]/70',
  },
];
```

Apply `theme.border`, `theme.headerBg`, `theme.metricText`, `theme.tagBg`, `theme.dot`, and `theme.bar` to each card's respective JSX elements by index. Remove all uses of old `featuredGradients` and `featuredAccents`.

**"New" badge** on ContextForge (index 0 only):
```tsx
{index === 0 && (
  <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#088395]/15 border border-[#088395]/35 text-[#7AB2B2] font-mono">
    ✦ New
  </span>
)}
```

### `src/components/Skills.tsx`
Update `categoryColors` to add entry for the new `"Backend & APIs"` category:
```ts
'Backend & APIs': 'bg-primary-500/15 text-primary-300 border-primary-500/20',
```
Update `categoryIcons` similarly:
```ts
'Backend & APIs': '⚡',
```

---

## Files Changed
| File | Change |
|------|--------|
| `src/data/resume.ts` | Add ContextForge, update skills, demote Predictive Maintenance |
| `src/index.css` | Remove `.gradient-text` class |
| `src/components/Hero.tsx` | `gradient-text` → `text-primary-500` on "Patel"; update stat count |
| `src/components/About.tsx` | `gradient-text` → `text-primary-300`; add ContextForge mention |
| `src/components/Projects.tsx` | Replace gradient arrays with `featuredThemes`; add "New" badge |
| `src/components/Skills.tsx` | Add `"Backend & APIs"` color + icon entries |

---

## Out of Scope
- No new components or routes
- No changes to Education, Experience, Contact, or Footer
- No Tailwind config changes (violet used via arbitrary values `[#8B5CF6]`)
- No changes to animation or layout
