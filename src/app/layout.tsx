import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "LimnGroup — Limpieza profesional en El Casar de Guadalajara",
    template: "%s | LimnGroup",
  },
  description:
    "Servicio de limpieza profesional para hogares en El Casar de Guadalajara. Limpieza del hogar, colchones, tapicería, coches y edredones con recogida en 24h.",
  keywords: [
    "limpieza El Casar de Guadalajara",
    "limpieza del hogar",
    "limpieza de colchones",
    "limpieza de tapicería",
    "limpieza de coches",
    "LimnGroup",
  ],
  authors: [{ name: siteConfig.ownerName }],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteConfig.url,
    siteName: "LimnGroup",
    title: "LimnGroup — Limpieza profesional en El Casar de Guadalajara",
    description:
      "Espacios limpios, vida saludable, más tiempo para ti. Servicio de limpieza profesional y cercano en El Casar de Guadalajara.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LimnGroup, limpieza profesional",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${poppins.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
