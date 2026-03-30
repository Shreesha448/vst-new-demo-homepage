import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Cpu, 
  Cloud, 
  ShieldCheck, 
  Zap, 
  MessageSquare, 
  X, 
  Send, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  Globe, 
  BarChart3, 
  Layers 
} from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import { cn } from './lib/utils';

// --- Types ---
interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// --- Components ---

const Logo = ({ className }: { className?: string }) => (
  <div className={cn("flex items-center gap-2", className)}>
    <div className="relative w-8 h-8 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path d="M10 10 L40 10 L60 80 L80 10 L100 10 L65 100 L35 100 Z" fill="#1A1A3D" />
        <path d="M0 10 L30 10 L50 60 L70 10 L90 10 L55 80 L25 80 Z" fill="#ED1C24" transform="translate(5, -5)" />
      </svg>
    </div>
    <span className="text-xl font-bold tracking-tighter">
      <span className="text-brand-red">Venture</span>
      <span className="text-brand-navy">Soft</span>
    </span>
  </div>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "glass py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
          <a href="#services" className="hover:text-brand-red transition-colors">Services</a>
          <a href="#solutions" className="hover:text-brand-red transition-colors">Solutions</a>
          <a href="#success" className="hover:text-brand-red transition-colors">Success Stories</a>
          <a href="#about" className="hover:text-brand-red transition-colors">About</a>
        </div>

        <button className="bg-brand-red hover:bg-brand-red/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all transform hover:scale-105 active:scale-95">
          Get Started
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505] z-0" />
      
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-red/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold tracking-widest uppercase text-brand-red mb-6">
            Next-Gen AI & Cloud Solutions
          </span>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8 text-gradient">
            REVOLUTIONIZE YOUR <br /> DIGITAL INFRASTRUCTURE
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
            Intelligent AI-driven automation, automated multi-cloud operations, and enterprise-grade security for the modern business.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-red hover:text-white transition-all group">
              Explore Solutions
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto glass px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Watch Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="glass p-8 rounded-3xl group hover:border-brand-red/50 transition-all cursor-default"
  >
    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-red/20 group-hover:scale-110 transition-all">
      <Icon className="w-7 h-7 text-brand-red" />
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-white/50 leading-relaxed mb-6">{description}</p>
    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-brand-red group-hover:gap-3 transition-all">
      Learn More <ChevronRight className="w-4 h-4" />
    </a>
  </motion.div>
);

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Enterprise AI Strategy",
      description: "Strategic AI implementation and transformation workflows powered by intelligent automation.",
      delay: 0.1
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Operations",
      description: "Centralize and simplify operations with real-time monitoring, planning, and cost optimization.",
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: "IT Security & Compliance",
      description: "Strengthen security across all attack surfaces with centralized management for operational efficiency.",
      delay: 0.3
    },
    {
      icon: Layers,
      title: "Data Enrichment",
      description: "Revolutionize your data strategy with automated labeling and annotation for RLHF.",
      delay: 0.4
    },
    {
      icon: BarChart3,
      title: "Cost Optimization",
      description: "Automated workflows to reduce cloud spend and maximize ROI on digital investments.",
      delay: 0.5
    },
    {
      icon: Zap,
      title: "Automation Workflows",
      description: "Streamline global network operations with intelligent automation and enhanced security.",
      delay: 0.6
    }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Our Core Expertise</h2>
        <p className="text-white/50 max-w-2xl mx-auto">Driving innovation and efficiency through cutting-edge IT services and solutions.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => <ServiceCard key={i} {...s} />)}
      </div>
    </section>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm the VentureSoft AI assistant. How can I help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: `You are the VentureSoft AI assistant. VentureSoft is a company that provides multi-cloud operations, IT security, AI-driven automation, and data enrichment services. 
          Respond to the user's query professionally and helpfully. User says: ${userMessage}` }] }
        ],
        config: {
          systemInstruction: "You are a professional AI assistant for VentureSoft.ai. Be concise, technical yet approachable, and focus on VentureSoft's services: Cloud Ops, Security, and AI-driven automation. Note: VentureSoft does NOT do AI model development; they focus on implementation and automation strategy.",
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response.text || "I'm sorry, I couldn't process that." }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I'm having trouble connecting right now." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass w-[90vw] sm:w-[400px] h-[500px] rounded-3xl overflow-hidden flex flex-col mb-4 shadow-2xl"
          >
            {/* Header */}
            <div className="bg-brand-red p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-sm">VentureSoft Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex",
                  m.role === 'user' ? "justify-end" : "justify-start"
                )}>
                  <div className={cn(
                    "max-w-[80%] p-3 rounded-2xl text-sm",
                    m.role === 'user' ? "bg-brand-red text-white" : "bg-white/10 text-white/90"
                  )}>
                    <div className="prose prose-invert prose-sm">
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 p-3 rounded-2xl flex gap-1">
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce" />
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.2s]" />
                    <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type a message..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-brand-red transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-brand-red p-2 rounded-xl hover:scale-105 active:scale-95 transition-all disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 active:scale-90 transition-all group"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        <span className="absolute right-full mr-4 glass px-3 py-1.5 rounded-lg text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </button>
    </div>
  );
};

