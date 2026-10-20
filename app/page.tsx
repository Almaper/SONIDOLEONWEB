"use client";

import Image from "next/image";
import { Wrench } from "lucide-react";
import { CMSProvider, useCMS } from "@/lib/cms-data";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { About } from "@/components/about";
import { Projects } from "@/components/projects";
import { News } from "@/components/news";
import { Contact } from "@/components/contact";
import { InstagramFeed } from "@/components/instagram-feed";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function MaintenanceScreen() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
          <Wrench className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Sitio en mantenimiento
        </h1>
        <p className="text-muted-foreground mb-6">
          Estamos realizando mejoras en nuestra web. Volvemos pronto con novedades.
        </p>
        <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
          <img 
            src="/images/logo.png" 
            alt="Sonido León" 
            className="h-8 w-auto opacity-60"
          />
        </div>
      </div>
    </div>
  );
}

function PageContent() {
  const { data } = useCMS();

  if (data.maintenanceMode) {
    return <MaintenanceScreen />;
  }

  return (
    <>
      {/* Fixed full-screen background image */}
      <div className="fixed inset-0 -z-10">
        <Image
          src={data.hero.image}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Projects />
        <News />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function Home() {
  return (
    <CMSProvider>
      <PageContent />
    </CMSProvider>
  );
}
