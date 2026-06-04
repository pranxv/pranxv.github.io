import Reveal from "./components/Reveal";
import GradientBackground from "./components/GradientBackground";

export default function Home() {
  return (
    <>
      <GradientBackground />
      <main className="relative z-[1] mx-auto flex w-full flex-col gap-8 p-4 pb-12 text-step--1 text-fg sm:w-[800px] sm:p-8 text-dark">
        <header className="flex flex-col">
          <h1 className="font-medium"> Kushal Pranav Kumar </h1>
          <p className="italic text-muted"> Software engineer </p>
        </header>
        <div id="about" className="sm:max-w-[480px] scroll-mt-8">
          <Reveal index={1}>
            <p className="pt-3">
              I'm a Software Engineer at{" "}
              <a
                href="https://www.americanexpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium"
              >
                American Express
              </a>
              , where I work with the Platform GraphQL team building federated
              GraphQL infrastructure that powers experiences across the company.
            </p>
          </Reveal>
          <Reveal index={2}>
            <p className="pt-3">
              Before this, I was an SRE on the Identity and Auth platform,
              keeping the systems that authenticate millions of cardmembers
              running cleanly.
            </p>
          </Reveal>
          <Reveal index={3}>
            <p className="pt-3">
              I am pretty serious in the space of endurance sports,and I run, or
              pick up my bike 🚲 and go for long rides. I train crossfit, compete
              in HYROX, and always being active nonetheless.
              <br className="pt-2" />
              -lowkey obsessed with the craft side of technical apparel. Running
              wear, shoe drops, eyewear, you name it!
            </p>
          </Reveal>
          <Reveal index={4}>
            <p className="pt-3">
              I actually used to run creatives, social media and bringing in
              brand collabs, etc with a local run club in Bengaluru -{" "}
              <a
                href="https://www.instagram.com/indiranagar_runclub/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main Mission
              </a>{" "}
              (formerly Indiranagar Run Club), while running with them.
            </p>
          </Reveal>
        </div>
        <div id="contact" className="border-t border-muted/40 pt-8 flex flex-col sm:max-w-[480px] scroll-mt-8">
          <p>
            Always finding opportunities to fund my obsession palette, try me
            here:{" "}
            <a href="mailto:kushalpranavkumar@gmail.com">
              kushalpranavkumar@gmail.com
            </a>
          </p>
        </div>
        <div id="socials" className="border-t border-muted/40 pt-8 flex flex-col gap-1 sm:max-w-[480px] scroll-mt-8">
          <p> or here: </p>
          <a
            href="https://www.linkedin.com/in/kushalpranav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LinkedIn{" "}
          </a>
          <a
            href="https://www.instagram.com/kushpranavkmr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Instagram{" "}
          </a>
          <a
            href="https://x.com/pranxxv"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            X (formerly Twitter){" "}
          </a>
          <a
            href="https://www.youtube.com/watch?v=StMltAX0mp0"
            target="_blank"
            rel="noopener noreferrer"
          >
            Strava
          </a>
        </div>
      </main>
    </>
  );
}
