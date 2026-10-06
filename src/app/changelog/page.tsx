import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SITE_URL, formatDate, getChangelogEntries } from "@/lib/changelog";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Every update, improvement and fix, newest first.",
  alternates: { canonical: `${SITE_URL}/changelog` },
  openGraph: {
    title: "Changelog",
    description: "Every update, improvement and fix, newest first.",
    url: `${SITE_URL}/changelog`,
    type: "website",
  },
};

export default function ChangelogPage() {
  const entries = getChangelogEntries();

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-16">
      <header className="mb-12 space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
        <p className="text-muted-foreground text-lg">
          Every update, improvement and fix, newest first.
        </p>
      </header>

      {entries.length === 0 ? (
        <p className="text-muted-foreground">No updates yet.</p>
      ) : (
        <ol className="relative space-y-8 border-l pl-8">
          {entries.map((entry) => (
            <li key={entry.slug} className="relative">
              <span className="bg-primary ring-background absolute -left-[37px] top-6 size-2.5 rounded-full ring-4" />
              <Link href={`/changelog/${entry.slug}`} className="group block">
                <Card className="group-hover:border-primary/50 transition-colors">
                  <CardHeader>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{entry.version}</Badge>
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                      <span className="text-muted-foreground ml-auto flex items-center gap-1.5 text-sm">
                        <CalendarDays className="size-4" />
                        <time dateTime={entry.date.toISOString()}>
                          {formatDate(entry.date)}
                        </time>
                      </span>
                    </div>
                    <CardTitle className="pt-2 text-xl">
                      <h2>{entry.title}</h2>
                    </CardTitle>
                    {entry.description && (
                      <CardDescription>{entry.description}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <span className="text-primary inline-flex items-center gap-1 text-sm font-medium">
                      Read more
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </main>
  );
}