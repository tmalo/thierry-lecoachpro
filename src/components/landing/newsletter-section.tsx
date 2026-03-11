// components/landing/newsletter-section.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Section from "../section";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Track event
    /*     sendGTMEvent({
      event: "newsletter_submit",
      email_domain: email.split("@")[1],
    }); */

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage(
          "Merci ! Vous recevrez les prochaines infos sur le programme.",
        );
        setEmail("");

        // Track success
        //sendGTMEvent({ event: "newsletter_success" });
      } else {
        throw new Error("Erreur lors de l'inscription");
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        "Une erreur est survenue. Réessayez ou contactez-moi directement.",
      );
    }
  };

  return (
    <Section className="bg-primary/5">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-3xl font-bold">Restez informé</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Recevez les prochaines dates de session et des contenus exclusifs sur
          le leadership tech.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center gap-4 sm:flex-row"
        >
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="votre@email.com"
            required
            className="max-w-md flex-1"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary text-primary-foreground"
          >
            {status === "loading" ? "Inscription..." : "S'inscrire"}
          </Button>
        </form>

        {status === "success" && (
          <p className="text-corail mt-4 font-semibold">{message}</p>
        )}
        {status === "error" && (
          <p className="text-destructive mt-4">{message}</p>
        )}
      </div>
    </Section>
  );
}
