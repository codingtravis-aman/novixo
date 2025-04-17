import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Send, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter,
  MessageSquare,
  Github,
  Youtube,
  Loader2, 
  ChevronDown 
} from 'lucide-react';
import { useState, useRef, useMemo } from 'react';
import { useToast } from '../hooks/use-toast';

interface SocialLink {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  url: string;
}

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = useMemo(() => [
    'App Development',
    'Web Development',
    'Digital Marketing',
    'Data Analytics',
    'DevOps',
    'UI/UX Design',
    'Cloud Solutions'
  ], []);

  const socialLinks: SocialLink[] = [
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Twitter', icon: Twitter, url: '#' },
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'WhatsApp', icon: MessageSquare, url: '#' },
    { name: 'GitHub', icon: Github, url: '#' },
    { name: 'YouTube', icon: Youtube, url: '#' }
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Validation
      if (!formData.name.trim()) {
        throw new Error('Name is required');
      }
      
      if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
        throw new Error('Please enter a valid email');
      }
      
      if (!formData.service) {
        throw new Error('Please select a service');
      }

      console.log('Form submission:', formData);
      
      toast({
        title: 'Success',
        description: 'Your message has been sent',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        service: '',
        message: ''
      });
      
      formRef.current?.reset();
    } catch (error) {
      toast({
        title: 'Error',
        description: error instanceof Error 
          ? error.message 
          : 'Failed to send message',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="py-20 md:py-32 bg-darker"
    >
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-dark/50 border border-white/10 rounded-2xl p-8"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div>
                <label 
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-white/40 focus:outline-none focus:ring-2 
                    focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-white/40 focus:outline-none focus:ring-2 
                    focus:ring-primary focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="service"
                  className="block text-sm font-medium mb-2"
                >
                  Service <span className="text-primary">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-white/40 focus:outline-none focus:ring-2 
                    focus:ring-primary focus:border-transparent"
                  required
                >
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label 
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white 
                    placeholder-white/40 focus:outline-none focus:ring-2 
                    focus:ring-primary focus:border-transparent"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white 
                  font-medium rounded-lg transition-colors disabled:opacity-70 
                  disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Email</h4>
                    <p className="text-white/70 mb-3">contact@novixo.com</p>
                    <a 
                      href="mailto:contact@novixo.com"
                      className="text-primary hover:underline"
                    >
                      Send us an email
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Phone</h4>
                    <p className="text-white/70 mb-3">+91 98765 43210</p>
                    <a 
                      href="tel:+919876543210"
                      className="text-primary hover:underline"
                    >
                      Call now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map(({ name, icon: Icon, url }) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white/5 
                      border border-white/10 rounded-lg hover:bg-primary/10 
                      transition-colors"
                    aria-label={name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;