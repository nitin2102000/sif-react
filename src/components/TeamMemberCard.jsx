import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function TeamMemberCard({ member }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-3xl border border-[#e8edf7] p-6 lg:p-8 shadow-lg shadow-blue-900/5 group transition-all duration-300 hover:shadow-2xl hover:border-transparent flex flex-col h-full relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#eef4ff]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      
      {/* Profile Image */}
      <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white shadow-md shadow-blue-900/10 group-hover:scale-105 transition-transform duration-300">
        <img 
          src={member.image} 
          alt={member.name} 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>

      {/* Details */}
      <div className="text-center flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-[#032e92] mb-1">{member.name}</h3>
        <p className="text-sm font-semibold text-[#1e293b] mb-1">{member.position}</p>
        <p className="text-xs font-bold text-[#c10000] mb-4 uppercase tracking-wider">{member.experience}</p>
        
        <p className="text-sm font-medium text-[#64748b] leading-relaxed mb-6 flex-1">
          {member.bio}
        </p>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3 pt-4 border-t border-[#e8edf7]">
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-xl bg-[#f7f9fc] text-[#0a66c2] flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition-colors"
            aria-label={`LinkedIn of ${member.name}`}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
          </a>
          <a 
            href={`mailto:${member.email}`}
            className="w-10 h-10 rounded-xl bg-[#f7f9fc] text-gray-500 flex items-center justify-center hover:bg-[#c10000] hover:text-white transition-colors"
            aria-label={`Email ${member.name}`}
          >
            <FontAwesomeIcon icon={faEnvelope} className="text-lg" />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
