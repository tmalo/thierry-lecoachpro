# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Professional coaching website for Thierry Malo (lecoachpro.fr). French-language site targeting tech managers and leaders. Built with Next.js 16 App Router, deployed on Netlify.

## Commands

- `npm run dev` — Dev server with Turbopack
- `npm run build` — Production build
- `npm run lint` — ESLint (flat config, v9)
- `npm run prettier` — Format with Prettier + Tailwind class sorting
- `npm run knip` — Dead code detection (unused files, exports, types, deps)

No test framework is configured.

## Architecture

### Routing (App Router)

All pages are statically generated (no API routes). French-language URL slugs:

- `/` — Homepage
- `/offres` — Services/offerings (4 coaching packages)
- `/contact` — Contact page with Cal.com booking integration
- `/coaching-approche-sensible-alignement` — Coaching methodology
- `/la-methode-2apex` — Book page
- `/temoignages` — Testimonials

Page-private components live in `_components/` subdirectories within their route folder.

### Data Model

**Offres (Services):** Defined in `src/lib/offres.ts` as typed TypeScript arrays. Each has a SKU identifier (e.g., `CSI-25-01`), pain points (`douleurs`), benefits (`benefices`), and modalities (`modalites`). `OffreDisplayed` extends `Offre` with `featured` and `collapsed` UI state.

**Testimonials:** Markdown files with gray-matter frontmatter in `/testimonials/`. Loaded via `src/lib/testimonials.ts` with caching. Format : frontmatter (offre, person, gender, job, date) → excerpt (1-2 phrases : arc avant/après + résultat ou verbatim fort, max 290 caractères) → `---` → sections H2 (Avant, Ce qui a changé, Résultats). L'excerpt doit rester court (référence : Stéphane = 213 car., Victor = 264 car., Mélanie = 289 car.).

**Raw testimonial responses:** Fichiers JSON à la racine nommés `[respondentId]_[offre].json`, contenant `answers[]` avec `question`/`answer`. Servent de source pour rédiger ou mettre à jour l'excerpt et les sections d'un fichier testimonial.

**Type definitions** in `src/types/`: `offre.ts`, `program.ts`, `testimonial.ts`, `landing-page.ts`.

**Structured Data:** Schema.org JSON-LD generated in `src/lib/structured-data.ts` for SEO (Organization, Services, Book, FAQs).

**Other lib files:** `src/lib/offres_program.ts` (program structure data), `src/lib/livre-data.ts` (book metadata).

### Documentation & Prompts

**`docs/offres/`** — Detailed offer descriptions (marketing copy, full specs, pricing):
- `hot_sync_offre_v3_finale.md` — Hot Sync offer (flagship, v3): problem statement, 3-phase methodology, pricing (15 500€ HT), deliverables
- `offre_techleads.md` — North Star offer (in development): 4-week program for Tech Leads/Heads of in scale-ups
- `programme-north-star.md` — North Star offer (refined version)

**`prompts/`** — Claude prompts for content creation workflows:
- `sous_agent_offres.md` — Sub-agent for offer creation & validation. Two modes: CREATION (4-phase: SPARK → EXPLORE → MUST-HAVE → DELIGHT) and VALIDATION (structured audit with scoring). Contains brand DNA, existing offers reference, and TypeScript output spec
- `prompt_offre_coaching.md` — Standalone prompt for generating a new `Offre` TypeScript object with SKU validation
- `prompt_reformulation_temoignage.md` — Prompt for reformulating raw testimonial interviews into 2 versions (short + medium) with catchy summaries
- `questionnaire_creation_offre.md` — 68-question questionnaire (SPARK/EXPLORE/MUST-HAVE/DELIGHT) for structured offer ideation
- `fondamentaux_marketing.md` — Brand architecture reference: positioning, values, tone guidelines, differentiators, intellectual signature
- `instructions.md` — General instructions for content workflows
- `structure_offre_publiable.md` — Structure template for publishable offer pages

### Styling

- **Tailwind CSS v4** with OKLCH color system. Theme tokens defined as CSS custom properties in `src/app/globals.css`
- **Key colors:** `--primary` (deep blue), `--corail` (coral accent)
- **Three fonts:** Montserrat (sans, headings/UI), Merriweather (serif, body), Cormorant Garamond (serif, quotes) — loaded via `next/font`
- **Component variants:** class-variance-authority (CVA) for simple variants, tailwind-variants for complex composition
- **Utility:** `cn()` helper in `src/lib/utils.ts` (clsx + tailwind-merge)
- **Utility classes in globals.css:** `.section-padding`, `.container-max`, `.text-balance`, `.corail`, `.benefits`

### Component Patterns

- UI primitives in `src/components/ui/` follow shadcn/ui conventions (Radix UI + CVA)
- `data-slot` attributes used for component identification
- Polymorphic components via `asChild` prop (Radix Slot)
- Server components by default; `"use client"` only when needed
- Framer Motion used for animations in client components
- Import alias: `@/*` maps to `./src/*`

### Landing Page Components

`src/components/landing/` contains specialized homepage sections: `hero-section`, `problem-section`, `program-section`, `transformation-section`, `pricing-section`, `pricing-card`, `deliverables-section`, `faq-section`, `coach-presentation`, `newsletter-section`, `final-cta-section`.

### Analytics & Config

- Umami analytics injected in root layout, configured via env vars in `src/lib/config.ts`
- Navigation structure defined in `src/lib/navigation.ts`
- Netlify deployment configured in `netlify.toml`

## Skills

Project-level skills in `.claude/skills/` for offer lifecycle management:

- **`/offre-create [nom]`** — Guide la création d'une nouvelle offre à travers 4 phases (SPARK → EXPLORE → MUST-HAVE → DELIGHT). Produit un fichier `docs/offres/[nom].md` conforme à `offre-template.md` avec frontmatter de suivi (statut, checklist qualité 17 critères, score /10).
- **`/offre-object [nom]`** — Génère un objet TypeScript `Offre` (conforme à `src/lib/offres.ts`) à partir d'un fichier offre existant dans `docs/offres/`. Requiert statut MUST-HAVE atteint (17/17 checklist). Produit un bloc `<!-- OFFRE_OBJECT {...} -->` en fin de fichier.
- **`/offre-landing [nom]`** — Crée la page détail (landing page) d'une offre à partir de `docs/offres/[nom].md`. Requiert statut `publiable`, OFFRE_OBJECT présent, et objet `Offre` dans `offres.ts`. Détecte automatiquement si c'est un programme fixe (ProductInfo dans `offres_program.ts`) ou une offre simple, et adapte les sections affichées. Produit `src/app/offres/[slug]/page.tsx`.
- **`/code-clean`** — Supprime le code mort via Knip : fichiers inutilisés, exports morts, types non référencés, dépendances orphelines. Vérifie avec build + re-Knip.

Fichiers de référence pour les skills :
- `docs/offres/offre-template.md` — Template structurel avec frontmatter (statut, checklist, score qualité)
- `docs/offres/offre-checklist.md` — Détail des 17 critères qualité (alignement, clarté, différenciation, cohérence portefeuille)
- `docs/offres/page-detail-template.md` — Template de page détail (landing page) avec squelette page.tsx, sections, types, checklist

## Content Language

All user-facing content is in French. Variable names, types, and code comments are in English, except domain terms (`offres`, `douleurs`, `benefices`, `modalites`, `temoignages`) which stay in French to match the data model.
