import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Users, 
  Globe, 
  School, 
  GraduationCap, 
  Heart, 
  Coffee,
  ArrowRight,
  CheckCircle,
  Calendar,
  MapPin,
  CreditCard
} from 'lucide-react';
import ThreeDScene from '@/components/3DScene';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Remote / New York",
      type: "Full-time",
      description: "We're looking for a talented Senior Frontend Developer to join our growing team. You'll be responsible for building beautiful, responsive interfaces for our clients.",
      responsibilities: [
        "Build performant, accessible frontend components",
        "Collaborate with designers and backend engineers",
        "Mentor junior developers and conduct code reviews",
        "Contribute to architectural decisions and technical roadmap"
      ],
      requirements: [
        "5+ years of experience with React and modern JavaScript",
        "Strong understanding of responsive design principles",
        "Experience with state management (Redux, Context, etc.)",
        "Knowledge of modern CSS practices and frameworks"
      ]
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Join our design team to create stunning user experiences that delight our clients and their customers. You'll work closely with our product and engineering teams.",
      responsibilities: [
        "Create wireframes, prototypes, and high-fidelity designs",
        "Conduct user research and usability testing",
        "Develop and maintain design systems",
        "Collaborate with developers to ensure design integrity"
      ],
      requirements: [
        "3+ years of experience in UX/UI design",
        "Proficiency in Figma, Sketch, or similar design tools",
        "Strong portfolio demonstrating user-centered design approach",
        "Experience with design systems and component libraries"
      ]
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Help us build and maintain the infrastructure that powers our clients' applications. You'll be responsible for ensuring high availability, performance, and security.",
      responsibilities: [
        "Design and implement CI/CD pipelines",
        "Manage cloud infrastructure (AWS, Azure, GCP)",
        "Implement monitoring and alerting systems",
        "Automate deployment and infrastructure provisioning"
      ],
      requirements: [
        "4+ years of experience in DevOps/SRE roles",
        "Strong knowledge of containerization and orchestration",
        "Experience with infrastructure as code (Terraform, CloudFormation)",
        "Understanding of networking, security, and performance optimization"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Remote-First Culture",
      description: "Work from anywhere in the world with our distributed team."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Competitive Compensation",
      description: "We offer competitive salaries and equity packages for all employees."
    },
    {
      icon: <Calendar className="h-6 w-6 text-primary" />,
      title: "Flexible Time Off",
      description: "Unlimited vacation policy with minimum requirements to ensure everyone takes time to recharge."
    },
    {
      icon: <School className="h-6 w-6 text-primary" />,
      title: "Learning & Development",
      description: "Professional development budget and time allocation for learning new skills."
    },
    {
      icon: <Heart className="h-6 w-6 text-primary" />,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness program for you and your family."
    },
    {
      icon: <Coffee className="h-6 w-6 text-primary" />,
      title: "Work-Life Balance",
      description: "We encourage sustainable work patterns and respect your personal time."
    }
  ];

  const coreValues = [
    {
      title: "Innovation",
      description: "We embrace creativity and constantly seek new solutions to complex problems."
    },
    {
      title: "Collaboration",
      description: "We believe the best work happens when diverse minds come together towards a common goal."
    },
    {
      title: "Excellence",
      description: "We hold ourselves to the highest standards in everything we do."
    },
    {
      title: "Transparency",
      description: "We communicate openly and honestly with our team members and clients."
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
              Join Our <span className="text-primary">Team</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Build your career at Novixo, where innovation meets purpose. Join our team of passionate professionals creating digital experiences that make a difference.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#openings" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full transition-all">
                View Open Positions
              </a>
              <a href="#culture" className="magnetic-btn bg-transparent border border-white/20 hover:border-white/40 text-white font-medium py-4 px-8 rounded-full transition-all">
                Our Culture
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Shapes */}
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
          
          <motion.div 
            className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12"
            animate={{ 
              y: [0, 10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Users className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
          </motion.div>
          
          <motion.div 
            className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4"
            animate={{ 
              y: [0, -10, 0],
            }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
          >
            <GraduationCap className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
          </motion.div>
        </motion.div>
      </section>
      
      {/* Culture Section */}
      <section id="culture" className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Culture</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              At Novixo, our culture is the foundation of everything we do. We foster an environment where creativity thrives and everyone can do their best work.
            </p>
          </motion.div>
          
          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:bg-dark/80 transition-all duration-300 h-full flex flex-col"
              >
                <div className="mb-4 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <div className="bg-primary w-4 h-4 rounded"></div>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Photos/Culture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-2"
            >
              <div className="h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern office space" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                  alt="Team event" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-2"
            >
              <div className="h-80 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" 
                  alt="Diverse team working together" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
        <motion.div 
          className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl -top-48 -left-48"
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
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Benefits & Perks</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We believe in taking care of our team with comprehensive benefits that support your professional growth and personal wellbeing.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 border border-white/10 rounded-xl bg-dark/50 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{benefit.title}</h3>
                <p className="text-white/70">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Job Openings */}
      <section id="openings" className="py-20 md:py-32 bg-darker relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Open Positions</h2>
            <p className="text-xl text-white/70 max-w-3xl">
              Join our team of talented individuals and help us create extraordinary digital experiences.
            </p>
          </motion.div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-white/10 rounded-2xl overflow-hidden"
              >
                <div className="p-8 md:p-10 bg-dark/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-poppins font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary">
                          <Briefcase className="w-3 h-3 mr-1" /> {job.department}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/70">
                          <MapPin className="w-3 h-3 mr-1" /> {job.location}
                        </span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/70">
                          <Calendar className="w-3 h-3 mr-1" /> {job.type}
                        </span>
                      </div>
                    </div>
                    <a 
                      href="#" 
                      className="inline-block mt-4 md:mt-0 magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-full transition-all"
                    >
                      Apply Now
                    </a>
                  </div>
                  
                  <p className="text-white/70 mb-8">{job.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-poppins font-semibold mb-4">Responsibilities</h4>
                      <ul className="space-y-2">
                        {job.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-white/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-poppins font-semibold mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                            <span className="text-white/70">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Don't See the Right Fit?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-white/70 mb-10"
            >
              We're always looking for talented individuals to join our team. Send us your resume and let's start a conversation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full inline-flex items-center transition-all">
                Send Your Resume <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        {/* Background patterns */}
        <svg className="absolute bottom-0 left-0 w-full h-auto opacity-10" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FF6F61" fillOpacity="1" d="M0,128L48,117.3C96,107,192,85,288,90.7C384,96,480,128,576,149.3C672,171,768,181,864,165.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </section>
    </motion.main>
  );
};

export default Careers;