'use client';
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ArrowRight, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { Windows, Apple, Linux } from "@/components/icons";

type OS = 'windows' | 'macos' | 'linux' | 'unknown';

function getOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  if (userAgent.includes('linux')) return 'linux';
  return 'unknown';
}

export default function DownloadPage() {
  const [os, setOs] = useState<OS>('unknown');

  useEffect(() => {
    setOs(getOS());
  }, []);

  const builds = [
    { os: "Windows", key: "windows" as OS, detail: ".exe · 14 MB · Win 10/11", icon: Windows },
    { os: "macOS", key: "macos" as OS, detail: ".dmg · 16 MB · Universal", icon: Apple },
    { os: "Linux", key: "linux" as OS, detail: ".deb · .rpm · AppImage", icon: Linux },
  ];

  const versionInfo = {
    version: "v1.0.0",
    releaseDate: "June 2024",
    changelog: "https://github.com/echo-app/echo/releases",
  };

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

          <div className="mx-auto mt-10 sm:mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {builds.map((b) => {
              const isHighlighted = b.key === os;
              return (
                <a
                  key={b.os}
                  href="#"
                  className={`group flex flex-col items-start gap-4 rounded-xl border p-5 sm:p-6 transition-all hover:-translate-y-0.5 ${
                    isHighlighted 
                      ? 'border-moss/50 bg-moss/5 shadow-md scale-[1.02] z-10' 
                      : 'border-border bg-background hover:border-moss/40 hover:bg-surface'
                  }`}
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-md ${
                    isHighlighted ? 'bg-moss text-white' : 'bg-accent text-moss'
                  }`}>
                    <b.icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <div className={`text-[15px] font-medium font-sans ${
                      isHighlighted ? 'text-moss' : 'text-foreground'
                    }`}>{b.os}</div>
                    <div className="mt-1 font-mono text-xs text-ink-soft">{b.detail}</div>
                  </div>
                  <span className={`mt-auto inline-flex items-center gap-1 text-sm font-medium font-sans ${
                    isHighlighted ? 'text-moss' : 'text-moss'
                  }`}>
                    Download <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>

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
