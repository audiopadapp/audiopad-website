import Link from "next/link";

export default function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">{title}</div>
      <ul className="space-y-2">
        {links.map(([label, href]) => {
          const isExternal = href.startsWith("http");
          return (
            <li key={label}>
              {isExternal ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 transition-colors hover:text-foreground font-sans"
                >
                  {label}
                </a>
              ) : (
                <Link
                  href={href}
                  className="text-foreground/80 transition-colors hover:text-foreground font-sans"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
