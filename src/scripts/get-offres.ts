import { extendedOffres, featuredOffres, offres } from "@/lib/offres_data";
import { OffreDisplayed } from "@/types/offre";
import * as fs from "fs";
import path from 'path';

/**
 * Transforms a string into a URL-friendly slug.
 * - Removes accents / diacritics
 * - Converts to lowercase
 * - Replaces spaces and separators with hyphens
 * - Removes non-alphanumeric characters
 * - Trims extra hyphens
 */
function slugify(input: string): string {
  return input
    .normalize("NFD") // separate accents from letters
    .replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // replace non-alphanumerics with hyphen
    .replace(/^-+|-+$/g, ""); // trim leading/trailing hyphens
}

export function getOffres() {
  const displayedOffres: OffreDisplayed[] = offres.map((offre) => {
    const _slug = slugify(offre.title);
    return {
      ...offre,
      slug: _slug,
      hasDetailPage: fs.existsSync(`./src/app/offres/${_slug}/page.tsx`),
      featured: featuredOffres.includes(offre.sku),
      collapsed: !extendedOffres.includes(offre.sku),
    };
  });

  const data = JSON.stringify(displayedOffres, null, 2);
  //console.log(data)
  const outPath = "./src/generated/displayed-offres.json";
  fs.mkdirSync(path.dirname(outPath), { recursive: true }); // ensure folder exists
  (fs.writeFileSync(outPath, data), "utf8");
}

getOffres();
