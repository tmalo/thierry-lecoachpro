import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { ArrowRight, Calendar, Hammer, Handshake, Sticker } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/section";
import { CtaSection, CtaButton } from "@/components/cta-section";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

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
              J&apos;aide les experts, managers et équipes techniques à
              retrouver de la clarté, du recul et de l&apos;impact dans un
              environnement qui bouge vite — sans perdre leur logique, ni leur
              authenticité.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction - Le défi des métiers techniques */}
      <Section>
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Texte */}
            <div className="prose prose-lg max-w-none">
              <h2 className="font-montserrat text-primary mb-6 text-3xl font-bold">
                Dans les métiers techniques, on valorise la clarté, la logique
                et les preuves.
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                Mais quand il s&apos;agit de gérer des humains,
                d&apos;influencer sans imposer ou de se faire comprendre de
                non-spécialistes, les algorithmes habituels ne suffisent plus.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-700">
                <strong>C&apos;est là que j&apos;interviens.</strong>
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                J&apos;aide les experts, managers et équipes techniques à
                retrouver de la clarté, du recul et de l&apos;impact dans un
                environnement qui bouge vite — sans perdre leur logique, ni leur
                authenticité.
              </p>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="from-primary/10 to-primary/5 flex h-96 items-center justify-center rounded-2xl bg-gradient-to-br p-8">
                <Image
                  src="/technical-team-collaboration.jpg"
                  alt="Équipe technique en collaboration"
                  className="h-full w-full rounded-lg object-cover shadow-lg"
                  width={1024}
                  height={1024}
                />
              </div>
              {/* Élément décoratif */}
              <div className="bg-primary/20 absolute -right-4 -bottom-4 h-24 w-24 rounded-full blur-xl"></div>
              <div className="bg-primary/10 absolute -top-4 -left-4 h-16 w-16 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </Section>

      {/* Les trois piliers de l'approche */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold">
            Comment je travaille avec vous
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Hammer className="text-primary" size={32} />
              </div>
              <h3 className="font-montserrat mb-4 text-xl font-semibold">
                Approche concrète
              </h3>
              <p className="leading-relaxed text-gray-600">
                On part de situations réelles : un message mal passé, une
                décision qui traîne, une réunion qui tourne en rond. On
                décortique, on teste, on mesure.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Handshake className="text-primary" size={32} />
              </div>
              <h3 className="font-montserrat mb-4 text-xl font-semibold">
                Cadre de co-construction
              </h3>
              <p className="leading-relaxed text-gray-600">
                Je ne vous dis pas quoi penser — je crée un espace où la logique
                rationnelle rencontre la dimension humaine, sans jugement ni
                simplification.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center">
              <div className="bg-primary/10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full">
                <Sticker className="text-primary" size={32} />
              </div>
              <h3 className="font-montserrat mb-4 text-xl font-semibold">
                Double culture Tech & Humain
              </h3>
              <p className="leading-relaxed text-gray-600">
                20 ans dans le numérique m&apos;ont appris que la performance
                technique ne suffit pas à créer la reconnaissance. Je vous aide
                à transformer votre expertise en impact visible.
              </p>
            </div>
          </div>

          <div className="mt-8 mb-4 text-center">
            <Button asChild size="lg">
              <Link
                href={config.calComUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Calendar size={16} />
                Prenons rendez-vous
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Section détaillée - Approche concrète */}
      <Section style="white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
            Une approche concrète et testée sur le terrain
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>
                Pas de grands discours ni de recettes toutes faites.
              </strong>
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              On part de situations réelles : un message mal passé, une décision
              qui traîne, une réunion qui tourne en rond.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              On décortique ce qui se joue, on teste d&apos;autres options, et
              on mesure ce qui change.
            </p>

            <div className="bg-primary/5 border-primary/10 mt-8 rounded-lg border p-6">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>L&apos;objectif :</strong> faire évoluer les
                comportements aussi naturellement qu&apos;on améliore un système
                en production.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section détaillée - Cadre de co-construction */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
            Un cadre de co-construction
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              Je ne vous dis pas quoi penser — je crée un espace où vous pouvez
              réfléchir autrement.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Un espace où la logique rationnelle rencontre la dimension
              humaine, sans jugement ni simplification.
            </p>

            <div className="mt-8 rounded-lg border border-gray-200 bg-white p-6">
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>C&apos;est dans cet échange</strong> que naissent des
                solutions durables, des décisions plus fluides et une influence
                plus naturelle.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Section détaillée - Double culture */}
      <Section>
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
            Une double culture : Tech & Humain
          </h2>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-700">
              20 ans dans le numérique m&apos;ont appris que la performance
              technique ne suffit pas à créer la reconnaissance.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
              Aujourd&apos;hui, j&apos;aide mes clients à transformer leur
              expertise en impact visible, à faire passer leurs messages, et à
              fédérer leurs équipes autour d&apos;une vision claire.
            </p>
          </div>
        </div>
      </Section>

      {/* Le résumé */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-montserrat text-primary mb-8 text-center text-3xl font-bold">
            En résumé
          </h2>

          <div className="bg-primary/5 border-primary/10 rounded-lg border p-8">
            <p className="text-center text-xl leading-relaxed text-gray-700">
              J&apos;aide les experts et les équipes à{" "}
              <strong>transformer leur expertise en impact visible</strong>, à{" "}
              <strong>mieux se faire comprendre</strong> et à{" "}
              <strong>faire bouger les lignes sans s&apos;épuiser</strong>.
            </p>
          </div>
        </div>
      </Section>

      {/* Quote Section */}
      <CtaSection
        description="Faire évoluer les comportements aussi naturellement qu'on améliore un système en production."
        quote
      >
        <CtaButton href="/contact" icon={<ArrowRight size={20} />}>
          Échanger ensemble
        </CtaButton>
      </CtaSection>

      <Footer />
    </div>
  );
}
