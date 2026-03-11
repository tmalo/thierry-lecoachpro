import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { MarkdownSection, Testimonial } from "@/types/testimonial";

export function parseMarkdownSections(markdown: string): MarkdownSection[] {
  const lines = markdown.split("\n")

  const sections: MarkdownSection[] = []
  let current: MarkdownSection | null = null

  for (const line of lines) {
    const match = line.match(/^(#{2,6})\s+(.*)/)

    if (match) {
      if (current) sections.push(current)

      current = {
        level: match[1].length,
        title: match[2].trim(),
        content: ""
      }

      continue
    }

    if (current) {
      current.content += line + "\n"
    }
  }

  if (current) sections.push(current)

  return sections.map(s => ({
    ...s,
    content: s.content.trim()
  }))
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

export function parseInlineMarkdown(text: string): string {
  text = escapeHtml(text)

  // bold + italic
  text = text.replace(/\*\*\*(.+?)\*\*\*/gs, (_, content) => {
    return `<strong><em>${parseInlineMarkdown(content)}</em></strong>`
  })

  // bold
  text = text.replace(/\*\*(.+?)\*\*/gs, (_, content) => {
    return `<strong>${parseInlineMarkdown(content)}</strong>`
  })

  // italic
  text = text.replace(/\*(.+?)\*/gs, (_, content) => {
    return `<em>${parseInlineMarkdown(content)}</em>`
  })

  return text
}

export function markdownToHtml(markdown: string): string {
  const sections = parseMarkdownSections(markdown)

  return sections
    .map(section => {
      const title = `<h${section.level}>${parseInlineMarkdown(section.title)}</h${section.level}>`

      const paragraphs = section.content
        .split(/\n{2,}/)
        .map(p => `<p>${parseInlineMarkdown(p.trim())}</p>`)
        .join("\n")

      return `${title}\n${paragraphs}`
    })
    .join("\n\n")
}
// Fonction pour parser le contenu Markdown et extraire les sections
function parseTestimonialContent(content: string): Testimonial["content"] {
  const sections: Testimonial["content"] = parseMarkdownSections(content);

  return sections;
}

// Fonction pour lire tous les témoignages depuis les fichiers Markdown
async function getTestimonials(): Promise<Testimonial[]> {
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

// Per-request deduplication via React.cache()
export const getTestimonialsWithCache = cache(getTestimonials);

// Fonction utilitaire pour récupérer un témoignage par ID
export async function getTestimonialById(
  id: string,
): Promise<Testimonial | undefined> {
  const testimonials = await getTestimonialsWithCache();
  return testimonials.find((testimonial) => testimonial.id === id);
}
