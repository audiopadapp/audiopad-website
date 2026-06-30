import { ArrowRight } from "lucide-react";
import { Github } from "@/components/icons";
import SectionHeading from "./SectionHeading";

export default function OpenSource() {
  return (
    <section className="border-b border-border/70 bg-surface mb-20 sm:mb-24 md:mb-28">
      <div className="container-narrow py-16 sm:py-20 md:py-24">
        <div className="grid items-center gap-10 md:gap-12 md:grid-cols-2">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-moss">Open source</span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl md:text-5xl tracking-tight text-foreground">
              Built in the open, by people who use it.
            </h2>
            <p className="mt-4 sm:mt-5 max-w-md text-base leading-relaxed text-ink-soft font-sans">
              Echo is MIT licensed. Read the source, audit what it does on your machine, file an
              issue, or send a pull request. No paywalls hiding behind a contributor agreement.
            </p>
            <div className="mt-6 sm:mt-7 flex flex-wrap gap-3">
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-surface-2 font-sans"
              >
                <Github className="h-4 w-4" /> Star on GitHub
              </a>
              <a
                href="https://github.com"
                className="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-foreground font-sans"
              >
                Read the docs <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="hairline overflow-hidden rounded-xl bg-background font-mono text-[12.5px] leading-relaxed shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.10_30)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.85_0.10_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.80_0.08_145)]" />
              <span className="ml-2 text-xs text-ink-soft">~/echo · main</span>
            </div>
            <pre className="overflow-x-auto p-4 sm:p-5 text-foreground">
{`$ git clone https://github.com/echo-app/echo
$ cd echo && pnpm install
$ pnpm dev

  echo ▸ audio engine ready    `}<span className="text-moss">12ms</span>{`
  echo ▸ virtual mic attached
  echo ▸ hotkeys bound         `}<span className="text-moss">8 sounds</span>{`
  echo ▸ listening...

MIT License · 14.2 kLOC · 100% TypeScript
`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
