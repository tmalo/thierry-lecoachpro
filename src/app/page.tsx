import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowRight, Ear, Layers, Target } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20 md:py-32">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl md:text-6xl font-bold text-primary mb-8 animate-fade-in">
              L&apos;équipe inspire,
              <br />
              <span className="text-gray-700">le leader respire</span>
            </h1>

            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6">
                <strong>
                  Rien n&apos;est plus motivant dans l&apos;adversité qu&apos;une équipe
                  engagée, créative et performante.
                </strong>
              </p>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                J&apos;aide les managers à construire et à maintenir ce type
                d&apos;équipe, grâce à un coaching sur mesure, qui redonne du souffle
                au leadership et du sens à l&apos;action collective.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/offres"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-primary/90 transition-colors"
              >
                Découvrir mes offres
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Échanger ensemble
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mon approche unique */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-6">
              Une approche qui vous écoute vraiment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Je vous accompagne avec une écoute sensible, un cheminement
              sur-mesure et des actions alignées avec vos convictions profondes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Ear className="text-primary" size={32} />
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-4">
                Écoute poétique
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Je vous écoute comme on écoute un poète, attentif à ce qui se
                dit sans se dire, aux métaphores de votre vécu.
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
                J&apos;orchestre plusieurs instruments théoriques pour composer un
                cheminement interrogatif unique, adapté à vous.
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
                Des invitations à l&apos;action stratégiques et fluides, qui vous
                rapprochent de vos objectifs sans bouleverser votre contexte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Vous êtes au bon endroit
            </h2>
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg border-l-4 border-primary/20">
                <ul className="space-y-1 text-gray-900 dark:text-gray-400 benefits">
                  <li>
                    Si vous vous sentez &ldquo;entre le marteau et l&apos;enclume&rdquo;, pris·e
                    entre la pression de votre direction et la démotivation de
                    vos collaborateurs.
                  </li>
                  <li>
                    Si vous avez l&apos;intuition qu&apos;un autre leadership est possible
                    — mais vous ne savez pas par où commencer.
                  </li>
                  <li>
                    Si votre équipe s&apos;épuise dans les détails ou s&apos;égare dans de
                    fausses urgences, pendant que vous portez seul·e
                    l&apos;essentiel.
                  </li>
                  <li>
                    Si vous êtes fatigué·e de devoir montrer une façade assurée
                    alors que tout en vous cherche de l&apos;air.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vous repartez avec */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Vous repartez avec
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary">
                  Clarté retrouvée
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Un espace de réflexion à l&apos;abri des pressions, où vous pouvez
                  avancer au rythme qui vous convient vraiment. De la clarté,
                  même en pleine turbulence, pour choisir des actions en accord
                  avec vos convictions.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary">
                  Créativité libérée
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Des idées neuves, nées de cette créativité que seule la
                  sérénité peut offrir, pour continuer à écrire le poème de
                  votre vie professionnelle avec authenticité.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary">
                  Actions alignées
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Des invitations à l&apos;action stratégiques et fluides, qui
                  demandent peu d&apos;effort mais vous rapprochent résolument de là
                  où vous voulez aller.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="font-montserrat text-xl font-semibold mb-4 text-primary">
                  Leadership authentique
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La capacité de guider votre équipe sans vous épuiser ni
                  compromettre vos valeurs, en devenant acteur des changements
                  plutôt que simple spectateur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl text-primary font-light leading-relaxed italic">
              &ldquo;Pour que vos prochaines décisions ne soient plus prisonnières de
              l&apos;urgence, mais guidées par ce qui compte vraiment pour vous.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">
            Prêt à être écouté comme on écoute un poète ?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Commençons par une conversation. Sans engagement, juste l&apos;espace
            d&apos;explorer ensemble ce qui pourrait émerger de cette écoute
            authentique.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-gray-100 transition-colors"
          >
            Commençons cette écoute
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
