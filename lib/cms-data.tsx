"use client";

import React, { createContext, useContext } from "react";

import { defaultData, type CMSData } from "./site-content";
export * from "./site-content";

// El contenido vive en lib/site-content.ts. Para cambiar textos, proyectos o
// datos de contacto se edita ese archivo y se vuelve a publicar la web.

interface CMSContextValue {
  data: CMSData;
}

const CMSContext = createContext<CMSContextValue>({ data: defaultData });

export function CMSProvider({ children }: { children: React.ReactNode }) {
  return <CMSContext.Provider value={{ data: defaultData }}>{children}</CMSContext.Provider>;
}

export function useCMS() {
  return useContext(CMSContext);
}

