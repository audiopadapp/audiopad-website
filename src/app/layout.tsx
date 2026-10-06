import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { TooltipProvider } from "@/components/ui/tooltip";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://audiopad.vercel.app"),
  title: {
    default: "AudioPad — Free, open-source soundboard for your microphone",
    template: "%s — AudioPad",
  },
  description: "AudioPad is a free, lightweight, open-source soundboard. Play audio through your microphone in Discord, Zoom, Teams, and games — with hotkeys and low latency.",
  keywords: ["soundboard", "free soundboard", "open source soundboard", "microphone soundboard", "Discord soundboard", "Zoom soundboard", "Teams soundboard", "hotkeys", "low latency", "Windows", "Linux"],
  authors: [{ name: "AudioPad Team" }],
  creator: "AudioPad Team",
  publisher: "AudioPad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://audiopad.vercel.app",
    siteName: "AudioPad",
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
    site: "@pyziiit",
    creator: "@pyziiit",
    title: "AudioPad — Free, open-source soundboard for your microphone",
    description: "AudioPad is a free, lightweight, open-source soundboard. Play audio through your microphone in Discord, Zoom, Teams, and games — with hotkeys and low latency.",
    images: ["/audiopad-og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  verification: {
    google: "G9nVs-bQdc9p887nLt5nM5zDsQ7u465mhZ1wiU21Emo",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
        plusJakartaSans.variable
      )}
    >
      <body className="min-h-full" suppressHydrationWarning>
        <TooltipProvider delayDuration={150}>
          <div className="min-h-screen bg-background text-foreground font-sans pt-3">
            <Nav />
            {children}
            <Footer />
          </div>

        </TooltipProvider>
      </body>
    </html>
  );
}
