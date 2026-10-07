# Portfolio Update — ContextForge Addition & UI Polish Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add ContextForge as first featured project, update skills from resumes, replace gradient title text with polished solid colors, and apply per-card color themes (teal/amber/violet) to the featured projects grid.

**Architecture:** All content changes flow through the single data file `src/data/resume.ts`. UI color changes touch `src/index.css` (remove `.gradient-text`), `Hero.tsx`, `About.tsx`, `Projects.tsx` (new `featuredThemes` array + badge), and `Skills.tsx` (new category). No new components or routes required.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v3 (JIT), Framer Motion, Vite

---

### Task 1: Add ContextForge to data + update skills

**Files:**
- Modify: `src/data/resume.ts`

- [ ] **Step 1: Insert ContextForge as first project (featured:true)**

Open `src/data/resume.ts`. The `projects` array starts at line 123. Insert the following as the very first entry (before `LLM-Powered RAG Chatbot`):

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
    },
```

- [ ] **Step 2: Demote Real-Time Predictive Maintenance**

In `src/data/resume.ts`, find the `Real-Time Predictive Maintenance` project entry (around line 157 before the insert, ~line 172 after). Change its `featured: true` to `featured: false`.

Before:
```ts
      featured: true,
      metrics: [
        { value: "92%", label: "Detection Accuracy" },
```

After:
```ts
      featured: false,
      metrics: [
        { value: "92%", label: "Detection Accuracy" },
```

- [ ] **Step 3: Update Languages skill category**

Find `{ category: "Languages", skills: ["Python", "Java"] }` and add `"TypeScript"`:

```ts
    {
      category: "Languages",
      skills: ["Python", "Java", "TypeScript"],
    },
```

- [ ] **Step 4: Update Data & Libraries skill category**

Find `{ category: "Data & Libraries", skills: [...] }` and add `"DuckDB"` and `"OpenSearch"` at the end:

```ts
    {
      category: "Data & Libraries",
      skills: [
        "NumPy",
        "Pandas",
        "PySpark",
        "Apache Kafka",
        "Elasticsearch",
        "DuckDB",
        "OpenSearch",
      ],
    },
```

- [ ] **Step 5: Add Backend & APIs skill category**

After the closing brace of the `Tools` category entry (currently the last item in `skills`), add a new entry before the closing `]` of the skills array:

```ts
    {
      category: "Backend & APIs",
      skills: ["FastAPI", "Django", "REST APIs", "Celery"],
    },
```

- [ ] **Step 6: Commit**

```bash
cd "D:\Raj FT26\portfolio"
git add src/data/resume.ts
git commit -m "feat: add ContextForge project, demote Predictive Maintenance, update skills"
```

---

### Task 2: Remove `.gradient-text` CSS class

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Delete the `.gradient-text` block**

In `src/index.css`, remove lines 41–43. The block to delete is:

```css
  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-primary-300 via-primary-50 to-accent-400;
  }
```

After deletion, `@layer components` should go directly from the opening brace to `.glass-card`.

- [ ] **Step 2: Commit**

```bash
git add src/index.css
git commit -m "style: remove gradient-text CSS class"
```

---

### Task 3: Fix Hero — replace gradient on "Patel", update stat count

**Files:**
- Modify: `src/components/Hero.tsx`

- [ ] **Step 1: Replace gradient-text on "Patel"**

Line 50 — change:
```tsx
          <span className="gradient-text">Patel</span>
```
To:
```tsx
          <span className="text-primary-500">Patel</span>
```

- [ ] **Step 2: Update Projects Built stat**

Line 114 — change:
```tsx
            { value: '7', label: 'Projects Built' },
```
To:
```tsx
            { value: '8', label: 'Projects Built' },
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.tsx
git commit -m "style: replace Patel gradient with solid teal, update project count to 8"
```

---

### Task 4: Fix About — replace gradient on subtitle, add ContextForge mention

**Files:**
- Modify: `src/components/About.tsx`

- [ ] **Step 1: Replace gradient-text on subtitle**

Line 18 — change:
```tsx
            <span className="gradient-text">at the intersection of ML &amp; Software Engineering</span>
