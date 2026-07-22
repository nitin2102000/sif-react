import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companyTimeline } from '../data/timeline';

export default function CompanyTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-serif">
            Our Journey
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            Milestones that define our commitment to transforming the Specialized Investment Fund space.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-1 bg-[#e8edf7] -translate-x-1/2 rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 2, ease: 'easeInOut' }}
              className="w-full bg-[#032e92] rounded-full"
            />
          </div>

          <div className="space-y-8 lg:space-y-0">
            {companyTimeline.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={item.year} className="relative flex items-center lg:justify-between w-full">
                  {/* Left Spacer for Odd items on Desktop */}
                  <div className={`hidden lg:block w-1/2 ${isEven ? 'pr-12 text-right' : 'order-1'} `}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className="bg-white p-6 rounded-3xl border border-[#e8edf7] shadow-lg shadow-blue-900/5 hover:shadow-xl transition-shadow"
                      >
                        <h3 className="text-2xl font-black text-[#032e92] mb-1">{item.year}</h3>
                        <h4 className="text-lg font-bold text-[#1e293b] mb-2">{item.title}</h4>
                        <p className="text-sm font-medium text-[#64748b] leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#032e92] shadow-md shadow-blue-900/20 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: i * 0.2 + 0.3 }}
                      className="w-2.5 h-2.5 bg-[#c10000] rounded-full"
                    />
                  </div>

                  {/* Right Content */}
                  <div className={`w-full lg:w-1/2 pl-12 lg:pl-12 ${!isEven ? 'lg:pr-0 lg:text-left' : 'lg:hidden'}`}>
                    {(!isEven || true) && ( // On mobile, always show on right. On desktop, conditional.
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.2 }}
                        className={`bg-white p-6 rounded-3xl border border-[#e8edf7] shadow-lg shadow-blue-900/5 hover:shadow-xl transition-shadow ${isEven ? 'lg:hidden' : ''}`}
                      >
                        <h3 className="text-2xl font-black text-[#032e92] mb-1">{item.year}</h3>
                        <h4 className="text-lg font-bold text-[#1e293b] mb-2">{item.title}</h4>
                        <p className="text-sm font-medium text-[#64748b] leading-relaxed">{item.description}</p>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
