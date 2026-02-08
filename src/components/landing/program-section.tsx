// components/landing/program-section.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProductInfo, Session } from "@/types/program";
import Section from "../section";

export function ProgramSection({ product }: { product: ProductInfo }) {
  const nbCollectives = product.sessions.filter(
    (x) => x.type == "collective",
  ).length;
  const nbIndividuelles = product.sessions.filter(
    (x) => x.type == "individuelle",
  ).length;
  return (
    <Section style="muted">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
          Le parcours : {product.program.duration}, {product.sessions.length}{" "}
          étapes
        </h2>
        <p className="text-muted-foreground mb-12 text-center text-lg">
          Individuel + collectif
        </p>

        {/* Format */}
        <Card className="from-primary mb-14 overflow-hidden border-none bg-gradient-to-br to-blue-800 p-0">
          <CardContent className="relative p-3 px-6">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-bl-full bg-violet-500/20" />
            <div className="relative mb-6 text-white">
              <h3 className="mb-6 text-xl font-bold">Format</h3>
              <ul className="space-y-3 text-white/90">
                <li>
                  •{" "}
                  <strong>
                    {product.program.duration} d&apos;accompagnement
                  </strong>{" "}
                  en petit groupe ({product.program.maxParticipants}{" "}
                  participants max)
                </li>
                <li>
                  • <strong>6 sessions</strong> : {nbCollectives} collectives
                  (1h30) + {nbIndividuelles}
                  individuelles (1h)
                </li>
                <li>• Outils et frameworks entre les séances</li>
                <li>• Suivi asynchrone léger</li>
                <li>• 1 session &quot;urgence&quot; de 30 min incluse</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Étapes avec accordéon */}
        <SessionList product={product} />
      </div>
    </Section>
  );
}

function SessionList({ product }: { product: ProductInfo }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {product.sessions.map((session, index) => {
        const variant = index % 2 === 0 ? "primary" : "secondary";
        const borderColor =
          variant === "primary" ? "border-l-primary" : "border-l-corail";
        const badgeClassName =
          variant === "primary"
            ? "bg-primary text-primary-foreground"
            : "bg-corail text-corail-foreground";
        const outcomeColor =
          variant === "primary" ? "text-primary" : "text-corail-foreground";

        return (
          <AccordionItem
            key={session.id}
            value={session.id}
            className={cn("bg-card rounded-lg border-l-4 px-6", borderColor)}
          >
            <AccordionTrigger
              className="hover:no-underline [&[data-state=open]>div>.icon]:rotate-45"
              hideChevron
            >
              <div className="flex w-full items-center gap-3 text-left">
                <Plus
                  strokeWidth={3}
                  className={cn(
                    "icon h-5 w-5 shrink-0 transition-transform duration-200",
                    variant === "primary" ? "text-primary" : "text-corail",
                  )}
                />
                <Badge className={cn("h-6 w-25 shrink-0", badgeClassName)}>
                  {session.week}
                </Badge>
                <div>
                  <h3 className="text-lg font-bold">{session.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    Session {session.type} ({session.duration})
                  </p>
                </div>
              </div>
            </AccordionTrigger>

            <AccordionContent className="pt-4 pb-6">
              <p className="mb-4">
                {getSessionDescription(product, session.id)}
              </p>

              {getSessionBullets(product, session.id) && (
                <ul className="mb-4 ml-4 space-y-2">
                  {getSessionBullets(product, session.id)?.map((bullet, i) => (
                    <li key={i}>• {bullet}</li>
                  ))}
                </ul>
              )}

              <p className={cn("text-base font-semibold", outcomeColor)}>
                → {getSessionOutcome(product, session.id)}
              </p>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

// Helper functions pour le contenu des sessions
function getSessionDescription(product: ProductInfo, id: string): string {
  return product.sessions.find((x) => x.id === id)?.description || "";
}

function getSessionBullets(
  product: ProductInfo,
  id: string,
): string[] | undefined {
  const item: Session | undefined = product.sessions.find((x) => x.id === id);
  return item?.bullets;
}

function getSessionOutcome(product: ProductInfo, id: string): string {
  return product.sessions.find((x) => x.id === id)?.outcome || "";
}
