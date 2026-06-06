import Image from "next/image";
import Link from "next/link";
import Reveal from "@/app/components/Reveal";
import GradientBackground from "@/app/components/GradientBackground";
import { formatDate, getThought } from "@/app/intrusive-thoughts/data";

/**
 * Intrusive thought #1 — "my relationship with running".
 *
 * Reads its title/dates/slug from the shared `data.ts` registry so the
 * index and the article page never drift. LocalTime is mounted once in
 * the root layout (app/layout.tsx) — every page picks it up for free.
 */

const thought = getThought(1, "running")!;

export const metadata = {
  title: `${thought.title} — Kushal Pranav Kumar`,
  description: thought.excerpt,
};

export default function RunningPage() {
  return (
    <>
      <GradientBackground />
      <main className="relative z-[1] mx-auto flex w-full flex-col gap-8 p-4 pb-12 text-step--1 text-fg sm:w-[800px] sm:p-8 text-dark">
        <header className="flex flex-col">
          <Link
            href="/intrusive-thoughts"
            className="text-muted italic mb-4"
          >
            ← intrusive thoughts
          </Link>
          <p className="text-muted tabular-nums">
            no. {thought.id.toString().padStart(2, "0")}
          </p>
          <h1 className="font-medium">{thought.title}</h1>
          <p className="italic text-muted">
            a tracker, but not the kind you think
          </p>
          <p className="pt-2 text-muted">
            Updated {formatDate(thought.updatedAt)}
          </p>
        </header>

        <Reveal index={1}>
          <figure className="sm:max-w-[640px]">
            <div className="grid grid-cols-2 gap-3">
              <Image
                src="/running-bengaluru.jpg"
                alt="Standing on a tree-lined Bengaluru road after a run"
                width={900}
                height={1200}
                className="rounded-2xl w-full h-full object-cover aspect-[3/4]"
                priority
              />
              <Image
                src="/running-murakami.jpg"
                alt="Holding Murakami's What I Talk About When I Talk About Running on a flight"
                width={1500}
                height={2000}
                className="rounded-2xl w-full h-full object-cover aspect-[3/4]"
                priority
              />
            </div>
            <figcaption className="pt-2 text-muted italic">
              post-run in Bengaluru, and the book that started this re-think — somewhere over India.
            </figcaption>
          </figure>
        </Reveal>

        <div className="sm:max-w-[480px]">
          <Reveal index={2}>
            <p className="pt-3">
              I picked up <em>What I Talk About When I Talk About Running</em> by
              Haruki Murakami in one of my recent flights from Delhi to
              Bengaluru, (we should talk about how not having Wifi for 2 hours
              is actually a good thing and those starlink installations can
              wait), and as someone recovering from an ATFL injury, it really
              helped re-analysing my effort about running.
            </p>
          </Reveal>

          <Reveal index={3}>
            <p className="pt-3">
              I am not ashamed to admit, I picked up running as a sport without
              any expectations initially before it was even cool shortly after
              the second wave of covid ended, and since then and now, alot has
              changed. Yes there was strava before strava was cool,
              I actually had no clue about heart rate zones, paces, etc but my
              why back then was probably about making up the time I (and we
              all lost to covid) confined in our comfortable houses, most of
              us spending time with our family, zoom meetings, and making
              banana breads/ dalgona coffee. I missed movement, and hence I
              started running.
            </p>
          </Reveal>

          <Reveal index={4}>
            <p className="pt-3">
              BUT I FIND MYSELF TODAY THINKING, I somehow became a prey to the
              over optimising culture and tracking that I forgot it was an
              escape and still today is one from myself, my thoughts, worries,
              my lows, ups and downs.
            </p>
          </Reveal>

          <Reveal index={5}>
            <p className="pt-3">
              So this is my takeaway, I run 6 miles which is approximately
              9.65606 kms, everyday and have an average mileage of 50kms every
              week. I only track the distance, I dont track paces here.
            </p>
          </Reveal>

          <Reveal index={6}>
            <p className="pt-3 italic text-muted">this is my tracker.</p>
          </Reveal>
        </div>
      </main>
    </>
  );
}
