import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const About = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const stats = [
    { number: "10+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" }
  ];

  return (
    <section id="about" className="relative py-16 sm:py-24 md:py-32 bg-darker overflow-hidden">
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
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16"
        >
          {/* Left Column */}
          <motion.div variants={itemVariants}>
            <motion.span 
              className="inline-block text-primary font-medium mb-4"
              variants={itemVariants}
            >
              About Us
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
              variants={itemVariants}
            >
              We Create Digital <span className="text-primary">Experiences</span>
            </motion.h2>
            <motion.p 
              className="text-white/70 text-base sm:text-lg mb-8"
              variants={itemVariants}
            >
              We are a team of passionate designers, developers, and strategists who love creating innovative digital solutions. With over a decade of experience, we've helped businesses transform their digital presence and achieve remarkable growth.
            </motion.p>
            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8"
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  variants={itemVariants}
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-primary mb-2">{stat.number}</h3>
                  <p className="text-sm sm:text-base text-white/70">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link 
                href="/contact" 
                className="group inline-flex items-center magnetic-btn border-2 border-white hover:border-primary hover:bg-primary/10 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all"
              >
                Start a Project
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  animate={{ x: [0, 5, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="relative"
            variants={itemVariants}
          >
            <motion.div 
              className="relative z-10 rounded-2xl overflow-hidden shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
            
            {/* Decorative Elements */}
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
