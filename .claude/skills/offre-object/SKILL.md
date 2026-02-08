---
name: offre-object
description: Génère un objet TypeScript Offre à partir d'un fichier offre existant dans docs/offres/. L'offre doit avoir atteint totalement le statut MUST-HAVE (17/17 checklist). Produit un bloc JSON en commentaire à la fin du fichier.
argument-hint: "[nom-du-fichier-offre]"
---

Tu génères un objet TypeScript conforme à l'interface `Offre` de `src/lib/offres.ts` à partir d'un fichier offre markdown existant.

## PREREQUIS — Vérification obligatoire avant toute génération

1. Lis le fichier `docs/offres/$ARGUMENTS.md`
2. Parse le frontmatter YAML
3. **BLOQUE si l'une de ces conditions n'est pas remplie :**
   - Le fichier n'existe pas → Erreur : "Fichier docs/offres/$ARGUMENTS.md introuvable."
   - `statut` n'est pas `must-have`, `delight` ou `publiable` → Erreur : "L'offre n'a pas atteint le statut MUST-HAVE. Statut actuel : [statut]. Utilise /create-offre pour compléter les phases manquantes."
   - Au moins un critère `checklist` est à `false` → Erreur : "La checklist MUST-HAVE n'est pas complète. Critères manquants : [liste des clés à false]. Score qualité : [qualite]/10."
4. Si toutes les conditions sont remplies, passe à la génération.

## INTERFACE CIBLE

```ts
import { type LucideIcon } from "lucide-react";

export interface Offre {
  sku: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  douleurs: string[];
  benefices: string[];
  modalites: string[];
}
```

## REGLES DE GENERATION

### SKU

Utilise le `sku` du frontmatter. Vérifie qu'il respecte :
- Regex : `[A-Z]{3}-\d{2}-01`
- Les 3 lettres sont une abréviation claire du `title`
- Les 2 chiffres = année de `date_creation`
- Suffixe `-01` fixe
- N'est pas déjà utilisé (voir SKUs existants ci-dessous)

Si le SKU est invalide, corrige-le et signale la correction.

### Icon

Choisis une icône pertinente dans `lucide-react`. Icônes déjà utilisées :
- `User` → Coaching individuel (CSI-25-01)
- `Flame` → Hot Sync (HSC-25-01)
- `Users` → Coaching d'équipe (CST-25-01)
- `Lightbulb` → Ateliers thématiques (TSX-25-01)

Ne réutilise pas une icône déjà prise sauf si l'offre remplace explicitement une offre existante.

### Contenu des champs

Extrais le contenu directement du fichier markdown :

| Champ | Source dans le fichier |
|-------|----------------------|
| `title` | Frontmatter `title` ou titre H1 |
| `subtitle` | Baseline (H2 sous le titre) |
| `description` | Synthèse de "Vous reconnaissez cette situation ?" + "Ce qui change" — 2-3 phrases max |
| `audience` | Section "A qui s'adresse" — en anglais, concis |
| `douleurs` | Les tensions listées dans "Vous reconnaissez cette situation ?" — 4 à 6 items |
| `benefices` | Les changements listés dans "Ce qui change" — 4 à 6 items |
| `modalites` | Extraits de "Format" + phases du parcours — 4 à 6 items |

### Contraintes de contenu

- Pas de jargon coach/corporate
- Pas de promesses magiques
- Pas de posture prescriptive
- Ton sobre, exigeant, ancré dans la réalité terrain
- Les `douleurs` sont formulées dans le langage du client (avec "vous" ou "vos")
- Les `benefices` sont concrets et mesurables
- Les `modalites` sont factuelles (durées, formats, fréquences)

## SKUs EXISTANTS (ne pas réutiliser)

- `CSI-25-01` — Coaching individuel
- `HSC-25-01` — Hot Sync
- `CST-25-01` — Coaching d'équipe
- `TSX-25-01` — Ateliers thématiques

## FORMAT DE SORTIE

Ajoute un commentaire HTML à la fin du fichier `docs/offres/$ARGUMENTS.md` contenant l'objet JSON :

```markdown
<!-- OFFRE_OBJECT
{
  "sku": "...",
  "icon": "...",
  "title": "...",
  "subtitle": "...",
  "description": "...",
  "audience": "...",
  "douleurs": [...],
  "benefices": [...],
  "modalites": [...]
}
-->
```

Le champ `icon` contient le nom de l'icône en string (ex: `"Compass"`), pas l'import.

Si un bloc `<!-- OFFRE_OBJECT ... -->` existe déjà dans le fichier, remplace-le.

## APRES GENERATION

Affiche un résumé :
- SKU validé ou corrigé
- Icône choisie et pourquoi
- Nombre de douleurs / bénéfices / modalités
- Rappelle que pour intégrer l'offre au site, il faut ajouter l'objet dans `src/lib/offres.ts` avec l'import de l'icône
