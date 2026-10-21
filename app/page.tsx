"use client";

import { useEffect, useState } from "react";
import { MaintenanceScreen } from "@/components/maintenance-screen";
import { CMSProvider, useCMS } from "@/lib/cms-data";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

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
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
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
