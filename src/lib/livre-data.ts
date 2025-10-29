import { config } from "./config";

export interface LivreData {
  title: string;
  subtitle: string;
  author: {
    name: string;
    jobTitle: string;
    description: string;
  };
  description: string;
  genre: string[];
  audience: string[];
  about: string[];
  inLanguage: string;
  publisher?: string;
  isbn?: string;
  datePublished?: string;
  numberOfPages?: number;
  bookFormat: string[];
  image?: string;
  url: string;
}

export const livreData: LivreData = {
  title: "La méthode 2apex",
  subtitle: "Une nouvelle approche du management",
  author: {
    name: "Thierry Malo",
    jobTitle: "Executive Coach",
    description:
      "Durant plus de 20 ans, Thierry a piloté des projets d'innovation et managé des équipes. Il est aujourd'hui Executive Coach. Fruit de ses diverses expériences, ce livre expose une méthode pratique et concrète, destinée à renforcer l'engagement et l'agentivité des collaborateurs au service d'un but commun dans des environnements complexes et incertains.",
  },
  description:
    "Une approche du management pratique et concrète, pour progresser vers vos ambitions dans un monde de plus en plus incertain.",
  genre: ["Business", "Management", "Leadership", "Professional Development"],
  audience: ["Managers", "Directors", "Team Leaders", "Business Professionals"],
  about: [
    "Management",
    "Leadership",
    "Team Organization",
    "Uncertainty Management",
    "Decision Making",
    "Collective Autonomy",
    "Business Agility",
  ],
  inLanguage: "fr",
  publisher: "À définir", // À remplacer par le vrai éditeur
  // isbn: "978-X-XXX-XXXXX-X", // À ajouter quand disponible
  // datePublished: "2024-XX-XX", // À ajouter quand disponible
  // numberOfPages: 250, // À ajouter quand disponible
  bookFormat: ["Paperback", "EBook"], // À adapter selon les formats disponibles
  url: `${config.siteUrl}/livre`,
};

// Apprentissages du livre
export const apprentissages = [
  "Une autre façon de s'organiser collectivement — pour favoriser l'autonomie, la réactivité et la prise d'initiatives dans l'équipe",
  "Une nouvelle approche du management — adapté à l'incertitude et à la complexité qui caractérisent le monde d'aujourd'hui",
  "Mettre l'incertitude à profit dans vos décisions — et rester en mouvement, y compris quand les prévisions ne peuvent être fiables",
];

// Public cible détaillé
export const publicCible = {
  managers: [
    "Accompagnez votre équipe vers plus d'autonomie.",
    "Alignez votre organisation sur vos ambitions collectives.",
    "Adaptez votre management pour mieux faire face à l'incertitude.",
    "Sortez du pilotage par les urgences.",
  ],
  directeurs: [
    "Favorisez l'adaptation et l'agilité, y compris chez les métiers.",
    "Affranchissez vous des réorganisations 'Big Bang'.",
    "Outillez la communication entre les managers métiers et ceux de l'IT.",
  ],
};
