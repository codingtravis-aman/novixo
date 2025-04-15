import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
  };
}

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const categories = ["All", "Web App", "Mobile", "UI/UX", "Branding"];
  
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with real-time inventory management and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
      category: "Web App",
      technologies: ["React", "Node.js", "MongoDB", "TailwindCSS"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Travel App Design",
      description: "Beautiful and intuitive travel planning app design with interactive maps and itinerary builder.",
      image: "https://images.unsplash.com/photo-1680795456548-d5e58e33bba2?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX",
      technologies: ["Figma", "Adobe XD", "Prototyping"],
      links: {
        live: "https://example.com"
      }
    },
    {
      title: "Fitness Tracking App",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and health metrics with social features.",
      image: "https://images.unsplash.com/photo-1676321685222-0b527e69c022?auto=format&fit=crop&q=80&w=800",
      category: "Mobile",
      technologies: ["React Native", "Firebase", "TypeScript"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Brand Identity System",
      description: "Complete brand identity system including logo, guidelines, and marketing materials.",
      image: "https://images.unsplash.com/photo-1679678691006-0ad24fecb769?auto=format&fit=crop&q=80&w=800",
      category: "Branding",
      technologies: ["Illustrator", "Photoshop", "InDesign"],
      links: {
        live: "https://example.com"
      }
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time analytics dashboard with customizable widgets and data visualization.",
      image: "https://images.unsplash.com/photo-1678698399012-47672f315b54?auto=format&fit=crop&q=80&w=800",
      category: "Web App",
      technologies: ["Vue.js", "D3.js", "PostgreSQL"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    },
    {
      title: "Social Media App",
      description: "Feature-rich social media application with real-time messaging and content sharing.",
      image: "https://images.unsplash.com/photo-1673845946960-0aa133650662?auto=format&fit=crop&q=80&w=800",
      category: "Mobile",
      technologies: ["Flutter", "Firebase", "GetX"],
      links: {
        live: "https://example.com",
        github: "https://github.com"
      }
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <motion.main
      className="bg-dark text-white font-inter min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        {/* Decorative Floating Shapes */}
        <motion.div 
          className="absolute right-10 md:right-20 top-1/3 transform -translate-y-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative">
            <motion.div 
              className="absolute inset-0 bg-primary/10 rounded-2xl blur-md"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <div className="w-20 h-20 md:w-32 md:h-32 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
              <Github className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
        </motion.div>
        <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1 
              className="text-4xl md:text-6xl font-poppins font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our <span className="text-primary">Work</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Explore our latest projects and see how we help businesses transform their digital presence.
            </motion.p>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Projects</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From web apps to UI/UX design, here are some highlights from our portfolio.
            </p>
          </motion.div>
          {/* Category Filter */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category, index) => (
              <motion.button
                key={index}
                variants={itemVariants}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-semibold text-base ${activeCategory === category ? "bg-primary text-white border-primary border-2" : "bg-dark border border-white/20 text-white/70 hover:text-primary hover:border-primary"}`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative p-8 border border-white/10 rounded-2xl bg-dark/50 hover:bg-dark/80 transition-all duration-300 h-full flex flex-col group overflow-hidden"
                whileHover={{ y: -6, scale: 1.03 }}
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-lg font-bold text-primary font-poppins">{project.title}</span>
                </div>
                <div className="text-white/70 mb-2">{project.description}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" /> Code
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-1/4 -right-12 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -left-12 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>
    </motion.main>
  );
};

export default Work;
