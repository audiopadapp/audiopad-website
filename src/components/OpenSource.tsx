import { HeartHandshakeIcon } from "lucide-react";
import { Github } from "@/components/icons";
import PatreonButton from "./PatreonButton";

export default function OpenSource() {
  return (
    <section className="bg-surface mb-12 p-6">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-moss">Open source</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Built in the open, by people who use it.
            </h2>
            <p className="mt-4 sm:mt-5 max-w-md text-base leading-relaxed text-ink-soft font-sans">
              AudioPad is free and open source. Support the project on Patreon to keep development going!
            </p>
            <div className="mt-6 sm:mt-7 flex flex-wrap gap-3">
              <PatreonButton />
              
              <a
                href="https://github.com/audiopadapp/audiopad/"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-foreground font-sans"
              >
                <HeartHandshakeIcon className="h-4 w-4" /> Contribute
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#2a241d] bg-[#14110c] font-mono">
            {/* Header */}
            <div className="flex items-center gap-2 px-5 py-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />

              <span className="ml-4 text-sm text-[#8d8478]">
                ~/audiopad
              </span>
            </div>

            {/* Terminal */}
            <pre className="overflow-x-auto px-6 py-2 text-[15px] leading-8 text-[#efe2cf]">
              <span className="text-[#52d273]">$</span> git clone https://github.com/audiopadapp/audiopad.git{"\n"}
              <span className="text-[#52d273]">$</span> cd audiopad{"\n"}
              <span className="text-[#52d273]">$</span> git submodule update --init --recursive{"\n"}
              <span className="text-[#52d273]">$</span> cmake -B build -DCMAKE_BUILD_TYPE=Debug{"\n"}
              <span className="text-[#52d273]">$</span> cmake --build build{"\n"}
              <span className="text-[#8d8478]"># build complete — 12.4 MB binary</span>{"\n"}
              <span className="text-[#52d273]">$</span> .\build\Debug\audiopad.exe{"\n\n"}
              <span className="text-[#f2a64d]">→</span> AudioPad is running{"\n"}
              <span className="text-[#f2a64d]">→</span> Watching ~/Sounds{"\n"}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
