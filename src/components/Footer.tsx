"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github } from "@/components/icons";

import Logo from "./Logo";
import FooterCol from "./FooterCol";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Vercel Logo SVG
function VercelLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 65" fill="none" className={className}>
      <path
        d="M37.5274 0L75.0548 65H0L37.5274 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-background border-t p-12 pb-0">
      <div className="container-narrow py-12 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-start lg:items-center">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft font-sans">
              A free, open-source soundboard for everyone who lives in voice chat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm sm:grid-cols-2 sm:gap-x-16">
            <FooterCol title="Product" links={[["Our Story", "/story"], ["Pricing", "/pricing"], ["Press", "/press"], ["Download", "/download"]]} />
            <FooterCol title="Project" links={[["GitHub", "https://github.com"]]} />
          </div>
        </div>
        <div className="mt-12 sm:mt-16 flex flex-col items-start justify-between gap-3 border-t border-border text-xs text-ink-soft sm:flex-row sm:items-center">
          <span className="font-mono">
            © {year} AudioPad · GNU GPLv3 LICENSE
          </span>
          
          <div className="flex items-center gap-4">
            <a
              href="https://vercel.com?utm_source=audiopad&utm_campaign=oss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <span className="text-sm font-sans">Hosted by</span>
              <VercelLogo className="h-5 w-5" />
            </a>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="font-sans cursor-help">
                    Made by{" "}
                    <del style={{ textDecorationColor: "red" }}>people</del>{" "}
                    guy who {"\u{1FAF6}"} you silently.
                  </span>
                </TooltipTrigger>

                <TooltipContent side="top">
                  <p>Yeah... I can't scream it. {"\u{1F92B}"}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </footer>
  );
}
