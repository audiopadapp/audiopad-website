"use client";

import { useEffect, useState } from "react";
import { Windows, Linux } from "@/components/icons";
import Link from "next/link";
import { Button, type ButtonProps } from "./button";
import { DownloadIcon } from "lucide-react";


interface DownloadButtonProps {
    size?: ButtonProps["size"],
    labelOs?: boolean,
    className?: string,
}

type OS = "windows" | "linux" | "unknown";

function detectOS(): OS {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes("win")) return "windows";
    if (ua.includes("linux")) return "linux";
    return "unknown";
}

export default function DownloadButton({
    size="default",
    labelOs = false,
    className = "",
}: DownloadButtonProps) {
    // Always render real content — never null. This is what SSR/crawlers see.
    const [os, setOS] = useState<OS>("unknown");

    useEffect(() => {
        setOS(detectOS());
    }, []);

    const Icon = os === "windows" ? Windows : os === "linux" ? Linux : DownloadIcon;
    const osLabel = os === "windows" ? "Windows" : os === "linux" ? "Linux" : "";

    return (
        <Link href="/download" prefetch>
            <Button size={size} className={className}>
                <Icon className="h-4 w-4" />
                Download
                {labelOs && osLabel ? ` for ${osLabel}` : ""}
            </Button>
        </Link>
    );
}