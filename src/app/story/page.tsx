import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Heart, Gamepad2, Mic as Microphone, DollarSign, Lock, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Story",
  description: "Learn why we built AudioPad — a free, open-source soundboard for everyone tired of paid subscriptions.",
  keywords: ["AudioPad story", "why we built AudioPad", "free soundboard origin"],
  openGraph: {
    type: "website",
    url: "https://audiopad.vercel.app/story",
    title: "Our Story — AudioPad",
    description: "Learn why we built AudioPad — a free, open-source soundboard for everyone tired of paid subscriptions.",
    images: ["/audiopad-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Story — AudioPad",
    description: "Learn why we built AudioPad — a free, open-source soundboard for everyone tired of paid subscriptions.",
    images: ["/audiopad-og.png"],
  },
  alternates: {
    canonical: "/story",
  },
};

export default function StoryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "I was sick of paying for meme sounds.",
    "description": "Learn why we built AudioPad — a free, open-source soundboard for everyone tired of paid subscriptions.",
    "url": "https://audiopad.vercel.app/story",
    "image": "https://audiopad.vercel.app/audiopad-og.png",
    "author": {
      "@type": "Organization",
      "name": "AudioPad Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AudioPad"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background text-foreground font-sans pt-3">
        <Nav />
        <main className="relative mt-12 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[500px] rounded-full bg-moss/10 blur-3xl -z-10" />
          
          <div className="container-narrow relative z-10">
            <div className="mx-auto max-w-3xl">
              <section className="mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-soft font-mono mb-8">
                  <Gamepad2 className="h-3 w-3 text-moss" />
                  <span>True story</span>
                </div>
                
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
                  I was sick of paying for meme sounds.
                </h1>
                
                <article className="space-y-6 text-lg sm:text-xl leading-relaxed text-ink-soft font-sans">
                  <p>
                    Picture this: you&apos;re 3 hours deep into a Valorant queue, your squad is losing 11-3, and you need to drop the perfect <span className="font-bold text-foreground">Mia Khalifa sound bite</span> to turn the mood around.
                  </p>

                  <p className="flex gap-4 items-start">
                    <DollarSign className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                    <span>
                      But every single soundboard app out there is trying to nickel and dime you. <span className="font-bold text-foreground">$9.99 a month?</span> For a glorified MP3 player? Get the hell outta here.
                    </span>
                  </p>

                  <p>
                    And don&apos;t even get me started on the "free" versions that lock half the features behind a paywall, or spam you with ads in the middle of your ranked game.
                  </p>

                  <p className="flex gap-4 items-start">
                    <Lock className="h-8 w-8 text-moss flex-shrink-0 mt-1" />
                    <span>
                      No telemetry. No accounts. No cloud. Just a simple program that does exactly one thing: <span className="font-bold text-foreground">plays sounds through your mic</span>. That&apos;s all we wanted.
                    </span>
                  </p>

                  <p>
                    So we built it. For us. For you. For everyone who just wants to meme on their friends without pulling out a credit card.
                  </p>

                  <div className="my-12 p-6 sm:p-8 rounded-2xl border border-border bg-gradient-to-br from-moss/10 to-accent">
                    <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                      The promise (we won&apos;t break this):
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">Forever free</span>
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">No subscriptions, no paywalls</span>
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">Open source</span>
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">No telemetry, no tracking</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    This isn&apos;t a startup. There&apos;s no monetization plan. There&apos;s no venture capital bros breathing down our neck. Just a couple of nerds who got tired of paying for something that should&apos;ve been free in the first place.
                  </p>

                  <p>
                    Hope it makes you laugh as hard as it makes us.
                  </p>

                  <p className="text-foreground font-bold mt-8">
                    — The AudioPad gang 🎮
                  </p>
                </article>

                <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/download"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-8 py-4 text-base font-medium text-background transition-opacity hover:opacity-90 font-sans"
                  >
                    <Microphone className="h-5 w-5" />
                    Download for Free
                    <ArrowRight className="h-5 w-5" />
                  </a>
                  <a
                    href="https://github.com/audiopadapp/audiopad/"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
                  >
                    <Heart className="h-5 w-5 text-moss" />
                    View on GitHub
                  </a>
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
