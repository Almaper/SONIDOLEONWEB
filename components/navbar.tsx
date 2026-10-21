"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, Instagram } from "lucide-react";

const INSTAGRAM_URL = "https://www.instagram.com/sonido_leon/";

const navLinks = [
  { label: "Qué hacemos", href: "/#que-hacemos" },
  { label: "Conceptos", href: "/#conceptos" },
  { label: "Contacto", href: "/#contacto" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || isOpen ? "border-b border-border bg-background/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/#inicio" className="flex items-center" aria-label="Sonido León, inicio">
          <Image src="/images/logo.png" alt="Sonido León" width={160} height={48} className="h-9 w-auto md:h-10" priority />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="etiqueta text-muted-foreground transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Sonido León" className="text-muted-foreground transition-colors hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
          </li>
        </ul>

        <button type="button" onClick={() => setIsOpen(!isOpen)} className="text-foreground md:hidden" aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <ul className="flex flex-col gap-1 px-6 pb-6 md:hidden">
          {[...navLinks, { label: "Instagram", href: INSTAGRAM_URL }].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="etiqueta block border-b border-border py-4 text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
