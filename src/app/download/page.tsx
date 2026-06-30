import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import DownloadPlatforms from "@/components/DownloadPlatforms";

export const metadata: Metadata = {
  title: "Download",
  description: "Download AudioPad for Windows, macOS, and Linux — free, open-source soundboard.",
};

const versionInfo = {
  version: "v1.0.0",
  releaseDate: "June 2024",
  changelog: "https://github.com/echo-app/echo/releases",
};

export default function DownloadPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-3">
      <Nav />
      <main className="relative mt-24 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[500px] rounded-full bg-moss/10 blur-3xl -z-10" />
        <div className="container-narrow relative z-10">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs text-ink-soft font-mono mb-3">
              <span className="h-1.5 w-1.5 rounded-full bg-moss" />
              {versionInfo.version} — Now available
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground">
              Get AudioPad
            </h1>
            <p className="mt-4 text-base leading-relaxed text-ink-soft font-sans">
              Pick your platform. The download is signed, notarized, and verifiable against the
              checksums in the GitHub release.
            </p>
            <p className="mt-3 font-mono text-xs text-ink-soft">
              Current version: <span className="text-foreground">{versionInfo.version}</span> · {versionInfo.releaseDate}
            </p>
          </div>

          <DownloadPlatforms />

          <div className="mx-auto mt-12 sm:mt-16 max-w-2xl">
            <div className="rounded-xl border border-border bg-surface/60 p-6 sm:p-8">
              <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground">Build from source</h2>
              <p className="mt-3 text-sm text-ink-soft font-sans">
                Prefer to build AudioPad yourself? We provide complete source code and build instructions.
              </p>
              <a
                href="https://github.com"
                className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
              >
                View on GitHub
              </a>
            </div>
          </div>

          <div className="mx-auto mt-10 sm:mt-12 text-center">
            <a
              href={versionInfo.changelog}
              className="font-mono text-xs text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
            >
              View changelog
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
