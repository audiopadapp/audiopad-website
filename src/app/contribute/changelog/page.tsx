import Link from "next/link"
import {
  ArrowRight,
  Check,
  ChevronRight,
  FileCode2,
  FolderOpen,
  GitBranch,
  Image as ImageIcon,
  Info,
  Rocket,
  Terminal,
  TriangleAlert,
} from "lucide-react"

const steps = [
  {
    number: "01",
    icon: FileCode2,
    title: "Create the entry",
    description:
      "Create a new .mdx file inside content/changelog/. The filename becomes the permanent URL.",
    code: "content/changelog/v1.2.0.mdx",
  },
  {
    number: "02",
    icon: Terminal,
    title: "Add frontmatter",
    description:
      "Add the required title, version, and date fields. Description, tags, and images are optional.",
    code: "title: Your release title\nversion: v1.2.0\ndate: 2026-10-06",
  },
  {
    number: "03",
    icon: FileCode2,
    title: "Write the release notes",
    description:
      "Write the changelog content below the frontmatter using MDX. Start body headings at ##.",
    code: "## Added\n\n- New feature\n- Another improvement",
  },
  {
    number: "04",
    icon: ImageIcon,
    title: "Add images",
    description:
      "If your release needs screenshots or other visuals, place them inside the public/changelog directory.",
    code: "public/changelog/v1.2.0/cover.png",
  },
  {
    number: "05",
    icon: Terminal,
    title: "Test locally",
    description:
      "Run the development server and verify both the changelog list and your individual release page.",
    code: "npm run dev",
  },
  {
    number: "06",
    icon: Rocket,
    title: "Commit & deploy",
    description:
      "Commit your changes and deploy. Changelog pages are generated at build time.",
    code: "git add . && git commit -m \"docs: add v1.2.0 changelog\"",
  },
]

const frontmatter = `---
title: Faster Dashboard
description: Dashboard performance improvements.
version: v1.2.0
date: 2026-10-06
tags: [feature, performance]
image: /changelog/v1.2.0/cover.png
imageAlt: Faster dashboard
---`

const example = `---
title: Faster Dashboard
description: Dashboard performance improvements.
version: v1.2.0
date: 2026-10-06
tags: [feature, performance]
---

This release focuses on speed and reliability.

## Added

- Faster dashboard loading
- Improved search

## Fixed

- Fixed sidebar flickering`

function CodeBlock({
  children,
  filename,
}: {
  children: React.ReactNode
  filename?: string
}) {
  return (
    <div className="overflow-hidden rounded-xl border bg-zinc-950 text-zinc-100 shadow-sm">
      {filename && (
        <div className="border-b border-white/10 px-4 py-2.5 text-xs text-zinc-400">
          {filename}
        </div>
      )}

      <pre className="overflow-x-auto p-5 text-[13px] leading-6">
        <code>{children}</code>
      </pre>
    </div>
  )
}

