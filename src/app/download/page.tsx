import type { Metadata } from "next";
import DownloadPlatforms from "@/components/DownloadPlatforms";
import PatreonButton from "@/components/PatreonButton";
import { 
  fetchLatestRelease, 
  fetchAllReleases, 
  filterReleaseAssets, 
  formatFileSize 
} from "@/lib/github";
import { DownloadIcon } from "lucide-react";


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

  const releaseDate = latestRelease 
    ? new Date(latestRelease.published_at || latestRelease.created_at).toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long' 
      })
    : "Unknown Date";

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
          <DownloadPlatforms release={latestRelease} assets={assets} />

          <section className="p-12 bg-surface/40">
            <div className="container-narrow py-16 sm:py-20 md:py-24">
              <div className="mx-auto max-w-2xl text-center">
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
                <a
                  href={latestRelease ? latestRelease.html_url : "https://github.com/audiopadapp/audiopad/releases"}
                  className="font-mono text-xs text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                >
                  View changelog
                </a>
              </div>

              {/* Version History Table */}
              {allReleases.length > 0 && (
                <div className="mx-auto mt-16 sm:mt-20 max-w-3xl">
                  <h2 className="font-serif text-xl sm:text-2xl tracking-tight text-foreground text-center mb-8">
                    Previous Versions
                  </h2>
                  <div className="overflow-x-auto rounded-xl border border-border bg-background">
                    <table className="w-full text-left">
                      <thead className="border-b border-border bg-surface">
                        <tr>
                          <th className="px-4 py-3 text-xs font-mono text-ink-soft uppercase tracking-wider">Version</th>
                          <th className="px-4 py-3 text-xs font-mono text-ink-soft uppercase tracking-wider">Date</th>
                          <th className="px-4 py-3 text-xs font-mono text-ink-soft uppercase tracking-wider">Download</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {allReleases.map((release) => {
                          const relAssets = filterReleaseAssets(release);
                          const date = new Date(release.published_at || release.created_at);
                          return (
                            <tr key={release.id} className="hover:bg-surface/30 transition-colors">
                              <td className="px-4 py-4 text-sm font-medium text-foreground">
                                <a href={release.html_url} className="hover:underline">
                                  {release.tag_name}
                                </a>
                              </td>
                              <td className="px-4 py-4 text-sm text-ink-soft font-mono">
                                {date.toLocaleDateString('en-US')}
                              </td>
                              <td className="px-4 py-4 text-sm">
                                <div className="flex flex-wrap gap-2">
                                  {relAssets.windows && (
                                    <a 
                                      href={relAssets.windows.browser_download_url} 
                                      className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs font-medium text-ink-soft hover:border-black hover:text-black transition-colors"
                                    >
                                      Windows {`(${formatFileSize(relAssets.windows.size)})`}
                                      <DownloadIcon className="h-4 w-4" />
                                    </a>
                                  )}
                                  {relAssets.linux.deb && (
                                    <a 
                                      href={relAssets.linux.deb.browser_download_url} 
                                      className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs font-medium text-ink-soft hover:border-black hover:text-black transition-colors"
                                    >
                                      deb {`(${formatFileSize(relAssets.linux.deb.size)})`}
                                      <DownloadIcon className="h-4 w-4" />
                                    </a>
                                  )}
                                  {relAssets.linux.rpm && (
                                    <a 
                                      href={relAssets.linux.rpm.browser_download_url} 
                                      className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs font-medium text-ink-soft hover:border-black hover:text-black transition-colors"
                                    >
                                      rpm {`(${formatFileSize(relAssets.linux.rpm.size)})`}
                                      <DownloadIcon className="h-4 w-4" />
                                    </a>
                                  )}
                                  {relAssets.linux.appImage && (
                                    <a 
                                      href={relAssets.linux.appImage.browser_download_url} 
                                      className="inline-flex items-center gap-1 rounded border border-border px-2 py-1 text-xs font-medium text-ink-soft hover:border-black hover:text-black transition-colors"
                                    >
                                      AppImage {`(${formatFileSize(relAssets.linux.appImage.size)})`}
                                      <DownloadIcon className="h-4 w-4" />
                                    </a>
                                  )}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </section>
        </main>
    </>
  );
}
