# CONTEXT — techbyjuan.com portfolio

**Last session:** 2026-06-15
**Stack:** Next.js 16 (static export) + Tailwind v4 → Cloudflare Pages project `techbyjuan`

## Current state
- Full redesign on branch **`feat/redesign-2026`** (committed): light/copper "engineering-paper" theme, résumé-grounded content, "Interactive System" motion — ⌘K command palette, scroll progress + section minimap, count-ups, kinetic hero (word reveal + copper underline draw + portrait parallax), View-Transition project expand, marquee Stack, cursor glow.
- ✅ **LIVE on production**: https://techbyjuan.com (promoted 2026-06-15 via `wrangler ... --branch main`; verified HTTP 200, old build gone). `main` fast-forwarded to the redesign + pushed to origin. Preview alias: https://redesign-preview.techbyjuan.pages.dev
- Hosting moved off Netlify → Cloudflare Pages (domain was locked to an old personal Netlify account). See memory `reference_techbyjuan_hosting`.

## What's next
1. ✅ DONE — promoted to production 2026-06-15.
2. Add **Microsoft experience** (awaiting Juan: program/role + dates) next to GDSC in `src/data/content.ts`, then redeploy.
3. **v2 (later, behind Trinity):** personal-brand "Work with me" + `/writing` section — see `~/Documents/GitHub/TechByJuan/`.

## Known tech debt
- `npm run lint`: react-hooks `set-state-in-effect` errors (Counter/ScrollProgress/CommandPalette) + many warnings from linting `out/`. Functional (build + live verified). Fix: add `out/` + `.next/` to eslint ignore; adjust the in-effect setState pattern.
- `hi@techbyjuan.com`: Email Routing enabled + MX/SPF/DKIM provisioned, but the `hi@`→jjgomezswe forwarding **rule** needs a CF token with **Email Routing Rules: Edit** (or 30-sec dashboard add).
- Rotate the `cfat_` Cloudflare token (pasted in chat).

## Key decisions
- 2026-06-15: techbyjuan = **personal-brand hub** (memory `project_techbyjuan_brand`). v1 employer portfolio built; v2 brand/lead-gen later. "Work with me" on techbyjuan; GAS = business backend.
- Design system locked in `.impeccable.md` (light, copper, Bricolage/Hanken/JetBrains).
