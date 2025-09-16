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
            <p className="text-sm text-white/70">Effective Date: 8/27/2025</p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
              <p className="text-white/80">
                By accessing or using Jules, you agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree, you may not use the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
              <p className="text-white/80">
                You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you meet this requirement.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">3. License to Use</h2>
              <p className="text-white/80">
                We grant you a limited, non-transferable, revocable license to access and use Jules for personal, non-commercial purposes, subject to these Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">4. User Content</h2>
              <p className="text-white/80">
                You may submit content such as photos, text, and other materials. You retain ownership of any content you submit, but you grant Jules Labs a worldwide, non-exclusive, royalty-free license to host, use, reproduce, display, and distribute your content for the purpose of operating, improving, and providing the Service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">5. Prohibited Conduct</h2>
              <p className="text-white/80 mb-4">You agree not to:</p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Use the Service for unlawful or abusive purposes.</li>
                <li>• Upload content that infringes the rights of others.</li>
                <li>• Interfere with, disrupt, or attempt to gain unauthorized access to the Service.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
              <p className="text-white/80">
                All intellectual property in Jules (software, branding, design, and content) belongs to Jules Labs or its licensors. You may not copy, modify, reverse-engineer, or distribute any part of the Service without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">7. Disclaimers</h2>
              <p className="text-white/80 mb-4">
                Jules is an artificial intelligence tool that provides style-related insights and general guidance. Jules is not a licensed stylist, fashion consultant, psychologist, medical provider, or financial advisor.
              </p>
              <p className="text-white/80 mb-4">
                Any content, suggestions, or recommendations provided by Jules are for informational and entertainment purposes only and should not be relied upon as professional advice.
              </p>
              <p className="text-white/80">
                The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis without warranties of any kind, whether express, implied, or statutory, including without limitation warranties of merchantability, fitness for a particular purpose, accuracy, or non-infringement. Jules Labs does not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
              <p className="text-white/80 mb-4">
                To the maximum extent permitted by law, Jules Labs and its affiliates shall not be liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages, including but not limited to:
              </p>
              <ul className="space-y-2 text-white/80 ml-4 mb-4">
                <li>• Loss of profits, revenue, or business opportunities.</li>
                <li>• Emotional distress or reputational harm.</li>
                <li>• Wardrobe purchases or financial losses.</li>
                <li>• Relationship outcomes or personal decisions made in reliance on the Service.</li>
              </ul>
              <p className="text-white/80">
                Your sole remedy for dissatisfaction with the Service is to stop using it.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
              <p className="text-white/80 mb-4">
                You agree to indemnify, defend, and hold harmless Jules Labs, its affiliates, officers, employees, contractors, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in any way connected with your:
              </p>
              <ul className="space-y-2 text-white/80 ml-4">
                <li>• Use or misuse of the Service.</li>
                <li>• Violation of these Terms.</li>
                <li>• Violation of any third-party rights.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
              <p className="text-white/80">
                We may suspend or terminate your access to the Service at any time, with or without notice, if you violate these Terms or use the Service in a way that could cause harm.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h2>
              <p className="text-white/80 mb-4">
                These Terms are governed by the laws of the State of Oregon, without regard to conflict of law principles.
              </p>
              <p className="text-white/80">
                At Jules Labs&apos; election, any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration conducted on an individual basis. You waive the right to participate in class actions or class-wide arbitration.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">12. Changes</h2>
              <p className="text-white/80">
                We may update these Terms from time to time. Changes are effective upon posting, and your continued use of the Service after changes means you accept the new Terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">13. Contact</h2>
              <p className="text-white/80">
                Questions? Email us at <a href="mailto:steve@juleslabs.com" className="text-blue-400 hover:text-blue-300 underline">steve@juleslabs.com</a>
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

