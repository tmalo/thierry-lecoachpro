import { generateOffresStructuredData } from "@/lib/structured-data"

interface StructuredDataProps {
  data?: object
  type?: "offres" | "organization" | "custom"
}

export default function StructuredData({ data, type = "custom" }: StructuredDataProps) {
  let structuredData = data

  if (type === "offres") {
    structuredData = generateOffresStructuredData()
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
