import type { Metadata } from "next";
import Link from "next/link";
import { 
  FileText, 
  Scale, 
  Music, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink 
} from "lucide-react";
import { SITE_URL } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Terms of Use & Disclaimer — AudioPad",
  description:
    "Terms of use, GNU General Public License v3 terms, user audio responsibility, and liability disclaimers for the AudioPad software and website.",
  keywords: [
    "AudioPad terms of use",
    "AudioPad license",
    "GNU GPLv3 AudioPad",
    "soundboard terms",
    "AudioPad disclaimer",
  ],
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terms`,
    title: "Terms of Use & Disclaimer — AudioPad",
    description:
      "Terms of use, GNU General Public License v3 terms, user audio responsibility, and liability disclaimers for the AudioPad software and website.",
    images: ["/audiopad-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use & Disclaimer — AudioPad",
    description:
      "Terms of use, GNU General Public License v3 terms, user audio responsibility, and liability disclaimers for the AudioPad software and website.",
    images: ["/audiopad-og.png"],
  },
};

const highlights = [
  {
    icon: Scale,
    title: "GNU GPLv3 Open Source",
    description:
      "AudioPad is free software released under the GNU General Public License v3. You are free to run, study, modify, and redistribute the program.",
  },
  {
    icon: Music,
    title: "User-Provided Audio",
    description:
      "AudioPad is a local playback tool. We do not provide, host, or distribute sound files. You are responsible for ensuring you have rights to the audio you play.",
  },
  {
    icon: ShieldAlert,
    title: "Provided As-Is",
    description:
      "The software is provided without warranties of any kind. You are responsible for configuring your audio devices and system routing.",
  },
  {
    icon: FileText,
    title: "Independent Project",
    description:
      "AudioPad is an independent open-source project and is not affiliated with or endorsed by Discord, Microsoft, or game developers.",
  },
];

export default function TermsPage() {
  const lastUpdated = "October 7, 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AudioPad Terms of Use & Disclaimer",
    description:
      "Terms of use, GNU GPLv3 license terms, and disclaimers for AudioPad.",
    url: `${SITE_URL}/terms`,
    publisher: {
      "@type": "Organization",
      name: "AudioPad",
      url: SITE_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative overflow-hidden mt-12 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />

        <div className="container-narrow max-w-4xl">
          {/* Header */}
          <div className="text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] text-ink-soft">
              <Scale className="h-3.5 w-3.5 text-moss" />
              Legal Terms & Disclaimers
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Terms of Use & License.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
              Clear, straightforward terms explaining your rights under the GNU GPLv3 license,
              user audio responsibilities, and system safety disclaimers.
            </p>
            <p className="mt-2 font-mono text-xs text-ink-soft">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-background/95 p-6 shadow-2xs transition-colors hover:border-foreground/30"
                >
                  <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface">
                    <Icon className="size-5 text-moss" />
                  </div>
                  <h2 className="mt-4 font-serif text-lg font-bold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Detailed Legal Sections */}
          <div className="mt-16 space-y-12 border-t border-border/80 pt-12">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                1. Open Source License (GNU GPLv3)
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                The AudioPad software is free, open-source software licensed under the <strong>GNU General Public License version 3 (GPLv3)</strong> as published by the Free Software Foundation.
              </p>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                Under this license, you have the freedom to run the program for any purpose, study how it works, modify the source code, and redistribute copies of either the original or your modified versions, provided that any derivative works are also distributed under the terms of the GNU GPLv3 with corresponding source code made available.
              </p>
              <div className="pt-2">
                <a
                  href="https://www.gnu.org/licenses/gpl-3.0.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  Read full GNU GPLv3 License text
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                2. User Responsibility for Audio Content
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                AudioPad is an audio player and signal routing utility. AudioPad does <strong>not</strong> include, host, scrape, provide, or sell any sound files, music, sound effects, or voice recordings.
              </p>
              <ul className="space-y-2 text-sm text-ink-soft font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                  <span>You are solely responsible for all audio files you import, trigger, play, or broadcast through AudioPad.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                  <span>You agree not to use AudioPad to broadcast copyrighted music or audio without proper authorization, or to violate the terms of service of any voice platform (such as Discord, Twitch, YouTube, or Steam).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                  <span>The developers of AudioPad assume no liability for intellectual property infringement, community bans, or damages resulting from audio broadcasted by users.</span>
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                3. Disclaimer of Warranties
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                As explicitly stated in Section 15 and 16 of the GNU General Public License v3:
              </p>
              <div className="rounded-xl border border-border bg-surface/50 p-4 font-mono text-xs text-ink-soft leading-relaxed">
                THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.
              </div>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                4. Audio Hardware, Drivers, and Virtual Cables
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                AudioPad interacts with your operating system&apos;s audio endpoints, sound cards, and third-party virtual audio cable drivers (such as VB-Audio Virtual Cable or PipeWire/PulseAudio sinks).
              </p>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                While AudioPad is designed to be lightweight and safe, you are responsible for selecting the correct input and output devices. The AudioPad contributors cannot be held liable for misconfigured system volume levels, audio feedback loops, driver conflicts, or system audio interruptions.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                5. Third-Party Trademarks and Non-Affiliation
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                All product names, logos, brands, and registered trademarks referenced on this website or in the application (including but not limited to <em>Discord</em>, <em>Steam</em>, <em>Windows</em>, <em>Linux</em>, <em>VB-Cable</em>, <em>Twitch</em>, and <em>OBS</em>) are the property of their respective owners.
              </p>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                Reference to these trademarks is solely for interoperability description, compatibility identification, and educational purposes. AudioPad is an independent open-source project and is not affiliated with, endorsed by, sponsored by, or associated with any of these trademark holders.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                6. Source Code and Contribution Agreement
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                Any code, bug reports, pull requests, documentation, or suggestions submitted to the AudioPad repositories are made available under the GNU General Public License v3 unless explicitly specified otherwise.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  View Privacy Policy
                </Link>
                <span className="text-border">·</span>
                <Link
                  href="/contribute"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  Contributor Hub
                </Link>
                <span className="text-border">·</span>
                <a
                  href="https://github.com/audiopadapp/audiopad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  AudioPad GitHub Repository
                </a>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
