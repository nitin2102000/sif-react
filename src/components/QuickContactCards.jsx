import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { contactInfo } from '../data/contactInfo';

export default function QuickContactCards() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const cards = [
    {
      title: 'Call Us',
      icon: faPhone,
      lines: [contactInfo.phone],
      delay: 0
    },
    {
      title: 'Email',
      icon: faEnvelope,
      lines: [contactInfo.email],
      delay: 0.1
    },
    {
      title: 'Office',
      icon: faLocationDot,
      lines: [contactInfo.address.split(',')[0], contactInfo.address.split(',').slice(1).join(',')],
      delay: 0.2
    },
    {
      title: 'Working Hours',
      icon: faClock,
      lines: ['Mon – Fri', contactInfo.workingHours.weekdays],
      delay: 0.3
    }
  ];

  return (
    <section ref={ref} className="bg-white py-16 -mt-12 relative z-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: card.delay }}
              className="bg-white rounded-2xl p-6 shadow-xl shadow-blue-900/5 border border-[#e8edf7] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center group"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-[#eef4ff] text-[#032e92] flex items-center justify-center mb-4 group-hover:bg-[#032e92] group-hover:text-white transition-colors duration-300">
                <FontAwesomeIcon icon={card.icon} className="text-xl" />
              </div>
              <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">
                {card.title}
              </h3>
              <div className="text-[#1e293b] font-semibold text-sm">
                {card.lines.map((line, j) => (
                  <p key={j} className={j > 0 ? "mt-1 text-[#64748b] font-medium" : ""}>
                    {line.trim()}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
