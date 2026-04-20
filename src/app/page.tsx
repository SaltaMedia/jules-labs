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
            <Image
              src="/Jules%20Labs%20White%20Hero.svg"
              alt="Jules Labs"
              width={1419}
              height={395}
              priority
              className="h-32 w-auto"
            />
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              AI-First Product Studio and Consultancy
            </h1>
            <p className="max-w-3xl text-lg opacity-90">
              We build AI products and systems for the real world across consumer, B2B, growth, partnerships, and applied AI.
            </p>
          </div>
        </div>
        <div className="h-px bg-white/10 mx-auto max-w-6xl"></div>
      </section>

      {/* About */}
      <Section id="about" title="About Jules Labs" bg="gradient1">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <p className="text-lg leading-relaxed">
            Jules Labs is an AI-first product studio and consultancy building products and systems for the real world. We work across consumer, B2B, growth, partnerships, and applied AI—building our own products while helping companies move faster with better tools, sharper strategy, and AI-native execution.
          </p>
          <p className="text-lg leading-relaxed">
            Our work spans product development, strategic partnerships, commercial growth, and applied AI systems designed to improve decision-making, opportunity sourcing, and execution.
          </p>
          <p className="text-lg leading-relaxed">
            From consumer products to AI-powered business systems, we focus on tools that are useful, personal, and grounded in real behavior.
          </p>
        </div>
      </Section>

      {/* Our Products */}
      <Section id="products" title="Our Products" bg="gradient3">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:p-8">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-3xl bg-white/10">
              <Image
                src="/Ask%20Jules%20V2%20App%20Icon.svg"
                alt="Ask Jules"
                width={112}
                height={112}
                className="h-28 w-28"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Ask Jules</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/85">
                Your AI guide for confidence, style, dating, and real-world self-presentation.
              </p>
            </div>
            <div className="md:flex md:shrink-0 md:justify-end">
              <a
                href="https://apps.apple.com/us/app/ask-jules/id6756280983"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 md:w-auto md:min-w-40"
              >
                Download
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:p-8">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-slate-900 text-center text-base font-semibold text-white">
              Jules Atlas
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Jules Atlas</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/85">
                A partnership intelligence system for identifying, prioritizing, and acting on strategic growth opportunities.
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Status: In beta
              </p>
            </div>
            <div className="md:flex md:shrink-0 md:justify-end">
              <a
                href="mailto:steve@juleslabs.com?subject=Jules%20Atlas%20Demo"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 md:w-auto md:min-w-40"
              >
                Request Demo
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 md:flex-row md:items-center md:p-8">
            <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-3xl border border-white/15 bg-slate-900 text-center text-base font-semibold text-white">
              Jules Jobs
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">Jules Jobs</h3>
              <p className="mt-3 text-lg leading-relaxed text-white/85">
                An AI-powered job search and positioning tool that aggregates relevant roles, surfaces targets, and helps users sharpen their angle.
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60">
                Status: In development
              </p>
            </div>
            <div className="md:flex md:shrink-0 md:justify-end">
              <a
                href="mailto:steve@juleslabs.com?subject=Jules%20Jobs%20Early%20Access"
                className="inline-flex w-full items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400 md:w-auto md:min-w-40"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Consulting */}
      <Section id="consulting" title="Consulting" bg="gradient4">
        <div className="max-w-5xl mx-auto">
          <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/85">
            We help companies design and apply AI systems for growth, partnerships, and product strategy.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex min-h-36 items-center justify-center rounded-3xl border border-blue-300/20 bg-blue-500/10 p-6 text-center backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">AI product strategy</h3>
            </div>
            <div className="flex min-h-36 items-center justify-center rounded-3xl border border-blue-300/20 bg-blue-500/10 p-6 text-center backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">Growth systems, User Acquisition and Experimentation</h3>
            </div>
            <div className="flex min-h-36 items-center justify-center rounded-3xl border border-blue-300/20 bg-blue-500/10 p-6 text-center backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">Partnership and Business Development</h3>
            </div>
            <div className="flex min-h-36 items-center justify-center rounded-3xl border border-blue-300/20 bg-blue-500/10 p-6 text-center backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white">Messaging, Positioning, and Commercialization</h3>
            </div>
            <div className="flex min-h-36 items-center justify-center rounded-3xl border border-blue-300/20 bg-blue-500/10 p-6 text-center backdrop-blur-sm md:col-span-2 md:mx-auto md:w-[calc(50%-0.5rem)]">
              <h3 className="text-xl font-semibold text-white">Opportunity Analysis and Decision Support</h3>
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href="mailto:steve@juleslabs.com?subject=Work%20with%20Jules%20Labs"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/15"
            >
              Work with Jules Labs
            </a>
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

      {/* Get In Touch */}
      <Section id="contact" title="Get In Touch" bg="gradient3">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg leading-relaxed text-white/85">
            Interested in working together, seeing a product demo, or learning more about Jules Labs?
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="mailto:steve@juleslabs.com?subject=Get%20In%20Touch"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Get In Touch
            </a>
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

