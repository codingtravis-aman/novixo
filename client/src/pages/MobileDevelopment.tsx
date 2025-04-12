import { motion } from 'framer-motion';
import ThreeDScene from '@/components/3DScene';
import { 
  Smartphone, 
  Gift, 
  Share2, 
  Bell, 
  Map, 
  Lock,
  ArrowRight, 
  MessageSquare, 
  Zap, 
  Store 
} from 'lucide-react';

const MobileDevelopment = () => {
  // Service features
  const mobileServices = [
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "iOS Development",
      description: "Native iOS apps built with Swift, optimized for performance and user experience on Apple devices."
    },
    {
      icon: <Store className="w-6 h-6 text-primary" />,
      title: "Android Development",
      description: "Custom Android applications designed to deliver a seamless experience across the Android ecosystem."
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary" />,
      title: "Cross-Platform Apps",
      description: "Efficient cross-platform development with React Native and Flutter to reach both iOS and Android users."
    },
    {
      icon: <Bell className="w-6 h-6 text-primary" />,
      title: "Push Notifications",
      description: "Increase user engagement with targeted push notifications and in-app messaging systems."
    },
    {
      icon: <Map className="w-6 h-6 text-primary" />,
      title: "Location Services",
      description: "Integrate precise location-based features that enhance your app's functionality and user experience."
    },
    {
      icon: <Lock className="w-6 h-6 text-primary" />,
      title: "Secure Authentication",
      description: "Implement robust security measures and authentication systems to protect user data."
    }
  ];

  // App features
  const appFeatures = [
    {
      title: "Offline Functionality",
      description: "Our apps work seamlessly offline, synchronizing data when connectivity is restored."
    },
    {
      title: "Fast Performance",
      description: "Optimized code and efficient architecture ensure fast load times and smooth interactions."
    },
    {
      title: "Intuitive UX",
      description: "User-centered design principles create intuitive and engaging mobile experiences."
    },
    {
      title: "Seamless Integration",
      description: "Integrate with existing systems, third-party services, and APIs for extended functionality."
    },
    {
      title: "Analytics Integration",
      description: "Built-in analytics to track user behavior and app performance metrics."
    },
    {
      title: "App Store Optimization",
      description: "Strategic approaches to maximize visibility and downloads on app stores."
    }
  ];

  const caseStudies = [
    {
      title: "Fitness Tracking App",
      category: "Health & Wellness",
      description: "Developed a feature-rich fitness app with real-time tracking, custom workout plans, and social sharing capabilities.",
      image: "https://images.unsplash.com/photo-1540563647591-5eb076c3f707?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Food Delivery Platform",
      category: "On-Demand Services",
      description: "Created a comprehensive food delivery application with real-time order tracking and integrated payment solutions.",
      image: "https://images.unsplash.com/photo-1482938289607-5885abd197f9?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Travel Companion App",
      category: "Travel & Leisure",
      description: "Built an intelligent travel companion with personalized recommendations, offline maps, and booking capabilities.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <motion.main
      className="bg-dark text-white font-inter" 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ThreeDScene />
        
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Mobile <span className="text-primary">Development</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We design and develop innovative mobile applications that engage users and drive business growth across platforms.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                Start Your App
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Mobile Elements */}
        <motion.div 
          className="absolute right-10 md:right-20 top-1/3 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-2xl blur-md"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="w-20 h-20 md:w-32 md:h-32 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
              <Smartphone className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
          
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <MessageSquare className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
          </motion.div>
          
          <motion.div 
            className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <Zap className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Mobile Development Services</h2>
            <p className="text-xl text-white/70">
              From concept to launch, we deliver comprehensive mobile development services for iOS and Android platforms.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{service.title}</h3>
                <p className="text-white/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* App Features Section */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -left-48"
          animate={{ 
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            repeatType: "reverse" 
          }}
        />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">App Features & Capabilities</h2>
            <p className="text-xl text-white/70">
              Our mobile apps combine cutting-edge technology with exceptional user experience to deliver outstanding results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <div className="bg-primary w-4 h-4 rounded"></div>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Mobile Demo */}
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative inline-block">
              <div className="w-64 h-[500px] md:w-72 md:h-[580px] bg-dark/50 rounded-[40px] border-8 border-white/10 relative overflow-hidden mx-auto">
                <div className="absolute top-0 left-0 right-0 h-12 bg-black/20 flex justify-center items-end pb-1">
                  <div className="w-24 h-6 bg-black/30 rounded-b-xl"></div>
                </div>
                
                <div className="absolute left-0 right-0 top-12 bottom-0 overflow-hidden">
                  <div className="h-full w-full bg-gradient-to-br from-primary/20 to-purple-600/20 p-4">
                    <div className="h-12 bg-white/10 rounded-xl mb-4"></div>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="h-32 bg-white/10 rounded-xl"></div>
                      <div className="h-32 bg-white/10 rounded-xl"></div>
                    </div>
                    <div className="h-40 bg-white/10 rounded-xl mb-4"></div>
                    <div className="h-16 bg-white/10 rounded-xl mb-4"></div>
                    <div className="h-16 bg-white/10 rounded-xl mb-4"></div>
                    <div className="h-16 bg-white/10 rounded-xl"></div>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="w-20 h-1 bg-white/20 rounded-full"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Featured Mobile Apps</h2>
            <p className="text-xl text-white/70">
              Explore our recent mobile app development projects and the results we've achieved for our clients.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block text-sm text-primary mb-2">{study.category}</span>
                  <h3 className="text-xl font-poppins font-bold mb-2">{study.title}</h3>
                  <p className="text-white/70 mb-4 text-sm">{study.description}</p>
                  <a href="#" className="inline-flex items-center text-primary hover:underline">
                    View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Development Process */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Development Process</h2>
            <p className="text-xl text-white/70">
              We follow a streamlined process to ensure efficient development and outstanding results.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:translate-x-0 translate-x-[7px]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12 relative">
              <TimelineItem 
                number="01"
                title="Discovery & Planning"
                description="We start by understanding your business goals, target audience, and app requirements to create a strategic roadmap."
                isLeft={true}
              />
              
              <TimelineItem 
                number="02"
                title="UI/UX Design"
                description="Our designers create intuitive, engaging interfaces that align with your brand and enhance user experience."
                isLeft={false}
              />
              
              <TimelineItem 
                number="03"
                title="Development"
                description="Our expert developers build your app using the latest technologies and best practices for optimal performance."
                isLeft={true}
              />
              
              <TimelineItem 
                number="04"
                title="Testing & QA"
                description="Rigorous testing across devices and platforms ensures your app is bug-free and functions flawlessly."
                isLeft={false}
              />
              
              <TimelineItem 
                number="05"
                title="Deployment"
                description="We handle the submission process to app stores and ensure a smooth launch for your application."
                isLeft={true}
              />
              
              <TimelineItem 
                number="06"
                title="Maintenance & Support"
                description="Ongoing support, updates, and optimization to keep your app running smoothly and evolving with your business."
                isLeft={false}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/10 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-poppins font-bold mb-6"
            >
              Ready to Build Your Mobile App?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              Let's turn your app idea into reality. Our team of experienced mobile developers is ready to help you every step of the way.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full inline-flex items-center transition-all">
                Start a Project <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6F61" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>
    </motion.main>
  );
};

// Timeline Item Component
const TimelineItem = ({ number, title, description, isLeft }: { number: string, title: string, description: string, isLeft: boolean }) => {
  return (
    <motion.div 
      className={`flex flex-col md:flex-row ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="md:w-1/2 pb-8 md:pb-0 pl-8 md:pl-0 relative">
        <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-primary transform md:hidden"></div>
        
        <div className={`md:max-w-md ${isLeft ? 'md:mr-12 ml-auto' : 'md:ml-12'}`}>
          <div className="text-4xl font-bold text-primary/30 mb-4">{number}</div>
          <h3 className="text-xl font-poppins font-bold mb-3">{title}</h3>
          <p className="text-white/70">{description}</p>
        </div>
      </div>
      
      <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-primary"></div>
      
      <div className="md:w-1/2"></div>
    </motion.div>
  );
};

export default MobileDevelopment;