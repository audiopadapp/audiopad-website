"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function FooterTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="cursor-help font-sans">
          Made by{" "}
          <del style={{ textDecorationColor: "red" }}>
            people
          </del>{" "}
          guy who 🫶 you silently.
        </span>
      </TooltipTrigger>

      <TooltipContent side="top">
        <p>Yeah... I can't scream it. 🤫</p>
      </TooltipContent>
    </Tooltip>
  );
}