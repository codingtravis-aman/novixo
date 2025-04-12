import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard';

const workProjects = [
  {
    id: 1,
    title: "Fintech Revolution",
    description: "Reinventing personal finance management with AI-driven insights and intuitive UX.",
    category: "Web Platform",
    imageUrl: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Digital innovation concept"
  },
  {
    id: 2,
    title: "Health & Wellness Platform",
    description: "Creating a personalized wellness journey through intuitive design and data visualization.",
    category: "Mobile App",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tech team collaboration"
  },
  {
    id: 3,
    title: "Retail Transformation",
    description: "Redefining online shopping experiences with immersive product visualization.",
    category: "E-commerce Solution",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Creative design process"
  },
  {
    id: 4,
    title: "Immersive Entertainment",
    description: "Building next-generation entertainment platforms with unique user journeys.",
    category: "Brand Experience",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Modern office workspace"
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

  return (
    <section id="work" className="py-20 md:py-32 bg-darker">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Selected Work</h2>
          <p className="text-xl text-white/70 max-w-2xl">We've helped brands across industries create meaningful digital experiences.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {workProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="#" 
            className="inline-block magnetic-btn border-2 border-white hover:border-primary hover:bg-primary/10 text-white font-medium py-4 px-8 rounded-full transition-all"
          >
            View all projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
