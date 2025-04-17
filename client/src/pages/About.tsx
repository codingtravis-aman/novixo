import { motion } from 'framer-motion';
import { Users, Globe, Award, Clock, BarChart2, Heart } from 'lucide-react';
import ThreeDScene from '@/components/3DScene';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with 15+ years in tech innovation and business strategy.",
      image: "/team/alex.jpg"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Technology expert specializing in scalable architecture and AI solutions.",
      image: "/team/sarah.jpg"
    },
    {
      name: "Miguel Rodriguez",
      role: "Lead Designer",
      bio: "Creative director focused on user-centered design and brand experiences.",
      image: "/team/miguel.jpg"
    }
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      icon: <Award className="w-6 h-6 text-primary" />,
      description: "Started with a small team and big dreams to revolutionize digital experiences."
    },
    {
      year: "2018",
      title: "First Major Client",
      icon: <Users className="w-6 h-6 text-primary" />,
      description: "Landed our first Fortune 500 client, marking our entry into enterprise solutions."
    },
    {
      year: "2021",
      title: "Global Expansion",
      icon: <Globe className="w-6 h-6 text-primary" />,
      description: "Opened offices in 3 new countries, serving clients across 15 time zones."
    },
    {
      year: "2023",
      title: "Award-Winning Work",
      icon: <Award className="w-6 h-6 text-primary" />,
      description: "Recognized with the Webby Award for excellence in digital innovation."
    }
  ];

  const values = [
    {
      title: "Innovation",
      icon: <BarChart2 className="w-8 h-8 text-primary" />,
      description: "We push boundaries and challenge the status quo to deliver cutting-edge solutions."
    },
    {
      title: "Integrity",
      icon: <Heart className="w-8 h-8 text-primary" />,
      description: "Honest, transparent relationships form the foundation of everything we do."
    },
    {
      title: "Excellence",
      icon: <Award className="w-8 h-8 text-primary" />,
      description: "We settle for nothing less than exceptional quality in our work and service."
    }
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
              Our <span className="text-primary">Story</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/70 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              From humble beginnings to industry leaders - discover what makes us different.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-white/70">
              Key moments that shaped who we are today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  {milestone.icon}
                  <span className="text-primary font-bold">{milestone.year}</span>
                </div>
                <h3 className="text-xl font-poppins font-bold mb-3">{milestone.title}</h3>
                <p className="text-white/70">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-dark relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Meet The Team</h2>
            <p className="text-xl text-white/70">
              The brilliant minds behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm"
              >
                <div className="h-64 bg-gradient-to-br from-primary/20 to-dark/80 relative overflow-hidden">
                  {/* Team member image would go here */}
                  <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                    <Users className="w-16 h-16 text-primary/30" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-poppins font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-4">{member.role}</p>
                  <p className="text-white/70">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 bg-darker relative">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Core Values</h2>
            <p className="text-xl text-white/70">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-poppins font-bold mb-4">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
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
            Ready to Work With Us?
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

export default About;