import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { cache } from "react";
import { z } from "zod";

const CHANGELOG_DIR = path.join(process.cwd(), "content", "changelog");

const frontmatterSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  version: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
});

export type ChangelogEntry = z.infer<typeof frontmatterSchema> & {
  slug: string;
  content: string;
};

export const getChangelogEntries = cache((): ChangelogEntry[] => {
  if (!fs.existsSync(CHANGELOG_DIR)) return [];

  return fs
    .readdirSync(CHANGELOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(CHANGELOG_DIR, file), "utf8");
      const { data, content } = matter(raw);

      const parsed = frontmatterSchema.safeParse(data);
      if (!parsed.success) {
        throw new Error(
          `Invalid frontmatter in content/changelog/${file}: ${parsed.error.message}`,
        );
      }

      return { ...parsed.data, slug, content };
    })
    .sort((a, b) => {
      const dateDiff = b.date.getTime() - a.date.getTime();
      if (dateDiff !== 0) return dateDiff;
      return b.slug.localeCompare(a.slug, undefined, { numeric: true });
    });
});

export function getChangelogEntry(slug: string) {
  return getChangelogEntries().find((entry) => entry.slug === slug);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";