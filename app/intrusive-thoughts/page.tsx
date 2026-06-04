import Image from "next/image";
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

        <ol className="flex flex-col gap-10 sm:max-w-[640px]">
          {THOUGHTS.map((t, i) => (
            <Reveal key={t.id} index={i + 1}>
              <li>
                <Link
                  href={thoughtHref(t)}
                  className="group flex flex-col gap-3"
                >
                  {t.cover && t.cover.length > 0 && (
                    <div className="rounded-2xl bg-muted/10 p-8 flex items-center justify-center transition-colors group-hover:bg-muted/15">
                      <div className="relative h-[420px] w-full max-w-[320px]">
                        <Image
                          src={t.cover[0].src}
                          alt={t.cover[0].alt}
                          fill
                          sizes="320px"
                          priority={i === 0}
                          className={
                            t.cover.length > 1
                              ? "rounded-xl object-contain opacity-100 group-hover:animate-[fadeLoopA_1.6s_ease-in-out_infinite]"
                              : "rounded-xl object-contain"
                          }
                        />
                        {t.cover.length > 1 && (
                          <Image
                            src={t.cover[1].src}
                            alt={t.cover[1].alt}
                            fill
                            sizes="320px"
                            priority={i === 0}
                            className="rounded-xl object-contain opacity-0 group-hover:animate-[fadeLoopB_1.6s_ease-in-out_infinite]"
                          />
                        )}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <div className="flex items-baseline gap-3">
                      <span className="text-muted tabular-nums w-8 shrink-0">
                        {t.id.toString().padStart(2, "0")}
                      </span>
                      <span className="font-medium">{t.title}</span>
                    </div>
                    <p className="text-muted pl-11">{t.excerpt}</p>
                    <p className="pl-11 text-muted">
                      Updated {formatDate(t.updatedAt)}
                    </p>
                  </div>
                </Link>
              </li>
            </Reveal>
          ))}
        </ol>
      </main>
    </>
  );
}
