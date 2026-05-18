"use client";

import type { ReactNode } from "react";
import { useIntro } from "./IntroContext";

const STAGGER_MS = 100;
const DURATION_MS = 400;

export default function Reveal({
  index = 0,
  children,
}: {
  index?: number;
  children: ReactNode;
}) {
  const { done } = useIntro();
  return (
    <div
      style={{
        opacity: done ? 1 : 0,
        transition: `opacity ${DURATION_MS}ms ease-out`,
        transitionDelay: done ? `${index * STAGGER_MS}ms` : "0ms",
      }}
    >
      {children}
    </div>
  );
}
