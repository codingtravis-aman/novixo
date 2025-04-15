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
  BarChart3,
  CheckCircle
} from 'lucide-react';

const DevOps = () => {
  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const features = [
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

  const projects = [
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
    },
    {
      title: "Healthcare Infrastructure Modernization",
      description: "Redesigned infrastructure for a healthcare provider, ensuring HIPAA compliance while improving scalability.",
      metrics: [
        { value: "100%", label: "HIPAA compliance" },
        { value: "60%", label: "Infrastructure cost savings" },
        { value: "8x", label: "Deployment frequency" }
      ],
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Assessment & Discovery",
      description: "We evaluate your current infrastructure, workflows, and identify opportunities for improvement."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "We create a customized DevOps roadmap aligned with your business goals and technical requirements."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Our experts implement tools, automations, and processes tailored to your organization's needs."
    },
    {
      number: "04",
      title: "Training & Knowledge Transfer",
      description: "We train your team on best practices and new tools to ensure long-term success."
    },
    {
      number: "05",
      title: "Continuous Improvement",
      description: "We provide ongoing support and optimization to ensure your DevOps processes evolve with your business."
    }
  ];

  const benefits = [
    "Increased deployment frequency",
    "Reduced time to market",
    "Lower failure rate of new releases",
    "Shortened lead time between fixes",
    "Improved mean time to recovery",
    "Enhanced scalability and reliability",
    "Better resource utilization",
    "Increased security and compliance",
    "Improved team collaboration",
    "Reduced operational costs"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-darker"
    >
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-darker via-dark to-darker">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-3xl"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              DevOps <span className="text-primary">Services</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-white/70 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Streamline your development and operations with our comprehensive DevOps solutions. We bridge the gap between development and operations to deliver faster, more reliable software.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-300 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#features" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-lg border border-white/10 transition-colors duration-300">
                Explore Services
              </a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute right-0 top-1/3 -translate-y-1/2 hidden lg:block"
        >
          <Server className="w-64 h-64 text-primary/10" />
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our DevOps Services</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              We provide end-to-end DevOps solutions that streamline your development pipeline and enhance operational efficiency.
            </p>
          </motion.div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-darker p-8 rounded-2xl border border-white/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent opacity-50" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our DevOps Process</h2>
            <p className="text-lg text-white/70">
              We follow a proven methodology to implement DevOps practices that drive meaningful results for your organization.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 relative"
          >
            {/* Line connecting steps */}
            <div className="absolute top-0 bottom-0 left-[28px] w-1 bg-gradient-to-b from-primary/80 via-primary/50 to-primary/10 hidden md:block"></div>
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
              >
                <div className="flex-shrink-0 flex items-start relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                    {step.number}
                  </div>
                </div>
                <div className="bg-dark/50 p-6 md:p-8 rounded-2xl border border-white/5 flex-1">
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 md:py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-lg text-white/70 max-w-3xl mx-auto">
              Learn how our DevOps services have transformed operations and accelerated growth for our clients.
            </p>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-darker rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-white/70 mb-6">{project.description}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-white/50">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-40" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Benefits of Our DevOps Services</h2>
              <p className="text-lg text-white/70 mb-8">
                Our DevOps solutions deliver tangible business value through improved collaboration, automation, and continuous delivery practices.
              </p>
              
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-white/80">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-primary/10 to-transparent rounded-3xl blur-2xl" />
              <div className="relative">
                <div className="p-1 rounded-3xl bg-gradient-to-tr from-primary/50 via-primary/20 to-transparent">
                  <div className="rounded-3xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?auto=format&fit=crop&q=80"
                      alt="DevOps Benefits"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="contact" className="py-20 md:py-32 bg-dark">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your DevOps Process?</h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Contact us today to learn how our DevOps services can help your organization deliver better software faster and more reliably.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors duration-300 text-lg"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default DevOps;