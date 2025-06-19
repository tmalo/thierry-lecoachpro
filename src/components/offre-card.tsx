import { CheckCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Offre } from '@/lib/offres'

export default function OffreCard({ offre }: { offre: Offre }) {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
      data-sku={offre.sku}
      id={`offre-${offre.sku}`}
    >
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <offre.icon className="text-primary" size={32} />
          </div>
          <div>
            <h2 className="font-montserrat text-2xl md:text-3xl font-bold text-primary">
              {offre.title}
            </h2>
            <p className="text-lg text-gray-600 italic">{offre.subtitle}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          {offre.description}
        </p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Douleurs */}
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-gray-800">
              Si vous ressentez :
            </h3>
            <ul className="space-y-3">
              {offre.douleurs.map((douleur, douleurIndex) => (
                <li key={douleurIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {douleur}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bénéfices */}
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-gray-800">
              Vous repartirez avec :
            </h3>
            <ul className="space-y-3">
              {offre.benefices.map((benefice, beneficeIndex) => (
                <li key={beneficeIndex} className="flex items-start gap-3">
                  <CheckCircle
                    className="text-green-500 mt-0.5 flex-shrink-0"
                    size={16}
                  />
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {benefice}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modalités */}
          <div>
            <h3 className="font-montserrat text-lg font-semibold mb-4 text-gray-800">
              Comment ça marche :
            </h3>
            <ul className="space-y-3">
              {offre.modalites.map((modalite, modaliteIndex) => (
                <li key={modaliteIndex} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-600 text-sm leading-relaxed">
                    {modalite}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link
            href={`/contact?offre=${offre.sku}`}
            className="inline-flex items-center gap-2 text-primary font-montserrat font-medium hover:gap-3 transition-all"
          >
            Échanger sur cette offre
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
