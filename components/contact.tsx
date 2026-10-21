"use client";

import { useCMS } from "@/lib/cms-data";

export function Contact() {
  const { data } = useCMS();
  const { contact } = data;
  const { phone, email, address } = contact.info;
  const tel = phone.replace(/[^\d+]/g, "");
  const ig = contact.social.instagram && contact.social.instagram !== "#" ? contact.social.instagram : "";

  const filas = [
    { label: "Teléfono", value: phone, href: `tel:${tel}` },
    { label: "Email", value: email, href: `mailto:${email}` },
    ...(ig ? [{ label: "Instagram", value: "@sonido_leon", href: ig, ext: true }] : []),
    { label: "Dirección", value: address },
  ];

  return (
    <section id="contacto" className="border-t border-border bg-background py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">{contact.title}</h2>
          {contact.subtitle && <p className="mt-4 text-muted-foreground">{contact.subtitle}</p>}
        </div>
        <dl className="lg:col-span-8">
          {filas.map((f) => (
            <div key={f.label} className="grid gap-2 border-t border-border py-6 sm:grid-cols-4">
              <dt className="etiqueta pt-1 text-muted-foreground">{f.label}</dt>
              <dd className="font-display text-lg sm:col-span-3 sm:text-xl">
                {f.href ? (
                  <a
                    href={f.href}
                    {...("ext" in f && f.ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="transition-colors hover:text-primary"
                  >
                    {f.value}
                  </a>
                ) : (
                  f.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
