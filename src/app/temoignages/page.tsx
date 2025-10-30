import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonial-card";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTestimonialsWithCache } from "@/lib/testimonials";
import type { Metadata } from "next";
import { CtaSection, CtaButton } from "@/components/cta-section";
import Section from "@/components/section";

export const metadata: Metadata = {
  title: "Témoignages clients | Coaching Professionnel",
  description:
    "Découvrez les témoignages de managers et dirigeants qui ont transformé leur leadership grâce au coaching. Résultats concrets et transformations durables.",
  keywords: [
    "témoignages",
    "coaching",
    "résultats",
    "transformation",
    "leadership",
    "management",
  ],
  openGraph: {
    title: "Témoignages clients - Coaching Professionnel",
    description:
      "Découvrez comment le coaching a transformé le leadership de nos clients",
    type: "website",
  },
};

export default async function TemoignagesPage() {
  const testimonials = await getTestimonialsWithCache();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section style="gradient">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <MessageCircle className="text-primary" size={32} />
            <span className="text-primary font-montserrat font-medium">
              Témoignages
            </span>
          </div>
          <h1 className="font-montserrat text-primary mb-6 text-4xl font-bold md:text-5xl">
            Ils ont transformé leur leadership
          </h1>
          <p className="text-xl leading-relaxed text-gray-600">
            Découvrez les témoignages authentiques de managers et dirigeants qui
            ont retrouvé leur souffle grâce au coaching. Des transformations
            concrètes, des résultats durables.
          </p>
        </div>
      </Section>

      {/* Témoignages */}
      <Section>
        {testimonials.length === 0 ? (
          <div className="mx-auto max-w-2xl text-center">
            <div className="rounded-2xl bg-gray-50 p-12">
              <MessageCircle className="mx-auto mb-4 text-gray-400" size={48} />
              <h2 className="font-montserrat mb-4 text-2xl font-semibold text-gray-700">
                Témoignages à venir
              </h2>
              <p className="mb-6 leading-relaxed text-gray-600">
                Les premiers témoignages de nos clients seront bientôt
                disponibles. En attendant, ontactez-moi pour découvrir comment
                je peux vous accompagner.
              </p>
              <Link
                href="/contact"
                className="bg-primary font-montserrat hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
              >
                Commencer votre transformation
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={index % 2 === 1 ? "lg:pl-16" : "lg:pr-16"}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        )}
      </Section>

      {/* Stats Section - Seulement si il y a des témoignages */}
      {/*       {testimonials.length > 0 && (
        <Section style="gray">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold">
              Des résultats qui parlent
            </h2>

            <div className="grid gap-8 text-center md:grid-cols-3">
              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="text-primary mb-2 text-4xl font-bold">95%</div>
                <p className="text-gray-600">
                  de clients satisfaits recommandent l&apos;accompagnement
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="text-primary mb-2 text-4xl font-bold">3-6</div>
                <p className="text-gray-600">
                  mois pour observer des transformations durables
                </p>
              </div>

              <div className="rounded-lg border border-gray-200 bg-white p-8">
                <div className="text-primary mb-2 text-4xl font-bold">100%</div>
                <p className="text-gray-600">
                  d&apos;approche personnalisée selon vos enjeux
                </p>
              </div>
            </div>
          </div>
        </Section>
      )} */}

      {/* Quote Section */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-primary text-2xl leading-relaxed font-light italic md:text-3xl">
            &ldquo;Chaque témoignage raconte une histoire unique de
            transformation. La vôtre commence par une simple
            conversation.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* CTA Section */}
      <CtaSection
        title="Prêt à écrire votre propre témoignage ?"
        description="Rejoignez ces managers qui ont retrouvé leur souffle et transformé
            leur leadership. Votre transformation commence par un premier
            échange."
      >
        <CtaButton href="/contact" icon={<ArrowRight size={20} />}>
          Commencer ma transformation
        </CtaButton>
      </CtaSection>

      <Footer />
    </div>
  );
}
