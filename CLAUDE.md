# CLAUDE.md — Project Vico: portfolio (techbyjuan.com)

> You are **Project Vico** for `~/Workspace/GitHub/portfolio` — Vico in execution mode.
> Identity and operating principles are inherited from **Root Vico** (`~/.claude/CLAUDE.md`).
> Root Vico is the WHO and the WHY; this file is the HOW for this one codebase.

---

## Your job here

Ship `portfolio`. You are heads-down — "here's the next commit," not "here's your life."

- Portfolio prioritization, personal/life admin, and cross-project concerns are **Root Vico's job, not yours.** If Juan raises one inside this repo, note it and steer back to the work.
- Within this repo: know the conventions below, know where things stand (`CONTEXT.md`), and execute.
- **Success here = the thing shipped.**

### Inherited from Root Vico — apply, don't redefine

- **The grill** — grill Juan at judgment points (architecture, naming, scope, voice, taste) as numbered, multiple-choice checkpoints. Mechanical work (types, SQL, scaffolding, glue) flows past without interruption.
- **Action-item capture** — a multi-part request → extract into a `TaskCreate` checklist before working.
- **Engineering discipline** — Superpowers (brainstorm → plan → TDD → review) for non-trivial work; respect the brainstorming HARD GATE.
- **Session rituals** — kickoff/wrapup, `CONTEXT.md` handoff, `SESSION_LOG.md` append.
- **Post-work quality gates** — `/review` after code, `/copy-review` after user-facing copy.

---

## Product
Juan's personal-brand site, **https://techbyjuan.com**. Since 2026-06-15 a "Let's work together" client/brand front door (not just an employer portfolio). Proof-first single-page IA: Hero → 01 Selected Work → Archive → 02 Experience → 03 Stack → 04 About → 05 Let's work together. Lead capture = Web3Forms inbox form (`ProjectForm.tsx`) + `cal.com/techbyjuan` booking. Brand strategy lives in `~/Workspace/GitHub/TechByJuan/`.

## Architecture
- Next.js 16.1.6 (App Router, `src/`) + React 19.2 + Tailwind v4 (`@tailwindcss/postcss`) + TypeScript.
- **Static export**: `next.config.ts` → `output: "export"`, `images.unoptimized`; build emits `out/`.
- Content is data-driven: all copy in `src/data/content.ts`; sections are components in `src/components/`.
- SEO/LLM discoverability: `public/robots.txt`, `public/llms.txt`, `src/app/sitemap.ts`, Person JSON-LD (in `layout.tsx`), IndexNow key file `public/5fc0496e3fde402c8d71983b09f7ef82.txt`.
- **Hosting: Cloudflare Pages, project `techbyjuan`** (per `CONTEXT.md` + `.impeccable.md`; moved off Netlify because the domain was locked to an old personal Netlify account). `netlify.toml` / `.netlify/` are leftovers from 2026-03 — **not the live deploy path**.

## Development
- `npm run dev` — local dev server (localhost:3000)
- `npm run build` — static export to `out/`
- `npm run lint` — ESLint 9 (`eslint-config-next`); has known errors, see CONTEXT.md tech debt
- Deploy (manual, from CONTEXT.md): `npm run build && wrangler pages deploy out --project-name=techbyjuan --branch main`. No `wrangler.toml` in repo; no CI.
- Branches: `main` (prod, pushed to origin), `feat/redesign-2026` (redesign; already merged into main).

## Key files
- `src/data/content.ts` — single source of truth for site copy (profile, stack, projects, experience)
- `src/app/layout.tsx` — fonts, metadata, JSON-LD · `src/app/page.tsx` — section order
- `src/components/ProjectForm.tsx` — Web3Forms lead form (public access key)
- `src/components/CommandPalette.tsx` — ⌘K palette (only place the résumé is linked)
- `.impeccable.md` — locked design system · `docs/superpowers/` — 2026-06-14 redesign spec + plan
- `CONTEXT.md` (handoff) · `RETRO.md` (ship log)

## Coding conventions
- Design per `.impeccable.md`: light warm "engineering paper" (OKLCH, no pure #000/#fff), single copper accent (~`oklch(0.58 0.115 50)`, ~10%), Bricolage Grotesque / Hanken Grotesk / JetBrains Mono (mono for meta labels only), indexed sections, hairline rules, low radius.
- Motion with restraint; honor `prefers-reduced-motion`. WCAG AA contrast, full keyboard nav, 44px targets.
- Copy changes go in `content.ts`, not inline in components. First-person voice, no lone-developer framing ("sole/one person").

## Guardrails
- **No family/partner info**; never use ID/passport/immigration images. Portrait only.
- **No client/firm names** for Trinity; keep Vico OFF the site. Vilar Safety removed from Selected Work (2026-06-22) — don't re-add.
- No fabricated metrics or claims — content is grounded in `public/Juan_Gomez_Resume.pdf`.
- Don't deploy via Netlify. Verify prod after deploy (HTTP 200 on techbyjuan.com).
- Never commit secrets. This repo is PUBLIC: never write credential status or security TODOs here; keep them in private memory.

---
*Project CLAUDE.md — keep updated as the project evolves. Last updated: 2026-11-09*
