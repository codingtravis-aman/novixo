import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Lightbulb, Zap, Circle, Hexagon, Square } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-darker relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-20">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Who We Are</h2>
            <p className="text-xl text-white/70 mb-8">Novixo is a team of strategists, designers, and engineers passionate about creating meaningful digital experiences that transform businesses and delight users.</p>
            
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-2xl font-poppins font-semibold mb-3">Our Vision</h3>
                <p className="text-white/70">To be the catalyst for digital innovation that creates positive impact through thoughtful design and technology solutions.</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-2xl font-poppins font-semibold mb-3">Our Approach</h3>
                <p className="text-white/70">We believe in a collaborative, user-centered approach that combines strategic thinking, creative design, and technical excellence to create products that matter.</p>
              </motion.div>
              
              <motion.div 
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <a href="#contact" className="inline-block magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                  Work with us
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden h-56 md:h-64">
                  <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Tech team collaboration" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-40 md:h-48">
                  <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" alt="Digital innovation concept" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden h-40 md:h-48">
                  <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" alt="Modern office workspace" className="w-full h-full object-cover" />
                </div>
                <div className="rounded-xl overflow-hidden h-56 md:h-64">
                  <img src="https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80" alt="Creative design process" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Design Philosophy Section - New Section 1 */}
      <div className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Design Philosophy</h2>
            <p className="text-xl text-white/70 mx-auto max-w-3xl">We craft experiences that blend aesthetic beauty with functional excellence, creating designs that inspire and perform.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-10 border border-white/10 rounded-2xl relative z-10 h-full">
                <div className="w-14 h-14 mb-6 relative">
                  <Circle className="text-primary w-14 h-14 absolute opacity-20" />
                  <Circle className="text-primary w-10 h-10 absolute top-2 left-2" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Minimalist Precision</h3>
                <p className="text-white/70 mb-6">We strip away the unnecessary to focus on what matters, creating clarity through simplified, purposeful design.</p>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
              className="relative group md:mt-12"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-10 border border-white/10 rounded-2xl relative z-10 h-full">
                <div className="w-14 h-14 mb-6 relative">
                  <Hexagon className="text-primary w-14 h-14 absolute opacity-20" />
                  <Hexagon className="text-primary w-10 h-10 absolute top-2 left-2" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Intuitive Interaction</h3>
                <p className="text-white/70 mb-6">Our interfaces anticipate user needs, creating seamless experiences that feel natural and effortless.</p>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="p-10 border border-white/10 rounded-2xl relative z-10 h-full">
                <div className="w-14 h-14 mb-6 relative">
                  <Square className="text-primary w-14 h-14 absolute opacity-20" />
                  <Square className="text-primary w-10 h-10 absolute top-2 left-2" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-4">Bold Aesthetics</h3>
                <p className="text-white/70 mb-6">We create striking visuals that capture attention and communicate brand identity with authenticity and impact.</p>
                <div className="w-16 h-1 bg-primary rounded-full"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Creative Process - New Section 2 */}
      <div className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Creative Process</h2>
            <p className="text-xl text-white/70 mx-auto max-w-3xl">From initial concept to final execution, our methodology ensures exceptional results at every step.</p>
          </motion.div>
          
          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 hidden md:block transform md:translate-x-[-50%]"></div>
            
            {/* Process Steps */}
            <div className="space-y-12 md:space-y-0 relative">
              {/* Step 1 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:text-right pb-12 md:pb-24"
                >
                  <div className="bg-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 relative hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-2xl font-poppins font-bold mb-3">Discovery</h3>
                    <p className="text-white/70">We dive deep into understanding your business, audience, and objectives to create a strategic foundation for success.</p>
                  </div>
                  <div className="absolute top-1/2 right-0 w-6 h-6 bg-primary rounded-full transform translate-x-3 hidden md:block">
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                  </div>
                </motion.div>
                <div className="hidden md:block"></div>
              </div>
              
              {/* Step 2 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                <div className="hidden md:block"></div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="pb-12 md:pb-24"
                >
                  <div className="bg-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 relative hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-2xl font-poppins font-bold mb-3">Strategy & Concept</h3>
                    <p className="text-white/70">We develop innovative concepts aligned with your goals, setting a clear direction for the design and development process.</p>
                  </div>
                  <div className="absolute top-1/2 left-0 w-6 h-6 bg-primary rounded-full transform -translate-x-3 hidden md:block">
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                  </div>
                </motion.div>
              </div>
              
              {/* Step 3 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="md:text-right pb-12 md:pb-24"
                >
                  <div className="bg-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 relative hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-2xl font-poppins font-bold mb-3">Design & Prototype</h3>
                    <p className="text-white/70">Our designers create stunning visuals and interactive prototypes to refine the user experience before development begins.</p>
                  </div>
                  <div className="absolute top-1/2 right-0 w-6 h-6 bg-primary rounded-full transform translate-x-3 hidden md:block">
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                  </div>
                </motion.div>
                <div className="hidden md:block"></div>
              </div>
              
              {/* Step 4 */}
              <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                <div className="hidden md:block"></div>
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="pb-12 md:pb-0"
                >
                  <div className="bg-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 relative hover:border-primary/50 transition-colors duration-300">
                    <h3 className="text-2xl font-poppins font-bold mb-3">Execution & Launch</h3>
                    <p className="text-white/70">We bring designs to life with meticulous development, thorough testing, and strategic deployment to ensure a flawless launch.</p>
                  </div>
                  <div className="absolute top-1/2 left-0 w-6 h-6 bg-primary rounded-full transform -translate-x-3 hidden md:block">
                    <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Interactive Design Showcase - New Section 3 */}
      <div className="py-24 relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 bg-primary/10 rounded-full blur-3xl -top-48 -left-48"
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute w-80 h-80 bg-secondary/10 rounded-full blur-3xl -bottom-40 -right-40"
          animate={{ 
            x: [0, -40, 0],
            y: [0, -20, 0],
            opacity: [0.2, 0.3, 0.2] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        ></motion.div>
        
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Design Excellence</h2>
            <p className="text-xl text-white/70 max-w-3xl">We push boundaries to create immersive, innovative experiences that captivate and convert.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden group"
            >
              <img 
                src="https://images.unsplash.com/photo-1613909207039-6b173b755cc1?auto=format&fit=crop&q=80" 
                alt="Interactive UI design" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full p-8">
                <div className="flex items-center mb-4">
                  <Terminal className="text-primary w-7 h-7 mr-3" />
                  <span className="text-sm uppercase tracking-wide font-medium text-primary">UI/UX</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-3">Immersive Interfaces</h3>
                <p className="text-white/70 max-w-md mb-6">We craft intuitive, engaging user interfaces that blend beauty with functionality to create truly memorable digital experiences.</p>
                <motion.a 
                  href="#work" 
                  className="inline-flex items-center text-primary font-medium border-b border-primary/0 hover:border-primary transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  View case studies <ArrowRight className="ml-2 w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
            
            <div className="grid grid-cols-1 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-[235px] rounded-2xl overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80" 
                  alt="Brand identity design" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center mb-2">
                    <Lightbulb className="text-primary w-5 h-5 mr-2" />
                    <span className="text-sm uppercase tracking-wide font-medium text-primary">Brand Identity</span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold mb-2">Visual Storytelling</h3>
                  <motion.a 
                    href="#work" 
                    className="inline-flex items-center text-primary font-medium border-b border-primary/0 hover:border-primary transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Explore our process <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative h-[235px] rounded-2xl overflow-hidden group"
              >
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80" 
                  alt="Interactive animation design" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center mb-2">
                    <Zap className="text-primary w-5 h-5 mr-2" />
                    <span className="text-sm uppercase tracking-wide font-medium text-primary">Motion & Interaction</span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold mb-2">Dynamic Experiences</h3>
                  <motion.a 
                    href="#work" 
                    className="inline-flex items-center text-primary font-medium border-b border-primary/0 hover:border-primary transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    See animations <ArrowRight className="ml-2 w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Gradient */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-primary opacity-10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-1/4 h-1/4 bg-secondary opacity-10 blur-3xl rounded-full"></div>
    </section>
  );
};

export default About;
