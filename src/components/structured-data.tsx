import { generateOffresStructuredData, generateLivreStructuredData } from "@/lib/structured-data"

interface StructuredDataProps {
  data?: object
  type?: "offres" | "livre" | "organization" | "custom"
}

export default function StructuredData({ data, type = "custom" }: StructuredDataProps) {
  let structuredData = data

  if (type === "offres") {
    structuredData = generateOffresStructuredData()
  } else if (type === "livre") {
    structuredData = generateLivreStructuredData()
  }

  if (!structuredData) return null

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  )
}
