import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 py-16 relative z-10">
        <div className="max-w-5xl">
          <motion.h2 
            className="text-4xl md:text-7xl lg:text-8xl font-poppins font-extrabold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We create
            <span className="text-primary"> digital experiences</span>
            <br /> that matter
          </motion.h2>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Novixo is a design-led innovation studio creating future-forward digital products and experiences.
          </motion.p>
          
          <motion.a 
            href="#contact" 
            className="inline-block magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Start a project
          </motion.a>
        </div>
      </div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute right-0 bottom-0 w-1/2 h-1/2 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        style={{ background: "radial-gradient(circle, rgba(255,111,97,1) 0%, rgba(0,0,0,0) 70%)" }}
      />
      
      <motion.div 
        className="absolute left-10 top-1/3 w-64 h-64 rounded-full opacity-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 3, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        style={{ background: "radial-gradient(circle, rgba(74,144,226,1) 0%, rgba(0,0,0,0) 70%)" }}
      />
    </section>
  );
};

export default Hero;
