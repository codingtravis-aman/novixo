import { Link, useLocation } from 'wouter';

const Footer = () => {
  const [location] = useLocation();
  const isHomePage = location === '/';
  
  return (
    <footer className="py-12 bg-dark border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <Link href="/" className="mb-6 md:mb-0">
            <h1 className="text-3xl font-poppins font-bold text-white">NOVIXO</h1>
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
            <Link href="/devops" className={`text-white/80 hover:text-primary transition-colors ${location === '/devops' ? 'text-primary' : ''}`}>DevOps</Link>
            <Link href="/influencer-marketing" className={`text-white/80 hover:text-primary transition-colors ${location === '/influencer-marketing' ? 'text-primary' : ''}`}>Influencer Marketing</Link>
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
              <li><Link href="/devops" className="hover:text-primary transition-colors">DevOps Solutions</Link></li>
              <li><Link href="/influencer-marketing" className="hover:text-primary transition-colors">Influencer Marketing</Link></li>
              <li><Link href="/ux-ui-design" className="hover:text-primary transition-colors">UX/UI Design</Link></li>
              <li><Link href="/web-development" className="hover:text-primary transition-colors">Web Development</Link></li>
              <li><Link href="/mobile-development" className="hover:text-primary transition-colors">Mobile Development</Link></li>
              <li><Link href="/digital-marketing" className="hover:text-primary transition-colors">Digital Marketing</Link></li>
              <li><Link href="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-poppins font-semibold mb-4 mt-8 md:mt-0">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22.92 6c-.767.343-1.587.577-2.447.68.88-.528 1.56-1.36 1.88-2.353-.82.487-1.73.84-2.7 1.03C18.7 4.5 17.52 4 16.23 4c-2.51 0-4.54 2.03-4.54 4.54 0 .35.04.7.1 1.04-3.77-.19-7.13-2-9.37-4.75-.4.69-.63 1.49-.63 2.34 0 1.58.8 2.97 2.02 3.78-.75-.02-1.45-.23-2.06-.57v.06c0 2.2 1.57 4.03 3.65 4.44-.38.1-.79.16-1.2.16-.3 0-.58-.03-.86-.08.58 1.8 2.26 3.12 4.25 3.16-1.56 1.22-3.52 1.95-5.65 1.95-.37 0-.73-.02-1.08-.06 2.01 1.3 4.4 2.05 6.97 2.05 8.36 0 12.93-6.92 12.93-12.93 0-.2 0-.4-.01-.59.9-.65 1.68-1.45 2.3-2.36z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                </svg>
              </a>
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
