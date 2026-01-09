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
            <p className="text-sm text-white/70">Last Updated: January 9, 2026</p>
          </div>

          <div className="space-y-6">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80 mb-4">
                These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the Jules mobile application and related services (the &ldquo;Service&rdquo;) operated by Jules Labs, LLC (&ldquo;Jules Labs,&rdquo; &ldquo;Jules,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </p>
              <p className="text-white/80">
                By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not access or use the Service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <p className="text-white/80 mb-4">
                The Service is rated 9+ and may be used by users under the age of 13 only with the involvement and consent of a parent or legal guardian.
              </p>
              <p className="text-white/80 mb-4">
                If you are under 13, you may use the Service only with parental permission and supervision. Parents or legal guardians are responsible for the activities of minors who use the Service.
              </p>
              <p className="text-white/80">
                By using the Service, you represent that you meet the applicable age requirements or have obtained the required parental consent.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">3. Description of the Service</h2>
              <p className="text-white/80 mb-2">
                Jules is an AI-powered application that allows users to:
              </p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• Upload photos or images</li>
                <li>• Receive style, outfit, and image-based feedback</li>
                <li>• Interact with AI-generated responses related to style, lifestyle, and general guidance</li>
              </ul>
              <p className="text-white/80">
                The Service is provided for personal and informational use only.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">4. AI-Generated Content Disclaimer</h2>
              <p className="text-white/80 mb-4">
                The Service uses artificial intelligence to generate responses, feedback, and recommendations.
              </p>
              <p className="text-white/80 mb-2">You acknowledge and agree that:</p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• AI-generated content may be inaccurate, incomplete, outdated, or inappropriate</li>
                <li>• Responses are generated automatically and are not reviewed by a human</li>
                <li>• Content is provided for informational purposes only</li>
              </ul>
              <p className="text-white/80 mb-4">
                The Service does not provide medical, mental health, legal, financial, or other professional advice.
              </p>
              <p className="text-white/80">
                You are solely responsible for how you interpret or act upon information provided by the Service.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">5. User Accounts</h2>
              <p className="text-white/80 mb-4">
                Some features of the Service require creating an account.
              </p>
              <p className="text-white/80 mb-2">You are responsible for:</p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• Maintaining the confidentiality of your login credentials</li>
                <li>• All activity that occurs under your account</li>
              </ul>
              <p className="text-white/80 mb-4">
                You agree to notify us immediately of any unauthorized access or use of your account.
              </p>
              <p className="text-white/80">
                We reserve the right to suspend or terminate accounts that violate these Terms or misuse the Service.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Ownership</h3>
                  <p className="text-white/80">
                    You retain ownership of any content you submit through the Service, including photos, messages, and profile information (&ldquo;User Content&rdquo;).
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">License to Jules Labs</h3>
                  <p className="text-white/80">
                    By submitting User Content, you grant Jules Labs a limited, non-exclusive, royalty-free, worldwide license to store, process, analyze, and display your User Content solely for the purpose of providing, operating, and improving the Service, in accordance with our Privacy Policy.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-2">Content Responsibility</h3>
                  <p className="text-white/80 mb-2">You are solely responsible for your User Content and represent that it:</p>
                  <ul className="space-y-2 text-white/80 ml-4 mb-4">
                    <li>• Does not violate any applicable laws</li>
                    <li>• Does not infringe the rights of others</li>
                    <li>• Does not contain unlawful, abusive, harmful, or exploitative material</li>
                  </ul>
                  <p className="text-white/80">
                    We reserve the right to remove, restrict, or disable access to User Content that violates these Terms or applicable law.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Acceptable Use</h2>
              <p className="text-white/80 mb-2">You agree not to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Use the Service for unlawful purposes</li>
                <li>• Upload content you do not have the right to share</li>
                <li>• Attempt to interfere with, disrupt, or overload the Service</li>
                <li>• Reverse engineer, scrape, or misuse the Service or its AI systems</li>
                <li>• Use the Service to harass, harm, or impersonate others</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Account Deletion</h2>
              <p className="text-white/80 mb-4">
                You may delete your account at any time through the in-app settings.
              </p>
              <p className="text-white/80 mb-2">Upon account deletion:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Your access to the Service will immediately end</li>
                <li>• Your data will be handled in accordance with our Privacy Policy</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Intellectual Property</h2>
              <p className="text-white/80 mb-4">
                The Service, including its software, design, text, graphics, logos, and trademarks, is owned by Jules Labs or its licensors and is protected by applicable intellectual property laws.
              </p>
              <p className="text-white/80">
                You may not copy, modify, distribute, sell, or create derivative works from the Service without our prior written permission.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Third-Party Services</h2>
              <p className="text-white/80 mb-4">
                The Service may rely on third-party services or platforms (including cloud hosting, analytics, and AI infrastructure).
              </p>
              <p className="text-white/80">
                Jules Labs does not control and is not responsible for the availability, functionality, or performance of third-party services.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Disclaimer of Warranties</h2>
              <p className="text-white/80 mb-4">
                The Service is provided on an &ldquo;AS IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis.
              </p>
              <p className="text-white/80 mb-2">To the maximum extent permitted by law, we disclaim all warranties, express or implied, including but not limited to:</p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• Accuracy or reliability of AI-generated content</li>
                <li>• Availability or uninterrupted operation of the Service</li>
                <li>• Fitness for a particular purpose</li>
              </ul>
              <p className="text-white/80">
                The Service is not designed for use by children without parental supervision.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Limitation of Liability</h2>
              <p className="text-white/80 mb-4">
                To the maximum extent permitted by law, Jules Labs shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising out of or related to your use of the Service.
              </p>
              <p className="text-white/80">
                Your sole and exclusive remedy for dissatisfaction with the Service is to stop using it.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">13. Indemnification</h2>
              <p className="text-white/80 mb-2">You agree to indemnify, defend, and hold harmless Jules Labs and its officers, directors, and affiliates from any claims, damages, losses, or expenses arising from:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Your use of the Service</li>
                <li>• Your User Content</li>
                <li>• Your violation of these Terms or applicable law</li>
              </ul>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">14. Governing Law</h2>
              <p className="text-white/80">
                These Terms are governed by and construed in accordance with the laws of the State of Oregon, United States, without regard to conflict of law principles.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">15. Changes to These Terms</h2>
              <p className="text-white/80 mb-4">
                We may update these Terms from time to time. Any changes will be posted with an updated &ldquo;Last Updated&rdquo; date.
              </p>
              <p className="text-white/80">
                Your continued use of the Service after changes become effective constitutes acceptance of the revised Terms.
              </p>
            </div>

            {/* Section 16 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">16. Contact Us</h2>
              <p className="text-white/80 mb-4">
                If you have questions about these Terms, contact us at:
              </p>
              <p className="text-white/80">
                📧 <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
              </p>
              <p className="text-white/80">
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
