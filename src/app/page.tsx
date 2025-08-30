import Image from "next/image";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function Home() {
  // Helper function to get the correct Jules URL based on environment
  const getJulesUrl = () => {
    if (process.env.NODE_ENV === 'development') {
      return 'http://localhost:3001';
    }
    return 'https://app.juleslabs.com';
  };

  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="text-white pb-16">
        <div className="mx-auto max-w-6xl px-6 py-32">
          <div className="flex flex-col items-center text-center gap-8">
            <Image src="/logo.svg" alt="Jules Labs" width={480} height={128} priority className="mb-8" />
            <p className="max-w-3xl text-xl md:text-2xl opacity-90 leading-relaxed">
              We build emotionally intelligent tools that help men navigate the real world with confidence and clarity.
            </p>
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
            Our flagship product, Jules, is a modern AI wingwoman and stylist built to elevate, not replace, human experience. Jules acts as your personal stylist, to help you show up looking and feeling your best in social situations.
          </p>
          <div className="mt-8">
            <a href={getJulesUrl()} className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-medium transition bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg">
              MEET JULES
            </a>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section id="philosophy" title="Our Philosophy" bg="gradient2">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <p className="text-lg text-white/90 leading-relaxed">
            We believe technology should enhance a person&apos;s experience in the real world, not replace it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-pink-500/40 to-purple-600/40 rounded-2xl p-8 text-center border border-pink-500/50 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white text-lg">Prioritize connection over escapism</h3>
          </div>
          <div className="bg-gradient-to-br from-purple-500/40 to-blue-600/40 rounded-2xl p-8 text-center border border-purple-500/50 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white text-lg">Guide, don&apos;t coddle</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-500/40 to-indigo-600/40 rounded-2xl p-8 text-center border border-blue-500/50 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white text-lg">Emphasize growth over comfort</h3>
          </div>
          <div className="bg-gradient-to-br from-indigo-500/40 to-purple-600/40 rounded-2xl p-8 text-center border border-indigo-500/50 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white text-lg">Build positive habits that improve self-confidence and happiness</h3>
          </div>
          <div className="bg-gradient-to-br from-pink-500/40 to-indigo-600/40 rounded-2xl p-8 text-center border border-pink-500/50 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white text-lg">Create meaningful connections through shared experiences</h3>
          </div>
          <div className="bg-gradient-to-br from-emerald-500/40 to-teal-600/40 rounded-2xl p-8 text-center border border-emerald-500/50 shadow-xl hover:scale-105 transition-transform duration-300 backdrop-blur-sm">
            <h3 className="font-semibold mb-3 text-white text-lg">Built on real human expertise and professional insights from psychologists and stylists</h3>
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
            <h3 className="text-xl font-semibold">Your AI Wing-Woman for Style and Confidence</h3>

            <p className="text-lg leading-relaxed">
              Jules isn&apos;t another algorithm scraping the internet for trends or a ChatGPT wrapper. She&apos;s the first AI stylist trained by humans, guided by psychology, and shaped by real fashion experts.
            </p>

            <p className="text-lg leading-relaxed">
              She&apos;s here to do one thing: help men show up sharper and feel more confident in the moments that matter, whether that&apos;s work, dates, or everyday life.
            </p>

            <p className="text-lg leading-relaxed">
              Right now, Jules is in Beta, and we&apos;re inviting real guys to test, shape, and grow with her. This isn&apos;t a polished showroom demo. By joining now, you&apos;ll be part of the ground floor, giving feedback that makes Jules smarter and more personal every day.
            </p>

            <div className="mt-8">
              <a href={getJulesUrl()} className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-medium transition bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg">
                MEET JULES
              </a>
              <p className="mt-2 text-sm text-white/70">Join the beta</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm text-white/50">
            <p>&copy; 2024 Jules Labs. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <a href="/terms" className="hover:text-white transition">Terms</a>
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
