import { motion } from 'framer-motion';
import { Code2, Palette, Lightbulb, Rocket, Cpu, LineChart } from 'lucide-react';

const Capabilities = () => {
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

  const services = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      description: "Building scalable web applications with modern technologies and best practices.",
      tags: ["React", "Node.js", "TypeScript"]
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user interfaces that delight users.",
      tags: ["Figma", "User Research", "Prototyping"]
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Digital Strategy",
      description: "Developing comprehensive digital strategies to achieve business goals.",
      tags: ["Market Analysis", "User Journey", "ROI Planning"]
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Product Launch",
      description: "Taking products from concept to successful market launch.",
      tags: ["MVP", "Go-to-Market", "Growth"]
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Emerging Tech",
      description: "Implementing cutting-edge technologies for innovative solutions.",
      tags: ["AI/ML", "Blockchain", "IoT"]
    },
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "Analytics",
      description: "Data-driven insights to optimize digital performance.",
      tags: ["Data Analysis", "Optimization", "Reporting"]
    }
  ];

  return (
    <section id="capabilities" className="relative py-16 sm:py-24 md:py-32 bg-darker overflow-hidden">
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
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            Ideas In <span className="text-primary">Reality</span>
          </motion.h2>
          <motion.p 
            className="text-white/70 text-base sm:text-lg"
            variants={itemVariants}
          >
            We combine creativity, technology, and strategy to help businesses thrive in the digital age.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="p-6 sm:p-8 rounded-2xl bg-dark border border-white/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-white/70 mb-6">{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 * tagIndex }}
                    className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div 
          className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
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
          className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
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
      </div>
    </section>
  );
};

export default Capabilities;
