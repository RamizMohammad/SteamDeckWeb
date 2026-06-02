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
  Zap,
} from 'lucide-react';
import NetworkBackground from './NetworkBackground';

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

// Custom X (Twitter) Icon Component
const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

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
  const { ref: flowchartRef, isInView: isFlowchartInView } = useInView({ threshold: 0.15 });
  const [activeStep, setActiveStep] = useState(0);
  const [showTickAll, setShowTickAll] = useState(false);
  const animationTimeoutRef = useRef<NodeJS.Timeout[]>([]);
  const isAnimatingRef = useRef(false);

  // Cleanup function for timeouts
  const clearAllTimeouts = () => {
    animationTimeoutRef.current.forEach(timeout => clearTimeout(timeout));
    animationTimeoutRef.current = [];
  };

  // Unified flowchart animation effect with proper cleanup
  useEffect(() => {
    // Clear any existing animation when component unmounts or view changes
    clearAllTimeouts();
    
    if (isFlowchartInView && !isAnimatingRef.current) {
      isAnimatingRef.current = true;
      
      // Start animation sequence
      const animateSteps = () => {
        setActiveStep(1);
        setShowTickAll(false);
        
        const step2Timer = setTimeout(() => setActiveStep(2), 1000);
        const step3Timer = setTimeout(() => setActiveStep(3), 2000);
        const completionTimer = setTimeout(() => {
          setShowTickAll(true);
        }, 3000);
        
        // Reset and repeat after 8 seconds
        const repeatTimer = setTimeout(() => {
          if (isFlowchartInView) {
            setActiveStep(0);
            setShowTickAll(false);
            animateSteps();
          } else {
            isAnimatingRef.current = false;
          }
        }, 8000);
        
        // Store all timeouts for cleanup
        animationTimeoutRef.current.push(step2Timer, step3Timer, completionTimer, repeatTimer);
      };
      
      animateSteps();
    } else if (!isFlowchartInView) {
      // Reset animation when out of view
      setActiveStep(0);
      setShowTickAll(false);
      isAnimatingRef.current = false;
    }
    
    return () => {
      clearAllTimeouts();
      isAnimatingRef.current = false;
    };
  }, [isFlowchartInView]);

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

  const steps = [
    {
      id: 1,
      title: "Install Linkium",
      desc: "Download & run the receiver on your Windows PC",
      icon: Monitor,
      details: [
        { text: "One-click installer", icon: "check" },
        { text: "Runs in system tray", icon: "check" }
      ]
    },
    {
      id: 2,
      title: "Get Pairing Code",
      desc: "Secure 10-digit code — no account needed",
      icon: Lock,
      details: [
        { text: "End-to-end encrypted", icon: "pulse" },
        { text: "Changes every session", icon: "check" }
      ]
    },
    {
      id: 3,
      title: "Control Remotely",
      desc: "Launch apps from any device, anywhere",
      icon: Smartphone,
      details: [
        { text: "Real-time connection", icon: "pulse" },
        { text: "Cross-platform support", icon: "check" }
      ]
    },
  ];

  // Helper function to determine if a step should show tick mark
  const shouldShowTick = (stepId: number) => {
    if (showTickAll) return true;
    return activeStep > stepId;
  };

  return (
    <div className="app-container" style={{ position: 'relative', zIndex: 2, background: 'transparent' }}>
      {/* Network Animation Background */}
      <NetworkBackground />
      
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

      {/* How It Works - Fully Responsive with Fixed Animation */}
      <section 
        ref={flowchartRef as React.LegacyRef<HTMLElement>}
        className="relative py-20 sm:py-32 px-4 sm:px-6 bg-gradient-to-b from-transparent via-[#00B4FF]/5 to-transparent"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-center text-gray-400 mb-12 sm:mb-16 max-w-2xl mx-auto px-4">
            Three simple steps to connect and control your PC from anywhere
          </p>

          <div className="space-y-8 sm:space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep >= step.id;
              const isLast = index === steps.length - 1;
              const showTick = shouldShowTick(step.id);

              return (
                <div key={step.id} className="relative flex gap-4 sm:gap-6">
                  {/* Left Side - Icon and Connector */}
                  <div className="relative flex flex-col items-center">
                    {/* Circle */}
                    <div
                      className={`
                        relative z-10
                        w-12 h-12 sm:w-16 sm:h-16 rounded-full
                        flex items-center justify-center
                        bg-gradient-to-br from-[#00B4FF] to-[#0088CC]
                        shadow-lg transition-all duration-500
                        ${(isActive || showTickAll) ? "scale-100" : "scale-75 opacity-50"}
                      `}
                    >
                      {showTick ? (
                        <svg
                          className="w-5 h-5 sm:w-7 sm:h-7"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <span className="text-base sm:text-2xl font-bold">{step.id}</span>
                      )}

                      {(isActive || showTickAll) && !showTick && (
                        <div className="absolute inset-0 rounded-full bg-[#00B4FF] opacity-30 animate-ping" />
                      )}
                    </div>

                    {/* Connector Line - only between steps */}
                    {!isLast && (
                      <div className="relative w-[2px] h-16 sm:h-24 bg-[#00B4FF]/20 overflow-hidden mt-2">
                        <div
                          className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00B4FF] to-[#0088CC] transition-all duration-1000 ease-out"
                          style={{
                            height: (activeStep > step.id || showTickAll) ? "100%" : "0%",
                            boxShadow: "0 0 12px #00B4FF",
                          }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Side - Card Content */}
                  <div
                    className={`
                      flex-1 rounded-2xl p-4 sm:p-6
                      border border-[#00B4FF]/30
                      bg-gradient-to-br from-[#00B4FF]/10 to-transparent
                      backdrop-blur-sm
                      transition-all duration-500
                      ${(isActive || showTickAll)
                        ? "opacity-100 translate-y-0"
                        : "opacity-50 translate-y-2"
                      }
                    `}
                  >
                    <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#00B4FF]" />
                      <h3 className="text-base sm:text-xl font-bold">{step.title}</h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-400">{step.desc}</p>

                    {/* Additional details for active step */}
                    {step.id === 1 && isActive && activeStep === 1 && !showTickAll && (
                      <div className="mt-3 pt-3 border-t border-[#00B4FF]/20">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-[#00B4FF] rounded-full animate-pulse" />
                          <span className="text-xs text-[#00B4FF]">Ready to install</span>
                        </div>
                      </div>
                    )}

                    {step.id === 2 && isActive && activeStep === 2 && !showTickAll && (
                      <div className="mt-3 pt-3 border-t border-[#00B4FF]/20">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                          <span className="text-xs text-yellow-400">Generating secure code...</span>
                        </div>
                      </div>
                    )}

                    {step.id === 3 && isActive && activeStep === 3 && !showTickAll && (
                      <div className="mt-3 pt-3 border-t border-[#00B4FF]/20">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                          <span className="text-xs text-green-400">Connected! Ready to control</span>
                        </div>
                      </div>
                    )}

                    {/* Details grid */}
                    <div className="mt-3 pt-3 border-t border-[#00B4FF]/20 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${detail.icon === 'pulse' ? 'bg-[#00B4FF] animate-pulse' : 'bg-[#00B4FF]'}`} />
                          <span className="text-xs text-gray-500">{detail.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Completion Badge */}
          <div className={`mt-8 sm:mt-12 text-center transition-all duration-700 ${showTickAll ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="inline-flex flex-wrap justify-center items-center gap-2 px-4 py-2 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/30 backdrop-blur-sm">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-[#2ECC71] rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-gray-300">Active connection</span>
              </div>
              <div className="w-px h-3 bg-[#00B4FF]/30 hidden sm:block" />
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 text-[#00B4FF] animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span className="text-xs sm:text-sm text-gray-300 hidden sm:inline">Zero-delay cloud relay</span>
              </div>
              <div className="w-px h-3 bg-[#00B4FF]/30 hidden sm:block" />
              <div className="flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#2ECC71]" />
                <span className="text-xs sm:text-sm text-gray-300">End-to-end encrypted</span>
              </div>
            </div>
          </div>

          <div className={`mt-6 text-center transition-all duration-700 delay-300 ${showTickAll ? 'opacity-100' : 'opacity-0'}`}>
            <p className="text-sm sm:text-base text-gray-300">
              That's it. <span className="text-[#00B4FF] font-semibold">No accounts, no subscriptions.</span>
            </p>
          </div>
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
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all group"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#00B4FF] transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg border border-white/10 flex items-center justify-center hover:border-[#00B4FF] hover:bg-[#00B4FF]/10 transition-all group"
              >
                <XIcon className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:text-[#00B4FF] transition-colors" />
              </a>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400">
            <p className="leading-relaxed">
               © 2026 Linkium. All rights reserved to Mohammad Ramiz.
                  <br />
                <strong>Architecture & Core Developer:</strong> Mohammad Ramiz
                 <br />
                <strong>UI/UX Designer:</strong> Abhishek Mondal
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
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
};

export default Home;
