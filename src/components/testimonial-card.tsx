import { Quote, Calendar, Briefcase, Tag, ExternalLink } from "lucide-react";
import {
  formatTestimonialDate,
  getAvatarUrl,
  type Testimonial,
} from "@/types/testimonial";
import { getOffreBySku } from "@/lib/offres";
import Link from "next/link";

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: "full" | "compact";
  showOffre?: boolean;
  showReadMore?: boolean;
}

export default function TestimonialCard({
  testimonial,
  variant = "full",
  showOffre = false,
  showReadMore = false,
}: TestimonialCardProps) {
  const avatarUrl = getAvatarUrl(testimonial.person, testimonial.gender);
  const offre = getOffreBySku(testimonial.offre);

  if (variant === "compact") {
    return (
      <div className="flex h-full flex-col rounded-lg border border-gray-200 bg-white p-6">
        <div className="mb-4 flex items-start gap-4">
          <div className="flex-shrink-0">
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={`Avatar de ${testimonial.person}`}
              width={44}
              height={44}
              className="border-primary/20 h-12 w-12 rounded-full border-2 object-cover"
            />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-montserrat text-primary text-lg font-semibold">
              {testimonial.person}
            </h3>
            <p className="text-sm text-gray-600">{testimonial.job}</p>
            {showOffre && offre && (
              <div className="mt-1 flex items-center gap-1">
                <Tag size={12} className="text-gray-400" />
                <span className="text-xs text-gray-500">{offre.title}</span>
              </div>
            )}{" "}
          </div>
        </div>

        <blockquote className="font-merriweather text-primary flex-1 leading-relaxed italic">
          &ldquo;{testimonial.description}&rdquo;
        </blockquote>

        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center gap-2">
            <Calendar size={14} className="text-gray-400" />
            <span className="text-sm text-gray-500">
              {formatTestimonialDate(testimonial.date)}
            </span>
          </div>

          {showReadMore && (
            <Link
              href={`/temoignages/${testimonial.id}`}
              className="text-primary inline-flex items-center gap-1 text-sm font-medium transition-all hover:gap-2"
            >
              Lire plus
              <ExternalLink size={12} />
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="mb-8 flex items-center gap-6">
          <div className="flex-shrink-0">
            <img
              src={avatarUrl || "/placeholder.svg"}
              alt={`Avatar de ${testimonial.person}`}
              width={72}
              height={72}
              className="border-primary/20 h-20 w-20 rounded-full border-4 object-cover shadow-lg"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-montserrat text-primary text-2xl font-bold">
              {testimonial.person}
            </h2>
            <div className="mt-1 flex items-center gap-2 text-gray-600">
              <Briefcase size={16} />
              <span>{testimonial.job}</span>
            </div>
            {offre && (
              <div className="mt-2 flex items-center gap-2">
                <Tag size={14} className="text-gray-400" />
                <span className="text-sm text-gray-500">{offre.title}</span>
              </div>
            )}
            <div className="mt-2 flex items-center gap-2">
              <Calendar size={14} className="text-gray-400" />
              <span className="text-sm text-gray-500">
                {formatTestimonialDate(testimonial.date)}
              </span>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-full">
              <Quote className="text-primary" size={32} />
            </div>
          </div>
        </div>

        {/* Description principale */}
        <div className="bg-primary/5 mb-8 rounded-lg p-6">
          <blockquote className="font-merriweather text-primary text-lg leading-relaxed italic">
            &ldquo;{testimonial.description}&rdquo;
          </blockquote>
        </div>

        {/* Contenu détaillé */}
        <div className="space-y-8">
          {testimonial.content.avant && (
            <div>
              <h3 className="font-montserrat mb-3 text-lg font-semibold text-gray-800">
                Avant le coaching
              </h3>
              <p className="text-gray leading-relaxed">
                {testimonial.content.avant}
              </p>
            </div>
          )}

          {testimonial.content.difficultes && (
            <div>
              <h3 className="font-montserrat mb-3 text-lg font-semibold text-gray-800">
                Les difficultés au quotidien
              </h3>
              <p className="text-gray leading-relaxed">
                {testimonial.content.difficultes}
              </p>
            </div>
          )}

          {testimonial.content.apport && (
            <div>
              <h3 className="font-montserrat mb-3 text-lg font-semibold text-gray-800">
                Ce que le coaching m'a apporté
              </h3>
              <p className="text-gray leading-relaxed">
                {testimonial.content.apport}
              </p>
            </div>
          )}

          {testimonial.content.resultats && (
            <div>
              <h3 className="font-montserrat mb-3 text-lg font-semibold text-gray-800">
                Les résultats concrets
              </h3>
              <p className="leading-relaxed text-gray-700">
                {testimonial.content.resultats}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
