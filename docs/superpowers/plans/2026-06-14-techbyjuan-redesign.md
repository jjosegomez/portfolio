# techbyjuan.com Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: use `superpowers:subagent-driven-development` or `superpowers:executing-plans` to implement task-by-task. The actual component code is generated through the **`impeccable` (craft)** skill for production-grade, non-generic quality, with **`animate`/`overdrive`** for motion — this plan defines structure, content, and acceptance per task; it does not pre-write component code (that would bypass the craft skill).

**Goal:** Rebuild the personal portfolio as a light, warm "engineering-paper" single-page site — copper accent, structured/indexed layout, beach portrait, résumé-grounded content, motion-forward — and deploy to Cloudflare Pages (`techbyjuan`).

**Architecture:** Keep Next.js static export + Tailwind. Replace all section components; content lives in typed `src/data/*` arrays (single source of truth). Design tokens (OKLCH, light) as CSS variables in `globals.css`, surfaced to Tailwind. Fonts via `next/font/google`. Motion via CSS (transforms/opacity) + IntersectionObserver scroll reveals; honor `prefers-reduced-motion`.

**Tech Stack:** Next.js (output: export), React, TypeScript, Tailwind, next/font (Bricolage Grotesque · Hanken Grotesk · JetBrains Mono), wrangler (Cloudflare Pages).

**Authoritative inputs:** design system → `.impeccable.md`; full content + exact copy/metrics → spec `docs/superpowers/specs/2026-06-14-techbyjuan-redesign-design.md` §4b. Build copy from those; **no firm/partner names; no family info; Vico stays off the site; phone off the site.**

---

### Task 0: Branch + assets
**Files:** repo root; `public/images/portrait.jpg`; `public/Juan_Gomez_Resume.pdf`
- [ ] Create feature branch: `git checkout -b feat/redesign-2026`
- [ ] Optimize beach portrait → `public/images/portrait.jpg` (web-sized, ~1200px tall): `sips -Z 1400 ~/Documents/Photos/headshot-2026-4x5.jpg --out public/images/portrait.jpg`
- [ ] Copy résumé: `cp ~/Documents/JobHunting/resume/Juan_Gomez_Resume.pdf public/Juan_Gomez_Resume.pdf`
- [ ] **Verify:** `ls -la public/images/portrait.jpg public/Juan_Gomez_Resume.pdf` both exist.

### Task 1: Design tokens + global styles
**Files:** Modify `src/app/globals.css`
- [ ] Define OKLCH light tokens: `--bg` (warm off-white ~`oklch(0.975 0.008 92)`), `--surface`, `--text` (~`oklch(0.24 0.014 60)`), `--muted`, `--line`, `--acc` copper `oklch(0.58 0.115 50)` (+ hover/strong variants); 4pt spacing scale (`--space-*`); radius scale (low). Neutrals tinted toward copper hue. No pure #000/#fff.
- [ ] Base styles: body bg/text/font, `::selection` copper tint, focus-visible ring (copper), `html { scroll-behavior: smooth }`.
- [ ] Motion utilities: reveal keyframes (opacity + translateY, ease-out-quart), stagger vars; `@media (prefers-reduced-motion: reduce)` disables transitions/animations.
- [ ] Wire tokens into Tailwind theme (extend colors/spacing to the CSS vars) or use vars directly.
- [ ] **Verify:** `npm run build` succeeds; a test element shows copper accent + warm bg.

### Task 2: Fonts + layout/metadata
**Files:** Modify `src/app/layout.tsx`
- [ ] Load via `next/font/google`: Bricolage Grotesque (display), Hanken Grotesk (body), JetBrains Mono (mono); expose as CSS vars; `display: 'swap'`.
- [ ] Metadata: title "Juan Gomez — Software Engineer"; description from résumé summary; OpenGraph (title/description/url/image = portrait or an OG card); `metadataBase` techbyjuan.com.
- [ ] **Verify:** `npm run build` succeeds; fonts referenced in output; lang="en".

### Task 3: Content data (single source of truth)
**Files:** Create `src/data/projects.ts`, `src/data/experience.ts`, `src/data/stack.ts`, `src/data/archive.ts`
- [ ] Typed arrays populated **verbatim from spec §4b**: `projects` (Trinity, Mia Fit, Memex, Vilar — name, role, blurb, tags, optional url); `experience` (Jabil w/ metrics, Medtronic, Eversana — company, title, location, dates, bullets[]); `stack` (groups: Languages / Agentic AI / AI-Assisted Dev / Frameworks & Cloud / Quality & Delivery); `archive` (Prometheus, FirstLand, Pac-Man AI, Facial Recognition, SupremeBot, Technical Analysis App).
- [ ] **Verify:** `npx tsc --noEmit` passes; no firm/partner names present (`grep -iE "lever|ábril|abril|álvarez" src/data` → empty).

