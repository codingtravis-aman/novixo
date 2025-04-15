import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ArrowRight, Calendar, Tag, Users, Briefcase } from 'lucide-react';
import ThreeDScene from '@/components/3DScene';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [highlightedStudy, setHighlightedStudy] = useState<string | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsFilterVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const study = caseStudies.find(
        study => study.slug === hash || study.id.toString() === hash
      );
      if (study) {
        setHighlightedStudy(study.slug || study.id.toString());
        const element = document.getElementById(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }, 100);
        }
      }
    }
  }, []);

  const caseStudies = [
    {
      id: 1,
      slug: "fintech-revolution",
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
      slug: "health-wellness-platform",
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
      slug: "retail-transformation",
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
      slug: "immersive-entertainment",
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
      slug: "social-media-growth",
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
      slug: "enterprise-devops",
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
      slug: "influencer-campaign",
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
      slug: "ai-powered-customer-service",
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

  const filteredStudies = selectedCategory === "All" 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <motion.main
      className="bg-dark text-white font-inter relative" 
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
              className="text-4xl sm:text-5xl md:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-primary">Case Studies</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/70 mb-12"
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
      <motion.section 
        className="py-12 bg-darker sticky top-[72px] z-20 border-b border-white/10"
        initial={{ opacity: 1, y: 0 }}
        animate={{ 
          opacity: isFilterVisible ? 1 : 0,
          y: isFilterVisible ? 0 : -20,
          pointerEvents: isFilterVisible ? 'auto' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="flex flex-wrap gap-2 sm:gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base transition-all ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                id={study.slug || study.id.toString()}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5
                    }
                  }
                }}
                className={`group bg-dark/50 rounded-lg overflow-hidden transition-all duration-300 ${
                  highlightedStudy === (study.slug || study.id.toString())
                    ? 'ring-2 ring-primary scale-[1.02]'
                    : 'hover:scale-[1.02]'
                }`}
              >
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <motion.img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <motion.span 
                      className="inline-block px-3 py-1 bg-primary/90 text-white text-xs sm:text-sm rounded-full mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {study.category}
                    </motion.span>
                    <motion.h3 
                      className="text-lg sm:text-xl font-bold text-white line-clamp-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {study.title}
                    </motion.h3>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <motion.div 
                    className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {study.date}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                      {study.client}
                    </div>
                  </motion.div>
                  <motion.p 
                    className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    {study.summary}
                  </motion.p>
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4 sm:mb-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    {study.tags.map((tag, tagIndex) => (
                      <motion.span 
                        key={tag} 
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                  <motion.button 
                    className="flex items-center text-primary hover:text-primary/80 transition-colors text-sm sm:text-base group"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    whileHover={{ x: 5 }}
                  >
                    Read Full Case Study
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default CaseStudies;