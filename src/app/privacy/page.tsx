import Link from "next/link";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function Privacy() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Privacy Policy
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
              How we collect, use, and protect your information
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section id="privacy" bg="gradient1">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <p className="text-sm text-white/70">Effective Date: August 29, 2025</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              This Privacy Policy explains how Jules Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) collects, uses, and protects your information when you use Jules.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Account Information</h3>
                  <p className="text-white/80">Name, email, and login credentials.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Usage Data</h3>
                  <p className="text-white/80">Interactions with Jules, including chats, style preferences, and closet uploads.</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Device Data</h3>
                  <p className="text-white/80">Browser type, operating system, and related technical information.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
              <ul className="space-y-2 text-white/80">
                <li>• To provide, personalize, and improve Jules.</li>
                <li>• To communicate with you about updates, new features, or promotions.</li>
                <li>• To monitor usage, prevent fraud, and ensure security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-white/80">
                We use third-party service providers, including OpenAI, to process your inputs and generate responses. These providers may receive and process your information solely to perform these services. You can review OpenAI&apos;s practices <a href="https://openai.com/privacy" className="text-blue-400 hover:text-blue-300 underline">here</a>.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Sharing</h2>
              <p className="text-white/80">
                We do not sell your personal data. We may share limited data with service providers and legal authorities where required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
              <p className="text-white/80">
                We retain information as long as your account is active or as needed to provide services, comply with legal obligations, and resolve disputes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p className="text-white/80">
                Depending on your location, you may have rights to access, correct, delete, or limit use of your data. Contact us at <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a> to exercise these rights.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Changes</h2>
              <p className="text-white/80">
                We may update this policy from time to time. Updates will be posted on this page with a new effective date.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center rounded-xl px-5 py-3 text-sm font-medium transition bg-white text-slate-900 hover:opacity-90 shadow">
              Back to Home
            </Link>
          </div>
          
          <div className="text-sm text-white/50">
            <p>&copy; 2024 Jules Labs. All rights reserved.</p>
            <div className="mt-4 space-x-6">
              <Link href="/terms" className="hover:text-white transition">Terms</Link>
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
