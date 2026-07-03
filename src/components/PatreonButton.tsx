import { Patreon } from "./icons";

export default function PatreonButton({
  variant = "default",
}: {
  variant?: "default" | "outline" | "minimal";
}) {
  const baseClasses =
    "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-all font-sans";

  if (variant === "outline") {
    return (
      <a
        href="https://www.patreon.com/cw/audiopad_oss"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${baseClasses}
          border border-[#FF424D]/30 bg-background text-[#FF424D]
          hover:bg-[#FF424D]/5 hover:border-[#FF424D]/50
        `}
      >
        <Patreon className="h-4 w-4" />
        Support on Patreon
      </a>
    );
  }

  if (variant === "minimal") {
    return (
      <a
        href="https://www.patreon.com/cw/audiopad_oss"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-[#FF424D] font-sans"
      >
        <Patreon className="h-4 w-4" />
        Become a Patron
      </a>
    );
  }

  // Default variant (unique gradient design)
  return (
    <a
      href="https://www.patreon.com/cw/audiopad_oss"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        ${baseClasses}
        relative overflow-hidden
        bg-gradient-to-r from-[#FF424D] via-[#FF6B74] to-[#FF424D]
        bg-[length:200%_100%]
        text-white
        shadow-sm
        hover:bg-[length:100%_100%] hover:-translate-y-0.5 hover:shadow-md
        transition-all duration-300
      `}
    >
      <div className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity" />
      <Patreon className="h-4 w-4 relative z-10" />
      <span className="relative z-10">Support AudioPad</span>
    </a>
  );
}
