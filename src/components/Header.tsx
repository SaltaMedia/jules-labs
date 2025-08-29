import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 glassify">
      <div className="mx-auto max-w-6xl px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Jules Labs" width={140} height={37} className="h-8 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <Link href="/#about" className="hover:text-white transition">About</Link>
          <Link href="/#philosophy" className="hover:text-white transition">Philosophy</Link>
          <Link href="/#jules" className="hover:text-white transition">Jules</Link>
          <Link href="/team" className="hover:text-white transition">Team</Link>
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
