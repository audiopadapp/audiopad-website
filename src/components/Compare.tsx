import { Check, Minus } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Cell from "./Cell"; // Assuming Cell is also extracted

function Compare() {
  const rows: { label: string; echo: boolean | string; paid: boolean | string }[] = [
    { label: "Price", echo: "Free, forever", paid: "$4.99+ one-time" },
    { label: "Open source", echo: true, paid: false },
    { label: "Unlimited sounds", echo: true, paid: false },
    { label: "Global hotkeys", echo: true, paid: true },
    { label: "Low-latency playback", echo: true, paid: true },
    { label: "Telemetry / tracking", echo: false, paid: true },
    { label: "No watermark or nag", echo: true, paid: false },
    { label: "Community-driven", echo: true, paid: false },
  ];

  return (
    <section id="compare" className=" mb-20 sm:mb-24 md:mb-28">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="Why AudioPad"
          title="A free alternative that isn't a downgrade."
          description="Paid soundboards exist. AudioPad matches them on the things that matter — and removes the things that don't."
        />
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-xl border border-border bg-background">
          <div className="grid grid-cols-3 border-b border-border bg-surface/60 px-4 sm:px-6 py-4 text-xs uppercase tracking-[0.14em] text-ink-soft font-sans">
            <div>Capability</div>
            <div className="text-center font-semibold text-foreground">AudioPad</div>
            <div className="text-center">Paid alternatives</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.label}
              className={`grid grid-cols-3 items-center px-4 sm:px-6 py-3 sm:py-4 text-sm ${i !== rows.length - 1 ? "border-b border-border/70" : ""}`}
            >
              <div className="text-foreground font-sans">{r.label}</div>
              <div className="flex justify-center text-foreground">
                <Cell value={r.echo} positive />
              </div>
              <div className="flex justify-center text-ink-soft">
                <Cell value={r.paid} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Compare;
