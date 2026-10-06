import type { Metadata } from "next";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Compare from "@/components/Compare";
import OpenSource from "@/components/OpenSource";
import Faq from "@/components/Faq";
import { fetchLatestRelease, filterReleaseAssets, formatFileSize } from "@/lib/github";
import Sponsors from "@/components/Sponsors";

export const metadata: Metadata = {
  title: "AudioPad — Free, open-source soundboard for your microphone",
  description: "AudioPad is a free, lightweight, open-source soundboard. Play audio through your microphone in Discord, Zoom, Teams, and games — with hotkeys and low latency.",
  keywords: ["soundboard", "free soundboard", "open source soundboard", "microphone soundboard", "Discord soundboard", "Zoom soundboard", "Teams soundboard", "hotkeys", "low latency", "Windows", "Linux"],
  openGraph: {
    type: "website",
    url: "https://audiopad.vercel.app",
    title: "AudioPad — Free, open-source soundboard for your microphone",
    description: "AudioPad is a free, lightweight, open-source soundboard. Play audio through your microphone in Discord, Zoom, Teams, and games — with hotkeys and low latency.",
    images: [
      {
        url: "/audiopad-og.png",
        width: 1200,
        height: 630,
        alt: "AudioPad — Free, open-source soundboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AudioPad — Free, open-source soundboard for your microphone",
    description: "AudioPad is a free, lightweight, open-source soundboard. Play audio through your microphone in Discord, Zoom, Teams, and games — with hotkeys and low latency.",
    images: ["/audiopad-og.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  const latestRelease = await fetchLatestRelease();
  const assets = latestRelease ? filterReleaseAssets(latestRelease) : null;

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
    "description": "AudioPad is a free, lightweight, open-source soundboard. Play audio through your microphone in Discord, Zoom, Teams, and games — with hotkeys and low latency.",
    "url": "https://audiopad.vercel.app",
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
      <main className="mt-12">
        <Hero release={latestRelease} assets={assets} />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Compare />
        <OpenSource />
        <Sponsors />
        <Faq />
        {/* <DownloadCTA release={latestRelease} assets={assets} /> */}
      </main>
    </>
  );
}
