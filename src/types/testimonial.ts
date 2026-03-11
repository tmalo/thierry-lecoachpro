export type MarkdownSection = {
  level: number;
  title: string;
  content: string;
};
export interface Testimonial {
  id: string;
  offre: string;
  person: string;
  job: string;
  date: string;
  description: string;
  gender: "boy" | "girl";
  content?: MarkdownSection[];
}

function normalizeSeed(name: string): string {
  return name
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]/g, "-");
}

function hashSeed(seed: string): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash;
}

function seedToNumber(seed: string, max: number): number {
  const hash = hashSeed(seed);

  return (hash % max) + 1;
}

function seedToTwoDigit(seed: string, base: number = 18): string {
  const n = seedToNumber(seed, base);
  return n.toString().padStart(2, "0");
}

function getHair(seed: string, gender: "boy" | "girl"): string {
  const boy = [1, 2, 3, 4, 6, 7, 9, 11, 12, 20, 28, 47];
  const girl = [
    5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 23, 24, 29, 31, 32, 33, 35,
    40, 41, 42, 45,
  ];

  const list = gender === "boy" ? boy : girl;
  const index = hashSeed(seed) % list.length;
  return "variant" + list[index].toString().padStart(2, "0");
}

// Fonction pour générer l'URL de l'avatar
export function getAvatarUrl(person: string, gender: "boy" | "girl"): string {
  const seed = encodeURIComponent(normalizeSeed(person));
  const hair: Record<"boy" | "girl", number[]> = {
    boy: [1, 2, 3, 4, 6, 7, 9, 11, 12, 20, 28, 47],
    girl: [
      5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 18, 19, 21, 23, 24, 29, 31, 32, 33,
      35, 40, 41, 42, 45,
    ],
  };

  const params = new URLSearchParams({
    seed,
    hair: getHair(seed, gender),
    earringsProbability: gender === "boy" ? "0" : "60",
    hairAccessoriesProbability: "0",
    mouth: `happy${seedToTwoDigit(seed)}`, // expressions positives uniquement
  });

  return `https://api.dicebear.com/9.x/lorelei/svg?${params.toString()}`;
}

/* export function getAvatarUrl(person: string, gender: "boy" | "girl"): string {
  return `https://avatar.iran.liara.run/public/${gender}?username=${encodeURIComponent(person)}`;
}
 */

// Fonction utilitaire pour formater la date
export function formatTestimonialDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
  });
}
