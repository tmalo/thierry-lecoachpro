import { LucideIcon } from "lucide-react";

export interface Faq {
  question: string;
  answer: string;
}

export interface Offre {
  sku: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  audience: string;
  douleurs: string[];
  benefices: string[];
  modalites: string[];
  faq?: Faq[];
}

export interface OffreDisplayed extends Offre {
  slug: string;
  hasDetailPage: boolean;
  featured: boolean;
  collapsed: boolean;
}
