import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import MobileMenu from './MobileMenu';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-dark/90 backdrop-blur-lg py-4' : 'py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h1 className="text-3xl font-poppins font-bold bg-gradient-to-r from-primary to-white bg-clip-text text-transparent flex space-x-1">
              {['N','O','V','I','X','O'].map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.2, color: '#ffffff' }}
                  className="cursor-pointer"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </motion.div>
        </Link>
        
        {/* Desktop Navigation */}
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="hidden md:flex items-center space-x-6"
        >
          <motion.li whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link href="/work" className="text-white/80 hover:text-primary transition-colors">Work</Link>
          </motion.li>
          
          {/* Services Dropdown */}
          <motion.li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
            whileHover={{ y: -2 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <button className="text-white/80 hover:text-primary transition-colors flex items-center">
              Services
              <svg className="w-4 h-4 ml-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-64 bg-dark/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden"
                >
                  <div className="p-4 space-y-3">
                    <Link href="/devops" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">DevOps</Link>
                    <Link href="/influencer-marketing" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Influencer Marketing</Link>
                    <Link href="/ux-ui-design" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">UX/UI Design</Link>
                    <Link href="/web-development" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Web Development</Link>
                    <Link href="/data-analysis" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Data Analysis</Link>
                    <Link href="/cyber-security" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Cyber Security</Link>
                    <Link href="/mobile-development" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Mobile Development</Link>
                    <Link href="/digital-marketing" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Digital Marketing</Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.li>
          
          {/* Other nav items */}
          {['/case-studies','/about','/contact','/careers','/insights'].map(path => (
            <motion.li key={path} whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Link href={path} className="text-white/80 hover:text-primary transition-colors">
                {path.slice(1).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
        
        {/* Mobile Menu Toggle */}
        <button 
          id="menu-toggle" 
          className="z-50 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`w-8 h-0.5 bg-white mb-1.5 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-white mb-1.5 ml-2 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-8 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={menuOpen} closeMenu={() => {
        setMenuOpen(false);
        document.body.classList.remove('overflow-hidden');
      }} />
    </header>
  );
};

export default Navbar;
