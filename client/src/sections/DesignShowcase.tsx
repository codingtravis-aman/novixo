import { motion } from 'framer-motion';
import { ArrowUpRight, MousePointer, Workflow, Layers, PenTool, Briefcase, Users } from 'lucide-react';

const DesignShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -right-48"
          animate={{
            y: [0, 50, 0],
            x: [0, -30, 0],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute w-96 h-96 rounded-full bg-secondary/5 blur-3xl -bottom-48 -left-48"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Design that Delivers</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Our collaborative approach combines creative exploration with technical precision to create distinctive digital experiences.
          </p>
        </motion.div>

        {/* Main Feature */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden group">
            <motion.img
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?auto=format&fit=crop&q=80"
              alt="Design showcase"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 p-8 md:p-12 w-full"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="mb-6 md:mb-0">
                  <span className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">Interactive Design</span>
                  <h3 className="text-2xl md:text-4xl font-poppins font-bold mb-3">Immersive Experiences</h3>
                  <p className="text-white/70 max-w-2xl">Creating digital products that merge functionality with delight, driving engagement through intuitive design and seamless interactions.</p>
                </div>
                <motion.a
                  href="#work"
                  whileHover={{ x: 5, y: -5 }}
                  className="flex items-center gap-2 text-primary font-medium border border-primary/30 hover:border-primary bg-primary/5 hover:bg-primary/10 rounded-full px-6 py-3 transition-all duration-300"
                >
                  Explore our work <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Design Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-1 md:col-span-2 rounded-2xl bg-dark p-8 border border-white/10 hover:border-primary/20 transition-colors duration-300 group"
          >
            <div className="flex flex-col h-full">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Workflow className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-poppins font-bold mb-3">Design System Architecture</h3>
              <p className="text-white/70 mb-6">We build comprehensive design systems that ensure consistency, scalability, and efficiency across all touchpoints of your digital product.</p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <PenTool className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Layers className="w-4 h-4 text-primary" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <MousePointer className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <motion.span 
                  className="text-primary/70 group-hover:text-primary text-sm font-medium flex items-center"
                  whileHover={{ x: 5 }}
                >
                  Learn more <ArrowUpRight className="w-3 h-3 ml-1" />
                </motion.span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-1 rounded-2xl bg-dark p-8 border border-white/10 hover:border-primary/20 transition-colors duration-300 flex flex-col group"
          >
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-2xl font-poppins font-bold mb-3">User-Centered Process</h3>
            <p className="text-white/70 mb-6">Our design process starts and ends with users, ensuring products that truly resonate with their needs and expectations.</p>
            <div className="mt-auto flex justify-end">
              <motion.span 
                className="text-primary/70 group-hover:text-primary text-sm font-medium flex items-center"
                whileHover={{ x: 5 }}
              >
                Discover how <ArrowUpRight className="w-3 h-3 ml-1" />
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* Interactive Design Stats */}
        <div className="mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 max-w-2xl"
          >
            <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-4">Transforming Visions into Reality</h3>
            <p className="text-white/70">From concept to launch, our design-driven approach delivers measurable results that exceed expectations.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-6 border border-white/10 rounded-xl"
            >
              <h4 className="text-4xl font-poppins font-bold text-primary mb-2">85%</h4>
              <p className="text-white/70">Increase in user engagement through intuitive interaction design</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 border border-white/10 rounded-xl"
            >
              <h4 className="text-4xl font-poppins font-bold text-primary mb-2">120+</h4>
              <p className="text-white/70">Design systems implemented for clients across multiple industries</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 border border-white/10 rounded-xl"
            >
              <h4 className="text-4xl font-poppins font-bold text-primary mb-2">40%</h4>
              <p className="text-white/70">Average reduction in development time through efficient design processes</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="p-6 border border-white/10 rounded-xl"
            >
              <h4 className="text-4xl font-poppins font-bold text-primary mb-2">98%</h4>
              <p className="text-white/70">Client satisfaction rate with our design-driven solutions</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignShowcase;