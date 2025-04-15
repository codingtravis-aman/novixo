import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-8 h-8 text-primary drop-shadow-glow" />, title: "Email Us", content: "info@novixo.com", link: "mailto:info@novixo.com"
    },
    {
      icon: <Phone className="w-8 h-8 text-primary drop-shadow-glow" />, title: "Call Us", content: "+1 (555) 123-4567", link: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-8 h-8 text-primary drop-shadow-glow" />, title: "Visit Us", content: "123 Innovation Street, Silicon Valley, CA 94025", link: "https://maps.google.com"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form submission logic here
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.main
      className="bg-dark text-white font-inter min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with animated gradient shape */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <motion.div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-[480px] h-[320px] bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl animate-pulse z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Contact <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch with us for project inquiries, support, or just to say hello!
            </motion.p>
          </div>
        </div>
      </section>
      {/* Contact Info Section */}
      <section className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <motion.div
          className="absolute top-6 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse z-0"/>
        <motion.div
          className="absolute bottom-6 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse z-0"/>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Contact Information</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Reach out to us using any of the options below.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, idx) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05, boxShadow: "0 8px 32px 0 rgba(80,80,200,0.10)" }}
                className="relative p-8 border border-white/10 rounded-2xl bg-dark/50 hover:bg-dark/80 transition-all duration-300 h-full flex flex-col items-center text-center cursor-pointer group overflow-hidden shadow-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* Gradient Accent Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent rounded-b-xl mb-4"/>
                <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center shadow-md group-hover:shadow-primary/30 transition-shadow duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3 text-primary group-hover:text-white transition-colors duration-200">{info.title}</h3>
                <p className="text-white/70">{info.content}</p>
              </motion.a>
            ))}
          </div>
          {/* Contact Form */}
          <motion.div
            className="max-w-2xl mx-auto bg-dark/50 p-8 rounded-2xl border border-white/10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="flex-1 bg-dark/80 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary placeholder:text-white/40"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 bg-dark/80 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary placeholder:text-white/40"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-dark/80 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary placeholder:text-white/40"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="bg-dark/80 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary placeholder:text-white/40 min-h-[120px]"
                required
              />
              <button
                type="submit"
                className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-primary/90 transition-all text-lg mt-4 magnetic-btn"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
        {/* Decorative Elements */}
        <motion.div
          className="absolute top-6 left-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse z-0"/>
        <motion.div
          className="absolute bottom-6 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-pulse z-0"/>
        <div className="absolute top-1/4 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>
    </motion.main>
  );
};

export default Contact;
