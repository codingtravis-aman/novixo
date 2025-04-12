import { motion } from 'framer-motion';
import { 
  Users, 
  TrendingUp, 
  BarChart, 
  PieChart, 
  UserCheck, 
  Target, 
  Share2, 
  MessageSquare,
  Heart,
  ArrowRight,
  Instagram,
  Youtube,
  Twitter,
  BarChart3
} from 'lucide-react';
import ThreeDScene from '@/components/3DScene';

const InfluencerMarketing = () => {
  const marketingFeatures = [
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Influencer Identification",
      description: "We identify the perfect influencers who align with your brand values and target audience."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Campaign Strategy",
      description: "Develop data-driven strategies that maximize engagement and conversion across platforms."
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Content Production",
      description: "Collaborate with influencers to create authentic content that resonates with their audience."
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Community Engagement",
      description: "Engage with audience comments and foster meaningful conversations around your brand."
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Performance Analytics",
      description: "Track key metrics and provide detailed reports on campaign performance and ROI."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Growth Optimization",
      description: "Refine strategies based on data insights to continuously improve campaign effectiveness."
    }
  ];

  const platforms = [
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      metrics: ["2.1B+ Monthly Active Users", "Highest Engagement Rate", "90% Follow Brands"],
      color: "from-[#833AB4] to-[#FD1D1D]",
      shadow: "shadow-[#833AB4]/20"
    },
    {
      name: "YouTube",
      icon: <Youtube className="h-8 w-8" />,
      metrics: ["2.5B+ Monthly Active Users", "50% Purchase After Watching", "73% Trust Product Reviews"],
      color: "from-[#FF0000] to-[#FF4500]",
      shadow: "shadow-[#FF0000]/20"
    },
    {
      name: "Twitter",
      icon: <Twitter className="h-8 w-8" />,
      metrics: ["450M+ Monthly Active Users", "40% Purchase After Exposure", "High Trending Potential"],
      color: "from-[#1DA1F2] to-[#00ACEE]",
      shadow: "shadow-[#1DA1F2]/20"
    }
  ];

  const caseStudies = [
    {
      title: "Fashion Brand Influencer Campaign",
      description: "Partnered with 25 fashion micro-influencers to launch a summer collection, generating unprecedented engagement.",
      results: [
        { value: "320%", label: "ROI" },
        { value: "4.8M", label: "Impressions" },
        { value: "12%", label: "Conversion Rate" }
      ],
      image: "https://images.unsplash.com/photo-1598880513663-ed36039c2d67?auto=format&fit=crop&q=80"
    },
    {
      title: "Food Delivery App Launch",
      description: "Collaborated with local food influencers across 5 cities to drive app downloads and first-time orders.",
      results: [
        { value: "85K+", label: "App Downloads" },
        { value: "68%", label: "User Retention" },
        { value: "2.5x", label: "Market Growth" }
      ],
      image: "https://images.unsplash.com/photo-1587614382346-4ec70e388b28?auto=format&fit=crop&q=80"
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
              Influencer <span className="text-primary">Marketing</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with your target audience through authentic partnerships with influencers who share your brand values and vision.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                Start Your Campaign
              </a>
              <a href="#services" className="magnetic-btn bg-transparent border border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-full transition-all">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Social Media Icons */}
        <motion.div 
          className="absolute right-10 md:right-20 top-1/3 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#833AB4]/30 to-[#FD1D1D]/30 rounded-2xl blur-md"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="w-20 h-20 md:w-32 md:h-32 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
              <Instagram className="w-10 h-10 md:w-16 md:h-16 text-[#FD1D1D]" />
            </div>
          </div>
          
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Youtube className="w-8 h-8 md:w-12 md:h-12 text-[#FF0000]" />
          </motion.div>
          
          <motion.div 
            className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <Twitter className="w-6 h-6 md:w-10 md:h-10 text-[#1DA1F2]" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-dark/50 rounded-2xl border border-white/10 text-center"
            >
              <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">92%</div>
              <p className="text-white/70">Consumers trust recommendations from influencers over traditional ads</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 bg-dark/50 rounded-2xl border border-white/10 text-center"
            >
              <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">11x</div>
              <p className="text-white/70">Higher ROI compared to traditional digital marketing campaigns</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 bg-dark/50 rounded-2xl border border-white/10 text-center"
            >
              <div className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">89%</div>
              <p className="text-white/70">Marketers say influencer marketing ROI is comparable or better than other channels</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Overview */}
      <section id="services" className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Influencer Marketing Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From identifying the right influencers to measuring campaign impact, our comprehensive services drive results.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 hover:border-primary/30 rounded-xl bg-dark/50 hover:bg-dark/80 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Platforms */}
      <section className="py-20 md:py-32 bg-darker relative overflow-hidden">
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
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Platforms We Specialize In</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              We create tailored influencer campaigns across the most effective social media platforms.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-dark group hover:shadow-xl transition-all duration-500 ${platform.shadow}`}
              >
                <div className={`w-full h-32 mb-6 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-30">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
                    </svg>
                    <defs>
                      <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                  </div>
                  <div className="relative z-10 flex items-center">
                    <div className="mr-3">{platform.icon}</div>
                    <span className="text-2xl font-poppins font-bold">{platform.name}</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {platform.metrics.map((metric, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <p className="text-white/80">{metric}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Campaign Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A proven methodology that consistently delivers successful influencer marketing campaigns.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Process Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 hidden md:block transform md:translate-x-[-50%]"></div>
            
            {/* Process Steps */}
            <div className="space-y-16 md:space-y-0 relative">
              {[
                {
                  title: "Discovery & Strategy",
                  description: "We analyze your brand, audience, and objectives to develop a customized influencer marketing strategy."
                },
                {
                  title: "Influencer Selection",
                  description: "Using our proprietary database, we identify and vet influencers whose audience and values align with your brand."
                },
                {
                  title: "Campaign Creation",
                  description: "We collaborate with influencers to develop authentic content that resonates with their audience while highlighting your brand."
                },
                {
                  title: "Execution & Monitoring",
                  description: "Campaigns are launched with real-time monitoring and optimization to maximize performance."
                },
                {
                  title: "Analysis & Reporting",
                  description: "Detailed analysis of campaign metrics with actionable insights for future optimization."
                }
              ].map((step, index) => (
                <div key={step.title} className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                  {index % 2 === 0 ? (
                    <>
                      <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:text-right pb-0 md:pb-24"
                      >
                        <div className="bg-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 relative hover:border-primary/50 transition-colors duration-300">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">Step {index + 1}</span>
                          <h3 className="text-2xl font-poppins font-bold mb-3">{step.title}</h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                        <div className="absolute top-1/2 right-0 w-6 h-6 bg-primary rounded-full transform translate-x-3 hidden md:block">
                          <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                        </div>
                      </motion.div>
                      <div className="hidden md:block"></div>
                    </>
                  ) : (
                    <>
                      <div className="hidden md:block"></div>
                      <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="pb-0 md:pb-24"
                      >
                        <div className="bg-dark/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-white/10 relative hover:border-primary/50 transition-colors duration-300">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">Step {index + 1}</span>
                          <h3 className="text-2xl font-poppins font-bold mb-3">{step.title}</h3>
                          <p className="text-white/70">{step.description}</p>
                        </div>
                        <div className="absolute top-1/2 left-0 w-6 h-6 bg-primary rounded-full transform -translate-x-3 hidden md:block">
                          <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></span>
                        </div>
                      </motion.div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              Real results from our influencer marketing campaigns that drove measurable business impact.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="rounded-2xl overflow-hidden group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 border border-white/10 border-t-0 rounded-b-2xl bg-dark/90">
                  <h3 className="text-2xl font-poppins font-bold mb-4">{study.title}</h3>
                  <p className="text-white/70 mb-6">{study.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.results.map((result, i) => (
                      <div key={i} className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-poppins font-bold text-primary mb-1">{result.value}</div>
                        <div className="text-sm text-white/60">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <motion.a 
                    href="#" 
                    className="inline-flex items-center text-primary font-medium"
                    whileHover={{ x: 5 }}
                  >
                    Read case study <ArrowRight className="ml-2 h-4 w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -bottom-48 -right-48"
          animate={{ 
            y: [0, -50, 0],
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Client Testimonials</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Hear what our clients have to say about our influencer marketing services.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "The influencer campaign Novixo designed for us exceeded our expectations, driving a 215% increase in social engagement and a significant boost in sales.",
                name: "Sarah Johnson",
                position: "Marketing Director, Fashion Retailer",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
              },
              {
                quote: "Novixo's strategic approach to influencer selection and campaign execution helped us reach new audiences and establish our brand in a competitive market.",
                name: "Michael Chen",
                position: "Founder, Tech Startup",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="p-8 border border-white/10 rounded-2xl bg-dark/50 relative"
              >
                <div className="absolute -top-4 -left-4 text-primary text-6xl opacity-20">"</div>
                <p className="text-lg text-white/80 mb-8 relative z-10">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-poppins font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-white/60">{testimonial.position}</p>
                  </div>
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
              Ready to Launch Your Influencer Campaign?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              Partner with Novixo to create authentic connections with your target audience through strategic influencer marketing.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full inline-flex items-center transition-all">
                Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6F61" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,170.7C384,181,480,171,576,144C672,117,768,75,864,80C960,85,1056,139,1152,149.3C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>
    </motion.main>
  );
};

export default InfluencerMarketing;