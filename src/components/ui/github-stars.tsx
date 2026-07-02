import { Star } from "lucide-react";
import Link from "next/link";

import { Github } from "../icons";
import { getGithubStars } from "@/lib/github";

export default async function GithubStars() {
  const stars = await getGithubStars();

  return (
    <Link
      href="https://github.com/audiopadapp/audiopad"
      target="_blank"
      className="flex items-center gap-2 group"
    >
      <Github className="h-4 w-4" />

      <span>{stars.toLocaleString()}</span>

      <Star className="h-4 w-4 group-hover:fill-yellow-400 group-hover:text-yellow-400" />
    </Link>
  );
}