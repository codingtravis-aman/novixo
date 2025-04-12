import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
  }
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      }
    }
  };

  return (
    <motion.div 
      className="project-card hover-scale rounded-2xl overflow-hidden bg-dark"
      variants={cardVariants}
      whileHover={{ y: -10 }}
    >
      <div className="h-80 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.imageAlt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-8">
        <span className="text-primary font-medium">{project.category}</span>
        <h3 className="text-2xl font-poppins font-bold mt-2 mb-4">{project.title}</h3>
        <p className="text-white/70 mb-6">{project.description}</p>
        <a href="#" className="flex items-center text-primary font-medium group">
          View Case Study
          <ArrowRight className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
