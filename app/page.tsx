"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { MaintenanceScreen } from "@/components/maintenance-screen";
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

function PageContent() {
  const { data } = useCMS();
  // Con ?previa en la dirección se ve la web completa aunque esté en mantenimiento.
  const [previa, setPrevia] = useState(false);
  useEffect(() => {
    setPrevia(new URLSearchParams(window.location.search).has("previa"));
  }, []);

  if (data.maintenanceMode && !previa) {
    return <MaintenanceScreen data={data} />;
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
