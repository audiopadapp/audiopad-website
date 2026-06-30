"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github } from "@/components/icons";

// Re-define Logo and FooterCol if they are not global or imported from another shared file
// For now, I'll assume they are either global or will be handled in page.tsx
// If they are specific to the footer, they should be defined here or imported.

import Logo from "./Logo";
import FooterCol from "./FooterCol";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="bg-background">
      <div className="container-narrow py-12 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-start lg:items-center">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft font-sans">
              A free, open-source soundboard for everyone who lives in voice chat.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm sm:grid-cols-3 sm:gap-x-16">
            <FooterCol title="Product" links={[["Our Story", "/story"], ["Pricing", "/pricing"], ["Press", "/press"], ["Download", "/download"]]} />
            <FooterCol title="Project" links={[["GitHub", "https://github.com"], ["Changelog", "#"], ["Roadmap", "#"]]} />
            <FooterCol title="Help" links={[["FAQ", "#faq"], ["Docs", "#"], ["Contact", "#"]]} />
          </div>
        </div>
        <div className="mt-12 sm:mt-16 flex flex-col items-start justify-between gap-3 border-t border-border text-xs text-ink-soft sm:flex-row sm:items-center">
          <span className="font-mono">
            © {year} AudioPad · MIT License
          </span>

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
    </footer>
  );
}
