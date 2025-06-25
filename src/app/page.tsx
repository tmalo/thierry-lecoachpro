import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, Ear, Layers, Target } from "lucide-react";
import Link from "next/link";
import Section from "@/components/section";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <Section style="gradient" className="md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-montserrat text-primary animate-fade-in mb-8 text-4xl font-bold md:text-6xl">
            L&apos;équipe inspire,
            <br />
            <span className="text-gray-700">le leader respire</span>
          </h1>

          <div className="mx-auto mb-12 max-w-3xl">
            <p className="mb-6 text-xl leading-relaxed text-gray-700 md:text-2xl">
              <strong>
                Rien n&apos;est plus motivant dans l&apos;adversité
                qu&apos;une équipe engagée, créative et performante.
              </strong>
            </p>
            <p className="text-lg leading-relaxed text-gray-600 md:text-xl">
              J&apos;aide les managers à construire et à maintenir ce type
              d&apos;équipe, grâce à un coaching sur mesure, qui redonne du
              souffle au leadership et du sens à l&apos;action collective.
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

      {/* Mon approche unique */}
      <Section style="white">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-montserrat text-primary mb-6 text-3xl font-bold md:text-4xl">
            Une approche qui vous écoute vraiment
          </h2>
          <p className="text-lg leading-relaxed text-gray-600">
            Je vous accompagne avec une écoute sensible, un cheminement
            sur-mesure et des actions alignées avec vos convictions profondes.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-6 text-center">
            <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
              <Ear className="text-primary" size={32} />
            </div>
            <h3 className="font-montserrat mb-4 text-xl font-semibold">
              Écoute poétique
            </h3>
            <p className="leading-relaxed text-gray-600">
              Je vous écoute comme on écoute un poète, attentif à ce qui se
              dit sans se dire, aux métaphores de votre vécu.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
              <Layers className="text-primary" size={32} />
            </div>
            <h3 className="font-montserrat mb-4 text-xl font-semibold">
              Approche composite
            </h3>
            <p className="leading-relaxed text-gray-600">
              J&apos;orchestre plusieurs instruments théoriques pour composer
              un cheminement interrogatif unique, adapté à vous.
            </p>
          </div>

          <div className="p-6 text-center">
            <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
              <Target className="text-primary" size={32} />
            </div>
            <h3 className="font-montserrat mb-4 text-xl font-semibold">
              Action mesurée
            </h3>
            <p className="leading-relaxed text-gray-600">
              Des invitations à l&apos;action stratégiques et fluides, qui
              vous rapprochent de vos objectifs sans bouleverser votre
              contexte.
            </p>
          </div>
        </div>
      </Section>

      {/* Target Audience Section */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
            Vous êtes au bon endroit
          </h2>
          <div className="mb-12 space-y-6">
            <div className="border-primary/20 flex items-start gap-4 rounded-lg border-l-4 bg-white p-6">
              <ul className="benefits space-y-1 text-gray-900 dark:text-gray-400">
                <li>
                  Si vous vous sentez &ldquo;entre le marteau et
                  l&apos;enclume&rdquo;, pris·e entre la pression de votre
                  direction et la démotivation de vos collaborateurs.
                </li>
                <li>
                  Si vous avez l&apos;intuition qu&apos;un autre leadership
                  est possible — mais vous ne savez pas par où commencer.
                </li>
                <li>
                  Si votre équipe s&apos;épuise dans les détails ou
                  s&apos;égare dans de fausses urgences, pendant que vous
                  portez seul·e l&apos;essentiel.
                </li>
                <li>
                  Si vous êtes fatigué·e de devoir montrer une façade assurée
                  alors que tout en vous cherche de l&apos;air.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Section>

      {/* Vous repartez avec */}
      <Section style="white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
            Vous repartez avec
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="font-montserrat text-primary mb-4 text-xl font-semibold">
                Clarté retrouvée
              </h3>
              <p className="leading-relaxed text-gray-700">
                Un espace de réflexion à l&apos;abri des pressions, où vous
                pouvez avancer au rythme qui vous convient vraiment. De la
                clarté, même en pleine turbulence, pour choisir des actions en
                accord avec vos convictions.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="font-montserrat text-primary mb-4 text-xl font-semibold">
                Créativité libérée
              </h3>
              <p className="leading-relaxed text-gray-700">
                Des idées neuves, nées de cette créativité que seule la
                sérénité peut offrir, pour continuer à écrire le poème de
                votre vie professionnelle avec authenticité.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="font-montserrat text-primary mb-4 text-xl font-semibold">
                Actions alignées
              </h3>
              <p className="leading-relaxed text-gray-700">
                Des invitations à l&apos;action stratégiques et fluides, qui
                demandent peu d&apos;effort mais vous rapprochent résolument
                de là où vous voulez aller.
              </p>
            </div>

            <div className="rounded-lg bg-gray-50 p-8">
              <h3 className="font-montserrat text-primary mb-4 text-xl font-semibold">
                Leadership authentique
              </h3>
              <p className="leading-relaxed text-gray-700">
                La capacité de guider votre équipe sans vous épuiser ni
                compromettre vos valeurs, en devenant acteur des changements
                plutôt que simple spectateur.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-primary text-2xl leading-relaxed font-light italic md:text-3xl">
            &ldquo;Pour que vos prochaines décisions ne soient plus
            prisonnières de l&apos;urgence, mais guidées par ce qui compte
            vraiment pour vous.&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* CTA Section */}
      <Section style="primary" centered>
        <h2 className="font-montserrat mb-6 text-3xl font-bold md:text-4xl">
          Prêt à être écouté comme on écoute un poète ?
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
          Commençons par une conversation. Sans engagement, juste
          l&apos;espace d&apos;explorer ensemble ce qui pourrait émerger de
          cette écoute authentique.
        </p>
        <Link
          href="/contact"
          className="text-primary font-montserrat inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium transition-colors hover:bg-gray-100"
        >
          Commençons cette écoute
          <ArrowRight size={20} />
        </Link>

      </Section>

      <Footer />
    </div>
  );
}
