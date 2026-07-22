import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEye, faCalendarDays, faUser, faComments } from '@fortawesome/free-solid-svg-icons';

export default function BlogHero({ blog }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-blue-900/5 border border-[#e8edf7] mb-12 relative overflow-hidden"
    >
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-100/50 to-red-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-start max-w-4xl mx-auto text-center">
        
        {/* Category Badge */}
        <div className="mx-auto inline-flex items-center gap-2 bg-[#eef4ff] border border-blue-100 rounded-full px-4 py-1.5 text-xs text-[#032e92] font-bold uppercase tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-[#032e92] animate-pulse" />
          {blog.category}
        </div>

        {/* Title */}
        <h1 className="text-3xl lg:text-5xl font-bold text-[#1e293b] leading-tight mb-8 font-serif mx-auto">
          {blog.title}
        </h1>

        {/* Meta Info Row */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10 w-full text-sm font-semibold text-[#64748b] border-t border-b border-[#e8edf7] py-4 mb-10">
          <div className="flex items-center gap-2">
            <img src={blog.author.image} alt={blog.author.name} className="w-8 h-8 rounded-full border-2 border-white shadow-sm" />
            <span className="text-[#1e293b]">{blog.author.name}</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDays} className="text-[#032e92]/70" />
            {blog.publishDate}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faClock} className="text-[#032e92]/70" />
            {blog.readingTime}
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEye} className="text-[#032e92]/70" />
            {blog.views.toLocaleString()} Views
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faComments} className="text-[#032e92]/70" />
            {blog.comments} Comments
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="relative w-full aspect-[21/9] bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl overflow-hidden shadow-lg border border-gray-100 group">
        {blog.featuredImage ? (
          <img src={blog.featuredImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tr from-[#032e92]/10 to-[#c10000]/10">
            <span className="text-6xl opacity-20">📰</span>
          </div>
        )}
      </div>

    </motion.div>
  );
}
