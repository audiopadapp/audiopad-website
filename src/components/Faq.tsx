import SectionHeading from "./SectionHeading";

const faqs = [
  { q: "Is AudioPad really free?", a: "Yes. Free to download, free to use, free to fork. No paid tier, no premium sounds, no upsells. The project is funded by people who like it." },
  { q: "Does it work on macOS and Linux?", a: "Yes. AudioPad ships native builds for Windows 10/11, macOS 12+, and major Linux distributions (deb, rpm, AppImage)." },
  { q: "Will my voice still come through?", a: "Yes. AudioPad mixes sounds on top of your real microphone, so people hear both. You can toggle 'sound only' for moments when you want just the clip." },
  { q: "Does it require admin rights?", a: "Only the first install — to register the virtual audio device. Day-to-day, AudioPad runs as a normal user-space app." },
  { q: "What audio formats are supported?", a: "MP3, WAV, OGG, FLAC, and M4A out of the box. Files are read directly — no re-encoding, no quality loss." },
  { q: "Does it phone home?", a: "No. AudioPad doesn't send analytics, telemetry, or crash reports unless you explicitly opt in. The network code is small and easy to audit." },
];

export default function Faq() {
  return (
    <section id="faq" className="p-6 bg-surface/40 mb-10">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions, answered plainly."
        />
        <div className="mx-auto mt-10 sm:mt-12 max-w-3xl divide-y divide-border rounded-xl border border-border bg-background">
          {faqs.map((f) => (
            <details key={f.q} className="group px-5 sm:px-6 py-4 sm:py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                <span className="text-[15px] font-medium text-foreground font-sans">{f.q}</span>
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border text-ink-soft transition-transform group-open:rotate-45">
                  <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                    <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft font-sans">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
