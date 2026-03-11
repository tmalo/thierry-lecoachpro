// components/landing/deliverables-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import Section, { SectionProps } from "@/components/section";
import { Deliverable } from "@/types/program";

export function DeliverablesSection({
  deliverables,
  ...rest
}: {
  deliverables: Deliverable[];
}) {
  return (
    <Section {...rest}>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Vous repartez avec
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {deliverables.map((item, index) => (
            <Card key={index}>
              <CardContent className="flex items-start space-x-4">
                <div className="mb-4 text-3xl">{item.emoji}</div>
                <div className="">
                  <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}.</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
