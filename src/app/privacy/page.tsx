import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  MicOff, 
  Keyboard, 
  CloudOff, 
  CheckCircle2,
  Lock
} from "lucide-react";
import { SITE_URL } from "@/lib/changelog";
import { Github } from "@/components/icons";

export const metadata: Metadata = {
  title: "Privacy Policy — AudioPad",
  description:
    "AudioPad is engineered with a 100% local, zero-telemetry architecture. We never record your microphone, log your keystrokes, or transmit your audio.",
  keywords: [
    "AudioPad privacy policy",
    "soundboard privacy",
    "local soundboard no tracking",
    "open source soundboard security",
    "zero telemetry soundboard",
  ],
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    title: "Privacy Policy — AudioPad",
    description:
      "AudioPad is engineered with a 100% local, zero-telemetry architecture. We never record your microphone, log your keystrokes, or transmit your audio.",
    images: ["/audiopad-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy — AudioPad",
    description:
      "AudioPad is engineered with a 100% local, zero-telemetry architecture. We never record your microphone, log your keystrokes, or transmit your audio.",
    images: ["/audiopad-og.png"],
  },
};

const principles = [
  {
    icon: MicOff,
    title: "Zero Audio Recording",
    description:
      "We never record, save, eavesdrop on, or transmit any audio from your microphone or output devices. All audio routing occurs entirely within your local operating system audio subsystem.",
  },
  {
    icon: Keyboard,
    title: "No Keystroke Logging",
    description:
      "AudioPad registers global shortcuts strictly to trigger sounds you have assigned. Keys are never recorded, logged to disk, or transmitted over the internet.",
  },
  {
    icon: CloudOff,
    title: "No Cloud Storage or Accounts",
    description:
      "Your sound library, keybindings, and settings are saved locally on your computer in plain configuration files. We do not maintain user databases or require registration.",
  },
  {
    icon: Lock,
    title: "Zero Desktop Telemetry",
    description:
      "The AudioPad desktop app does not contain analytics SDKs, advertising trackers, background telemetry, or user profiling tools.",
  },
];

export default function PrivacyPage() {
  const lastUpdated = "October 7, 2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AudioPad Privacy Policy",
    description:
      "AudioPad is engineered with a 100% local, zero-telemetry architecture.",
    url: `${SITE_URL}/privacy`,
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
              <ShieldCheck className="h-3.5 w-3.5 text-moss" />
              Privacy Policy & Security
            </span>
            <h1 className="mt-4 font-serif text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              Privacy by Design.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-ink-soft font-sans leading-relaxed">
              AudioPad is 100% free, open-source software built on a local-first philosophy.
              Your microphone audio, sound clips, and shortcuts never leave your machine.
            </p>
            <p className="mt-2 font-mono text-xs text-ink-soft">
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Core Guarantees Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {principles.map((item) => {
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

          {/* Detailed Policy Sections */}
          <div className="mt-16 space-y-12 border-t border-border/80 pt-12">
            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                1. Microphone and Audio Processing
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                AudioPad requires access to your system&apos;s audio devices and microphone to mix soundboard playback into your microphone feed. All DSP (digital signal processing), mixing, resampling, and output routing happen exclusively in memory on your local CPU.
              </p>
              <ul className="space-y-2 text-sm text-ink-soft font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                  <span>No microphone audio or voice conversation is ever recorded, written to disk, or streamed externally.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                  <span>Audio streams pass directly to your designated local output driver (or virtual audio cable) without network transmission.</span>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                2. Hotkeys and Input Capture
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                To trigger sounds while gaming or using other applications, AudioPad listens for global key combination shortcuts registered in the operating system.
              </p>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                AudioPad is <strong>not</strong> a keylogger. It only tests incoming key events against your explicitly configured soundboard trigger bindings. Unmatched keystrokes are ignored immediately and discarded. No record of typing history, passwords, or communications is saved.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                3. Your Sound Files and Data Storage
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                Any sound files (WAV, MP3, FLAC, OGG) you import into AudioPad remain on your local hard drive. AudioPad stores sound paths and button profiles in a local configuration file in your user application data directory. We do not sync or upload your soundboard packs to any server.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                4. Website Hosting and Anonymous Logs
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                This website (<code className="text-xs font-mono bg-surface px-1.5 py-0.5 rounded border">audiopad.vercel.app</code>) is hosted on Vercel. Like almost all web servers, standard access logs (such as IP address, browser user-agent, and requested page path) are processed by Vercel to serve web pages securely and prevent abuse.
              </p>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                We do not use advertising tracking networks, behavioral cookies, or invasive user tracking scripts. Software downloads are hosted directly through GitHub Releases.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                5. Open Source Code Verification
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                Because AudioPad is licensed under the <strong>GNU General Public License v3 (GNU GPLv3)</strong>, the complete source code for both the desktop application and this website is public. Anyone can independently inspect, audit, compile, and verify our privacy and security claims directly on GitHub.
              </p>
              <div className="pt-2">
                <a
                  href="https://github.com/audiopadapp/audiopad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-xs font-medium text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Inspect Desktop App on GitHub
                </a>
              </div>
            </section>

            {/* Section 6 */}
            <section className="space-y-4">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                6. Contact and Inquiries
              </h2>
              <p className="text-sm sm:text-base text-ink-soft leading-relaxed font-sans">
                If you have questions about AudioPad&apos;s privacy design, security, or data handling, please open an issue or discussion on our GitHub repository.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://github.com/audiopadapp/audiopad/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  Open a GitHub Issue
                </a>
                <span className="text-border">·</span>
                <Link
                  href="/terms"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  View Terms of Use
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
