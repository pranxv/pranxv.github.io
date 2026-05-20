"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";
import styles from "./GradientBackground.module.css";

/** Warm, vibrant sunset palette — deep maroon through to warm gold. */
const COLORS = ["#62160e", "#8a1f0c", "#e5531f", "#e7842c", "#dca33e"];

/** Tracks the user's reduced-motion preference, live. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/**
 * Warm cinematic mesh-gradient backdrop.
 *
 * A flowing WebGL mesh gradient (@paper-design/shaders-react) of
 * saturated sunset tones, fixed behind the whole page. Film grain comes
 * from the shader's own grain overlay; motion is paused for visitors
 * who prefer reduced motion.
 */
export default function GradientBackground() {
  const reduced = usePrefersReducedMotion();
  return (
    <div className={styles.root} aria-hidden="true">
      <MeshGradient
        colors={COLORS}
        distortion={0.85}
        swirl={0.15}
        grainOverlay={0.28}
        speed={reduced ? 0 : 0.85}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
