import { motion } from 'framer-motion';

interface TeamMemberProps {
  member: {
    id: number;
    name: string;
    position: string;
    imageUrl: string;
    imageAlt: string;
  }
}

const TeamMember = ({ member }: TeamMemberProps) => {
  const memberVariants = {
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
      className="hover-scale"
      variants={memberVariants}
    >
      <div className="rounded-xl overflow-hidden mb-4">
        <img 
          src={member.imageUrl} 
          alt={member.imageAlt} 
          className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-poppins font-bold">{member.name}</h3>
      <p className="text-primary">{member.position}</p>
    </motion.div>
  );
};

export default TeamMember;
