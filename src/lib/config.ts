export const config = {
  calComUrl: process.env.NEXT_PUBLIC_CAL_COM_URL || "https://cal.com/votre-nom/consultation-gratuite",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://thierry-lecoachpro.fr",
  contactEmail: "contact@coaching-pro.fr",
} as const
