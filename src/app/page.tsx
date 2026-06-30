import Image from "next/image";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Compare from "@/components/Compare";
import OpenSource from "@/components/OpenSource";
import Faq from "@/components/Faq";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-3">
      <Nav />
      <main className="mt-24">
        <Hero />
        <LogoStrip />
        <Features />
        <HowItWorks />
        <Compare />
        <OpenSource />
        <Faq />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
