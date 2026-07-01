import Link from "next/link";

type LogoProps = {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  monogram?: boolean;
};

export default function Logo({ className = "", size = "md", monogram = false }: LogoProps) {
  const sizes = {
    sm: { icon: "w-5 h-5", text: "text-lg" },
    md: { icon: "w-6 h-6", text: "text-[1.35rem]" },
    lg: { icon: "w-10 h-10", text: "text-2xl" },
    xl: { icon: "w-16 h-16", text: "text-4xl" },
    "2xl": { icon: "w-24 h-24", text: "text-5xl" },
  };

  const currentSize = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className={currentSize.icon}
      >
        <rect x="2" y="10" width="2.4" height="4" rx="1.2" fill="currentColor" />
        <rect x="6" y="7" width="2.4" height="10" rx="1.2" fill="currentColor" />
        <rect x="10" y="3" width="2.4" height="18" rx="1.2" fill="currentColor" />
        <rect x="14" y="7" width="2.4" height="10" rx="1.2" fill="currentColor" />
        <rect x="18" y="10" width="2.4" height="4" rx="1.2" fill="currentColor" />
      </svg>
      {!monogram && (
        <span className={`font-serif leading-none tracking-tight ${currentSize.text}`}>
          AudioPad
        </span>
      )}
    </div>
  );
}
