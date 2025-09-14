import { notFound } from "next/navigation";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import TestimonialCard from "@/components/testimonial-card";
import { ArrowLeft, ArrowRight, Calendar, Tag, User } from "lucide-react";
import Link from "next/link";
import {
  getTestimonialById,
  getTestimonialsWithCache,
} from "@/lib/testimonials";
import type { Metadata } from "next";
import { getOffreBySku } from "@/lib/offres";
import { formatTestimonialDate } from "@/types/testimonial";

interface TestimonialPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Générer les paramètres statiques pour toutes les pages de témoignages
export async function generateStaticParams() {
  const testimonials = await getTestimonialsWithCache();

  return testimonials.map((testimonial) => ({
    id: testimonial.id,
  }));
}

// Générer les métadonnées dynamiques
export async function generateMetadata({
  params,
}: TestimonialPageProps): Promise<Metadata> {
  const { slug } = await params;

  const testimonial = await getTestimonialById(slug);
  if (!testimonial) {
    return {
      title: "Témoignage introuvable | Coaching Professionnel",
    };
  }
  const offre = getOffreBySku(testimonial.offre);

  return {
    title: `Témoignage de ${testimonial.person} | Coaching Professionnel`,
    description: testimonial.description,
    keywords: [
      "témoignage",
      testimonial.person,
      testimonial.job,
      "coaching",
      "transformation",
      offre?.title || "coaching professionnel",
    ],
    openGraph: {
      title: `Témoignage de ${testimonial.person}`,
      description: testimonial.description,
      type: "article",
    },
  };
}

export default async function Page({ params }: TestimonialPageProps) {
  const { slug } = await params;

  const testimonial = await getTestimonialById(slug);
  if (!testimonial) {
    notFound();
  }
  const offre = getOffreBySku(testimonial.offre);
  const allTestimonials = await getTestimonialsWithCache();
  const currentIndex = allTestimonials.findIndex(
    (t) => t.id === testimonial.id,
  );
  const previousTestimonial =
    currentIndex > 0 ? allTestimonials[currentIndex - 1] : null;
  const nextTestimonial =
    currentIndex < allTestimonials.length - 1
      ? allTestimonials[currentIndex + 1]
      : null;

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4">
        <div className="container-max section-padding">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Accueil
            </Link>
            <span>/</span>
            <Link
              href="/temoignages"
              className="hover:text-primary transition-colors"
            >
              Témoignages
            </Link>
            <span>/</span>
            <span className="text-primary font-medium">
              {testimonial.person}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-16">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 flex items-center justify-center gap-3">
              <User className="text-primary" size={32} />
              <span className="text-primary font-montserrat font-medium">
                Témoignage
              </span>
            </div>
            <h1 className="font-montserrat text-primary mb-4 text-3xl font-bold md:text-4xl">
              L&apos;histoire de {testimonial.person}
            </h1>
            <div className="mb-6 flex items-center justify-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{formatTestimonialDate(testimonial.date)}</span>
              </div>
              {offre && (
                <div className="flex items-center gap-2">
                  <Tag size={16} />
                  <span>{offre.title}</span>
                </div>
              )}
            </div>
            <p className="text-primary-600 text-lg leading-relaxed italic">
              &ldquo;{testimonial.description}&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* Témoignage complet */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <TestimonialCard testimonial={testimonial} variant="full" />
          </div>
        </div>
      </section>

      {/* Informations sur l'offre */}
      {offre && (
        <section className="bg-gray-50 py-16">
          <div className="container-max section-padding">
            <div className="mx-auto max-w-4xl">
              <h2 className="font-montserrat text-primary mb-6 text-center text-2xl font-bold">
                À propos de cette offre
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                    <offre.icon className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-montserrat text-primary text-xl font-bold">
                      {offre.title}
                    </h3>
                    <p className="text-gray-600">{offre.subtitle}</p>
                  </div>
                </div>
                <p className="mb-6 leading-relaxed text-gray-700">
                  {offre.description}
                </p>
                <Link
                  href={`/offres#offre-${offre.sku}`}
                  className="bg-primary font-montserrat hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
                >
                  Découvrir cette offre
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Navigation entre témoignages */}
      <section className="bg-white py-16">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-montserrat text-primary mb-8 text-center text-2xl font-bold">
              Autres témoignages
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Témoignage précédent */}
              {previousTestimonial ? (
                <Link
                  href={`/temoignages/${previousTestimonial.id}`}
                  className="group hover:border-primary/30 hover:bg-primary/5 rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all"
                >
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                    <ArrowLeft size={16} />
                    <span>Témoignage précédent</span>
                  </div>
                  <h3 className="font-montserrat text-primary group-hover:text-primary/80 mb-2 text-lg font-semibold">
                    {previousTestimonial.person}
                  </h3>
                  <p className="mb-3 text-sm text-gray-600">
                    {previousTestimonial.job}
                  </p>
                  <p className="line-clamp-3 text-sm leading-relaxed text-gray-700">
                    {previousTestimonial.description}
                  </p>
                </Link>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 opacity-50">
                  <div className="mb-3 flex items-center gap-2 text-sm text-gray-400">
                    <ArrowLeft size={16} />
                    <span>Premier témoignage</span>
                  </div>
                  <p className="text-gray-500">
                    Vous lisez le premier témoignage
                  </p>
                </div>
              )}

              {/* Témoignage suivant */}
              {nextTestimonial ? (
                <Link
                  href={`/temoignages/${nextTestimonial.id}`}
                  className="group hover:border-primary/30 hover:bg-primary/5 rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all"
                >
                  <div className="mb-3 flex items-center justify-end gap-2 text-sm text-gray-500">
                    <span>Témoignage suivant</span>
                    <ArrowRight size={16} />
                  </div>
                  <h3 className="font-montserrat text-primary group-hover:text-primary/80 mb-2 text-right text-lg font-semibold">
                    {nextTestimonial.person}
                  </h3>
                  <p className="mb-3 text-right text-sm text-gray-600">
                    {nextTestimonial.job}
                  </p>
                  <p className="line-clamp-3 text-right text-sm leading-relaxed text-gray-700">
                    {nextTestimonial.description}
                  </p>
                </Link>
              ) : (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 opacity-50">
                  <div className="mb-3 flex items-center justify-end gap-2 text-sm text-gray-400">
                    <span>Dernier témoignage</span>
                    <ArrowRight size={16} />
                  </div>
                  <p className="text-right text-gray-500">
                    Vous lisez le dernier témoignage
                  </p>
                </div>
              )}
            </div>

            {/* Retour à la liste */}
            <div className="mt-8 text-center">
              <Link
                href="/temoignages"
                className="text-primary font-montserrat inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
              >
                <ArrowLeft size={20} />
                Voir tous les témoignages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-white">
        <div className="container-max section-padding text-center">
          <h2 className="font-montserrat mb-6 text-3xl font-bold md:text-4xl">
            Inspiré par cette transformation ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-blue-100">
            Comme {testimonial.person}, vous pouvez retrouver votre souffle et
            transformer votre leadership. Commençons par une conversation.
          </p>
          <Link
            href="/contact"
            className="text-primary font-montserrat inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-medium transition-colors hover:bg-gray-100"
          >
            Commencer ma transformation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
