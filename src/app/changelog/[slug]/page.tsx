import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
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
    },
    twitter: { card: "summary_large_image", title, description: entry.description },
  };
}

export default async function ChangelogEntryPage({ params }: Props) {
  const { slug } = await params;
  const entry = getChangelogEntry(slug);
  if (!entry) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: `${entry.version} – ${entry.title}`,
    description: entry.description,
    datePublished: entry.date.toISOString(),
    mainEntityOfPage: `${SITE_URL}/changelog/${entry.slug}`,
  };

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Link
        href="/changelog"
        className="text-muted-foreground hover:text-foreground mb-8 inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="size-4" />
        All updates
      </Link>

      <article>
        <header className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge>{entry.version}</Badge>
            {entry.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="text-4xl font-bold tracking-tight">{entry.title}</h1>
          <p className="text-muted-foreground flex items-center gap-1.5 text-sm">
            <CalendarDays className="size-4" />
            <time dateTime={entry.date.toISOString()}>
              {formatDate(entry.date)}
            </time>
          </p>
        </header>

        <Separator className="my-8" />

        <div className="prose dark:prose-invert max-w-none">
          <MDXRemote
            source={entry.content}
            options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
          />
        </div>
      </article>
    </main>
  );
}