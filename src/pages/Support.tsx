import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, MessageCircle, Book, HelpCircle, Send, ChevronRight, Home } from 'lucide-react';

function Support() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const faqs = [
    {
      question: 'How do I install Linkium?',
      answer: 'Simply download the Windows installer from our homepage and run it. Linkium will automatically start and appear in your system tray.'
    },
    {
      question: 'Is Linkium really free?',
      answer: 'Yes! Linkium is completely free with no hidden costs, subscriptions, or premium tiers.'
    },
    {
      question: 'How secure is the pairing code system?',
      answer: 'The pairing code is a 10-digit secure connection that encrypts all communication between your devices. No data is stored on external servers.'
    },
    {
      question: 'What apps can I control?',
      answer: 'You can add any Windows application to your Linkium library, including games, development tools, streaming software, and more.'
    },
    {
      question: 'Can I use Linkium on multiple PCs?',
      answer: 'Yes! You can install Linkium on as many computers as you like and control them all from a single device.'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#00B4FF] to-white bg-clip-text text-transparent">
              How Can We Help?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get support, find answers, or reach out to our team
            </p>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/20 hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Email Support</h3>
                <p className="text-gray-400 text-center mb-4">Get help via email within 24 hours</p>
                <a
                  href="mailto:support@linkium.app"
                  className="block text-center text-[#00B4FF] hover:text-white transition-colors"
                >
                  support@linkium.app
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/20 hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Community</h3>
                <p className="text-gray-400 text-center mb-4">Join our Discord community</p>
                <a
                  href="#"
                  className="block text-center text-[#00B4FF] hover:text-white transition-colors"
                >
                  Join Discord
                </a>
              </div>

              <div className="p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/20 hover:border-[#00B4FF]/50 hover:shadow-[0_0_30px_rgba(0,180,255,0.2)] transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00B4FF] to-[#0088CC] rounded-xl flex items-center justify-center">
                  <Book className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-center">Documentation</h3>
                <p className="text-gray-400 text-center mb-4">Browse our guides and tutorials</p>
                <a
                  href="#"
                  className="block text-center text-[#00B4FF] hover:text-white transition-colors"
                >
                  View Docs
                </a>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mb-20">
              <h2 className="text-4xl font-bold text-center mb-12">
                <HelpCircle className="w-10 h-10 inline-block mr-3 text-[#00B4FF]" />
                Frequently Asked Questions
              </h2>
              <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    className="group p-6 rounded-xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-[#00B4FF]/30 transition-all"
                  >
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <span className="text-lg font-semibold">{faq.question}</span>
                      <ChevronRight className="w-5 h-5 text-[#00B4FF] transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="mt-4 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold text-center mb-4">
                Still Need Help?
              </h2>
              <p className="text-center text-gray-400 mb-8">
                Send us a message and we'll get back to you as soon as possible
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-gradient-to-br from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/20">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#00B4FF] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#00B4FF] focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#00B4FF] focus:outline-none transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:border-[#00B4FF] focus:outline-none transition-colors resize-none"
                    placeholder="Tell us more about your issue..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#00B4FF] to-[#0088CC] rounded-lg font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(0,180,255,0.6)] transition-all duration-300 hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-white/10 bg-black/40 backdrop-blur-lg mt-20">
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

export default Support;
