# techbyjuan.com — Portfolio Redesign — Design Spec

**Date:** 2026-06-14
**Status:** Approved direction; spec for review before implementation
**Repo:** `~/Documents/GitHub/portfolio` (Next.js static export + Tailwind → Cloudflare Pages project `techbyjuan`)
**Design system:** see `.impeccable.md` (project root) — this spec assumes it.

## 1. Goal
Replace the stale navy/cream portfolio (which headlines paused projects and omits current work) with a distinctive, employer-facing site that positions Juan as a **well-rounded software engineer** (full-stack + AI products + enterprise finance systems) and **feels personal**, not a faceless résumé.

## 2. Audience & positioning
- **Audience:** employers, recruiters, eng managers arriving from LinkedIn/résumé; skim on desktop + mobile; decide in seconds.
- **Positioning:** versatile senior-leaning engineer who ships — at work (Jabil) and on his own. Not a narrow niche.
- **Tone:** technical & precise, confident, warm/human. First-person voice, lean into Colombian-American identity. No buzzword fluff.

## 3. Visual system (summary — full detail in `.impeccable.md`)
- **Theme:** LIGHT — warm "engineering paper" (OKLCH warm off-white, never pure white). (Dark mode is out of scope for v1.)
- **Accent:** a single warm **copper** (~`oklch(0.58 0.115 50)`), tuned for AA contrast on light paper; used sparingly (~10%): index numbers, the headline period, primary CTA, links, status dot.
- **Type:** Bricolage Grotesque (display) + Hanken Grotesk (body) + JetBrains Mono (technical/meta labels only). Loaded via `next/font/google`.
- **Layout language:** structured & grid-driven with *visible* precision — indexed sections (01–0n), hairline rules, mono meta labels, asymmetric hero, generous rhythm, low corner radius.
- **Motion:** one orchestrated load reveal (staggered, ease-out/quart), restrained scroll reveals; honor `prefers-reduced-motion`. No bounce.
- **Bans (from impeccable):** no navy/blue, no cyan-on-dark/purple-gradient, no gradient text, no >1px colored side-stripes, no decorative glassmorphism, no identical card-grid sameness.

