import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import OffreCard from "@/components/offre-card";
import StructuredData from "@/components/structured-data";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { offres } from "@/lib/offres";
import type { Metadata } from "next";
import { CtaSection, CtaButton } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Mes offres de coaching | Coaching Professionnel",
  description:
    "Trois chemins pour sortir de l'urgence permanente et retrouver un leadership qui vous ressemble. Coaching individuel, coaching d'équipe et ateliers thématiques.",
  keywords: [
    "coaching",
    "leadership",
    "management",
    "équipe",
    "formation",
    "développement professionnel",
  ],
  openGraph: {
    title: "Mes offres de coaching",
    description:
      "Coaching individuel, coaching d'équipe et ateliers thématiques pour retrouver un leadership authentique.",
    type: "website",
  },
};
export default function OffresPage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="offres" />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-montserrat text-primary mb-6 text-4xl font-bold md:text-5xl">
              Mes offres de coaching
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Trois chemins pour sortir de l&apos;urgence permanente et
              retrouver un leadership qui vous ressemble. Chaque accompagnement
              est pensé pour vous redonner du souffle et de la clarté.
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
      <section className="bg-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-8 text-center text-3xl font-bold">
              Le coaching individuel en détail
            </h2>

            <div className="mb-8 rounded-lg border border-gray-200 bg-white p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="font-montserrat mb-4 flex items-center gap-2 text-xl font-semibold">
                    <Clock className="text-primary" size={20} />
                    Séances de 90 minutes
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Un temps suffisant pour aller au-delà des urgences du
                    quotidien et explorer en profondeur vos enjeux de
                    leadership.
                  </p>
                </div>

                <div>
                  <h3 className="font-montserrat mb-4 flex items-center gap-2 text-xl font-semibold">
                    <Calendar className="text-primary" size={20} />
                    Accompagnement 3-6 mois
                  </h3>
                  <p className="mb-4 leading-relaxed text-gray-600">
                    Le temps nécessaire pour ancrer de nouveaux réflexes et voir
                    les transformations s&apos;installer durablement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 border-primary/10 rounded-lg border p-8">
              <h3 className="font-montserrat text-primary mb-4 text-xl font-semibold">
                Premier entretien gratuit
              </h3>
              <p className="leading-relaxed text-gray-700">
                Nous commençons toujours par un entretien de 30 minutes, sans
                engagement, pour faire connaissance et explorer ensemble si mon
                approche résonne avec vos besoins. C&apos;est l&apos;occasion de
                poser toutes vos questions et de sentir si nous pouvons créer
                cet espace de confiance nécessaire à votre transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="text-primary text-2xl leading-relaxed font-light italic md:text-3xl">
              &ldquo;Chaque accompagnement est une invitation à sortir de la
              réaction pour retrouver votre pouvoir d&apos;agir en
              conscience.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection
        variant="section"
        title="Prêt à sortir de l'urgence permanente ?"
        description="Commençons par identifier ensemble l'accompagnement qui vous permettra de retrouver votre souffle et votre clarté de leader."
      >
        <CtaButton href="/contact" icon={<ArrowRight size={20} />}>
          Planifier notre premier échange
        </CtaButton>
      </CtaSection>

      <Footer />
    </div>
  );
}
