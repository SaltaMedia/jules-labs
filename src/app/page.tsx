import Image from "next/image";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function Home() {

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="text-white pb-16">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <Image src="/logo.svg" alt="Jules Labs" width={480} height={128} priority className="h-32 w-auto" />
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              AI for the Real World
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
              We build emotionally intelligent tools that help men navigate the real world with confidence and clarity.
            </p>
            <a href="#jules" className="inline-flex items-center text-xl font-medium text-blue-400 hover:text-blue-300 transition underline">
              Meet Jules
            </a>
          </div>
        </div>
        <div className="h-px bg-white/10 mx-auto max-w-6xl"></div>
      </section>

      {/* About */}
      <Section id="about" title="About Jules Labs" bg="gradient1">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            In a market flooded with AI that encourages escapism, Jules offers something different: a guide, not a girlfriend. Jules Labs is building emotionally intelligent, AI-powered tools to help men in confidently navigate their own path in the real world.
          </p>
          <p className="text-lg leading-relaxed">
            We&apos;re creating a human-first platform that supports, sharpens, and challenges users to express themselves, and build confidence to be themselves in real-world relationships and interactions.
          </p>
          <p className="text-lg leading-relaxed">
            Our flagship product, Jules (currently in beta), is a modern AI wingwoman built to elevate, not replace, human experience. Jules is tackling two main verticals: dating and style. Because how you show up is the first step toward confidence. Show up with intention, and everything shifts: how you feel, how you act, and how people respond.
          </p>

        </div>
      </Section>

      {/* Why Now */}
      <Section id="why-now" title="Why Now" subtitle="Men are lonelier and less connected than ever." bg="gradient3">
        <div className="max-w-6xl mx-auto">
          {/* Numbers in a line */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-6xl font-bold text-blue-400 mb-2">25%</div>
              <div className="text-white/80 text-sm">
                of U.S. men 15–34 felt lonely much of the previous day
              </div>
              <a 
                href="https://www.washingtonpost.com/nation/2025/05/21/lonely-young-american-men-poll/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="block mt-2 text-xs text-blue-300 hover:text-blue-200 underline"
              >
                Washington Post
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-purple-400 mb-2">44%</div>
              <div className="text-white/80 text-sm">
                of Gen Z men never dated as teens
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer noopener"
                className="block mt-2 text-xs text-purple-300 hover:text-purple-200 underline"
              >
                Source
              </a>
            </div>
            
            <div className="text-center">
              <div className="text-6xl font-bold text-red-400 mb-2">50%</div>
              <div className="text-white/80 text-sm">
                of young men say they&apos;d rather date an AI girlfriend than risk rejection from a human partner
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer noopener"
                className="block mt-2 text-xs text-red-300 hover:text-red-200 underline"
              >
                Reuters (2025)
              </a>
            </div>
          </div>

          {/* The Wrong Solution */}
          <div className="text-center max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-6">
              The Wrong Solution
            </h3>
            <p className="text-lg leading-relaxed text-white/90">
              Social media and AI &ldquo;girlfriends&rdquo; promise connection but deliver isolation. They feed false intimacy and keep men stuck in escape instead of building real confidence. Jules is built to break that cycle and bring men back to the real world, where strength, style, and connection are forged.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section id="philosophy" title="The Jules Labs Manifesto" bg="gradient2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          <div className="bg-slate-800 p-6 text-center border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="font-semibold text-white text-lg">Guide, don&apos;t coddle.</h3>
          </div>
          <div className="bg-slate-800 p-6 text-center border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="font-semibold text-white text-lg">Connection over escapism.</h3>
          </div>
          <div className="bg-slate-800 p-6 text-center border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="font-semibold text-white text-lg">Growth over comfort.</h3>
          </div>
          <div className="bg-slate-800 p-6 text-center border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="font-semibold text-white text-lg">Real world over virtual.</h3>
          </div>
          <div className="bg-slate-800 p-6 text-center border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="font-semibold text-white text-lg">Confidence through action.</h3>
          </div>
          <div className="bg-slate-800 p-6 text-center border-2 border-slate-700 hover:border-blue-500 transition-colors duration-300">
            <h3 className="font-semibold text-white text-lg">Human expertise over AI fantasy.</h3>
          </div>
        </div>
      </Section>

      {/* Jules Style */}
      <Section id="jules" bg="gradient3">
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-3xl md:text-4xl font-semibold">Meet </span>
            <Image src="/Jules_Logo_White_Final_NoOutline.png" alt="Jules" width={180} height={48} />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-lg leading-relaxed">
              Our first product is Jules.
            </p>

            <p className="text-lg leading-relaxed">
              She&apos;s not an AI girlfriend. She&apos;s not a replacement for real life. Jules is designed to help men build confidence where it matters most. She&apos;s trained by humans, guided by psychology, and shaped by real-world experiences.
            </p>

            <p className="text-lg leading-relaxed">
              We&apos;re starting with two verticals:
            </p>

            <div className="text-left max-w-2xl mx-auto space-y-4">
              <p className="text-lg leading-relaxed">
                <strong>Dating</strong> → Feedback on photos, profiles, and texts, plus guidance on showing up better for dates.
              </p>
              <p className="text-lg leading-relaxed">
                <strong>Style</strong> → Build confidence through how you dress and present yourself, informed by real stylists.
              </p>
            </div>

            <p className="text-lg leading-relaxed">
              Right now, Jules is in beta, and we&apos;re inviting real guys to test, shape, and grow with her. This isn&apos;t a polished showroom demo. By joining now, you&apos;ll be part of the ground floor, giving feedback that makes Jules smarter and more personal every day.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://dating.juleslabs.com" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-medium transition bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg">
                Try Jules for Dating
              </a>
              <a href="https://app.juleslabs.com" className="inline-flex items-center justify-center rounded-xl px-8 py-4 text-lg font-medium transition bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg">
                Try Jules for Style
              </a>
            </div>
          </div>
        </div>
      </Section>



      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm text-white/50">
            <p className="mb-4 text-white/70">
              Jules is an AI tool. Her guidance is for informational purposes only and should not replace professional advice. Use your own judgment before making decisions.
            </p>
            <p>&copy; 2026 Jules Labs. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <a href="https://www.juleslabs.com/terms" className="hover:text-white transition">Terms</a>
              <a href="https://www.juleslabs.com/privacy" className="hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

