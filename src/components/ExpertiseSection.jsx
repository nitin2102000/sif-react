import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faShieldHalved, faBriefcase, faUsers } from '@fortawesome/free-solid-svg-icons';

const expertise = [
  {
    title: 'Research & Analytics',
    icon: faChartLine,
    desc: 'Deep coverage across fund structures, performance metrics, and quantitative analytics to reveal true potential.',
    color: 'from-blue-500 to-[#032e92]',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    title: 'Risk Assessment',
    icon: faShieldHalved,
    desc: 'Comprehensive evaluation of volatility, downside protection, and compliance alignment for robust portfolios.',
    color: 'from-red-500 to-[#c10000]',
    bg: 'bg-red-50',
    iconColor: 'text-red-600'
  },
  {
    title: 'Portfolio Strategy',
    icon: faBriefcase,
    desc: 'Structuring capital allocations to match investor profiles, time horizons, and return expectations accurately.',
    color: 'from-green-400 to-green-600',
    bg: 'bg-green-50',
    iconColor: 'text-green-600'
  },
  {
    title: 'Investor Guidance',
    icon: faUsers,
    desc: 'Empowering advisors, HNIs, and distribution teams with an actionable decision-support layer for confident investing.',
    color: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
];

export default function ExpertiseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-20 relative border-t border-[#e8edf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-serif">
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            We provide institutional-grade research and analytics designed to elevate your investment strategy and capital allocation process.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {expertise.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#e8edf7] hover:border-transparent hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Hover background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`} />
              
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors`}>
                  <FontAwesomeIcon icon={item.icon} className={`text-2xl ${item.iconColor} group-hover:text-white transition-colors`} />
                </div>
                <h3 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-medium text-[#64748b] leading-relaxed group-hover:text-white/90 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
