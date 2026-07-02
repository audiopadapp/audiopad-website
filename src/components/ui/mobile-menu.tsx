"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { Menu, X } from "lucide-react";


const links = [
    { href: "/", label: "Home" },
    { href: "/story", label: "Our Story" },
    { href: "/download", label: "Download" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className="md:hidden flex h-14 items-center justify-between rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm px-4 shadow-sm">

                <Link href="/">
                    <Logo />
                </Link>

                <button
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? <X /> : <Menu />}
                </button>

            </div>

            {open && (
                <div className="md:hidden mt-3 rounded-xl border border-border/70 bg-background/90">

                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href="/download"
                        className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-foreground px-3.5 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
                    >
                        Download
                    </Link>

                </div>
            )}
        </>
    );
}