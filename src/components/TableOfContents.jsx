import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

export default function TableOfContents() {
  const [activeId, setActiveId] = useState('');
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Dynamically find all h2 and h3 inside the content area after render
    const elements = Array.from(document.querySelectorAll('h2[id], h3[id]'))
      .map((element) => ({
        id: element.id,
        text: element.innerText,
        level: Number(element.nodeName.charAt(1)),
      }));
    setHeadings(elements);

    // Intersection Observer for highlighting active section
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    elements.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="bg-white rounded-2xl p-6 border border-[#e8edf7] shadow-lg shadow-blue-900/5 mb-8">
      <h3 className="text-sm font-bold text-[#1e293b] uppercase tracking-wide mb-4 flex items-center gap-2">
        <FontAwesomeIcon icon={faListUl} className="text-[#032e92]" /> Table of Contents
      </h3>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li key={heading.id} className={`${heading.level === 3 ? 'ml-4' : ''}`}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => handleClick(e, heading.id)}
              className={`text-sm font-medium transition-colors block ${
                activeId === heading.id 
                  ? 'text-[#032e92] font-bold' 
                  : 'text-[#64748b] hover:text-[#032e92]'
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
