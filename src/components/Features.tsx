import { Mic, FileAudio, Keyboard, Gauge, Feather, Gamepad2, ShieldCheck } from "lucide-react";
import { Github } from "@/components/icons";
import SectionHeading from "./SectionHeading";

const features = [
  { icon: Mic, title: "Plays through your mic", body: "Routes any sound into your microphone input so others hear it as if it came from you." },
  { icon: FileAudio, title: "Bring your own audio", body: "Drop in MP3, WAV, OGG, FLAC, or M4A. No conversions, no upload, no account." },
  { icon: Keyboard, title: "Global hotkeys", body: "Trigger any sound from anywhere — even mid-game. Custom bindings, no conflicts." },
  { icon: Gauge, title: "Low latency", body: "Engineered for sub-20ms playback. Cues land when you press the key, not a beat later." },
  { icon: Feather, title: "Lightweight", body: "Under 15 MB. A few MB of RAM at rest. Doesn't fight your CPU for your game." },
  { icon: Gamepad2, title: "Works everywhere", body: "Discord, Zoom, Teams, Slack, OBS, Steam — anywhere that reads a microphone." },
  { icon: ShieldCheck, title: "Private by design", body: "Runs entirely on your machine. No telemetry, no accounts, no cloud anything." },
  { icon: Github, title: "Open source", body: "Read the code, file an issue, send a patch. MIT licensed, forever free." },
];

export default function Features() {
  return (
    <section id="features" className="border-b border-border/70 mb-20 sm:mb-24 md:mb-28 bg-background">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <SectionHeading
          eyebrow="Features"
          title="Everything a soundboard should be."
          description="Echo focuses on the parts that matter: pressing a key and hearing the right sound, instantly, in the right place."
        />
        <div className="mt-10 sm:mt-12 md:mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="bg-background p-5 sm:p-6">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-moss">
                <f.icon className="h-4.5 w-4.5" strokeWidth={1.6} />
              </div>
              <h3 className="mt-4 sm:mt-5 text-[15px] font-medium tracking-tight text-foreground font-sans">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft font-sans">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
