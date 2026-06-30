"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Github } from "@/components/icons";

// Re-define Logo and FooterCol if they are not global or imported from another shared file
// For now, I'll assume they are either global or will be handled in page.tsx
// If they are specific to the footer, they should be defined here or imported.

import Logo from "./Logo";
import FooterCol from "./FooterCol";


export default function Footer() {
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
