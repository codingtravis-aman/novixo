import { motion } from 'framer-motion';
import ThreeDScene from '../components/3DScene';
import { Shield, Lock, Cpu, Eye, Users, ArrowRight } from 'lucide-react';

const securityServices = [
  {
    title: "Threat Detection",
    description: "Continuous monitoring to identify and neutralize cyber threats in real time.",
    icon: <Eye className="h-6 w-6" />
  },
  {
    title: "Network Security",
    description: "Protect your infrastructure with advanced firewalls and encryption.",
    icon: <Shield className="h-6 w-6" />
  },
  {
    title: "Compliance & Training",
    description: "Ensure your team and systems meet industry standards and best practices.",
    icon: <Users className="h-6 w-6" />
  }
];

const securityProcess = [
  { number: "01", title: "Assessment", description: "Analyze your current security posture and risks." },
  { number: "02", title: "Strategy", description: "Develop a tailored cybersecurity plan for your business." },
  { number: "03", title: "Implementation", description: "Deploy security solutions and protocols." },
  { number: "04", title: "Monitoring", description: "Continuous oversight and threat detection." },
  { number: "05", title: "Training", description: "Empower your team with security best practices." }
];

const caseStudies = [
  {
    title: "Ransomware Defense",
    category: "Healthcare",
    description: "Secured a hospital network, preventing ransomware attacks and ensuring patient data safety.",
    image: "https://images.unsplash.com/photo-1510511233900-192d6d7d6e20?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Financial Data Protection",
    category: "Finance",
    description: "Implemented encryption and monitoring, reducing data breach risk by 40%.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Employee Security Training",
    category: "Corporate",
    description: "Developed a training program that increased phishing awareness by 60%.",
    image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1000&q=80"
  }
];

const CyberSecurity = () => (
  <motion.main className="bg-dark text-white font-inter min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeDScene />
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <motion.h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Cyber Security
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-white/70 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Protect your business and data with our comprehensive cybersecurity solutions.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full">
            Secure My Business
          </a>
        </motion.div>
      </div>
      {/* Floating Security Elements */}
      <motion.div className="absolute right-10 md:right-20 top-1/3 transform -translate-y-1/2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
        <div className="relative">
          <motion.div className="absolute inset-0 bg-primary/10 rounded-2xl blur-md" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} />
          <div className="w-20 h-20 md:w-32 md:h-32 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
            <Shield className="w-10 h-10 md:w-16 md:h-16 text-primary" />
          </div>
        </div>
        <motion.div className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Lock className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
        </motion.div>
        <motion.div className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>
          <Cpu className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>

    {/* Services Section */}
    <section className="py-20 md:py-32 bg-darker relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Security Services</h2>
          <p className="text-xl text-white/70">Comprehensive protection for your digital assets</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityServices.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 md:py-32 bg-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Process</h2>
          <p className="text-xl text-white/70">How we keep you safe</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {securityProcess.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies Section */}
    <section className="py-20 md:py-32 bg-darker relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Case Studies</h2>
          <p className="text-xl text-white/70">Our proven track record in cybersecurity</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="overflow-hidden rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm flex flex-col">
              <img src={cs.image} alt={cs.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3 self-start">{cs.category}</span>
                <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
                <p className="text-white/70 mb-4 flex-1">{cs.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.main>
);

export default CyberSecurity;
