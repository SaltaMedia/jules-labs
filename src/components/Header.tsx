export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 h-14 flex items-center justify-between">
        <a href="/" className="font-medium">Jules Labs</a>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#about">About</a>
          <a href="#philosophy">Philosophy</a>
          <a href="#jules">Jules</a>
          <a href="#team">Team</a>
        </nav>
      </div>
    </header>
  );
}
