// components/landing/faq-section.tsx
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Section from "../section";
import { Faq } from "@/types/offre";

export function FAQSection({ faq, ...rest }: { faq: Faq[] }) {
  return (
    <Section id="faq" {...rest}>
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
          Questions fréquentes
        </h2>

        <div className="space-y-6">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-0"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            {faq.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                itemType="https://schema.org/Question"
              >
                <AccordionTrigger>
                  <h3 itemProp="name" className="mb-2 text-lg font-bold">
                    {item.question}
                  </h3>
                </AccordionTrigger>
                <AccordionContent className="p-6">
                  <div
                    itemProp="acceptedAnswer"
                    itemScope
                    itemType="https://schema.org/Answer"
                  >
                    <p itemProp="text" className="text-foreground text-lg">
                      {item.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </Section>
  );
}
