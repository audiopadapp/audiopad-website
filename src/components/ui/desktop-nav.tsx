import Link from "next/link";
import Logo from "../Logo";
import PatreonButton from "../PatreonButton";

import GithubStars from "./github-stars";
import DownloadButton from "./download-button";

const links = [
  { href: "/", label: "Home" },
  { href: "/download", label: "Download" },
  { href: "/story", label: "Our Story" },
  { href: "/changelog", label: "Changelog" },
  { href: "/contribute", label: "Contribute" },
  { href: "/press", label: "Brand Kit" },
];

export default function DesktopNav() {
  return (
    <div className="hidden md:flex h-14 items-center justify-between rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm px-4 shadow-sm">

      <Link href="/">
        <Logo />
      </Link>

      <nav className="flex items-center gap-5 lg:gap-7">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-ink-soft hover:text-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-2">
        <PatreonButton variant="minimal" />
        <GithubStars />
        <DownloadButton />
      </div>

    </div>
  );
}