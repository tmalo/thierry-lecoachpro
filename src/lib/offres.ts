import { type LucideIcon, User, Users, Lightbulb } from "lucide-react"

export interface Offre {
  sku: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  douleurs: string[]
  benefices: string[]
  modalites: string[]
}


export const offres: Offre[] = [
  {
    sku: "CSI-25-01",
    icon: User,
    title: "Coaching individuel",
    subtitle: "Retrouver votre souffle de leader",
    description:
      "Un espace sur mesure pour sortir de la réaction permanente, gagner en clarté, et retrouver votre capacité à décider selon vos convictions. Ensemble, nous créons les conditions pour que vous repreniez la main sur votre leadership, même dans la turbulence.",
    douleurs: [
      "Vous croulez sous la pression des livrables et les réunions sans fin",
      "Vous ressentez une fatigue décisionnelle constante",
      "Vous agissez souvent en réaction, sans temps pour prendre du recul",
      "Vous portez seul·e la charge mentale de votre équipe",
    ],
    benefices: [
      "Un espace de réflexion à l'abri des pressions",
      "De la clarté même en pleine turbulence",
      "Des actions alignées avec vos convictions",
      "Des idées neuves nées de la sérénité retrouvée",
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
    subtitle: "Transformer la dynamique collective",
    description:
      "Quand les tensions minent la performance et que la démotivation s'installe, il est temps de recréer une dynamique d'engagement. Nous travaillons ensemble pour que votre équipe retrouve sa créativité et sa capacité d'action collective.",
    douleurs: [
      "Turnover élevé et démotivation visible",
      "Passivité de l'équipe face aux défis",
      "Tensions relationnelles qui parasitent le travail",
      "Une équipe perdue qui a du mal à gérer ses priorités",
    ],
    benefices: [
      "Une équipe engagée et créative",
      "Une performance collective retrouvée",
      "Des relations apaisées et constructives",
      "Une capacité d'adaptation aux changements",
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
    subtitle: "Des outils pour respirer autrement",
    description:
      "Des moments d'apprentissage collectif pour développer des compétences clés : sortir de l'urgence permanente, communiquer avec impact, ou libérer la créativité de l'équipe. Chaque atelier offre des outils concrets pour transformer votre quotidien.",
    douleurs: [
      "Manque d'outils pour gérer la pression",
      "Communication inefficace en situation de stress",
      "Créativité bridée par l'urgence constante",
      "Besoin de techniques pour prendre du recul",
    ],
    benefices: [
      "Des outils pratiques immédiatement applicables",
      "Une meilleure gestion de la pression",
      "Une communication plus fluide et impactante",
      "Des techniques pour libérer la créativité",
    ],
    modalites: [
      "Formats de 2h à 1 journée",
      "Groupes de 6 à 12 participants",
      "Méthodes interactives et créatives",
      "Support pédagogique personnalisé",
    ],
  },
]
