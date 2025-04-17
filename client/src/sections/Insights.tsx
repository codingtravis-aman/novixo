import { motion } from 'framer-motion';
import InsightCard from '@/components/InsightCard';

const insights = [
  {
    id: 1,
    title: "The Future of User Interfaces: Beyond Screens",
    description: "Exploring how voice, gesture, and mixed reality are changing the way we interact with technology.",
    category: "Design Trends",
    date: "Jun 12, 2023",
    imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Digital innovation concept"
  },
  {
    id: 2,
    title: "AI-Driven Design: Collaboration, Not Replacement",
    description: "How artificial intelligence is augmenting design processes and enabling new creative possibilities.",
    category: "Technology",
    date: "May 28, 2023",
    imageUrl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Tech team collaboration"
  },
  {
    id: 3,
    title: "Digital Transformation: Beyond the Buzzword",
    description: "Practical approaches to meaningful organizational change in the digital age.",
    category: "Strategy",
    date: "Apr 15, 2023",
    imageUrl: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Creative design process"
  }
];

const Insights = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="insights" className="py-20 md:py-32 bg-dark">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-poppins font-bold mb-6">Insights</h2>
          <p className="text-xl text-white/70 max-w-2xl">Explore our latest thoughts on design, technology, and digital innovation.</p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {insights.map(insight => (
            <InsightCard key={insight.id} insight={insight} />
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="/Insights" 
            className="inline-block magnetic-btn border-2 border-white hover:border-primary hover:bg-primary/10 text-white font-medium py-4 px-8 rounded-full transition-all"
          >
            View all insights
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Insights;
