import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SITE_URL, formatDate, getChangelogEntries } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Every update, improvement and fix to AudioPad, newest first.",
  alternates: { canonical: `${SITE_URL}/changelog` },
  openGraph: {
    title: "Changelog",
    description: "Every update, improvement and fix to AudioPad, newest first.",
    url: `${SITE_URL}/changelog`,
    type: "website",
  },
};

const eyebrow =
  "font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground";

export default function ChangelogPage() {
  const entries = getChangelogEntries();
  const latest = entries[0];

  return (
    <main>
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto w-full max-w-5xl px-4 py-20 text-center sm:py-28">
          <span className="bg-background text-muted-foreground inline-flex items-center gap-2 rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-emerald-600" />
            {latest ? `${latest.version} · Latest release` : "Changelog"}
          </span>

          <h1 className="mx-auto mt-6 max-w-2xl text-4xl font-medium tracking-tighter sm:text-6xl">
            What&apos;s new in{" "}
            <em className="font-serif font-normal italic text-emerald-700 dark:text-emerald-400">
              AudioPad
            </em>
          </h1>

          <p className="text-muted-foreground mx-auto mt-5 max-w-md leading-relaxed">
            Every update, improvement and fix to the free, open-source
            soundboard. Newest first.
          </p>

          {latest && (
            <dl className="bg-background mx-auto mt-12 grid max-w-2xl divide-y rounded-xl border text-left sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <div className="px-5 py-4">
                <dt className={eyebrow}>Latest</dt>
                <dd className="mt-2 font-mono text-base font-medium">
                  {latest.version}
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className={eyebrow}>Updated</dt>
                <dd className="mt-2 text-base font-medium">
                  {formatDate(latest.date)}
                </dd>
              </div>
              <div className="px-5 py-4">
                <dt className={eyebrow}>Releases</dt>
                <dd className="mt-2 text-base font-medium">{entries.length}</dd>
              </div>
            </dl>
          )}
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
                <li key={entry.slug} className="grid md:grid-cols-[10rem_1fr]">
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
                        <div className="relative aspect-video border-b">
                          <Image
                            src={entry.image}
                            alt={entry.imageAlt ?? entry.title}
                            fill
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