```
To:
```tsx
            <span className="text-primary-300">at the intersection of ML &amp; Software Engineering</span>
```

- [ ] **Step 2: Add ContextForge mention to the second body paragraph**

Find the second `<p>` tag (around line 33) whose content begins `Currently at`. Replace the entire paragraph content:

Before:
```tsx
              <p>
                Currently at <span className="text-white font-medium">Emotionall</span> as Lead ML Engineer,
                I build and deploy production AI systems — from GPU-accelerated inference services
                to evaluation pipelines that ensure reliable model behavior. I'm passionate about
                bridging the gap between ML research and production-ready software.
              </p>
```

After:
```tsx
              <p>
                Currently at <span className="text-white font-medium">Emotionall</span> as Lead ML Engineer,
                I build and deploy production AI systems — from GPU-accelerated inference services
                to evaluation pipelines that ensure reliable model behavior. Most recently I built{' '}
                <span className="text-white font-medium">ContextForge</span>, an LLM context analytics
                platform for measuring token efficiency in production RAG systems. I'm passionate about
                bridging the gap between ML research and production-ready software.
              </p>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/About.tsx
git commit -m "style: replace About subtitle gradient with solid teal, add ContextForge mention"
```

---

### Task 5: Projects — per-card color themes + "New" badge

**Files:**
- Modify: `src/components/Projects.tsx`

- [ ] **Step 1: Replace featuredGradients and featuredAccents with featuredThemes**

Remove lines 8–18 (the two `const` arrays) entirely and replace with:

```ts
const featuredThemes = [
  {
    // ContextForge — Teal
    hoverBorder: 'hover:border-[#088395]/40',
    headerBg: 'bg-[#088395]/10',
    bar: 'from-[#088395] to-[#7AB2B2]',
    metricText: 'text-[#7AB2B2]',
    tagBg: 'bg-[#088395]/10 text-[#7AB2B2] border-[#088395]/25',
    dot: 'bg-[#088395]/70',
  },
  {
    // RAG Chatbot — Amber
    hoverBorder: 'hover:border-[#E5A44E]/35',
    headerBg: 'bg-[#E5A44E]/10',
    bar: 'from-[#E5A44E] to-[#EFBF7A]',
    metricText: 'text-[#EFBF7A]',
    tagBg: 'bg-[#E5A44E]/10 text-[#EFBF7A] border-[#E5A44E]/25',
    dot: 'bg-[#E5A44E]/70',
  },
  {
    // Fine-Tuning — Violet
    hoverBorder: 'hover:border-[#8B5CF6]/35',
    headerBg: 'bg-[#8B5CF6]/10',
    bar: 'from-[#8B5CF6] to-[#C4B5FD]',
    metricText: 'text-[#C4B5FD]',
    tagBg: 'bg-[#8B5CF6]/10 text-[#C4B5FD] border-[#8B5CF6]/25',
    dot: 'bg-[#8B5CF6]/70',
  },
];
```

- [ ] **Step 2: Declare theme variable inside the featured map**

Inside the `featured.map((project, index) => (` callback (line 41), add the following as the first line of the callback body, before the `<AnimatedSection>`:

```ts
const theme = featuredThemes[index] ?? featuredThemes[0];
```

Since `map` callbacks cannot have statements if using arrow function `=>` with implicit return, convert to explicit return block:

```tsx
{featured.map((project, index) => {
  const theme = featuredThemes[index] ?? featuredThemes[0];
  return (
    <AnimatedSection key={project.name} delay={index * 0.12}>
      ...
    </AnimatedSection>
  );
})}
```

- [ ] **Step 3: Update outer card div — per-card hover border**

Change:
```tsx
                className="group glass-card h-full flex flex-col overflow-hidden border border-surface-700/50 hover:border-primary-500/40 transition-colors duration-150 rounded-2xl"
```
To:
```tsx
                className={`group glass-card h-full flex flex-col overflow-hidden border border-surface-700/50 ${theme.hoverBorder} transition-colors duration-150 rounded-2xl`}
```

- [ ] **Step 4: Update header div — use theme.headerBg and add "New" badge**

Change the gradient header div opening and its first child:

Before:
```tsx
                <div className={`relative h-32 bg-gradient-to-br ${featuredGradients[index]} p-6 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-surface-400 font-mono bg-surface-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                      {project.period}
                    </span>
```

After:
```tsx
                <div className={`relative h-32 ${theme.headerBg} p-6 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-surface-400 font-mono bg-surface-900/60 backdrop-blur-sm px-2.5 py-1 rounded-md">
                        {project.period}
                      </span>
                      {index === 0 && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#088395]/15 border border-[#088395]/35 text-[#7AB2B2] font-mono">
                          ✦ New
                        </span>
                      )}
                    </div>
```

The closing `</div>` of `flex items-center justify-between` and the rest of the header (GitHub link `<a>`, bottom bar `<div>`) remain unchanged structurally, except:

- [ ] **Step 5: Update bottom bar — use theme.bar**

Change:
```tsx
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${featuredAccents[index]} opacity-60 group-hover:opacity-100 transition-opacity duration-150`} />
```
To:
```tsx
                  <div className={`absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r ${theme.bar} opacity-60 group-hover:opacity-100 transition-opacity duration-150`} />
```

- [ ] **Step 6: Update metric value — use theme.metricText**

Change:
```tsx
                          <div className="text-lg font-bold text-primary-400">{m.value}</div>
```
To:
```tsx
                          <div className={`text-lg font-bold ${theme.metricText}`}>{m.value}</div>
```

- [ ] **Step 7: Update bullet dot — use theme.dot**

Change:
```tsx
                        <span className="w-1 h-1 rounded-full bg-primary-500/50 mt-2 shrink-0" />
```
To:
```tsx
                        <span className={`w-1 h-1 rounded-full ${theme.dot} mt-2 shrink-0`} />
```

- [ ] **Step 8: Update tech tags — use theme.tagBg**

Change:
```tsx
                      <span
                        key={t}
                        className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary-500/10 text-primary-300 border border-primary-500/15"
                      >
```
To:
```tsx
                      <span
                        key={t}
                        className={`text-xs font-mono px-2.5 py-1 rounded-md border ${theme.tagBg}`}
                      >
```

- [ ] **Step 9: Commit**

```bash
git add src/components/Projects.tsx
git commit -m "feat: apply per-card color themes (teal/amber/violet) and New badge to featured projects"
```

---

### Task 6: Skills — add Backend & APIs category color and icon

**Files:**
- Modify: `src/components/Skills.tsx`

- [ ] **Step 1: Add Backend & APIs to categoryColors**

In `categoryColors` (lines 7–13), add a new entry after the `'Tools'` line:

Before:
```ts
  'Tools': 'bg-surface-500/15 text-surface-300 border-surface-500/20',
};
```
After:
```ts
  'Tools': 'bg-surface-500/15 text-surface-300 border-surface-500/20',
  'Backend & APIs': 'bg-primary-500/15 text-primary-300 border-primary-500/20',
};
```

- [ ] **Step 2: Add Backend & APIs to categoryIcons**

In `categoryIcons` (lines 16–23), add after the `'Tools'` line:

Before:
```ts
  'Tools': '🔧',
};
```
After:
```ts
  'Tools': '🔧',
  'Backend & APIs': '⚡',
};
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Skills.tsx
git commit -m "style: add Backend & APIs category color and icon to Skills component"
```

---

### Task 7: Build, verify, and push

- [ ] **Step 1: Run TypeScript + Vite build**

```powershell
cd "D:\Raj FT26\portfolio"
npm run build
```

Expected: Exits with code 0. Output ends with something like `✓ built in Xs`. No TypeScript errors.

- [ ] **Step 2: Verify no remaining gradient-text usages in src/**

```powershell
Select-String -Path "D:\Raj FT26\portfolio\src" -Pattern "gradient-text" -Recurse
```

Expected: 0 results (empty output).

- [ ] **Step 3: Push all commits to GitHub**

```bash
cd "D:\Raj FT26\portfolio"
git push origin master
```

Expected: Pushes the 6 feature commits cleanly on top of the spec commit already pushed.
