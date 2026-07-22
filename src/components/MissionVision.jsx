import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faGlobe } from '@fortawesome/free-solid-svg-icons';

export default function MissionVision() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#f7f9fc] pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/5 border border-[#e8edf7] relative overflow-hidden group hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#eef4ff] rounded-full blur-3xl group-hover:bg-blue-100 transition-colors" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[#032e92] text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faBullseye} />
              </div>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Our Mission</h2>
              <p className="text-[#64748b] leading-relaxed text-base font-medium">
                To empower investors to make informed investment decisions by providing structured research, transparent comparisons, and deep analytical insights into Specialized Investment Funds.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/5 border border-[#e8edf7] relative overflow-hidden group hover:shadow-2xl hover:border-blue-100 transition-all duration-300"
          >
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-red-50 rounded-full blur-3xl group-hover:bg-red-100 transition-colors" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-[#c10000] to-red-600 text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg shadow-red-900/20 group-hover:scale-110 transition-transform">
                <FontAwesomeIcon icon={faGlobe} />
              </div>
              <h2 className="text-2xl font-bold text-[#1e293b] mb-4">Our Vision</h2>
              <p className="text-[#64748b] leading-relaxed text-base font-medium">
                To become India's most trusted and comprehensive discovery and research platform for Specialized Investment Funds, driving a more transparent financial ecosystem.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
