import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { MessageCircle, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-gray-100">
              <MessageCircle className="text-gray-400" size={48} />
            </div>

            <h1 className="font-montserrat mb-4 text-3xl font-bold text-gray-900">
              Témoignage introuvable
            </h1>

            <p className="mb-8 text-lg text-gray-600">
              Le témoignage que vous recherchez n'existe pas ou a été supprimé.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/temoignages"
                className="bg-primary font-montserrat hover:bg-primary/90 inline-flex items-center gap-2 rounded-lg px-6 py-3 font-medium text-white transition-colors"
              >
                <ArrowLeft size={20} />
                Voir tous les témoignages
              </Link>

              <Link
                href="/"
                className="border-primary text-primary font-montserrat hover:bg-primary inline-flex items-center gap-2 rounded-lg border-2 px-6 py-3 font-medium transition-colors hover:text-white"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
