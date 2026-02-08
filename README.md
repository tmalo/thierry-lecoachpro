# LeCoachPro — thierry-lecoachpro.fr

Site professionnel de coaching pour Thierry Malo. Cible : managers et leaders tech. Contenu en francais.

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI | React 19, Radix UI, Lucide icons |
| Styling | Tailwind CSS v4 (OKLCH), CVA, tailwind-variants |
| Animation | Framer Motion |
| Contenu | Markdown + gray-matter (frontmatter) |
| Typo | Montserrat (sans), Merriweather (serif), Cormorant Garamond (quotes) |
| Analytics | Umami |
| Deploiement | Netlify |

## Installation

```bash
npm install
npm run dev
```

Le serveur de dev demarre sur `http://localhost:3000` avec Turbopack.

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de dev (Turbopack) |
| `npm run build` | Build de production |
| `npm run lint` | ESLint (flat config, v9) |
| `npm run prettier` | Formatage Prettier + tri des classes Tailwind |
| `npm run knip` | Detection de code mort (fichiers, exports, types, deps) |

Pas de framework de test configure.

## Variables d'environnement

| Variable | Description | Defaut |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL du site | `https://thierry-lecoachpro.fr` |
| `NEXT_PUBLIC_CAL_COM_URL` | URL Cal.com (prise de rendez-vous) | — |
| `NEXT_PUBLIC_UMAMI_URL` | URL du script Umami | `https://cloud.umami.is/script.js` |
| `NEXT_PUBLIC_UMAMI_WEBSITE_ID` | ID Umami du site | — |
| `NEXT_PUBLIC_STRIPE_MODE` | Mode Stripe (`live` en prod) | — |

## Architecture

```
src/
├── app/                          # Routes (App Router)
│   ├── layout.tsx                # Layout racine (fonts, analytics, metadata)
│   ├── globals.css               # Tokens Tailwind (couleurs, utilitaires)
│   ├── page.tsx                  # Homepage
│   ├── offres/                   # Pages offres
│   │   ├── page.tsx              # Liste des offres
│   │   └── programme-north-star/ # Page detail North Star
│   ├── contact/
│   ├── coaching-approche-sensible-alignement/
│   ├── la-methode-2apex/
│   └── temoignages/
├── components/
│   ├── ui/                       # Primitives shadcn/ui (Radix + CVA)
│   ├── landing/                  # Sections reutilisables de landing page
│   ├── icons/                    # Icones SVG custom
│   ├── navigation.tsx
│   ├── footer.tsx
│   └── section.tsx               # Wrapper de section avec variantes
├── lib/
│   ├── offres.ts                 # Donnees des offres (Offre[])
│   ├── offres_program.ts         # Donnees des programmes fixes (ProductInfo[])
│   ├── structured-data.ts        # JSON-LD Schema.org (SEO)
│   ├── testimonials.ts           # Chargement des temoignages Markdown
│   ├── config.ts                 # Variables d'environnement
│   ├── navigation.ts             # Structure de navigation
│   └── utils.ts                  # cn() helper
└── types/
    ├── offre.ts                  # Offre, OffreDisplayed, Faq
    ├── program.ts                # ProductInfo, Session, Deliverable
    ├── testimonial.ts
    └── landing-page.ts
```

### Donnees

Toutes les pages sont generees statiquement (pas d'API routes).

- **Offres** : objets TypeScript dans `src/lib/offres.ts`. Chaque offre a un SKU (`CSI-25-01`), des douleurs, benefices, modalites, et une FAQ optionnelle.
- **Programmes fixes** : objets `ProductInfo` dans `src/lib/offres_program.ts`. Sessions structurees, pricing (early bird / standard), liens Stripe et Cal.com. Seules les offres de type programme (sessions datees, groupe, pricing structure) ont un `ProductInfo`.
- **Temoignages** : fichiers Markdown avec frontmatter dans `/testimonials/`.

### Composants landing page

Les sections de landing page dans `src/components/landing/` sont reutilisables et typees :

| Section | Composant | Props principales |
|---|---|---|
| Hero | `hero-section` | `offre`, `product?` |
| Probleme | `problem-section` | `problem`, `children` (JSX narratif) |
| Transformation | `transformation-section` | `transformation` |
| Programme | `program-section` | `product` (accordeon de sessions) |
| Livrables | `deliverables-section` | `deliverables[]` |
| Pricing | `pricing-section` | `product`, `features[]` |
| Coach | `coach-presentation` | aucune |
| Newsletter | `newsletter-section` | aucune |
| FAQ | `faq-section` | `faq[]` |
| CTA final | `final-cta-section` | `offre`, `product` |

---

## Creer une nouvelle offre

Le cycle de vie complet d'une offre est outille avec des skills [Claude Code](https://docs.anthropic.com/en/docs/claude-code). Chaque etape produit un artefact qui alimente la suivante.

### Vue d'ensemble

```
  /offre-create        /offre-object         Ajout manuel          /offre-landing
  ─────────────        ─────────────         ────────────          ──────────────
  docs/offres/     →   OFFRE_OBJECT      →   src/lib/          →   src/app/offres/
  [nom].md             dans le .md           offres.ts              [slug]/page.tsx
                                             (+ offres_program.ts
                                             si programme fixe)
```

### Etape 1 — Concevoir l'offre

```
/offre-create mon-offre
```

Claude Code guide la creation a travers **4 phases interactives** :

| Phase | Objectif | Exemples de questions |
|---|---|---|
| **SPARK** | Le strict minimum | Cible, blocage, transformation, format, prix |
| **EXPLORE** | Approfondir | Dynamique sous-jacente, approche specifique, ancrage systemique |
| **MUST-HAVE** | Checklist qualite | 17 criteres : alignement, clarte, differenciation, coherence |
| **DELIGHT** | Rendre exceptionnel | Facteur wow, personnalisation, autonomisation |

**Produit :** `docs/offres/mon-offre.md` avec frontmatter de suivi (statut, checklist, score /10).

Le fichier passe par les statuts : `spark` → `explore` → `must-have` → `delight` → `publiable`.

### Etape 2 — Generer l'objet TypeScript

```
/offre-object mon-offre
```

Genere un objet `Offre` conforme au type `src/types/offre.ts` a partir du markdown.

**Prerequis :** statut `must-have` atteint, checklist 17/17.

**Produit :** un bloc `<!-- OFFRE_OBJECT {...} -->` en commentaire HTML a la fin du fichier markdown (SKU, icon, title, subtitle, description, audience, douleurs, benefices, modalites).

### Etape 3 — Ajouter l'offre au code (manuel)

Copier les donnees de l'`OFFRE_OBJECT` dans le code source :

**a) Ajouter l'objet `Offre` dans `src/lib/offres.ts` :**

