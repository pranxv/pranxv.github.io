import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col gap-8 p-4 pb-12 text-step--1 text-fg sm:w-[800px] sm:p-8 text-dark">
      <header className="flex flex-col">
        <h1 className="font-medium"> Kushal Pranav Kumar </h1>
        <p className="italic text-muted"> Software engineer </p>
      </header>
      <div className="sm:max-w-[480px]">
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
            Before this, I was an SRE on the Identity and Auth platform, keeping
            the systems that authenticate millions of cardmembers running
            cleanly.
          </p>
        </Reveal>
         <Reveal index={3}>
        <p className="pt-3">
          I am pretty serious in the space of endurance sports,and I run, or
          pick up my bike 🚲 and go for long rides. I train crossfit, compete in
          HYROX, and always being active nonetheless.
          <br className="pt-2" />
          -lowkey obsessed with the craft side of technical apparel. Running
          wear, shoe drops, eyewear, you name it!
        </p>
        </Reveal>
        <Reveal index={4}>
        <p className="pt-3">
          I actually used to run creatives, social media and bringing in brand
          collabs, etc with a local run club in Bengaluru -{" "}
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
      <div className="border-t border-muted/40 pt-8 flex flex-col sm:max-w-[480px]">
        <p>
          Always finding opportunities to fund my obsession palette, try me
          here:{" "}
          <a href="mailto:kushalpranavkumar@gmail.com">
            kushalpranavkumar@gmail.com
          </a>
        </p>
      </div>
      <div className="border-t border-muted/40 pt-8 flex flex-col gap-1 sm:max-w-[480px]">
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
      <div className="border-t border-muted/40 pt-8 sm:max-w-[480px]">
        <p className="mb-2 text-muted">currently looping</p>
        <iframe
          height="175"
          width="100%"
          title="Media player"
          src="https://embed.music.apple.com/us/album/mad-sounds/663097964?i=663098052&;itscg=30200&;itsct=music_box_player&;ls=1&;app=music&;mttnsubad=663098052&;theme=light"
          id="embedPlayer"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
          allow="autoplay *; encrypted-media *; clipboard-write"
          style={{
            border: "0px",
            borderRadius: "12px",
            width: "100%",
            height: "175px",
            maxWidth: "660px",
          }}
        ></iframe>
      </div>
    </main>
  );
}
