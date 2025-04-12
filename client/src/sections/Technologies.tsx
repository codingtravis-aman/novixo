import { motion } from 'framer-motion';
import { 
  FaReact, FaNode, FaAws, FaDocker, FaAngular, FaVuejs, FaPython,
  FaJava, FaPhp, FaSwift, FaJs, FaJira, FaFigma, FaGitAlt
} from 'react-icons/fa';

import { 
  SiKubernetes, SiTensorflow, SiMongodb, SiPostgresql, SiFirebase,
  SiTypescript, SiFlutter, SiGraphql, SiTailwindcss, SiNextdotjs,
  SiGooglecloud, SiVite, SiGoland, SiRedux, SiZod, SiPrisma,
  SiRust, SiSolidity
} from 'react-icons/si';

const Technologies = () => {
  const techCategories = [
    {
      name: "Frontend",
      technologies: [
        { name: "React", icon: <FaReact className="w-8 h-8" /> },
        { name: "Angular", icon: <FaAngular className="w-8 h-8" /> },
        { name: "Vue.js", icon: <FaVuejs className="w-8 h-8" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
        { name: "JavaScript", icon: <FaJs className="w-8 h-8" /> },
        { name: "Vite", icon: <SiVite className="w-8 h-8" /> },
        { name: "Redux", icon: <SiRedux className="w-8 h-8" /> },
      ]
    },
    {
      name: "Backend",
      technologies: [
        { name: "Node.js", icon: <FaNode className="w-8 h-8" /> },
        { name: "Python", icon: <FaPython className="w-8 h-8" /> },
        { name: "Java", icon: <FaJava className="w-8 h-8" /> },
        { name: "PHP", icon: <FaPhp className="w-8 h-8" /> },
        { name: "GraphQL", icon: <SiGraphql className="w-8 h-8" /> },
        { name: "Prisma", icon: <SiPrisma className="w-8 h-8" /> },
        { name: "Rust", icon: <SiRust className="w-8 h-8" /> },
        { name: "Solidity", icon: <SiSolidity className="w-8 h-8" /> },
        { name: "Go", icon: <SiGoland className="w-8 h-8" /> },
      ]
    },
    {
      name: "Mobile",
      technologies: [
        { name: "React Native", icon: <FaReact className="w-8 h-8" /> },
        { name: "Flutter", icon: <SiFlutter className="w-8 h-8" /> },
        { name: "Swift", icon: <FaSwift className="w-8 h-8" /> },
      ]
    },
    {
      name: "Database & Storage",
      technologies: [
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
        { name: "PostgreSQL", icon: <SiPostgresql className="w-8 h-8" /> },
        { name: "Firebase", icon: <SiFirebase className="w-8 h-8" /> },
      ]
    },
    {
      name: "DevOps & Cloud",
      technologies: [
        { name: "AWS", icon: <FaAws className="w-8 h-8" /> },
        { name: "Docker", icon: <FaDocker className="w-8 h-8" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-8 h-8" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-8 h-8" /> },
      ]
    },
    {
      name: "AI & ML",
      technologies: [
        { name: "TensorFlow", icon: <SiTensorflow className="w-8 h-8" /> },
      ]
    },
    {
      name: "Tools",
      technologies: [
        { name: "Jira", icon: <FaJira className="w-8 h-8" /> },
        { name: "Figma", icon: <FaFigma className="w-8 h-8" /> },
        { name: "Git", icon: <FaGitAlt className="w-8 h-8" /> },
        { name: "Zod", icon: <SiZod className="w-8 h-8" /> },
      ]
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <motion.div 
        className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 right-0"
        animate={{ y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Technology Stack</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We leverage cutting-edge technologies to build scalable, high-performance digital solutions for our clients.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <div key={category.name}>
              <motion.h3 
                className="text-2xl font-poppins font-semibold mb-8 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                {category.name}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: techIndex * 0.05 }}
                    className="flex flex-col items-center p-4 bg-white/5 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="text-white/70 group-hover:text-primary transition-colors duration-300">
                      {tech.icon}
                    </div>
                    <span className="mt-3 text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl font-bold text-primary mb-2">300+</div>
            <p className="text-white/70">Projects Delivered</p>
          </div>
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-white/70">Technologies Mastered</p>
          </div>
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl font-bold text-primary mb-2">12+</div>
            <p className="text-white/70">Years of Experience</p>
          </div>
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-white/70">Uptime Guarantee</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
