import TestimonialCarousel from "@/components/testimonial-carousel";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getTestimonialsWithCache } from "@/lib/testimonials";

export async function TestimonialSection() {
  const tem = await getTestimonialsWithCache();

  return (
    <section className="bg-primary/10 py-20">
      <div className="container-max section-padding">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-4 text-center text-3xl font-bold md:text-4xl">
            Ils ont retrouvé leur souffle
          </h2>
          <p className="mb-12 text-center text-lg text-gray-600">
            Découvrez comment d&apos;autres managers ont transformé leur
            leadership
          </p>

          <TestimonialCarousel testimonials={tem} />

          <div className="mt-8 text-center">
            <Link
              href="/temoignages"
              className="text-primary font-montserrat inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
            >
              Voir tous les témoignages
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
