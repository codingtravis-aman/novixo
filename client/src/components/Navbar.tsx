import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import MobileMenu from './MobileMenu';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <motion.h1 
            className="text-3xl font-poppins font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            NOVIXO
          </motion.h1>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/work" className="text-white/80 hover:text-primary transition-colors">Work</Link>
          
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-white/80 hover:text-primary transition-colors flex items-center">
              Services
              <svg className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div className="absolute left-0 mt-2 w-64 bg-dark/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="p-4 space-y-3">
                <Link href="/devops" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">DevOps</Link>
                <Link href="/influencer-marketing" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Influencer Marketing</Link>
                <Link href="/ux-ui-design" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">UX/UI Design</Link>
                <Link href="/web-development" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Web Development</Link>
                <Link href="/mobile-development" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Mobile Development</Link>
                <Link href="/digital-marketing" className="block px-4 py-2 text-white/80 hover:text-primary hover:bg-white/5 rounded-md transition-colors">Digital Marketing</Link>
              </div>
            </div>
          </div>
          
          <Link href="/case-studies" className="text-white/80 hover:text-primary transition-colors">Case Studies</Link>
          <Link href="/about" className="text-white/80 hover:text-primary transition-colors">About</Link>
          <Link href="/contact" className="text-white/80 hover:text-primary transition-colors">Contact</Link>
          <Link href="/careers" className="text-white/80 hover:text-primary transition-colors">Careers</Link>
        </nav>
        
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
