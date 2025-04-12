import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';

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

  // Home page section links (hash links)
  const sectionLinks = [
    { href: "#work", label: "Work" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" }
  ];

  // Service pages
  const serviceLinks = [
    { href: "/devops", label: "DevOps" },
    { href: "/influencer-marketing", label: "Influencer Marketing" },
    { href: "/ux-ui-design", label: "UX/UI Design" },
    { href: "/web-development", label: "Web Development" },
    { href: "/mobile-development", label: "Mobile Development" },
    { href: "/digital-marketing", label: "Digital Marketing" }
  ];
  
  // Other page links
  const pageLinks = [
    { href: "/case-studies", label: "Case Studies" },
    { href: "/careers", label: "Careers" }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-darker z-40"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={menuVariants}
        >
          <div className="h-full flex flex-col justify-center items-center">
            <nav className="flex flex-col space-y-8 text-center">
              <motion.div
                variants={menuItemVariants}
                custom={0}
                initial="hidden"
                animate="visible"
                className="text-2xl text-primary/70 font-medium mb-2"
              >
                Home
              </motion.div>
              
              {sectionLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-3xl font-poppins font-bold text-white hover:text-primary transition-colors"
                  variants={menuItemVariants}
                  custom={i + 1}
                  initial="hidden"
                  animate="visible"
                  onClick={closeMenu}
                >
                  {link.label}
                </motion.a>
              ))}
              
              <motion.div
                variants={menuItemVariants}
                custom={sectionLinks.length + 1}
                initial="hidden"
                animate="visible"
                className="text-2xl text-primary/70 font-medium mt-4 mb-2"
              >
                Services
              </motion.div>
              
              {serviceLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={menuItemVariants}
                  custom={i + sectionLinks.length + 2}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    href={link.href}
                    className="text-2xl font-poppins font-medium text-white hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                variants={menuItemVariants}
                custom={sectionLinks.length + serviceLinks.length + 2}
                initial="hidden"
                animate="visible"
                className="text-2xl text-primary/70 font-medium mt-4 mb-2"
              >
                Pages
              </motion.div>
              
              {pageLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={menuItemVariants}
                  custom={i + sectionLinks.length + serviceLinks.length + 3}
                  initial="hidden"
                  animate="visible"
                >
                  <Link 
                    href={link.href}
                    className="text-2xl font-poppins font-medium text-white hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
