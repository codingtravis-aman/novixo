import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users } from 'lucide-react';
import { Link } from 'wouter';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    slug?: string;
    date?: string;
    client?: string;
    tags?: string[];
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
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 }
  };

  const contentVariants = {
    rest: { y: 0 },
    hover: { y: -5 }
  };

  const arrowVariants = {
    rest: { x: 0 },
    hover: { x: 5 }
  };

  return (
    <motion.div 
      className="project-card rounded-2xl overflow-hidden bg-dark/50 backdrop-blur-sm border border-white/5 hover:border-primary/20 w-full"
      variants={cardVariants}
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden">
        <motion.img 
          src={project.imageUrl} 
          alt={project.imageAlt} 
          className="w-full h-full object-cover"
          variants={imageVariants}
          transition={{ duration: 0.4 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-80"
          whileHover={{ opacity: 0.9 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div 
          className="absolute bottom-4 left-4 right-4"
          variants={contentVariants}
          transition={{ duration: 0.3 }}
        >
          <motion.span 
            className="inline-block px-3 py-1 bg-primary text-white text-sm rounded-full mb-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {project.category}
          </motion.span>
          <motion.h3 
            className="text-xl sm:text-2xl font-bold text-white line-clamp-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {project.title}
          </motion.h3>
        </motion.div>
      </div>
      <motion.div 
        className="p-4 sm:p-6"
        variants={contentVariants}
        transition={{ duration: 0.3 }}
      >
        {(project.date || project.client) && (
          <motion.div 
            className="flex flex-wrap items-center gap-2 sm:gap-4 text-white/70 text-xs sm:text-sm mb-3 sm:mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {project.date && (
              <div className="flex items-center">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {project.date}
              </div>
            )}
            {project.client && (
              <div className="flex items-center">
                <Users className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                {project.client}
              </div>
            )}
          </motion.div>
        )}
        <motion.p 
          className="text-white/70 text-sm sm:text-base mb-4 sm:mb-6 line-clamp-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {project.description}
        </motion.p>
        {project.tags && (
          <motion.div 
            className="flex flex-wrap gap-2 mb-4 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {project.tags.map((tag, index) => (
              <motion.span 
                key={tag}
                className="px-2 sm:px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        )}
        <Link 
          href={`/case-studies#${project.slug || project.id}`} 
          className="group inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm sm:text-base"
        >
          View Case Study
          <motion.span
            className="ml-2"
            variants={arrowVariants}
            transition={{ duration: 0.2 }}
          >
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
