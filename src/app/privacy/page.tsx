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
            <p className="text-sm text-white/70">Last updated: December 2025</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Jules Labs (&ldquo;Jules,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the Jules mobile application and related services (the &ldquo;Service&rdquo;). This Privacy Policy explains how we collect, use, store, and protect your information when you use our app.
            </p>
            <p className="text-lg leading-relaxed">
              By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Information You Provide Directly</h3>
                  <p className="text-white/80 mb-2">We collect information you voluntarily provide, including:</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• Account information (such as name, email address, or authentication credentials)</li>
                    <li>• User-generated content, including photos you upload and messages you send within the app</li>
                    <li>• Profile information, such as style preferences, age, profession, clothing sizes, budget preferences, or a ZIP code if you choose to provide it in settings (We do not collect precise location data.)</li>
                    <li>• Push notification preferences and settings</li>
                    <li>• Support communications when you contact us for help or feedback</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Information Collected Automatically</h3>
                  <p className="text-white/80 mb-2">When you use the Service, we may automatically collect:</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• Usage data (e.g., app interactions, feature usage, screen views)</li>
                    <li>• Device and diagnostic information (e.g., device type, operating system, crash logs)</li>
                    <li>• Push notification tokens (if you enable notifications)</li>
                    <li>• Timezone information (for notification scheduling)</li>
                    <li>• Anonymous analytics data to improve app performance and reliability</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Permissions We Request</h3>
                  <p className="text-white/80 mb-2">The app may request the following permissions, only when needed:</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• Camera access – to allow you to take photos for outfit analysis</li>
                    <li>• Photo library access – to allow you to upload existing photos</li>
                    <li>• Microphone / speech recognition – if you use voice features (when applicable)</li>
                  </ul>
                  <p className="text-white/80 mt-2">We do not access your camera or photo library unless you explicitly grant permission.</p>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. How We Collect Information</h2>
              <p className="text-white/80 mb-4">We collect information through:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Direct user input (e.g., account creation, photo uploads, chat messages)</li>
                <li>• App permissions you grant (camera, photo library)</li>
                <li>• Automated technologies (analytics and diagnostics tools)</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="text-white/80 mb-4">We use your information to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Provide and operate the Service</li>
                <li>• Analyze uploaded images and generate style feedback</li>
                <li>• Personalize your experience</li>
                <li>• Maintain account security</li>
                <li>• Communicate with you about the Service</li>
                <li>• Improve app functionality and performance</li>
                <li>• Comply with legal obligations</li>
              </ul>
              <p className="text-white/80 mt-4">We do not use your data for advertising tracking or sell your personal information.</p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. AI &amp; Image Processing</h2>
              <p className="text-white/80 mb-4">
                Jules uses third-party AI services (including OpenAI) to analyze uploaded photos and generate style feedback.
              </p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Image analysis is performed server-side</li>
                <li>• Uploaded photos are used only to provide the Service</li>
                <li>• AI outputs are generated automatically and are not human-reviewed unless required for support or moderation</li>
              </ul>
              <p className="text-white/80 mt-4">Jules does not provide medical, mental health, or therapeutic advice.</p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Sharing of Information</h2>
              <p className="text-white/80 mb-4">
                We may share your information with trusted third-party service providers, only as necessary to operate the Service, including:
              </p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• OpenAI – AI processing</li>
                <li>• Cloudinary – secure image storage</li>
                <li>• Firebase – authentication and backend services</li>
                <li>• Analytics and error monitoring providers (e.g., Segment, Sentry)</li>
              </ul>
              <p className="text-white/80 mt-4">We do not sell your personal information.</p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
              <p className="text-white/80 mb-4">
                We retain your information only as long as necessary to provide the Service and comply with legal requirements.
              </p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• While your account is active: data is retained to support app functionality</li>
                <li>• After account deletion: all personal data, including images and chat history, is permanently deleted or irreversibly anonymized within 30 days, unless retention is required by law</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Account Deletion &amp; Your Choices</h2>
              <p className="text-white/80 mb-4">
                You may delete your account at any time through: <strong>Settings → Delete Account</strong>
              </p>
              <p className="text-white/80 mb-2">Deleting your account removes:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Account information</li>
                <li>• Uploaded photos</li>
                <li>• Chat history</li>
                <li>• Stored preferences</li>
              </ul>
              <p className="text-white/80 mt-4">
                You may also contact us at <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a> for assistance.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Security</h2>
              <p className="text-white/80 mb-4">
                We use industry-standard security measures to protect your information, including encryption in transit and access controls.
              </p>
              <p className="text-white/80">
                However, no system is completely secure, and we cannot guarantee absolute protection.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Children&apos;s Privacy</h2>
              <p className="text-white/80 mb-4">
                The Service is not intended for children under 13 (or under 16 in certain jurisdictions).
              </p>
              <p className="text-white/80">
                We do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Your Privacy Rights</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">GDPR (European Economic Area)</h3>
                  <p className="text-white/80 mb-2">If you are located in the EEA, you have the right to:</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• Access your personal data</li>
                    <li>• Correct inaccurate data</li>
                    <li>• Request deletion of your data</li>
                    <li>• Restrict or object to processing</li>
                    <li>• Data portability</li>
                    <li>• Withdraw consent at any time</li>
                  </ul>
                  <p className="text-white/80 mt-2">
                    You may exercise these rights by contacting <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">CCPA / CPRA (California Residents)</h3>
                  <p className="text-white/80 mb-2">California residents have the right to:</p>
                  <ul className="space-y-2 text-white/80 ml-4">
                    <li>• Know what personal information is collected</li>
                    <li>• Request deletion of personal information</li>
                    <li>• Opt out of the sale of personal information (we do not sell data)</li>
                    <li>• Not be discriminated against for exercising privacy rights</li>
                  </ul>
                  <p className="text-white/80 mt-2">
                    Requests may be made by contacting <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Consent</h2>
              <p className="text-white/80 mb-4">
                By using the Service and submitting information, you consent to the collection and use of your information as described in this Privacy Policy.
              </p>
              <p className="text-white/80">
                You may withdraw consent at any time by deleting your account.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Changes to This Policy</h2>
              <p className="text-white/80">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">13. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions or concerns about this Privacy Policy, contact us at:
              </p>
              <p className="text-white/80">
                Email: <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
              </p>
              <p className="text-white/80">
                Company: Jules Labs
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
