import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { changelogMdxComponents } from "@/components/changelog/mdx-components";
import {
  SITE_URL,
  formatDate,
  getChangelogEntries,
  getChangelogEntry,
} from "@/lib/changelog";

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
  const title = `${entry.version} – ${entry.title}`;

  return {
    title,
    description: entry.description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: entry.description,
      url,
      type: "article",
      publishedTime: entry.date.toISOString(),
      tags: entry.tags,
      images: entry.image
        ? [{ url: `${SITE_URL}${entry.image}`, alt: entry.imageAlt ?? entry.title }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: entry.description,
      images: entry.image ? [`${SITE_URL}${entry.image}`] : undefined,
    },
  };
}

export default async function ChangelogEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);
  if (!entry) notFound();

  // Entries are sorted newest first.
  const all = getChangelogEntries();
  const index = all.findIndex((e) => e.slug === entry.slug);
  const newer = index > 0 ? all[index - 1] : null;
  const older = index >= 0 && index < all.length - 1 ? all[index + 1] : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${entry.version} – ${entry.title}`,
    description: entry.description,
    datePublished: entry.date.toISOString(),
    mainEntityOfPage: `${SITE_URL}/changelog/${entry.slug}`,
    image: entry.image ? `${SITE_URL}${entry.image}` : undefined,
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
        {/* Sidebar: release tracker */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <Link
              href="/changelog"
              className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
            >
              <ArrowLeft className="size-4" />
              All releases
            </Link>

            <div>
              <p className="text-muted-foreground mb-3 text-xs font-medium uppercase tracking-wide">
                Releases
              </p>
              <ol className="max-h-[60vh] space-y-0 overflow-y-auto border-l">
                {all.map((e) => {
                  const active = e.slug === entry.slug;
                  return (
                    <li key={e.slug} className="relative">
                      <span
                        className={`ring-background absolute -left-[5px] top-3.5 size-2.5 rounded-full ring-4 ${
                          active ? "bg-primary" : "bg-border"
                        }`}
                      />
                      <Link
                        href={`/changelog/${e.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`block py-2 pl-5 text-sm transition-colors ${
                          active
                            ? "text-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <span className="block font-mono">{e.version}</span>
                        <span className="block text-xs opacity-80">
                          {formatDate(e.date)}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </aside>

        {/* Main */}
        <article className="min-w-0">
          <Link
            href="/changelog"
            className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm transition-colors lg:hidden"
          >
            <ArrowLeft className="size-4" />
            All releases
          </Link>

          <header className="space-y-5">
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="font-mono">{entry.version}</Badge>
              {index === 0 && <Badge variant="secondary">Latest</Badge>}
              <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
                <CalendarDays className="size-4" />
                <time dateTime={entry.date.toISOString()}>
                  {formatDate(entry.date)}
                </time>
              </span>
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
              <div className="bg-muted relative aspect-video overflow-hidden rounded-xl border">
                <Image
                  src={entry.image}
                  alt={entry.imageAlt ?? entry.title}
                  fill
                  priority
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