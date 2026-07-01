'use client';
import Link from "next/link";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Github, Windows, Linux } from "@/components/icons";

type OS = 'windows' | 'linux' | 'unknown';

function getOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = window.navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('linux')) return 'linux';
  return 'unknown';
}

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [os, setOs] = useState<OS>('unknown');

  useEffect(() => {
    setOs(getOS());
  }, []);

  const links = [
    { href: "/", label: "Home" },
    { href: "/story", label: "Our Story" },
    { href: "/pricing", label: "Pricing" },
    { href: "/download", label: "Download" },
  ];

  const osInfo = {
    windows: { icon: Windows, label: "Download for Windows" },
    linux: { icon: Linux, label: "Download for Linux" },
    unknown: { icon: null, label: "Download" },
  };

  const currentOsInfo = osInfo[os];

  return (
    <header className="sticky top-3 z-40">
      <div className="container-narrow pb-4">
        {/* Desktop nav (centered rounded container) */}
        <div className="hidden md:flex h-14 items-center justify-between rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm px-4 shadow-sm">
          <Link href="/" className="text-foreground"><Logo /></Link>
          
          <nav className="flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-ink-soft transition-colors hover:text-foreground font-sans"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-2">
            <a
              href="https://github.com"
              className="flex items-center gap-2 rounded-md px-3 py-1.5 text-sm text-ink-soft transition-colors hover:bg-secondary hover:text-foreground font-sans"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <Link
              href="/download"
              className="flex items-center gap-1.5 rounded-md bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
            >
              {currentOsInfo.icon && <currentOsInfo.icon className="h-4 w-4" />}
              {currentOsInfo.label}
            </Link>
          </div>
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex h-14 items-center justify-between rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm px-4 shadow-sm">
          <Link href="/" className="text-foreground"><Logo /></Link>
          
          <button
            className="flex items-center justify-center rounded-md px-2 py-1.5 text-ink-soft hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-3 rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm shadow-sm">
            <div className="py-4 px-4 flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="py-2 text-sm text-ink-soft transition-colors hover:text-foreground font-sans"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://github.com"
                className="py-2 flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-foreground font-sans"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <Link
                href="/download"
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
                onClick={() => setIsMenuOpen(false)}
              >
                {currentOsInfo.icon && <currentOsInfo.icon className="h-4 w-4" />}
                {currentOsInfo.label}
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
