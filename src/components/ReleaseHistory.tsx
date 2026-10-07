import { 
  DownloadIcon, 
  ExternalLink, 
  FolderArchive, 
  Package, 
  Calendar,
  FileDown
} from "lucide-react";
import Link from "next/link";
import { Windows, Linux, Github } from "@/components/icons";
import { 
  GitHubRelease, 
  GitHubReleaseAsset, 
  formatFileSize, 
  getReleaseTotalDownloads, 
  calculatePlatformDownloads 
} from "@/lib/github";

interface ReleaseHistoryProps {
  releases: GitHubRelease[];
  totalDownloads: number;
}

function getAssetInfo(assetName: string) {
  const lower = assetName.toLowerCase();
  if (lower.endsWith(".exe")) {
    return {
      type: "Windows Installer",
      badge: ".exe",
      icon: Windows,
      color: "text-blue-600 dark:text-blue-400",
    };
  }
  if (lower.endsWith(".deb")) {
    return {
      type: "Debian / Ubuntu",
      badge: ".deb",
      icon: Linux,
      color: "text-amber-600 dark:text-amber-400",
    };
  }
  if (lower.endsWith(".rpm")) {
    return {
      type: "Fedora / RHEL",
      badge: ".rpm",
      icon: Linux,
      color: "text-amber-600 dark:text-amber-400",
    };
  }
  if (lower.endsWith(".appimage")) {
    return {
      type: "Linux AppImage",
      badge: ".AppImage",
      icon: Linux,
      color: "text-emerald-600 dark:text-emerald-400",
    };
  }
  if (lower.endsWith(".tar.gz") || lower.endsWith(".zip")) {
    return {
      type: "Source Archive",
      badge: lower.endsWith(".tar.gz") ? ".tar.gz" : ".zip",
      icon: FolderArchive,
      color: "text-purple-600 dark:text-purple-400",
    };
  }
  return {
    type: "Asset File",
    badge: assetName.split(".").pop() || "file",
    icon: FileDown,
    color: "text-foreground",
  };
}

