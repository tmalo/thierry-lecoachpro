import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, Ear, Layers, Target } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-montserrat text-primary mb-6 text-4xl font-bold md:text-5xl">
              Mon approche
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Une écoute sensible, un cheminement sur-mesure, des actions
              alignées.
            </p>
          </div>
        </div>
      </section>

      {/* Mon approche - Texte principal avec image - part 1 */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Texte */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  <strong>Je vous écoute comme on écoute un poème</strong> :
                  avec attention, respect et la conscience que tout ne peut pas
                  être compris immédiatement. Mon approche s&apos;appuie sur une
                  écoute sensible, qui cherche à entendre les nuances autant que
                  ce qui est explicite.
                </p>

                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  <strong>J&apos;orchestre plusieurs approches</strong> pour
                  composer un cheminement interrogatif unique. Je puise dans
                  divers courants (ACT, systémique, apprentissage, Élément
                  Humain…) pour adapter ma manière de vous accompagner.
                </p>

                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  <strong>
                    Chaque proposition d&apos;action est pensée comme une note
                    de musique
                  </strong>{" "}
                  : libre à vous de voir si elle résonne, de la jouer ou de la
                  transformer — toujours dans le respect de votre rythme.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="from-primary/10 to-primary/5 flex h-96 items-center justify-center rounded-2xl bg-gradient-to-br p-4">
                  <Image
                    src="/todd-trapani-v2Jf_jpNamc-unsplash.jpg"
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                    alt="un coaching sur mesure"
                    width={540}
                    height={795}
                  />
                </div>
                {/* Élément décoratif */}
                <div className="bg-primary/20 absolute -right-4 -bottom-4 h-24 w-24 rounded-full blur-xl"></div>
                <div className="bg-primary/10 absolute -top-4 -left-4 h-16 w-16 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon approche - Texte principal avec image - part 2 */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Image */}
              <div className="relative">
                <div className="from-primary/10 to-primary/5 flex h-96 items-center justify-center rounded-2xl bg-gradient-to-br p-4">
                  <Image
                    src="/yousef-espanioly-DA_tplYgTow-unsplash.jpg"
                    className="h-full w-full rounded-lg object-cover shadow-lg"
                    alt="un espace à l'abri des pressions"
                    width={576}
                    height={383}
                  />
                </div>
                {/* Élément décoratif */}
                <div className="bg-primary/20 absolute -right-4 -bottom-4 h-24 w-24 rounded-full blur-xl"></div>
                <div className="bg-primary/10 absolute -top-4 -left-4 h-16 w-16 rounded-full blur-lg"></div>
              </div>

              {/* Texte */}
              <div className="prose prose-lg max-w-none">
                <p className="mb-6 text-lg leading-relaxed text-gray-700">
                  L&apos;<strong>action</strong> que je propose se veut à la
                  fois <strong>stratégique</strong> — alignée avec votre
                  direction — <strong>et fluide</strong> — intégrée à votre
                  quotidien.
                </p>

                <p className="text-lg leading-relaxed text-gray-700">
                  Ce travail ensemble crée un{" "}
                  <strong>espace à l&apos;abri des pressions</strong>, où vous
                  pouvez retrouver clarté, cohérence et créativité. Pour que vos
                  prochaines décisions ne soient plus prisonnières de
                  l&apos;urgence, mais guidées par ce qui compte vraiment pour
                  vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synthèse - Les 3 piliers */}
      <section className="bg-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold">
              Les trois piliers de mon accompagnement
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="p-6 text-center">
                <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                  <Ear className="text-primary" size={32} />
                </div>
                <h3 className="font-montserrat mb-4 text-xl font-semibold">
                  Écoute poétique
                </h3>
                <p className="leading-relaxed text-gray-600">
                  Une attention particulière aux nuances et aux non-dits de
                  votre discours, comme on écoute un poème.
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
                  Une synthèse créative de multiples courants théoriques pour
                  composer un cheminement sur-mesure.
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
                  Des propositions stratégiques et fluides, pensées comme des
                  notes de musique respectueuses de votre rythme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Le résultat */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-8 text-center text-3xl font-bold">
              Le résultat
            </h2>

            <div className="bg-primary/5 border-primary/10 rounded-lg border p-8">
              <p className="prose text-left text-lg leading-relaxed text-gray-700">
                <strong>
                  Un espace de réflexion à l&apos;abri des pressions
                </strong>
                , où vous pouvez avancer au rythme qui vous convient vraiment.
                Vous repartez avec <strong>de la clarté</strong>, même en pleine
                turbulence, pour choisir des actions en accord avec vos
                convictions plutôt que dictées par l&apos;urgence. Vous repartez
                sans doute aussi avec <strong>des idées neuves</strong>, nées de
                cette créativité que seule la sérénité peut offrir, pour
                continuer à écrire le poème de votre vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="mb-8 text-2xl leading-relaxed font-light italic md:text-3xl">
              &ldquo; Chaque proposition d&apos;action est pensée comme une note
              de musique : libre à vous de voir si elle résonne, de la jouer ou
              de la transformer&rdquo;
            </blockquote>
            <Link
              href="/contact"
              className="text-primary font-montserrat inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium transition-colors hover:bg-gray-100"
            >
              Commençons cette écoute
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
