import Image from "next/image";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";

export const changelogMdxComponents: MDXRemoteProps["components"] = {
  img: ({ src, alt }) => {
    if (!src || typeof src !== "string") return null;

    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={1600}
        height={900}
        sizes="(min-width: 768px) 768px, 100vw"
        className="h-auto w-full rounded-lg border"
      />
    );
  },
};