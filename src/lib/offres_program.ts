import { ProductInfo } from "@/types/program";

const northStarProgram: ProductInfo = {
  sku: "NST-26-01",
  // Cal.com
  calCom: {
    discoveryCallUrl:
      "https://cal.com/thierry-lecoach/decouverte-reprendre-la-main",
  },

  // Stripe
  stripe: {
    // Mode test (développement)
    test: {
      early_bird: "https://buy.stripe.com/test_eVqbJ170xcRC1bi0JYgUM01",
      standard: "https://buy.stripe.com/test_00w6oHfx34l69HO2S6gUM02",
    },
    // Mode production (à remplir quand tu passes en prod)
    production: {
      early_bird: "https://buy.stripe.com/28E7sEdV9ePFezM79BeME01", // À remplir avec le vrai lien Stripe prod
      standard: "https://buy.stripe.com/6oU28kdV9dLBbnA2TleME00", // À remplir avec le vrai lien Stripe prod
    },
  },

  // Programme
  program: {
    startDate: new Date("2026-04-07"), //"7 avril 2025",
    duration: "4 semaines",
    maxParticipants: 6,
    availablePlaces: 6,
    pricing: {
      early_bird: {
        amount: 1990,
        currency: "€",
        deadline: new Date("2026-03-09"), //"9 février 2025",
        maxSlots: 4,
      },
      standard: {
        amount: 2900,
        currency: "€",
      },
    },
  },

  // Sessions
  sessions: [
    {
      id: "kickoff",
      title: "Un diagnostic individuel pour comprendre votre système",
      description: "On identifie ensemble :",
      type: "individuelle",
      duration: "1h",
      week: "Kick-off",
      bullets: [
        "Vos points de friction réels",
        "Votre place dans le système (entre direction et équipe)",
        "L'aspect du programme qui résonne le plus pour vous",
      ],
      outcome:
        "À la fin : vous changez d'attitude face aux perturbations. Vous comprenez ce que vous pouvez vraiment influencer.",
    },
    {
      id: "week1",
      title: "Construire une raison d'être, l'ossature de votre vision",
      description:
        "Avec le groupe et un outil maison, vous construisez une raison d'être claire pour votre équipe ou votre périmètre technique.",
      type: "collective",
      duration: "1h30",
      week: "Semaine 1",
      outcome:
        "À la fin : vous savez donner du sens à l'action en face à face — que ce soit avec la direction ou en 1:1 avec un collaborateur.",
    },
    {
      id: "week2",
      title: "Structure votre vision et outiller le pilotage",
      description: "On structure ensemble :",
      type: "collective",
      duration: "1h30",
      week: "Semaine 2",
      bullets: [
        "Votre vision (à quoi ressemble le succès dans 6-12 mois ?)",
        "Les rituels d'avancement et de pilotage qui collent à votre contexte",
      ],

      outcome:
        "À la fin : vous avez un cap clair et un dispositif de suivi léger et vivant.",
    },
    {
      id: "week3",
      title: "Communiquez pour embarquer équipe et direction",
      description: "On construit ensemble :",
      type: "collective",
      duration: "1h30",
      week: "Semaine 3",
      bullets: [
        "La structure de votre communication (présentation à toute l'équipe ou pitch formel à la direction)",
        "Votre support de présentation",
      ],

      outcome:
        "À la fin : vous savez comment donner le cap collectivement, de manière convaincante et alignée à votre personnalité.",
    },
    {
      id: "week4",
      title: "Lever vos blocages spécifiques",
      description: "On traite vos obstacles spécifiques :",
      type: "individuelle",
      duration: "1h",
      week: "Semaine 4",
      bullets: [
        "Ce qui bloque encore dans votre contexte",
        "Les objections que vous anticipez",
        "Votre préparation finale avant de communiquer",
      ],

      outcome:
        "À la fin : vous êtes prêt à passer à l'action, avec clarté et confiance.",
    },
    {
      id: "retrospective",
      title: "Ancrer la transformation dans la durée",
      description:
        "On fait le bilan, on partage les premiers retours d'expérience, on anticipe les prochaines étapes.",
      type: "collective",
      duration: "1h30",
      week: "Rétrospective",
      outcome: "À la fin : vous savez comment tenir votre cap dans la durée.",
    },
  ],

  deliverables: [
    {
      emoji: "🧭",
      title: "Une posture stable",
      description:
        "pour accueillir les demandes contradictoires sans vous épuiser",
    },
    {
      emoji: "🎯",
      title: "Une raison d'être claire",
      description:
        "qui donne du sens à votre action et à celle de votre équipe",
    },
    {
      emoji: "🗺️",
      title: "Une vision structurée",
      description: "et un dispositif de pilotage adapté à votre style",
    },
    {
      emoji: "💬",
      title: "Un support de communication",
      description: "aligné à votre personnalité et validé par le groupe",
    },
    {
      emoji: "🔧",
      title: "Des rituels opérationnels",
      description: "pour garder le cap au quotidien",
    },
    {
      emoji: "📚",
      title: "Templates et frameworks",
      description: "réutilisables (Notion / Miro)",
    },
  ],
};

const programs: ProductInfo[] = [northStarProgram];

// Fonction pour récupérer une offre à partir de son SKU
export function getProgramBySku(sku: string): ProductInfo | undefined {
  return programs.find((offre) => offre.sku === sku);
}
