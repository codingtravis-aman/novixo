import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface ServiceCardProps {
  service: {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    capabilities: string[];
  }
}

const ServiceCard = ({ service }: ServiceCardProps) => {
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
      className="service-item p-8 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300"
      variants={cardVariants}
      whileHover={{ x: 10, backgroundColor: "rgba(255, 111, 97, 0.05)" }}
    >
      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
        {service.icon}
      </div>
      <h3 className="text-2xl font-poppins font-bold mb-4">{service.title}</h3>
      <p className="text-white/70">{service.description}</p>
      <ul className="mt-6 space-y-2">
        {service.capabilities.map((capability, index) => (
          <li key={index} className="flex items-center">
            <Check className="h-5 w-5 text-primary mr-2" />
            <span>{capability}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default ServiceCard;
