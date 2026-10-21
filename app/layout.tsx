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

const _display = localFont({
  src: [
    { path: "./fonts/space-grotesk-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/space-grotesk-latin-500-normal.woff2", weight: "500" },
    { path: "./fonts/space-grotesk-latin-700-normal.woff2", weight: "700" },
  ],
  variable: "--font-display",
  display: "swap",
});

const _mono = localFont({
  src: [
    { path: "./fonts/jetbrains-mono-latin-400-normal.woff2", weight: "400" },
    { path: "./fonts/jetbrains-mono-latin-500-normal.woff2", weight: "500" },
  ],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://sonidoleon.com";
const SITE_TITLE = "Sonido León — Instalaciones inmersivas, videomapping y escenografía";
const SITE_DESCRIPTION =
  "Sonido León desarrolla instalaciones inmersivas, videomapping y elementos escenográficos de luz, imagen y sonido, adaptados a cada espacio.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Sonido León",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "Sonido León",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [{ url: "/images/og-sonido-leon.jpg", width: 1200, height: 630, alt: "Sonido León" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/images/og-sonido-leon.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${_inter.variable} ${_display.variable} ${_mono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
