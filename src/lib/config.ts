export const config = {
  calComUrl: process.env.NEXT_PUBLIC_CAL_COM_URL || "https://cal.com/votre-nom/consultation-gratuite",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://thierry-lecoachpro.fr",
  contactEmail: "contact@coaching-pro.fr",
  umami : {
    src: process.env.NEXT_PUBLIC_UMAMI_URL || "https://cloud.umami.is/script.js",
    websiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID || 8,
  },
} as const
