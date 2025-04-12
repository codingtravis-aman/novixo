import { motion } from 'framer-motion';

interface InsightCardProps {
  insight: {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    imageUrl: string;
    imageAlt: string;
  }
}

const InsightCard = ({ insight }: InsightCardProps) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <motion.div 
      className="hover-scale rounded-2xl overflow-hidden bg-dark border border-white/10"
      variants={cardVariants}
    >
      <div className="h-56 overflow-hidden">
        <img 
          src={insight.imageUrl} 
          alt={insight.imageAlt} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <span className="text-primary text-sm font-medium">{insight.category}</span>
        <h3 className="text-xl font-poppins font-bold mt-2 mb-3">{insight.title}</h3>
        <p className="text-white/70 mb-4">{insight.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm text-white/50">{insight.date}</span>
          <a href="#" className="text-primary font-medium">Read more</a>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
