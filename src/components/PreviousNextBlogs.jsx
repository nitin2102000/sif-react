import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { blogPosts } from '../data/blogs';

export default function PreviousNextBlogs({ currentId }) {
  const currentIndex = blogPosts.findIndex(b => b.id === currentId);
  
  const prevBlog = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextBlog = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
      {/* Previous Blog */}
      {prevBlog ? (
        <Link to={`/blogs/${prevBlog.slug}`} className="group bg-white rounded-3xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5 hover:border-[#032e92]/30 hover:shadow-xl transition-all duration-300 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#f7f9fc] text-[#032e92] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032e92] group-hover:text-white transition-colors">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Previous Article</span>
            <h4 className="text-sm font-bold text-[#1e293b] group-hover:text-[#032e92] line-clamp-2 transition-colors">
              {prevBlog.title}
            </h4>
          </div>
        </Link>
      ) : <div />}

      {/* Next Blog */}
      {nextBlog ? (
        <Link to={`/blogs/${nextBlog.slug}`} className="group bg-white rounded-3xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5 hover:border-[#032e92]/30 hover:shadow-xl transition-all duration-300 flex items-center justify-end text-right gap-4">
          <div>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wide block mb-1">Next Article</span>
            <h4 className="text-sm font-bold text-[#1e293b] group-hover:text-[#032e92] line-clamp-2 transition-colors">
              {nextBlog.title}
            </h4>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#f7f9fc] text-[#032e92] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032e92] group-hover:text-white transition-colors">
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </Link>
      ) : <div />}
    </div>
  );
}
