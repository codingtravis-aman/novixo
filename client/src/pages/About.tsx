import { motion } from 'framer-motion';
import { Users, Target, Heart } from 'lucide-react';

const About = () => {
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
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-primary drop-shadow-glow" />, title: "Passion", description: "We're passionate about creating digital experiences that make a difference."
    },
    {
      icon: <Target className="w-8 h-8 text-primary drop-shadow-glow" />, title: "Excellence", description: "We strive for excellence in everything we do, from design to development."
    },
    {
      icon: <Users className="w-8 h-8 text-primary drop-shadow-glow" />, title: "Collaboration", description: "We believe in the power of teamwork and collaborative innovation."
    }
  ];
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
              About <span className="text-primary">Us</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We are a passionate team dedicated to delivering innovative digital solutions that drive success for our clients.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Values Section */}
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              What drives us every day.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05, boxShadow: "0 8px 32px 0 rgba(80,80,200,0.10)" }}
                className="relative p-8 border border-white/10 rounded-2xl bg-dark/50 hover:bg-dark/80 transition-all duration-300 h-full flex flex-col items-center text-center group overflow-hidden shadow-lg"
              >
                {/* Gradient Accent Bar */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent rounded-b-xl mb-4"/>
                <div className="mb-4 bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center shadow-md group-hover:shadow-primary/30 transition-shadow duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3 text-primary group-hover:text-white transition-colors duration-200">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-1/4 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>
    </motion.main>
  );
};

export default About;
