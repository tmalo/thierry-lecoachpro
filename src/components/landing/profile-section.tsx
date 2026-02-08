// components/landing/profile-section.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import LinkedIn from "@/components/icons/linked-in";
import Substack from "@/components/icons/substack";
import { siteConfig } from "@/config/site";

export function ProfileSection() {
  return (
    <section className="section-padding py-20">
      <div className="container-max">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Qui vous accompagne ?
          </h2>

          <Card>
            <CardContent className="p-8">
              <h3 className="mb-6 text-2xl font-bold">
                {siteConfig.author.name}
              </h3>

              <div className="mb-8 space-y-4">
                <p className="text-lg">
                  <strong>20+ ans d&apos;expérience dans la Tech</strong>
                  <br />
                  Accompagnement d&apos;équipes techniques de toutes tailles en
                  startup et scale-up
                </p>

                <p className="text-lg">
                  <strong>Coach diplômé en Executive Coaching</strong>
                  <br />
                  Diplôme Universitaire en coaching à destination de dirigeants,
                  managers et équipe au sein de l’entreprise.
                </p>

                <p className="text-lg">
                  <strong>Expertise terrain actuelle</strong>
                  <br />
                  J&apos;accompagne actuellement un VP Engineering en scale-up
                  sur les enjeux de dynamique d&apos;équipe et leadership des
                  Heads of
                </p>

                <p className="text-lg">
                  <strong>Spécialisation</strong>
                  <br />
                  Vision stratégique, pilotage d&apos;équipe, communication
                  managériale en environnement tech
                </p>
              </div>

              <div className="flex gap-4">
                <Link
                  href={siteConfig.author.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary flex items-center gap-2 hover:underline"
                >
                  <LinkedIn className="h-5 w-5" />
                  LinkedIn
                </Link>
                <Link
                  href={siteConfig.author.substack}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary flex items-center gap-2 hover:underline"
                >
                  <Substack className="h-5 w-5" />
                  Substack
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
