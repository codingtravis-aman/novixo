import { motion } from 'framer-motion';
import { 
  Server, 
  GitBranch, 
  Cpu, 
  Cloud, 
  Lock, 
  Activity, 
  FileCode, 
  Layers,
  ServerCrash,
  ArrowRight,
  BarChart3
} from 'lucide-react';
import ThreeDScene from '@/components/3DScene';

const DevOps = () => {
  const devopsFeatures = [
    {
      icon: <GitBranch className="h-6 w-6" />,
      title: "CI/CD Pipelines",
      description: "Automated workflows that enable continuous integration and delivery of your applications."
    },
    {
      icon: <Cpu className="h-6 w-6" />,
      title: "Infrastructure as Code",
      description: "Manage and provision infrastructure through code instead of manual processes."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Migration",
      description: "Seamlessly transition your applications and data to the cloud environment of your choice."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Security Automation",
      description: "Built-in security measures throughout the development and deployment lifecycle."
    },
    {
      icon: <Activity className="h-6 w-6" />,
      title: "Monitoring & Observability",
      description: "Comprehensive monitoring solutions to ensure optimal performance and quick issue resolution."
    },
    {
      icon: <ServerCrash className="h-6 w-6" />,
      title: "Incident Response",
      description: "Automated incident management systems with predefined response protocols."
    }
  ];

  const caseStudies = [
    {
      title: "E-commerce Platform Migration",
      description: "Migrated a high-traffic e-commerce platform to a scalable cloud infrastructure with zero downtime.",
      metrics: [
        { value: "99.99%", label: "Uptime achieved" },
        { value: "70%", label: "Cost reduction" },
        { value: "3x", label: "Performance increase" }
      ],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&q=80"
    },
    {
      title: "Financial Services CI/CD Transformation",
      description: "Implemented a secure CI/CD pipeline for a financial institution, reducing deployment time while maintaining compliance.",
      metrics: [
        { value: "90%", label: "Deployment time reduction" },
        { value: "100%", label: "Compliance maintained" },
        { value: "5x", label: "Release frequency increase" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
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
              DevOps <span className="text-primary">Services</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Streamline your development and operations with our comprehensive DevOps solutions. We bridge the gap between development and operations to deliver faster, more reliable software.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                Get Started
              </a>
              <a href="#services" className="magnetic-btn bg-transparent border border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-full transition-all">
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Server Icons */}
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
              <Server className="w-10 h-10 md:w-16 md:h-16 text-primary" />
            </div>
          </div>
          
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <FileCode className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
          </motion.div>
          
          <motion.div 
            className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <Layers className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Services Overview */}
      <section id="services" className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our DevOps Services</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our comprehensive DevOps services help organizations automate and optimize their development and deployment processes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsFeatures.map((feature, index) => (
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
      
      {/* Process Section */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our DevOps Process</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              We implement a proven methodology to modernize your development and operations processes.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { number: "01", title: "Assessment", description: "We evaluate your current workflows, tools, and infrastructure to identify opportunities for improvement." },
              { number: "02", title: "Strategy", description: "Our experts develop a tailored DevOps roadmap aligned with your business objectives and technical requirements." },
              { number: "03", title: "Implementation", description: "We configure and deploy the necessary tools and automation workflows while training your team." },
              { number: "04", title: "Optimization", description: "Continuous monitoring and refinement of your DevOps practices to ensure ongoing improvement." }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 border border-white/10 rounded-xl bg-dark/50 h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-poppins font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-poppins font-bold mb-3 mt-6">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                    <ArrowRight className="text-primary/40 w-6 h-6" />
                  </div>
                )}
              </motion.div>
            ))}
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">DevOps Case Studies</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              Real-world examples of how our DevOps services have transformed businesses.
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
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-center p-3 bg-primary/5 rounded-lg">
                        <div className="text-2xl font-poppins font-bold text-primary mb-1">{metric.value}</div>
                        <div className="text-sm text-white/60">{metric.label}</div>
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
      
      {/* Technologies */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -right-48"
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
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our DevOps Technology Stack</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We leverage industry-leading technologies to deliver exceptional DevOps solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
          >
            {[
              { name: "AWS", icon: "https://cdn.worldvectorlogo.com/logos/aws-2.svg" },
              { name: "Docker", icon: "https://cdn.worldvectorlogo.com/logos/docker-4.svg" },
              { name: "Kubernetes", icon: "https://cdn.worldvectorlogo.com/logos/kubernets.svg" },
              { name: "Jenkins", icon: "https://cdn.worldvectorlogo.com/logos/jenkins-1.svg" },
              { name: "GitLab", icon: "https://cdn.worldvectorlogo.com/logos/gitlab.svg" },
              { name: "Terraform", icon: "https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg" },
              { name: "Ansible", icon: "https://cdn.worldvectorlogo.com/logos/ansible.svg" },
              { name: "Prometheus", icon: "https://cdn.worldvectorlogo.com/logos/prometheus.svg" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-dark/50 border border-white/10 rounded-xl flex flex-col items-center"
              >
                <div className="w-16 h-16 mb-4 bg-white rounded-lg p-2 flex items-center justify-center">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                </div>
                <span className="font-medium">{tech.name}</span>
              </motion.div>
            ))}
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
              Ready to Transform Your Development Process?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              Get started with our DevOps services today and experience faster, more reliable software delivery.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full inline-flex items-center transition-all">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6F61" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,208C384,213,480,203,576,186.7C672,171,768,149,864,154.7C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>
    </motion.main>
  );
};

export default DevOps;