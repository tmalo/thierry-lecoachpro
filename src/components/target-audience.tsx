import { Calendar, MessageSquareWarning } from "lucide-react";
import Link from "next/link";
import Section from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { config } from "@/lib/config";

const topics = [
  {
    title: "Vos explications techniques perdent vos interlocuteurs ?",
    content: `Vous avez l'impression d'être clair, mais on
vous regarde sans comprendre… ou vos idées passent à côté.`,
  },
  {
    title: "Vos compétences solides restent parfois invisibles ?",
    content: `Vous avez le sentiment de manquer de légitimité face à ceux 
    qui s'expriment plus facilement, même s'ils sont 
    moins experts.`,
  },
  {
    title: "Décider devient épuisant",
    content: `Entre urgences, attentes contradictoires et risques à 
    anticiper, vous vous sentez paralysé ou stressé par la peur 
    de vous tromper.`,
  },
  {
    title: "L'équipe ne suit pas toujours",
    content: `Vous aimeriez que chacun prenne ses responsabilités, sans 
    devoir tout contrôler ni mettre une pression artificielle.`,
  },
];
export function TargetAudience() {
  return (
    <Section style="gray">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-montserrat text-primary mb-12 text-center text-3xl font-bold md:text-4xl">
          Peut-être est-ce vous ?
        </h2>
        <div className="mb-12 grid gap-8 md:grid-cols-2">
          {topics.map((t, index) => (
            <Card key={index} className="p-6">
              <CardContent className="p-0">
                <div className="flex-items flex space-x-4">
                  <MessageSquareWarning className="text-primary mt-1 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-foreground mb-2 leading-relaxed font-bold">
                      {t.title}
                    </h3>
                    <p className="text-foreground font-montserrat leading-relaxed">
                      {t.content}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>{" "}
        <p className="text-primary text-center text-lg font-medium">
          Si vous vous reconnaissez dans ces situations, vous êtes au bon
          endroit.
        </p>
        <div className="mt-4 text-center">
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
  );
}
