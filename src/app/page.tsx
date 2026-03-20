import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, Handshake, Shield, Target, Users } from "lucide-react";
import Link from "next/link";
import Section from "@/components/section";
import { CtaSection, CtaButton } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { TargetAudience } from "@/components/target-audience";
import { TestimonialSection } from "@/components/testimonial-section";

export default async function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section style="gradient" className="md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-montserrat text-primary animate-fade-in mb-8 text-4xl font-bold md:text-6xl">
            Votre expertise est solide.
            <br />
            <span className="text-gray-700">Ce qui bloque est ailleurs.</span>
          </h1>

          <div className="mx-auto mb-12 max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed text-gray-700 md:text-2xl">
              J&apos;accompagne les CTOs, VP Tech et Heads Of sur ce que leur
              expertise ne résout plus — tenir leur position, décider
              collectivement, construire une organisation qui tient sans eux au
              centre.
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/offres"
              className="bg-primary font-montserrat hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-medium text-white transition-colors"
            >
              Découvrir les offres
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-primary text-primary font-montserrat hover:bg-primary inline-flex items-center gap-2 rounded-lg border-2 px-8 py-4 font-medium transition-colors hover:text-white"
            >
              Parlons-en
            </Link>
          </div>
        </div>
      </Section>

      {/* Target Audience Section */}
      <TargetAudience />

      {/* Ce qui devient possible */}
      <Section style="white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
            Ce qui devient possible
          </h2>
          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Target className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Les arbitrages ne traînent plus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vos décisions structurantes se prennent — avec des critères
                  clairs, assumés collectivement. Vous sortez de la réaction
                  permanente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Shield className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Votre position tient
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vous tenez face au CEO et aux métiers sans vous épuiser à
                  justifier. Votre influence ne dépend plus du dernier coup
                  d&apos;éclat.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Handshake className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Vous avez un interlocuteur qui parle votre langue
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Pas un consultant qui dit quoi faire. Un Sparring Partner qui
                  pense avec vous — sans filtre politique, sur ce qui bloque
                  vraiment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Users className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Votre équipe de direction décide sans tout remonter
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Les Head Of assument leurs arbitrages. Les blocages entre
                  équipes disparaissent. Vous pilotez votre organisation, vous
                  ne la subissez plus.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-8 text-center text-lg text-balance">
            Si ça résonne, la prochaine étape est une conversation.
          </p>

          <div className="text-center">
            <Button asChild size="xl">
              <Link href="/contact">
                Parlons-en
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Témoignages Section */}
      <Suspense
        fallback={
          <section className="bg-primary/10 py-20">
            <div className="container-max section-padding">
              <div className="mx-auto max-w-4xl animate-pulse">
                <div className="mx-auto mb-4 h-8 w-64 rounded bg-gray-200" />
                <div className="mx-auto mb-12 h-5 w-96 rounded bg-gray-200" />
                <div className="h-64 rounded-2xl bg-gray-200" />
              </div>
            </div>
          </section>
        }
      >
        <TestimonialSection />
      </Suspense>

      {/* CTA Section */}
      <CtaSection
        title="Prêt à avancer ?"
        description="Pas de pitch. Une conversation pour voir si votre situation et mon approche sont compatibles."
      >
        <CtaButton href="/contact" icon={<ArrowRight size={20} />}>
          Parlons de votre situation
        </CtaButton>
      </CtaSection>

      <Footer />
    </div>
  );
}
