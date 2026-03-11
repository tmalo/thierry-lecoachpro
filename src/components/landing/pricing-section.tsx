// components/landing/pricing-section.tsx
import { PricingCard } from "./pricing-card";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";
import {
  getStripeLinks,
  hasStarted,
  isEarlyBird,
  ProductInfo,
} from "@/types/program";

export function PricingSection({
  product,
  features,
}: {
  product: ProductInfo;
  features: string[];
}) {
  const stripeLinks = getStripeLinks(product);

  return (
    <section className="section-padding bg-muted/30 py-20">
      <div className="container-max">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Rejoindre le programme
          </h2>

          <div
            className={cn(
              "mb-12",
              isEarlyBird(product) && "grid gap-8 md:grid-cols-2",
            )}
          >
            {/* Early Bird */}
            {isEarlyBird(product) && (
              <PricingCard
                title="Tarif de lancement"
                price={product.program.pricing.early_bird.amount}
                currency={product.program.pricing.early_bird.currency}
                subtitle={
                  product.program.pricing.early_bird.deadline &&
                  `Valable jusqu'au ${formatDate(product.program.pricing.early_bird.deadline)}`
                }
                description={`${product.program.pricing.early_bird.maxSlots} premières places seulement`}
                features={features}
                ctaText="S'inscrire maintenant"
                ctaLink={stripeLinks.early_bird}
                isHighlighted={true}
                tarif="early_bird"
              />
            )}

            {/* Standard */}
            <PricingCard
              className={isEarlyBird(product) ? "" : "mx-auto w-96"}
              price={product.program.pricing.standard.amount}
              currency={product.program.pricing.standard.currency}
              subtitle="Tarif standard"
              description={
                product.program.pricing.early_bird.deadline &&
                `Après le ${formatDate(product.program.pricing.early_bird.deadline)}`
              }
              features={features}
              ctaText="Réserver sa place"
              ctaLink={stripeLinks.standard}
              tarif="standard"
              disabled={hasStarted(product)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
