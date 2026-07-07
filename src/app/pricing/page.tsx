import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Download } from "lucide-react";
import { Github } from "@/components/icons";
import PatreonButton from "@/components/PatreonButton";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "AudioPad is 100% free forever. No subscriptions, no paywalls, no tiers. Just a professional-grade soundboard.",
  keywords: [
    "free soundboard",
    "no subscription soundboard",
    "AudioPad pricing",
    "forever free soundboard",
  ],
  openGraph: {
    type: "website",
    url: "https://audiopad.vercel.app/pricing",
    title: "AudioPad Pricing — 100% Free Forever",
    description:
      "AudioPad is 100% free forever. No subscriptions, no paywalls, no tiers. Just a professional-grade soundboard.",
    images: ["/audiopad-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AudioPad Pricing — 100% Free Forever",
    description:
      "AudioPad is 100% free forever. No subscriptions, no paywalls, no tiers. Just a professional-grade soundboard.",
    images: ["/audiopad-og.png"],
  },
  alternates: {
    canonical: "/pricing",
  },
};

const refusals = [
  "Sell your data",
  "Make a Pro version",
  "Add advertisements",
  "Ask for your email",
  "Lock features behind payment",
  "Track everything you click",
];

const included = [
  { label: "Unlimited sounds", note: null },
  { label: "Custom hotkeys", note: null },
  { label: "Sub-20ms latency", note: null },
  { label: "No ads", note: null },
  { label: "No account", note: "We don't even know your name." },
  { label: "MIT License", note: null },
];


const receiptLines = [
  { label: "AudioPad", value: "$0" },
  { label: "Unlimited sounds", value: "Included" },
  { label: "Privacy", value: "Included" },
  { label: "Updates", value: "Included" },
  { label: "Ads", value: "Nope" },
  { label: "Taxes", value: "$0" },
];

export default function PricingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "AudioPad",
    applicationCategory: "MultimediaApplication",
    operatingSystem: ["Windows", "Linux"],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "AudioPad is 100% free forever. No subscriptions, no paywalls, no tiers. Just a professional-grade soundboard.",
    url: "https://audiopad.vercel.app/pricing",
    image: "https://audiopad.vercel.app/audiopad-og.png",
    author: {
      "@type": "Organization",
      name: "AudioPad Team",
    },
    publisher: {
      "@type": "Organization",
      name: "AudioPad",
    },
    softwareVersion: "1.0.0",
    license: "https://www.gnu.org/licenses/gpl-3.0.html",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground font-sans pt-3">
        <Nav />
        <main className="relative overflow-hidden mt-12 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[500px] rounded-full bg-moss/10 blur-3xl -z-10" />

          <div className="container-narrow relative z-10">
            <div className="mx-auto max-w-5xl">
              {/* Hero Section */}
              <section className="mb-16 sm:mb-20 text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-soft font-mono mb-6">
                  <span>Pricing, unfortunately</span>
                </span>

                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl leading-tight tracking-tight text-foreground mb-3">
                  FREE<span className="text-moss">*</span>
                </h1>
                <p className="text-sm text-ink-soft font-mono mb-8">
                  *The asterisk means absolutely nothing.
                </p>

                <p className="text-xl sm:text-2xl text-ink-soft font-sans max-w-3xl mx-auto mb-2">
                  Not &ldquo;free for 14 days.&rdquo; Not &ldquo;free with limits.&rdquo;
                </p>
                <p className="text-xl sm:text-2xl text-foreground font-sans font-medium max-w-3xl mx-auto mb-8">
                  Just free.
                </p>

                <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-8 py-4 text-base font-medium text-background transition-opacity hover:opacity-90 font-sans"
                  >
                    <Download className="h-5 w-5" />
                    Grab AudioPad
                  </a>
                  <a
                    href="https://github.com/audiopadapp/audiopad/"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
                  >
                    <Github className="h-5 w-5" />
                    View Source
                  </a>
                </div>

                <p className="mt-6 text-xs text-ink-soft font-mono">
                  Trusted by people who enjoy pressing the airhorn button at exactly the wrong time.
                </p>
              </section>

              {/* Fake pricing card */}
              <section className="mb-16 sm:mb-20">
                <div className="mx-auto max-w-md rounded-2xl border border-border bg-background p-8 text-center">
                  <p className="text-xs font-mono text-ink-soft mb-2 uppercase tracking-wide">
                    Free Plan
                  </p>
                  <p className="font-serif text-4xl font-bold text-foreground mb-6">
                    $0 <span className="text-lg font-sans font-normal text-ink-soft">forever</span>
                  </p>
                  <ul className="space-y-3 text-left mb-6">
                    {included.map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-moss flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-ink-soft font-sans">
                          {item.label}
                          {item.note && (
                            <span className="block text-xs text-ink-soft/70 mt-0.5">
                              {item.note}
                            </span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/download"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
                  >
                    Download
                  </a>
                </div>
                <p className="text-center text-sm text-ink-soft font-mono mt-6">
                  There is no Pro plan. We checked.
                </p>
              </section>

              {/* Things we refuse to do */}
              <section className="mb-16 sm:mb-20">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-8 text-center">
                  Things we refuse to do
                </h2>
                <div className="mx-auto max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {refusals.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl border border-border bg-surface px-5 py-4"
                    >
                      <XCircle className="h-5 w-5 text-ink-soft flex-shrink-0" />
                      <span className="text-sm text-ink-soft font-sans">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Receipt */}
              <section className="mb-16 sm:mb-20">
                <div className="mx-auto max-w-sm rounded-2xl border border-dashed border-border bg-surface p-8 font-mono">
                  <p className="text-center text-xs text-ink-soft uppercase tracking-widest mb-6">
                    Receipt
                  </p>
                  <div className="space-y-2 mb-4">
                    {receiptLines.map((line) => (
                      <div key={line.label} className="flex items-center justify-between text-sm">
                        <span className="text-ink-soft">{line.label}</span>
                        <span className="text-foreground">{line.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-dashed border-border pt-4 flex items-center justify-between">
                    <span className="text-sm font-semibold text-foreground">Total</span>
                    <span className="text-sm font-semibold text-moss">$0</span>
                  </div>
                </div>
              </section>

              {/* FAQ / CTA */}
              <section className="mb-16">
                <div className="rounded-2xl border border-border bg-gradient-to-br from-moss/10 to-accent p-8 sm:p-12 text-center">
                  <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Want to Support Us?
                  </h2>
                  <p className="text-lg text-ink-soft font-sans max-w-2xl mx-auto mb-8">
                    Even though AudioPad is completely free, you can help us keep this project alive by
                    supporting us on Patreon! Every little bit helps, and our accountants might not hate this page quite as much.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                    <PatreonButton />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-foreground mb-4">
                    Still have questions?
                  </h3>
                  <p className="text-base text-ink-soft font-sans max-w-2xl mx-auto mb-6">
                    Check out our story to learn why we built AudioPad, or dive into the source
                    code to see exactly how it works.
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
    </>
  );
}