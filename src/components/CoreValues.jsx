import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { coreValues } from '../data/coreValues';

export default function CoreValues() {
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
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            The principles that guide our research, our team, and our commitment to investors.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 text-center border border-[#e8edf7] hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#eef4ff]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#f7f9fc] text-[#032e92] flex items-center justify-center mb-6 group-hover:bg-[#032e92] group-hover:text-white transition-colors duration-300 shadow-sm relative z-10">
                <FontAwesomeIcon icon={value.icon} className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-[#1e293b] mb-3 relative z-10">{value.title}</h3>
              <p className="text-sm font-medium text-[#64748b] leading-relaxed relative z-10">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
