import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";
import { Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Brand Kit",
  description: "Press assets, brand guidelines, logos, and information about AudioPad — the free, open-source soundboard.",
};

const brandColors = [
  {
    name: "Moss",
    hex: "#4ade80",
    rgb: "rgb(74, 222, 128)",
    usage: "Primary brand color, accents",
  },
  {
    name: "Background",
    hex: "#fafaf9",
    rgb: "rgb(250, 250, 249)",
    usage: "Page background",
  },
  {
    name: "Foreground",
    hex: "#1c1917",
    rgb: "rgb(28, 25, 23)",
    usage: "Text, primary elements",
  },
  {
    name: "Surface",
    hex: "#f5f5f4",
    rgb: "rgb(245, 245, 244)",
    usage: "Cards, containers",
  },
];

const downloads = [
  {
    title: "Logo Package",
    description: "All logo formats (SVG, PNG, JPG) in light and dark variants",
    size: "2.5 MB",
  },
  {
    title: "Screenshots",
    description: "Product screenshots in various resolutions",
    size: "8.7 MB",
  },
  {
    title: "Brand Guidelines",
    description: "Complete brand style guide PDF",
    size: "1.2 MB",
  },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-3">
      <Nav />
      <main className="relative mt-24 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[500px] rounded-full bg-moss/10 blur-3xl -z-10" />
        <div className="container-narrow relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground">
              Press &amp; Brand Kit
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft font-sans">
              Everything you need to feature AudioPad in your publication, video, or article.
            </p>
          </div>

          <section className="mt-16 sm:mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
              About AudioPad
            </h2>
            <div className="mt-6 space-y-4 text-base text-ink-soft font-sans">
              <p>
                AudioPad is a free, open-source soundboard that plays audio files through your microphone.
                It works seamlessly with Discord, Zoom, Teams, OBS, Steam, and any application that uses a microphone.
              </p>
              <p>
                Built with privacy in mind, AudioPad runs entirely on your machine with no telemetry, no accounts, and no cloud services.
                It&apos;s lightweight (under 15 MB), fast (sub-20ms latency), and available for Windows, macOS, and Linux.
              </p>
              <p>
                AudioPad was created by people who got tired of paying for soundboard software and wanted a simple, reliable solution.
              </p>
            </div>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
              Logo &amp; Assets
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-surface p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto flex items-center justify-center rounded-xl bg-background">
                    <Logo />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft font-sans">Light background</p>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-foreground p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="h-24 w-24 mx-auto flex items-center justify-center rounded-xl bg-background">
                    <Logo />
                  </div>
                  <p className="mt-4 text-sm text-ink-soft font-sans">Dark background</p>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
              Brand Colors
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {brandColors.map((color) => (
                <div key={color.name} className="rounded-xl border border-border overflow-hidden">
                  <div
                    className="h-24"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="p-4 bg-background">
                    <h3 className="font-medium text-foreground font-sans">{color.name}</h3>
                    <p className="mt-1 font-mono text-xs text-ink-soft">{color.hex}</p>
                    <p className="mt-1 font-mono text-xs text-ink-soft">{color.rgb}</p>
                    <p className="mt-2 text-xs text-ink-soft font-sans">{color.usage}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
              Downloads
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {downloads.map((item) => (
                <a
                  key={item.title}
                  href="#"
                  className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-0.5 hover:border-moss/40 hover:bg-surface"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-accent text-moss">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[15px] font-medium font-sans text-foreground">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm text-ink-soft font-sans">
                      {item.description}
                    </p>
                    <p className="mt-2 font-mono text-xs text-ink-soft">
                      {item.size}
                    </p>
                  </div>
                  <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium font-sans text-moss">
                    Download <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </div>
          </section>

          <section className="mt-16 sm:mt-20">
            <h2 className="font-serif text-2xl sm:text-3xl tracking-tight text-foreground">
              Contact
            </h2>
            <p className="mt-4 text-base text-ink-soft font-sans">
              For press inquiries, please reach out to us on GitHub or through our project repository.
            </p>
            <a
              href="https://github.com"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
            >
              Visit GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
