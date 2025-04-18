import { motion } from 'framer-motion';

const Clients = () => {
  const stats = [
    { value: '150+', label: 'Happy Clients', icon: '👥' },
    { value: '95%', label: 'Retention Rate', icon: '📈' },
    { value: '300+', label: 'Projects', icon: '🚀' },
    { value: '12+', label: 'Years', icon: '⏳' }
  ];

  const clients = [
    { name: "Google", sector: "Tech", logo: "https://logo.clearbit.com/google.com?size=128" },
    { name: "Amazon", sector: "E-commerce", logo: "https://logo.clearbit.com/amazon.com?size=128" },
    { name: "Microsoft", sector: "Software", logo: "https://logo.clearbit.com/microsoft.com?size=128" },
    { name: "Tesla", sector: "Automotive", logo: "https://logo.clearbit.com/tesla.com?size=128" },
    { name: "Netflix", sector: "Entertainment", logo: "https://logo.clearbit.com/netflix.com?size=128" },
    { name: "Adobe", sector: "Creative", logo: "https://logo.clearbit.com/adobe.com?size=128" }
  ];

  return (
    <section id="clients" className="relative py-16 sm:py-24 md:py-32 bg-darker overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-dark to-dark/80" />
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[100px]" />
      </div>

      {/* Container */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Our Partners
          </span>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold text-white mb-6">
            Trusted by industry <span className="text-primary">leaders</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
            We collaborate with visionary companies to create digital excellence
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 mb-24"
        >
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="p-6 sm:p-8 rounded-2xl bg-dark border border-white/10 hover:border-primary/50 shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300 flex items-center justify-center"
            >
              <img src={client.logo} alt={client.name} className="h-12 object-contain grayscale filter hover:grayscale-0 transition duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-10 relative overflow-hidden"
        >
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-[80px]" />
          <div className="relative z-10">
            <p className="text-xl text-white/80 italic mb-8">
              "Working with this team transformed our digital strategy. Their innovative approach delivered results beyond our expectations."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-lg font-bold text-primary mr-4">
                JD
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white">John Doe</h4>
                <p className="text-white/60">CEO, TechCorp</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;