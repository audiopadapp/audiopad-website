import type { Metadata } from "next";
import Link from "next/link";
import DownloadPlatforms from "@/components/DownloadPlatforms";
import PatreonButton from "@/components/PatreonButton";
import ReleaseHistory from "@/components/ReleaseHistory";
import { 
  fetchLatestRelease, 
  fetchAllReleases, 
  filterReleaseAssets, 
  calculateTotalDownloads 
} from "@/lib/github";

export const metadata: Metadata = {
  title: "Download",
  description: "Download AudioPad for Windows and Linux — free, open-source soundboard.",
  keywords: ["download soundboard", "AudioPad download", "free soundboard download", "Windows soundboard", "Linux soundboard"],
  openGraph: {
    type: "website",
    url: "https://audiopad.vercel.app/download",
    title: "Download AudioPad",
    description: "Download AudioPad for Windows and Linux — free, open-source soundboard.",
    images: ["/audiopad-og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Download AudioPad",
    description: "Download AudioPad for Windows and Linux — free, open-source soundboard.",
    images: ["/audiopad-og.png"],
  },
  alternates: {
    canonical: "/download",
  },
};

export default async function DownloadPage() {
  const latestRelease = await fetchLatestRelease();
  const allReleases = await fetchAllReleases();
  const assets = latestRelease ? filterReleaseAssets(latestRelease) : null;
  const totalDownloads = calculateTotalDownloads(allReleases);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AudioPad",
    "applicationCategory": "MultimediaApplication",
    "operatingSystem": ["Windows", "Linux"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "Download AudioPad for Windows and Linux — free, open-source soundboard.",
    "url": "https://audiopad.vercel.app/download",
    "image": "https://audiopad.vercel.app/audiopad-og.png",
    "author": {
      "@type": "Organization",
      "name": "AudioPad Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "AudioPad"
    },
    "softwareVersion": latestRelease ? latestRelease.tag_name.replace('v', '') : "1.0.0",
    "license": "https://www.gnu.org/licenses/gpl-3.0.html"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="relative">
          <DownloadPlatforms 
            release={latestRelease} 
            assets={assets} 
            totalDownloads={totalDownloads}
          />

          <section className="p-6 sm:p-12 bg-surface/40">
            <div className="container-narrow py-12 sm:py-16 md:py-20">
              {/* Detailed Release History & Per-File Download Counters */}
              <ReleaseHistory releases={allReleases} totalDownloads={totalDownloads} />

              <div className="mx-auto mt-16 sm:mt-20 max-w-2xl text-center">
                <div className="rounded-xl border border-border bg-background p-6 sm:p-8 mb-8">
                  <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground">Support the Project</h2>
                  <p className="mt-3 text-sm text-ink-soft font-sans">
                    Help keep AudioPad free and open source by supporting us on Patreon!
                  </p>
                  <div className="mt-4">
                    <PatreonButton />
                  </div>
                </div>
                <div className="rounded-xl border border-border bg-background p-6 sm:p-8">
                  <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground">Build from source</h2>
                  <p className="mt-3 text-sm text-ink-soft font-sans">
                    Prefer to build AudioPad yourself? We provide complete source code and build instructions.
                  </p>
                  <a
                    href={latestRelease ? latestRelease.html_url : "https://github.com/audiopadapp/audiopad"}
                    className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>

              <div className="mx-auto mt-10 sm:mt-12 text-center">
                <Link
                  href="/changelog"
                  className="font-mono text-xs text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  View changelog & release notes
                </Link>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
