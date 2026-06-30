'use client';
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Logo from "./Logo";
import { Github, Windows, Apple, Linux } from "@/components/icons";
import { useState, useEffect } from "react";

type OS = 'windows' | 'macos' | 'linux' | 'unknown';

function getOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('mac')) return 'macos';
  if (userAgent.includes('linux')) return 'linux';
  return 'unknown';
}

export default function Hero() {
  const [os, setOs] = useState<OS>('unknown');

  useEffect(() => {
    setOs(getOS());
  }, []);

  const osInfo = {
    windows: { icon: Windows, label: "Download for Windows" },
    macos: { icon: Apple, label: "Download for macOS" },
    linux: { icon: Linux, label: "Download for Linux" },
    unknown: { icon: null, label: "Download" },
  };

  const currentOsInfo = osInfo[os];

  return (
    <section className="relative overflow-hidden border-border/70 mb-20 sm:mb-24 md:mb-28 bg-background">
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
              {currentOsInfo.icon && <currentOsInfo.icon className="h-4 w-4" />}
              {currentOsInfo.label}
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
