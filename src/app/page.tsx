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
            Our flagship product, Jules (currently in beta), is a modern AI wingwoman and stylist built to elevate, not replace, human experience. Jules acts as your personal stylist, to help you show up looking and feeling your best in social situations.
          </p>

        </div>
      </Section>

      {/* Why Now */}
      <Section id="why-now" title="Why Now" subtitle="Men are lonelier and less connected than ever." bg="gradient3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left: Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {/* Stat Card 1 */}
            <div className="rounded-2xl border border-zinc-200 bg-white ring-1 ring-black/5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 p-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">25%</div>
              <div className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                of U.S. men 15–34 felt lonely much of the previous day
              </div>
              <a 
                href="https://www.washingtonpost.com/nation/2025/05/21/lonely-young-american-men-poll/" 
                target="_blank" 
                rel="noreferrer noopener"
                className="block mt-3 text-xs font-medium text-fuchsia-700 hover:text-fuchsia-800 underline underline-offset-4 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
              >
                Washington Post
              </a>
            </div>

            {/* Stat Card 2 */}
            <div className="rounded-2xl border border-zinc-200 bg-white ring-1 ring-black/5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 p-6">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">44%</div>
              <div className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                of Gen Z men never dated as teens
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer noopener"
                className="block mt-3 text-xs font-medium text-fuchsia-700 hover:text-fuchsia-800 underline underline-offset-4 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
              >
                Source {/* TODO: swap in a reputable primary source later */}
              </a>
            </div>

            {/* Stat Card 3 */}
            <div className="rounded-2xl border border-zinc-200 bg-white ring-1 ring-black/5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 p-6">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400">50%</div>
              <div className="mt-2 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                of young men say they&apos;d rather date an AI girlfriend than risk rejection from a human partner
              </div>
              <a 
                href="#" 
                target="_blank" 
                rel="noreferrer noopener"
                className="block mt-3 text-xs font-medium text-fuchsia-700 hover:text-fuchsia-800 underline underline-offset-4 dark:text-fuchsia-400 dark:hover:text-fuchsia-300"
              >
                Reuters (2025)
              </a>
            </div>
          </div>

          {/* Right: Narrative Panel */}
          <div className="rounded-2xl border border-zinc-200 bg-white ring-1 ring-black/5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 p-8">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 text-center">
              The Wrong Solution
            </h3>
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Social media and AI "girlfriends" promise connection, but deliver the opposite: shallow distractions that leave men lonelier and more dependent on what isn&apos;t real. Instead of teaching confidence and resilience, they offer comfort without growth.
            </p>
            
            <div className="mt-4 p-4 border-l-4 border-fuchsia-600 bg-zinc-800/70 text-sm italic text-zinc-200">
              *"Artificial intimacy programs derive some of their appeal from the fact that they come without the challenges and demands of human relationships. They offer companionship without judgment, drama, or social anxiety but lack genuine human emotion and offer only 'simulated empathy.'"* — Dr. Sherry Turkle, <a href="https://www.psychologytoday.com/us/blog/its-not-just-in-your-head/202408/the-dangers-of-ai-generated-romance" target="_blank" rel="noreferrer noopener" className="underline hover:text-zinc-100">*Psychology Today*</a>
            </div>
            
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              The tech that claims to cure loneliness is fueling it. It&apos;s feeding false intimacy and isolating men from the real-world experiences that build strength and connection.
            </p>
            
            <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              Jules exists to break that cycle. Not another escape, but a guide back into the real world. Jules is helping men look sharp, feel confident, make real connections, and show up better in their lives.
            </p>
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
            <h3 className="text-xl font-semibold">Your AI Wing-Woman for Style and Confidence (in beta)</h3>

            <p className="text-lg leading-relaxed">
              Jules isn&apos;t another algorithm scraping the internet for trends or a ChatGPT wrapper. She&apos;s the first AI stylist trained by humans, guided by psychology, and shaped by real fashion experts.
            </p>

            <p className="text-lg leading-relaxed">
              She&apos;s here to do one thing: help men show up sharper and feel more confident in the moments that matter, whether that&apos;s work, dates, or everyday life.
            </p>

            <p className="text-lg leading-relaxed">
              Right now, Jules is in beta, and we&apos;re inviting real guys to test, shape, and grow with her. This isn&apos;t a polished showroom demo. By joining now, you&apos;ll be part of the ground floor, giving feedback that makes Jules smarter and more personal every day.
            </p>

            <div className="mt-8">
              <a href={getJulesUrl()} className="inline-flex items-center rounded-xl px-8 py-4 text-lg font-medium transition bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg">
                Join Jules Beta Now
              </a>
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
