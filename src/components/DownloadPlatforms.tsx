'use client';
import Image from "next/image";
import { ArrowRight, DownloadIcon } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Windows, Linux } from "@/components/icons";
import { formatFileSize, GitHubReleaseAsset } from "@/lib/github";

type DownloadPlatformsProps = {
  release: {
    tag_name: string;
    html_url: string;
  } | null;
  assets: {
    windows?: GitHubReleaseAsset;
    linux: {
      deb?: GitHubReleaseAsset;
      rpm?: GitHubReleaseAsset;
      appImage?: GitHubReleaseAsset;
    };
  } | null;
  totalDownloads?: number;
};

type OS = 'windows' | 'linux' | 'unknown';

const emptySubscribe = () => () => {};

function getOSSnapshot(): OS {
  if (typeof window === "undefined") return "unknown";
  const userAgent = window.navigator.userAgent.toLowerCase();
  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('linux')) return 'linux';
  return 'unknown';
}

function getServerOSSnapshot(): OS {
  return 'unknown';
}

export default function DownloadPlatforms({ release, assets, totalDownloads }: DownloadPlatformsProps) {
  const os = useSyncExternalStore(emptySubscribe, getOSSnapshot, getServerOSSnapshot);

  const formatAssetDetail = (asset?: GitHubReleaseAsset, fallback = "") => {
    if (!asset) return fallback;
    const base = `${asset.name} · ${formatFileSize(asset.size)}`;
    if (asset.download_count && asset.download_count > 0) {
      return `${base} · ${asset.download_count.toLocaleString()} downloads`;
    }
    return base;
  };

  const builds = [
    {
      os: "Windows",
      icon: Windows,
      key: "windows" as OS,
      detail: formatAssetDetail(assets?.windows, ".exe · Win 10/11"),
      href: assets?.windows?.browser_download_url || "#"
    },
    {
      os: "Linux",
      icon: Linux,
      key: "linux" as OS,
      detail: "deb · rpm · AppImage",
      href: assets?.linux?.deb?.browser_download_url
        || assets?.linux?.appImage?.browser_download_url
        || assets?.linux?.rpm?.browser_download_url
        || "#"
    },
  ];

  const detectedBuild = builds.find(b => b.key === os);
  const primaryBuild = detectedBuild ?? builds[0];
  const linuxOptions = [
    { label: "deb", asset: assets?.linux?.deb },
    { label: "rpm", asset: assets?.linux?.rpm },
    { label: "AppImage", asset: assets?.linux?.appImage },
  ].filter((option) => option.asset);
  const platformRows = [
    {
      title: "AudioPad for Windows.",
      subtitle: "Windows 10 and 11.",
      icon: Windows,
      options: [
        {
          label: "Windows",
          detail: formatAssetDetail(assets?.windows, ".exe installer"),
          href: assets?.windows?.browser_download_url ?? "#",
          available: Boolean(assets?.windows),
        },
      ],
    },
    {
      title: "AudioPad for Linux.",
      subtitle: "deb, rpm, and AppImage.",
      icon: Linux,
      options: linuxOptions.length
        ? linuxOptions.map((option) => ({
          label: option.label,
          detail: formatAssetDetail(option.asset, "Linux package"),
          href: option.asset!.browser_download_url,
          available: true,
        }))
        : [
          {
            label: "Linux",
            detail: "Packages coming soon",
            href: "#",
            available: false,
          },
        ],
    },
  ];

  return (
    <section className="mx-auto mt-10 max-w-5xl p-6 sm:mt-12 sm:p-8 md:p-10">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-b from-[#262626] via-[#171717] to-[#0a0a0a] shadow-[0_10px_18px_rgba(255,255,255,0.08)_inset,0_-6px_12px_rgba(0,0,0,0.28)_inset,0_22px_40px_-18px_rgba(0,0,0,0.6),0_10px_18px_-10px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
          <Image
            src="/logo-white.png"
            alt="AudioPad logo"
            width={112}
            height={112}
            className="h-10 w-10 object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-flex items-center rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-mono text-ink-soft">
            Desktop download
          </span>
          {totalDownloads !== undefined && totalDownloads > 0 && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-mono text-ink-soft">
              <DownloadIcon className="h-3 w-3 text-moss" />
              <strong className="text-foreground font-medium">{totalDownloads.toLocaleString()}</strong> total downloads
            </span>
          )}
        </div>
        <h2 className="mt-5 font-serif text-4xl tracking-tight text-foreground sm:text-5xl">
          Download AudioPad.
        </h2>
        <p className="mt-3 text-base text-ink-soft sm:text-lg">
          Available for Windows and Linux.
        </p>

        <div className="mt-6">
          <a
            href={primaryBuild.href}
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:opacity-90"
          >
            <primaryBuild.icon className="h-4 w-4" />
            Download for {primaryBuild.os}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <p className="mt-3 text-xs text-ink-soft">
            {release ? `${release.tag_name} · ${primaryBuild.detail}` : primaryBuild.detail}
          </p>
        </div>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-surface/35">
        {platformRows.map((row, rowIndex) => (
          <div
            key={row.title}
            className={`grid gap-6 px-6 py-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-start sm:px-8 ${rowIndex !== 0 ? "border-t border-border" : ""
              }`}
          >
            <div>
              <h3 className="font-serif text-2xl tracking-tight text-foreground">
                {row.title}
              </h3>
              <p className="mt-2 text-base text-ink-soft">{row.subtitle}</p>
            </div>

            <div className="flex min-w-full flex-col gap-3 sm:min-w-[340px]">
              {row.options.map((option) => (
                <div
                  key={`${row.title}-${option.label}`}
                  className="flex flex-col gap-3 rounded-lg border border-border bg-background/90 p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-start gap-3">
                    <row.icon className="mt-0.5 h-5 w-5 shrink-0 text-foreground" />

                    <div>
                      <div className="text-sm font-medium text-foreground">
                        {option.label}
                      </div>
                      <div className="mt-1 text-xs font-mono text-ink-soft">
                        {option.detail}
                      </div>
                    </div>
                  </div>
                  <a
                    href={option.href}
                    aria-disabled={!option.available}
                    className={`group inline-flex items-center justify-center gap-1 rounded-lg px-4 py-2 text-sm transition-colors ${option.available
                        ? "border border-border bg-background text-foreground hover:border-black hover:text-foreground"
                        : "cursor-not-allowed border border-border bg-surface text-ink-soft"
                      }`}
                  >
                    Download
                    {option.available && (
                      <DownloadIcon className="h-3.5 w-3.5 text-foreground" />
                    )}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
