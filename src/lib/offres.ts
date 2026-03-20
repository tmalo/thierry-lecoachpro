import { OffreDisplayed } from "@/types/offre";
import { User } from "lucide-react";
import offresDisplayed from "../generated/displayed-offres.json";
import { offres } from "./offres_data";

/**
 * Liste toutes les offres
 * @param legacy true, si il faut inclure les offres legacy
 * @returns Un tableau d'offres
 */
export function getOffres(legacy:boolean = false): OffreDisplayed[] {
  const _offres = legacy ? offresDisplayed : offresDisplayed.filter((x) => !x.legacy)
  return _offres.map((offre) => {
    return {
      ...offre,
      icon: offres.find((x) => offre.sku === x.sku)?.icon || User,
    };
  });
}

// Fonction pour récupérer une offre à partir de son SKU
export function getOffreBySku(sku: string): OffreDisplayed | undefined {
  const displayedOffres = getOffres(true);
  return displayedOffres.find((offre) => offre.sku === sku);
}
