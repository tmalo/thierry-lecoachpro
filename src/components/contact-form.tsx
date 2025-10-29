"use client";

import type React from "react";

import { useState } from "react";
import { Send, Calendar } from "lucide-react";
import { config } from "@/lib/config";

export function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.target as HTMLFormElement;
      const formData = new FormData(form);

      const response = await fetch("/__contact.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Erreur lors de l&apos;envoi");
      }
    } catch (error) {
      console.error("Erreur:", error);
      // Vous pouvez ajouter une gestion d&apos;erreur ici
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <div className="rounded-lg border border-gray-200 bg-white p-8">
        <h2 className="font-montserrat text-primary mb-6 text-2xl font-bold">
          Écrivez-moi
        </h2>

        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Send className="text-green-600" size={32} />
            </div>
            <h3 className="font-montserrat mb-2 text-xl font-semibold">
              Message envoyé !
            </h3>
            <p className="mb-4 text-gray-600">
              Merci pour votre message. Je vous répondrai dans les plus brefs
              délais.
            </p>
            <a
              href={config.calComUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-montserrat inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
            >
              <Calendar size={16} />
              Ou réservez directement un créneau
            </a>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* Champ caché pour Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            {/* Honeypot pour protection anti-spam */}
            <div style={{ display: "none" }}>
              <label>
                Don&apos;t fill this out if you&apos;re human:
                <input name="bot-field" />
              </label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="nom"
                  className="font-montserrat mb-2 block font-medium"
                >
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="focus:ring-primary/20 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:ring-2"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-montserrat mb-2 block font-medium"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="focus:ring-primary/20 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:ring-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="entreprise"
                className="font-montserrat mb-2 block font-medium"
              >
                Entreprise / Organisation
              </label>
              <input
                type="text"
                id="entreprise"
                name="entreprise"
                value={formData.entreprise}
                onChange={handleChange}
                className="focus:ring-primary/20 focus:border-primary w-full rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:ring-2"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-montserrat mb-2 block font-medium"
              >
                Votre message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                placeholder="Parlez-moi de vos enjeux, de ce qui vous amène à chercher un accompagnement..."
                className="focus:ring-primary/20 focus:border-primary w-full resize-none rounded-lg border border-gray-300 px-4 py-3 transition-colors focus:ring-2"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary font-montserrat hover:bg-primary/90 flex w-full items-center justify-center gap-2 rounded-lg py-4 font-medium text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                "Envoi en cours..."
              ) : (
                <>
                  Envoyer le message
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        )}
        <div className="mt-6 rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
          <p>
            <strong>Protection des données :</strong> Vos informations sont
            traitées de manière confidentielle et ne seront utilisées que pour
            répondre à votre demande. Elles ne seront jamais partagées avec des
            tiers.
          </p>
        </div>
      </div>
    </div>
  );
}
