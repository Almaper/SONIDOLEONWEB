import React from "react"
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";

// Tipografías servidas desde la propia web (sin Google Fonts)
const _inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const _poppins = localFont({
  src: [
    { path: "./fonts/poppins-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/poppins-latin-600-normal.woff2", weight: "600" },
    { path: "./fonts/poppins-latin-700-normal.woff2", weight: "700" },
    { path: "./fonts/poppins-latin-800-normal.woff2", weight: "800" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sonidoleon.com";
const SITE_DESCRIPTION =
  "Sonido León: sonorización, iluminación y videomapping para conciertos, bodas, eventos privados, ayuntamientos e instalaciones de audio. Pide presupuesto sin compromiso.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Sonido León — Sonorización · Iluminación · Videomapping",
    template: "%s | Sonido León",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Sonido León",
    title: "Sonido León — Sonorización · Iluminación · Videomapping",
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/og-sonido-leon.jpg", width: 1200, height: 630, alt: "Sonido León" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sonido León — Sonorización · Iluminación · Videomapping",
    description: SITE_DESCRIPTION,
    images: ["/images/og-sonido-leon.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_poppins.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
