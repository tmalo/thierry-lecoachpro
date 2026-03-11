// components/landing/pricing-card.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { formatPrice } from "@/types/program";
import Link from "next/link";

interface PricingCardProps {
  title?: string;
  price: number;
  currency?: string;
  subtitle?: string;
  description?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  className?: string;
  disabled?: boolean;
  isHighlighted?: boolean;
  tarif: "standard" | "early_bird" | "discovery_call";
}

export function PricingCard({
  title,
  price,
  currency = "€",
  subtitle,
  description,
  features,
  ctaText,
  ctaLink,
  className,
  disabled = false,
  isHighlighted = false,
  tarif,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative",
        className,
        isHighlighted && "bg-corail/10 border-corail border-2",
      )}
    >
      {title && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <Badge className="bg-corail text-corail-foreground px-4 py-1">
            {title}
          </Badge>
        </div>
      )}

      <CardContent className={cn("p-8", title && "mt-4")}>
        <div className="text-center">
          <div
            className={cn(
              "mb-2 text-5xl font-bold",
              !isHighlighted && "text-primary",
            )}
          >
            {formatPrice(price, currency)}
          </div>

          {subtitle && <p className="text-muted-foreground mb-6">{subtitle}</p>}

          {description && <p className="mb-6 text-sm">{description}</p>}

          <Separator className="my-6" />

          <ul className="text-foreground mb-6 space-y-4 text-xs">
            {features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center gap-2">
                <Check className="size-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Button
            size="lg"
            className={cn(
              "w-full",
              isHighlighted
                ? "bg-corail text-corail-foreground hover:bg-corail/90"
                : "bg-primary text-primary-foreground",
            )}
            disabled={disabled}
          >
            <Link href={ctaLink}>{ctaText}</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
