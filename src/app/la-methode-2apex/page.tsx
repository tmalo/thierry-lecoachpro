import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import StructuredData from "@/components/structured-data"
import { BookOpen, Users, Target, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { livreData, apprentissages, publicCible } from "@/lib/livre-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${livreData.title} - ${livreData.subtitle} | Coaching Professionnel`,
  description: livreData.description,
  keywords: ["management", "leadership", "livre", "méthode 2apex", "incertitude", "équipe", "autonomie"],
  openGraph: {
    title: `${livreData.title} - ${livreData.subtitle}`,
    description: livreData.description,
    type: "book",
    authors: [livreData.author.name],
  },
}

export default function LivrePage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="livre" />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image du livre */}
              <div className="relative">
                <div className="bg rounded-2xl p-8 h-96 flex items-center justify-center">
                <Image src="/2apex_mockup2.png" width={941} height={1020}
                    alt="Couverture du livre La méthode 2apex"
                    className=" object-cover h-full max-w-xs"
                  />
                </div>
              </div>

              {/* Contenu */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <BookOpen className="text-primary" size={32} />
                  <span className="text-primary font-montserrat font-medium">Nouveau livre</span>
                </div>
                <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-6">{livreData.title}</h1>
                <h2 className="font-montserrat text-2xl md:text-3xl font-semibold text-gray-700 mb-8">
                  {livreData.subtitle}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{livreData.description}</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact?sujet=livre"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-primary/90 transition-colors"
                  >
                    En savoir plus
                    <ArrowRight size={20} />
                  </Link>
                  <button className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-primary hover:text-white transition-colors">
                    <BookOpen size={20} />
                    Commander le livre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous apprendrez */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Qu&apos;apprendrez-vous de ce livre ?
            </h2>
            <div className="space-y-6">
              {apprentissages.map((apprentissage, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-gray-50 rounded-lg">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                  <p className="text-lg text-gray-700 leading-relaxed">{apprentissage}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qui gagnerait à lire ce livre */}
      <section className="py-20 bg-gray-50">
        <div className="container-max section-padding">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              Qui gagnerait à lire ce livre ?
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Managers */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="font-montserrat text-2xl font-bold text-primary">Managers</h3>
                </div>
                <ul className="space-y-4">
                  {publicCible.managers.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Directeurs de la transformation */}
              <div className="bg-white p-8 rounded-2xl border border-gray-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Target className="text-primary" size={32} />
                  </div>
                  <h3 className="font-montserrat text-2xl font-bold text-primary">
                    Directrices, directeurs de la transformation
                  </h3>
                </div>
                <ul className="space-y-4">
                  {publicCible.directeurs.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'auteur */}
      <section className="py-20 bg-white">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-primary mb-12 text-center">L&apos;auteur</h2>

            <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12 rounded-2xl">
              <div className="text-center mb-8">
                <h3 className="font-montserrat text-2xl font-bold text-primary mb-2">{livreData.author.name}</h3>
                <p className="text-lg text-gray-600 font-medium">{livreData.author.jobTitle}</p>
                <div className="w-24 h-1 bg-primary mx-auto rounded-full mt-4"></div>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg text-gray-700 leading-relaxed">{livreData.author.description}</p>
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
              &ldquo;Une méthode pratique et concrète pour renforcer l&apos;engagement dans des environnements complexes et
              incertains.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">Prêt à découvrir la méthode 2apex ?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Transformez votre approche du management et guidez votre équipe vers plus d&apos;autonomie et d&apos;efficacité.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-gray-100 transition-colors">
              <BookOpen size={20} />
              Commander le livre
            </button>
            <Link
              href="/contact?sujet=livre"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-montserrat font-medium hover:bg-white hover:text-primary transition-colors"
            >
              Échanger avec l&apos;auteur
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
