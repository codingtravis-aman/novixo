import { motion } from 'framer-motion';
import ThreeDScene from '@/components/3DScene';
import { 
  Mail, Phone, MapPin, ArrowRight, Zap,
  Linkedin, Twitter, Facebook, Instagram, MessageSquare, Github, Youtube,
  Cpu, Briefcase, Users, Headset, CalendarDays, Building, Check
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from "../hooks/use-toast";
import ContactSection from '../sections/Contact';

// Same animation variants as UX/UI Design page
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactOptions = [
    {
      title: "Instant Support",
      icon: <Headset className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />,
      description: "Real-time assistance from our expert team",
      features: [
        "24/7 instant connection",
        "5-min average response time",
        "Technical & account specialists"
      ],
      action: {
        label: "Chat Now",
        icon: <MessageSquare className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      }
    },
    {
      title: "Book Consultation",
      icon: <CalendarDays className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />,
      description: "Personalized 1-on-1 sessions with our pros",
      features: [
        "Flexible scheduling",
        "Screen sharing enabled",
        "30/60 minute options"
      ],
      action: {
        label: "Schedule Now",
        icon: <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      }
    },
    {
      title: "Visit HQ",
      icon: <Building className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />,
      description: "Experience our innovation center first-hand",
      features: [
        "Modern workspace tour",
        "Free parking available",
        "Mon-Fri 9AM-6PM"
      ],
      action: {
        label: "Get Directions",
        icon: <MapPin className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
      }
    }
  ];

  const services = [
    "UX/UI Design",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "DevOps Services",
    "Custom Software"
  ];

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, url: '#' },
    { name: 'Twitter', icon: <Twitter className="h-5 w-5" />, url: '#' },
    { name: 'Facebook', icon: <Facebook className="h-5 w-5" />, url: '#' },
    { name: 'Instagram', icon: <Instagram className="h-5 w-5" />, url: '#' },
    { name: 'WhatsApp', icon: <MessageSquare className="h-5 w-5" />, url: '#' },
    { name: 'GitHub', icon: <Github className="h-5 w-5" />, url: '#' },
    { name: 'YouTube', icon: <Youtube className="h-5 w-5" />, url: '#' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      console.log('Form submitted:', formData);
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.main
      className="bg-dark text-white font-inter"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ThreeDScene />
        
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              variants={itemVariants}
            >
              Get in touch with our team to discuss your project needs.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
            >
              <a 
                href="#contact-form" 
                className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all"
              >
                Send a Message
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Methods - Matching UX/UI Design cards */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">How to Reach Us</h2>
            <p className="text-xl text-white/70">
              Choose your preferred method to get in touch with our team.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 border border-white/10 rounded-xl bg-gradient-to-b from-dark/60 to-dark/30 hover:border-primary/40 transition-all duration-300 shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                    {option.title}
                  </h3>
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">{option.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/80">
                      <Check className="h-5 w-5 mt-0.5 text-primary flex-shrink-0" />
                      <span className="leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-primary hover:bg-primary/90 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30">
                  {option.action.label} {option.action.icon}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 md:py-32 bg-dark relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <ContactSection 
              title="Send Us a Message"
              description="Fill out the form below and our team will get back to you soon"
              showTitle={true}
              className="bg-white/5 border border-white/10"
            />
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Contact;