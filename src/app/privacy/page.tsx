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
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-lg leading-relaxed">
                Jules Labs (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Jules, our AI-powered style and lifestyle service (the &ldquo;Service&rdquo;).
              </p>
              <p className="text-lg leading-relaxed mt-4">
                By using the Service, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                  <p className="text-white/80">
                    We may collect personal information you voluntarily provide, including your name, email address, and profile details entered during onboarding or in account settings.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Content You Provide</h3>
                  <p className="text-white/80">
                    You may upload photos, text, preferences, and other content to receive style feedback, recommendations, or personalized guidance.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Financial Preferences</h3>
                  <p className="text-white/80">
                    You may optionally provide financial preference information, such as a monthly budget, to help personalize recommendations. This information is not used for payments and is used only to tailor your experience within the Service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Audio Data</h3>
                  <p className="text-white/80">
                    If you use voice or audio-based features, we process audio input to provide real-time responses and functionality. Audio data may be temporarily processed to deliver the feature and improve quality. Audio data is not used for advertising purposes.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Usage Data</h3>
                  <p className="text-white/80">
                    We automatically collect usage data such as device information, IP address, browser or app version, and interactions with the Service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Cookies &amp; Tracking</h3>
                  <p className="text-white/80">
                    We use cookies and similar technologies to support functionality, analytics, and performance improvements.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Legal Basis for Processing (GDPR)</h3>
                  <p className="text-white/80 mb-2">We process personal data under the following legal bases:</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• Consent (Article 6(1)(a)) – for marketing communications and optional analytics</li>
                    <li>• Contract (Article 6(1)(b)) – to provide the Service and fulfill our agreement with you</li>
                    <li>• Legitimate Interests (Article 6(1)(f)) – for security, fraud prevention, and service improvement</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-white/80 mb-4">We use your information to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Provide, operate, and personalize the Service</li>
                <li>• Deliver style feedback, recommendations, and saved experiences</li>
                <li>• Improve functionality, reliability, and performance</li>
                <li>• Communicate with you about updates, features, product announcements, or re-engagement messages</li>
                <li>• Support analytics, measurement, and audience insights using aggregated or hashed identifiers</li>
                <li>• Detect, prevent, and address misuse, fraud, or technical issues</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. How We Share Information</h2>
              <p className="text-white/80 mb-4">We may share information:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• With trusted service providers that support hosting, analytics, communications, or infrastructure</li>
                <li>• To comply with legal obligations, enforce our terms, or protect rights and safety</li>
                <li>• As part of a business transaction such as a merger or acquisition</li>
              </ul>
              <p className="text-white/80 mt-4 font-medium">We do not sell personal data to third parties.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Data Retention</h2>
              <p className="text-white/80 mb-4">
                We retain personal data only as long as necessary to provide the Service or as required by law.
              </p>
              <p className="text-white/80 mb-2 font-medium">Retention Guidelines:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Account Data: Until account deletion or 3 years of inactivity</li>
                <li>• Chat &amp; Interaction Data: Up to 2 years from last activity</li>
                <li>• Analytics Data: Up to 25 months</li>
                <li>• Marketing Data: Until consent is withdrawn</li>
                <li>• Legal Records: As required by applicable law</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Your Rights (GDPR &amp; CCPA)</h2>
              <p className="text-white/80 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate or incomplete information</li>
                <li>• Request deletion of your data</li>
                <li>• Restrict or object to certain processing</li>
                <li>• Export your data in a portable format</li>
                <li>• Withdraw consent at any time</li>
              </ul>
              <p className="text-white/80 mt-4">
                You can exercise these rights by contacting <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a> or using in-app account controls where available.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Security</h2>
              <p className="text-white/80">
                We use reasonable administrative, technical, and organizational safeguards to protect your information. However, no system can be guaranteed to be 100% secure.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-white/80 mb-4">
                The Service is not directed to children under the age of 13, and we do not knowingly collect personal data from children under 13.
              </p>
              <p className="text-white/80">
                If we become aware that we have collected personal data from a child under 13, we will take steps to delete it promptly.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. Any changes will be posted with an updated effective date.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions or concerns about this Privacy Policy, contact us at:
              </p>
              <p className="text-white/80">
                📧 <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
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
