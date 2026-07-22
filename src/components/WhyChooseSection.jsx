import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassChart, faScaleBalanced, faBuildingColumns, faUserTie, faHeart, faDatabase } from '@fortawesome/free-solid-svg-icons';

const reasons = [
  {
    title: 'Independent Research',
    icon: faMagnifyingGlassChart,
    desc: 'Unbiased and purely objective insights, unaffected by distribution pressures or AMC affiliations.',
  },
  {
    title: 'Transparent Analysis',
    icon: faScaleBalanced,
    desc: 'Every data point and risk metric is clearly broken down, removing the black-box effect from investments.',
  },
  {
    title: 'SEBI Aligned Framework',
    icon: faBuildingColumns,
    desc: 'Methodologies that strictly adhere to regulatory contexts for maximum compliance and investor safety.',
  },
  {
    title: 'Experienced Analysts',
    icon: faUserTie,
    desc: 'A team of seasoned CFP and industry veterans analyzing every fund structure meticulously.',
  },
  {
    title: 'Investor First Approach',
    icon: faHeart,
    desc: 'Tools and recommendations designed exclusively around driving superior, risk-adjusted returns for you.',
  },
  {
    title: 'Data Driven Decisions',
    icon: faDatabase,
    desc: 'Quantitative models powering every comparison, ensuring emotions are removed from capital allocation.',
  },
];

export default function WhyChooseSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#f7f9fc] py-20 border-t border-[#e8edf7]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-serif">
            Why Investors Trust Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            We're building an ecosystem where data quality, suitability, and consistency shape better capital allocation outcomes.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#e8edf7] hover:border-[#032e92]/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#eef4ff] text-[#032e92] flex items-center justify-center mb-6 group-hover:bg-[#032e92] group-hover:text-white transition-colors duration-300 shadow-inner">
                <FontAwesomeIcon icon={reason.icon} className="text-xl" />
              </div>
              <h3 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-[#032e92] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm font-medium text-[#64748b] leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
