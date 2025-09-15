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
            <p className="text-sm text-white/70">Effective Date: 8/27/2025</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              This Privacy Policy explains how Jules Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; &ldquo;us&rdquo;) collects, uses, shares, and protects your information when you use Jules (&ldquo;the Service&rdquo;).
            </p>

            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Account Information</h3>
                  <p className="text-white/80">Name, email, and login credentials you provide when creating an account.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Usage Data</h3>
                  <p className="text-white/80 mb-2">Interactions with Jules, including chats, style preferences, fit checks, and closet uploads.</p>
                  <p className="text-white/80">Logs of features you use and actions taken within the Service.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Device and Technical Data</h3>
                  <p className="text-white/80 mb-2">Browser type, operating system, IP address, device identifiers, and related technical information.</p>
                  <p className="text-white/80">Cookies and similar technologies to support core functionality and analytics.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Optional Information</h3>
                  <p className="text-white/80">Information you choose to share in conversations with Jules, which may include personal context or preferences.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. How We Use Information</h2>
              <p className="text-white/80 mb-4">We use your information to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Provide, personalize, and improve Jules.</li>
                <li>• Generate AI-powered recommendations and responses.</li>
                <li>• Communicate with you about updates, features, or promotions.</li>
                <li>• Monitor usage, prevent fraud, and ensure security.</li>
                <li>• Comply with legal obligations.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Third-Party Services</h2>
              <p className="text-white/80 mb-4">
                We use third-party service providers, including OpenAI, to process your inputs and generate responses. These providers may receive and process your information solely to perform services on our behalf.
              </p>
              <p className="text-white/80">
                We may also use analytics, hosting, and security vendors. Each provider is contractually required to protect your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing</h2>
              <p className="text-white/80 mb-4">We do not sell your personal information. We may share your data only in the following cases:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• With trusted service providers that perform functions on our behalf.</li>
                <li>• With legal authorities if required by law, regulation, or legal process.</li>
                <li>• In connection with a merger, acquisition, or sale of assets, where user data may be transferred as part of business assets.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="text-white/80 mb-4">
                We retain your information as long as your account is active or as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements.
              </p>
              <p className="text-white/80">
                If you delete your account, we will delete or anonymize your data, unless retention is required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
              <p className="text-white/80">
                We implement reasonable administrative, technical, and physical safeguards to protect your information. However, no system is 100% secure, and we cannot guarantee the absolute security of your data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
              <p className="text-white/80 mb-4">
                Depending on your location, you may have certain rights over your data, including the right to:
              </p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• Access the data we hold about you.</li>
                <li>• Correct inaccuracies in your data.</li>
                <li>• Request deletion of your data.</li>
                <li>• Restrict or object to certain processing.</li>
              </ul>
              <p className="text-white/80">
                To exercise your rights, contact us at <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. International Users</h2>
              <p className="text-white/80">
                If you access Jules from outside the United States, note that your information may be transferred to and processed in the U.S., where data protection laws may differ from those in your country.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-white/80">
                Jules is not directed to individuals under the age of 13 (or the minimum age in your jurisdiction). We do not knowingly collect personal information from children. If we become aware of such data, we will delete it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Changes to this Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. Updates will be posted on this page with a new effective date. Your continued use of the Service after changes means you accept the updated policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
              <p className="text-white/80">
                If you have questions or concerns about this Privacy Policy, contact us at: <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
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
              <Link href="https://www.juleslabs.com/terms" className="hover:text-white transition">Terms</Link>
              <Link href="https://www.juleslabs.com/privacy" className="hover:text-white transition">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
