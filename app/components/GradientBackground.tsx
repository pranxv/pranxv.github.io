import styles from "./GradientBackground.module.css";

/**
 * Pure white backdrop, fixed behind the whole page.
 * No animation, no texture, no client runtime.
 */
export default function GradientBackground() {
  return <div className={styles.root} aria-hidden="true" />;
}
