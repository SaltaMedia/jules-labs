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
            <p className="text-sm text-white/70">Last updated: December 2025</p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the Jules mobile application and related services (the &ldquo;Service&rdquo;) operated by Jules Labs (&ldquo;Jules,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
            </p>
            <p className="text-lg leading-relaxed">
              By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.
            </p>

            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Eligibility</h2>
              <p className="text-white/80">
                You must be at least 13 years old (or 16 in certain jurisdictions) to use the Service. By using the Service, you represent that you meet this requirement.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. The Service</h2>
              <p className="text-white/80 mb-4">
                Jules provides an AI-powered application that allows users to upload photos, receive outfit and style feedback, and interact with AI-generated responses.
              </p>
              <p className="text-white/80">
                The Service is provided for informational and personal use only.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. AI-Generated Content Disclaimer</h2>
              <p className="text-white/80 mb-4">
                The Service uses artificial intelligence to generate feedback, recommendations, and responses.
              </p>
              <p className="text-white/80 mb-2">AI-generated content:</p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• May be inaccurate, incomplete, or inappropriate</li>
                <li>• Is provided for informational purposes only</li>
                <li>• Should not be relied upon as professional advice</li>
              </ul>
              <p className="text-white/80">
                The Service does not provide medical, mental health, legal, or professional advice. You are solely responsible for how you interpret or act on information provided by the Service.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. User Accounts</h2>
              <p className="text-white/80 mb-4">
                To access certain features, you may be required to create an account.
              </p>
              <p className="text-white/80 mb-2">You are responsible for:</p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• Maintaining the confidentiality of your account credentials</li>
                <li>• All activity that occurs under your account</li>
              </ul>
              <p className="text-white/80">
                We reserve the right to suspend or terminate accounts that violate these Terms.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ownership</h3>
                  <p className="text-white/80">
                    You retain ownership of any content you submit through the Service, including photos, messages, and profile information (&ldquo;User Content&rdquo;).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">License to Jules</h3>
                  <p className="text-white/80">
                    By using the Service, you grant Jules Labs a limited, non-exclusive, royalty-free, worldwide license to store, process, analyze, and display your User Content solely for the purpose of providing and improving the Service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Content Responsibility</h3>
                  <p className="text-white/80 mb-2">You are responsible for ensuring that your User Content:</p>
                  <ul className="space-y-2 text-white/80 ml-4 mb-4">
                    <li>• Does not violate any laws</li>
                    <li>• Does not infringe the rights of others</li>
                    <li>• Does not contain unlawful, harmful, or abusive material</li>
                  </ul>
                  <p className="text-white/80">
                    We reserve the right to remove or restrict access to User Content that violates these Terms or applicable law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Acceptable Use</h2>
              <p className="text-white/80 mb-2">You agree not to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Use the Service for unlawful purposes</li>
                <li>• Upload content you do not have the right to share</li>
                <li>• Attempt to interfere with or disrupt the Service</li>
                <li>• Reverse engineer or misuse the Service or its AI systems</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Account Deletion</h2>
              <p className="text-white/80 mb-4">
                You may delete your account at any time through the app&apos;s settings.
              </p>
              <p className="text-white/80 mb-2">Upon account deletion:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Your access to the Service will end</li>
                <li>• Your data will be handled in accordance with our Privacy Policy</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
              <p className="text-white/80 mb-4">
                The Service, including its design, text, graphics, logos, and software, is owned by Jules Labs and protected by intellectual property laws.
              </p>
              <p className="text-white/80">
                You may not copy, modify, distribute, or create derivative works from the Service without our permission.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Third-Party Services</h2>
              <p className="text-white/80">
                The Service may rely on third-party services (such as cloud storage, analytics, or AI providers). Jules Labs is not responsible for the availability or performance of third-party services.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-white/80 mb-4">
                The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis.
              </p>
              <p className="text-white/80 mb-2">We make no warranties, express or implied, regarding:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Accuracy or reliability of AI-generated content</li>
                <li>• Availability or uninterrupted operation of the Service</li>
                <li>• Results obtained from using the Service</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
              <p className="text-white/80 mb-4">
                To the maximum extent permitted by law, Jules Labs shall not be liable for any indirect, incidental, consequential, or special damages arising out of or related to your use of the Service.
              </p>
              <p className="text-white/80">
                Your sole remedy for dissatisfaction with the Service is to stop using it.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
              <p className="text-white/80 mb-2">You agree to indemnify and hold harmless Jules Labs from any claims, damages, or expenses arising from:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Your use of the Service</li>
                <li>• Your User Content</li>
                <li>• Your violation of these Terms</li>
              </ul>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
              <p className="text-white/80">
                These Terms are governed by and construed in accordance with the laws of the State of Oregon, United States, without regard to conflict of law principles.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">14. Changes to These Terms</h2>
              <p className="text-white/80 mb-4">
                We may update these Terms from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
              </p>
              <p className="text-white/80">
                Continued use of the Service after changes constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">15. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions about these Terms, contact us at:
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
