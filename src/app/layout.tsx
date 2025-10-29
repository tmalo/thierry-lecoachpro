import type { Metadata } from "next";
import { Montserrat, Merriweather, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { config } from "@/lib/config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Coaching Professionnel | L'équipe inspire, le leader respire",
  description:
    "Coaching sur mesure pour managers et équipes. Redonnez du souffle au leadership et du sens à l'action collective.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          defer
          src={config.umami.src}
          data-website-id={config.umami.websiteId}
        ></script>
      </head>
      <body
        className={`${montserrat.variable} ${merriweather.variable} ${cormorant.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
