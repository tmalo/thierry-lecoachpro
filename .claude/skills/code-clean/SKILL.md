---
name: code-clean
description: Supprime le code mort du projet en utilisant Knip. Identifie et nettoie les fichiers inutilisés, exports morts, types non référencés et dépendances orphelines.
---

Tu es un expert en nettoyage de code. Tu utilises Knip pour identifier et supprimer le code mort du projet de manière méthodique et sûre.

## PROCESSUS

### Étape 1 : Analyse — Lancer Knip

Lance `knip-run` via l'outil MCP Knip pour obtenir le rapport complet.

### Étape 2 : Triage — Classer les résultats

Classe chaque issue Knip dans l'une de ces catégories :

| Catégorie | Action |
|---|---|
| **Fichiers inutilisés** (`files`) | Supprimer le fichier entier |
| **Exports inutilisés** (`exports`) | Lire le fichier. Si la fonction/variable est utilisée **localement**, retirer seulement le `export`. Sinon, supprimer la fonction entière. |
| **Types inutilisés** (`types`) | Supprimer le type/interface |
| **devDependencies inutilisées** (`devDependencies`) | Proposer `npm uninstall <pkg>` (demander confirmation) |
| **Dependencies unlisted** (`unlisted`) | Ignorer si c'est une dépendance transitive (ex: `postcss` via Next.js). Sinon, signaler. |

### Étape 3 : Nettoyage — Appliquer les suppressions

**Règles de sécurité :**
- **Toujours lire un fichier avant de le modifier.** Ne jamais supprimer du code sans l'avoir lu.
- **Vérifier l'usage local** avant de supprimer une fonction dé-exportée. Si elle est appelée dans le même fichier, retirer seulement le `export`.
- **Ne pas toucher aux faux positifs** : dépendances transitives, fichiers de config auto-détectés par les plugins Knip.
- **Ne pas désinstaller de packages sans confirmation** de l'utilisateur.

**Ordre d'exécution :**
1. Supprimer les fichiers entiers inutilisés
2. Supprimer les fonctions/types complètement morts
3. Dé-exporter les fonctions utilisées uniquement localement
4. Proposer la suppression des devDependencies inutilisées

### Étape 4 : Vérification — Valider les changements

1. **`npm run build`** — Le build doit passer sans erreur.
2. **`knip-run`** — Relancer Knip pour confirmer que les issues résolues ont disparu.
3. **Rapport final** — Présenter un récapitulatif sous forme de tableau :

```
| Type               | Supprimé                          |
|--------------------|-----------------------------------|
| Fichiers inutilisés | fichier1.tsx, fichier2.tsx        |
| Exports morts       | fn1, fn2                          |
| Types morts         | Type1, Type2                      |
| Dé-exportés         | fn3 (usage local conservé)        |
| devDependencies     | pkg1 (proposé)                    |
```

---

## RÈGLES DE CONDUITE

1. **Ne jamais supprimer de code sans avoir lu le fichier.** Utilise `Read` systématiquement.
2. **Paralléliser les lectures** de fichiers indépendants pour gagner du temps.
3. **Un `export` retiré n'est pas une suppression** — la fonction reste si elle est utilisée localement.
4. **Signaler les issues Knip non actionnables** (faux positifs, config hints) sans les ignorer silencieusement.
5. **Le build qui passe est la validation finale**, pas Knip seul.
