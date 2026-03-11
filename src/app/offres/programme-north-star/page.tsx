import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { HeroSection } from "@/components/landing/hero-section";
import { getOffreBySku } from "@/lib/offres";
import { getProgramBySku } from "@/lib/offres_program";
import { notFound } from "next/navigation";
import type { Problem } from "@/components/landing/problem-section";
import dynamic from "next/dynamic";

const ProblemSection = dynamic(() =>
  import("@/components/landing/problem-section").then(
    (mod) => mod.ProblemSection,
  ),
);
import Boss from "@/components/icons/boss";
import Team from "@/components/icons/team";
import {
  Transformation,
  TransformationSection,
} from "@/components/landing/transformation-section";
import { BatteryFull, Sparkles } from "lucide-react";
import TrendUp from "@/components/icons/trend-up";
import Juggler from "@/components/icons/juggler";
import { ProgramSection } from "@/components/landing/program-section";
import { DeliverablesSection } from "@/components/landing/deliverables-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { CoachPresentation } from "@/components/landing/coach-presentation";
import { FAQSection } from "@/components/landing/faq-section";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { getOffreJsonLd } from "@/lib/structured-data";

const problem: Problem = {
  title: "Vous reconnaissez cette situation ?",
  imagePath: "/north-star-image.jpg",
  symptomes: [
    {
      short: "Des demandes contradictoires",
      long: "livrer vite sur des grands projets tout en gérant les urgences quotidiennes.",
    },
    {
      short: "Une vision floue",
      long: " difficile d’aligner tout le monde quand la stratégie change tous les mois.",
    },
    {
      short: "Une énergie dispersée",
      long: "les réunions s’enchaînent, mais vous ne savez plus vraiment où vous allez.",
    },
    {
      short: "Une communication sous tension",
      long: "dur de convaincre quand vous-même n’êtes pas convaincu.",
    },
  ],
  result:
    "vous passez votre temps à faire tenir le système, sans avoir le sentiment d’avancer.",
};

const transformation: Transformation = {
  result:
    "Vous **redevenez un porteur de sens**, pas juste un gestionnaire de contradictions.",
  items: [
    {
      Icon: <Juggler className="text-primary mt-1 size-8 flex-shrink-0" />,
      title: "Vous accueillez les contradictions sans vous épuiser",
      description:
        "vous savez quoi dire, quoi poser comme question, comment recadrer sans froisser.",
    },
    {
      Icon: <Sparkles className="mt-1 size-8 flex-shrink-0 text-orange-500" />,
      title: "Vous retrouvez de la fierté dans votre rôle",
      description: "la direction vous écoute, l'équipe comprend votre cap.",
    },
    {
      Icon: (
        <BatteryFull className="mt-1 size-8 flex-shrink-0 text-emerald-700" />
      ),
      title: "Vous gagnez du temps et de l'énergie",
      description:
        "les décisions s'alignent, les échanges deviennent plus fluides.",
    },
    {
      Icon: <TrendUp className="mt-1 size-8 flex-shrink-0 text-blue-700" />,
      title: "Vous installez une dynamique durable",
      description:
        "votre vision devient un point d'appui commun, pas un objet de débat permanent.",
    },
  ],
};

const features = [
  "6 sessions d'accompagnement (8h30 au total)",
  "Un groupe restreint (6 participants max)",
  "Un coaching individuel sur-mesure (2h en 1:1)",
  "Des outils propriétaires éprouvés",
  "Un suivi asynchrone pendant 4 semaines",
];

export default async function Page() {
  const offre = await getOffreBySku("NST-26-01");
  const product = getProgramBySku("NST-26-01");
  if (!offre) {
    notFound();
  }

  const jsonLd = getOffreJsonLd(offre, "/offres/programme-north-star");

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Navigation />
      <main>
        <HeroSection offre={offre} product={product} />
        <ProblemSection problem={problem}>
          <div className="text-foreground text-lg leading-relaxed">
            Vous êtes coincé entre deux feux :
            <br />
            <div className="my-2 flex items-start gap-2">
              <Boss className="size-[24px] text-blue-900" />
              <div>
                <strong>La direction</strong> attend des résultats, de la
                clarté, de la prévisibilité.
              </div>
            </div>
            <div className="my-2 flex items-start gap-2">
              <Team className="size-[24px] text-emerald-900" />
              <div>
                <strong>L&apos;équipe</strong> attend du sens, de la cohérence,
                de la considération.
              </div>
            </div>
          </div>

          <p className="text-foreground text-lg leading-relaxed font-semibold">
            Et vous ? <strong>Vous fatiguez.</strong>
          </p>
        </ProblemSection>

        <TransformationSection transformation={transformation} />

        {product && <ProgramSection product={product} />}
        {product?.deliverables && (
          <DeliverablesSection deliverables={product.deliverables} />
        )}
        {product && <PricingSection product={product} features={features} />}

        <CoachPresentation />
        <NewsletterSection />
        {offre.faq && <FAQSection faq={offre.faq} />}

        {product && <FinalCTASection offre={offre} product={product} />}
      </main>
      <Footer />
    </div>
  );
}
