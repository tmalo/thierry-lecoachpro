export type Tarif = "standard" | "early_bird";
export type SessionType = "individuelle" | "collective";

export interface Session {
  id: string;
  title: string;
  description: string;
  type: SessionType;
  duration: string;
  week: string;
  bullets?: string[];
  outcome: string;
}

interface Price {
  amount: number;
  currency: string;
  deadline?: Date;
  maxSlots?: number;
}
interface CalCom {
  discoveryCallUrl: string;
}
type PaymentLink = Record<Tarif, string>;
type Stripe = Record<"test" | "production", PaymentLink>;
type Pricing = Record<Tarif, Price>;

export interface Deliverable {
  emoji: string;
  title: string;
  description: string;
}

export interface Program {
  startDate: Date;
  duration: string;
  maxParticipants: number;
  availablePlaces: number;
  pricing: Pricing;
}
export interface ProductInfo {
  sku: string;
  calCom: CalCom;
  stripe: Stripe;
  program: Program;
  sessions: Session[];
  deliverables?: Deliverable[];
}

// Helper pour obtenir les liens Stripe selon l'environnement
export const getStripeLinks = (productInfo: ProductInfo) => {
  const isProduction =
    process.env.NODE_ENV === "production" &&
    process.env.NEXT_PUBLIC_STRIPE_MODE === "live";

  return isProduction ? productInfo.stripe.production : productInfo.stripe.test;
};

export const isEarlyBird = (productInfo: ProductInfo): boolean =>
  (productInfo.program.pricing.early_bird.deadline &&
    new Date() < productInfo.program.pricing.early_bird.deadline &&
    productInfo.program.maxParticipants - productInfo.program.availablePlaces <
      (productInfo.program.pricing.early_bird.maxSlots || 0)) ||
  false;

export const hasStarted = (productInfo: ProductInfo): boolean =>
  new Date() >= productInfo.program.startDate;

export const getPrice = (
  productInfo: ProductInfo,
): {
  tarif: Tarif;
  paymentUrl: string;
  price: { amount: number; currency: string };
} => {
  const links = getStripeLinks(productInfo);
  if (isEarlyBird(productInfo)) {
    return {
      tarif: "early_bird",
      paymentUrl: links.early_bird,
      price: productInfo.program.pricing.early_bird,
    };
  }
  return {
    tarif: "standard",
    paymentUrl: links.standard,
    price: productInfo.program.pricing.standard,
  };
};

// Helper pour formater les prix
export const formatPrice = (amount: number, currency: string = "€") => {
  return `${amount.toLocaleString("fr-FR")} ${currency}`;
};
