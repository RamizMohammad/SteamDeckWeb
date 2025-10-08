import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Download,
  Play,
  Zap,
  Smartphone,
  Shield,
  Settings,
  Rocket,
  Brain,
  Monitor,
  Cloud,
  Code,
  Gamepad2,
  Cpu,
  Globe,
  Lock,
  ChevronRight,
  Github,
  Twitter,
  MessageCircle,
  Youtube,
  Headphones
} from 'lucide-react';

function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: Zap,
      title: 'One-Tap Launch',
      description: 'Open any desktop app instantly from anywhere.'
    },
    {
      icon: Settings,
      title: 'Custom App Library',
      description: 'Add your own tools, games, or scripts.'
    },
    {
      icon: Shield,
      title: 'Smart Pairing Code',
      description: 'Secure, 10-digit connection. No accounts, no setup.'
    },
    {
      icon: Monitor,
      title: 'System Tray Mode',
      description: 'Always running quietly, ready when you are.'
    },
    {
      icon: Rocket,
      title: 'Auto Startup',
      description: 'Starts automatically with Windows.'
    },
    {
      icon: Brain,
      title: 'Real-Time Status',
      description: 'See connection and activity live.'
    },
    {
      icon: Globe,
      title: 'Cross-Platform Ready',
      description: 'Works across web, mobile, and PC.'
    },
    {
      icon: Cpu,
      title: 'Sleek Interface',
      description: 'Minimal, immersive, and built for speed.'
    }
  ];

  const benefits = [
    {
      emoji: '🚀',
      title: 'Get more done',
      description: 'Launch everything faster'
    },
    {
      emoji: '🎮',
      title: 'Built for power users',
      description: 'Gamers, developers, and creators'
    },
    {
      emoji: '💡',
      title: 'Smart pairing',
      description: 'No logins, no friction'
    },
    {
      emoji: '🧠',
      title: 'Private by design',
      description: 'Your data stays on your machine'
    },
    {
      emoji: '⚡',
      title: 'Always connected',
      description: 'Zero-delay cloud relay'
    }
  ];

  const useCases = [
    {
      icon: Code,
      text: 'Launch Android Studio remotely before coding'
    },
    {
      icon: Gamepad2,
      text: 'Start OBS or Chrome before you sit down'
    },
    {
      icon: Smartphone,
      text: 'Control your stream or PC setup from your phone'
    }
  ];

  const testimonials = [
    {
      quote: 'Linkium replaced my startup shortcuts — now I trigger my dev environment from anywhere.',
      author: 'Alex Chen',
      role: 'Software Developer'
    },
    {
      quote: 'It feels like a personal assistant for my PC. Game-changer for my streaming setup.',
      author: 'Sarah Martinez',
      role: 'Content Creator'
    }
  ];

  return (
    <div className="bg-[#0E1013] text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1013] via-[#181A1F] to-[#090B0E]" />

        {/* Animated gradient orbs */}
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-[#00B4FF] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '0s', animationDuration: '7s' }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 bg-[#0088CC] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"
          style={{ animationDelay: '2s', animationDuration: '9s' }}
        />
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float"
          style={{ animationDelay: '4s', animationDuration: '8s' }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />

        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle at 50% 50%, #00B4FF 0%, transparent 50%)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-lg bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/RLogo.png"
              alt="Linkium Logo"
              className="h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-xl font-bold">Linkium</h1>
              <p className="text-xs text-gray-400">SteamDeck Ecosystem</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link
              to="/support"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <Headphones className="w-4 h-4" />
              Support
            </Link>
            <button className="px-6 py-2 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(0,180,255,0.5)] transition-all duration-300">
              Download
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(/c14128d6c089208a0627d76c55139355.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px)',
            transform: `scale(1.1) translateY(${scrollY * 0.3}px)`
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full border border-[#00B4FF]/30 bg-[#00B4FF]/5 backdrop-blur-sm">
            <span className="text-[#00B4FF] text-sm font-semibold">Part of the SteamDeck Ecosystem</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
            Turn your PC into a Smart Deck
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Open, manage, and automate your desktop apps instantly — from any device. The ultimate remote control for power users, gamers, and creators.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-xl font-bold text-lg flex items-center gap-3 hover:shadow-[0_0_40px_rgba(0,180,255,0.8)] transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Download className="w-5 h-5 group-hover:animate-bounce" />
              Download Linkium for Windows
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-3 border-2 border-[#00B4FF]/50 bg-[#00B4FF]/5 backdrop-blur-sm hover:bg-[#00B4FF]/10 hover:border-[#00B4FF] transition-all duration-300 hover:scale-105">
              <Play className="w-5 h-5" />
              Watch Demo
            </button>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30">
              <div className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              No setup required
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30">
              <div className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              No login needed
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30">
              <div className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              Free forever
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-[#00B4FF] rotate-90" />
        </div>
      </section>

      {/* What Is Linkium */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00B4FF] to-white bg-clip-text text-transparent">
            Command your Computer from Anywhere
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-12">
            Linkium bridges your devices into one connected workspace. Launch any program, automate your setup, or start your workflow — instantly. It's like having a remote control for your entire PC, designed for the modern digital lifestyle.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Smartphone className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Remote Control</h3>
              <p className="text-gray-400">Access your PC from phone, tablet, or web</p>
            </div>

            <div className="p-6 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Rocket className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">PC Automation</h3>
              <p className="text-gray-400">Automate launches and workflows</p>
            </div>

            <div className="p-6 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 transition-all duration-300 group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Cloud className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-Time Connection</h3>
              <p className="text-gray-400">Zero-delay cloud relay technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-400">Everything you need to control your PC remotely</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 mb-4 bg-gradient-to-br from-[#00B4FF]/20 to-transparent rounded-xl flex items-center justify-center border border-[#00B4FF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-7 h-7 text-[#00B4FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Why People Love Linkium
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 via-transparent to-transparent border border-[#00B4FF]/20 hover:border-[#00B4FF]/50 hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] transition-all duration-300 group text-center"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{benefit.emoji}</div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-[#00B4FF] bg-clip-text text-transparent">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-full flex items-center justify-center text-3xl font-bold shadow-[0_0_40px_rgba(0,180,255,0.5)]">
                  1
                </div>
                <div className="p-6 rounded-2xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm">
                  <Monitor className="w-12 h-12 mx-auto mb-4 text-[#00B4FF]" />
                  <h3 className="text-xl font-bold mb-2">Install Linkium Receiver</h3>
                  <p className="text-gray-400">Download and run on your PC</p>
                </div>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00B4FF] to-transparent" />
            </div>

            <div className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-full flex items-center justify-center text-3xl font-bold shadow-[0_0_40px_rgba(0,180,255,0.5)]">
                  2
                </div>
                <div className="p-6 rounded-2xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm">
                  <Lock className="w-12 h-12 mx-auto mb-4 text-[#00B4FF]" />
                  <h3 className="text-xl font-bold mb-2">Get Pairing Code</h3>
                  <p className="text-gray-400">Secure 10-digit connection code</p>
                </div>
              </div>
              <div className="hidden md:block absolute top-10 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00B4FF] to-transparent" />
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-full flex items-center justify-center text-3xl font-bold shadow-[0_0_40px_rgba(0,180,255,0.5)]">
                3
              </div>
              <div className="p-6 rounded-2xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm">
                <Smartphone className="w-12 h-12 mx-auto mb-4 text-[#00B4FF]" />
                <h3 className="text-xl font-bold mb-2">Control Remotely</h3>
                <p className="text-gray-400">From any device, anywhere</p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-xl text-gray-300">
              That's it. No accounts, no subscriptions, no complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshot Gallery */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Sleek, Powerful Interface
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300" />
            <div className="relative rounded-2xl overflow-hidden border border-[#00B4FF]/30">
              <img
                src="/c14128d6c089208a0627d76c55139355.webp"
                alt="Linkium Interface"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-8 text-center">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-[#00B4FF] font-semibold">App List Manager</p>
              <p className="text-sm text-gray-400 mt-1">Organize your entire library</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-[#00B4FF] font-semibold">Pairing Panel</p>
              <p className="text-sm text-gray-400 mt-1">Secure connection setup</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <p className="text-[#00B4FF] font-semibold">Live Connection Status</p>
              <p className="text-sm text-gray-400 mt-1">Real-time monitoring</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Built for Real Workflows
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300 group"
              >
                <useCase.icon className="w-12 h-12 mb-4 text-[#00B4FF] group-hover:scale-110 transition-transform" />
                <p className="text-lg text-gray-300">{useCase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            What Users Say
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0088CC]" />
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-3xl blur-3xl opacity-30" />
            <div className="relative p-16 rounded-3xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-xl">
              <h2 className="text-5xl font-bold mb-6">
                Ready to control your PC like never before?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get started free — no setup, no login.
              </p>
              <button className="group px-10 py-5 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-xl font-bold text-xl flex items-center gap-3 mx-auto hover:shadow-[0_0_50px_rgba(0,180,255,0.8)] transition-all duration-300 hover:scale-105">
                <Download className="w-6 h-6" />
                Download Linkium for Windows
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-lg">
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
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

export default Home;
