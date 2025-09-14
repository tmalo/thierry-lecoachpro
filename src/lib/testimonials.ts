import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Testimonial } from "@/types/testimonial";

// Fonction pour parser le contenu Markdown et extraire les sections
function parseTestimonialContent(content: string): Testimonial["content"] {
  const sections: Testimonial["content"] = {};

  // Diviser le contenu par les titres de niveau 2
  const parts = content.split(/^## /m).filter((part) => part.trim());

  parts.forEach((part) => {
    const lines = part.trim().split("\n");
    const title = lines[0].toLowerCase();
    const text = lines.slice(1).join("\n").trim();

    if (title.includes("avant le coaching")) {
      sections.avant = text;
    } else if (
      title.includes("difficultés au quotidien") ||
      title.includes("difficultes au quotidien")
    ) {
      sections.difficultes = text;
    } else if (
      title.includes("ce que le coaching m'a apporté") ||
      title.includes("ce que le coaching m'a apporte")
    ) {
      sections.apport = text;
    } else if (
      title.includes("résultats concrets") ||
      title.includes("resultats concrets")
    ) {
      sections.resultats = text;
    }
  });

  return sections;
}

// Fonction pour lire tous les témoignages depuis les fichiers Markdown
export async function getTestimonials(): Promise<Testimonial[]> {
  const testimonialsDirectory = path.join(process.cwd(), "testimonials");

  // Vérifier si le répertoire existe
  if (!fs.existsSync(testimonialsDirectory)) {
    console.log(testimonialsDirectory);
    console.warn("Le répertoire testimonials/ n'existe pas");
    return [];
  }

  const filenames = fs.readdirSync(testimonialsDirectory);
  const markdownFiles = filenames.filter((name) => name.endsWith(".md"));

  const testimonials: Testimonial[] = markdownFiles.map((filename) => {
    const filePath = path.join(testimonialsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");

    // Parser le front matter et le contenu
    const { data, excerpt, content } = matter(fileContents, { excerpt: true });

    // Extraire l'ID du nom de fichier (sans l'extension)
    const id = filename.replace(/\.md$/, "");

    // Parser le contenu pour extraire les sections
    const parsedContent = parseTestimonialContent(content);

    return {
      id,
      offre: data.offre || "",
      person: data.person || "",
      job: data.job || "",
      date: data.date || "",
      description: data.description || excerpt || "",
      gender: data.gender,
      content: parsedContent,
    };
  });

  // Trier par date (plus récent en premier)
  return testimonials.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

// Cache pour éviter de relire les fichiers à chaque appel
let testimonialsCache: Testimonial[] | null = null;

export async function getTestimonialsWithCache(): Promise<Testimonial[]> {
  if (testimonialsCache === null) {
    testimonialsCache = await getTestimonials();
  }
  return testimonialsCache;
}

// Fonction utilitaire pour récupérer un témoignage par ID
export async function getTestimonialById(
  id: string,
): Promise<Testimonial | undefined> {
  const testimonials = await getTestimonialsWithCache();
  return testimonials.find((testimonial) => testimonial.id === id);
}

// Fonction utilitaire pour récupérer les témoignages par offre
export async function getTestimonialsByOffre(
  offre: string,
): Promise<Testimonial[]> {
  const testimonials = await getTestimonialsWithCache();
  return testimonials.filter((testimonial) => testimonial.offre === offre);
}

// Fonction pour invalider le cache (utile en développement)
export function clearTestimonialsCache(): void {
  testimonialsCache = null;
}
