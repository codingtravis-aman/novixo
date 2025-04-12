import { motion } from 'framer-motion';
import ThreeDScene from '@/components/3DScene';
import { 
  LineChart, 
  Search, 
  Mail, 
  Share2, 
  BarChart3, 
  Megaphone,
  ArrowRight, 
  Target, 
  Users, 
  Globe 
} from 'lucide-react';

const DigitalMarketing = () => {
  // Service features
  const marketingServices = [
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "SEO",
      description: "We optimize your website to rank higher in search engines, drive organic traffic, and improve visibility."
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Content Marketing",
      description: "Strategic content creation that establishes your authority, engages your audience, and drives conversions."
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Marketing",
      description: "Targeted email campaigns that nurture leads, boost customer loyalty, and increase sales."
    },
    {
      icon: <Share2 className="w-6 h-6 text-primary" />,
      title: "Social Media Marketing",
      description: "Effective social strategies that build community, increase engagement, and enhance brand awareness."
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: "PPC Advertising",
      description: "Data-driven paid advertising campaigns that target your ideal customers and maximize ROI."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-primary" />,
      title: "Analytics & Reporting",
      description: "Comprehensive analytics that provide actionable insights to continuously improve your marketing performance."
    }
  ];

  // Success metrics
  const successMetrics = [
    {
      value: "250%",
      label: "Average Increase in Organic Traffic"
    },
    {
      value: "180%",
      label: "ROI on PPC Campaigns"
    },
    {
      value: "35%",
      label: "Boost in Conversion Rates"
    },
    {
      value: "65%",
      label: "Increase in Social Engagement"
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Traffic Growth",
      category: "SEO & Content Marketing",
      description: "Increased organic traffic by 320% and doubled conversion rates through strategic SEO and content marketing.",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "B2B Lead Generation",
      category: "PPC & Email Marketing",
      description: "Generated 450+ qualified leads monthly with a strategic combination of PPC campaigns and targeted email sequences.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Brand Awareness Campaign",
      category: "Social Media & Influencer Marketing",
      description: "Increased brand awareness by 75% and social following by 200% through targeted social and influencer campaigns.",
      image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=80"
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
              Digital <span className="text-primary">Marketing</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We help businesses grow through strategic digital marketing that drives traffic, engagement, and conversions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                Grow Your Business
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Marketing Elements */}
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
              <Megaphone className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
          
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <LineChart className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
          </motion.div>
          
          <motion.div 
            className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <Users className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Digital Marketing Services</h2>
            <p className="text-xl text-white/70">
              Comprehensive digital marketing strategies tailored to your business goals and target audience.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingServices.map((service, index) => (
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
      
      {/* Results Section */}
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Results That Speak</h2>
            <p className="text-xl text-white/70">
              Our strategies deliver measurable results that drive business growth and ROI.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300 text-center"
              >
                <h3 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-4">{metric.value}</h3>
                <p className="text-white/70">{metric.label}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Marketing Approach */}
          <motion.div 
            className="mt-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-poppins font-bold mb-6">Our Data-Driven Approach</h3>
                <p className="text-white/70 mb-6">
                  We believe in making marketing decisions based on solid data, not assumptions. Our approach combines creativity with analytics to drive real business results.
                </p>
                <ul className="space-y-4">
                  {[
                    "In-depth audience analysis and segmentation",
                    "Comprehensive competitor research",
                    "Continuous performance monitoring and optimization",
                    "Regular reporting with actionable insights",
                    "Agile strategy adjustments based on data"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-3 mt-1">✓</span>
                      <span className="text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70">Organic Search</span>
                      <span className="text-primary font-medium">78%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "78%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70">Paid Advertising</span>
                      <span className="text-primary font-medium">65%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "65%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70">Social Media</span>
                      <span className="text-primary font-medium">82%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "82%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.6 }}
                      ></motion.div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-white/70">Email Marketing</span>
                      <span className="text-primary font-medium">70%</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-primary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "70%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.8 }}
                      ></motion.div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-center text-sm text-white/50">
                  Average performance improvement for our clients
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-white/70">
              See how our digital marketing strategies have helped businesses achieve their goals.
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
              Ready to Grow Your Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              Let's create a customized digital marketing strategy that aligns with your business goals and drives measurable results.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full inline-flex items-center transition-all">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
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

export default DigitalMarketing;