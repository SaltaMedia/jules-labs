import Link from "next/link";
import { Header } from "@/components/Header";
import { Section } from "@/components/Section";

export default function Terms() {
  return (
    <main>
      <Header />

      {/* Hero */}
      <section className="text-white">
        <div className="mx-auto max-w-6xl px-6 py-28">
          <div className="flex flex-col items-center text-center gap-6">
            <h1 className="text-4xl md:text-6xl font-medium leading-tight">
              Terms of Use
            </h1>
            <p className="max-w-2xl text-lg opacity-90">
              The rules and guidelines for using Jules
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <Section id="terms" bg="gradient2">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center mb-8">
            <p className="text-sm text-white/70">Effective Date: August 29, 2025</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              These Terms govern your use of Jules, provided by Jules Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;). By using Jules, you agree to these Terms.
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Beta Service Disclaimer</h2>
              <p className="text-white/80">
                Jules is currently offered as a Beta service. It may contain errors or limitations, and results may not always be accurate. Use Jules at your own risk.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
              <p className="text-white/80">
                You must be at least 18 years old to use Jules.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
              <p className="text-white/80 mb-4">You agree not to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Misuse Jules for unlawful, harmful, or abusive purposes.</li>
                <li>• Attempt to reverse engineer or interfere with Jules&apos; systems.</li>
                <li>• Upload content that infringes on the rights of others.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
              <p className="text-white/80">
                All rights in Jules, including its software, design, and content, belong to Jules Labs. You retain rights to the content you upload, but grant us a license to use it to provide and improve services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
              <p className="text-white/80">
                Jules uses third-party providers (including OpenAI) to process and deliver functionality. We are not responsible for their services, but we take care in choosing reliable providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-white/80">
                Jules is provided &ldquo;as is&rdquo; without warranties. To the maximum extent permitted by law, Jules Labs is not liable for damages arising from your use of Jules.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Termination</h2>
              <p className="text-white/80">
                We may suspend or terminate your access if you violate these Terms or misuse the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
              <p className="text-white/80">
                These Terms are governed by the laws of the State of Oregon, without regard to conflict of law principles.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Contact</h2>
              <p className="text-white/80">
                Questions? Contact us at <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
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
