import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";

export default function Home() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <Image src="/logo-white.svg" alt="Jules Labs" width={180} height={48} priority />
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              AI that gets you off your phone and into your life.
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
              We build emotionally intelligent tools that help men navigate the real world
              with confidence and clarity. We start with style.
            </p>
            <CTAButton href="/jules" label="Meet Jules" variant="light" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section bg="white" id="about" title="About Jules Labs"
        subtitle="Human-first AI that guides, not distracts.">
        <p className="max-w-3xl">
          Jules Labs builds tools that support, sharpen, and challenge men to show up in the real world.
          Our flagship, Jules:Style, focuses on appearance and presence as a practical on-ramp to confidence.
        </p>
      </Section>

      {/* Philosophy */}
      <Section bg="grey" id="philosophy" title="Our Philosophy">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-lg">
          <li>Guide, don't coddle</li>
          <li>Connection over escapism</li>
          <li>Growth over comfort</li>
          <li>Minimalism with edge</li>
        </ul>
        <p className="mt-4 font-medium">
          We build guides, not girlfriends.
        </p>
      </Section>

      {/* Product */}
      <Section bg="white" id="jules" title="Jules:Style">
        <p className="max-w-3xl">
          Your personal AI stylist. Outfit advice, closet logging, image feedback, and daily touchpoints that
          build taste and confidence. The goal isn't screen time. It's real-world presence.
        </p>
        <div className="mt-6">
          <CTAButton href="/jules" label="Meet Jules" />
        </div>
      </Section>

      {/* Team */}
      <Section bg="grey" id="team" title="Team">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TeamCard name="Steve Salta" role="Co-Founder & CEO"
            blurb="Builder of products that put humanity at the center of technology." />
          <TeamCard name="Co-Founder" role="Product"
            blurb="Entrepreneur & product strategist focused on real-world AI." />
          <TeamCard name="Chief Medical Officer" role="MD"
            blurb="Physician and mental-health advocate guiding evidence-based design." />
        </div>
      </Section>

      {/* Stands Against */}
      <Section bg="white" id="stance" title="What We Stand Against">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div>🚫 AI girlfriends that replace connection</div>
          <div>🚫 Fast-fashion hype cycles</div>
          <div>🚫 Rage-bait communities</div>
          <div>🚫 Empty "just be confident" advice</div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-slateBlue text-white">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="opacity-90">© {new Date().getFullYear()} Jules Labs</span>
          <nav className="flex gap-6 opacity-90">
            <a href="/terms">Terms</a>
            <a href="/privacy">Privacy</a>
            <a href="/contact">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
