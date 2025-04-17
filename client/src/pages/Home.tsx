import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '@/sections/Hero';
import Work from '@/sections/Work';
import Capabilities from '@/sections/Capabilities';
import About from '@/sections/About';
import Insights from '@/sections/Insights';
import Contact from '@/sections/Contact';
import DesignShowcase from '@/sections/DesignShowcase';
import DesignExpertise from '@/sections/DesignExpertise';
import Clients from '@/sections/Clients';


const Home = () => {
  // Handle scroll progress bar
  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar') as HTMLElement;
    
    const updateProgressBar = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight || window.innerHeight;
      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      
      if (progressBar) {
        progressBar.style.width = `${scrollPercent}%`;
      }
    };
    
    window.addEventListener('scroll', updateProgressBar);
    return () => window.removeEventListener('scroll', updateProgressBar);
  }, []);

  // Smooth scrolling for anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        
        const targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId as string);
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <motion.main
      className="bg-dark text-white font-inter" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Work />
      <DesignShowcase />
      <Capabilities />
      <DesignExpertise />
      <Clients />
      <About />
      <Insights />
      <Contact />
    </motion.main>
  );
};

export default Home;