
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  FileCode2,
  Globe,
  Heart,
  Monitor,
  Sparkles,
  Terminal,
} from "lucide-react";
import { Github } from "@/components/icons";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Contribute — AudioPad",
  description:
    "AudioPad is 100% free and open source. Learn how to contribute to the desktop application, website, and changelog.",
  alternates: {
    canonical: "/contribute",
  },
};

const projects = [
  {
    title: "AudioPad App",
    category: "Desktop Application",
    description:
      "Contribute to the core desktop soundboard for Windows and Linux. Work on audio routing, DSP, UI, hotkeys, and performance.",
    icon: Monitor,
    tags: ["C++", "WebView", "CMake", "Windows", "Linux"],
    primaryAction: {
      label: "View repository",
      href: "https://github.com/audiopadapp/audiopad",
      external: true,
      icon: Github,
    },
    secondaryAction: {
      label: "Read setup guide",
      href: "https://github.com/audiopadapp/audiopad/blob/main/CONTRIBUTING.md",
      external: true,
    },
  },
  {
    title: "AudioPad Website",
    category: "Web & Documentation",
    description:
      "Help improve the official website, landing pages, marketing assets, SEO, accessibility, and documentation.",
    icon: Globe,
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    primaryAction: {
      label: "View repository",
      href: "https://github.com/audiopadapp/audiopad-website",
      external: true,
      icon: Github,
    },
    secondaryAction: {
      label: "Browse issues",
      href: "https://github.com/audiopadapp/audiopad-website/issues",
      external: true,
    },
  },
  {
    title: "Changelog Guide",
    category: "Release Notes",
    description:
      "Learn how to author and publish changelog entries for new releases. Step-by-step guidance on frontmatter, images, and MDX rules.",
    icon: FileCode2,
    tags: ["MDX", "Authoring", "Releases"],
    featured: true,
    primaryAction: {
      label: "Read changelog guide",
      href: "/contribute/changelog",
      external: false,
      icon: FileCode2,
    },
    secondaryAction: {
      label: "View all releases",
      href: "/changelog",
      external: false,
    },
  },
];

const otherWays = [
  {
    title: "Report a bug",
    description:
      "Found an issue or audio glitch? Open an issue on GitHub with reproduction details.",
    icon: Terminal,
    href: "https://github.com/audiopadapp/audiopad/issues",
    action: "Open GitHub issue",
  },
  {
    title: "Suggest an idea",
    description:
      "Have ideas for new features, integrations, or workflows? Join discussions with the community.",
    icon: Sparkles,
    href: "https://github.com/audiopadapp/audiopad/discussions",
    action: "Join discussion",
  },
  {
    title: "Support on Patreon",
    description:
      "Support ongoing development, domain hosting, code signing certificates, and server costs.",
    icon: Heart,
    href: "https://www.patreon.com/cw/audiopad_oss",
    action: "Become a supporter",
  },
];

export default function ContributePage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-3">
            Open Source
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Contribute to AudioPad
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            AudioPad is 100% free and open source. From writing code and documenting
            releases to reporting bugs and suggesting ideas, all contributions are
            welcome.
          </p>
        </div>
      </section>

      {/* Main contribution pathways */}
      <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
        <div className="mb-8">
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Choose a project
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Select the repository or guide that matches what you want to work on.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;
            const ActionIcon = project.primaryAction.icon;

            return (
              <div
                key={project.title}
                className="flex flex-col justify-between rounded-xl border bg-card p-5 sm:p-6 transition-colors hover:border-foreground/30 shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex size-10 items-center justify-center rounded-lg border bg-muted">
                      <Icon className="size-5 text-foreground" />
                    </div>

                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {project.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="font-mono text-[10px] font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-2 border-t pt-4">
                  {project.primaryAction.external ? (
                    <a
                      href={project.primaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-foreground text-background hover:bg-foreground/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors"
                    >
                      <ActionIcon className="size-3.5" />
                      {project.primaryAction.label}
                      <ExternalLink className="size-3 opacity-70" />
                    </a>
                  ) : (
                    <Link
                      href={project.primaryAction.href}
                      className="bg-foreground text-background hover:bg-foreground/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-3.5 py-2 text-xs font-medium transition-colors"
                    >
                      <ActionIcon className="size-3.5" />
                      {project.primaryAction.label}
                      <ArrowRight className="size-3.5" />
                    </Link>
                  )}

                  {project.secondaryAction.external ? (
                    <a
                      href={project.secondaryAction.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-muted text-muted-foreground hover:text-foreground inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors"
                    >
                      {project.secondaryAction.label}
                      <ExternalLink className="size-3 opacity-60" />
                    </a>
                  ) : (
                    <Link
                      href={project.secondaryAction.href}
                      className="hover:bg-muted text-muted-foreground hover:text-foreground inline-flex w-full items-center justify-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors"
                    >
                      {project.secondaryAction.label}
                      <ArrowRight className="size-3 opacity-60" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* More ways to help */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              More ways to help
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              You don&apos;t have to write code to support the AudioPad project.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {otherWays.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-xl border bg-card p-5 transition-colors hover:border-foreground/30 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex size-9 items-center justify-center rounded-lg border bg-muted">
                      <Icon className="size-4 text-foreground" />
                    </div>

                    <h3 className="mt-4 text-base font-semibold tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-foreground group-hover:underline">
                    {item.action}
                    <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}