export default function ReleaseHistory({ releases, totalDownloads }: ReleaseHistoryProps) {
  if (!releases || releases.length === 0) {
    return (
      <div className="mx-auto mt-16 max-w-4xl rounded-2xl border border-border bg-background p-8 text-center">
        <h3 className="font-serif text-xl text-foreground">Releases currently unavailable</h3>
        <p className="mt-2 text-sm text-ink-soft font-sans">
          Download releases directly from the official GitHub repository.
        </p>
        <a
          href="https://github.com/audiopadapp/audiopad/releases"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          <Github className="h-4 w-4" />
          GitHub Releases
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    );
  }

  const platforms = calculatePlatformDownloads(releases);
  const latestTag = releases[0]?.tag_name;

  return (
    <div className="mx-auto mt-16 sm:mt-20 max-w-4xl">
      {/* Section Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-mono text-ink-soft">
          <DownloadIcon className="h-3 w-3 text-moss" />
          All releases & download metrics
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-4xl tracking-tight text-foreground">
          Release History & Downloads
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm sm:text-base text-ink-soft font-sans">
          Complete breakdown of every AudioPad release with live download counts for each platform and installer file.
        </p>
      </div>

      {/* Aggregate Stats Cards */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
        {/* Total Downloads */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between text-ink-soft">
            <span className="font-mono text-xs uppercase tracking-wider">Total</span>
            <DownloadIcon className="h-4 w-4 text-moss" />
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
            {totalDownloads.toLocaleString()}
          </div>
          <p className="mt-1 font-mono text-[11px] text-ink-soft">
            Downloads across all versions
          </p>
        </div>

        {/* Windows Downloads */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between text-ink-soft">
            <span className="font-mono text-xs uppercase tracking-wider">Windows</span>
            <Windows className="h-4 w-4 text-foreground" />
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
            {platforms.windows.toLocaleString()}
          </div>
          <p className="mt-1 font-mono text-[11px] text-ink-soft">
            .exe installers
          </p>
        </div>

        {/* Linux Downloads */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between text-ink-soft">
            <span className="font-mono text-xs uppercase tracking-wider">Linux</span>
            <Linux className="h-4 w-4 text-foreground" />
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
            {platforms.linux.toLocaleString()}
          </div>
          <p className="mt-1 font-mono text-[11px] text-ink-soft">
            deb · rpm · AppImage
          </p>
        </div>

        {/* Total Releases */}
        <div className="rounded-xl border border-border bg-background p-4 sm:p-5 shadow-xs">
          <div className="flex items-center justify-between text-ink-soft">
            <span className="font-mono text-xs uppercase tracking-wider">Releases</span>
            <Package className="h-4 w-4 text-moss" />
          </div>
          <div className="mt-2 text-2xl sm:text-3xl font-serif font-bold text-foreground tracking-tight">
            {releases.length}
          </div>
          <p className="mt-1 font-mono text-[11px] text-ink-soft">
            Latest: {latestTag}
          </p>
        </div>
      </div>

      {/* Releases Cards */}
      <div className="mt-10 space-y-5">
        {releases.map((release, index) => {
          const isLatest = index === 0;
          const releaseTotal = getReleaseTotalDownloads(release);
          const releaseDate = new Date(release.published_at || release.created_at).toLocaleDateString(
            "en-US",
            {
              year: "numeric",
              month: "short",
              day: "numeric",
            }
          );

          return (
            <div
              key={release.id}
              className={`rounded-2xl border transition-colors ${
                isLatest
                  ? "border-moss/40 bg-background shadow-sm ring-1 ring-moss/20"
                  : "border-border bg-background/95 hover:border-border/90"
              } p-5 sm:p-6`}
            >
              {/* Release Header */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-b border-border/60 pb-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={release.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-foreground hover:underline inline-flex items-center gap-1.5"
                  >
                    {release.tag_name}
                    <ExternalLink className="h-4 w-4 text-ink-soft" />
                  </a>

                  {isLatest && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-moss/10 px-2.5 py-0.5 text-xs font-mono font-medium text-moss border border-moss/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-moss" />
                      Latest Release
                    </span>
                  )}

                  <span className="inline-flex items-center gap-1 text-xs font-mono text-ink-soft">
                    <Calendar className="h-3.5 w-3.5" />
                    {releaseDate}
                  </span>
                </div>

                {/* Release Total Downloads */}
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs font-medium text-foreground">
                    <DownloadIcon className="h-3.5 w-3.5 text-moss" />
                    <span className="font-semibold">{releaseTotal.toLocaleString()}</span>
                    <span className="text-ink-soft">downloads</span>
                  </span>
                  <Link
                    href={`/changelog/${release.tag_name}`}
                    className="text-xs font-mono text-ink-soft hover:text-foreground underline-offset-4 hover:underline"
                  >
                    Notes
                  </Link>
                </div>
              </div>

              {/* Assets List */}
              <div className="mt-4">
                <p className="font-mono text-xs uppercase tracking-wider text-ink-soft mb-3">
                  Files & downloads for {release.tag_name}
                </p>

                {release.assets && release.assets.length > 0 ? (
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                    {release.assets.map((asset: GitHubReleaseAsset) => {
                      const assetInfo = getAssetInfo(asset.name);
                      const AssetIcon = assetInfo.icon;

                      return (
                        <a
                          key={asset.id ?? asset.name}
                          href={asset.browser_download_url}
                          download
                          className="group flex flex-col justify-between rounded-xl border border-border bg-surface/40 p-3 hover:bg-surface hover:border-foreground/30 transition-all"
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              <AssetIcon className={`h-4 w-4 shrink-0 ${assetInfo.color}`} />
                              <span className="font-medium text-sm text-foreground truncate">
                                {asset.name}
                              </span>
                            </div>
                            <DownloadIcon className="h-4 w-4 shrink-0 text-ink-soft group-hover:text-foreground transition-transform group-hover:translate-y-0.5" />
                          </div>

                          <div className="mt-3 flex items-center justify-between pt-2 border-t border-border/40 text-xs">
                            <span className="font-mono text-ink-soft">
                              {formatFileSize(asset.size)}
                            </span>
                            <span className="inline-flex items-center gap-1 rounded bg-moss/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-moss">
                              <DownloadIcon className="h-3 w-3" />
                              {asset.download_count.toLocaleString()}
                            </span>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                ) : (
                  <p className="text-xs font-mono text-ink-soft">
                    No binary assets attached to this release.
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
