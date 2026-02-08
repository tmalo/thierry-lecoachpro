// components/landing/transformation-section.tsx
import { Card, CardContent } from "@/components/ui/card";
import Section from "../section";
import { JSX } from "react";

export interface Transformation {
  result: string;
  items: TransformationItem[];
}

export interface TransformationItem {
  Icon: JSX.Element;
  title: string;
  description: string;
}

import React from "react";

function renderResult(text: string): React.ReactNode {
  const regex = /\*\*(.+?)\*\*/g;
  const parts: React.ReactNode[] = [];

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const [fullMatch, boldText] = match;
    const start = match.index;
    const end = start + fullMatch.length;

    // texte avant le ** **
    if (start > lastIndex) {
      parts.push(text.slice(lastIndex, start));
    }

    // texte en gras
    parts.push(
      <span key={start} className="font-bold">
        {boldText}
      </span>,
    );

    lastIndex = end;
  }

  // texte restant après le dernier match
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return <p className="text-center text-xl">{parts}</p>;
}

export function TransformationSection({
  transformation,
}: {
  transformation: Transformation;
}) {
  return (
    <Section style="white">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Ce qui change en 4 semaines
        </h2>
        <p className="mb-8 text-center text-lg">À la fin du programme :</p>

        <div className="mb-12 grid gap-8 space-y-6 md:grid-cols-2">
          {transformation.items.map((item, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 rounded-lg bg-gray-50 p-8"
            >
              {item.Icon}
              <div>
                <h3 className="mb-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Card className="from-corail/10 border-corail/20 bg-gradient-to-br to-white">
          <CardContent className="p-6">
            {renderResult(transformation.result)}
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}
