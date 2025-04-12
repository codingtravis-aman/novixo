import { motion } from 'framer-motion';
import ThreeDScene from '@/components/3DScene';
import { 
  Code, 
  Globe, 
  Server, 
  Cpu, 
  Database, 
  Shield,
  ArrowRight, 
  Monitor, 
  Zap, 
  Disc 
} from 'lucide-react';

const WebDevelopment = () => {
  // Service features
  const webServices = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Frontend Development",
      description: "We craft responsive, interactive user interfaces using the latest technologies like React, Vue, and Angular."
    },
    {
      icon: <Server className="w-6 h-6 text-primary" />,
      title: "Backend Development",
      description: "Our experts build robust, scalable server-side solutions to power your web applications."
    },
    {
      icon: <Database className="w-6 h-6 text-primary" />,
      title: "Database Design",
      description: "We design and implement optimized database structures for efficient data storage and retrieval."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "CMS Development",
      description: "Custom content management systems that give you full control over your digital content."
    },
    {
      icon: <Zap className="w-6 h-6 text-primary" />,
      title: "API Development",
      description: "We create powerful, secure APIs that enable seamless integration between your systems."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Security Implementation",
      description: "We implement industry-standard security measures to protect your web applications and data."
    }
  ];

  // Technologies
  const technologies = [
    { name: "React", color: "#61DAFB" },
    { name: "Angular", color: "#DD0031" },
    { name: "Vue.js", color: "#4FC08D" },
    { name: "Node.js", color: "#339933" },
    { name: "Python", color: "#3776AB" },
    { name: "PHP", color: "#777BB4" },
    { name: "MongoDB", color: "#47A248" },
    { name: "PostgreSQL", color: "#336791" },
    { name: "AWS", color: "#FF9900" },
    { name: "Docker", color: "#2496ED" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "GraphQL", color: "#E10098" }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform",
      category: "Retail",
      description: "Built a scalable e-commerce platform with real-time inventory management, resulting in a 45% increase in online sales.",
      image: "https://images.unsplash.com/photo-1526570207772-784d36084510?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "SaaS Dashboard",
      category: "B2B Technology",
      description: "Developed a feature-rich SaaS application with advanced analytics that improved user engagement by 60%.",
      image: "https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Media Streaming Service",
      category: "Entertainment",
      description: "Created a high-performance streaming service capable of handling millions of concurrent users with minimal latency.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <motion.main
      className="bg-dark text-white font-inter" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ThreeDScene />
        
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Web <span className="text-primary">Development</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We build fast, secure, and scalable web applications that deliver exceptional user experiences and drive business growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                Start Your Project
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Web Elements */}
        <motion.div 
          className="absolute right-10 md:right-20 top-1/3 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-2xl blur-md"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="w-20 h-20 md:w-32 md:h-32 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
              <Code className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
          
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Globe className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
          </motion.div>
          
          <motion.div 
            className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <Cpu className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Web Development Services</h2>
            <p className="text-xl text-white/70">
              From responsive websites to complex web applications, we deliver solutions that meet your business objectives.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -left-48"
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-white/70">
              We leverage the latest technologies to build modern, high-performance web applications.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-4 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center"
              >
                <div 
                  className="w-10 h-10 rounded-full mb-3 flex items-center justify-center"
                  style={{ backgroundColor: `${tech.color}20` }}
                >
                  <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: tech.color }}
                  ></div>
                </div>
                <span className="text-white/80 font-medium text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Featured Case Studies</h2>
            <p className="text-xl text-white/70">
              Explore our recent web development projects and the results we've achieved for our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-sm text-primary mb-2">{study.category}</span>
                  <h3 className="text-xl font-poppins font-bold mb-2">{study.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{study.description}</p>
                  <a href="#" className="inline-flex items-center text-primary hover:underline">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-poppins font-bold mb-6"
            >
              Ready to Build Your Next Web Project?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              Our team of experienced developers is ready to turn your vision into reality. Let's create something extraordinary together.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full inline-flex items-center transition-all">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6F61" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>
    </motion.main>
  );
};

export default WebDevelopment;