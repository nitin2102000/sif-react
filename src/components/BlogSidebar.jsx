import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFolderOpen, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { sidebarData } from '../data/blogs';

export default function BlogSidebar({ tags }) {
  return (
    <div className="space-y-8">
      
      {/* Search Box */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-[#f7f9fc] border border-[#e8edf7] text-[#1e293b] text-sm font-medium rounded-xl py-3 pl-4 pr-10 focus:outline-none focus:border-[#032e92] focus:ring-2 focus:ring-[#032e92]/20 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748b] hover:text-[#032e92] transition-colors">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5">
        <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wide mb-4 flex items-center gap-2 border-b border-[#e8edf7] pb-3">
          <FontAwesomeIcon icon={faFolderOpen} className="text-[#032e92]" /> Categories
        </h3>
        <ul className="space-y-3">
          {sidebarData.categories.map((cat, index) => (
            <li key={index}>
              <Link to={`/blogs?category=${cat}`} className="text-sm font-medium text-[#64748b] hover:text-[#032e92] hover:translate-x-1 transition-all inline-block">
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5">
        <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wide mb-4 border-b border-[#e8edf7] pb-3">
          Popular Posts
        </h3>
        <div className="space-y-4">
          {sidebarData.popularPosts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <Link to={`/blogs/${post.slug}`} className="block">
                <h4 className="text-sm font-bold text-[#1e293b] group-hover:text-[#032e92] leading-tight mb-1 transition-colors">
                  {post.title}
                </h4>
                <span className="text-xs text-[#64748b] font-medium">{post.date}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Tags */}
      {tags && tags.length > 0 && (
        <div className="bg-white rounded-2xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5">
          <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wide mb-4 flex items-center gap-2 border-b border-[#e8edf7] pb-3">
            <FontAwesomeIcon icon={faHashtag} className="text-[#032e92]" /> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Link 
                key={index}
                to={`/blogs?tag=${tag}`} 
                className="bg-[#f7f9fc] text-[#64748b] hover:bg-[#032e92] hover:text-white px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors duration-300"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
