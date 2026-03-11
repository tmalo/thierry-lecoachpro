import { OffreDisplayed } from "./offre";
import { ProductInfo } from "./program";

export interface LandingPageProps {
  offre: OffreDisplayed;
  className?: string | undefined;
}

export interface ProductLandingPageProps extends LandingPageProps {
  product: ProductInfo;
}
