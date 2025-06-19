import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import OffreCard from "@/components/offre-card"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { offres } from "@/lib/offres"

export default function OffresPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-6">Mes offres de coaching</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Trois chemins pour sortir de l&apos;urgence permanente et retrouver un leadership qui vous ressemble. Chaque
              accompagnement est pensé pour vous redonner du souffle et de la clarté.
            </p>
          </div>
        </div>
      </section>

      {/* Offres Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="space-y-20">
            {offres.map((offre) => (
              <OffreCard key={offre.sku} offre={offre} />
            ))}
          </div>
        </div>
      </section>

      {/* Focus Coaching Individuel */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-primary mb-8 text-center">
              Le coaching individuel en détail
            </h2>

            <div className="bg-white p-8 rounded-lg border border-gray-200 mb-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="text-primary" size={20} />
                    Séances de 90 minutes
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Un temps suffisant pour aller au-delà des urgences du quotidien et explorer en profondeur vos enjeux
                    de leadership.
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-4 flex items-center gap-2">
                    <Calendar className="text-primary" size={20} />
                    Accompagnement 3-6 mois
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Le temps nécessaire pour ancrer de nouveaux réflexes et voir les transformations s&apos;installer
                    durablement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary">Premier entretien gratuit</h3>
              <p className="text-gray-700 leading-relaxed">
                Nous commençons toujours par un entretien de 30 minutes, sans engagement, pour faire connaissance et
                explorer ensemble si mon approche résonne avec vos besoins. C&apos;est l'occasion de poser toutes vos
                questions et de sentir si nous pouvons créer cet espace de confiance nécessaire à votre transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-primary font-light leading-relaxed italic">
              "Chaque accompagnement est une invitation à sortir de la réaction pour retrouver votre pouvoir d&apos;agir en
              conscience."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Prêt à sortir de l&apos;urgence permanente ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Commençons par identifier ensemble l&apos;accompagnement qui vous permettra de retrouver votre souffle et votre
            clarté de leader.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-gray-100 transition-colors"
          >
            Planifier notre premier échange
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
