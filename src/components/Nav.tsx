import DesktopNav from "./ui/desktop-nav";
import MobileMenu from "./ui/mobile-menu";

export default function Nav() {
  return (
    <header className="sticky top-3 z-40">
      <div className="container-narrow pb-4">
        <DesktopNav />
        <MobileMenu />
      </div>
    </header>
  );
}