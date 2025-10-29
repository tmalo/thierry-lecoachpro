import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Offre } from "@/lib/offres";

export default function OffreCard({ offre }: { offre: Offre }) {
  return (
    <div
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white"
      data-sku={offre.sku}
      data-audience={offre.audience}
      id={`offre-${offre.sku}`}
    >
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
            <offre.icon className="text-primary" size={32} />
          </div>
          <div>
            <h2 className="font-montserrat text-primary text-2xl font-bold md:text-3xl">
              {offre.title}
            </h2>
            <p className="text-lg text-gray-600 italic">{offre.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="mb-8 text-lg leading-relaxed text-gray-700">
          {offre.description}
        </p>

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

        {/* CTA */}
        <div className="mt-8 border-t border-gray-200 pt-6">
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
  );
}
