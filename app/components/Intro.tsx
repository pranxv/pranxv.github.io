"use client";

import { useEffect, useState } from "react";

const WORDS = [
  { text: "hello", lang: "en" },
  { text: "नमस्ते", lang: "hi" },
  { text: "Allô", lang: "fr" },
];

const WORD_DURATION = 700;
const EXIT_DURATION = 450;
const SESSION_KEY = "intro-seen";

type Phase = "playing" | "exiting" | "done";

export default function Intro() {
  const [index, setIndex] = useState(0);
  const [cphase, setPhase] = useState<Phase>("playing");

  // Skip if already seen this session, or user prefers reduced motion
  useEffect(() => {
    const seen = sessionStorage.getItem(SESSION_KEY);
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (seen || prefersReduced) {
      setPhase("done");
    }
  }, []);

  // State machine: advance words, then exit, then done
  useEffect(() => {
    if (cphase === "done") return;
    if (cphase === "exiting") {
      const id = setTimeout(() => {
        setPhase("done");
        sessionStorage.setItem(SESSION_KEY, "1");
      }, EXIT_DURATION);
      return () => clearTimeout(id);
    }
    if (index < WORDS.length - 1) {
      const id = setTimeout(() => setIndex(index + 1), WORD_DURATION);
      return () => clearTimeout(id);
    } else {
      const id = setTimeout(() => setPhase("exiting"), WORD_DURATION);
      return () => clearTimeout(id);
    }
  }, [index, cphase]);

  // Escape key skips the splash
  useEffect(() => {
    if (cphase !== "playing") return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPhase("exiting");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [cphase]);

  if (cphase === "done") return null;
  const current = WORDS[index];

  return (
    <div
      aria-hidden="true"
      onClick={() => setPhase("exiting")}
      className={[
        "fixed inset-0 z-50 flex items-center justify-center bg-bg cursor-pointer",
        "transition-opacity duration-500 ease-out",
        cphase === "exiting" ? "opacity-0" : "opacity-100",
      ].join(" ")}
    >
      <span
        lang={current.lang}
        className="text-step-2 italic text-fg tracking-tight"
      >
        {current.text}
      </span>
    </div>
  );
}
