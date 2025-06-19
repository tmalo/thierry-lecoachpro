"use client"

import type React from "react"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { MapPin, Send, Calendar, Clock, Video } from "lucide-react"
import { config } from "@/lib/config"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    entreprise: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const form = e.target as HTMLFormElement
      const formData = new FormData(form)

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as any).toString(),
      })

      if (response.ok) {
        setIsSubmitted(true)
      } else {
        throw new Error("Erreur lors de l'envoi")
      }
    } catch (error) {
      console.error("Erreur:", error)
      // Vous pouvez ajouter une gestion d'erreur ici
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white to-gray-50 py-20">
        <div className="container-max section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-montserrat text-4xl md:text-5xl font-bold text-primary mb-6">
              Entrons en conversation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Chaque grande transformation commence par un échange authentique. Prenons le temps de nous découvrir et
              d'explorer ensemble ce qui pourrait émerger.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-max section-padding">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="font-montserrat text-3xl font-bold text-primary mb-8">Planifions notre rencontre</h2>

              {/* Cal.com Integration */}
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-2xl mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-montserrat font-semibold text-xl">Réservation en ligne</h3>
                    <p className="text-gray-600">Choisissez le créneau qui vous convient</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <Clock size={16} className="text-primary" />
                    <span>Premier entretien gratuit de 30 minutes</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <Video size={16} className="text-primary" />
                    <span>Visioconférence ou rencontre en présentiel</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <MapPin size={16} className="text-primary" />
                    <span>Paris et région parisienne</span>
                  </div>
                </div>

                <a
                  href={config.calComUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-montserrat font-medium hover:bg-primary/90 transition-colors w-full justify-center"
                >
                  <Calendar size={20} />
                  Réserver mon créneau gratuit
                </a>
              </div>

              {/* Alternative contact */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-montserrat font-semibold mb-3">Vous préférez m'écrire d'abord ?</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pas de problème ! Utilisez le formulaire ci-contre pour me parler de vos enjeux. Je vous répondrai
                  rapidement et nous pourrons ensuite planifier notre premier échange.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white p-8 rounded-lg border border-gray-200">
                <h2 className="font-montserrat text-2xl font-bold text-primary mb-6">Écrivez-moi</h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="text-green-600" size={32} />
                    </div>
                    <h3 className="font-montserrat text-xl font-semibold mb-2">Message envoyé !</h3>
                    <p className="text-gray-600 mb-4">
                      Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    <a
                      href={config.calComUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary font-montserrat font-medium hover:gap-3 transition-all"
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
                        Don't fill this out if you're human:
                        <input name="bot-field" />
                      </label>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="nom" className="block font-montserrat font-medium mb-2">
                          Nom *
                        </label>
                        <input
                          type="text"
                          id="nom"
                          name="nom"
                          required
                          value={formData.nom}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block font-montserrat font-medium mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="entreprise" className="block font-montserrat font-medium mb-2">
                        Entreprise / Organisation
                      </label>
                      <input
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        value={formData.entreprise}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-montserrat font-medium mb-2">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 rounded-lg font-montserrat font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                <div className="mt-6 p-4 bg-gray-50 rounded-lg text-sm text-gray-600">
                  <p>
                    <strong>Protection des données :</strong> Vos informations sont traitées de manière confidentielle
                    et ne seront utilisées que pour répondre à votre demande. Elles ne seront jamais partagées avec des
                    tiers.
                  </p>
                </div>
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
              "Chaque conversation est une graine. Laissons-la germer dans l'espace de notre rencontre authentique."
            </blockquote>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