## 4. Information architecture (single-page scroll)
1. **Hero** — name; meta bar (name · "FULL-STACK · AI · FINANCE SYSTEMS" · availability dot); headline "I build software end to end." (accent period); sub "Full-stack apps, AI products, and the systems behind enterprise finance."; lead (Colombian-American engineer in Tampa; sole dev of an AI-driven finance platform at Jabil; ships own products; MS CS @ Georgia Tech incoming); CTAs: View work / Résumé / GitHub; **beach portrait** (right, framed, mono caption + accent index tick).
2. **Stack** — grouped toolkit, mono-labeled: **Languages** (TypeScript, Python, Java, C#, SQL) · **Frameworks** (React, Next.js, Node.js, FastAPI, Express, Tailwind) · **AI/ML** (LLMs, RAG, AI agents, NLP, MCP) · **Data & Cloud** (Snowflake, PostgreSQL, Supabase, AWS, Docker, Git).
3. **Selected Work** — indexed cards, each with title, one-line role, concrete description (no client/firm names), tech tags, optional link:
   - **01 · Trinity** — AI legal co-pilot for law firms. Built end-to-end: case intake + classification engine, AI jurisprudence/regulation search (RAG), automated analysis + review UI lawyers use daily. Live with pilot firms. Tags: Next.js · TypeScript · Python · LLMs · RAG · Supabase.
   - **02 · Mia Fit** — headless e-commerce storefront: custom Next.js front end on a headless commerce backend with catalog, variants, cart. Designed + built from scratch. Tags: Next.js · TypeScript · Tailwind · Headless commerce.
   - **03 · Memex** — open-source npm package giving AI agents persistent, encrypted long-term memory + an MCP server for Claude/ChatGPT/other LLM tools. Shipped. Link: getmemex.dev. Tags: TypeScript · Node · npm · MCP.
   - **04 · Vilar Safety** — brand + marketing site for a safety-consulting business: design, build, deploy, working contact pipeline. Tags: Next.js · Tailwind · Forms. *(English Woods Publishing site available as an optional 05 or archive entry.)*
   - **Archive** (compact list) — older school/personal builds: Prometheus AITutor, FirstLand, Pac-Man AI, Facial Recognition, SupremeBot, Technical Analysis App.
4. **Experience** — timeline (reuse current content, restyled): Jabil — Financial Systems Developer II (2025–Now); Medtronic — Software Engineer I (2024–2025); Google DSC @ USF — Tech Lead (2023); Eversana Intouch — SWE Intern (2023).
5. **About** — personal: Colombian-American engineer in Tampa; USF CS grad; Georgia Tech OMSCS (MS CS, ML) incoming Fall 2026; "beyond the code" (bilingual EN/ES, cyclist, gamer, former Google DSC Tech Lead). **No family/partner info.**
6. **Contact / Footer** — email, LinkedIn (`/in/jjgomezswe`), GitHub (`jjosegomez`), résumé download; small colophon.

## 4b. Source content & proof points (from current résumé, `Juan_Gomez_Resume.pdf`, 2026-06-07)
Positioning: **well-rounded engineer whose standout strength is agentic AI** — lead broad, prove with these. Use these as the verbatim-accurate credibility backbone.

**Hero/summary hook:** AI-native engineer who architected & shipped a **Fortune-500 finance org's first production AI agent — solo — 6 global analysts at 96% accuracy**, while concurrently delivering three other production apps.

**Stack groups (use these, replaces §4.2 draft):**
- **Languages:** SQL, Python, TypeScript, JavaScript, Java, C#, C++
- **Agentic AI / LLM:** Snowflake Cortex (Agent/Analyst), AWS Bedrock, Claude, OpenAI, agent design & orchestration, RAG, prompt/context design, eval frameworks, DeepEval
- **AI-Assisted Dev:** Claude / Claude Code, Cursor, GitHub Copilot, Kiro
- **Frameworks & Cloud:** Next.js, FastAPI, Streamlit, React, Node.js, Supabase/PostgreSQL, Snowflake, AWS (Bedrock/EC2/S3), Azure (App Service, DevOps/CI-CD), Docker, Okta
- **Quality & Delivery:** Playwright, Vitest, AI eval suites, release validation, rollback/credential-rotation runbooks, row-level access, Agile/Scrum, Git

**Selected Work — accurate copy:**
- **01 Trinity (ViGo Legal)** — Founding Engineer, 2025–present. Production **multi-agent** AI legal platform, live pilot firms (NO firm names). Intake classification → RAG over Colombian jurisprudence (tri-source) → grounded drafting under strict **propose-then-approve human-in-the-loop**. LLM eval harness (DeepEval, 13 cases × 6 metrics) gating every retrieval/prompt change; subagent-driven dev w/ adversarial review (caught/fixed 7 pre-merge defects); hardened ingestion vs prompt injection. Tags: Next.js · TypeScript · Python · LLMs · RAG · Multi-agent.
- **02 Mia Fit** — headless e-commerce storefront (Next.js on headless commerce; catalog/variants/cart).
- **03 Memex** — open-source npm package: persistent encrypted memory for AI agents + MCP server. getmemex.dev.
- **04 Vilar Safety** — brand + marketing site, design→build→deploy, working contact pipeline.

**Experience — accurate bullets:**
- **Jabil — Financial Systems Developer II** (Apr 2025–present). Flagship: Jabil Finance's first production AI agent (Snowflake Cortex), solo — 9 views, 8 semantic models, orchestration + eval framework; 6 global analysts @ **96%** vs SAP/Cognos. AI eval suite (**53+ cases**) as release gate. Authored **A.G.E.N.T.** playbook (now internal consultant). Shipped **3 more prod/MVP apps concurrently** (Pillar II tax app — v1.1, zero cutover incidents, 10,835-row migration; AI File Manager — Claude Haiku/Bedrock; Next.js/FastAPI finance prototype). Owns end-to-end delivery (Okta, Docker, Azure CI/CD, row-level access).
- **Medtronic — Software Engineer I** (Mar 2024–Apr 2025). Full-stack + mfg-equipment integrations (Python, Ignition, SECS/GEM); custom **OPC UA module in Java** (Ignition SDK); MS SQL Server normalization redesign; FDA/Medtronic Validation Plans; Git/GitLab DevOps.
- **Eversana Intouch — SWE Intern** (Jun–Aug 2023). Redesigned live client sites (HTML/CSS/JS) for responsiveness/a11y; React+Node app lifting traffic & retention.

**Education:** Georgia Tech — M.S. CS (OMSCS), ML specialization, starting Fall 2026. USF — B.S. CS, 2020–2023, GPA 3.49.
**Involvement:** Google DSC @ USF — Tech Lead (2023–2024): 10+ workshops, 500+ students, mentored 10+, ran hackathons. SHPE — Mentor.
**Identity signals (employer-useful, include subtly):** Tampa, FL · Permanent US Resident (no sponsorship) · Bilingual EN/ES. (Phone: omit from public site.)

## 5. Technical approach
- Keep the existing **Next.js static export + Tailwind** setup (already wired to Cloudflare Pages). No framework change.
- **Rebuild components** in `src/components/`: `Navbar`, `Hero`, `Stack` (replaces `SkillsMarquee`), `SelectedWork` + `Archive` (replace `Building` + `Projects`), `Experience` (restyle), `About` (restyle + personal), `Contact`/`Footer`. Project + experience data in typed arrays (one source of truth per section).
- **Design tokens** as CSS custom properties (OKLCH) in `globals.css`, surfaced to Tailwind via theme config; semantic names (`--space-*`, color roles), 4pt spacing scale.
- **Fonts** via `next/font/google` (Bricolage Grotesque, Hanken Grotesk, JetBrains Mono).
- **Image:** final beach portrait optimized into `public/images/` (use `headshot-2026-4x5.jpg`); `next/image` not available in static export by default → use a well-sized `<img>` with width/height + `loading`/`decoding` attrs.
- **Build via `impeccable craft`** for production-grade quality.
- **Deploy:** `npm run build && npx wrangler pages deploy out --project-name techbyjuan --branch main`.

## 6. Accessibility & performance
- WCAG AA contrast on light theme; full keyboard nav + visible focus; `prefers-reduced-motion`; semantic landmarks; alt text on portrait; `<title>`/meta/OG updated.
- Lighthouse target ≥95 perf/a11y; system fonts fallback; no layout shift on font load (`font-display: swap` + size-adjust).

## 7. Content — RESOLVED from current résumé
- **Résumé PDF** — ✅ `~/Documents/JobHunting/resume/Juan_Gomez_Resume.pdf` (2026-06-07). Copy to `public/Juan_Gomez_Resume.pdf`; wire the Résumé button to it.
- **Contact email** — ✅ `jjgomezswe@gmail.com` (matches résumé). Optional swap to `hi@techbyjuan.com` if Juan prefers branded.
- **Impact metrics** — ✅ sourced from résumé (see §4b): 96% accuracy / 6 analysts / 53 eval cases / 10,835-row migration / 500+ students, etc.
- **Project copy** — drafted in §4b; Juan to confirm accurate + OK to publish (esp. Trinity: ViGo Legal name OK, NO pilot-firm names).
- **Open (optional):** final beach-photo crop; whether to feature English Woods as 05 vs archive.

## 8. Out of scope (v1)
Dark-mode toggle, blog/CMS, i18n, analytics dashboards, contact form backend (use mailto/links for v1 unless requested).

## 9. Open questions
- Include English Woods as a 5th selected project, or leave in archive?
- Single CTA email vs contact form?
- Keep "Archive" of school projects, or drop the oldest to keep focus tight?
