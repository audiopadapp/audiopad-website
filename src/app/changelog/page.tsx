import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_URL, formatDate, getChangelogEntries } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog — AudioPad Release Notes & Updates",
  description:
    "Explore every update, new feature, and performance improvement for AudioPad — the free, open-source soundboard for Windows and Linux.",
  keywords: [
    "AudioPad changelog",
    "AudioPad updates",
    "AudioPad release notes",
    "soundboard changelog",
    "open source soundboard updates",
    "AudioPad v1.1.0",
    "Discord soundboard updates",
  ],
  alternates: { canonical: `${SITE_URL}/changelog` },
  openGraph: {
    title: "Changelog — AudioPad Release Notes & Updates",
    description:
      "Explore every update, new feature, and performance improvement for AudioPad — the free, open-source soundboard for Windows and Linux.",
    url: `${SITE_URL}/changelog`,
    type: "website",
    images: [
      {
        url: "/audiopad-og.png",
        width: 1200,
        height: 630,
        alt: "AudioPad Changelog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog — AudioPad Release Notes & Updates",
    description:
      "Explore every update, new feature, and performance improvement for AudioPad — the free, open-source soundboard for Windows and Linux.",
    images: ["/audiopad-og.png"],
  },
};

const eyebrow =
  "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground";

export default function ChangelogPage() {
  const entries = getChangelogEntries();
  const latest = entries[0];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${SITE_URL}/changelog`,
        url: `${SITE_URL}/changelog`,
        name: "AudioPad Changelog — Release Notes & Updates",
        description:
          "Every update, improvement and fix to AudioPad, newest first.",
        isPartOf: {
          "@type": "WebSite",
          name: "AudioPad",
          url: SITE_URL,
        },
        publisher: {
          "@type": "Organization",
          name: "AudioPad",
          url: SITE_URL,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_URL}/logo-white.png`,
          },
        },
        mainEntity: {
          "@type": "ItemList",
          itemListElement: entries.map((entry, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_URL}/changelog/${entry.slug}`,
            name: `${entry.version} – ${entry.title}`,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Changelog",
            item: `${SITE_URL}/changelog`,
          },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-12">
          <h1 className="text-5xl font-medium tracking-tight sm:text-5xl">
            Changelog
          </h1>

          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            See what&apos;s new in{" "}
            <span className="font-serif font-normal text-emerald-700 dark:text-emerald-400">
              AudioPad
            </span>
            .
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted/40">
        <div className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24">
          <p className={`${eyebrow} mb-10 text-center`}>All releases</p>

          {entries.length === 0 ? (
            <p className="text-muted-foreground text-center">No updates yet.</p>
          ) : (
            <ol>
              {entries.map((entry, i) => (
                <li key={entry.slug} className="grid md:grid-cols-[10rem_1fr] mb-8">
                  {/* Left: date + version (desktop) */}
                  <div className="hidden pr-8 text-right md:block">
                    <div className="sticky top-24 space-y-2 pt-0.5">
                      <time
                        dateTime={entry.date.toISOString()}
                        className="block text-sm font-medium"
                      >
                        {formatDate(entry.date)}
                      </time>
                      <span className="text-muted-foreground block font-mono text-xs">
                        {entry.version}
                      </span>
                    </div>
                  </div>

                  {/* Right: tracking line + card */}
                  <div className="relative border-l pb-12 pl-6 last:pb-0 md:pl-10">
                    <span
                      className={`ring-muted absolute -left-[6px] top-1.5 size-3 rounded-full ring-4 ${
                        i === 0 ? "bg-emerald-600" : "bg-border"
                      }`}
                    />

                    {/* Meta (mobile) */}
                    <div className="mb-3 flex items-center gap-3 md:hidden">
                      <span className="font-mono text-xs">{entry.version}</span>
                      <time
                        dateTime={entry.date.toISOString()}
                        className="text-muted-foreground text-sm"
                      >
                        {formatDate(entry.date)}
                      </time>
                    </div>

                    <Link
                      href={`/changelog/${entry.slug}`}
                      className="group bg-background hover:border-foreground/30 block overflow-hidden rounded-xl border transition-colors"
                    >
                      {entry.image && (
                        <div className="relative aspect-video overflow-hidden border-b">
                          <Image
                            src={entry.image}
                            alt={entry.imageAlt ?? entry.title}
                            fill
                            priority={i === 0}
                            loading={i === 0 ? "eager" : "lazy"}
                            sizes="(min-width: 768px) 640px, 100vw"
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="space-y-3 p-5 sm:p-6">
                        {(i === 0 || entry.tags.length > 0) && (
                          <div className="flex flex-wrap items-center gap-2">
                            {i === 0 && <Badge>Latest</Badge>}
                            {entry.tags.map((tag) => (
                              <Badge
                                key={tag}
                                variant="outline"
                                className="font-mono text-[10px] font-normal uppercase tracking-wider"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}

                        <h2 className="text-xl font-medium tracking-tight sm:text-2xl">
                          {entry.title}
                        </h2>

                        {entry.description && (
                          <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
                            {entry.description}
                          </p>
                        )}

                        <span className="inline-flex items-center gap-1 pt-1 text-sm font-medium">
                          Read release notes
                          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </Link>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    </main>
  );
}
