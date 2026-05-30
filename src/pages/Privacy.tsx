import { Link } from 'react-router-dom';
import { Home, Shield } from 'lucide-react';

function Privacy() {
  return (
    <div className="bg-[#0E1013] text-white min-h-screen">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1013] via-[#181A1F] to-[#090B0E]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0088CC] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-lg bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/RLogo.png"
              alt="Linkium Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold">Linkium</h1>
              <p className="text-xs text-gray-400">SteamDeck Ecosystem</p>
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/10 hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-[#00B4FF]" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last updated: January 2025
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6 pb-20">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <div className="space-y-8">
              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Our Commitment to Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  At Linkium, we take your privacy seriously. We believe in transparency and your right to control your data. This policy explains what information we collect, how we use it, and your rights regarding your personal information.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Linkium is designed with privacy in mind. We collect minimal information necessary to provide our service:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span><strong>Connection Data:</strong> Temporary pairing codes used to establish secure connections between your devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span><strong>Usage Statistics:</strong> Anonymous telemetry data to improve application performance and reliability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span><strong>Error Reports:</strong> Crash logs and error reports to help us fix bugs (only if you opt in)</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">What We Don't Collect</h2>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>We do NOT require accounts or personal information to use Linkium</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>We do NOT track your browsing history or app usage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>We do NOT store your files or application data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>We do NOT sell your data to third parties</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The minimal data we collect is used solely for:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Establishing and maintaining secure connections between your devices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Improving application performance and fixing bugs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Understanding usage patterns to guide future development</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  All connections between your devices are encrypted using industry-standard protocols. Your pairing codes are temporary and automatically expire. We use secure cloud infrastructure to relay connections, but no application data passes through our servers.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Opt out of telemetry and error reporting at any time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Request deletion of any data we may have collected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Ask questions about our privacy practices</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Changes to This Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify users of any material changes through the application or our website.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/30">
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about this privacy policy or our data practices, please contact us:
                </p>
                <p className="text-[#00B4FF]">
                  Email: <a href="mailto:privacy@linkium.app" className="hover:text-white transition-colors">privacy@linkium.app</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Linkium 2025. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/support" className="hover:text-[#00B4FF] transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="hover:text-[#00B4FF] transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-[#00B4FF] transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Privacy;
