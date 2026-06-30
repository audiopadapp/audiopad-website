import SectionHeading from "./SectionHeading";

const steps = [
  { n: "01", title: "Install AudioPad", body: "Download for your OS and run the installer. It sets up a virtual audio device for you — no manual config." },
  { n: "02", title: "Point your app ", body: "In Discord, Zoom, OBS, or your game, select AudioPad as the microphone input." },
  { n: "03", title: "Drop in your sounds", body: "Drag audio files into the library, organize into boards, and assign hotkeys." },
  { n: "04", title: "Press a key", body: "Trigger sounds globally with low latency. Your voice still works — AudioPad mixes in on top." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-surface/50 mb-20 sm:mb-24 md:mb-28 p-6">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps. About two minutes."
          description="No drivers to wrestle with. No tutorials to watch. AudioPad is designed so the setup disappears."
        />
        <ol className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-background p-6 sm:p-7">
              <span className="font-mono text-xs text-moss">{s.n}</span>
              <h3 className="mt-3 sm:mt-4 font-serif text-xl sm:text-2xl tracking-tight text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft font-sans">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
