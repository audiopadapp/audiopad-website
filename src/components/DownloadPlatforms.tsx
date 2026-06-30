'use client';
import { ArrowRight } from "lucide-react";
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

const builds = [
  { os: "Windows", key: "windows" as OS, detail: ".exe · 14 MB · Win 10/11", icon: Windows },
  { os: "macOS", key: "macos" as OS, detail: ".dmg · 16 MB · Universal", icon: Apple },
  { os: "Linux", key: "linux" as OS, detail: ".deb · .rpm · AppImage", icon: Linux },
];

export default function DownloadPlatforms() {
  const [os, setOs] = useState<OS>('unknown');

  useEffect(() => {
    setOs(getOS());
  }, []);

  return (
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
            <div className={`flex h-12 w-12 items-center justify-center rounded-md ${
              isHighlighted ? 'bg-moss text-white' : 'bg-accent text-moss'
            }`}>
              <b.icon className="h-7 w-7" />
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
  );
}
