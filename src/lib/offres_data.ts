import { Offre } from "@/types/offre";
import { User, Users, Lightbulb, Flame, Compass } from "lucide-react";

export const offres: Offre[] = [
  {
    sku: "CSI-25-01",
    legacy: false,
    icon: User,
    title: "Accompagnement individuel",
    subtitle: "Retrouver la clarté — sur votre trajectoire, votre posture, vos priorités",
    description:
      "Les sujets s'empilent, le cap se brouille — et il n'y a personne dans votre boîte à qui dire vraiment ce que vous pensez. Un accompagnement individuel pour identifier ce qui bloque et reprendre une direction assumée. Pas de programme figé : le travail suit ce que votre situation demande.",
    audience: "Managers tech et experts en transition ou en tension dans leur rôle",
    douleurs: [
      "Vous avancez sans cap clair — les sujets s'empilent, l'énergie s'épuise",
      "Vous êtes à un carrefour et ne savez pas comment vous positionner pour la suite",
      "Vous vous sentez incompris — par votre N+1, la direction, ou les parties prenantes",
      "Vous tournez en rond sur les mêmes questions sans pouvoir les poser à voix haute",
    ],
    benefices: [
      "Une lecture nette de ce qui vous retient — pas les raisons de façade",
      "Un positionnement clair : savoir comment vous présenter et tenir votre place",
      "Des priorités nettes et une direction dans laquelle avancer sans vous épuiser",
      "La capacité à naviguer dans les dynamiques de votre organisation sans perdre votre posture",
    ],
    modalites: [
      "Séances individuelles de 90 minutes",
      "Accompagnement sur 3 à 6 mois",
      "Rythme adapté à votre agenda",
      "Session initiale GO/NoGo — vous repartez avec quelque chose d'actionnable ou vous ne continuez pas",
    ],
  },
  {
    sku: "HSC-26-01",
    icon: Flame,
    title: "Hot Sync",
    subtitle: "Reprendre la main sur les arbitrages et la direction collective",
    description:
      "Hot Sync est un accompagnement stratégique pour les équipes de direction tech qui font face à des arbitrages bloqués, des priorités floues et une dette organisationnelle croissante. L’objectif : passer de la réaction permanente à une direction collective claire, capable de décider, de prendre du recul et de devenir autonome dans la transformation de son organisation.",
    audience: "CTO, VP Engineering, équipes de direction tech",
    douleurs: [
      "Les arbitrages structurants n’arrivent jamais ou trop tard",
      "Les priorités sont floues et génèrent une angoisse permanente du mauvais focus",
      "La dette technique et organisationnelle s’accumule sans être arbitrée",
      "Les dépendances entre équipes deviennent des blocages récurrents",
      "Les managers techniques peinent à décider collectivement",
    ],
    benefices: [
      "Des arbitrages clairs, assumés collectivement, avec des critères partagés",
      "Un focus retrouvé sur ce qui compte vraiment",
      "Une meilleure coordination entre équipes grâce à des dépendances explicites",
      "Moins de réaction dans l’urgence, plus de capacité à construire dans la durée",
      "Une autonomie collective pour évaluer et ajuster l’organisation sans aide externe",
    ],
    modalites: [
      "Accompagnement sur 6 à 12 mois",
      "Entretiens individuels (phase de diagnostic)",
      "6 demi-journées de travail collectif avec l’équipe de direction tech",
      "Rythme mensuel ou bimensuel",
      "Synthèses écrites et outil d’auto-évaluation organisationnelle",
    ],
  },
  {
    sku: "NST-26-01",
    icon: Compass,
    title: "Programme North Star",
    subtitle:
      "4 semaines pour sortir du chaos et redevenir un manager qui a de l'impact",
    description:
      "Un programme intensif pour les Tech Leads et Heads of en scale-up coincés entre les attentes de la direction et les besoins de l'équipe. En 4 semaines, vous construisez une raison d'être claire, une vision structurée et un dispositif de pilotage adapté — pour redevenir un porteur de sens, pas juste un gestionnaire de contradictions.",
    audience:
      "Pour les managers de la Tech qui veulent arrêter de subir les contradictions et retrouver du sens dans leur rôle.",
    douleurs: [
      "Des demandes contradictoires : livrer vite tout en gérant les urgences quotidiennes",
      "Une vision floue : difficile d'aligner tout le monde quand la stratégie change tous les mois",
      "Une énergie dispersée : les réunions s'enchaînent sans savoir où vous allez",
      "Une communication sous tension : dur de convaincre quand vous-même n'êtes pas convaincu",
    ],
    benefices: [
      "Accueillir les contradictions sans vous épuiser — savoir recadrer sans froisser",
      "Retrouver de la fierté dans votre rôle — la direction écoute, l'équipe comprend le cap",
      "Gagner du temps et de l'énergie — les décisions s'alignent, les échanges deviennent fluides",
      "Installer une dynamique durable — votre vision devient un point d'appui commun",
    ],
    modalites: [
      "Programme de 4 semaines en petit groupe (6 participants max)",
      "6 sessions : 4 collectives (1h30) + 2 individuelles (1h)",
      "Outils et frameworks entre les séances, suivi asynchrone",
      "1 session urgence de 30 min incluse",
      "Garantie Clarté : arrêt sans frais après 2 semaines si pas de progression",
    ],
    // FAQ
    faq: [
      {
        question: "Combien de temps ça prend par semaine ?",
        answer:
          "1h30 à 2h00 par semaine : 1h30 de session collective ou 1h de session individuelle, plus 30 min maximum de travail personnel entre les séances.",
      },
      {
        question: "Quand ont lieu les sessions ?",
        answer:
          "Les sessions collectives ont lieu le mardi à 14h00 (Europe/Paris). Pour les sessions individuelles, vous pourrez choisir parmi diverses options proposées.",
      },
      {
        question:
          "Que se passe-t-il si je ne peux pas être présent à une session ?",
        answer:
          "Les sessions individuelles peuvent être reprogrammées facilement. Pour les sessions collectives, un replay vous sera fourni et nous trouverons un moment pour débriefer ensemble.",
      },
      {
        question: "Est-ce adapté à mon contexte spécifique ?",
        answer:
          "Le programme est conçu pour les managers de la Tech. Si vous avez un doute, réservez un appel découverte gratuit de 20 min pour en discuter.",
      },
      {
        question: "Paiement en plusieurs fois possible ?",
        answer:
          "Oui, le paiement en 2 fois est possible. Contactez-moi pour organiser cela.",
      },
    ],
  },

  {
    sku: "CST-25-01",
    icon: Users,
    title: "Coaching d'équipe",
    subtitle: "Allier entraide et haut niveau de résultats",
    description:
      "Quand votre équipe technique peine à trouver l'équilibre entre collaboration et performance, ou quand les décisions se bloquent faute d'informations complètes, il est temps de créer une nouvelle dynamique. Nous travaillons ensemble pour instaurer une culture où l'entraide et l'excellence technique se renforcent mutuellement.",
    audience: "Technical Teams",
    douleurs: [
      "L'équipe est paralysée face aux décisions dans l'incertitude",
      "La collaboration est faible et chacun travaille en silo",
      "Les résultats techniques sont bons mais l'ambiance se dégrade",
      "L'équipe manque d'autonomie et attend toujours vos directives",
    ],
    benefices: [
      "Des méthodes concrètes pour décider malgré l'incertitude",
      "Une culture de collaboration et de responsabilité partagée",
      "Un équilibre entre performance technique et entraide",
      "Une équipe autonome, motivée et performante",
    ],
    modalites: [
      "Accompagnement sur 3 à 6 mois",
      "Ateliers sur ½ journée ou 1 journée",
      "Mise en lumière des interactions clés",
      "Expérimentation et régulation des fonctionnements d'équipe",
    ],
  },
  {
    sku: "TSX-25-01",
    icon: Lightbulb,
    title: "Ateliers thématiques",
    subtitle: "Les leviers que l'expertise technique ne suffit plus à activer",
    description:
      "Vous maîtrisez votre domaine. Ce qui coince, c'est ailleurs : faire comprendre vos arbitrages à des non-spécialistes, convaincre sans l'autorité formelle, décider quand l'information manque. Des ateliers en petit groupe pour travailler ces leviers — avec des outils concrets à mettre en pratique dès votre prochaine réunion.",
    audience: "Experts tech et managers qui veulent étendre leur impact au-delà de leur périmètre",
    douleurs: [
      "Vos arbitrages techniques ne passent pas — la direction n'en voit pas la valeur",
      "Vous avez du mal à embarquer des non-spécialistes sur des sujets complexes",
      "Les décisions traînent parce que personne ne sait trancher dans l'incertitude",
      "Votre influence s'arrête aux frontières de votre équipe",
    ],
    benefices: [
      "Des méthodes pour expliquer des enjeux complexes sans simplifier à outrance",
      "La capacité à défendre une vision technique devant un comité non-tech",
      "Un outil de décision pour avancer quand les données manquent",
      "Une influence qui dépasse votre périmètre — sans avoir besoin du titre",
    ],
    modalites: [
      "Formats de 2h à 1 journée",
      "Groupes de 6 à 12 participants",
      "Outils directement utilisables après l'atelier",
      "Sur site ou distanciel",
    ],
  },
];

export const featuredOffres: string[] = ["HSC-26-01"];

export const extendedOffres: string[] = ["CSI-25-01", "HSC-26-01"];
