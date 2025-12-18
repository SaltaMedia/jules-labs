import Link from "next/link";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";
import { TeamCard } from "@/components/TeamCard";

export default function Team() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Meet the Team
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
              The people behind Jules Labs
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <Section id="team" title="Team" bg="gradient4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TeamCard
            name="Steve Salta"
            role="Founder"
            bio="Steve is a business development leader and entrepreneur with a track record of scaling ventures at the intersection of technology, wellness, and culture. Before starting Jules Labs, he worked across multiple B2C and enterprise companies in Business/Corporate Development, Growth, Marketing, and operation. Drawing on his experience, he founded Jules Labs to build AI products that don't isolate men, but help them show up sharper and more confident in the real world."
            linkedinUrl="https://www.linkedin.com/in/stevesalta"
            imageSrc="/steve-salta.png"
            initials="SS"
            gradientClass="bg-gradient-to-br from-pink-500 to-purple-600"
          />

          <TeamCard
            name="Michelle Salta"
            role="Co-Founder"
            bio="When Michelle is not leading video strategy at Hitachi Ventara, she's contributing to Jules Labs Branding, Marketing, Positioning, and product approach. Drawing on her years of experience in entertainment and video, she helps create compelling stories, driving the product creation and positioning."
            linkedinUrl="https://www.linkedin.com/in/michellesalta/"
            imageSrc="/michelle-salta.png"
            initials="MS"
            gradientClass="bg-gradient-to-br from-purple-500 to-blue-600"
          />

          <TeamCard
            name="Matthew Boland, Ph.D."
            role="Chief Medical Officer"
            bio="Matt is a licensed Psychologist and Ph.D. focusing on clinical psychopathology, dissemination of empirically-supported mental health information, and experimental and predictive research. He helps guide Jules Labs from a clinical perspective."
            linkedinUrl="https://www.linkedin.com/in/matthew-boland-ph-d-9b527113/"
            imageSrc="/matthew-boland.png"
            initials="MB"
            gradientClass="bg-gradient-to-br from-blue-500 to-indigo-600"
          />
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm text-white/50">
            <p>&copy; 2025 Jules Labs. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="https://www.juleslabs.com/terms" className="hover:text-white transition">Terms</Link>
              <Link href="https://www.juleslabs.com/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
