import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-darker"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2.2 }}
      onAnimationComplete={() => setIsVisible(false)}
    >
      <div className="relative">
        {/* Glowing circle behind the logo */}
        <motion.div 
          className="absolute inset-0 bg-primary/20 rounded-full blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.8, scale: 1.2 }}
          transition={{ 
            duration: 1.5, 
            ease: "easeInOut"
          }}
        />
        
        {/* Logo container */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Main logo text */}
          <motion.h1
            className="text-6xl md:text-8xl font-poppins font-bold"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <span className="text-white">NOV</span>
            <span className="text-primary">IXO</span>
          </motion.h1>
          
          {/* Tagline */}
          <motion.p
            className="text-white/70 text-xl mt-2 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Creating Digital Excellence
          </motion.p>
        </motion.div>
      </div>
      
      {/* Animated dots/particles around the logo */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100]
            }}
            transition={{ 
              duration: 2,
              delay: Math.random() * 1.5,
              repeat: 0,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
      
      {/* Loading bar */}
      <motion.div 
        className="absolute bottom-20 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
      >
        <motion.div
          className="h-full bg-primary"
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;