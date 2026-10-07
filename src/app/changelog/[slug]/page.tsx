import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  DownloadIcon,
  ExternalLink,
  FileCode2,
  SquarePen,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { changelogMdxComponents } from "@/components/changelog/mdx-components";
import { Github } from "@/components/icons";
import {
  SITE_URL,
  formatDate,
  getChangelogEntries,
  getChangelogEntry,
} from "@/lib/changelog";
import { fetchAllReleases, getReleaseTotalDownloads } from "@/lib/github";

const GITHUB_REPO_URL = "https://github.com/audiopadapp/audiopad-website";

type Props = { params: Promise<{ slug: string }> };

// Only slugs generated at build time exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return getChangelogEntries().map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);
  if (!entry) return {};

  const url = `${SITE_URL}/changelog/${entry.slug}`;
  const title = `${entry.version} – ${entry.title} | AudioPad Changelog`;
  const description =
    entry.description ??
    `Release notes and update details for AudioPad ${entry.version}: ${entry.title}.`;
  const imageUrl = entry.image
    ? `${SITE_URL}${entry.image}`
    : `${SITE_URL}/audiopad-og.png`;

  return {
    title,
    description,
    keywords: [
      entry.version,
      `AudioPad ${entry.version}`,
      ...entry.tags,
      "AudioPad changelog",
      "AudioPad release notes",
      "soundboard updates",
    ],
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      publishedTime: entry.date.toISOString(),
      tags: entry.tags,
      images: [
        {
          url: imageUrl,
          alt: entry.imageAlt ?? entry.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ChangelogEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);
  if (!entry) notFound();

  const allReleases = await fetchAllReleases();
  const release = allReleases.find(
    (r) => r.tag_name === entry.slug || r.tag_name === entry.version
  );
  const releaseDownloads = release ? getReleaseTotalDownloads(release) : 0;

  // Entries are sorted newest first.
  const all = getChangelogEntries();
  const index = all.findIndex((e) => e.slug === entry.slug);
  const newer = index > 0 ? all[index - 1] : null;
  const older = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

  const url = `${SITE_URL}/changelog/${entry.slug}`;
  const imageUrl = entry.image
    ? `${SITE_URL}${entry.image}`
    : `${SITE_URL}/audiopad-og.png`;
  const githubEditUrl = `${GITHUB_REPO_URL}/edit/main/content/changelog/${entry.slug}.mdx`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        "headline": `${entry.version} – ${entry.title}`,
        "description": entry.description,
        "datePublished": entry.date.toISOString(),
        "dateModified": entry.date.toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": url,
        },
        "url": url,
        "image": imageUrl,
        "author": {
          "@type": "Organization",
          "name": "AudioPad Team",
          "url": SITE_URL,
        },
        "publisher": {
          "@type": "Organization",
          "name": "AudioPad",
          "url": SITE_URL,
          "logo": {
            "@type": "ImageObject",
            "url": `${SITE_URL}/logo-white.png`,
          },
        },
        "keywords": entry.tags.join(", "),
        "articleSection": "Changelog",
        "inLanguage": "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": SITE_URL,
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Changelog",
            "item": `${SITE_URL}/changelog`,
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": entry.version,
            "item": url,
          },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <div className="grid gap-12 lg:grid-cols-[14rem_minmax(0,1fr)]">
        {/* Sidebar: release tracker & contribute */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <Link
              href="/changelog"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft className="size-4" />
              All releases
            </Link>

            <div className="space-y-3">
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                Download
              </p>
              <Link
                href="/download"
                className="bg-foreground text-background hover:opacity-90 inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-medium transition-opacity"
              >
                <DownloadIcon className="size-3.5" />
                <span>Download AudioPad</span>
              </Link>
              {releaseDownloads > 0 && (
                <p className="text-muted-foreground font-mono text-[11px] text-center">
                  <span className="text-foreground font-semibold">{releaseDownloads.toLocaleString()}</span> downloads for {entry.version}
                </p>
              )}
            </div>

            <Separator />

            <div className="space-y-3">
              <p className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">
                Contribute
              </p>
              <div className="flex flex-col gap-1.5 text-sm">
                <a
                  href={githubEditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/60 -mx-2 flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors"
                >
                  <SquarePen className="size-4" />
                  <span>Edit this page</span>
                  <ExternalLink className="text-muted-foreground/60 ml-auto size-3" />
                </a>

                <Link
                  href="/contribute/changelog"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/60 -mx-2 flex items-center gap-2 rounded-md px-2 py-1.5 transition-colors"
                >
                  <FileCode2 className="size-4" />
                  <span>Changelog guide</span>
                </Link>
              </div>
            </div>
          </div>
        </aside>

        {/* Main */}
        <article className="min-w-0">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3 lg:hidden">
            <Link
              href="/changelog"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft className="size-4" />
              All releases
            </Link>

            <div className="flex items-center gap-3 text-xs">
              <a
                href={githubEditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
              >
                <SquarePen className="size-3.5" />
                Edit page
              </a>
              <span className="text-muted-foreground/40">•</span>
              <Link
                href="/contribute/changelog"
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors"
              >
                <FileCode2 className="size-3.5" />
                Guide
              </Link>
            </div>
          </div>

          <header className="space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="font-mono">{entry.version}</Badge>
                {index === 0 && <Badge variant="secondary">Latest</Badge>}
                {releaseDownloads > 0 && (
                  <Badge
                    variant="outline"
                    className="font-mono text-xs font-normal gap-1 border-border text-foreground bg-surface"
                  >
                    <DownloadIcon className="size-3 text-moss" />
                    {releaseDownloads.toLocaleString()} downloads
                  </Badge>
                )}
                <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                  <CalendarDays className="size-4" />
                  <time dateTime={entry.date.toISOString()}>
                    {formatDate(entry.date)}
                  </time>
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {release && (
                  <a
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors"
                  >
                    <Github className="size-3.5" />
                    <span>GitHub Release</span>
                    <ExternalLink className="text-muted-foreground/60 size-3" />
                  </a>
                )}
                <a
                  href={githubEditUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium transition-colors"
                >
                  <SquarePen className="size-3.5" />
                  <span>Edit page</span>
                  <ExternalLink className="text-muted-foreground/60 size-3" />
                </a>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              {entry.title}
            </h1>

            {entry.description && (
              <p className="text-muted-foreground text-lg leading-relaxed">
                {entry.description}
              </p>
            )}

            {entry.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {entry.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {entry.image && (
            <figure className="mt-10">
              <div className="bg-background relative aspect-video overflow-hidden rounded-xl border">
                <Image
                  src={entry.image}
                  alt={entry.imageAlt ?? entry.title}
                  fill
                  priority
                  loading="eager"
                  sizes="(min-width: 1024px) 704px, 100vw"
                  className="object-cover"
                />
              </div>
              {entry.imageAlt && (
                <figcaption className="text-muted-foreground mt-3 text-center text-sm">
                  {entry.imageAlt}
                </figcaption>
              )}
            </figure>
          )}

          <Separator className="my-10" />

          <div className="prose dark:prose-invert prose-headings:tracking-tight prose-headings:scroll-mt-24 prose-a:text-primary prose-img:rounded-lg prose-img:border max-w-none">
            <MDXRemote
              source={entry.content}
              components={changelogMdxComponents}
              options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
            />
          </div>

          {/* Contribution box */}
          <div className="mt-12 flex flex-col gap-4 rounded-xl border bg-muted/30 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium">Found an issue or want to contribute?</p>
              <p className="text-muted-foreground text-xs sm:text-sm">
                Suggest edits to this release note on GitHub or read our changelog authoring guide.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={githubEditUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background hover:bg-muted border-border inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors shadow-2xs"
              >
                <SquarePen className="size-3.5" />
                <span>Edit page on GitHub</span>
                <ExternalLink className="text-muted-foreground/60 size-3" />
              </a>
              <Link
                href="/contribute/changelog"
                className="bg-background hover:bg-muted border-border inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors shadow-2xs"
              >
                <FileCode2 className="size-3.5" />
                <span>Changelog guide</span>
              </Link>
            </div>
          </div>

          {(newer || older) && (
            <nav
              aria-label="More releases"
              className="mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2"
            >
              {older ? (
                <Link
                  href={`/changelog/${older.slug}`}
                  className="hover:border-primary/50 rounded-lg border p-4 transition-colors"
                >
                  <span className="text-muted-foreground flex items-center gap-1.5 text-xs">
                    <ArrowLeft className="size-3.5" />
                    Older
                  </span>
                  <span className="mt-1 block font-medium">
                    {older.version} – {older.title}
                  </span>
                </Link>
              ) : (
                <span className="hidden sm:block" />
              )}

              {newer && (
                <Link
                  href={`/changelog/${newer.slug}`}
                  className="hover:border-primary/50 rounded-lg border p-4 text-right transition-colors sm:col-start-2"
                >
                  <span className="text-muted-foreground flex items-center justify-end gap-1.5 text-xs">
                    Newer
                    <ArrowRight className="size-3.5" />
                  </span>
                  <span className="mt-1 block font-medium">
                    {newer.version} – {newer.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </div>
    </main>
  );
}