const Footer = () => (
  <footer className="py-12 px-6 border-t border-white/10">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="col-span-1 md:col-span-2">
        <Logo className="mb-6" />
        <p className="text-white/40 max-w-sm mb-6">
          Explore cutting-edge IT services and solutions that drive innovation, efficiency, and measurable results for your business.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-brand-red transition-colors">
            <Globe className="w-5 h-5" />
          </a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Solutions</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><a href="#" className="hover:text-brand-red transition-colors">Enterprise AI Strategy</a></li>
          <li><a href="#" className="hover:text-brand-red transition-colors">Cloud Operations</a></li>
          <li><a href="#" className="hover:text-brand-red transition-colors">Cybersecurity</a></li>
          <li><a href="#" className="hover:text-brand-red transition-colors">Data Enrichment</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Company</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><a href="#" className="hover:text-brand-red transition-colors">About Us</a></li>
          <li><a href="#" className="hover:text-brand-red transition-colors">Client Success</a></li>
          <li><a href="#" className="hover:text-brand-red transition-colors">Contact</a></li>
          <li><a href="#" className="hover:text-brand-red transition-colors">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-12 border-t border-white/5 text-center text-xs text-white/30">
      © 2026 VentureSoft.AI. All rights reserved.
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <Navbar />
      <Hero />
      
      <Services />

      <section className="py-24 bg-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="text-6xl font-bold text-brand-red mb-2">70%</div>
              <div className="text-white/50 font-medium">Reduction in Repair Time</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div className="text-6xl font-bold text-brand-red mb-2">10+</div>
              <div className="text-white/50 font-medium">Global Industry Leaders</div>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              <div className="text-6xl font-bold text-brand-red mb-2">24/7</div>
              <div className="text-white/50 font-medium">Automated Monitoring</div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="solutions" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="glass p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Ready to transform your business with AI?</h2>
              <p className="text-white/60 mb-8 text-lg">
                Join global leaders who are already leveraging our expertise to drive SAP transformation, enhance security, and optimize cloud operations.
              </p>
              <button className="bg-brand-red text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
                Schedule a Consultation <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-red mb-2">AgTech</h4>
                  <p className="text-xs text-white/50">Multi-Cloud Migration & Automation</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-red mb-2">Networking</h4>
                  <p className="text-xs text-white/50">Global Network Operations</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="glass p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-red mb-2">Beverage</h4>
                  <p className="text-xs text-white/50">ML & IoT Integration</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <h4 className="font-bold text-brand-red mb-2">Enterprise</h4>
                  <p className="text-xs text-white/50">SAP AI Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  );
}
