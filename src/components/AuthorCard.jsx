import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function AuthorCard({ author }) {
  if (!author) return null;

  return (
    <div className="bg-white rounded-3xl p-8 border border-[#e8edf7] shadow-xl shadow-blue-900/5 mt-12 mb-12 flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
      <img 
        src={author.image} 
        alt={author.name} 
        className="w-24 h-24 rounded-full border-4 border-[#eef4ff] shadow-sm flex-shrink-0"
      />
      
      <div className="flex-1">
        <h3 className="text-xl font-bold text-[#1e293b] mb-1">{author.name}</h3>
        <p className="text-sm font-semibold text-[#032e92] mb-3">{author.designation}</p>
        <p className="text-[#64748b] text-sm leading-relaxed font-medium mb-4">
          {author.bio}
        </p>
        
        <div className="flex items-center justify-center md:justify-start gap-3">
          <a href={author.linkedin} className="w-8 h-8 rounded-full bg-[#f7f9fc] text-[#0a66c2] flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition-all">
            <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
          </a>
          <a href={author.twitter} className="w-8 h-8 rounded-full bg-[#f7f9fc] text-[#1da1f2] flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-all">
            <FontAwesomeIcon icon={faTwitter} className="text-sm" />
          </a>
          <a href={`mailto:${author.email}`} className="w-8 h-8 rounded-full bg-[#f7f9fc] text-[#64748b] flex items-center justify-center hover:bg-[#c10000] hover:text-white transition-all">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
          </a>
          <button className="ml-2 text-xs font-bold text-[#1e293b] border border-[#e8edf7] px-4 py-1.5 rounded-full hover:bg-[#f7f9fc] transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
}
