import { Link, useLocation } from 'wouter';
import { Linkedin, Twitter, Facebook, Instagram, Github, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

// Define footer link arrays to reduce duplication
const servicePages = [
  { href: '/devops', label: 'DevOps' },
  { href: '/influencer-marketing', label: 'Influencer Marketing' },
  { href: '/insights', label: 'Insights' },
  { href: '/data-analysis', label: 'Data Analysis' },
  { href: '/cyber-security', label: 'Cyber Security' },
];
const servicesList = [
  { href: '/devops', label: 'DevOps Solutions' },
  { href: '/influencer-marketing', label: 'Influencer Marketing' },
  { href: '/ux-ui-design', label: 'UX/UI Design' },
  { href: '/web-development', label: 'Web Development' },
  { href: '/mobile-development', label: 'Mobile Development' },
  { href: '/digital-marketing', label: 'Digital Marketing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/data-analysis', label: 'Data Analysis' },
  { href: '/cyber-security', label: 'Cyber Security' },
];

// Social media icons and URLs
const socialLinks = [
  { href: 'https://linkedin.com', icon: Linkedin },
  { href: 'https://twitter.com', icon: Twitter },
  { href: 'https://facebook.com', icon: Facebook },
  { href: 'https://instagram.com', icon: Instagram },
  { href: 'https://github.com', icon: Github },
  { href: 'https://youtube.com', icon: Youtube },
];

const Footer = () => {
  const [location] = useLocation();
  const isHomePage = location === '/';
  
  return (
    <footer className="py-12 bg-dark border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Link href="/" className="mb-6 md:mb-0">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
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
          
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {isHomePage ? (
              // Home page section links
              <>
                <a href="#work" className="text-white/80 hover:text-primary transition-colors">Work</a>
                <a href="#capabilities" className="text-white/80 hover:text-primary transition-colors">Capabilities</a>
                <a href="#about" className="text-white/80 hover:text-primary transition-colors">About</a>
                <a href="#contact" className="text-white/80 hover:text-primary transition-colors">Contact</a>
              </>
            ) : (
              // Other pages links
              <Link href="/" className="text-white/80 hover:text-primary transition-colors">Home</Link>
            )}
            
            {/* Services Pages */}
            {servicePages.map(({ href, label }) => (
              <Link key={href} href={href} className={`text-white/80 hover:text-primary transition-colors ${location === href ? 'text-primary' : ''}`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="md:grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4">Contact Us</h3>
            <p className="text-white/70 mb-2">Email: hello@novixo.com</p>
            <p className="text-white/70 mb-2">Phone: +1 (234) 567-890</p>
            <p className="text-white/70">123 Innovation Street<br />Tech District, CA 94103</p>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4 mt-8 md:mt-0">Services</h3>
            <ul className="space-y-2 text-white/70">
              {servicesList.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-primary transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4 mt-8 md:mt-0">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-8">
          <p className="text-white/60 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Novixo. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Terms</a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="text-white/60 hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
