'use client';
import { ArrowRight, Volume2, VolumeX, Play, Pause } from "lucide-react";
import { Github, Windows, Linux } from "@/components/icons";
import { useState, useEffect, useRef } from "react";
import { formatFileSize } from "@/lib/github";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type HeroProps = {
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

type OS = 'windows' | 'linux' | 'unknown';

function getOS(): OS {
  if (typeof window === 'undefined') return 'unknown';
  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes('win')) return 'windows';
  if (userAgent.includes('linux')) return 'linux';
  return 'unknown';
}

export default function Hero({ release, assets }: HeroProps) {
  const [os, setOs] = useState<OS>('unknown');
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setOs(getOS());
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const getDownloadUrl = () => {
    if (!assets) return "#download";
    if (os === "windows" && assets.windows) return assets.windows.browser_download_url;
    if (os === "linux") {
      if (assets.linux.deb) return assets.linux.deb.browser_download_url;
      if (assets.linux.appImage) return assets.linux.appImage.browser_download_url;
      if (assets.linux.rpm) return assets.linux.rpm.browser_download_url;
    }
    return "#download";
  };

  const getDownloadLabel = () => {
    if (os === "windows" && assets?.windows) {
      return `Download ${assets.windows.name} (${formatFileSize(assets.windows.size)})`;
    }
    if (os === "linux") {
      if (assets?.linux.deb) {
        return `Download ${assets.linux.deb.name} (${formatFileSize(assets.linux.deb.size)})`;
      }
      if (assets?.linux.appImage) {
        return `Download ${assets.linux.appImage.name} (${formatFileSize(assets.linux.appImage.size)})`;
      }
      if (assets?.linux.rpm) {
        return `Download ${assets.linux.rpm.name} (${formatFileSize(assets.linux.rpm.size)})`;
      }
    }
    const osInfo = {
      windows: { icon: Windows, label: "Download for Windows" },
      linux: { icon: Linux, label: "Download for Linux" },
      unknown: { icon: null, label: "Download" },
    };
    return osInfo[os].label;
  };

  const currentOsInfo = {
    windows: { icon: Windows },
    linux: { icon: Linux },
    unknown: { icon: null },
  }[os];

  return (
    <section className="relative overflow-hidden border-border/70 mb-20 sm:mb-24 md:mb-28 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-narrow pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            <span>
              {release
                ? `${release.tag_name} — Free & open source`
                : "v1.0 — Free & open source"}
            </span>
          </span>

          <h1 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Play any sound <em className="italic text-moss">through</em> your microphone.<span aria-hidden="true">{"\u{1F399}\uFE0F"}</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg font-sans">
            Play <span className="text-foreground font-medium">music, memes, sound effects, and voice clips</span>{" "}
            directly into Discord, Zoom, Teams, OBS, or any game—with virtual audio cables.
            Free, lightweight, and built to stay out of your way.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              href="/download"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 sm:w-auto font-sans"
            >
              <Windows className="h-4 w-4" />
              Download for Windows
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <a
              href={release ? release.html_url : "https://github.com/audiopadapp/audiopad"}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 sm:w-auto font-sans"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-ink-soft">
            Windows 10/11 · Linux · ~14 MB
          </p>
        </div>

        {/* Product video */}
        <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
          <div className="absolute -inset-x-8 -bottom-8 -top-4 -z-10 rounded-3xl bg-surface-2/60 blur-2xl" />

          <div className="hairline overflow-hidden rounded-xl bg-white shadow-[0_30px_80px_-40px_rgba(60,50,30,0.35)] relative">
            <video
              ref={videoRef}
              src="/audiopad.mp4"
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button
                onClick={toggleMute}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
              >
                {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
