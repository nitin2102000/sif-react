import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faHome } from '@fortawesome/free-solid-svg-icons';

export default function Breadcrumb({ items }) {
  return (
    <nav className="flex items-center text-xs font-semibold text-gray-500 mb-6 py-4">
      <Link to="/" className="hover:text-[#032e92] transition-colors flex items-center gap-1.5">
        <FontAwesomeIcon icon={faHome} className="text-[10px]" /> Home
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <FontAwesomeIcon icon={faChevronRight} className="mx-2 text-[8px] text-gray-400" />
          {index === items.length - 1 ? (
            <span className="text-[#032e92] max-w-[200px] truncate">{item.label}</span>
          ) : (
            <Link to={item.href} className="hover:text-[#032e92] transition-colors">
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}
