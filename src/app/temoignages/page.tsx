import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import TestimonialCard from "@/components/testimonial-card"
import { MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getTestimonialsWithCache } from "@/lib/testimonials"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Témoignages clients | Coaching Professionnel",
  description:
    "Découvrez les témoignages de managers et dirigeants qui ont transformé leur leadership grâce au coaching. Résultats concrets et transformations durables.",
  keywords: ["témoignages", "coaching", "résultats", "transformation", "leadership", "management"],
  openGraph: {
    title: "Témoignages clients - Coaching Professionnel",
    description: "Découvrez comment le coaching a transformé le leadership de nos clients",
    type: "website",
  },
}

export default async function TemoignagesPage() {
  const testimonials = await getTestimonialsWithCache()

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="text-primary" size={32} />
              <span className="text-primary font-montserrat font-medium">Témoignages</span>
            </div>
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-6">
              Ils ont transformé leur leadership
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Découvrez les témoignages authentiques de managers et dirigeants qui ont retrouvé leur souffle grâce au
              coaching. Des transformations concrètes, des résultats durables.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-20">
        <div className="container-max section-padding">
          {testimonials.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gray-50 p-12 rounded-2xl">
                <MessageCircle className="mx-auto mb-4 text-gray-400" size={48} />
                <h2 className="font-montserrat text-2xl font-semibold text-gray-700 mb-4">Témoignages à venir</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Les premiers témoignages de nos clients seront bientôt disponibles. En attendant, n'hésitez pas à nous
                  contacter pour découvrir comment nous pouvons vous accompagner.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-primary/90 transition-colors"
                >
                  Commencer votre transformation
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-16">
              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className={index % 2 === 1 ? "lg:pl-16" : "lg:pr-16"}>
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section - Seulement si il y a des témoignages */}
      {testimonials.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="container-max section-padding">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-montserrat text-3xl font-bold text-primary mb-12 text-center">
                Des résultats qui parlent
              </h2>

              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <p className="text-gray-600">de clients satisfaits recommandent l'accompagnement</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">3-6</div>
                  <p className="text-gray-600">mois pour observer des transformations durables</p>
                </div>

                <div className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <p className="text-gray-600">d'approche personnalisée selon vos enjeux</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-primary font-light leading-relaxed italic">
              "Chaque témoignage raconte une histoire unique de transformation. La vôtre commence par une simple
              conversation."
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Prêt à écrire votre propre témoignage ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Rejoignez ces managers qui ont retrouvé leur souffle et transformé leur leadership. Votre transformation
            commence par un premier échange.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-gray-100 transition-colors"
          >
            Commencer ma transformation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
