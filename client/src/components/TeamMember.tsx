import { motion } from 'framer-motion';
import { Twitter, Linkedin } from 'lucide-react';

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    image: string;
    social: {
      linkedin: string;
      twitter: string;
    };
  };
}

const TeamMember = ({ member }: TeamMemberProps) => {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-3xl transform group-hover:scale-105 transition-transform duration-500" />
      <div className="relative overflow-hidden rounded-3xl">
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-[4/5] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-white/70 mb-4">{member.role}</p>
          
          <div className="flex gap-4">
            <a
              href={member.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={member.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-primary transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
