"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Download,
  CatIcon as Github,
  Keyboard,
  Gauge,
  FileAudio,
  Mic,
  Gamepad2,
  Feather,
  ShieldCheck,
  Check,
  Minus,
} from "lucide-react";

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2"  y="10" width="2.4" height="4"  rx="1.2" fill="currentColor" />
        <rect x="6"  y="7"  width="2.4" height="10" rx="1.2" fill="currentColor" />
        <rect x="10" y="3"  width="2.4" height="18" rx="1.2" fill="currentColor" />
        <rect x="14" y="7"  width="2.4" height="10" rx="1.2" fill="currentColor" />
        <rect x="18" y="10" width="2.4" height="4"  rx="1.2" fill="currentColor" />
      </svg>
      <span className="font-serif text-[1.35rem] leading-none tracking-tight">Echo</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Compare />
        <OpenSource />
        <Faq />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Nav ---------------- */

function Nav() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it works" },
    { href: "#compare", label: "Compare" },
    { href: "#faq", label: "FAQ" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur">
      <div className="container-narrow flex h-16 items-center justify-between">
        <Link href="/" className="text-foreground"><Logo /></Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-foreground font-sans"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com"
            className="hidden items-center gap-2 rounded-md px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-secondary hover:text-foreground sm:inline-flex font-sans"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="#download"
            className="inline-flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
          >
            Download
          </a>
        </div>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/70 mb-6 sm:mb-8">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-narrow pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink-soft font-mono">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            <span>v1.0 — Free &amp; open source</span>
          </span>
          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            A soundboard <em className="italic text-moss">that lives</em> in your microphone.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg font-sans">
            Echo plays audio files through your mic — in Discord, Zoom, Teams, OBS, or any game.
            Free, lightweight, and built to stay out of your way.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="#download"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto font-sans"
            >
              <Download className="h-4 w-4" />
              Download for Windows
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://github.com"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 sm:w-auto font-sans"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
          <p className="mt-5 font-mono text-xs text-ink-soft">
            Windows 10/11 · macOS 12+ · Linux · ~14 MB
          </p>
        </div>

        {/* Product mockup */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
          <div className="absolute -inset-x-8 -bottom-8 -top-4 -z-10 rounded-3xl bg-surface-2/60 blur-2xl" />
          <div className="hairline overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_-40px_rgba(60,50,30,0.35)]">
            <div className="aspect-[1600/1104] bg-surface-2 flex items-center justify-center">
              <span className="text-ink-soft font-mono text-sm">Add app-mockup.jpg to public directory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Logo strip ---------------- */

function LogoStrip() {
  const items = ["Discord", "Zoom", "Microsoft Teams", "OBS Studio", "Steam", "Slack"];
  return (
    <section className="border-b border-border/70 bg-surface/50 mb-6 sm:mb-8">
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

/* ---------------- Features ---------------- */

const features = [
  { icon: Mic, title: "Plays through your mic", body: "Routes any sound into your microphone input so others hear it as if it came from you." },
  { icon: FileAudio, title: "Bring your own audio", body: "Drop in MP3, WAV, OGG, FLAC, or M4A. No conversions, no upload, no account." },
  { icon: Keyboard, title: "Global hotkeys", body: "Trigger any sound from anywhere — even mid-game. Custom bindings, no conflicts." },
  { icon: Gauge, title: "Low latency", body: "Engineered for sub-20ms playback. Cues land when you press the key, not a beat later." },
  { icon: Feather, title: "Lightweight", body: "Under 15 MB. A few MB of RAM at rest. Doesn't fight your CPU for your game." },
  { icon: Gamepad2, title: "Works everywhere", body: "Discord, Zoom, Teams, Slack, OBS, Steam — anywhere that reads a microphone." },
  { icon: ShieldCheck, title: "Private by design", body: "Runs entirely on your machine. No telemetry, no accounts, no cloud anything." },
  { icon: Github, title: "Open source", body: "Read the code, file an issue, send a patch. MIT licensed, forever free." },
];

function Features() {
  return (
    <section id="features" className="border-b border-border/70 mb-6 sm:mb-8">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="Features"
          title="Everything a soundboard should be."
          description="Echo focuses on the parts that matter: pressing a key and hearing the right sound, instantly, in the right place."
        />
        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-5 sm:p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-moss">
                <f.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-4 sm:mt-5 text-[15px] font-medium tracking-tight text-foreground font-sans">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft font-sans">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How it works ---------------- */

const steps = [
  { n: "01", title: "Install Echo", body: "Download for your OS and run the installer. It sets up a virtual audio device for you — no manual config." },
  { n: "02", title: "Point your app at Echo", body: "In Discord, Zoom, OBS, or your game, select Echo as the microphone input." },
  { n: "03", title: "Drop in your sounds", body: "Drag audio files into the library, organize into boards, and assign hotkeys." },
  { n: "04", title: "Press a key, hear it land", body: "Trigger sounds globally with low latency. Your voice still works — Echo mixes in on top." },
];

function HowItWorks() {
  return (
    <section id="how" className="border-b border-border/70 bg-surface/40 mb-6 sm:mb-8">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Four steps. About two minutes."
          description="No drivers to wrestle with. No tutorials to watch. Echo is designed so the setup disappears."
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

/* ---------------- Compare ---------------- */

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
    <section id="compare" className="border-b border-border/70 mb-6 sm:mb-8">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="Why Echo"
          title="A free alternative that isn't a downgrade."
          description="Paid soundboards exist. Echo matches them on the things that matter — and removes the things that don't."
        />
        <div className="mt-10 sm:mt-12 overflow-hidden rounded-xl border border-border bg-background">
          <div className="grid grid-cols-3 border-b border-border bg-surface/60 px-4 sm:px-6 py-4 text-xs uppercase tracking-[0.14em] text-ink-soft font-sans">
            <div>Capability</div>
            <div className="text-center font-semibold text-foreground">Echo</div>
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

function Cell({ value, positive = false }: { value: boolean | string; positive?: boolean }) {
  if (typeof value === "string") return <span className="font-sans">{value}</span>;
  if (value)
    return (
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${positive ? "bg-accent text-moss" : "bg-secondary text-foreground"}`}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-ink-soft/60">
      <Minus className="h-3.5 w-3.5" />
    </span>
  );
}

/* ---------------- Open source ---------------- */

function OpenSource() {
  return (
    <section className="border-b border-border/70 bg-surface/40 mb-6 sm:mb-8">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-moss">Open source</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Built in the open, by people who use it.
            </h2>
            <p className="mt-4 sm:mt-5 max-w-md text-base leading-relaxed text-ink-soft font-sans">
              Echo is MIT licensed. Read the source, audit what it does on your machine, file an
              issue, or send a pull request. No paywalls hiding behind a contributor agreement.
            </p>
            <div className="mt-6 sm:mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
              >
                <Github className="h-4 w-4" /> Star on GitHub
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-foreground font-sans"
              >
                Read the docs <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hairline overflow-hidden rounded-xl bg-background font-mono text-[12.5px] leading-relaxed shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.10_30)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.10_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.80_0.08_145)]" />
              <span className="ml-2 text-xs text-ink-soft">~/echo · main</span>
            </div>
            <pre className="overflow-x-auto p-4 sm:p-5 text-foreground">
{`$ git clone https://github.com/echo-app/echo
$ cd echo && pnpm install
$ pnpm dev

  echo ▸ audio engine ready    `}<span className="text-moss">12ms</span>{`
  echo ▸ virtual mic attached
  echo ▸ hotkeys bound         `}<span className="text-moss">8 sounds</span>{`
  echo ▸ listening...

MIT License · 14.2 kLOC · 100% TypeScript
`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */

const faqs = [
  { q: "Is Echo really free?", a: "Yes. Free to download, free to use, free to fork. No paid tier, no premium sounds, no upsells. The project is funded by people who like it." },
  { q: "Does it work on macOS and Linux?", a: "Yes. Echo ships native builds for Windows 10/11, macOS 12+, and major Linux distributions (deb, rpm, AppImage)." },
  { q: "Will my voice still come through?", a: "Yes. Echo mixes sounds on top of your real microphone, so people hear both. You can toggle 'sound only' for moments when you want just the clip." },
  { q: "Does it require admin rights?", a: "Only the first install — to register the virtual audio device. Day-to-day, Echo runs as a normal user-space app." },
  { q: "What audio formats are supported?", a: "MP3, WAV, OGG, FLAC, and M4A out of the box. Files are read directly — no re-encoding, no quality loss." },
  { q: "Does it phone home?", a: "No. Echo doesn't send analytics, telemetry, or crash reports unless you explicitly opt in. The network code is small and easy to audit." },
];

function Faq() {
  return (
    <section id="faq" className="border-b border-border/70 mb-6 sm:mb-8">
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

/* ---------------- Download ---------------- */

function DownloadCTA() {
  const builds = [
    { os: "Windows", detail: ".exe · 14 MB · Win 10/11" },
    { os: "macOS", detail: ".dmg · 16 MB · Universal" },
    { os: "Linux", detail: ".deb · .rpm · AppImage" },
  ];
  return (
    <section id="download" className="border-b border-border/70 bg-surface/40 mb-6 sm:mb-8">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-moss">Download</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            Get Echo. It takes a minute.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft font-sans">
            Pick your platform. The download is signed, notarized, and verifiable against the
            checksums in the GitHub release.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          {builds.map((b) => (
            <a
              key={b.os}
              href="#"
              className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-background p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-moss/40 hover:bg-surface"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-moss">
                <Download className="h-4 w-4" strokeWidth={1.8} />
              </div>
              <div>
                <div className="text-[15px] font-medium text-foreground font-sans">{b.os}</div>
                <div className="mt-1 font-mono text-xs text-ink-soft">{b.detail}</div>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-moss font-sans">
                Download <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-7 sm:mt-8 text-center font-mono text-xs text-ink-soft">
          Prefer to build from source?{" "}
          <a href="https://github.com" className="text-foreground underline-offset-4 hover:underline">
            github.com/echo-app/echo
          </a>
        </p>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-background mt-2">
      <div className="container-narrow py-10 sm:py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-3 text-sm leading-relaxed text-ink-soft font-sans">
              A free, open-source soundboard for everyone who lives in voice chat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3 sm:gap-x-12">
            <FooterCol title="Product" links={[["Features", "#features"], ["How it works", "#how"], ["Download", "#download"]]} />
            <FooterCol title="Project" links={[["GitHub", "https://github.com"], ["Changelog", "#"], ["Roadmap", "#"]]} />
            <FooterCol title="Help" links={[["FAQ", "#faq"], ["Docs", "#"], ["Contact", "#"]]} />
          </div>
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-5 sm:pt-6 text-xs text-ink-soft sm:flex-row sm:items-center">
          <span className="font-mono">© {year} Echo · MIT License</span>
          <span className="font-sans">Made by people who got tired of paying for a soundboard.</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.14em] text-ink-soft">{title}</div>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="text-foreground/80 transition-colors hover:text-foreground font-sans">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Shared ---------------- */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-moss">{eyebrow}</span>
      <h2 className="mt-3 font-serif text-3xl leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-soft font-sans">
          {description}
        </p>
      ) : null}
    </div>
  );
}
