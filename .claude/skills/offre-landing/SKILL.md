---
name: offre-landing
description: Crée la page détail (landing page) d'une offre à partir de son fichier markdown dans docs/offres/. Génère le fichier page.tsx avec toutes les sections, les données narratives, et le SEO. Suit le template docs/offres/page-detail-template.md.
argument-hint: "[nom-du-fichier-offre]"
---

Tu crées la page détail (landing page) d'une offre à partir de son fichier markdown. Tu produis un fichier `page.tsx` prêt à l'emploi dans `src/app/offres/[slug]/`.

## PREREQUIS — Vérifications obligatoires

### 1. Lire le fichier source

Lis `docs/offres/$ARGUMENTS.md`. **BLOQUE** si :
- Le fichier n'existe pas → Erreur : "Fichier docs/offres/$ARGUMENTS.md introuvable."
- Le frontmatter `statut` n'est pas `publiable` → Erreur : "L'offre n'est pas publiable. Statut actuel : [statut]. Complète d'abord les phases avec /offre-create."
- Il n'y a pas de bloc `<!-- OFFRE_OBJECT {...} -->` → Erreur : "Pas d'OFFRE_OBJECT. Lance d'abord /offre-object $ARGUMENTS."

### 2. Vérifier l'Offre dans offres.ts

Lis `src/lib/offres.ts`. Extrais le SKU du frontmatter du fichier markdown. **BLOQUE** si :
- Aucun objet `Offre` avec ce SKU n'existe dans le tableau `offres` → Erreur : "L'offre SKU [sku] n'est pas dans src/lib/offres.ts. Ajoute-la d'abord à partir de l'OFFRE_OBJECT."

Note le `title` de l'offre dans offres.ts — le slug sera généré par `slugify(title)` (voir la fonction dans offres.ts).

### 3. Vérifier si c'est un programme fixe

Lis `src/lib/offres_program.ts`. Cherche si un `ProductInfo` avec ce SKU existe dans le tableau `programs`.

- **Si oui** → C'est un programme fixe. La page aura toutes les sections (programme, deliverables, pricing, CTA final).
- **Si non** → C'est une offre simple. La page n'aura PAS les sections programme, deliverables, pricing, CTA final. Ne pas importer ces composants.

### 4. Vérifier qu'il n'y a pas déjà une page

Calcule le slug : applique mentalement `slugify(title)` (lowercase, sans accents, espaces → tirets).
Vérifie que `src/app/offres/[slug]/page.tsx` n'existe pas déjà. **Si il existe** → Demande confirmation avant d'écraser.

---

## GENERATION DE LA PAGE

### Fichier de référence

Le template complet est dans `docs/offres/page-detail-template.md`. Suis-le comme base structurelle.

### Données à extraire du markdown

Lis attentivement le fichier `docs/offres/$ARGUMENTS.md` et extrais :

| Donnée | Source dans le markdown |
|--------|------------------------|
| `problem.symptomes` | Section "Vous reconnaissez cette situation ?" — les items à puces |
| `problem.result` | La phrase "Résultat : ..." après les symptômes |
| Contenu narratif (children de ProblemSection) | Le texte d'introduction de la section problème, AVANT les puces. C'est le récit immersif. |
| `transformation.result` | La phrase "Ce qui change : ..." en fin de section transformation |
| `transformation.items` | Les items à puces de "Ce qui change" |
| `features` | (programme fixe uniquement) Section "Investissement" — ce qui est inclus |

### Choix des icônes pour transformation.items

Choisis des icônes cohérentes avec le sens de chaque item :
- Utilise `lucide-react` en priorité (large catalogue)
- Icônes custom disponibles dans `@/components/icons/` : `Boss`, `Team`, `Juggler`, `TrendUp`
- Alterne les couleurs : `text-primary`, `text-orange-500`, `text-emerald-700`, `text-blue-700`
- Chaque icône a les classes : `className="mt-1 size-8 flex-shrink-0 text-[couleur]"`

### Contenu narratif JSX (children de ProblemSection)

C'est l'endroit clé de personnalisation. Transforme le texte introductif de la section problème du markdown en JSX expressif :
- Utilise des icônes pour illustrer les oppositions (ex: Boss vs Team pour direction vs équipe)
- Classe CSS : `text-foreground text-lg leading-relaxed`
- Termine par une phrase forte en `font-semibold`

### Structure du fichier généré

