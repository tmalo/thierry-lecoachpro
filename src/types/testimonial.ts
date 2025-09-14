export interface Testimonial {
  id: string
  offre: string
  person: string
  job: string
  date: string
  description: string
  gender: "boy" | "girl"
  content: {
    avant?: string
    difficultes?: string
    apport?: string
    resultats?: string
  }
}

// Fonction pour générer l'URL de l'avatar
export function getAvatarUrl(person: string, gender: "boy" | "girl"): string {
  return `https://avatar.iran.liara.run/public/${gender}?username=${encodeURIComponent(person)}`
}

// Fonction utilitaire pour formater la date
export function formatTestimonialDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  })
}