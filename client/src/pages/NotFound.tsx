import { motion } from 'framer-motion';
import { Link } from 'wouter';

const NotFound = () => {
  return (
    <motion.div 
      className="min-h-screen bg-dark flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.h1 
          className="text-6xl md:text-8xl font-bold text-primary mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          404
        </motion.h1>
        <motion.h2 
          className="text-2xl md:text-3xl font-medium text-white mb-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>
        <motion.p 
          className="text-white/70 mb-8 max-w-md mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link href="/">
            <a className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-300">
              Back to Home
            </a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NotFound;
