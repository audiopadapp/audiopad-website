"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "../Logo";
import { Menu, X } from "lucide-react";

const links = [
    { href: "/", label: "Home" },
    { href: "/pricing", label: "Pricing" },
    { href: "/story", label: "Our Story" },
    { href: "/press", label: "Press" },
];

export default function MobileMenu() {
    const [open, setOpen] = useState(false);
    
    // Prevent body scrolling when menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [open]);

    return (
        <>
            <div className="md:hidden flex h-14 items-center justify-between rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm px-4 shadow-sm">

                <Link href="/">
                    <Logo />
                </Link>

                <button
                    onClick={() => setOpen((v) => !v)}
                    className="p-2 rounded-md hover:bg-surface transition-colors"
                    aria-label={open ? "Close menu" : "Open menu"}
                >
                    {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </button>

            </div>

            {/* Mobile Menu Dropdown */}
            <div
                className={`md:hidden mt-3 overflow-hidden transition-all duration-300 ease-out ${
                    open ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <div className="rounded-xl border border-border/70 bg-background/90 backdrop-blur-sm p-3 space-y-1">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground hover:bg-surface transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link
                            href="/download"
                            onClick={() => setOpen(false)}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-4 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
                        >
                            Download AudioPad
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}