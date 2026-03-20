import { extendedOffres, featuredOffres, offres } from "@/lib/offres_data";
import { OffreDisplayed } from "@/types/offre";
import * as fs from "fs";
import path from "path";

const jsonSchema = {
  $schema: "http://json-schema.org/draft-07/schema#",
  type: "array",
  items: {
    $ref: "#/definitions/Offre",
  },
  definitions: {
    Offre: {
      type: "object",
      additionalProperties: false,
      required: [
        "sku",
        "icon",
        "title",
        "subtitle",
        "description",
        "audience",
        "douleurs",
        "benefices",
        "modalites",
        "slug",
        "hasDetailPage",
        "featured",
        "collapsed",
      ],
      properties: {
        sku: {
          type: "string",
          pattern: "^[A-Z]{2,5}-[0-9]{2}-[0-9]{2}$",
        },
        icon: {
          type: "object",
          description: "Objet réservé pour les métadonnées d'icône",
        },
        title: {
          type: "string",
          minLength: 1,
        },
        subtitle: {
          type: "string",
          minLength: 1,
        },
        description: {
          type: "string",
          minLength: 1,
        },
        audience: {
          type: "string",
          minLength: 1,
        },
        douleurs: {
          type: "array",
          minItems: 1,
          items: {
            type: "string",
            minLength: 1,
          },
        },
        benefices: {
          type: "array",
          minItems: 1,
          items: {
            type: "string",
            minLength: 1,
          },
        },
        modalites: {
          type: "array",
          minItems: 1,
          items: {
            type: "string",
            minLength: 1,
          },
        },
        slug: {
          type: "string",
          pattern: "^[a-z0-9-]+$",
        },
        hasDetailPage: {
          type: "boolean",
        },
        featured: {
          type: "boolean",
        },
        collapsed: {
          type: "boolean",
        },
        faq: {
          type: "array",
          items: {
            $ref: "#/definitions/FaqItem",
          },
        },
      },
    },
    FaqItem: {
      type: "object",
      additionalProperties: false,
      required: ["question", "answer"],
      properties: {
        question: {
          type: "string",
          minLength: 1,
        },
        answer: {
          type: "string",
          minLength: 1,
        },
      },
    },
  },
};

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
  const outSchemaPath = "./src/generated/displayed-offres.schema.json";
  fs.mkdirSync(path.dirname(outPath), { recursive: true }); // ensure folder exists
  fs.writeFileSync(outPath, data, "utf8");

  fs.writeFileSync(outSchemaPath, JSON.stringify(jsonSchema, null, 2), "utf8");
}

getOffres();
