import { OffreDisplayed } from "@/types/offre";
import { User } from "lucide-react";
import offresDisplayed from "../generated/displayed-offres.json";
import { offres } from "./offres_data";

export function getOffres(): OffreDisplayed[] {
  return offresDisplayed.map((offre) => {
    return {
      ...offre,
      icon: offres.find((x) => offre.sku === x.sku)?.icon || User,
    };
  });
}

// Fonction pour récupérer une offre à partir de son SKU
export function getOffreBySku(sku: string): OffreDisplayed | undefined {
  const displayedOffres = getOffres();
  return displayedOffres.find((offre) => offre.sku === sku);
}
