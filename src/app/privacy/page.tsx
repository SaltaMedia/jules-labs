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
            <p className="text-sm text-white/70">Effective Date: January 9, 2026</p>
            <p className="text-sm text-white/70">Last Updated: January 9, 2026</p>
          </div>

          <div className="space-y-6">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p className="text-lg leading-relaxed">
                Jules Labs, LLC (&ldquo;Jules Labs,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use Jules, our AI-powered style and lifestyle application and related services (the &ldquo;Service&rdquo;).
              </p>
              <p className="text-lg leading-relaxed mt-4">
                By accessing or using the Service, you agree to the practices described in this Privacy Policy. If you do not agree, please discontinue use of the Service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Personal Information</h3>
                  <p className="text-white/80 mb-2">We may collect personal information you voluntarily provide, including:</p>
                  <ul className="space-y-1 text-white/80 ml-4">
                    <li>• Name</li>
                    <li>• Email address</li>
                    <li>• Account or profile information</li>
                    <li>• Preferences entered during onboarding or in account settings</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Content You Provide</h3>
                  <p className="text-white/80 mb-2">You may upload or submit content such as:</p>
                  <ul className="space-y-1 text-white/80 ml-4">
                    <li>• Photos or images</li>
                    <li>• Text inputs, chat messages, and questions</li>
                    <li>• Style, lifestyle, or preference data</li>
                  </ul>
                  <p className="text-white/80 mt-2">
                    This content is used solely to provide feedback, recommendations, and personalized experiences within the Service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Financial Preferences</h3>
                  <p className="text-white/80 mb-2">
                    You may optionally provide financial preference information (such as a monthly budget range) to personalize recommendations.
                  </p>
                  <p className="text-white/80 mb-2">This information:</p>
                  <ul className="space-y-1 text-white/80 ml-4">
                    <li>• Is not used for payments</li>
                    <li>• Is not shared for advertising</li>
                    <li>• Is used only to tailor your experience</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Audio Data</h3>
                  <p className="text-white/80 mb-2">If you use voice-based features:</p>
                  <ul className="space-y-1 text-white/80 ml-4">
                    <li>• Audio input is processed in real time to provide responses and functionality</li>
                    <li>• Audio data is not used for advertising</li>
                    <li>• Audio recordings are not sold or shared</li>
                    <li>• Audio data is not retained beyond what is necessary to deliver the feature, except in anonymized or aggregated form to improve reliability and performance</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Usage and Device Data</h3>
                  <p className="text-white/80 mb-2">We automatically collect limited usage data, including:</p>
                  <ul className="space-y-1 text-white/80 ml-4">
                    <li>• Device type and operating system</li>
                    <li>• App version</li>
                    <li>• IP address</li>
                    <li>• Interaction and feature usage data</li>
                    <li>• Crash and performance diagnostics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Cookies &amp; Similar Technologies</h3>
                  <p className="text-white/80">
                    We may use cookies or similar technologies (or mobile equivalents) to support functionality, analytics, and performance improvements.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Legal Basis for Processing (GDPR)</h2>
              <p className="text-white/80 mb-4">Where applicable, we process personal data under the following legal bases:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• <strong>Consent (Article 6(1)(a))</strong> – for optional features, marketing communications, and certain analytics</li>
                <li>• <strong>Contract (Article 6(1)(b))</strong> – to provide and operate the Service</li>
                <li>• <strong>Legitimate Interests (Article 6(1)(f))</strong> – for security, fraud prevention, and service improvement</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. How We Use Your Information</h2>
              <p className="text-white/80 mb-4">We use information collected to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Provide, operate, and personalize the Service</li>
                <li>• Deliver style feedback, image reviews, and recommendations</li>
                <li>• Maintain account functionality and saved experiences</li>
                <li>• Improve performance, reliability, and user experience</li>
                <li>• Communicate important service updates or feature announcements</li>
                <li>• Send re-engagement or product messages where permitted</li>
                <li>• Conduct analytics and measurement using aggregated or anonymized data</li>
                <li>• Detect, prevent, and address fraud, abuse, or technical issues</li>
              </ul>
              <p className="text-white/80 mt-4 font-medium">We do not use personal data for cross-app advertising or tracking purposes.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. How We Share Information</h2>
              <p className="text-white/80 mb-4">We may share information:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• With trusted service providers that support hosting, image processing, analytics, communications, or infrastructure, under contractual confidentiality obligations</li>
                <li>• To comply with legal obligations or lawful requests</li>
                <li>• To enforce our Terms of Service or protect the rights, safety, and security of users or others</li>
                <li>• In connection with a merger, acquisition, or asset sale, subject to applicable privacy protections</li>
              </ul>
              <p className="text-white/80 mt-4 font-medium">We do not sell personal data to third parties.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-white/80 mb-4">
                We retain personal data only for as long as necessary to provide the Service or comply with legal obligations.
              </p>
              <p className="text-white/80 mb-2 font-medium">Retention Guidelines</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• <strong>Account Data:</strong> Until account deletion or after 3 years of inactivity</li>
                <li>• <strong>Images, Chats, and Interactions:</strong> Up to 2 years from last activity</li>
                <li>• <strong>Analytics Data:</strong> Up to 25 months</li>
                <li>• <strong>Marketing Communications:</strong> Until consent is withdrawn</li>
                <li>• <strong>Legal Records:</strong> As required by applicable law</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Account Deletion</h2>
              <p className="text-white/80 mb-4">
                You may delete your account at any time through in-app settings.
              </p>
              <p className="text-white/80 mb-2">When you delete your account:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Profile information, uploaded images, chat history, and associated personal data are permanently removed from our active systems</li>
                <li>• Limited data may be retained temporarily where required by law or for legitimate business purposes (such as fraud prevention or legal compliance)</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Your Rights (GDPR &amp; CCPA)</h2>
              <p className="text-white/80 mb-4">Depending on your location, you may have the right to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Access your personal data</li>
                <li>• Correct inaccurate or incomplete data</li>
                <li>• Request deletion of your data</li>
                <li>• Restrict or object to certain processing</li>
                <li>• Export your data in a portable format</li>
                <li>• Withdraw consent at any time</li>
              </ul>
              
              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">California Residents</h3>
                <p className="text-white/80 mb-2">
                  California residents may have the right to request information about personal data collected in the preceding 12 months and to opt out of certain data sharing practices.
                </p>
                <p className="text-white/80">
                  Jules Labs does not sell personal information as defined by the California Consumer Privacy Act (CCPA).
                </p>
              </div>
              
              <p className="text-white/80 mt-4">
                You can exercise your rights by contacting us or using available in-app controls.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Data Used for Tracking</h2>
              <p className="text-white/80">
                We do not track users across third-party apps or websites for advertising purposes, and we do not engage in cross-app tracking as defined by Apple.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Security</h2>
              <p className="text-white/80">
                We implement reasonable administrative, technical, and organizational safeguards designed to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Children&apos;s Privacy</h2>
              <p className="text-white/80 mb-4">
                The Service is not directed to children under the age of 13, and we do not knowingly collect personal data from children under 13.
              </p>
              <p className="text-white/80">
                If we become aware that we have collected such data, we will delete it promptly.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. Any changes will be posted with an updated effective date. Continued use of the Service after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions or concerns about this Privacy Policy, contact us at:
              </p>
              <p className="text-white/80">
                📧 <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
              </p>
              <p className="text-white/80 mt-2">
                🏢 Jules Labs, LLC
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="text-sm text-white/50">
            <p>&copy; 2026 Jules Labs. All rights reserved.</p>
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
