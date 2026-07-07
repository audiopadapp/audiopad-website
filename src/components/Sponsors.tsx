import { Plus, Trophy, Heart, HeartHandshake, Star, Zap } from "lucide-react";

type Sponsor = {
  name: string;
  logoUrl?: string;
  url: string;
  tier: "platinum" | "gold" | "bronze";
};

const patreonSponsors: Sponsor[] = [
  {
    name: "Sendit",
    logoUrl: "/sponsors/sendit.png",
    url: "#",
    tier: "platinum",
  },
   {
    name: "Pyzit",
    logoUrl: "/sponsors/pyzit.png",
    url: "#",
    tier: "gold",
  },
  {
    name: "Wajahat",
    logoUrl: "/sponsors/wajahat.png",
    url: "#",
    tier: "bronze",
  },
];

const tierConfig = {
  platinum: {
    label: "Platinum Sponsors",
    icon: Heart,
    color: "text-pink-600 fill-pink-600",
    logoSize: "h-20 max-w-48",
  },
  gold: {
    label: "Gold Sponsors",
    icon: Heart,
    color: "text-yellow-500 fill-yellow-500",
    logoSize: "h-14 max-w-36",
  },
  bronze: {
    label: "Bronze Sponsors",
    icon: Heart,
    color: "text-amber-600 fill-amber-600",
    logoSize: "h-10 max-w-28",
  },
};

const Tooltip = ({ children, text }: { children: React.ReactNode; text: string }) => (
  <div className="group relative inline-block">
    {children}
    <div className="pointer-events-none absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:opacity-100 z-50">
      <div className="rounded-lg bg-foreground px-3 py-1.5 text-xs font-medium text-background whitespace-nowrap">
        {text}
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
      </div>
    </div>
  </div>
);

const PlaceholderButton = () => (
  <Tooltip text="Become a Sponsor">
    <a
      href="https://www.patreon.com/cw/audiopad_oss/membership"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center p-2 transition-all"
      aria-label="Become a sponsor on Patreon"
    >
      <div className="flex items-center justify-center h-12 w-12 rounded-full border-2 border-dashed border-border hover:border-moss transition-colors">
        <Plus className="h-5 w-5 text-ink-soft group-hover:text-moss transition-colors" />
      </div>
    </a>
  </Tooltip>
);

const SponsorLogo = ({ sponsor, logoSize }: { sponsor: Sponsor; logoSize: string }) => (
  <Tooltip text={sponsor.name}>
    <a
      href={sponsor.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-center transition-all"
    >
      {sponsor.logoUrl ? (
        <img
          src={sponsor.logoUrl}
          alt={sponsor.name}
          className={`${logoSize} object-contain group-hover:scale-110`}
        />
      ) : (
        <div className="flex items-center justify-center">
          <span className="font-serif text-lg text-ink-soft whitespace-nowrap">{sponsor.name}</span>
        </div>
      )}
    </a>
  </Tooltip>
);

export default function Sponsors() {
  const platinumSponsors = patreonSponsors.filter((s) => s.tier === "platinum");
  const goldSponsors = patreonSponsors.filter((s) => s.tier === "gold");
  const bronzeSponsors = patreonSponsors.filter((s) => s.tier === "bronze");

  const TierSection = ({
    tier,
    sponsors,
  }: {
    tier: "platinum" | "gold" | "bronze";
    sponsors: Sponsor[];
  }) => {
    const config = tierConfig[tier];
    const Icon = config.icon;

    return (
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          <h2 className="font-serif text-2xl sm:text-3xl text-foreground flex items-center gap-2">
            <Icon className={`h-6 w-6 ${config.color}`} />
            {config.label}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-border to-transparent" />
        </div>
        <div className="flex flex-wrap items-center gap-6 md:gap-8">
          {sponsors.map((sponsor, idx) => (
            <SponsorLogo key={`${tier}-${idx}`} sponsor={sponsor} logoSize={config.logoSize} />
          ))}
          <PlaceholderButton />
        </div>
      </div>
    );
  };

  return (
    <section className="container-narrow py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs text-ink-soft font-mono mb-6">
          <Heart className="h-3 w-3 text-pink-500 fill-pink-500" />
          <span>Support Open Source</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl tracking-tight text-foreground mb-6">
          The Awesome People Who Make This Possible
        </h1>
        <p className="text-lg text-ink-soft font-sans">
          AudioPad exists because of the incredible support from our community. A huge thank you to
          everyone who&apos;s contributed, sponsored, or just told a friend about us!
        </p>
      </div>

      <TierSection tier="platinum" sponsors={platinumSponsors} />
      <TierSection tier="gold" sponsors={goldSponsors} />
      <TierSection tier="bronze" sponsors={bronzeSponsors} />

      {/* CTA Section */}
      <div className="mt-16 rounded-3xl border border-border bg-gradient-to-br from-moss/10 via-accent to-purple-50 p-8 sm:p-12 text-center">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-4">
          Want to Be Part of the Story?
        </h2>
        <p className="text-lg text-ink-soft font-sans max-w-2xl mx-auto mb-8">
          Support AudioPad on Patreon and help keep this project free and open for everyone!
        </p>
        <a
          href="https://www.patreon.com/cw/audiopad_oss"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#FF424D] via-[#FF6B74] to-[#FF424D] bg-[length:200%_100%] px-6 py-3 text-sm font-medium text-background transition-all hover:bg-[length:100%_100%] hover:-translate-y-0.5 hover:shadow-md"
        >
          Support on Patreon
        </a>
      </div>
    </section>
  );
}
