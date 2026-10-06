import type { MetadataRoute } from 'next';
import { SITE_URL, getChangelogEntries } from "@/lib/changelog";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = getChangelogEntries();

  return [
    {
      url: 'https://audiopad.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://audiopad.vercel.app/download',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://audiopad.vercel.app/pricing',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://audiopad.vercel.app/story',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://audiopad.vercel.app/press',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/changelog`,
      lastModified: entries[0]?.date ?? new Date(),
    },
    ...entries.map((entry) => ({
      url: `${SITE_URL}/changelog/${entry.slug}`,
      lastModified: entry.date,
    })),
  ];
}
