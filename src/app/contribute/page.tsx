
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  FileText,
  CatIcon as Github,
  Globe2,
  MessageSquare,
  Monitor,
  Terminal,
} from "lucide-react";

const contributions = [
  {
    title: "AudioPad App",
    eyebrow: "THE SOFTWARE",
    description:
      "Contribute to the actual AudioPad desktop application. Work on the audio engine, native integrations, UI, features, performance, and bug fixes.",
    technologies: ["C++", "WebView", "CMake"],
    platforms: ["Windows", "Linux"],
    icon: Monitor,
    href: "https://github.com/audiopadapp/audiopad",
    primary: true,
  },
  {
    title: "AudioPad Website",
    eyebrow: "THE WEBSITE",
    description:
      "Improve the website, documentation, changelog, content, design, and developer experience around AudioPad.",
    technologies: ["Next.js", "TypeScript"],
    platforms: ["Web", "Documentation"],
    icon: Globe2,
    href: "https://github.com/audiopadapp/audiopad-website",
    primary: false,
  },
];

const otherWays = [
  {
    icon: MessageSquare,
    title: "Report a bug",
    description: "Found something broken? Let us know on GitHub.",
    href: "https://github.com/audiopadapp/audiopad/issues",
  },
  {
    icon: Code2,
    title: "Suggest an idea",
    description: "Have an idea that could make AudioPad better?",
    href: "https://github.com/audiopadapp/audiopad/discussions",
  },
  {
    icon: FileText,
    title: "Improve documentation",
    description: "Help make AudioPad easier to understand and use.",
    href: "https://github.com/audiopadapp/audiopad-website",
  },
];

export default function ContributePage() {
  return (
    <main className="min-h-screen bg-[#f4f3ef] text-[#171816]">
      {/* Hero */}
      <section className="border-b border-black/8">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:px-8 lg:px-12 lg:pb-28 lg:pt-36">
          <div className="max-w-4xl">
            <div className="mb-7 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-black/45">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4f9f78]" />
              Open source
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Build AudioPad
              <br />
              with us.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-7 text-black/55 sm:text-lg">
              AudioPad is open source. Whether you want to improve the
              desktop application or help build the website, choose the
              project you want to contribute to.
            </p>
          </div>
        </div>
      </section>

      {/* Contribution paths */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/40">
            Choose a project
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
            What do you want to contribute to?
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {contributions.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl border border-black/8 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-black/15 hover:shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-9"
              >
                {/* subtle accent */}
                <div
                  className={`absolute right-0 top-0 h-32 w-32 rounded-full blur-3xl ${
                    item.primary ? "bg-[#4f9f78]/10" : "bg-black/[0.035]"
                  }`}
                />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-black/8 bg-[#f7f6f2]">
                    <Icon className="h-5 w-5 text-black/70" strokeWidth={1.7} />
                  </div>

                  <ArrowUpRight
                    className="h-5 w-5 text-black/30 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black/70"
                    strokeWidth={1.7}
                  />
                </div>

                <div className="relative mt-auto pt-20">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                    {item.eyebrow}
                  </p>

                  <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 max-w-lg text-sm leading-6 text-black/55">
                    {item.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-black/8 bg-[#f7f6f2] px-2.5 py-1.5 text-[11px] font-medium text-black/55"
                      >
                        {technology}
                      </span>
                    ))}

                    {item.platforms.map((platform) => (
                      <span
                        key={platform}
                        className="rounded-md border border-black/8 bg-[#f7f6f2] px-2.5 py-1.5 text-[11px] font-medium text-black/55"
                      >
                        {platform}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center gap-2 text-sm font-medium">
                    <Github className="h-4 w-4" strokeWidth={1.8} />
                    View repository
                    <ArrowUpRight
                      className="h-3.5 w-3.5 text-black/35"
                      strokeWidth={1.8}
                    />
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* App contribution note */}
      <section className="border-y border-black/8 bg-[#eceae4]">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-black/40">
                <Terminal className="h-3.5 w-3.5" strokeWidth={1.8} />
                Working on the app
              </div>

              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                The software repository has everything you need.
              </h2>

              <p className="mt-4 text-sm leading-6 text-black/55 sm:text-base">
                The AudioPad repository contains the development setup,
                build instructions, contribution workflow, code formatting
                rules, and project structure for working on the desktop app.
              </p>
            </div>

            <a
              href="https://github.com/audiopadapp/audiopad/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#171816] px-5 text-sm font-medium text-white transition-colors hover:bg-black"
            >
              Read contribution guide
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </a>
          </div>
        </div>
      </section>

      {/* Other ways to contribute */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-10">
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-black/40">
            More ways to help
          </p>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
            You don't have to write code.
          </h2>
        </div>

        <div className="grid divide-y divide-black/8 border-y border-black/8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {otherWays.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-1 py-7 md:px-7 md:py-3"
              >
                <Icon
                  className="h-5 w-5 text-black/55 transition-colors group-hover:text-[#4f9f78]"
                  strokeWidth={1.7}
                />

                <h3 className="mt-5 text-base font-semibold tracking-[-0.02em]">
                  {item.title}
                </h3>

                <p className="mt-2 max-w-xs text-sm leading-6 text-black/50">
                  {item.description}
                </p>

                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-black/60">
                  Get started
                  <ArrowUpRight
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.8}
                  />
                </span>
              </a>
            );
          })}
        </div>
      </section>

    
    </main>
  );
}