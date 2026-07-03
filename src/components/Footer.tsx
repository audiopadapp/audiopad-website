import Logo from "./Logo";
import FooterCol from "./FooterCol";
import VercelLogo from "./icons/VercelLogo";
import FooterTooltip from "./ui/footer-tooltip";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t bg-background p-12 pb-0">
      <div className="container-narrow py-12 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-start lg:items-center">
          <div className="max-w-sm">
            <Logo />

            <p className="mt-4 text-sm leading-relaxed text-ink-soft font-sans">
              A free, open-source soundboard for everyone who lives in voice
              chat.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-6 text-sm sm:gap-x-16">
            <FooterCol
              title="Product"
              links={[
                ["Our Story", "/story"],
                ["Pricing", "/pricing"],
                ["Press", "/press"],
                ["Download", "/download"],
              ]}
            />

            <FooterCol
        title="Project"
        links={[
          ["GitHub", "https://github.com/audiopadapp/audiopad"],
          ["Patreon", "https://www.patreon.com/cw/audiopad_oss"],
        ]}
      />
          </div>
        </div>

        <div className="mt-12 p-1 flex flex-col items-start justify-between gap-4 border-t border-border text-xs text-ink-soft sm:mt-16 sm:flex-row sm:items-center">
          <span className="font-mono">
            © {year} AudioPad · GNU GPLv3 LICENSE
          </span>

          <div className="flex items-center gap-5">
            <a
              href="https://vercel.com?utm_source=audiopad&utm_campaign=oss"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-foreground"
            >
              <span className="text-sm font-sans">
                Hosted by
              </span>
              <VercelLogo className="h-5 w-5" />
            </a>
            <FooterTooltip />
          </div>
        </div>
      </div>
    </footer>
  );
}