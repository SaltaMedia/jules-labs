import Image from "next/image";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <main className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-blue-500/12 blur-3xl md:h-[42rem] md:w-[42rem]" />
        <div className="absolute left-[-8rem] top-[38rem] h-[22rem] w-[22rem] rounded-full bg-blue-400/8 blur-3xl" />
        <div className="absolute right-[-10rem] top-[68rem] h-[24rem] w-[24rem] rounded-full bg-indigo-400/8 blur-3xl" />
      </div>

      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden pb-20 text-white">
        <div className="absolute inset-x-0 top-6 mx-auto h-[28rem] max-w-5xl rounded-full bg-[radial-gradient(circle_at_center,rgba(90,151,255,0.16),transparent_60%)] blur-2xl" />
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:px-8 md:pb-24 md:pt-28">
          <div className="flex flex-col items-center gap-4 text-center md:gap-5">
            <Image
              src="/Jules%20Labs%20White%20Hero.svg"
              alt="Jules Labs"
              width={1419}
              height={395}
              priority
              className="h-28 w-auto md:h-32"
            />
            <h1 className="max-w-3xl text-[2.15rem] font-medium leading-[0.96] tracking-[-0.04em] md:text-[3.15rem]">
              AI-First Product Studio and Consultancy
            </h1>
            <p className="max-w-2xl text-[1.02rem] leading-relaxed text-white/72 md:text-[1.14rem]">
              We build AI products and systems for the real world across consumer, B2B, growth, partnerships, and applied AI.
            </p>
          </div>
        </div>
        <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </section>

      {/* About */}
      <Section id="about" title="About Jules Labs" bg="gradient1">
        <div className="mx-auto max-w-4xl space-y-6 text-center">
          <p className="text-[1.08rem] leading-8 text-white/82 md:text-[1.12rem]">
            Jules Labs is an AI-first product studio and consultancy building products and systems for the real world. We work across consumer, B2B, growth, partnerships, and applied AI—building our own products while helping companies move faster with better tools, sharper strategy, and AI-native execution.
          </p>
          <p className="text-[1.02rem] leading-8 text-white/74 md:text-[1.06rem]">
            Our work spans product development, strategic partnerships, commercial growth, and applied AI systems designed to improve decision-making, opportunity sourcing, and execution.
          </p>
          <p className="text-[1.02rem] leading-8 text-white/74 md:text-[1.06rem]">
            From consumer products to AI-powered business systems, we focus on tools that are useful, personal, and grounded in real behavior.
          </p>
        </div>
      </Section>

      {/* Our Products */}
      <Section id="products" title="Our Products" bg="gradient3">
        <div className="mx-auto max-w-5xl space-y-6 md:space-y-7">
          <div className="surface-card flex flex-col gap-6 rounded-[30px] p-6 md:flex-row md:items-center md:gap-8 md:p-8">
            <div className="glassify-card flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-[24px]">
              <Image
                src="/Ask%20Jules%20V2%20App%20Icon.svg"
                alt="Ask Jules"
                width={112}
                height={112}
                className="h-28 w-28"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-[1.65rem] font-medium tracking-[-0.03em] text-white md:text-[1.85rem]">Ask Jules</h3>
              <p className="mt-3 max-w-2xl text-[1.04rem] leading-7 text-white/74 md:text-[1.08rem]">
                Your AI guide for confidence, style, dating, and real-world self-presentation.
              </p>
            </div>
            <div className="md:flex md:shrink-0 md:justify-end">
              <a
                href="https://apps.apple.com/us/app/ask-jules/id6756280983"
                target="_blank"
                rel="noreferrer noopener"
                className="primary-button w-full md:min-w-40"
              >
                Download
              </a>
            </div>
          </div>

          <div className="surface-card flex flex-col gap-6 rounded-[30px] p-6 md:flex-row md:items-center md:gap-8 md:p-8">
            <div className="glassify-card flex h-28 w-28 shrink-0 items-center justify-center rounded-[24px] border border-white/10 text-center text-base font-semibold text-white/92">
              Jules Atlas
            </div>
            <div className="flex-1">
              <h3 className="text-[1.65rem] font-medium tracking-[-0.03em] text-white md:text-[1.85rem]">Jules Atlas</h3>
              <p className="mt-3 max-w-2xl text-[1.04rem] leading-7 text-white/74 md:text-[1.08rem]">
                A partnership intelligence system for identifying, prioritizing, and acting on strategic growth opportunities.
              </p>
              <span className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/56">
                Status: In beta
              </span>
            </div>
            <div className="md:flex md:shrink-0 md:justify-end">
              <a
                href="mailto:steve@juleslabs.com?subject=Jules%20Atlas%20Demo"
                className="primary-button w-full md:min-w-40"
              >
                Request Demo
              </a>
            </div>
          </div>

          <div className="surface-card flex flex-col gap-6 rounded-[30px] p-6 md:flex-row md:items-center md:gap-8 md:p-8">
            <div className="glassify-card flex h-28 w-28 shrink-0 items-center justify-center rounded-[24px] border border-white/10 text-center text-base font-semibold text-white/92">
              Jules Jobs
            </div>
            <div className="flex-1">
              <h3 className="text-[1.65rem] font-medium tracking-[-0.03em] text-white md:text-[1.85rem]">Jules Jobs</h3>
              <p className="mt-3 max-w-2xl text-[1.04rem] leading-7 text-white/74 md:text-[1.08rem]">
                An AI-powered job search and positioning tool that aggregates relevant roles, surfaces targets, and helps users sharpen their angle.
              </p>
              <span className="mt-5 inline-flex rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-white/56">
                Status: In development
              </span>
            </div>
            <div className="md:flex md:shrink-0 md:justify-end">
              <a
                href="mailto:steve@juleslabs.com?subject=Jules%20Jobs%20Early%20Access"
                className="primary-button w-full md:min-w-40"
              >
                Get Early Access
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Consulting */}
      <Section id="consulting" title="Consulting" bg="gradient4">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-col items-center gap-6 border-b border-white/10 pb-8 text-center md:pb-10">
            <p className="max-w-3xl text-[1.06rem] leading-8 text-white/76 md:text-[1.1rem]">
              We help companies design and apply AI systems for growth, partnerships, and product strategy.
            </p>
            <a
              href="mailto:steve@juleslabs.com?subject=Work%20with%20Jules%20Labs"
              className="primary-button w-full md:w-auto md:min-w-48"
            >
              Work with Jules Labs
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:mt-10 md:grid-cols-2 md:gap-5">
            <div className="surface-card flex min-h-36 items-center justify-center rounded-[26px] p-6 text-center">
              <h3 className="text-xl font-semibold text-white">AI product strategy</h3>
            </div>
            <div className="surface-card flex min-h-36 items-center justify-center rounded-[26px] p-6 text-center">
              <h3 className="text-xl font-semibold text-white">Growth systems, User Acquisition and Experimentation</h3>
            </div>
            <div className="surface-card flex min-h-36 items-center justify-center rounded-[26px] p-6 text-center">
              <h3 className="text-xl font-semibold text-white">Partnership and Business Development</h3>
            </div>
            <div className="surface-card flex min-h-36 items-center justify-center rounded-[26px] p-6 text-center">
              <h3 className="text-xl font-semibold text-white">Messaging, Positioning, and Commercialization</h3>
            </div>
            <div className="surface-card flex min-h-36 items-center justify-center rounded-[26px] p-6 text-center md:col-span-2 md:mx-auto md:w-[calc(50%-0.625rem)]">
              <h3 className="text-xl font-semibold text-white">Opportunity Analysis and Decision Support</h3>
            </div>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section id="philosophy" title="The Jules Labs Manifesto" bg="gradient2">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          <div className="surface-card flex min-h-[7.5rem] items-center justify-center rounded-[24px] p-6 text-center md:p-7">
            <h3 className="text-lg font-medium tracking-[-0.02em] text-white">Guide, don&apos;t coddle.</h3>
          </div>
          <div className="surface-card flex min-h-[7.5rem] items-center justify-center rounded-[24px] p-6 text-center md:p-7">
            <h3 className="text-lg font-medium tracking-[-0.02em] text-white">Connection over escapism.</h3>
          </div>
          <div className="surface-card flex min-h-[7.5rem] items-center justify-center rounded-[24px] p-6 text-center md:p-7">
            <h3 className="text-lg font-medium tracking-[-0.02em] text-white">Growth over comfort.</h3>
          </div>
          <div className="surface-card flex min-h-[7.5rem] items-center justify-center rounded-[24px] p-6 text-center md:p-7">
            <h3 className="text-lg font-medium tracking-[-0.02em] text-white">Real world over virtual.</h3>
          </div>
          <div className="surface-card flex min-h-[7.5rem] items-center justify-center rounded-[24px] p-6 text-center md:p-7">
            <h3 className="text-lg font-medium tracking-[-0.02em] text-white">Confidence through action.</h3>
          </div>
          <div className="surface-card flex min-h-[7.5rem] items-center justify-center rounded-[24px] p-6 text-center md:p-7">
            <h3 className="text-lg font-medium tracking-[-0.02em] text-white">Human expertise over AI fantasy.</h3>
          </div>
        </div>
      </Section>

      {/* Get In Touch */}
      <Section id="contact" title="Get In Touch" bg="gradient3">
        <div className="surface-card mx-auto flex max-w-4xl flex-col gap-6 rounded-[30px] p-8 text-left md:flex-row md:items-center md:justify-between md:gap-10 md:p-10">
          <div className="max-w-2xl">
            <p className="text-[1.2rem] font-medium tracking-[-0.025em] text-white md:text-[1.35rem]">
              Interested in working together, seeing a product demo, or learning more about Jules Labs?
            </p>
            <p className="mt-3 text-[1rem] leading-7 text-white/68">
              Reach out directly and we&apos;ll get back to you.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a
              href="mailto:steve@juleslabs.com?subject=Get%20In%20Touch"
              className="primary-button w-full md:min-w-44"
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

