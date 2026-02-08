# Template — Page détail d'une offre

Ce document décrit comment créer une page de détail pour une nouvelle offre, en suivant le pattern établi par `programme-north-star/page.tsx`.

---

## Deux types d'offres

| | Programme fixe | Offre simple |
|---|---|---|
| Exemple | North Star (NST-26-01) | Coaching individuel |
| `ProductInfo` | Oui (dans `offres_program.ts`) | Non |
| Sessions structurées | Oui (accordéon) | Non |
| Pricing early bird / standard | Oui (cartes) | Non |
| Deliverables | Oui (grille) | Non |
| Sections affichées | Toutes | Hero, Problème, Transformation, Coach, Newsletter, FAQ |

`getProgramBySku(SKU)` retourne `undefined` si le SKU n'est pas dans `offres_program.ts`. Les sections conditionnelles (`product &&`) s'effacent automatiquement.

---

## Prérequis

Avant de créer la page, il faut :

1. **Un fichier offre dans `docs/offres/`** — statut `publiable`, checklist 17/17, avec un bloc `<!-- OFFRE_OBJECT {...} -->` en fin de fichier (produit par `/offre-object`)
2. **L'objet `Offre` ajouté dans `src/lib/offres.ts`** — avec le SKU, les douleurs, bénéfices, modalités, FAQ
3. **Programme fixe uniquement :** l'objet `ProductInfo` ajouté dans `src/lib/offres_program.ts` — sessions, deliverables, pricing, liens Stripe/Cal.com. Ne pas créer de `ProductInfo` pour une offre de coaching individuel ou sur-mesure.

---

## Arborescence

```
src/app/offres/[slug-de-loffre]/
├── page.tsx              # Page serveur principale
└── _components/          # (optionnel) Composants spécifiques à cette page
```

---

## Structure de la page (`page.tsx`)

La page est un **Server Component** async qui assemble des sections réutilisables de `@/components/landing/`.

### Squelette complet

