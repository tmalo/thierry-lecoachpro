import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import StructuredData from "@/components/structured-data";
import { BookOpen, Users, Target, ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { livreData, apprentissages, publicCible } from "@/lib/livre-data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${livreData.title} - ${livreData.subtitle} | Coaching Professionnel`,
  description: livreData.description,
  keywords: [
    "management",
    "leadership",
    "livre",
    "méthode 2apex",
    "incertitude",
    "équipe",
    "autonomie",
  ],
  openGraph: {
    title: `${livreData.title} - ${livreData.subtitle}`,
    description: livreData.description,
    type: "book",
    authors: [livreData.author.name],
  },
};

export default function LivrePage() {
  return (
    <div className="min-h-screen">
      <StructuredData type="livre" />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-16 lg:grid-cols-2">
              {/* Image du livre */}
              <div className="relative">
                <div className="bg flex h-96 items-center justify-center rounded-2xl p-8">
                  <Image
                    src="/2apex_mockup2.png"
                    width={941}
                    height={1020}
                    alt="Couverture du livre La méthode 2apex"
                    className="h-full max-w-xs object-cover"
                  />
                </div>
              </div>

              {/* Contenu */}
              <div>
                <div className="mb-6 flex items-center gap-3">
                  <BookOpen className="text-primary" size={32} />
                  <span className="text-primary font-montserrat font-medium">
                    Nouveau livre
                  </span>
                </div>
                <h1 className="font-montserrat text-primary mb-6 text-4xl font-bold md:text-5xl">
                  {livreData.title}
                </h1>
                <h2 className="font-montserrat mb-8 text-2xl font-semibold text-gray-700 md:text-3xl">
                  {livreData.subtitle}
                </h2>
                <p className="mb-8 text-xl leading-relaxed text-gray-600">
                  {livreData.description}
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/contact?sujet=livre"
                    className="bg-primary font-montserrat hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-8 py-4 font-medium text-white transition-colors"
                  >
                    En savoir plus
                    <ArrowRight size={20} />
                  </Link>
                  <button className="border-primary text-primary font-montserrat hover:bg-primary inline-flex items-center gap-2 rounded-lg border-2 px-8 py-4 font-medium transition-colors hover:text-white">
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
      <section className="bg-white py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
              Qu&apos;apprendrez-vous de ce livre ?
            </h2>
            <div className="space-y-6">
              {apprentissages.map((apprentissage, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 rounded-lg bg-gray-50 p-6"
                >
                  <CheckCircle
                    className="text-primary mt-1 flex-shrink-0"
                    size={24}
                  />
                  <p className="text-lg leading-relaxed text-gray-700">
                    {apprentissage}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Qui gagnerait à lire ce livre */}
      <section className="bg-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
              Qui gagnerait à lire ce livre ?
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              {/* Managers */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <Users className="text-primary" size={32} />
                  </div>
                  <h3 className="font-montserrat text-primary text-2xl font-bold">
                    Managers
                  </h3>
                </div>
                <ul className="space-y-4">
                  {publicCible.managers.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                      <span className="leading-relaxed text-gray-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Directeurs de la transformation */}
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
                    <Target className="text-primary" size={32} />
                  </div>
                  <h3 className="font-montserrat text-primary text-2xl font-bold">
                    Directrices, directeurs de la transformation
                  </h3>
                </div>
                <ul className="space-y-4">
                  {publicCible.directeurs.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="bg-primary mt-2 h-2 w-2 flex-shrink-0 rounded-full"></div>
                      <span className="leading-relaxed text-gray-700">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* L'auteur */}
      <section className="bg-white py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
              L&apos;auteur
            </h2>

            <div className="from-primary/5 to-primary/10 rounded-2xl bg-gradient-to-br p-8 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="font-montserrat text-primary mb-2 text-2xl font-bold">
                  {livreData.author.name}
                </h3>
                <p className="text-lg font-medium text-gray-600">
                  {livreData.author.jobTitle}
                </p>
                <div className="bg-primary mx-auto mt-4 h-1 w-24 rounded-full"></div>
              </div>

              <div className="prose prose-lg max-w-none text-center">
                <p className="text-lg leading-relaxed text-gray-700">
                  {livreData.author.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <blockquote className="text-primary text-2xl leading-relaxed font-light italic md:text-3xl">
              &ldquo;Une méthode pratique et concrète pour renforcer
              l&apos;engagement dans des environnements complexes et
              incertains.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-montserrat mb-6 text-3xl font-bold md:text-4xl">
            Prêt à découvrir la méthode 2apex ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Transformez votre approche du management et guidez votre équipe vers
            plus d&apos;autonomie et d&apos;efficacité.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="text-primary font-montserrat inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium transition-colors hover:bg-gray-100">
              <BookOpen size={20} />
              Commander le livre
            </button>
            <Link
              href="/contact?sujet=livre"
              className="font-montserrat hover:text-primary inline-flex items-center gap-2 rounded-lg border-2 border-white px-8 py-4 font-medium text-white transition-colors hover:bg-white"
            >
              Échanger avec l&apos;auteur
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
