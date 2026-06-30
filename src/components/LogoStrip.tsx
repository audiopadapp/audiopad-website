export default function LogoStrip() {
  const items = ["Discord", "Zoom", "Microsoft Teams", "OBS Studio", "Steam", "Slack"];
  return (
    <section className="border-b border-border/70 bg-surface py-16 sm:py-20 md:py-24 mb-20 sm:mb-24 md:mb-28">
      <div className="container-narrow py-10 sm:py-12">
        <p className="text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
          Works with the apps you already use
        </p>
        <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 text-center sm:grid-cols-3 md:grid-cols-6 sm:gap-x-6 sm:gap-y-4">
          {items.map((i) => (
            <span key={i} className="text-sm font-medium tracking-tight text-ink-soft/80 font-sans">
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