```tsx
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { getOffreBySku } from "@/lib/offres";
import { getProgramBySku } from "@/lib/offres_program";
import { notFound } from "next/navigation";
import type { Problem } from "@/components/landing/problem-section";
import dynamic from "next/dynamic";

const ProblemSection = dynamic(() =>
  import("@/components/landing/problem-section").then(
    (mod) => mod.ProblemSection,
  ),
);

import {
  Transformation,
  TransformationSection,
} from "@/components/landing/transformation-section";
import { ProgramSection } from "@/components/landing/program-section";
import { DeliverablesSection } from "@/components/landing/deliverables-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CoachPresentation } from "@/components/landing/coach-presentation";
import { FAQSection } from "@/components/landing/faq-section";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { getOffreJsonLd } from "@/lib/structured-data";

// ─── ICÔNES ───────────────────────────────────────────────
// Importer les icônes nécessaires pour la section transformation.
// Disponibles : lucide-react (BatteryFull, Sparkles, Target, etc.)
//               @/components/icons/ (Boss, Team, Juggler, TrendUp)
import { Sparkles, BatteryFull } from "lucide-react";

// ─── 1. DONNÉES SPÉCIFIQUES À LA PAGE ────────────────────
// Ces données inline complètent les données structurées de offres.ts.
// Elles permettent une narration riche propre à chaque offre.
// Note : getProgramBySku() retourne undefined si l'offre n'est pas
// un programme fixe — les sections programme/pricing/deliverables
// ne s'affichent alors pas.

const SKU = "XXX-YY-ZZ"; // SKU de l'offre (ex: NST-26-01, HSY-25-01)

const problem: Problem = {
  title: "Vous reconnaissez cette situation ?",
  imagePath: "https://placehold.co/358x538/jpeg", // Remplacer par une vraie image
  symptomes: [
    {
      short: "[Tension courte]",
      long: "[description concrète dans le langage du client].",
    },
    {
      short: "[Tension courte]",
      long: "[description concrète].",
    },
    {
      short: "[Tension courte]",
      long: "[description concrète].",
    },
    {
      short: "[Tension courte]",
      long: "[description concrète].",
    },
  ],
  result:
    "[phrase de synthèse qui nomme l'impasse vécue — ex: vous passez votre temps à X sans Y].",
};

const transformation: Transformation = {
  result:
    "Vous **[état d'arrivée en gras]**, pas juste [ce que le client ne veut plus être].",
  items: [
    {
      Icon: <Sparkles className="mt-1 size-8 flex-shrink-0 text-orange-500" />,
      title: "[Bénéfice 1 — verbe d'action]",
      description: "[description concrète du changement].",
    },
    {
      Icon: (
        <BatteryFull className="mt-1 size-8 flex-shrink-0 text-emerald-700" />
      ),
      title: "[Bénéfice 2]",
      description: "[description concrète].",
    },
    // 3-4 items max
  ],
};

// ─── PROGRAMME FIXE UNIQUEMENT ────────────────────────────
// Ne définir `features` que si l'offre a un ProductInfo dans offres_program.ts.
// Pour une offre simple (coaching individuel), supprimer ce bloc.
const features = [
  "[X sessions d'accompagnement (Yh au total)]",
  "[Format : groupe/individuel]",
  "[Outils / livrables inclus]",
  "[Suivi asynchrone / durée]",
];

// ─── 2. COMPOSANT PAGE ───────────────────────────────────

export default async function Page() {
  const offre = getOffreBySku(SKU);
  const product = getProgramBySku(SKU);
  if (!offre) {
    notFound();
  }

  const jsonLd = getOffreJsonLd(offre, "/offres/[slug-de-loffre]");

  return (
    <div className="min-h-screen">
      {/* SEO — JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Navigation />

      <main>
        {/* ── Hero : titre, sous-titre, pricing, CTA ── */}
        <HeroSection offre={offre} product={product} />

        {/* ── Problème : symptômes + contenu narratif custom ── */}
        <ProblemSection problem={problem}>
          {/*
            Contenu JSX libre pour enrichir la section problème.
            C'est ici qu'on raconte l'histoire spécifique à cette offre.
            Exemples : métaphore visuelle, opposition direction/équipe, etc.
          */}
          <div className="text-foreground text-lg leading-relaxed">
            [Contenu narratif contextuel — JSX libre]
          </div>
          <p className="text-foreground text-lg leading-relaxed font-semibold">
            [Phrase de conclusion percutante]
          </p>
        </ProblemSection>

        {/* ── Transformation : état d'arrivée ── */}
        <TransformationSection transformation={transformation} />

        {/* ── Programme : sessions en accordéon ── */}
        {/* N'afficher que si product existe (offre avec programme structuré) */}
        {product && <ProgramSection product={product} />}

        {/* ── Livrables : ce que le client repart avec ── */}
        {product?.deliverables && (
          <DeliverablesSection deliverables={product.deliverables} />
        )}

        {/* ── Pricing : cartes early bird + standard ── */}
        {product && <PricingSection product={product} features={features} />}

        {/* ── Coach : présentation de Thierry ── */}
        <CoachPresentation />

        {/* ── Newsletter ── */}
        <NewsletterSection />

        {/* ── FAQ ── */}
        {offre.faq && <FAQSection faq={offre.faq} />}

        {/* ── CTA final ── */}
        {product && <FinalCTASection offre={offre} product={product} />}
      </main>

      <Footer />
    </div>
  );
}
```

---

## Sections et composants disponibles

| Section | Composant | Props | Obligatoire |
|---|---|---|---|
| Hero | `HeroSection` | `offre: OffreDisplayed`, `product?: ProductInfo` | Oui |
| Problème | `ProblemSection` | `problem: Problem`, `children: ReactNode` | Oui |
| Transformation | `TransformationSection` | `transformation: Transformation` | Oui |
| Programme | `ProgramSection` | `product: ProductInfo` | Programme fixe uniquement |
| Livrables | `DeliverablesSection` | `deliverables: Deliverable[]` | Programme fixe uniquement |
| Pricing | `PricingSection` | `product: ProductInfo`, `features: string[]` | Programme fixe uniquement |
| Coach | `CoachPresentation` | aucune | Oui |
| Newsletter | `NewsletterSection` | aucune | Oui |
| FAQ | `FAQSection` | `faq: Faq[]` | Si FAQ |
| CTA final | `FinalCTASection` | `offre: OffreDisplayed`, `product: ProductInfo` | Programme fixe uniquement |

---

