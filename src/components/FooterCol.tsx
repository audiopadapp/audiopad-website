import Link from "next/link";

export default function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">{title}</div>
      <ul className="space-y-2">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link href={href} className="text-foreground/80 transition-colors hover:text-foreground font-sans">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
