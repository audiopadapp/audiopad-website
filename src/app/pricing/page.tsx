import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CheckCircle2, Download, Heart } from "lucide-react";
import { Github } from "@/components/icons";


export const metadata: Metadata = {
  title: "Pricing",
  description: "AudioPad is 100% free forever. No subscriptions, no paywalls, no tiers. Just a professional-grade soundboard.",
};

const allFeatures = [
  {
    category: "Core Functionality",
    features: [
      "Plays audio directly through your microphone input",
      "Unlimited sound files with no restrictions",
      "Custom global hotkeys for instant playback",
      "Sub-20ms low latency performance",
      "Native support for Windows, macOS, and Linux"
    ]
  },
  {
    category: "Privacy & Security",
    features: [
      "No telemetry or data collection",
      "No account required",
      "100% offline operation",
      "No internet connection needed"
    ]
  },
  {
    category: "Open Source & Community",
    features: [
      "Complete source code available on GitHub",
      "MIT license — use for any purpose",
      "Community-driven development",
      "Accepting contributions"
    ]
  },
  {
    category: "Updates & Support",
    features: [
      "Forever free updates",
      "Public issue tracker",
      "Community support forums",
      "Full documentation"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-3">
      <Nav />
      <main className="relative mt-24 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[500px] rounded-full bg-moss/10 blur-3xl -z-10" />

        <div className="container-narrow relative z-10">
          <div className="mx-auto max-w-5xl">
            {/* Hero Section */}
            <section className="mb-16 sm:mb-20 text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-soft font-mono mb-6">
                <Heart className="h-3 w-3 text-moss" />
                <span>Pricing</span>
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight tracking-tight text-foreground mb-6">
                $0.00
              </h1>
              <p className="text-xl sm:text-2xl text-ink-soft font-sans max-w-3xl mx-auto mb-8">
                Per month. Per year. Forever. Always. Lifetime. Free.
              </p>
              <p className="text-lg text-ink-soft font-sans max-w-2xl mx-auto">
                No subscriptions. No paywalls. No tiers. No hidden fees. Just a professional-grade soundboard, built for the community.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/download" 
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-8 py-4 text-base font-medium text-background transition-opacity hover:opacity-90 font-sans"
                >
                  <Download className="h-5 w-5" />
                  Download Now
                </a>
                <a 
                  href="https://github.com" 
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
                >
                  <Github className="h-5 w-5" />
                  View Source
                </a>
              </div>
            </section>

            {/* Features Grid */}
            <section className="mb-16 sm:mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {allFeatures.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="rounded-2xl border border-border bg-background p-6 sm:p-8">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-6">
                      {section.category}
                    </h3>
                    <ul className="space-y-4">
                      {section.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle2 className="h-5 w-5 text-moss flex-shrink-0 mt-0.5" />
                          <span className="text-sm sm:text-base text-ink-soft font-sans">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ / CTA */}
            <section className="mb-16">
              <div className="rounded-2xl border border-border bg-gradient-to-br from-moss/10 to-accent p-8 sm:p-12 text-center">
                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Still have questions?
                </h2>
                <p className="text-lg text-ink-soft font-sans max-w-2xl mx-auto mb-8">
                  Check out our story to learn why we built AudioPad, or dive into the source code to see exactly how it works.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/story" 
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface font-sans"
                  >
                    Read Our Story
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