## Types de référence

### `Problem` (défini dans `problem-section.tsx`)

```ts
interface Problem {
  title: string;          // Titre de la section (ex: "Vous reconnaissez cette situation ?")
  imagePath: string;      // Image d'illustration (358x538 idéal)
  symptomes: Symptome[];  // 3-4 tensions vécues par le client
  result: string;         // Phrase de synthèse de l'impasse
}

interface Symptome {
  short: string;  // Titre court (affiché en gras)
  long: string;   // Description longue
}
```

### `Transformation` (défini dans `transformation-section.tsx`)

```ts
interface Transformation {
  result: string;              // Phrase de synthèse (supporte **gras** markdown)
  items: TransformationItem[]; // 3-4 bénéfices concrets
}

interface TransformationItem {
  Icon: React.ReactNode;  // JSX d'icône (lucide-react ou @/components/icons)
  title: string;          // Bénéfice en une phrase
  description: string;    // Détail concret
}
```

### `ProductInfo` (défini dans `src/types/program.ts`)

```ts
interface ProductInfo {
  sku: string;
  calCom: { discoveryCallUrl: string };
  stripe: Record<"test" | "production", Record<"early_bird" | "standard", string>>;
  program: {
    startDate: Date;
    duration: string;
    maxParticipants: number;
    availablePlaces: number;
    pricing: Record<"early_bird" | "standard", Price>;
  };
  sessions: Session[];
  deliverables?: Deliverable[];
}
```

---

## Checklist de création

### 1. Données — Toute offre

- [ ] Ajouter l'objet `Offre` dans `src/lib/offres.ts` (slug, featured, collapsed)
- [ ] Définir la FAQ dans l'objet Offre

### 1b. Données — Programme fixe uniquement

Ces étapes ne s'appliquent que si l'offre est un programme avec sessions structurées, dates de lancement, pricing early bird/standard. Ne pas créer de `ProductInfo` pour du coaching individuel ou sur-mesure.

- [ ] Ajouter l'objet `ProductInfo` dans `src/lib/offres_program.ts`
- [ ] Configurer les liens Stripe (test + production)
- [ ] Configurer le lien Cal.com discovery call
- [ ] Définir les sessions avec id, title, description, type, duration, week, outcome
- [ ] Définir les deliverables avec emoji, title, description

### 2. Page (`src/app/offres/[slug]/`)

- [ ] Créer `page.tsx` à partir de ce template
- [ ] Remplacer le SKU
- [ ] Rédiger l'objet `problem` (symptômes, résultat)
- [ ] Rédiger le contenu narratif JSX enfant de `ProblemSection`
- [ ] Rédiger l'objet `transformation` (résultat, items avec icônes)
- [ ] Programme fixe : lister les `features` pour les cartes pricing
- [ ] Mettre à jour le slug dans `getOffreJsonLd()`
- [ ] Remplacer l'image placeholder

### 3. Validation

- [ ] `npm run build` — pas d'erreur
- [ ] `npm run lint` — clean
- [ ] Vérifier le rendu visuel de chaque section
- [ ] Programme fixe : vérifier les liens Stripe (test mode)
- [ ] Programme fixe : vérifier le lien Cal.com
- [ ] Vérifier le JSON-LD avec un validateur Schema.org

---

## Notes de design

- **ProblemSection** est chargée en `dynamic()` (lazy loading) car c'est un client component avec Framer Motion
- **Les couleurs d'icônes** alternent entre `text-primary`, `text-orange-500`, `text-emerald-700`, `text-blue-700`
- **Les sections conditionnelles** (`product &&`) s'effacent automatiquement quand l'offre n'a pas de `ProductInfo` dans `offres_program.ts`. Un seul template sert les deux cas (programme fixe vs offre simple)
- **Ne pas créer de `ProductInfo`** pour une offre de coaching individuel ou sur-mesure. Seuls les programmes fixes (sessions datées, groupe, pricing structuré) en ont besoin
- **Le contenu enfant de ProblemSection** est l'endroit clé de personnalisation narrative — c'est là que chaque offre raconte son histoire unique
- **Les données structurées** (Offre) alimentent les sections factuelles ; les objets inline (`problem`, `transformation`) portent la narration. `features` n'est utile que pour les programmes fixes
