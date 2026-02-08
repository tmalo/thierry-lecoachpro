// components/landing/coach-presentation.tsx
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import LinkedIn from "@/components/icons/linked-in";
import Substack from "@/components/icons/substack";
import { siteConfig } from "@/config/site";

export function Coach2() {
  return (
    <section className="section-padding py-20">
      <div className="container-max">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
            Qui vous accompagne ?
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-center text-xl">
            J&apos;aide les experts techniques à transformer leur expertise en
            impact visible, pour être compris, suivis et reconnus à leur juste
            valeur.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Carte profil */}
            <Card className="from-primary/5 to-corail/5 border-none bg-gradient-to-br">
              <CardContent className="flex flex-col items-center p-8 text-center">
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

                <h3 className="text-2xl font-bold">{siteConfig.author.name}</h3>
                <p className="text-muted-foreground mb-4">Executive Coach</p>

                <div className="mb-6 flex flex-wrap justify-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Tech
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Leadership
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    Communication
                  </Badge>
                </div>

                <Separator className="my-4 w-full" />

                <div className="flex justify-center gap-4">
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
              </CardContent>
            </Card>

            {/* Approche - 2 colonnes */}
            <div className="space-y-6 md:col-span-2">
              {/* Mon approche */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary mb-4 text-xl font-bold">
                    Mon approche
                  </h3>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      Dans les métiers techniques, on valorise la clarté, la
                      logique et les preuves. Mais quand il s&apos;agit de gérer
                      des humains, d&apos;influencer sans imposer ou de se faire
                      comprendre de non-spécialistes, les algorithmes habituels
                      ne suffisent plus.
                    </p>
                    <p className="text-foreground font-semibold">
                      C&apos;est là que j&apos;interviens.
                    </p>
                    <p>
                      Je vous aide à retrouver de la clarté, du recul et de
                      l&apos;impact dans un environnement qui bouge vite — sans
                      perdre votre logique, ni votre authenticité.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Méthode */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary mb-4 text-xl font-bold">
                    Une approche concrète et testée
                  </h3>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      Pas de grands discours ni de recettes toutes faites. On
                      part de situations réelles : un message mal passé, une
                      décision qui traîne, une réunion qui tourne en rond.
                    </p>
                    <p>
                      On décortique ce qui se joue, on teste d&apos;autres
                      options, et on mesure ce qui change.
                      <span className="text-foreground font-semibold">
                        {" "}
                        L&apos;objectif : faire évoluer les comportements aussi
                        naturellement qu&apos;on améliore un système en
                        production.
                      </span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Double culture */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-primary mb-4 text-xl font-bold">
                    Une double culture : Tech & Humain
                  </h3>
                  <div className="text-muted-foreground space-y-3">
                    <p>
                      <strong className="text-foreground">
                        20 ans dans le numérique
                      </strong>{" "}
                      m&apos;ont appris que la performance technique ne suffit
                      pas à créer la reconnaissance.
                    </p>
                    <p>
                      Aujourd&apos;hui, j&apos;aide mes clients à transformer
                      leur expertise en impact visible, à faire passer leurs
                      messages, et à fédérer leurs équipes autour d&apos;une
                      vision claire.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bénéfices concrets */}
          <div className="mt-12">
            <h3 className="mb-8 text-center text-2xl font-bold">
              Comment je peux vous aider concrètement
            </h3>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Communication */}
              <Card className="border-l-corail border-l-4">
                <CardContent className="p-6">
                  <h4 className="mb-4 text-lg font-bold">
                    💬 Communication au quotidien
                  </h4>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    <li>
                      <strong className="text-foreground">
                        Adapter votre discours
                      </strong>{" "}
                      pour des non-spécialistes sans perdre en précision
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Présenter une vision
                      </strong>{" "}
                      qui donne envie de suivre et mobilise votre équipe
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Évolution */}
              <Card className="border-l-primary border-l-4">
                <CardContent className="p-6">
                  <h4 className="mb-4 text-lg font-bold">
                    🚀 Évolution de carrière
                  </h4>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    <li>
                      <strong className="text-foreground">
                        Trouver votre place
                      </strong>{" "}
                      en Comité Technique ou Comité de Direction
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Progresser sans manager
                      </strong>{" "}
                      : avoir de l&apos;impact par l&apos;expertise et
                      l&apos;influence
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Équipe */}
              <Card className="border-l-corail border-l-4">
                <CardContent className="p-6">
                  <h4 className="mb-4 text-lg font-bold">
                    👥 Travail en équipe
                  </h4>
                  <ul className="text-muted-foreground space-y-3 text-sm">
                    <li>
                      <strong className="text-foreground">
                        Décider dans l&apos;incertitude
                      </strong>{" "}
                      sans paralysie ni stress excessif
                    </li>
                    <li>
                      <strong className="text-foreground">
                        Allier entraide et résultats
                      </strong>{" "}
                      : culture de collaboration haute performance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
