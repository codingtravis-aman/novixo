import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

const workProjects = [
  {
    id: 1,
    title: "Fintech Revolution",
    description: "Reinventing personal finance management with AI-driven insights and intuitive UX.",
    category: "Web Platform",
    imageUrl: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Digital innovation concept",
    slug: "fintech-revolution"
  },
  {
    id: 2,
    title: "Health & Wellness Platform",
    description: "Creating a personalized wellness journey through intuitive design and data visualization.",
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tech team collaboration",
    slug: "health-wellness-platform"
  },
  {
    id: 3,
    title: "Retail Transformation",
    description: "Redefining online shopping experiences with immersive product visualization.",
    category: "E-commerce Solution",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Creative design process",
    slug: "retail-transformation"
  },
  {
    id: 4,
    title: "Immersive Entertainment",
    description: "Building next-generation entertainment platforms with unique user journeys.",
    category: "Brand Experience",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern office workspace",
    slug: "immersive-entertainment"
  }
];

const Work = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.4,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="work" className="relative py-12 sm:py-20 md:py-32 bg-darker overflow-hidden">
      {/* Background Animation */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ 
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          background: 'radial-gradient(circle at center, rgba(255,111,97,0.1) 0%, transparent 50%)',
          backgroundSize: '100% 100%',
        }}
      />

      <div className="container mx-auto px-4 md:px-8 relative">
        <motion.div 
          className="mb-8 sm:mb-12 md:mb-16 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-5xl font-poppins font-bold mb-4 sm:mb-6"
            variants={titleVariants}
          >
            Selected <span className="text-primary">Work</span>
          </motion.h2>
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            variants={subtitleVariants}
          >
            We've helped brands across industries create meaningful digital experiences.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {workProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }
              }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-8 sm:mt-12 md:mt-16 text-center"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          whileHover="hover"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Link 
            href="/case-studies" 
            className="group inline-flex items-center magnetic-btn border-2 border-white hover:border-primary hover:bg-primary/10 text-white font-medium py-3 sm:py-4 px-6 sm:px-8 rounded-full transition-all text-sm sm:text-base"
          >
            View all projects
            <motion.span
              className="ml-2"
              initial={{ x: 0 }}
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.span>
          </Link>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          className="absolute -top-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </section>
  );
};

export default Work;
