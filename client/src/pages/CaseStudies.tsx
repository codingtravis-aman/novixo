import { motion } from 'framer-motion';
import ThreeDScene from '@/components/3DScene';
import { 
  Briefcase, 
  ArrowRight, 
  ChevronRight,
  Calendar, 
  Tag,
  Users
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Financial Dashboard Redesign",
      client: "CapitalTrack",
      category: "UX/UI Design",
      date: "January 2023",
      summary: "Redesigned a complex financial platform, improving user efficiency by 42% and increasing user satisfaction scores by 35%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tags: ["UX/UI Design", "FinTech", "Dashboard Design"]
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      client: "ShopWave",
      category: "Mobile Development",
      date: "March 2023",
      summary: "Created an intuitive mobile shopping experience that increased conversion rates by 28% and reduced cart abandonment by 15%.",
      image: "https://images.unsplash.com/photo-1556742077-0a6b6a4a4ac4?auto=format&fit=crop&w=1200&q=80",
      tags: ["Mobile Development", "E-commerce", "UX Design"]
    },
    {
      id: 3,
      title: "SaaS Marketing Platform",
      client: "MarketBoost",
      category: "Web Development",
      date: "April 2023",
      summary: "Developed a feature-rich SaaS application with advanced analytics that improved user engagement by 60%.",
      image: "https://images.unsplash.com/photo-1535598745644-bc7913bb1a2a?auto=format&fit=crop&w=1200&q=80",
      tags: ["Web Development", "SaaS", "Marketing Tech"]
    },
    {
      id: 4,
      title: "Healthcare Patient Portal",
      client: "MediCare Plus",
      category: "Web Development",
      date: "June 2023",
      summary: "Developed a user-centered patient portal that improved appointment scheduling efficiency and patient satisfaction.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      tags: ["Web Development", "Healthcare", "User Experience"]
    },
    {
      id: 5,
      title: "Social Media Growth Strategy",
      client: "TrendX",
      category: "Digital Marketing",
      date: "August 2023",
      summary: "Implemented a comprehensive social media strategy that increased followers by 200% and engagement by 145% within 6 months.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=1200&q=80",
      tags: ["Digital Marketing", "Social Media", "Brand Strategy"]
    },
    {
      id: 6,
      title: "Enterprise DevOps Implementation",
      client: "TechCorp Global",
      category: "DevOps",
      date: "October 2023",
      summary: "Streamlined development workflow and reduced deployment time by 75% through a comprehensive DevOps transformation.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=1200&q=80",
      tags: ["DevOps", "Enterprise", "CI/CD"]
    },
    {
      id: 7,
      title: "Influencer Campaign for Product Launch",
      client: "EcoStyle",
      category: "Influencer Marketing",
      date: "November 2023",
      summary: "Orchestrated an influencer campaign that generated 2.5M impressions and a 320% increase in product sales.",
      image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=1200&q=80",
      tags: ["Influencer Marketing", "Product Launch", "Social Media"]
    },
    {
      id: 8,
      title: "AI-Powered Customer Service Solution",
      client: "ServiceNow",
      category: "Web Development",
      date: "December 2023",
      summary: "Developed an AI-driven customer service platform that reduced response times by 60% and increased resolution rates by 40%.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
      tags: ["AI/ML", "Customer Service", "Web Development"]
    }
  ];

  const categories = [
    "All",
    "UX/UI Design",
    "Web Development",
    "Mobile Development",
    "Digital Marketing",
    "DevOps",
    "Influencer Marketing"
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
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <ThreeDScene />
        
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-primary">Case Studies</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our portfolio of successful projects and discover how we've helped businesses achieve their digital goals.
            </motion.p>
          </div>
        </div>
        
        {/* Floating Elements */}
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
              <Briefcase className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Categories Filter */}
      <section className="py-12 bg-darker sticky top-[72px] z-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0 ? 'bg-primary text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl mb-6">
                  <img 
                    src={study.image} 
                    alt={study.title} 
                    className="w-full aspect-[16/9] object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                
                <div className="flex items-center space-x-3 mb-3">
                  <span className="text-primary text-sm font-medium">{study.category}</span>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center text-white/50 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {study.date}
                  </div>
                </div>
                
                <h3 className="text-2xl font-poppins font-bold mb-3 group-hover:text-primary transition-colors">{study.title}</h3>
                <p className="text-white/70 mb-4">{study.summary}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {study.tags.slice(0, 2).map((tag, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/5 text-white/60"
                      >
                        <Tag className="w-3 h-3 mr-1" /> {tag}
                      </span>
                    ))}
                    {study.tags.length > 2 && 
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-white/5 text-white/60">
                        +{study.tags.length - 2}
                      </span>
                    }
                  </div>
                  
                  <a 
                    href={`#case-study-${study.id}`} 
                    className="flex items-center text-primary font-medium group-hover:text-primary/80 transition-colors"
                  >
                    View Details <ChevronRight className="ml-1 w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Results Showcase */}
      <section className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl top-1/2 -right-48"
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Measurable Results</h2>
            <p className="text-xl text-white/70">
              Our work delivers tangible outcomes that drive business growth and success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ResultCard 
              number="250+" 
              label="Projects Completed" 
              icon={<Briefcase className="w-6 h-6 text-primary" />} 
            />
            <ResultCard 
              number="180%" 
              label="Average ROI" 
              icon={<ArrowRight className="w-6 h-6 text-primary" />} 
            />
            <ResultCard 
              number="95%" 
              label="Client Retention" 
              icon={<Users className="w-6 h-6 text-primary" />} 
            />
            <ResultCard 
              number="12+" 
              label="Industry Awards" 
              icon={<Tag className="w-6 h-6 text-primary" />} 
            />
          </div>
          
          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-24 max-w-4xl mx-auto p-10 bg-white/5 rounded-2xl border border-white/10 relative"
          >
            <div className="absolute -top-6 left-10 text-primary text-8xl opacity-20">"</div>
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-white/80 italic mb-8">
                Novixo's approach to our project was exceptional from start to finish. They took the time to understand our unique challenges and delivered a solution that exceeded our expectations in every way.
              </p>
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary mr-4">
                  SJ
                </div>
                <div>
                  <h4 className="text-lg font-poppins font-semibold">Sarah Johnson</h4>
                  <p className="text-white/60">CTO, MarketBoost</p>
                </div>
              </div>
            </div>
          </motion.div>
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
              Ready to Create Your Success Story?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              Let's discuss how we can help your business achieve its digital goals and create your own success story.
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

// Result Card Component
const ResultCard = ({ number, label, icon }: { number: string, label: string, icon: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300 text-center group"
    >
      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
        {icon}
      </div>
      <h3 className="text-4xl md:text-5xl font-poppins font-bold text-primary mb-2">{number}</h3>
      <p className="text-white/70">{label}</p>
    </motion.div>
  );
};

export default CaseStudies;