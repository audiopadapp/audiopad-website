// components/hero.tsx — Server Component (no "use client")
import { Github } from "@/components/icons";
import DownloadButton from "./ui/download-button";
import { Button } from "./ui/button";
import VideoPlayer from "./ui/video-player";

type GitHubReleaseAsset = {
  name: string;
  browser_download_url: string;
  size: number;
};

type HeroProps = {
  release: { tag_name: string; html_url: string } | null;
  assets: {
    windows?: GitHubReleaseAsset;
    linux: {
      deb?: GitHubReleaseAsset;
      rpm?: GitHubReleaseAsset;
      appImage?: GitHubReleaseAsset;
    };
  } | null;
};

export default function Hero({ release, assets }: HeroProps) {
  return (
    <section className="relative overflow-hidden border-border/70 mb-20 sm:mb-24 md:mb-28 bg-background">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="container-narrow pt-20 pb-16 sm:pt-28 sm:pb-24 md:pt-32 md:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-xs text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-moss" />
            <span>
              {release ? `${release.tag_name} — Free & open source` : "v1.0 — Free & open source"}
            </span>
          </span>

          <h1 className="mt-8 font-serif text-4xl leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Play any sound <em className="italic text-moss">through</em> your microphone.
            <span aria-hidden="true">{"\u{1F399}\uFE0F"}</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg font-sans">
            Play <span className="text-foreground font-medium">music, memes, sound effects, and voice clips</span>{" "}
            directly into Discord, Zoom, Teams, OBS, or any game—with virtual audio cables.
            Free, lightweight, and built to stay out of your way.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <DownloadButton labelOs size="lg" className="py-5 px-5" />
            <a href={release ? release.html_url : "https://github.com/audiopadapp/audiopad"}>
              <Button size="lg" className="py-5 px-5 border border-border" variant="secondary">
                <Github className="h-4 w-4" />
                Github
              </Button>
            </a>
          </div>

          <p className="mt-6 font-mono text-xs text-ink-soft">Windows 10/11 · Linux · ~14 MB</p>
        </div>

        <div className="relative mx-auto mt-12 sm:mt-16 max-w-5xl">
          <div className="absolute -inset-x-8 -bottom-8 -top-4 -z-10 rounded-3xl bg-surface-2/60 blur-2xl" />
          <VideoPlayer src="/audiopad.mp4" />
        </div>
      </div>
    </section>
  );
}
