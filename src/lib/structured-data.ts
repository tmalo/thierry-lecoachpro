import { offres, type Offre } from './offres'
import { config } from './config'

// Données de l'organisation
const organizationData = {
  '@type': 'Organization',
  name: 'Coaching Professionnel',
  description: "L'équipe inspire, le leader respire",
  url: config.siteUrl,
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    areaServed: 'FR',
    availableLanguage: 'French',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Paris et région parisienne',
  },
  founder: {
    '@type': 'Person',
    name: 'Thierry Malo',
    jobTitle: 'Executive Coach',
    description:
      "Durant plus de 20 ans, Thierry a piloté des projets d'innovation et managé des équipes. Il est aujourd'hui Executive Coach.",
  },
}

// Convertir une offre en données structurées
function offreToStructuredData(offre: Offre) {
  return {
    '@type': 'Service',
    '@id': `${config.siteUrl}/offres#${offre.sku}`,
    name: offre.title,
    description: offre.description,
    serviceType: 'Professional Coaching',
    provider: organizationData,
    areaServed: {
      '@type': 'Place',
      name: 'Paris et région parisienne',
    },
    audience: {
      '@type': 'Audience',
      audienceType: offre.audience,
    },
    category: 'Business Coaching',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${offre.title} - Modalités`,
      itemListElement: offre.modalites.map((modalite, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: modalite,
        },
        position: index + 1,
      })),
    },
    potentialAction: {
      '@type': 'ReserveAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${config.siteUrl}/contact?offre=${offre.sku}`,
      },
    },
  }
}

// Générer le JSON-LD pour toutes les offres
export function generateOffresStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      // Organisation
      {
        // '@type': 'Organization',
        '@id': `${config.siteUrl}#organization`,
        ...organizationData,
      },
      // Page des offres
      {
        '@type': 'WebPage',
        '@id': `${config.siteUrl}/offres`,
        url: `${config.siteUrl}/offres`,
        name: 'Mes offres de coaching',
        description:
          "Trois chemins pour sortir de l'urgence permanente et retrouver un leadership qui vous ressemble.",
        isPartOf: {
          '@type': 'WebSite',
          '@id': `${config.siteUrl}#website`,
          url: config.siteUrl,
          name: 'Coaching Professionnel',
        },
        about: {
          '@id': `${config.siteUrl}#organization`,
        },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: offres.length,
          itemListElement: offres.map((offre, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': `${config.siteUrl}/offres#${offre.sku}`,
            },
          })),
        },
      },
      // Services individuels
      ...offres.map(offreToStructuredData),
    ],
  }
}

// Générer le JSON-LD pour une offre spécifique
export function generateOffreStructuredData(offre: Offre) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        // '@type': 'Organization',
        '@id': `${config.siteUrl}#organization`,
        ...organizationData,
      },
      offreToStructuredData(offre),
    ],
  }
}

// Générer le JSON-LD pour l'organisation
export function generateOrganizationStructuredData() {
  return {
    '@context': 'https://schema.org',
    // '@type': 'Organization',
    '@id': `${config.siteUrl}#organization`,
    ...organizationData,
    sameAs: [
      // Ajoutez ici les liens vers les réseaux sociaux si disponibles
      "https://www.linkedin.com/in/tmalo",
      // "https://twitter.com/coaching-pro"
    ],
    knowsAbout: [
      'Executive Coaching',
      'Team Coaching',
      'Leadership Development',
      'Management Training',
      'Professional Development',
    ],
    makesOffer: offres.map((offre) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offre.title,
        description: offre.description,
        audience: {
          '@type': 'Audience',
          audienceType: offre.audience,
        },
      },
    })),
  }
}
