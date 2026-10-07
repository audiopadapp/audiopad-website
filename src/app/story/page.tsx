import type { Metadata } from "next";
import { Heart, Mic as Microphone, DollarSign, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import PatreonButton from "@/components/PatreonButton";

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
      <main className="relative overflow-hidden mt-12 pt-8 pb-20 sm:pt-12 sm:pb-24 md:pt-16 md:pb-28">
          <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40" />
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[500px] rounded-full bg-moss/10 blur-3xl -z-10" />
          
          <div className="container-narrow relative z-10">
            <div className="mx-auto max-w-3xl">
              <section className="mb-16">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-soft font-mono mb-8">
                  <Heart className="h-3 w-3 fill-pink-500 text-pink-500" />
                  <span>Straight from the heart</span>
                </div>
                
                <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-foreground mb-8">
                  Bro, I was SICK of paying for meme sounds.
                </h1>
                
                <article className="space-y-6 text-lg sm:text-xl leading-relaxed text-ink-soft font-sans">
                  <p>
                    Let&apos;s be fr fr: you&apos;re 3 hours deep in a sweaty Valorant queue, your squad&apos;s getting clapped 11-3, and you NEED to drop the most unhinged <span className="font-bold text-foreground">Mia Khalifa sound bite</span> to save the vibe. Like, STAT.
                  </p>

                  <p className="flex gap-4 items-start">
                    <DollarSign className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
                    <span>
                      But every soundboard app out here is on some straight-up clown shit. <span className="font-bold text-foreground">$9.99 a month???</span> For what? A fancy MP3 player? Bro, that&apos;s wild. Get TF outta here with that.
                    </span>
                  </p>

                  <p>
                    And don&apos;t even get me started on the &quot;free&quot; ones that lock half the good shit behind a paywall, or spam you with ads mid-ranked game. Like, bro, I&apos;m trying to clutch a 1v5, not listen to a Raid Shadow Legends ad.
                  </p>

                  <p className="flex gap-4 items-start">
                    <Lock className="h-8 w-8 text-moss flex-shrink-0 mt-1" />
                    <span>
                      No weird tracking. No accounts. No sketchy cloud shit. Just a simple ass program that does EXACTLY what you want: <span className="font-bold text-foreground">blasts funny sounds through your mic</span>. That&apos;s literally all we wanted. Is that too much to ask?
                    </span>
                  </p>

                  <p>
                    So we made that shit. For me. For you. For us. For everyone who just wants to be chaotic and meme on their friends without pulling out a credit card. No cap.
                  </p>

                  <div className="my-12 p-6 sm:p-8 rounded-2xl border border-border bg-gradient-to-br from-moss/10 to-accent">
                    <h2 className="font-serif text-2xl sm:text-3xl text-foreground mb-4">
                      The vibe (we&apos;re keeping this 100):
                    </h2>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">Forever free, no cap</span>
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">No subscriptions, no paywalls, no bullshit</span>
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">Open source AF</span>
                      </li>
                      <li className="flex items-center gap-3 text-foreground">
                        <CheckCircle2 className="h-6 w-6 text-moss flex-shrink-0" />
                        <span className="font-bold">No tracking, no spying, no creeps</span>
                      </li>
                    </ul>
                  </div>

                  <p>
                    This ain&apos;t no startup. We don&apos;t got VC bros breathing down our neck. We don&apos;t even have a monetization plan lmaooo. Just a couple of chaotic nerds who got sick of paying for something that should&apos;ve been free from the jump.
                  </p>

                  <p>
                    Hope it makes you laugh until you snort. We know it does for us.
                  </p>

                  <p className="text-foreground font-bold mt-8">
                    — The AudioPad squad 🎮🔥
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
                  <PatreonButton />
                  <a
                    href="https://github.com/audiopadapp/audiopad/"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
                  >
                    <Heart className="h-5 w-5 text-moss" />
                    View on GitHub
                  </a>
                  <a href="https://sellwithboost.com" target="_blank" rel="noopener noreferrer" className="absolute left-[-9999px] top-[-9999px]">
                  {/* className="absolute left-[-9999px] top-[-9999px]" */}
  <img src="https://sellwithboost.com/badge/listing.svg" alt="Listed on Sell With boost" />
</a>
                </div>
              </section>
            </div>
          </div>
        </main>
    </>
  );
}
