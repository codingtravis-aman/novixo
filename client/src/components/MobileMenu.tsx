import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

const MobileMenu = ({ isOpen, closeMenu }: MobileMenuProps) => {
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.76, 0, 0.24, 1]
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.1,
        duration: 0.5
      }
    })
  };

  // Main navigation links
  const mainLinks = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/careers", label: "Careers" }
  ];

  // Service pages
  const serviceLinks = [
    { href: "/devops", label: "DevOps" },
    { href: "/influencer-marketing", label: "Influencer Marketing" },
    { href: "/ux-ui-design", label: "UX/UI Design" },
    { href: "/web-development", label: "Web Development" },
    { href: "/data-analysis", label: "Data Analysis" },
    { href: "/cyber-security", label: "Cyber Security" },
    { href: "/mobile-development", label: "Mobile Development" },
    { href: "/digital-marketing", label: "Digital Marketing" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[99]"
          style={{ pointerEvents: 'auto' }}
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Backdrop Blur */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={closeMenu}
          />
          {/* Menu Panel */}
          <motion.div
            className="relative w-full h-full flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-7 right-6 z-50 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-white" />
            </button>
            <div className="container mx-auto px-4 py-24 h-full overflow-y-auto">
              <div className="space-y-12">
                {/* Main Links */}
                <div>
                  <h3 className="text-white/50 text-sm uppercase mb-4">Navigation</h3>
                  <div className="space-y-4">
                    {mainLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        custom={i}
                        variants={menuItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={link.href}
                          className="text-2xl text-white/80 hover:text-primary transition-colors block"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Services */}
                <div>
                  <h3 className="text-white/50 text-sm uppercase mb-4">Services</h3>
                  <div className="space-y-4">
                    {serviceLinks.map((link, i) => (
                      <motion.div
                        key={link.href}
                        custom={i + mainLinks.length}
                        variants={menuItemVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        <Link
                          href={link.href}
                          className="text-xl text-white/80 hover:text-primary transition-colors block"
                          onClick={closeMenu}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
