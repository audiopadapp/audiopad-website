import { Check, Minus } from "lucide-react";

export default function Cell({ value, positive = false }: { value: boolean | string; positive?: boolean }) {
  if (typeof value === "string") return <span className="font-sans">{value}</span>;
  if (value)
    return (
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${positive ? "bg-accent text-moss" : "bg-secondary text-foreground"}`}
      >
        <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
      </span>
    );
  return (
    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-ink-soft/60">
      <Minus className="h-3.5 w-3.5" />
    </span>
  );
}
