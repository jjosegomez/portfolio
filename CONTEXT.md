# CONTEXT — techbyjuan.com portfolio

**Last session:** 2026-07-13
**Stack:** Next.js 16 (static export) + Tailwind v4 → Cloudflare Pages project `techbyjuan`

## Current state
- **2026-07-11/13 — LLM/search visibility fix, SHIPPED + verified end-to-end.** Site was fully invisible to both AI crawlers and classic search (exact-name query lost to techbyjohan.com; zero index presence). Shipped (`11884c8`): own `robots.txt` (explicit Allow for GPTBot/ClaudeBot/PerplexityBot/CCBot/etc + Sitemap pointer), `/sitemap.xml` (Next metadata route), schema.org Person JSON-LD, IndexNow key + 202-accepted Bing submission. Then via a dedicated CDP-drivable "Vico Chrome" profile (see memory `reference_vico_chrome_profile`): Cloudflare's managed robots.txt disabled + every AI crawler in the per-crawler table verified **Allowed**; Google Search Console domain property verified (DNS TXT via Cloudflare) + sitemap submitted (status "Couldn't fetch" right after submit = normal pending-first-crawl, not an error). Re-probe visibility ~2026-07-27.
- **2026-06-22:** Selected Work **#04 swapped Vilar Safety → English Woods Publishing** (`src/data/content.ts`; accurate copy from the live project — static/Netlify/Forms, englishwoodspublishing.com). Built + deployed to CF Pages prod (`wrangler pages deploy out --project-name=techbyjuan --branch main`), verified live (HTTP 200, Vilar gone). Vilar left fully off (not archived). Commit `60db63c`.
- **2026-06-15 (pivot):** repositioned from employer-portfolio → **"Let's work together"** client/brand front door. Removed the Contact section (06); the nav CTA ("Let's work together!") + hero drive to the lead-gen form. **Proof-first IA:** Hero → 01 Selected Work → Archive → 02 Experience → 03 Stack → 04 About → 05 Let's work together. AI-first hero tagline; **lone-developer framing removed site-wide** (no "sole/one person"). Full UX+copy expert review applied (UX A−/Copy B+) — a11y fixes (inert panels, ⌘K focus trap, skip link, 44px targets), WCAG-AA copper, stronger cursor glow. **Lead capture LIVE & tested:** Web3Forms inbox form (`ProjectForm.tsx`, public key) + `cal.com/techbyjuan` booking link — submission lands in Gmail, not spam.
- Full redesign on branch **`feat/redesign-2026`** (committed): light/copper "engineering-paper" theme, résumé-grounded content, "Interactive System" motion — ⌘K command palette, scroll progress + section minimap, count-ups, kinetic hero (word reveal + copper underline draw + portrait parallax), View-Transition project expand, marquee Stack, cursor glow.
- ✅ **LIVE on production**: https://techbyjuan.com (promoted 2026-06-15 via `wrangler ... --branch main`; verified HTTP 200, old build gone). `main` fast-forwarded to the redesign + pushed to origin. Preview alias: https://redesign-preview.techbyjuan.pages.dev
- Hosting moved off Netlify → Cloudflare Pages (domain was locked to an old personal Netlify account). See memory `reference_techbyjuan_hosting`.

## What's next
1. **GitHub profile backlink** — `blog` field still empty; token lacks `user` scope (`gh auth refresh -h github.com -s user`, then set blog=techbyjuan.com + location=Tampa,FL).
2. **LinkedIn contact-info** — confirm techbyjuan.com is listed as the website.
3. Re-check GSC sitemap status (should flip from "Couldn't fetch" to "Success" after first crawl) + re-run the visibility probe ~2026-07-27.
4. 🔐 **Rotate the `cal_live_…` Cal.com API key** (pasted in chat 2026-06-15) — Cal.com → Settings → Developer → API Keys.
5. Decide **résumé visibility** — currently ⌘K-only; optionally add a quiet footer "Résumé" link for employers.
6. Add **Microsoft experience** (awaiting Juan: program/role + dates) next to GDSC in `src/data/content.ts`, then redeploy.
7. **v2 (later, behind Trinity):** personal-brand `/writing` section — see `~/Documents/GitHub/TechByJuan/`.

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