### Tasks 4–11: Components (built via `impeccable craft`)
For each: invoke `impeccable craft` with `.impeccable.md` context; consume data from `src/data/*`; apply the design system (copper accent ≤10%, indexed structure, mono meta labels, hairlines, asymmetry); add motion (entrance/scroll-reveal + considered hover) honoring reduced-motion. **Acceptance for every component:** renders in dev server, `npm run build` passes, `npx tsc --noEmit` clean, keyboard-navigable, AA contrast.

- [ ] **Task 4 — `Navbar.tsx`**: minimal; name/mark left, section links + résumé/contact right; scroll-aware; mobile menu.
- [ ] **Task 5 — `Hero.tsx`**: meta bar (name · "FULL-STACK · AI · FINANCE SYSTEMS" · availability dot); headline "I build software end to end." (copper period); sub; lead (Colombian-American; Jabil AI-agent line; ships products; GT incoming); CTAs (View work / Résumé→/Juan_Gomez_Resume.pdf / GitHub); **beach portrait** framed w/ mono caption + copper index tick; orchestrated staggered load reveal = the signature moment.
- [ ] **Task 6 — `Stack.tsx`**: grouped toolkit, mono group labels; restrained.
- [ ] **Task 7 — `SelectedWork.tsx`**: indexed cards (01–04) Trinity/Mia Fit/Memex/Vilar; title, role, blurb, tags, link/arrow; scroll-reveal stagger; hover micro-interaction (no >1px side-stripes, no gradient text).
- [ ] **Task 8 — `Archive.tsx`**: compact mono list of older projects; understated.
- [ ] **Task 9 — `Experience.tsx`**: timeline; Jabil flagship + metrics (96% / 6 analysts / 53 cases / A.G.E.N.T. / 3 apps), Medtronic, Eversana.
- [ ] **Task 10 — `About.tsx`**: personal first-person (Colombian-American, USF→GT OMSCS, bilingual, cyclist, Google DSC); identity signals (Tampa; Permanent US Resident, no sponsorship). No family info.
- [ ] **Task 11 — `Contact.tsx` / footer**: email `jjgomezswe@gmail.com`, LinkedIn `/in/jjgomezswe`, GitHub `jjosegomez`, résumé; small colophon. No phone.

### Task 12: Assemble page + global motion
**Files:** Modify `src/app/page.tsx`; delete `src/components/{Building,SkillsMarquee,Projects}.tsx` (replaced)
- [ ] Compose: Navbar → Hero → Stack → SelectedWork → Archive → Experience → About → Contact.
- [ ] Wire scroll-reveal (shared IntersectionObserver hook) across sections; verify stagger + reduced-motion.
- [ ] **Verify:** `npm run build`; run `npm run dev`, scroll the whole page — reveals fire once, no jank, copper used sparingly.

### Task 13: Polish + audit
- [ ] Run `impeccable` polish pass over the assembled site (spacing rhythm, type hierarchy, alignment, AI-slop check).
- [ ] Run `audit` (a11y/perf/responsive): fix P0/P1. Targets: Lighthouse ≥95 perf+a11y, AA contrast, full keyboard nav, mobile layout adapts (not amputated).
- [ ] **Verify:** audit report clean of P0/P1; test `prefers-reduced-motion` (macOS Reduce Motion) disables animation.

### Task 14: Verify build + visual check
- [ ] `npm run build` → `out/` generated, no errors.
- [ ] Serve `out/` locally (or `npm run dev`); confirm hero, all sections, portrait, résumé link, copper accent render correctly on desktop + a narrow viewport.

### Task 15: Deploy to Cloudflare Pages
- [ ] `npx wrangler pages deploy out --project-name techbyjuan --branch <preview-or-main>` → preview URL first.
- [ ] Review preview URL; if good, deploy to production (the `techbyjuan` project already maps to techbyjuan.com).
- [ ] **Verify:** `curl -sI https://techbyjuan.com` → 200; visual check live.

### Task 16: Commit / integrate (on Juan's go)
- [ ] On `feat/redesign-2026`, commit changes (incl. `.impeccable.md`, `.gitignore`, docs/specs+plans, deleted old components). **Do not push/merge to main without Juan's say-so** (per his commit-when-asked rule).
- [ ] Offer PR or fast-forward merge per `superpowers:finishing-a-development-branch`.

---

## Self-review
- **Spec coverage:** hero, stack, selected work, archive, experience, about, contact (§4 IA) → Tasks 5–11 ✓; design system (§3/.impeccable.md) → Tasks 1–2 ✓; résumé content + metrics (§4b) → Task 3 + 7/9 ✓; motion priority (Telegram refs) → Tasks 1/5/12/13 ✓; a11y/perf (§6) → Task 13 ✓; résumé+email resolved (§7) → Task 0/11 ✓; deploy CF Pages (§5) → Task 15 ✓.
- **Placeholders:** none — open content items resolved; copy sourced from spec §4b (referenced, not duplicated, to stay DRY within the same repo).
- **Consistency:** data shapes defined in Task 3 are consumed by Tasks 6–9; component/file names consistent; deploy command matches reference_techbyjuan_hosting.md.
- **Adaptation note:** frontend redesign → verification is build + typecheck + visual + a11y audit (not unit tests), per project testing-strategy-adapts rule.
