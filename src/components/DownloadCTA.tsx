import { ArrowRight, Download } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { Windows, Linux } from "@/components/icons";
import { formatFileSize } from "@/lib/github";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type DownloadCTAProps = {
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
};

export default function DownloadCTA({ release, assets }: DownloadCTAProps) {
  const builds = [
    { 
      os: "Windows", 
      icon: Windows,
      detail: assets?.windows 
        ? `${assets.windows.name} · ${formatFileSize(assets.windows.size)}` 
        : ".exe · Win 10/11",
      href: assets?.windows?.browser_download_url || "#"
    },
    { 
      os: "Linux", 
      icon: Linux,
      detail: "deb · rpm · AppImage",
      href: assets?.linux?.deb?.browser_download_url 
        || assets?.linux?.appImage?.browser_download_url 
        || assets?.linux?.rpm?.browser_download_url 
        || "#"
    },
  ];
  return (
    <section id="download" className="p-6 bg-surface/40 mb-20 sm:mb-24 md:mb-28">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-moss">Download</span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
            Get AudioPad. It takes a minute.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-soft font-sans">
            Pick your platform. The download is signed, notarized, and verifiable against the
            checksums in the GitHub release.
          </p>
        </div>

        <div className="mx-auto mt-10 sm:mt-12 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2">
          {builds.map((b) => (
            <a
              key={b.os}
              href={b.href}
              className="group flex flex-col items-start gap-4 rounded-xl border border-border bg-background p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:border-moss/40 hover:bg-surface"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-moss">
                <b.icon className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[15px] font-medium text-foreground font-sans">{b.os}</div>
                <div className="mt-1 font-mono text-xs text-ink-soft">{b.detail}</div>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-moss font-sans">
                Download <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>

        <p className="mt-7 sm:mt-8 text-center font-mono text-xs text-ink-soft">
          Prefer to build from source?{" "}
          <a href={release ? release.html_url : "https://github.com/audiopadapp/audiopad"} className="text-foreground underline-offset-4 hover:underline">
            github.com/audiopadapp/audiopad
          </a>
        </p>
      </div>
    </section>
  );
}
