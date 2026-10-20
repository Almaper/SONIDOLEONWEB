"use client";

import { useCMS } from "@/lib/cms-data";
import { useState, useEffect } from "react";
import { ChevronDown, Sparkles, Volume2, Calendar, Phone } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const { data } = useCMS();
  const { subtitle, badge, stats, image } = data.hero;

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo o imagen con parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10" />
        <img
          src={image || "/images/hero-bg.jpg"}
          alt="Sonido León"
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Elementos decorativos flotantes */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/5 rounded-full filter blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/5 rounded-full filter blur-3xl animate-float animation-delay-400" />
        <Volume2 className="absolute top-40 right-20 text-yellow-400/10 w-24 h-24 animate-rotate-slow" />
      </div>

      {/* Contenido principal */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        {/* Logo centrado con subtitulo debajo */}
        <div className="flex flex-col items-center justify-center mb-8">
          <h1 className="sr-only">
            Sonido León: sonorización, iluminación y videomapping para eventos
          </h1>
          <img
            src="/images/logo.png"
            alt="Sonido León"
            className="h-32 md:h-40 lg:h-48 w-auto mb-6"
          />
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-normal tracking-wide">
            {subtitle}
          </p>
        </div>

        {/* Badge de experiencia */}
        <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-6 py-3 mb-12 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-yellow-400" />
          <span className="text-sm font-medium text-yellow-400 tracking-wider uppercase">{badge}</span>
        </div>

        {/* CTAs mejorados */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="#contacto"
            className="group relative px-10 py-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(250,204,21,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5" />
              SOLICITAR PRESUPUESTO
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </Link>

          <Link
            href="#proyectos"
            className="group px-10 py-5 border-2 border-gray-700 text-white font-bold rounded-full hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 backdrop-blur-sm flex items-center gap-2 text-lg hover:scale-105"
          >
            VER PROYECTOS
            <ChevronDown className="h-5 w-5 group-hover:rotate-180 transition-transform duration-300" />
          </Link>
        </div>

        {/* Estadísticas rápidas */}
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