```tsx
// 1. Imports
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { getOffreBySku } from "@/lib/offres";
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
import { CoachPresentation } from "@/components/landing/coach-presentation";
import { FAQSection } from "@/components/landing/faq-section";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { getOffreJsonLd } from "@/lib/structured-data";

// --- Programme fixe uniquement : ajouter ces imports ---
// import { getProgramBySku } from "@/lib/offres_program";
// import { ProgramSection } from "@/components/landing/program-section";
// import { DeliverablesSection } from "@/components/landing/deliverables-section";
// import { PricingSection } from "@/components/landing/pricing-section";
// import { FinalCTASection } from "@/components/landing/final-cta-section";

// Icônes (adapter selon le contenu)
import { ... } from "lucide-react";

// 2. Données narratives inline
const SKU = "...";
const problem: Problem = { ... };
const transformation: Transformation = { ... };
// const features = [...]; // Programme fixe uniquement

// 3. Composant Page
export default async function Page() {
  const offre = getOffreBySku(SKU);
  // const product = getProgramBySku(SKU); // Programme fixe uniquement
  if (!offre) {
    notFound();
  }

  const jsonLd = getOffreJsonLd(offre, "/offres/[slug]");

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navigation />
      <main>
        <HeroSection offre={offre} {/* product={product} si programme fixe */} />
        <ProblemSection problem={problem}>
          {/* Contenu narratif JSX */}
        </ProblemSection>
        <TransformationSection transformation={transformation} />

        {/* Programme fixe uniquement : */}
        {/* {product && <ProgramSection product={product} />} */}
        {/* {product?.deliverables && <DeliverablesSection deliverables={product.deliverables} />} */}
        {/* {product && <PricingSection product={product} features={features} />} */}

        <CoachPresentation />
        <NewsletterSection />
        {offre.faq && <FAQSection faq={offre.faq} />}

        {/* Programme fixe uniquement : */}
        {/* {product && <FinalCTASection offre={offre} product={product} />} */}
      </main>
      <Footer />
    </div>
  );
}
```

### Règles de génération

**Programme fixe** (ProductInfo existe) :
- Importer `getProgramBySku`, `ProgramSection`, `DeliverablesSection`, `PricingSection`, `FinalCTASection`
- Appeler `getProgramBySku(SKU)` dans la fonction Page
- Passer `product` à `HeroSection`
- Afficher les sections conditionnelles : `{product && <ProgramSection />}`, etc.
- Définir le tableau `features`

**Offre simple** (pas de ProductInfo) :
- NE PAS importer `getProgramBySku`, `ProgramSection`, `DeliverablesSection`, `PricingSection`, `FinalCTASection`
- NE PAS appeler `getProgramBySku`
- NE PAS passer `product` à `HeroSection`
- NE PAS définir `features`
- NE PAS inclure les sections conditionnelles programme/pricing/deliverables/CTA final

---

## IMAGE

L'objet `problem` a un champ `imagePath`. Utilise `"https://placehold.co/358x538/jpeg"` comme placeholder et signale à l'utilisateur qu'il faudra la remplacer.

---

## APRES GENERATION

### 1. Lint et build

Lance :
1. `npm run prettier` — formate le fichier
2. `npm run lint` — vérifie les erreurs
3. `npm run build` — valide la compilation

Corrige les erreurs éventuelles (imports manquants, typos, erreurs de types).

### 2. Résumé

Affiche un résumé structuré :

```
## Page créée

- Fichier : src/app/offres/[slug]/page.tsx
- SKU : [sku]
- Type : Programme fixe | Offre simple
- Slug : /offres/[slug]

### Sections générées
- [x] Hero
- [x] Problème (X symptômes)
- [x] Transformation (X items)
- [x] Programme          ← uniquement si programme fixe
- [x] Livrables          ← uniquement si programme fixe
- [x] Pricing            ← uniquement si programme fixe
- [x] Coach
- [x] Newsletter
- [x] FAQ (X questions)  ← uniquement si FAQ définie
- [x] CTA final          ← uniquement si programme fixe

### A faire manuellement
- [ ] Remplacer l'image placeholder dans problem.imagePath
- [ ] Vérifier le rendu visuel (npm run dev → /offres/[slug])
- [ ] Vérifier les liens Stripe si programme fixe
```

---

## REGLES DE CONDUITE

1. **Lis toujours le fichier markdown ET offres.ts ET offres_program.ts** avant de générer quoi que ce soit.
2. **Ne génère pas de `ProductInfo`** — ce n'est pas le rôle de ce skill. Si l'offre est un programme fixe, le ProductInfo doit déjà exister dans offres_program.ts.
3. **Ne modifie pas offres.ts ni offres_program.ts** — ce skill ne fait que créer la page.
4. **Le contenu narratif doit venir du markdown**, pas être inventé. Transforme le texte existant en JSX, ne crée pas de nouveau contenu.
5. **Respecte le ton** : direct, concret, pas de jargon coaching. Relis `prompts/fondamentaux_marketing.md` en cas de doute.
6. **Le build qui passe est la validation finale.**
