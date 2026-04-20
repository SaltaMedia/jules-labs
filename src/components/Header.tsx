import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 glassify">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/Jules%20Labs%20White%20Hero.svg"
            alt="Jules Labs"
            width={1419}
            height={395}
            className="h-8 w-auto"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/#about" className="hover:text-white transition">About</Link>
          <Link href="/#products" className="hover:text-white transition">Products</Link>
          <a
            href="mailto:steve@juleslabs.com"
            className="hover:text-white transition"
          >
            Contact
          </a>
        </nav>
        <div className="md:hidden">
          <button className="text-white/80 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
