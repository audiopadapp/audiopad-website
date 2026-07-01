import Link from "next/link";
import Logo from "@/components/Logo";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans pt-3">
      <Nav />
      <main className="mt-14 flex flex-col items-center justify-center py-16 sm:py-24">
        <div className="text-center">
          {/* Large, clear monogram logo */}
          <div className="mb-8">
            <Logo className="justify-center" size="2xl" monogram />
          </div>

          <h1 className="font-serif text-6xl sm:text-8xl tracking-tight text-foreground mb-4">
            404
          </h1>
          <p className="text-lg sm:text-xl text-ink-soft mb-8">
            Oops! This page doesn&apos;t exist.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 font-sans"
          >
            Go back home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
