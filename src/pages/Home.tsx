import React, { useEffect, useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Brain,
  ChevronRight,
  Cloud,
  Code,
  Cpu,
  Download,
  Gamepad2,
  Github,
  Globe,
  Headphones,
  Lightbulb,
  Lock,
  Monitor,
  Rocket,
  Settings,
  Shield,
  Smartphone,
  Twitter,
  Zap,
} from 'lucide-react';

// Type definitions
interface Feature {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface Benefit {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface UseCase {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  text: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// Custom hook to detect when an element is in viewport
const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.disconnect();
      }
    }, { threshold: 0.2, ...options });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView };
};

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);
  const { ref: flowchartRef, isInView: isFlowchartInView } = useInView({ threshold: 0.1 });
  const [activeStep, setActiveStep] = useState(0);
  // For mobile, we use a simple animation trigger
  const [mobileStep, setMobileStep] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Flowchart animation effect - simplified for mobile
  useEffect(() => {
    if (isFlowchartInView) {
      if (isMobile) {
        // Mobile: simple sequential step animation with longer delays for readability
        const step1Timer = setTimeout(() => setMobileStep(1), 300);
        const step2Timer = setTimeout(() => setMobileStep(2), 1200);
        const step3Timer = setTimeout(() => setMobileStep(3), 2100);
        return () => {
          clearTimeout(step1Timer);
          clearTimeout(step2Timer);
          clearTimeout(step3Timer);
        };
      } else {
        // Desktop: full animated flowchart with line drawing
        const step1Timer = setTimeout(() => setActiveStep(1), 500);
        const step2Timer = setTimeout(() => setActiveStep(2), 1800);
        const step3Timer = setTimeout(() => setActiveStep(3), 3100);
        return () => {
          clearTimeout(step1Timer);
          clearTimeout(step2Timer);
          clearTimeout(step3Timer);
        };
      }
    } else {
      setActiveStep(0);
      setMobileStep(0);
    }
  }, [isFlowchartInView, isMobile]);

  const handleDownload = useCallback((): void => {
    const link = document.createElement('a');
    link.href = 'https://github.com/RamizMohammad/SteamDeck/releases/download/v1.0/Linkium.exe';
    link.setAttribute('download', 'Linkium.exe');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleConnect = useCallback((): void => {
    window.open('https://connection.linkium.space/', '_blank');
  }, []);

  const features: Feature[] = [
    {
      icon: Zap,
      title: 'One-Tap Launch',
      description: 'Open any desktop app instantly from anywhere.',
    },
    {
      icon: Settings,
      title: 'Custom App Library',
      description: 'Add your own tools, games, or scripts.',
    },
    {
      icon: Shield,
      title: 'Smart Pairing Code',
      description: 'Secure, 10-digit connection. No accounts, no setup.',
    },
    {
      icon: Monitor,
      title: 'System Tray Mode',
      description: 'Always running quietly, ready when you are.',
    },
    {
      icon: Rocket,
      title: 'Auto Startup',
      description: 'Starts automatically with Windows.',
    },
    {
      icon: Brain,
      title: 'Real-Time Status',
      description: 'See connection and activity live.',
    },
    {
      icon: Globe,
      title: 'Cross-Platform Ready',
      description: 'Works across web, mobile, and PC.',
    },
    {
      icon: Cpu,
      title: 'Sleek Interface',
      description: 'Minimal, immersive, and built for speed.',
    },
  ];

  const benefits: Benefit[] = [
    {
      icon: Rocket,
      title: 'Get more done',
      description: 'Launch everything faster',
    },
    {
      icon: Gamepad2,
      title: 'Built for power users',
      description: 'Gamers, developers, and creators',
    },
    {
      icon: Lightbulb,
      title: 'Smart pairing',
      description: 'No logins, no friction',
    },
    {
      icon: Brain,
      title: 'Private by design',
      description: 'Your data stays on your machine',
    },
    {
      icon: Zap,
      title: 'Always connected',
      description: 'Zero-delay cloud relay',
    },
  ];

  const useCases: UseCase[] = [
    {
      icon: Code,
      text: 'Launch Android Studio or Vs Code remotely before coding',
    },
    {
      icon: Gamepad2,
      text: 'Start OBS or Chrome before you sit down',
    },
    {
      icon: Smartphone,
      text: 'Control your stream or PC setup from your phone',
    },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: 'Linkium replaced my startup shortcuts — now I trigger my dev environment from anywhere.',
      author: 'Shivam Roy',
      role: 'Youtube Creator',
    },
    {
      quote: 'It feels like a personal assistant for my PC. Game-changer for my streaming setup.',
      author: 'Mridul Hemrajani',
      role: 'Streamer',
    },
    {
      quote: 'It feels like a magic just sit on chair one click and the code begins',
      author: 'Pallav Praksh',
      role: 'Developer',
    },
    {
      quote: 'Linkium, I prefer this is a helping tool as a creator i need to open many apps at once. Linkium helps a lot 😊',
      author: 'Anuj Singh',
      role: 'Reel Creator',
    },
  ];

  // Current step for animation (works for both mobile and desktop)
  const currentStep = isMobile ? mobileStep : activeStep;

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
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 border-b border-white/10 backdrop-blur-lg bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src="/RLogo.png"
              alt="Linkium Logo"
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold">Linkium</h1>
              <p className="text-[10px] sm:text-xs text-gray-400">Multi Device Connection</p>
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              to="/support"
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all"
            >
              <Headphones className="w-4 h-4" />
              Support
            </Link>
            <button
              onClick={handleDownload}
              className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,180,255,0.5)] transition-all duration-300"
            >
              Download
            </button>
            <button
              onClick={handleConnect}
              className="px-4 sm:px-6 py-1.5 sm:py-2 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-lg font-semibold text-sm sm:text-base hover:shadow-[0_0_20px_rgba(0,180,255,0.5)] transition-all duration-300"
            >
              Connect
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden pt-20 sm:pt-0">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url(/c14128d6c089208a0627d76c55139355.webp)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'blur(40px)',
            transform: `scale(1.1) translateY(${scrollY * 0.3}px)`,
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 sm:mb-6 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-[#00B4FF]/30 bg-[#00B4FF]/5 backdrop-blur-sm">
            <span className="text-[#00B4FF] text-xs sm:text-sm font-semibold">Part of Ramiz Dev Universe</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent leading-tight">
            Turn your PC into a Smart Deck
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            Open, manage, and automate your desktop apps instantly — from any device. The ultimate remote control for power users, gamers, and creators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDownload}
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-xl font-bold text-base sm:text-lg flex items-center gap-2 sm:gap-3 hover:shadow-[0_0_40px_rgba(0,180,255,0.8)] transition-all duration-300 hover:scale-105 hover:-translate-y-1"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" />
              Download Linkium for Windows
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="mt-12 sm:mt-16 flex flex-wrap justify-center gap-3 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              No setup required
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              No login needed
            </div>
            <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71]/30">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2ECC71] rounded-full animate-pulse" />
              Free forever
            </div>
          </div>
        </div>

        <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4FF] rotate-90" />
        </div>
      </section>

      {/* What Is Linkium */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-[#00B4FF] to-white bg-clip-text text-transparent">
            Command your Computer from Anywhere
          </h2>
          <p className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10 sm:mb-12 px-2">
            Linkium bridges your devices into one connected workspace. Launch any program, automate your setup, or start your workflow — instantly. It's like having a remote control for your entire PC, designed for the modern digital lifestyle.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-16">
            <div className="p-5 sm:p-6 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 transition-all duration-300 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Smartphone className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Remote Control</h3>
              <p className="text-sm sm:text-base text-gray-400">Access your PC from phone, tablet, or web</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 transition-all duration-300 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Rocket className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">PC Automation</h3>
              <p className="text-sm sm:text-base text-gray-400">Automate launches and workflows</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 transition-all duration-300 group">
              <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                <Cloud className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">Real-Time Connection</h3>
              <p className="text-sm sm:text-base text-gray-400">Zero-delay cloud relay technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-bold mb-3 sm:mb-4">Powerful Features</h2>
            <p className="text-base sm:text-xl text-gray-400">Everything you need to control your PC remotely</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300 group"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 mb-3 sm:mb-4 bg-gradient-to-br from-[#00B4FF]/20 to-transparent rounded-xl flex items-center justify-center border border-[#00B4FF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#00B4FF] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base sm:text-lg font-bold mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">Why People Love Linkium</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 via-transparent to-transparent border border-[#00B4FF]/20 hover:border-[#00B4FF]/50 hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] transition-all duration-300 group text-center"
                >
                  <div className="w-14 h-14 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#00B4FF]/20 to-transparent rounded-xl flex items-center justify-center border border-[#00B4FF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <IconComponent className="w-7 h-7 text-[#00B4FF] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-white to-[#00B4FF] bg-clip-text text-transparent">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-400">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works - Mobile Optimized Version */}
      <section 
        ref={flowchartRef as React.LegacyRef<HTMLElement>}
        className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Three simple steps to connect and control your PC from anywhere
          </p>

          {/* Mobile Optimized Stepper */}
          {isMobile ? (
            <div className="relative">
              {/* Progress Bar */}
              <div className="absolute left-6 top-12 bottom-12 w-0.5 bg-[#00B4FF]/20 z-0">
                <div 
                  className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00B4FF] to-[#0088CC] transition-all duration-700 ease-out rounded-full"
                  style={{ 
                    height: `${(currentStep - 1) * 50}%`,
                    maxHeight: currentStep >= 3 ? '100%' : '0%',
                    opacity: currentStep >= 1 ? 1 : 0
                  }}
                />
              </div>

              {/* Step 1 */}
              <div className={`relative flex gap-4 mb-8 transition-all duration-500 ${currentStep >= 1 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0088CC] flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${currentStep >= 1 ? 'scale-100' : 'scale-75'}`}>
                    {currentStep > 1 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      '1'
                    )}
                  </div>
                  {currentStep >= 1 && (
                    <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#00B4FF]" style={{ animationDelay: '0s' }} />
                  )}
                </div>
                <div className={`flex-1 bg-gradient-to-br from-[#00B4FF]/10 to-transparent rounded-2xl p-4 border border-[#00B4FF]/30 backdrop-blur-sm transition-all duration-500 ${currentStep >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Monitor className="w-5 h-5 text-[#00B4FF]" />
                    <h3 className="font-bold text-lg">Install Linkium</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Download & run the receiver on your Windows PC</p>
                  {currentStep === 1 && (
                    <div className="mt-3 pt-3 border-t border-[#00B4FF]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-[#00B4FF] rounded-full animate-pulse"></div>
                        <span className="text-xs text-[#00B4FF]">Ready to install</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 2 */}
              <div className={`relative flex gap-4 mb-8 transition-all duration-500 delay-300 ${currentStep >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0088CC] flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${currentStep >= 2 ? 'scale-100' : 'scale-75'}`}>
                    {currentStep > 2 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      '2'
                    )}
                  </div>
                  {currentStep >= 2 && (
                    <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#00B4FF]" style={{ animationDelay: '0.5s' }} />
                  )}
                </div>
                <div className={`flex-1 bg-gradient-to-br from-[#00B4FF]/10 to-transparent rounded-2xl p-4 border border-[#00B4FF]/30 backdrop-blur-sm transition-all duration-500 ${currentStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Lock className="w-5 h-5 text-[#00B4FF]" />
                    <h3 className="font-bold text-lg">Get Pairing Code</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Secure 10-digit code — no account needed</p>
                  {currentStep === 2 && (
                    <div className="mt-3 pt-3 border-t border-[#00B4FF]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-yellow-400">Generating secure code...</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Step 3 */}
              <div className={`relative flex gap-4 transition-all duration-500 delay-600 ${currentStep >= 3 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0088CC] flex items-center justify-center text-white font-bold shadow-lg transition-all duration-500 ${currentStep >= 3 ? 'scale-100' : 'scale-75'}`}>
                    {currentStep >= 3 ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      '3'
                    )}
                  </div>
                  {currentStep >= 3 && (
                    <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#00B4FF]" style={{ animationDelay: '1s' }} />
                  )}
                </div>
                <div className={`flex-1 bg-gradient-to-br from-[#00B4FF]/10 to-transparent rounded-2xl p-4 border border-[#00B4FF]/30 backdrop-blur-sm transition-all duration-500 ${currentStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="w-5 h-5 text-[#00B4FF]" />
                    <h3 className="font-bold text-lg">Control Remotely</h3>
                  </div>
                  <p className="text-gray-400 text-sm">Launch apps from any device, anywhere</p>
                  {currentStep === 3 && (
                    <div className="mt-3 pt-3 border-t border-[#00B4FF]/20">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-400">Connected! Ready to control</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Completion Badge */}
              <div className={`mt-8 text-center transition-all duration-700 ${currentStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-300">Active connection</span>
                  <div className="w-px h-3 bg-[#00B4FF]/30"></div>
                  <Lock className="w-3 h-3 text-[#2ECC71]" />
                  <span className="text-xs text-gray-300">End-to-end encrypted</span>
                </div>
              </div>

              <div className={`mt-6 text-center transition-all duration-700 delay-300 ${currentStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-sm text-gray-300">
                  That's it. <span className="text-[#00B4FF] font-semibold">No accounts, no subscriptions.</span>
                </p>
              </div>
            </div>
          ) : (
            /* Desktop Animated Flowchart */
            <div className="relative min-h-[600px] md:min-h-[500px]">
              {/* SVG Connecting Lines - Animated drawing effect */}
              <div className="hidden md:block absolute inset-0 z-0 pointer-events-none" style={{ top: '15%', height: '70%' }}>
                <svg className="w-full h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#00B4FF" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#0088CC" stopOpacity="1">
                        <animate attributeName="stop-opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    <linearGradient id="lineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0088CC" stopOpacity="1" />
                      <stop offset="100%" stopColor="#00B4FF" stopOpacity="0.8">
                        <animate attributeName="stop-opacity" values="0.3;1;0.3" dur="1.5s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    <filter id="glowLine" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Line 1: Step 1 to Step 2 */}
                  <g filter="url(#glowLine)">
                    <line
                      x1="180"
                      y1="60"
                      x2="500"
                      y2="60"
                      stroke="rgba(0,180,255,0.15)"
                      strokeWidth="3"
                      strokeDasharray="8,8"
                    />
                    <line
                      x1="180"
                      y1="60"
                      x2="500"
                      y2="60"
                      stroke="url(#lineGrad1)"
                      strokeWidth="3"
                      strokeDasharray={`${(activeStep - 1) * 320}, 1000`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dasharray 0.8s ease-out' }}
                    />
                    <circle r="4" fill="#00B4FF" opacity="0.9">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M180,60 L500,60" begin="0s" />
                    </circle>
                    <polygon 
                      points="495,54 510,60 495,66" 
                      fill="#00B4FF"
                      opacity={activeStep > 1 ? 1 : 0}
                      style={{ transition: 'opacity 0.3s ease' }}
                    />
                  </g>

                  {/* Line 2: Step 2 to Step 3 */}
                  <g filter="url(#glowLine)">
                    <line
                      x1="500"
                      y1="60"
                      x2="820"
                      y2="60"
                      stroke="rgba(0,180,255,0.15)"
                      strokeWidth="3"
                      strokeDasharray="8,8"
                    />
                    <line
                      x1="500"
                      y1="60"
                      x2="820"
                      y2="60"
                      stroke="url(#lineGrad2)"
                      strokeWidth="3"
                      strokeDasharray={`${(activeStep - 2) * 320}, 1000`}
                      strokeLinecap="round"
                      style={{ transition: 'stroke-dasharray 0.8s ease-out 0.3s' }}
                    />
                    <circle r="4" fill="#0088CC" opacity="0.9">
                      <animateMotion dur="2s" repeatCount="indefinite" path="M500,60 L820,60" begin="0.5s" />
                    </circle>
                    <polygon 
                      points="815,54 830,60 815,66" 
                      fill="#0088CC"
                      opacity={activeStep > 2 ? 1 : 0}
                      style={{ transition: 'opacity 0.3s ease' }}
                    />
                  </g>
                </svg>
              </div>

              {/* Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 relative z-10">
                {/* Step 1 */}
                <div className={`transform transition-all duration-700 ${activeStep >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="group relative text-center">
                    {activeStep >= 1 && (
                      <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#00B4FF] -z-10" 
                           style={{ width: '88px', height: '88px', left: '50%', transform: 'translateX(-50%)', top: '-6px' }} />
                    )}
                    
                    <div className="relative inline-block mb-6">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-[0_0_40px_rgba(0,180,255,0.5)] transition-all duration-500 ${activeStep >= 1 ? 'scale-100' : 'scale-75'}`}>
                        1
                        {activeStep >= 1 && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full text-xs flex items-center justify-center animate-bounce-in">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`p-6 rounded-2xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-[#00B4FF]/60 group-hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] ${activeStep >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF]/20 to-transparent rounded-xl flex items-center justify-center border border-[#00B4FF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-[#00B4FF] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[#00B4FF] bg-clip-text text-transparent">
                        Install Linkium
                      </h3>
                      <p className="text-gray-400">Download & run the receiver on your Windows PC</p>
                      
                      {activeStep === 1 && (
                        <div className="mt-4 pt-4 border-t border-[#00B4FF]/20">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-[#00B4FF] rounded-full animate-pulse"></div>
                            <span className="text-xs text-[#00B4FF]">Installing...</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-[#00B4FF]/20 text-left">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-[#00B4FF] rounded-full"></div>
                          <span>One-click installer</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <div className="w-1.5 h-1.5 bg-[#00B4FF] rounded-full"></div>
                          <span>Runs in system tray</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className={`transform transition-all duration-700 delay-300 ${activeStep >= 2 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="group relative text-center">
                    {activeStep >= 2 && (
                      <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#00B4FF] -z-10" 
                           style={{ width: '88px', height: '88px', left: '50%', transform: 'translateX(-50%)', top: '-6px', animationDelay: '0.5s' }} />
                    )}
                    
                    <div className="relative inline-block mb-6">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-[0_0_40px_rgba(0,180,255,0.5)] transition-all duration-500 ${activeStep >= 2 ? 'scale-100' : 'scale-75'}`}>
                        2
                        {activeStep >= 2 && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full text-xs flex items-center justify-center animate-bounce-in">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`p-6 rounded-2xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-[#00B4FF]/60 group-hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] ${activeStep >= 2 ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF]/20 to-transparent rounded-xl flex items-center justify-center border border-[#00B4FF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-[#00B4FF] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[#00B4FF] bg-clip-text text-transparent">
                        Get Pairing Code
                      </h3>
                      <p className="text-gray-400">Secure 10-digit code — no account needed</p>
                      
                      {activeStep === 2 && (
                        <div className="mt-4 pt-4 border-t border-[#00B4FF]/20">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-yellow-400">Generating secure code...</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-[#00B4FF]/20 text-left">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-[#00B4FF] rounded-full animate-pulse"></div>
                          <span>End-to-end encrypted</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <div className="w-1.5 h-1.5 bg-[#00B4FF] rounded-full"></div>
                          <span>Changes every session</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className={`transform transition-all duration-700 delay-500 ${activeStep >= 3 ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
                  <div className="group relative text-center">
                    {activeStep >= 3 && (
                      <div className="absolute inset-0 rounded-full animate-ping-slow opacity-30 bg-[#00B4FF] -z-10" 
                           style={{ width: '88px', height: '88px', left: '50%', transform: 'translateX(-50%)', top: '-6px', animationDelay: '1s' }} />
                    )}
                    
                    <div className="relative inline-block mb-6">
                      <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-full flex items-center justify-center text-3xl sm:text-4xl font-bold shadow-[0_0_40px_rgba(0,180,255,0.5)] transition-all duration-500 ${activeStep >= 3 ? 'scale-100' : 'scale-75'}`}>
                        3
                        {activeStep >= 3 && (
                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full text-xs flex items-center justify-center animate-bounce-in">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className={`p-6 rounded-2xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-sm transition-all duration-500 group-hover:scale-105 group-hover:border-[#00B4FF]/60 group-hover:shadow-[0_0_40px_rgba(0,180,255,0.3)] ${activeStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF]/20 to-transparent rounded-xl flex items-center justify-center border border-[#00B4FF]/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-[#00B4FF] group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-white to-[#00B4FF] bg-clip-text text-transparent">
                        Control Remotely
                      </h3>
                      <p className="text-gray-400">Launch apps from any device, anywhere</p>
                      
                      {activeStep === 3 && (
                        <div className="mt-4 pt-4 border-t border-[#00B4FF]/20">
                          <div className="flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <span className="text-xs text-green-400">Connected! Ready to control</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-4 pt-4 border-t border-[#00B4FF]/20 text-left">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1.5 h-1.5 bg-[#00B4FF] rounded-full animate-pulse"></div>
                          <span>Real-time connection</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                          <div className="w-1.5 h-1.5 bg-[#00B4FF] rounded-full"></div>
                          <span>Cross-platform support</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Completion message */}
              <div className={`mt-12 text-center transition-all duration-1000 ${activeStep >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="inline-flex flex-wrap justify-center items-center gap-3 px-6 py-3 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 backdrop-blur-sm">
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Active connection</span>
                  </div>
                  <div className="w-px h-4 bg-[#00B4FF]/30"></div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-[#00B4FF] animate-spin-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    <span className="text-sm text-gray-300">Zero-delay cloud relay</span>
                  </div>
                  <div className="w-px h-4 bg-[#00B4FF]/30"></div>
                  <div className="flex items-center gap-1">
                    <Lock className="w-3 h-3 text-[#2ECC71]" />
                    <span className="text-sm text-gray-300">End-to-end encrypted</span>
                  </div>
                </div>
              </div>

              <div className={`mt-8 text-center transition-all duration-1000 delay-300 ${activeStep >= 3 ? 'opacity-100' : 'opacity-0'}`}>
                <p className="text-base sm:text-xl text-gray-300 px-4">
                  That's it. <span className="text-[#00B4FF] font-semibold">No accounts, no subscriptions, no complexity.</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Use Cases */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">Built for Real Workflows</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300 group"
              >
                <useCase.icon className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 text-[#00B4FF] group-hover:scale-110 transition-transform" />
                <p className="text-base sm:text-lg text-gray-300">{useCase.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">What Users Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/20 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#00B4FF] to-[#0088CC]" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 sm:py-32 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-3xl blur-3xl opacity-30" />
            <div className="relative p-8 sm:p-12 md:p-16 rounded-3xl border border-[#00B4FF]/30 bg-gradient-to-b from-[#00B4FF]/10 to-transparent backdrop-blur-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Ready to control your PC like never before?</h2>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8">Get started free — no setup, no login.</p>
              <button
                onClick={handleDownload}
                className="group px-6 sm:px-10 py-3 sm:py-5 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-xl font-bold text-base sm:text-xl flex items-center gap-2 sm:gap-3 mx-auto hover:shadow-[0_0_50px_rgba(0,180,255,0.8)] transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                Download Linkium for Windows
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <img
                src="/RLogo.png"
                alt="Linkium Logo"
                className="h-10 sm:h-12 w-auto object-contain"
              />
              <div>
                <h3 className="text-lg sm:text-xl font-bold">Linkium</h3>
                <p className="text-xs sm:text-sm text-gray-400">Built by SteamDeck Ecosystem</p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
            <p>© Linkium 2025. All rights reserved to Mohammad Ramiz.</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <Link to="/support" className="hover:text-[#00B4FF] transition-colors">Contact</Link>
              <Link to="/privacy" className="hover:text-[#00B4FF] transition-colors">Privacy</Link>
              <Link to="/terms" className="hover:text-[#00B4FF] transition-colors">Terms</Link>
              <Link to="/developer" className="hover:text-[#00B4FF] transition-colors">Developer</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Global CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        @keyframes ping-slow {
          0% { transform: scale(0.8); opacity: 0.5; }
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-bounce-in {
          animation: bounce-in 0.4s ease-out forwards;
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(0, 180, 255, 0.4); }
          50% { box-shadow: 0 0 50px rgba(0, 180, 255, 0.8); }
        }
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(0, 180, 255, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 180, 255, 0.08) 1px, transparent 1px);
          background-size: 60px 60px;
        }
      `}</style>
    </div>
  );
};
export default Home;