import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, Ear, Layers, Target } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function AProposPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-6">
              Mon approche
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Une écoute sensible, un cheminement sur-mesure, des actions
              alignées.
            </p>
          </div>
        </div>
      </section>

      {/* Mon approche - Texte principal avec image - part 1 */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Texte */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Je vous écoute comme on écoute un poème</strong> :
                  avec attention, respect et la conscience que tout ne peut pas
                  être compris immédiatement. Mon approche s&apos;appuie sur une
                  écoute sensible, qui cherche à entendre les nuances autant que
                  ce qui est explicite.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>J&apos;orchestre plusieurs approches</strong> pour composer
                  un cheminement interrogatif unique. Je puise dans divers
                  courants (ACT, systémique, apprentissage, Élément Humain…)
                  pour adapter ma manière de vous accompagner.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>
                    Chaque proposition d&apos;action est pensée comme une note de
                    musique
                  </strong>{' '}
                  : libre à vous de voir si elle résonne, de la jouer ou de la
                  transformer — toujours dans le respect de votre rythme.
                </p>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 h-96 flex items-center justify-center">
                  <Image
                    src="/todd-trapani-v2Jf_jpNamc-unsplash.jpg"
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    alt="un coaching sur mesure"
                    width={540}
                    height={795}
                  />
                </div>
                {/* Élément décoratif */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon approche - Texte principal avec image - part 2 */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 h-96 flex items-center justify-center">
                  <Image
                    src="/yousef-espanioly-DA_tplYgTow-unsplash.jpg"
                    className="rounded-lg shadow-lg object-cover w-full h-full"
                    alt="un espace à l&apos;abri des pressions"
                    width={576}
                    height={383}
                  />
                </div>
                {/* Élément décoratif */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-lg"></div>
              </div>

              {/* Texte */}
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  L&apos;action que je propose se veut à la fois <strong>stratégique</strong> —
                  alignée avec votre direction — et <strong>fluide</strong> — intégrée à votre
                  quotidien.
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Ce travail ensemble crée un{' '}
                  <strong>espace à l&apos;abri des pressions</strong>, où vous pouvez
                  retrouver clarté, cohérence et créativité. Pour que vos
                  prochaines décisions ne soient plus prisonnières de l&apos;urgence,
                  mais guidées par ce qui compte vraiment pour vous.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synthèse - Les 3 piliers */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-primary mb-12 text-center">
              Les trois piliers de mon accompagnement
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ear className="text-primary" size={32} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-4">
                  Écoute poétique
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Une attention particulière aux nuances et aux non-dits de
                  votre discours, comme on écoute un poème.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Layers className="text-primary" size={32} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-4">
                  Approche composite
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Une synthèse créative de multiples courants théoriques pour
                  composer un cheminement sur-mesure.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-primary" size={32} />
                </div>
                <h3 className="font-montserrat text-xl font-semibold mb-4">
                  Action mesurée
                </h3>
                <p className="text-gray-600 leading-relaxed">
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
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl font-bold text-primary mb-8 text-center">
              Le résultat
            </h2>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <p className="prose text-lg text-gray-700 leading-relaxed text-left">
                <strong>Un espace de réflexion à l&apos;abri des pressions</strong>,
                où vous pouvez avancer au rythme qui vous convient vraiment.
                Vous repartez avec <strong>de la clarté</strong>, même en pleine
                turbulence, pour choisir des actions en accord avec vos
                convictions plutôt que dictées par l&apos;urgence. Vous repartez sans
                doute aussi avec <strong>des idées neuves</strong>, nées de
                cette créativité que seule la sérénité peut offrir, pour
                continuer à écrire le poème de votre vie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed italic mb-8">
              &ldquo; Chaque proposition d&apos;action est pensée comme une note de musique
              : libre à vous de voir si elle résonne, de la jouer ou de la
              transformer&rdquo;
            </blockquote>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-gray-100 transition-colors"
            >
              Commençons cette écoute
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
