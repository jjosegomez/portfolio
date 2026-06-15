# CONTEXT — techbyjuan.com portfolio

**Last session:** 2026-06-15
**Stack:** Next.js 16 (static export) + Tailwind v4 → Cloudflare Pages project `techbyjuan`

## Current state
- **2026-06-15 (pivot):** repositioned from employer-portfolio → **"Let's work together"** client/brand front door. Removed the Contact section (06); the nav CTA ("Let's work together!") + hero drive to the lead-gen form. **Proof-first IA:** Hero → 01 Selected Work → Archive → 02 Experience → 03 Stack → 04 About → 05 Let's work together. AI-first hero tagline; **lone-developer framing removed site-wide** (no "sole/one person"). Full UX+copy expert review applied (UX A−/Copy B+) — a11y fixes (inert panels, ⌘K focus trap, skip link, 44px targets), WCAG-AA copper, stronger cursor glow. **Lead capture LIVE & tested:** Web3Forms inbox form (`ProjectForm.tsx`, public key) + `cal.com/techbyjuan` booking link — submission lands in Gmail, not spam.
- Full redesign on branch **`feat/redesign-2026`** (committed): light/copper "engineering-paper" theme, résumé-grounded content, "Interactive System" motion — ⌘K command palette, scroll progress + section minimap, count-ups, kinetic hero (word reveal + copper underline draw + portrait parallax), View-Transition project expand, marquee Stack, cursor glow.
- ✅ **LIVE on production**: https://techbyjuan.com (promoted 2026-06-15 via `wrangler ... --branch main`; verified HTTP 200, old build gone). `main` fast-forwarded to the redesign + pushed to origin. Preview alias: https://redesign-preview.techbyjuan.pages.dev
- Hosting moved off Netlify → Cloudflare Pages (domain was locked to an old personal Netlify account). See memory `reference_techbyjuan_hosting`.

## What's next
1. 🔐 **Rotate the `cal_live_…` Cal.com API key** (pasted in chat 2026-06-15) — Cal.com → Settings → Developer → API Keys.
2. Decide **résumé visibility** — currently ⌘K-only; optionally add a quiet footer "Résumé" link for employers.
3. Add **Microsoft experience** (awaiting Juan: program/role + dates) next to GDSC in `src/data/content.ts`, then redeploy.
4. **v2 (later, behind Trinity):** personal-brand `/writing` section — see `~/Documents/GitHub/TechByJuan/`.

## Known tech debt
- `npm run lint`: react-hooks `set-state-in-effect` errors (Counter/ScrollProgress/CommandPalette) + many warnings from linting `out/`. Functional (build + live verified). Fix: add `out/` + `.next/` to eslint ignore; adjust the in-effect setState pattern.
- `hi@techbyjuan.com`: Email Routing enabled + MX/SPF/DKIM provisioned, but the `hi@`→jjgomezswe forwarding **rule** needs a CF token with **Email Routing Rules: Edit** (or 30-sec dashboard add).
- Rotate the `cfat_` Cloudflare token (pasted in chat).
- 🔐 Rotate the `cal_live_…` Cal.com API key (pasted in chat 2026-06-15).
- Lead form: Web3Forms account is under **jjgomezswe@gmail.com**, so leads land in personal Gmail (change the account email to route via `hi@`). Résumé is now **only** in the ⌘K palette (both résumé buttons were repurposed).

## Key decisions
- 2026-06-15 (later): **pivoted to a "Let's work together" client/brand front door** — dropped the Contact section, repointed nav/hero CTAs to the lead-gen form, proof-first IA, AI-first tagline, removed lone-developer framing. Hybrid CTA = Web3Forms inbox form + Cal.com booking. Applied a full-site UX + copy expert review (UX A−/Copy B+).
- 2026-06-15: techbyjuan = **personal-brand hub** (memory `project_techbyjuan_brand`). v1 employer portfolio built; v2 brand/lead-gen later. "Work with me" on techbyjuan; GAS = business backend.
- Design system locked in `.impeccable.md` (light, copper, Bricolage/Hanken/JetBrains).
