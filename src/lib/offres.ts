import { type LucideIcon, User, Users, Lightbulb } from "lucide-react";

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

export const offres: Offre[] = [
  {
    sku: "CSI-25-01",
    icon: User,
    title: "Coaching individuel",
    subtitle: "Transformer votre expertise en impact visible",
    description:
      "Un accompagnement sur mesure pour les experts techniques qui veulent être compris, suivis et reconnus à leur juste valeur. Ensemble, nous travaillons sur votre communication, votre positionnement et votre capacité à influencer, pour que votre expertise technique se traduise en impact concret.",
    audience: "Technical Experts & Managers",
    douleurs: [
      "Vos idées techniques ne sont pas comprises par les non-spécialistes",
      "Vous avez du mal à faire passer votre vision auprès de votre équipe ou de la direction",
      "Vous vous sentez bloqué dans votre évolution de carrière sans management hiérarchique",
      "Vous manquez de reconnaissance malgré votre expertise technique",
    ],
    benefices: [
      "Adapter votre discours pour être compris par tous, techniques ou non",
      "Présenter votre vision de manière claire et mobilisatrice",
      "Trouver votre place en CoTech ou CoDir avec légitimité",
      "Progresser dans votre carrière en valorisant votre expertise",
    ],
    modalites: [
      "Séances individuelles de 90 minutes",
      "Accompagnement sur 3 à 6 mois",
      "Rythme adapté à votre agenda",
      "Suivi personnalisé entre les séances",
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
    subtitle: "Des outils pour transformer votre expertise en influence",
    description:
      "Des moments d'apprentissage collectif pour développer les compétences clés des experts techniques : communiquer avec impact auprès des non-spécialistes, structurer et présenter une vision technique mobilisatrice, ou décider efficacement dans l'incertitude. Chaque atelier offre des outils concrets et immédiatement applicables.",
    audience: "Technical Professionals",
    douleurs: [
      "Difficulté à vulgariser des concepts techniques complexes",
      "Manque de méthodes pour présenter une vision technique convaincante",
      "Paralysie décisionnelle face au manque d'informations",
      "Besoin d'outils pour gagner en influence sans autorité hiérarchique",
    ],
    benefices: [
      "Techniques de vulgarisation pour être compris par tous",
      "Méthodes pour structurer et présenter une vision mobilisatrice",
      "Outils de décision dans l'incertitude",
      "Stratégies d'influence pour les experts techniques",
    ],
    modalites: [
      "Formats de 2h à 1 journée",
      "Groupes de 6 à 12 participants",
      "Méthodes interactives et créatives",
      "Support pédagogique personnalisé",
    ],
  },
]

// Fonction pour récupérer une offre à partir de son SKU
export function getOffreBySku(sku: string): Offre | undefined {
  return offres.find((offre) => offre.sku === sku);
}
