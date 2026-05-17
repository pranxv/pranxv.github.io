export default function Home() {
  return (
    <main className="mx-auto flex w-full flex-col gap-8 p-4 pb-12 text-step--1 text-fg sm:w-[800px] sm:p-8">
      <header className="flex flex-col">
        <h1>  Kushal Pranav Kumar </h1>
        <p className="italic text-muted"> Software engineer </p>
      </header>

    <p className="sm:max-w-[480px]">  
       I am software engineer tinkering with code, debug points and refactoring production level monoliths to federated subgraphs
    </p>
    <dl className="grid grid-cols-[8rem_1fr] gap-y-6">
      <dt>2024 - Now</dt>
      <dd>
        <p> SDE-2 at <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">American Express</a></p>
        <p> Bengaluru, Karnataka</p>
        <p className="text-muted"> Building graphql subgraphs from exisitng monographs, working across consumer teams to handover </p>
      </dd>
      <dt>2023 - 2024 </dt>
      <dd>
        <p> SDE-2 (SRE + Automations - identity) at <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">American Express</a></p>
        <p> Bengaluru, Karnataka</p>
        <p className="text-muted"> Building graphql subgraphs from exisitng monographs, working across consumer teams to handover </p>
      </dd>
      <dt> 2021 - 2023 </dt>
      <dd>
        <p> SDE-1 (SRE + Automations - identity) at <a href="https://www.americanexpress.com" target="_blank" rel="noopener noreferrer" className="underline hover:no-underline">American Express</a></p>
        <p> Bengaluru, Karnataka</p>
        <p className="text-muted"> Building graphql subgraphs from exisitng monographs, working across consumer teams to handover </p>
      </dd>
    </dl>

    <div className="border-t border-muted/40 pt-8 flex flex-col sm:max-w-[480px]">
      <p>
        You can reach me at{" "}
        <a
          href="mailto:kushalpranavkumar@gmail.com"
          className="underline underline-offset-4 hover:no-underline"
        >
          kushalpranavkumar@gmail.com
        </a>
      </p>
    </div>
     <div className="border-t border-muted/40 pt-8 flex flex-col gap-1 sm:max-w-[480px]">
      <a href="https://www.linkedin.com/in/kushalpranav/" target="_blank" rel="noopener noreferrer"> LinkedIn </a>
      <a href="https://www.instagram.com/kushpranavkmr/" target="_blank" rel="noopener noreferrer"> Instagram </a>
      <a href="https://x.com/pranxxv" target="_blank" rel="noopener noreferrer"> X (formally Twitter) </a>
      <a href="https://www.youtube.com/watch?v=StMltAX0mp0" target="_blank" rel="noopener noreferrer">Strava</a>
    </div>
    </main>
  );
}
