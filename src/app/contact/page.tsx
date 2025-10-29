import type React from "react";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import Section from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { PanelReserver } from "@/components/panel-reserver";
import { WriteMeFirst } from "@/components/write-me-first";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="font-montserrat text-primary mb-6 text-4xl font-bold md:text-5xl">
              Entrons en conversation
            </h1>
            <p className="text-xl leading-relaxed text-gray-600">
              Chaque grande transformation commence par un échange authentique.
              Prenons le temps de nous découvrir et d&apos;explorer ensemble ce
              qui pourrait émerger.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="font-montserrat text-primary mb-8 text-3xl font-bold">
              Planifions notre rencontre
            </h2>

            {/* Cal.com Integration */}
            <PanelReserver />

            {/* Alternative contact */}
            <WriteMeFirst />
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </Section>

      {/* Quote Section */}
      <Section style="gray">
        <div className="mx-auto max-w-4xl text-center">
          <blockquote className="text-primary text-2xl leading-relaxed font-light italic md:text-3xl">
            &ldquo;Chaque conversation est une graine. Laissons-la germer dans
            l&apos;espace de notre rencontre authentique.&rdquo;
          </blockquote>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
