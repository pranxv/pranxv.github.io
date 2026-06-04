import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import GradientBackground from "@/app/components/GradientBackground";
import { THOUGHTS, formatDate, thoughtHref } from "./data";

export const metadata = {
  title: "intrusive thoughts — Kushal Pranav Kumar",
  description: "A small index of thoughts I keep coming back to.",
};

export default function IntrusiveThoughtsIndex() {
  return (
    <>
      <GradientBackground />
      <main className="relative z-[1] mx-auto flex w-full flex-col gap-8 p-4 pb-12 text-step--1 text-fg sm:w-[800px] sm:p-8 text-dark">
        <header className="flex flex-col">
          <Link href="/" className="text-muted italic mb-4">
            ← back
          </Link>
          <h1 className="font-medium">intrusive thoughts</h1>
          <p className="italic text-muted">
            a small index of thoughts I keep coming back to.
          </p>
        </header>

        <ol className="flex flex-col gap-8 sm:max-w-[640px]">
          {THOUGHTS.map((t, i) => (
            <Reveal key={t.id} index={i + 1}>
              <li className="flex flex-col gap-1">
                <Link
                  href={thoughtHref(t)}
                  className="group flex items-baseline gap-3"
                >
                  <span className="text-muted tabular-nums w-8 shrink-0">
                    {t.id.toString().padStart(2, "0")}
                  </span>
                  <span className="font-medium">{t.title}</span>
                </Link>
                <p className="text-muted pl-11">{t.excerpt}</p>
                <p className="pl-11 text-muted">
                  Updated {formatDate(t.updatedAt)}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </main>
    </>
  );
}
