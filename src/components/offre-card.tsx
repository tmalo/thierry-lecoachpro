"use client";

import * as React from "react";
import {
  CheckCircle,
  ArrowRight,
  ChevronDown,
  Ellipsis,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { getOffreBySku } from "@/lib/offres";
import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";

export default function OffreCard({ sku }: { sku: string }) {
  const offre = getOffreBySku(sku);
  const [isOpen, setIsOpen] = React.useState(!offre?.collapsed);

  if (!offre) return;

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col gap-2"
    >
      <div
        className={cn(
          "overflow-hidden rounded-2xl border",
          offre.featured
            ? "border-corail/30 from-corail/5 to-corail/5 bg-gradient-to-br via-white"
            : "border-gray-200 bg-white",
        )}
        data-sku={offre.sku}
        data-audience={offre.audience}
        id={`offre-${offre.sku}`}
      >
        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="mb-8 flex gap-4">
            <div className="flex flex-auto items-center gap-4">
              <div
                className={cn(
                  "flex h-16 w-16 items-center justify-center rounded-full",
                  offre.featured
                    ? "from-primary/5 border border-gray-200 bg-gradient-to-br to-white"
                    : "bg-primary/10",
                )}
              >
                <offre.icon
                  className={offre.featured ? "text-corail" : "text-primary"}
                  size={32}
                />
              </div>
              <div>
                <h2 className="font-montserrat text-primary text-2xl font-bold md:text-3xl">
                  {offre.title}
                </h2>
                <p className="text-lg text-gray-600 italic">{offre.subtitle}</p>
              </div>
            </div>
            <CollapsibleTrigger
              asChild
              className="flex w-32 flex-initial gap-4"
            >
              <Button variant="secondary" size="icon" className="size-8">
                <ChevronDown size={32} className={isOpen ? "rotate-180" : ""} />
                <span className="sr-only">Toggle details</span>
              </Button>
            </CollapsibleTrigger>
          </div>

          {/* Description */}
          <p className="mb-8 text-lg leading-relaxed text-gray-700">
            {offre.description}
            {!isOpen ? (
              <Button
                variant="secondary"
                size="icon"
                className="size-8 gap-4"
                onClick={() => setIsOpen(!isOpen)}
              >
                <Ellipsis size={32} />
              </Button>
            ) : (
              ""
            )}
          </p>

          <CollapsibleContent>
            <div className="grid gap-8 lg:grid-cols-3">
              {/* Douleurs */}
              <div>
                <h3 className="font-montserrat mb-4 text-lg font-semibold text-gray-800">
                  Si vous ressentez :
                </h3>
                <ul className="space-y-3">
                  {offre.douleurs.map((douleur, douleurIndex) => (
                    <li key={douleurIndex} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-red-400"></div>
                      <span className="text-sm leading-relaxed text-gray-600">
                        {douleur}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bénéfices */}
              <div>
                <h3 className="font-montserrat mb-4 text-lg font-semibold text-gray-800">
                  Vous repartirez avec :
                </h3>
                <ul className="space-y-3">
                  {offre.benefices.map((benefice, beneficeIndex) => (
                    <li key={beneficeIndex} className="flex items-start gap-3">
                      <CheckCircle
                        className="mt-0.5 flex-shrink-0 text-green-500"
                        size={16}
                      />
                      <span className="text-sm leading-relaxed text-gray-600">
                        {benefice}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modalités */}
              <div>
                <h3 className="font-montserrat mb-4 text-lg font-semibold text-gray-800">
                  Comment ça marche :
                </h3>
                <ul className="space-y-3">
                  {offre.modalites.map((modalite, modaliteIndex) => (
                    <li key={modaliteIndex} className="flex items-start gap-3">
                      <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                      <span className="text-sm leading-relaxed text-gray-600">
                        {modalite}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CollapsibleContent>

          {/* CTA */}
          <div className="mt-8 flex gap-8 border-t border-gray-200 pt-6">
            {offre.hasDetailPage && (
              <Link
                href={`/offres/${offre.slug}`}
                className="text-primary font-montserrat inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
              >
                Lire plus
                <ExternalLink size={12} />
              </Link>
            )}

            <Link
              href={`/contact?offre=${offre.sku}`}
              className="text-primary font-montserrat inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
            >
              Échanger sur cette offre
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </Collapsible>
  );
}
