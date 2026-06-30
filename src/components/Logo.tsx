import Link from "next/link";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2"  y="10" width="2.4" height="4"  rx="1.2" fill="currentColor" />
        <rect x="6"  y="7"  width="2.4" height="10" rx="1.2" fill="currentColor" />
        <rect x="10" y="3"  width="2.4" height="18" rx="1.2" fill="currentColor" />
        <rect x="14" y="7"  width="2.4" height="10" rx="1.2" fill="currentColor" />
        <rect x="18" y="10" width="2.4" height="4"  rx="1.2" fill="currentColor" />
      </svg>
      <span className="font-serif text-[1.35rem] leading-none tracking-tight">AudioPad</span>
    </div>
  );
}
