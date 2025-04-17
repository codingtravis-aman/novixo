import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreeDScene from '../components/3DScene';

const Work = () => {
  // Enhanced projects data with images and links
  const projects = [
    {
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Built with React, Node.js and MongoDB handling 10K+ daily transactions",
      image: "/work/ecommerce.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "/work/ecommerce-case-study"
    },
    {
      title: "Mobile Banking App", 
      category: "Mobile Development",
      description: "Secure banking application with biometric authentication",
      image: "/work/banking.jpg",
      tags: ["React Native", "Firebase", "Stripe"],
      link: "/work/banking-case-study"
    },
    {
      title: "Cloud Infrastructure",
      category: "DevOps",
      description: "Scalable cloud architecture with auto-scaling",
      image: "/work/cloud.jpg", 
      tags: ["AWS", "Terraform", "Kubernetes"],
      link: "/work/cloud-case-study"
    },
    {
      title: "Data Analytics Dashboard",
      category: "Data Engineering",
      description: "Real-time business intelligence dashboard",
      image: "/work/analytics.jpg",
      tags: ["Python", "PostgreSQL", "D3.js"],
      link: "/work/analytics-case-study"
    }
  ];

  // Animated counter component
  const StatsCounter = ({ value, label }: { value: string; label: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      const target = parseInt(value.replace(/[^0-9]/g, ''));
      const duration = 2000;
      const increment = target / (duration / 16);
      
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev >= target) {
            clearInterval(timer);
            return target;
          }
          return Math.ceil(prev + increment);
        });
      }, 16);

      return () => clearInterval(timer);
    }, [value]);

    return (
      <div className="text-center">
        <div className="text-5xl font-bold text-primary mb-3">
          {count}{value.includes('+') ? '+' : ''}
        </div>
        <p className="text-xl text-white/70">{label}</p>
      </div>
    );
  };

  // Testimonials data
  const testimonials = [
    {
      quote: "Their solution increased our conversion rate by 40%",
      author: "Jane Smith, CEO of RetailCo",
      role: "E-commerce Client" 
    },
    {
      quote: "The most reliable tech partner we've worked with",
      author: "Michael Johnson, CTO of FinTech Inc",
      role: "Banking Client"
    },
    {
      quote: "Transformed our data infrastructure in record time",
      author: "Sarah Lee, Data Director",
      role: "Enterprise Client"
    }
  ];

  // Technologies data
  const technologies = [
    { name: "React", icon: "/tech/react.svg" },
    { name: "Node.js", icon: "/tech/nodejs.svg" },
    { name: "MongoDB", icon: "/tech/mongodb.svg" },
    { name: "AWS", icon: "/tech/aws.svg" },
    { name: "Python", icon: "/tech/python.svg" },
    { name: "Kubernetes", icon: "/tech/kubernetes.svg" }
  ];

  return (
    <motion.main
      className="bg-dark text-white font-inter min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <ThreeDScene />
        <div className="container mx-auto px-4 md:px-8 py-32 relative z-10">
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
              Discover how we've helped businesses transform through technology.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Featured Projects</h2>
            <p className="text-xl text-white/70">
              A selection of our most impactful work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 to-dark/80 relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <span className="text-primary font-medium">{project.category}</span>
                      <h3 className="text-2xl font-poppins font-bold">{project.title}</h3>
                    </div>
                    <a 
                      href={project.link}
                      className="text-primary hover:text-white transition-colors"
                      aria-label={`View ${project.title} case study`}
                    >
                      →
                    </a>
                  </div>
                  <p className="text-white/70 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-dark relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCounter value="150+" label="Projects Completed" />
            <StatsCounter value="95%" label="Client Satisfaction" />
            <StatsCounter value="40+" label="Industries Served" />
            <StatsCounter value="5M+" label="Users Impacted" />
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary/10 relative">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-5xl font-poppins font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a 
              href="/contact" 
              className="inline-block bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </motion.main>
  );
};

export default Work;