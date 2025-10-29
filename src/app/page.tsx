import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Target,
  Users,
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/section";
import { CtaSection, CtaButton } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
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
            &Ecirc;tre entendu, &ecirc;tre clair, <br />
            <span className="text-gray-700">&ecirc;tre suivi.</span>
          </h1>

          <div className="mx-auto mb-12 max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed text-gray-700 md:text-2xl">
              <strong>                
                J&apos;aide les experts de la Tech à transformer leur expertise
                en impact visible, pour être compris, suivis,
                <br /> et reconnus à leur juste valeur.
              </strong>
            </p>
          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/offres"
              className="bg-primary font-montserrat hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-medium text-white transition-colors"
            >
              Découvrir mes offres
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/contact"
              className="border-primary text-primary font-montserrat hover:bg-primary inline-flex items-center gap-2 rounded-lg border-2 px-8 py-4 font-medium transition-colors hover:text-white"
            >
              Échanger ensemble
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
          <p className="text-foreground mb-12 text-center text-lg">
            Imaginez :
          </p>

          <div className="mb-12 grid gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Target className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Votre légitimité est reconnue
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vous exprimez vos forces et vos compétences avec assurance,
                  sans avoir besoin de vous imposer. La visibilité vient
                  naturellement.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <CheckCircle className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Vos idées sont claires et suivies
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vous trouvez les mots justes pour parler aussi bien aux
                  experts qu&apos;aux décideurs, et vos messages font enfin écho.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Lightbulb className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Vous décidez avec sérénité
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Vous savez distinguer ce qui compte vraiment, identifier les
                  risques acceptables et communiquer vos choix avec clarté. Le
                  stress laisse place à la confiance.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8">
              <Users className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
              <div>
                <h3 className="mb-2 text-lg font-semibold">
                  Votre équipe avance ensemble
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Chacun connaît son rôle, prend ses responsabilités et
                  contribue avec motivation. Vous trouvez le juste équilibre
                  entre performance et coopération.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-8 text-center text-lg text-balance">
            C&apos;est ce chemin de transformation que je vous propose
            d&apos;explorer ensemble.
          </p>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href="/contact">Parlons-en</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Témoignages Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <CtaSection
        title="Prêt à avancer ?"
        description="Commençons par une conversation. Sans engagement, juste l'espace
          d'explorer ensemble ce qui pourrait émerger de cette écoute
          authentique."
      >
        <CtaButton href="/contact" icon={<ArrowRight size={20} />}>
          Commençons cette écoute
        </CtaButton>
      </CtaSection>

      <Footer />
    </div>
  );
}