function Section({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[280px_1fr] lg:px-8">
        <div>
          {eyebrow && (
            <p className="mb-3 text-sm font-medium text-muted-foreground">
              {eyebrow}
            </p>
          )}

          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>

          {description && (
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        <div>{children}</div>
      </div>
    </section>
  )
}

export default function ChangelogGuidePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="border-b">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:px-8 lg:py-32">
          <div className="mx-auto mb-6 flex size-11 items-center justify-center rounded-xl border bg-muted">
            <FileCode2 className="size-5" />
          </div>

          <p className="mb-4 text-sm font-medium text-muted-foreground">
            CONTRIBUTOR GUIDE
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Changelog authoring guide
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Everything you need to create, edit, preview, and publish
            changelog entries for this project.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#quick-start"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              Get started
              <ArrowRight className="size-4" />
            </a>

            <Link
              href="https://github.com/your-org/your-project/tree/main/content/changelog"
              className="inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-medium transition-colors hover:bg-muted"
            >
              View changelog files
            </Link>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section id="quick-start" className="border-b">
        <div className="mx-auto grid max-w-6xl gap-px bg-border px-6 lg:grid-cols-3 lg:px-8">
          <div className="bg-background px-6 py-8">
            <FolderOpen className="mb-4 size-5" />
            <p className="text-sm font-medium">Content directory</p>
            <code className="mt-2 block text-sm text-muted-foreground">
              content/changelog/
            </code>
          </div>

          <div className="bg-background px-6 py-8">
            <FileCode2 className="mb-4 size-5" />
            <p className="text-sm font-medium">File format</p>
            <code className="mt-2 block text-sm text-muted-foreground">
              *.mdx
            </code>
          </div>

          <div className="bg-background px-6 py-8">
            <GitBranch className="mb-4 size-5" />
            <p className="text-sm font-medium">Publishing</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Build / redeploy required
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <Section
        eyebrow="01 / WORKFLOW"
        title="How it works"
        description="A changelog entry is just an MDX file. The system handles the rest."
      >
        <div className="space-y-4">
          {steps.map((step) => {
            const Icon = step.icon

            return (
              <div
                key={step.number}
                className="group rounded-xl border p-5 transition-colors hover:bg-muted/40"
              >
                <div className="flex gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border bg-muted">
                    <Icon className="size-4" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-muted-foreground">
                        {step.number}
                      </span>

                      <h3 className="font-medium">{step.title}</h3>
                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>

                    <pre className="mt-4 overflow-x-auto rounded-lg bg-muted px-4 py-3 text-xs leading-5">
                      <code>{step.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Section>

      {/* File naming */}
      <Section
        eyebrow="02 / FILES"
        title="File naming"
        description="The filename becomes the public changelog URL, so treat it as permanent."
      >
        <div className="space-y-5">
          <CodeBlock filename="content/changelog/v1.2.0.mdx">
            v1.2.0.mdx
          </CodeBlock>

          <div className="rounded-xl border p-5">
            <div className="flex gap-3">
              <Info className="mt-0.5 size-4 shrink-0" />

              <div className="space-y-2 text-sm leading-6">
                <p>
                  <strong>URL:</strong>{" "}
                  <code className="rounded bg-muted px-1.5 py-0.5">
                    /changelog/v1.2.0
                  </code>
                </p>

                <p className="text-muted-foreground">
                  Use lowercase filenames with no spaces. Hyphens and dots are
                  fine.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border p-4">
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                GOOD
              </p>

              <div className="space-y-1 font-mono text-sm">
                <p>v1.2.0.mdx</p>
                <p>v2.0.0-beta.1.mdx</p>
                <p>2026-10-launch.mdx</p>
              </div>
            </div>

            <div className="rounded-xl border p-4">
              <p className="mb-2 text-xs font-medium text-muted-foreground">
                AVOID
              </p>

              <div className="space-y-1 font-mono text-sm text-muted-foreground">
                <p>Version 1.2.mdx</p>
                <p>release notes.mdx</p>
                <p>ReleaseNotes.mdx</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Frontmatter */}
      <Section
        eyebrow="03 / FRONTMATTER"
        title="Required metadata"
        description="Every changelog entry needs title, version, and date."
      >
        <div className="space-y-6">
          <CodeBlock filename="v1.2.0.mdx">{frontmatter}</CodeBlock>

          <div className="overflow-hidden rounded-xl border">
            <div className="grid grid-cols-[1fr_auto] border-b bg-muted/40 px-4 py-3 text-xs font-medium">
              <span>Field</span>
              <span>Required</span>
            </div>

            {[
              ["title", "Yes"],
              ["version", "Yes"],
              ["date", "Yes"],
              ["description", "Recommended"],
              ["tags", "Optional"],
              ["image", "Optional"],
              ["imageAlt", "Optional"],
            ].map(([field, required]) => (
              <div
                key={field}
                className="grid grid-cols-[1fr_auto] border-b px-4 py-3 text-sm last:border-0"
              >
                <code>{field}</code>
                <span className="text-muted-foreground">{required}</span>
              </div>
            ))}
          </div>

          <div className="rounded-xl border p-5">
            <div className="flex gap-3">
              <TriangleAlert className="mt-0.5 size-4 shrink-0" />

              <p className="text-sm leading-6 text-muted-foreground">
                Missing a mandatory field or using an invalid date causes the
                build to fail. This prevents broken changelog entries from
                reaching production.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Writing */}
      <Section
        eyebrow="04 / CONTENT"
        title="Write the release notes"
        description="Everything below the closing frontmatter delimiter is rendered as MDX."
      >
        <div className="space-y-6">
          <CodeBlock filename="v1.2.0.mdx">{example}</CodeBlock>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              "Use ## for the first body heading",
              "Use consistent sections such as Added, Improved, Fixed",
              "Markdown formatting is supported",
              "Links and tables are supported",
              "Code blocks are supported",
              "MDX syntax is supported",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-lg border p-4 text-sm"
              >
                <Check className="mt-0.5 size-4 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Images */}
      <Section
        eyebrow="05 / IMAGES"
        title="Add release images"
        description="Store changelog images under public/changelog/<version>/."
      >
        <div className="space-y-6">
          <CodeBlock filename="Project structure">
            {`public/
└── changelog/
    └── v1.2.0/
        ├── cover.png
        ├── dashboard.png
        └── invite.png`}
          </CodeBlock>

          <CodeBlock filename="v1.2.0.mdx">
            {`---
image: /changelog/v1.2.0/cover.png
imageAlt: The redesigned dashboard
---

![Dashboard redesign](/changelog/v1.2.0/dashboard.png)`}
          </CodeBlock>

          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border p-4">
              <p className="text-sm font-medium">Recommended ratio</p>
              <p className="mt-1 text-sm text-muted-foreground">16:9</p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm font-medium">Formats</p>
              <p className="mt-1 text-sm text-muted-foreground">
                WebP or PNG
              </p>
            </div>

            <div className="rounded-xl border p-4">
              <p className="text-sm font-medium">Target size</p>
              <p className="mt-1 text-sm text-muted-foreground">
                ~500 KB or less
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* MDX gotchas */}
      <Section
        eyebrow="06 / MDX"
        title="Avoid common MDX errors"
        description="MDX is stricter than regular Markdown because it also parses JSX and JavaScript expressions."
      >
        <div className="space-y-3">
          {[
            {
              bad: "{id}",
              good: "`{id}`",
              description: "Curly braces are interpreted as expressions.",
            },
            {
              bad: "<something>",
              good: "`<something>`",
              description: "Angle brackets can be interpreted as JSX.",
            },
            {
              bad: "<br>",
              good: "<br />",
              description: "JSX tags must be properly closed.",
            },
            {
              bad: "title: Performance: 60% faster",
              good: 'title: "Performance: 60% faster"',
              description: "Quote YAML values containing a colon.",
            },
          ].map((item) => (
            <div
              key={item.bad}
              className="rounded-xl border p-5"
            >
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div>
                  <p className="mb-1 text-[11px] font-medium text-muted-foreground">
                    AVOID
                  </p>
                  <code className="block rounded-lg bg-muted px-3 py-2 text-xs">
                    {item.bad}
                  </code>
                </div>

                <div>
                  <p className="mb-1 text-[11px] font-medium text-muted-foreground">
                    USE
                  </p>
                  <code className="block rounded-lg bg-muted px-3 py-2 text-xs">
                    {item.good}
                  </code>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Checklist */}
      <Section
        eyebrow="07 / PUBLISH"
        title="Before you publish"
        description="Use this checklist before opening your pull request."
      >
        <div className="rounded-xl border p-6">
          <div className="space-y-4">
            {[
              "title, version, and date are present",
              "date uses YYYY-MM-DD format",
              "filename is lowercase and stable",
              "description is filled in",
              "body starts with ##, not #",
              "all images have meaningful alt text",
              "image paths start with /",
              "the changelog page works locally",
              "the individual release page works locally",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm">
                <div className="flex size-5 items-center justify-center rounded-full border">
                  <Check className="size-3" />
                </div>

                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="border-t">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Ready to add a changelog entry?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground">
            Create an MDX file, follow the guide, test it locally, and submit
            your changes.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="https://github.com/your-org/your-project/tree/main/content/changelog"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-4 text-sm font-medium text-background"
            >
              Open changelog directory
              <ArrowRight className="size-4" />
            </Link>

            <Link
              href="/changelog"
              className="inline-flex h-10 items-center gap-2 rounded-md border px-4 text-sm font-medium hover:bg-muted"
            >
              View changelog
              <ChevronRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}