// components/landing/hero-section.tsx
import {
  formatPrice,
  getPrice,
  hasStarted,
  ProductInfo,
} from "@/types/program";
import Section from "../section";

import { LandingPageProps } from "@/types/landing-page";
import { formatDate } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

export function HeroSection({
  offre,
  product,
  ...rest
}: LandingPageProps & {
  product?: ProductInfo;
}) {
  return (
    <Section className="md:py-32" {...rest}>
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold text-balance md:text-6xl">
          {offre.title}
        </h1>
        <p className="text-muted-foreground mb-8 text-2xl text-balance md:text-3xl">
          {offre.subtitle}
        </p>
        <p className="text-foreground/80 mb-12 text-xl">{offre.audience}</p>

        {product && <ProductPart product={product} />}
      </div>
    </Section>
  );
}

function ProductPart({ product }: { product: ProductInfo }) {
  const pricing = getPrice(product);
  const formatedPrice =
    (pricing.tarif === "early_bird" ? "Tarif early bird : " : "Tarif : ") +
    formatPrice(pricing.price.amount);

  return (
    <div>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Button
          disabled={hasStarted(product)}
          size="lg"
          className="bg-corail text-corail-foreground hover:bg-corail/90 px-8 py-6 text-lg"
        >
          <Link href={pricing.paymentUrl}>{formatedPrice}</Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="default"
          className="px-8 py-6 text-lg"
        >
          <Link href={product.calCom.discoveryCallUrl}>
            Appel découverte gratuit
          </Link>
        </Button>
      </div>

      <p className="text-muted-foreground mt-4 text-sm">
        Début : {formatDate(product.program.startDate)}
        <span className="hidden">
          {" "}
          • Places disponibles : {product.program.availablePlaces}/
          {product.program.maxParticipants}
        </span>
      </p>
    </div>
  );
}
