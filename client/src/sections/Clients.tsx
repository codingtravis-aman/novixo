import { motion } from 'framer-motion';

const Clients = () => {
  // Client logos with brand names
  const clients = [
    { name: "Technova", logo: generateLogoSVG('Technova', '#FF6F61') },
    { name: "Quantum", logo: generateLogoSVG('Quantum', '#4F46E5') },
    { name: "Vertex", logo: generateLogoSVG('Vertex', '#10B981') },
    { name: "Atlas", logo: generateLogoSVG('Atlas', '#F59E0B') },
    { name: "Fusion", logo: generateLogoSVG('Fusion', '#EC4899') },
    { name: "Prism", logo: generateLogoSVG('Prism', '#8B5CF6') },
    { name: "Nexus", logo: generateLogoSVG('Nexus', '#3B82F6') },
    { name: "Pulse", logo: generateLogoSVG('Pulse', '#EF4444') }
  ];

  // Helper function to generate SVG logos
  function generateLogoSVG(name: string, color: string): string {
    const initials = name.slice(0, 2).toUpperCase();
    return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23FFFFFF' rx='10' ry='10'/%3E%3Ctext x='50' y='60' font-family='Arial' font-weight='bold' font-size='24' text-anchor='middle' fill='${color.replace('#', '%23')}'%3E${initials}%3C/text%3E%3C/svg%3E`;
  }

  return (
    <section className="py-20 md:py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Trusted by Industry Leaders</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            We've partnered with forward-thinking companies across various industries to deliver exceptional digital experiences.
          </p>
        </motion.div>
        
        {/* Client Logos */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-xl bg-white/5 border border-white/10 p-6 flex items-center justify-center mb-4 hover:border-primary/30 transition-all duration-300">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="w-full max-h-full object-contain" 
                />
              </div>
              <span className="text-white/80 font-medium">{client.name}</span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 max-w-4xl mx-auto p-10 bg-white/5 rounded-2xl border border-white/10 relative"
        >
          <div className="absolute -top-6 left-10 text-primary text-8xl opacity-20">"</div>
          <div className="relative z-10">
            <p className="text-xl md:text-2xl text-white/80 italic mb-8">
              Novixo transformed our digital presence with their innovative approach and technical expertise. Their team went above and beyond to deliver a solution that exceeded our expectations.
            </p>
            <div className="flex items-center">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-xl font-bold text-primary mr-4">
                AT
              </div>
              <div>
                <h4 className="text-lg font-poppins font-semibold">Alex Thompson</h4>
                <p className="text-white/60">CTO, Quantum Systems</p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Client Stats */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h4 className="text-4xl font-poppins font-bold text-primary mb-2">150+</h4>
            <p className="text-white/70">Satisfied Clients</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h4 className="text-4xl font-poppins font-bold text-primary mb-2">95%</h4>
            <p className="text-white/70">Client Retention</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h4 className="text-4xl font-poppins font-bold text-primary mb-2">300+</h4>
            <p className="text-white/70">Projects Completed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-6 bg-white/5 border border-white/10 rounded-xl"
          >
            <h4 className="text-4xl font-poppins font-bold text-primary mb-2">12+</h4>
            <p className="text-white/70">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;