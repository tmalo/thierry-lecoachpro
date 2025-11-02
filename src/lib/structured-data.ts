import { offres, type Offre } from "./offres";
import { livreData, apprentissages } from "./livre-data";
import { config } from "./config";

// Données de l'organisation
const organizationData = {
  "@type": "Organization",
  name: "Coaching Professionnel",
  description: "Être entendu, être clair, être suivi.",
  url: config.siteUrl,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    areaServed: "FR",
    availableLanguage: "French",
  },
  areaServed: {
    "@type": "Place",
    name: "Paris et région parisienne",
  },
  founder: {
    "@type": "Person",
    name: "Thierry Malo",
    jobTitle: "Executive Coach",
    description:
      "Durant plus de 20 ans, Thierry a piloté des projets d'innovation et managé des équipes. Il est aujourd'hui Executive Coach.",
  },
};

// Données de l'auteur
const authorData = {
  "@type": "Person",
  "@id": `${config.siteUrl}#author`,
  name: livreData.author.name,
  jobTitle: livreData.author.jobTitle,
  description: livreData.author.description,
  worksFor: {
    "@id": `${config.siteUrl}#organization`,
  },
  knowsAbout: livreData.about,
  expertise: [
    "Executive Coaching",
    "Team Management",
    "Leadership Development",
    "Innovation Management",
  ],
};

// Convertir une offre en données structurées
function offreToStructuredData(offre: Offre) {
  return {
    "@type": "Service",
    "@id": `${config.siteUrl}/offres#${offre.sku}`,
    name: offre.title,
    description: offre.description,
    serviceType: "Professional Coaching",
    provider: organizationData,
    areaServed: {
      "@type": "Place",
      name: "Paris et région parisienne",
    },
    audience: {
      "@type": "Audience",
      audienceType: offre.audience,
    },
    category: "Business Coaching",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${offre.title} - Modalités`,
      itemListElement: offre.modalites.map((modalite, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: modalite,
        },
        position: index + 1,
      })),
    },
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${config.siteUrl}/contact?offre=${offre.sku}`,
      },
    },
  };
}

// Générer le JSON-LD pour le livre
export function generateLivreStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organisation
      {
        // '@type': 'Organization',
        "@id": `${config.siteUrl}#organization`,
        ...organizationData,
      },
      // Auteur
      authorData,
      // Livre
      {
        "@type": "Book",
        "@id": `${config.siteUrl}/livre#book`,
        name: livreData.title,
        alternateName: livreData.subtitle,
        description: livreData.description,
        author: {
          "@id": `${config.siteUrl}#author`,
        },
        publisher: livreData.publisher
          ? {
              "@type": "Organization",
              name: livreData.publisher,
            }
          : undefined,
        genre: livreData.genre,
        audience: livreData.audience.map((aud) => ({
          "@type": "Audience",
          audienceType: aud,
        })),
        about: livreData.about.map((subject) => ({
          "@type": "Thing",
          name: subject,
        })),
        inLanguage: livreData.inLanguage,
        ...(livreData.isbn && { isbn: livreData.isbn }),
        ...(livreData.datePublished && {
          datePublished: livreData.datePublished,
        }),
        ...(livreData.numberOfPages && {
          numberOfPages: livreData.numberOfPages,
        }),
        bookFormat: livreData.bookFormat,
        url: livreData.url,
        ...(livreData.image && { image: livreData.image }),
        teaches: apprentissages.map((apprentissage) => ({
          "@type": "Thing",
          name: apprentissage,
        })),
        educationalUse: "Professional Development",
        learningResourceType: "Book",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: livreData.url,
            },
          },
          {
            "@type": "BuyAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${config.siteUrl}/contact?sujet=livre`,
            },
          },
        ],
      },
      // Page du livre
      {
        "@type": "WebPage",
        "@id": livreData.url,
        url: livreData.url,
        name: `${livreData.title} - ${livreData.subtitle}`,
        description: livreData.description,
        isPartOf: {
          "@type": "WebSite",
          "@id": `${config.siteUrl}#website`,
          url: config.siteUrl,
          name: "Coaching Professionnel",
        },
        about: {
          "@id": `${config.siteUrl}/livre#book`,
        },
        author: {
          "@id": `${config.siteUrl}#author`,
        },
        mainEntity: {
          "@id": `${config.siteUrl}/livre#book`,
        },
      },
      // FAQ implicite sur le livre
      {
        "@type": "FAQPage",
        "@id": `${livreData.url}#faq`,
        mainEntity: [
          {
            "@type": "Question",
            name: "Qu'apprendrez-vous de ce livre ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: apprentissages.join(" • "),
            },
          },
          {
            "@type": "Question",
            name: "Qui gagnerait à lire ce livre ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: `Ce livre s'adresse principalement aux ${livreData.audience.join(
                ", ",
              )}. Il est particulièrement utile pour les managers qui souhaitent accompagner leur équipe vers plus d'autonomie et les directeurs de la transformation qui veulent favoriser l'adaptation et l'agilité.`,
            },
          },
          {
            "@type": "Question",
            name: "Qui est l'auteur ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: livreData.author.description,
            },
          },
        ],
      },
    ],
  };
}

// Générer le JSON-LD pour toutes les offres
export function generateOffresStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // Organisation
      {
        // '@type': 'Organization',
        "@id": `${config.siteUrl}#organization`,
        ...organizationData,
      },
      // Page des offres
      {
        "@type": "WebPage",
        "@id": `${config.siteUrl}/offres`,
        url: `${config.siteUrl}/offres`,
        name: "Mes offres de coaching",
        description:
          "Trois chemins pour sortir de l'urgence permanente et retrouver un leadership qui vous ressemble.",
        isPartOf: {
          "@type": "WebSite",
          "@id": `${config.siteUrl}#website`,
          url: config.siteUrl,
          name: "Coaching Professionnel",
        },
        about: {
          "@id": `${config.siteUrl}#organization`,
        },
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: offres.length,
          itemListElement: offres.map((offre, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@id": `${config.siteUrl}/offres#${offre.sku}`,
            },
          })),
        },
      },
      // Services individuels
      ...offres.map(offreToStructuredData),
    ],
  };
}

// Générer le JSON-LD pour une offre spécifique
export function generateOffreStructuredData(offre: Offre) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // '@type': 'Organization',
        "@id": `${config.siteUrl}#organization`,
        ...organizationData,
      },
      offreToStructuredData(offre),
    ],
  };
}

// Générer le JSON-LD pour l'organisation
export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    // '@type': 'Organization',
    "@id": `${config.siteUrl}#organization`,
    ...organizationData,
    sameAs: [
      // Ajoutez ici les liens vers les réseaux sociaux si disponibles
      "https://www.linkedin.com/in/tmalo",
      // "https://twitter.com/coaching-pro"
    ],
    knowsAbout: [
      "Executive Coaching",
      "Team Coaching",
      "Leadership Development",
      "Management Training",
      "Professional Development",
    ],
    makesOffer: offres.map((offre) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: offre.title,
        description: offre.description,
        audience: {
          "@type": "Audience",
          audienceType: offre.audience,
        },
      },
    })),
  };
}
