import { motion } from 'framer-motion';
import ThreeDScene from '../components/3DScene';
import { BarChart3, Database, Search, Users, PieChart, ArrowRight } from 'lucide-react';

const dataServices = [
  {
    title: "Data Collection",
    description: "Gather and structure raw data from multiple sources for actionable insights.",
    icon: <Database className="h-6 w-6" />
  },
  {
    title: "Data Visualization",
    description: "Transform complex data into clear, interactive dashboards.",
    icon: <BarChart3 className="h-6 w-6" />
  },
  {
    title: "Predictive Analytics",
    description: "Leverage AI/ML to forecast trends and drive business strategy.",
    icon: <PieChart className="h-6 w-6" />
  }
];

const dataProcess = [
  { number: "01", title: "Discovery", description: "Understand your data goals and business context." },
  { number: "02", title: "Preparation", description: "Clean, structure, and enrich your data for analysis." },
  { number: "03", title: "Analysis", description: "Apply statistical methods and models to extract insights." },
  { number: "04", title: "Visualization", description: "Present findings in interactive, actionable formats." },
  { number: "05", title: "Optimization", description: "Iterate and refine models for maximum value." }
];

const caseStudies = [
  {
    title: "Retail Sales Forecasting",
    category: "Retail",
    description: "Built a predictive model that improved sales forecasting accuracy by 30%.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Customer Segmentation",
    category: "E-commerce",
    description: "Segmented users for targeted marketing, increasing ROI by 22%.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Churn Prediction",
    category: "SaaS",
    description: "Reduced churn by 18% by identifying at-risk customers early.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80"
  }
];

const DataAnalysis = () => (
  <motion.main className="bg-dark text-white font-inter min-h-screen" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <ThreeDScene />
      <div className="container mx-auto px-4 md:px-8 py-20 relative z-10">
        <motion.h1 className="text-4xl md:text-6xl font-poppins font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          Data Analysis
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-white/70 mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          Unlock insights and drive smarter decisions with our advanced analytics services.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <a href="#contact" className="magnetic-btn bg-primary hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-full">
            Start Your Data Project
          </a>
        </motion.div>
      </div>
      {/* Floating Data Elements */}
      <motion.div className="absolute right-10 md:right-20 top-1/3 transform -translate-y-1/2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
        <div className="relative">
          <motion.div className="absolute inset-0 bg-primary/10 rounded-2xl blur-md" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }} />
          <div className="w-20 h-20 md:w-32 md:h-32 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center relative z-10">
            <BarChart3 className="w-10 h-10 md:w-16 md:h-16 text-primary" />
          </div>
        </div>
        <motion.div className="w-16 h-16 md:w-24 md:h-24 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-6 ml-12" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
          <Database className="w-8 h-8 md:w-12 md:h-12 text-primary/80" />
        </motion.div>
        <motion.div className="w-12 h-12 md:w-20 md:h-20 bg-dark/80 backdrop-blur-sm rounded-2xl border border-white/10 flex items-center justify-center mt-4 ml-4" animate={{ y: [0, -10, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}>
          <Search className="w-6 h-6 md:w-10 md:h-10 text-primary/60" />
        </motion.div>
      </motion.div>
    </section>

    {/* Services Section */}
    <section className="py-20 md:py-32 bg-darker relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Data Services</h2>
          <p className="text-xl text-white/70">From raw data to real results</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataServices.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm rounded-2xl p-8 flex flex-col items-center text-center">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="py-20 md:py-32 bg-dark relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Our Process</h2>
          <p className="text-xl text-white/70">How we turn data into value</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dataProcess.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center text-2xl font-bold mb-4">{step.number}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-white/70">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies Section */}
    <section className="py-20 md:py-32 bg-darker relative">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div className="max-w-3xl mx-auto text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Case Studies</h2>
          <p className="text-xl text-white/70">Real-world impact of our analytics solutions</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="overflow-hidden rounded-2xl bg-dark/60 border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-lg backdrop-blur-sm flex flex-col">
              <img src={cs.image} alt={cs.title} className="w-full h-48 object-cover rounded-t-2xl" />
              <div className="p-6 flex-1 flex flex-col">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary mb-3 self-start">{cs.category}</span>
                <h3 className="text-xl font-bold mb-2">{cs.title}</h3>
                <p className="text-white/70 mb-4 flex-1">{cs.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </motion.main>
);

export default DataAnalysis;
