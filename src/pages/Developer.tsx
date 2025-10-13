import {
  ArrowLeft,
  Code2,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Play,
  Store,
  User
} from 'lucide-react';
import { Link } from 'react-router-dom';

function Developer() {
  const profiles = [
    {
      icon: Github,
      name: 'GitHub',
      description: 'Open source projects and code repositories',
      url: 'https://github.com/RamizMohammad',
      color: 'from-gray-500 to-gray-700',
      borderColor: 'border-gray-500/50'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      description: 'Professional network and career',
      url: 'https://linkedin.com/in/RamizMohammad',
      color: 'from-blue-500 to-blue-700',
      borderColor: 'border-blue-500/50'
    },
    {
      icon: Globe,
      name: 'Portfolio',
      description: 'Personal portfolio website',
      url: 'https://www.mohammadramiz.in',
      color: 'from-cyan-500 to-cyan-700',
      borderColor: 'border-cyan-500/50'
    },
    {
      icon: Play,
      name: 'Google Play',
      description: 'Android apps on Google Play Store',
      url: 'https://play.google.com/store/apps/dev?id=7747635745987607440&hl=en',
      color: 'from-green-500 to-green-700',
      borderColor: 'border-green-500/50'
    },
    {
      icon: Code2,
      name: 'Google Developer',
      description: 'Google Developer profile',
      url: 'https://developers.google.com/profile/u/MohammadRamiz',
      color: 'from-red-500 to-yellow-500',
      borderColor: 'border-red-500/50'
    },
    {
      icon: Store,
      name: 'Windows Store',
      description: 'Apps on Microsoft Store',
      url: 'https://www.mohammadramiz.in/windowapp',
      color: 'from-blue-600 to-blue-800',
      borderColor: 'border-blue-600/50'
    }
  ];

  return (
    <div className="bg-[#0E1013] text-white min-h-screen overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1013] via-[#181A1F] to-[#090B0E]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0088CC] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-lg bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/RLogo.png"
              alt="Linkium Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold">Linkium</h1>
              <p className="text-xs text-gray-400">Multi Device Connection</p>
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Developer Info Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-3xl flex items-center justify-center shadow-[0_0_60px_rgba(0,180,255,0.5)]">
                <User className="w-16 h-16" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
              Developer Profile
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Connect with me across different platforms and explore my work in software development, mobile apps, and desktop applications.
            </p>
          </div>

          {/* Profile Links Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 bg-gradient-to-br ${profile.color} rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <profile.icon className="w-7 h-7 text-white" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-[#00B4FF] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00B4FF] transition-colors">
                  {profile.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {profile.description}
                </p>
              </a>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-br from-[#00B4FF]/10 to-transparent backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center">
                <Code2 className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-bold">About the Developer</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Passionate about creating seamless user experiences and building innovative software solutions.
              Specializing in cross-platform development, desktop applications, and mobile apps with a focus
              on performance and user-centric design. Always exploring new technologies and pushing the
              boundaries of what's possible.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-[#00B4FF]/20 border border-[#00B4FF]/30 text-sm font-semibold">
                Desktop Development
              </span>
              <span className="px-4 py-2 rounded-full bg-[#00B4FF]/20 border border-[#00B4FF]/30 text-sm font-semibold">
                Mobile Apps
              </span>
              <span className="px-4 py-2 rounded-full bg-[#00B4FF]/20 border border-[#00B4FF]/30 text-sm font-semibold">
                Web Development
              </span>
              <span className="px-4 py-2 rounded-full bg-[#00B4FF]/20 border border-[#00B4FF]/30 text-sm font-semibold">
                UI/UX Design
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-lg mt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/RLogo.png"
                alt="Linkium Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold">Linkium</h3>
                <p className="text-sm text-gray-400">Built by SteamDeck Ecosystem</p>
              </div>
            </div>

            <div className="flex gap-6">
              {profiles.slice(0, 4).map((profile, index) => (
                <a
                  key={index}
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
                >
                  <profile.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© Linkium 2025. All rights reserved.</p>
            <div className="flex gap-6">
              <Link to="/support" className="hover:text-[#00B4FF] transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-[#00B4FF] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[#00B4FF] transition-colors">Terms</Link>
              <Link to="/developer" className="hover:text-[#00B4FF] transition-colors">Developer</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Developer;
