import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 glassify">
      <div className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center opacity-95 transition hover:opacity-100">
          <Image
            src="/Jules%20Labs%20White%20Hero.svg"
            alt="Jules Labs"
            width={1419}
            height={395}
            className="h-7 w-auto md:h-8"
          />
        </Link>
        <nav className="hidden items-center gap-8 text-[0.95rem] text-white/68 md:flex">
          <Link href="/#about" className="transition hover:text-white">About</Link>
          <Link href="/#products" className="transition hover:text-white">Products</Link>
          <a
            href="mailto:steve@juleslabs.com"
            className="secondary-button px-4 py-2 text-[0.9rem]"
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
