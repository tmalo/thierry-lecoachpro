// components/landing/final-cta-section.tsx
import { Button } from "@/components/ui/button";
import Section from "../section";
import { ProductLandingPageProps } from "@/types/landing-page";
import { formatDate } from "@/lib/utils";
import { getPrice, hasStarted, formatPrice } from "@/types/program";
import Link from "next/link";

export function FinalCTASection({
  offre,
  product,
  ...rest
}: ProductLandingPageProps) {
  const pricing = getPrice(product);

  return (
    <Section className="from-primary/5 to-corail/5 bg-gradient-to-b" {...rest}>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-4xl font-bold md:text-5xl">
          Prêt à vous lancer ?
        </h2>
        <p className="text-muted-foreground mb-12 text-xl">{offre.subtitle}</p>

        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            disabled={hasStarted(product)}
            size="lg"
            className="bg-corail text-corail-foreground hover:bg-corail/90 px-10 py-6 text-xl"
          >
            <Link href={pricing.paymentUrl}>
              S&apos;inscrire ({formatPrice(pricing.price.amount)})
            </Link>
          </Button>

          <Button asChild size="lg" className="px-10 py-6 text-xl">
            <Link href={product.calCom.discoveryCallUrl}>Appel découverte</Link>
          </Button>
        </div>

        <div className="text-muted-foreground space-y-2">
          <p>
            <strong>Prochaine session :</strong>{" "}
            {formatDate(product.program.startDate)}
          </p>
          <p className="hidden">
            <strong>Places disponibles :</strong>{" "}
            {product.program.availablePlaces}/{product.program.maxParticipants}
          </p>
          <p>
            <strong>Tarif early bird valable jusqu&apos;au :</strong>{" "}
            {product.program.pricing.early_bird.deadline &&
              formatDate(product.program.pricing.early_bird.deadline)}
          </p>
        </div>
      </div>
    </Section>
  );
}
