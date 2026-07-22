import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faClock } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '../data/blogs';

const bgGradients = [
  'from-blue-600 to-indigo-700',
  'from-emerald-600 to-teal-700',
  'from-rose-600 to-pink-700',
];
const emojis = ['📈', '💹', '🏦'];

export default function RelatedBlogs({ currentId, category }) {
  // Find related blogs (same category, not current)
  const related = blogPosts
    .filter(b => b.category === category && b.id !== currentId)
    .slice(0, 3);
  
  // If not enough in category, just grab recent ones
  if (related.length < 3) {
    const extra = blogPosts.filter(b => b.id !== currentId && !related.find(r => r.id === b.id));
    related.push(...extra.slice(0, 3 - related.length));
  }

  if (related.length === 0) return null;

  return (
    <div className="mt-20 border-t border-[#e8edf7] pt-16 mb-20">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-[#1e293b] font-serif">Related Articles</h2>
        <Link to="/blogs" className="text-[#032e92] font-semibold hover:text-[#c10000] transition-colors flex items-center gap-2">
          View All <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {related.map((blog, i) => (
          <Link
            key={blog.id}
            to={`/blogs/${blog.slug}`}
            className="bg-white rounded-3xl border border-[#e8edf7] shadow-lg shadow-blue-900/5 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden block"
          >
            {/* Image placeholder */}
            <div className={`relative h-48 bg-gradient-to-br ${bgGradients[i % 3]} overflow-hidden`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-6xl opacity-20">{emojis[i % 3]}</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                  {blog.category}
                </span>
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold mb-3">
                <span>{blog.publishDate}</span>
                <span className="flex items-center gap-1">
                  <FontAwesomeIcon icon={faClock} /> {blog.readingTime}
                </span>
              </div>

              <h3 className="font-bold text-[#1e293b] text-base leading-tight mb-3 group-hover:text-[#032e92] transition-colors line-clamp-2">
                {blog.title}
              </h3>

              <div className="flex items-center gap-2 text-[#032e92] font-bold text-sm mt-4 group-hover:gap-3 transition-all">
                Read More <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
