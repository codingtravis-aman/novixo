import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    alert('Form submitted successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "hello@novixo.com",
      link: "mailto:hello@novixo.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "San Francisco, CA",
      link: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 md:py-32 bg-darker overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(255,111,97,0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
        >
          {/* Left Column - Contact Form */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block text-primary font-medium mb-4"
              variants={itemVariants}
            >
              Get in Touch
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              Let's Create Something <span className="text-primary">Amazing</span>
            </motion.h2>
            <motion.p 
              className="text-white/70 text-base sm:text-lg mb-8"
              variants={itemVariants}
            >
              Have a project in mind? We'd love to hear about it. Tell us what you're looking for and we'll get back to you.
            </motion.p>

            <motion.form 
              variants={containerVariants}
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="Your name"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </motion.div>

              <motion.button
                type="submit"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary/90 text-white font-medium rounded-full inline-flex items-center justify-center transition-colors"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Column - Contact Info */}
          <motion.div 
            variants={containerVariants}
            className="lg:pl-8"
          >
            <motion.div 
              className="grid gap-8"
              variants={containerVariants}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-dark border border-white/10 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {info.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-white/70">{info.title}</h3>
                      <p className="text-base sm:text-lg font-medium">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Map or Image */}
            <motion.div 
              variants={itemVariants}
              className="mt-8 rounded-xl overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Office location" 
                className="w-full h-64 object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
