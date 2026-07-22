import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function CTASection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#f7f9fc] py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-[#032e92] via-[#0a4fd4] to-[#c10000] rounded-[2.5rem] p-10 lg:p-16 text-center shadow-2xl shadow-blue-900/20 relative overflow-hidden"
        >
          {/* Decorative Background Patterns */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c10000]/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl lg:text-5xl font-bold text-white mb-6 font-serif leading-tight"
            >
              Ready to Build Your Investment Portfolio?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-blue-100 text-base lg:text-lg font-medium mb-10 max-w-2xl mx-auto"
            >
              Start discovering, comparing, and investing in Specialized Investment Funds with our transparent and data-driven platform today.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <button className="w-full sm:w-auto bg-white text-[#032e92] px-8 py-4 rounded-xl font-bold shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group">
                Explore Funds
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors duration-300 flex items-center justify-center">
                Contact Advisor
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
