// components/landing/coach-presentation.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import LinkedIn from "@/components/icons/linked-in";
import Substack from "@/components/icons/substack";
import { siteConfig } from "@/config/site";

export function CoachPresentation() {
  return (
    <section className="section-padding py-20">
      <div className="container-max">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Qui vous accompagne ?
          </h2>

          <Card className="from-primary/5 to-corail/5 border-none bg-gradient-to-br">
            <CardContent className="grid grid-cols-1 gap-8 p-8 md:grid-cols-3">
              {/* Colonne gauche - Photo et infos */}
              <div className="col-span-1 flex flex-col items-center md:items-start">
                <div className="ring-primary/20 relative mb-4 h-32 w-32 overflow-hidden rounded-full ring-4">
                  <Image
                    fill
                    className="object-cover"
                    src="/timalo_portrait.jpg"
                    alt={`Portrait de ${siteConfig.author.name}`}
                    priority
                    sizes="128px"
                  />
                </div>

                <Separator className="my-6 w-full" />

                <div className="w-full text-center md:text-left">
                  <h3 className="text-2xl font-bold">
                    {siteConfig.author.name}
                  </h3>
                  <p className="text-muted-foreground mb-2">Executive Coach</p>

                  <div className="mb-6 flex flex-wrap justify-center gap-2 md:justify-start">
                    <Badge variant="secondary" className="text-xs">
                      20 ans Tech
                    </Badge>
                    <Badge variant="secondary" className="text-xs">
                      Leadership
                    </Badge>
                  </div>

                  <div className="flex justify-center gap-4 md:justify-start">
                    <Link
                      href={siteConfig.author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
                      aria-label="Profil LinkedIn"
                    >
                      <LinkedIn className="h-5 w-5" />
                      <span className="text-sm">LinkedIn</span>
                    </Link>
                    <Link
                      href={siteConfig.author.substack}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 flex items-center gap-2 transition-colors"
                      aria-label="Newsletter Substack"
                    >
                      <Substack className="h-5 w-5" />
                      <span className="text-sm">Substack</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Colonne droite - Expertise */}
              <div className="col-span-1 md:col-span-2">
                <div className="space-y-6">
                  {/* 20 ans Tech */}
                  <div>
                    <h4 className="text-primary mb-2 text-lg font-bold">
                      20+ ans d&apos;expérience dans la Tech
                    </h4>
                    <p className="text-muted-foreground">
                      Accompagnement d&apos;équipes techniques de toutes tailles
                      en startup, en scale-up et en ESN.
                    </p>
                  </div>

                  {/* Coaching */}
                  <div>
                    <h4 className="text-primary mb-2 text-lg font-bold">
                      Coach diplômé en Executive Coaching
                    </h4>
                    <p className="text-muted-foreground">
                      Diplôme Universitaire de CY Université, en coaching à
                      destination de dirigeants, managers et équipe au sein de
                      l’entreprise.
                    </p>
                  </div>

                  {/* Expertise terrain */}
                  <div>
                    <h4 className="text-primary mb-2 text-lg font-bold">
                      Expertise terrain actuelle
                    </h4>
                    <p className="text-muted-foreground">
                      Ce programme est le fruit de la rencontre entre
                      l&apos;expérience concrète sur le terrain et les approches
                      modernes de leadership et d&apos;accompagnement.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