```ts
{
  sku: "MON-26-01",
  icon: Target,  // import depuis lucide-react
  title: "Mon offre",
  subtitle: "...",
  description: "...",
  audience: "...",
  douleurs: [...],
  benefices: [...],
  modalites: [...],
  faq: [...]
}
```

**b) Programme fixe uniquement — ajouter le `ProductInfo` dans `src/lib/offres_program.ts` :**

Necessaire seulement pour les offres avec sessions datees, groupe, pricing early bird/standard. Ne concerne pas le coaching individuel ou sur-mesure.

```ts
const monProgramme: ProductInfo = {
  sku: "MON-26-01",
  calCom: { discoveryCallUrl: "https://cal.com/..." },
  stripe: { test: { ... }, production: { ... } },
  program: { startDate: new Date("..."), duration: "...", ... },
  sessions: [...],
  deliverables: [...]
};
```

Puis l'ajouter au tableau `programs` dans le meme fichier.

### Etape 4 — Creer la landing page

```
/offre-landing mon-offre
```

Genere la page de detail complete a partir du markdown et des donnees dans le code.

**Prerequis :** statut `publiable`, `OFFRE_OBJECT` present, objet `Offre` dans `offres.ts`.

**Produit :** `src/app/offres/[slug]/page.tsx` avec :
- Sections adaptees au type d'offre (programme fixe = toutes les sections, offre simple = sans programme/pricing/deliverables)
- Donnees narratives (`problem`, `transformation`) extraites du markdown
- JSON-LD pour le SEO
- Formatage, lint et build valides

### Etape 5 — Verification

1. `npm run dev` → verifier le rendu sur `/offres/[slug]`
2. Remplacer l'image placeholder dans `problem.imagePath`
3. (Programme fixe) Verifier les liens Stripe en mode test
4. (Programme fixe) Verifier le lien Cal.com

### Checklist qualite des offres

Chaque offre est evaluee sur **17 criteres** repartis en 4 categories :

| Categorie | Criteres |
|---|---|
| **Alignement marketing** | Zero jargon, langage client, legitimite tech, ton direct, posture rogerienne |
| **Clarte** | Cible evidente, blocage precis, transformation concrete, format explicite, prix affiche, processus de demarrage |
| **Differenciation** | Element different, double legitimite, parcours original |
| **Coherence portefeuille** | Pas de cannibalisation, parcours logique, cible distincte |

Score qualite = criteres valides x 10 / 17.

Detail complet dans `docs/offres/offre-checklist.md`.

---

## Autres skills Claude Code

| Skill | Description |
|---|---|
| `/code-clean` | Supprime le code mort via Knip : fichiers inutilises, exports morts, types non references, deps orphelines |

## Fichiers de reference

```
docs/offres/
├── offre-template.md          # Template structurel (frontmatter, sections)
├── offre-checklist.md         # Detail des 17 criteres qualite
├── page-detail-template.md    # Template de page detail (squelette page.tsx)
└── programme-north-star.md    # Exemple d'offre publiee

prompts/
├── fondamentaux_marketing.md  # ADN de marque, positionnement, ton
├── questionnaire_creation_offre.md  # 68 questions pour la creation
└── sous_agent_offres.md       # Prompt agent de creation/validation
```

## Deploiement

Le site est deploye sur **Netlify** via le plugin `@netlify/plugin-nextjs`.

Chaque push sur `master` declenche un deploiement automatique.
