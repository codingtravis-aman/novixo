import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, Globe, Monitor, ArrowRight, FileCode, Figma, Box } from 'lucide-react';

const expertiseAreas = [
  {
    icon: <Monitor className="h-6 w-6 text-primary" />,
    title: 'Web Design',
    description: 'Beautiful, responsive websites that create meaningful user experiences and drive business results.'
  },
  {
    icon: <Smartphone className="h-6 w-6 text-primary" />,
    title: 'Mobile Applications',
    description: 'Intuitive mobile experiences that engage users and deliver functionality across all devices.'
  },
  {
    icon: <Palette className="h-6 w-6 text-primary" />,
    title: 'Brand Identity',
    description: "Cohesive visual systems that communicate your brand's personality, values, and objectives."
  },
  {
    icon: <Box className="h-6 w-6 text-primary" />,
    title: 'Product Design',
    description: 'End-to-end product design that balances user needs with business goals for maximum impact.'
  },
  {
    icon: <FileCode className="h-6 w-6 text-primary" />,
    title: 'Design Systems',
    description: 'Scalable, consistent frameworks that streamline development and ensure brand coherence.'
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: 'Digital Transformation',
    description: 'Strategic redesigns that modernize your digital presence and improve user engagement.'
  }
];

const DesignExpertise = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-dark to-darker relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl top-1/4 -right-48"
          animate={{
            y: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div 
              className="absolute top-6 -left-6 w-20 h-20 bg-primary/10 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6 relative z-10">Design Expertise</h2>
            <p className="text-xl text-white/70 mb-8">
              We blend aesthetics with functionality to craft designs that not only look beautiful but drive real business results.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Figma className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold mb-2">Design-Driven Approach</h3>
                  <p className="text-white/70">
                    We place design at the heart of our process, ensuring every decision enhances the user experience and supports your objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Code className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-poppins font-bold mb-2">Development Integration</h3>
                  <p className="text-white/70">
                    Our designers work closely with developers to ensure designs translate flawlessly into functioning products.
                  </p>
                </div>
              </div>
            </div>
            
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <a href="#work" className="inline-flex items-center magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                View our design work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(255, 111, 97, 0.05)" }}
                className="p-6 border border-white/10 rounded-xl hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-3">{area.title}</h3>
                <p className="text-white/70">{area.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Interactive Design Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32 relative"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-poppins font-bold mb-6">Our Design Tools & Technologies</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">We leverage industry-leading tools and technologies to deliver exceptional design solutions.</p>
          </div>
          
          <div className="relative py-6 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-dark to-transparent z-10"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-dark to-transparent z-10"></div>
            
            <motion.div
              className="flex items-center gap-16 md:gap-24"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                repeatType: "loop", 
                ease: "linear"
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 md:gap-24 flex-nowrap">
                  <div className="h-20 w-auto flex-shrink-0">
                    <svg viewBox="0 0 200 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40 20H20V40H40V20Z" fill="#FF6F61" />
                      <path d="M60 20H40V40H60V20Z" fill="#FF6F61" fillOpacity="0.7" />
                      <path d="M80 20H60V40H80V20Z" fill="#FF6F61" fillOpacity="0.4" />
                      <path d="M100 20H80V40H100V20Z" fill="#FF6F61" fillOpacity="0.2" />
                      <path d="M120 20H100V40H120V20Z" fill="#FF6F61" fillOpacity="0.1" />
                    </svg>
                  </div>
                  
                  <div className="h-16 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 4C12.96 4 4 12.96 4 24C4 35.04 12.96 44 24 44C35.04 44 44 35.04 44 24C44 12.96 35.04 4 24 4Z" fill="#FF6F61" fillOpacity="0.8" />
                    </svg>
                  </div>
                  
                  <div className="h-14 w-auto flex-shrink-0 text-primary">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="6" y="14" width="36" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
                      <rect x="14" y="6" width="20" height="36" rx="2" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <div className="h-16 w-auto flex-shrink-0">
                    <svg viewBox="0 0 200 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M60 15L75 30L60 45" stroke="#FF6F61" strokeWidth="3" />
                      <path d="M140 15L125 30L140 45" stroke="#FF6F61" strokeWidth="3" />
                      <path d="M90 10L110 50" stroke="#FF6F61" strokeWidth="3" />
                    </svg>
                  </div>
                  
                  <div className="h-14 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M24 4L4 24L24 44L44 24L24 4Z" fill="#FF6F61" fillOpacity="0.6" />
                    </svg>
                  </div>
                  
                  <div className="h-16 w-auto flex-shrink-0">
                    <svg viewBox="0 0 200 60" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 15H170" stroke="#FF6F61" strokeWidth="3" />
                      <path d="M30 30H170" stroke="#FF6F61" strokeWidth="3" />
                      <path d="M30 45H170" stroke="#FF6F61" strokeWidth="3" />
                    </svg>
                  </div>
                  
                  <div className="h-14 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 8H8V40H40V8Z" stroke="#FF6F61" strokeWidth="2" />
                      <path fillRule="evenodd" clipRule="evenodd" d="M32 16H16V32H32V16Z" fill="#FF6F61" fillOpacity="0.5" />
                    </svg>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              className="flex items-center gap-16 md:gap-24 mt-8"
              animate={{ x: [-1000, 0] }}
              transition={{ 
                duration: 25,
                repeat: Infinity,
                repeatType: "loop", 
                ease: "linear"
              }}
            >
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex items-center gap-16 md:gap-24 flex-nowrap">
                  <div className="h-14 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 4V44" stroke="#FF6F61" strokeWidth="2" />
                      <path d="M4 24H44" stroke="#FF6F61" strokeWidth="2" />
                      <circle cx="24" cy="24" r="10" fill="#FF6F61" fillOpacity="0.3" />
                    </svg>
                  </div>
                  
                  <div className="h-16 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 8L40 40" stroke="#FF6F61" strokeWidth="2" />
                      <path d="M8 40L40 8" stroke="#FF6F61" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <div className="h-14 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="10" width="28" height="28" rx="14" stroke="#FF6F61" strokeWidth="2" />
                      <circle cx="24" cy="24" r="6" fill="#FF6F61" />
                    </svg>
                  </div>
                  
                  <div className="h-16 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 36L24 12L36 36H12Z" stroke="#FF6F61" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <div className="h-14 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="8" y="8" width="32" height="32" stroke="#FF6F61" strokeWidth="2" />
                      <circle cx="24" cy="24" r="8" fill="#FF6F61" fillOpacity="0.4" />
                    </svg>
                  </div>
                  
                  <div className="h-16 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 24C8 15.16 15.16 8 24 8C32.84 8 40 15.16 40 24C40 32.84 32.84 40 24 40C15.16 40 8 32.84 8 24Z" stroke="#FF6F61" strokeWidth="2" />
                      <path d="M24 16V32" stroke="#FF6F61" strokeWidth="2" />
                      <path d="M16 24H32" stroke="#FF6F61" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <div className="h-14 w-auto flex-shrink-0">
                    <svg viewBox="0 0 48 48" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 8L8 20V36L24 48L40 36V20L24 8Z" stroke="#FF6F61" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DesignExpertise;