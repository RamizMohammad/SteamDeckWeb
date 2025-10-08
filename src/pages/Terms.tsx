import { Link } from 'react-router-dom';
import { Home, FileText } from 'lucide-react';

function Terms() {
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
            <FileText className="w-16 h-16 mx-auto mb-6 text-[#00B4FF]" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
              Terms of Service
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
                <h2 className="text-2xl font-bold mb-4 text-white">Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By downloading, installing, or using Linkium, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our software.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">License Grant</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Linkium is free software. We grant you a personal, non-exclusive, non-transferable license to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Install and use Linkium on any number of devices you own or control</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Use the software for personal or commercial purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Make backups of the software for archival purposes</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Restrictions</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You agree NOT to:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Reverse engineer, decompile, or disassemble the software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Distribute, sell, or sublicense the software</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Remove or alter any copyright, trademark, or proprietary notices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Use the software for any illegal or unauthorized purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Attempt to gain unauthorized access to our servers or networks</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">User Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  You are responsible for:
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Maintaining the security of your devices and pairing codes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>All activities that occur through your Linkium installation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Ensuring your use complies with applicable laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4FF] mt-1">•</span>
                    <span>Backing up your own data and configurations</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Disclaimer of Warranties</h2>
                <p className="text-gray-300 leading-relaxed">
                  LINKIUM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SOFTWARE WILL BE UNINTERRUPTED, ERROR-FREE, OR COMPLETELY SECURE. USE AT YOUR OWN RISK.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, OR OTHER INTANGIBLE LOSSES RESULTING FROM YOUR USE OF LINKIUM.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Updates and Modifications</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update Linkium from time to time to improve functionality, fix bugs, or add new features. Updates may be automatic or require manual installation. We reserve the right to modify or discontinue the software at any time without notice.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Termination</h2>
                <p className="text-gray-300 leading-relaxed">
                  This license is effective until terminated. Your rights under this license will terminate automatically if you fail to comply with any of its terms. Upon termination, you must cease all use of Linkium and destroy all copies in your possession.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these terms at any time. We will notify users of material changes through the application or our website. Your continued use of Linkium after such changes constitutes acceptance of the new terms.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h2 className="text-2xl font-bold mb-4 text-white">Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/30">
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  If you have questions about these Terms of Service, please contact us:
                </p>
                <p className="text-[#00B4FF]">
                  Email: <a href="mailto:legal@linkium.app" className="hover:text-white transition-colors">legal@linkium.app</a>
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

export default Terms;
