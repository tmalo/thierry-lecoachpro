"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Section from "@/components/section";

interface Symptome {
  short: string;
  long: string;
}

export interface Problem {
  title: string;
  imagePath: string;
  symptomes: Symptome[];
  result: string;
}

export function ProblemSection({
  problem,
  children,
}: {
  problem: Problem;
  children: React.ReactNode;
}) {
  return (
    <Section style="gray" className="overflow-hidden" centered>
      <h2 className="mb-8 text-3xl font-bold text-gray-900 md:text-4xl">
        Vous reconnaissez cette situation ?
      </h2>

      <div className="grid items-center gap-12 text-left md:grid-cols-4">
        {/* Image animée */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="invisible relative w-full md:visible md:h-80 md:h-[500px]"
        >
          <Image
            src={problem.imagePath}
            alt="Manager entre deux feux"
            fill
            className="rounded-2xl object-cover shadow-md"
            priority
          />
        </motion.div>

        {/* Texte animé */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6 md:col-span-3"
        >
          {children}

          <ul className="benefits text-foreground w-5/6 list-inside list-disc space-y-2 leading-relaxed">
            {problem.symptomes.map((s, i) => (
              <li key={`symptom-${i}`}>
                <strong>{s.short}</strong> — {s.long}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <p className="mt-8 text-lg leading-relaxed text-gray-700">
        <strong>Résultat :</strong> {problem.result}
      </p>
    </Section>
  );
}
