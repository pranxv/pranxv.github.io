"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type IntroContextValue = {
  done: boolean;
  setDone: (v: boolean) => void;
};

const IntroContext = createContext<IntroContextValue | null>(null);

export function IntroProvider({ children }: { children: ReactNode }) {
  const [done, setDone] = useState(false);
  return (
    <IntroContext.Provider value={{ done, setDone }}>
      {children}
    </IntroContext.Provider>
  );
}

export function useIntro() {
  const ctx = useContext(IntroContext);
  if (!ctx) throw new Error("useIntro must be used inside <IntroProvider>");
  return ctx;
}
