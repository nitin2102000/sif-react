import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faFilter, faChartPie, faShieldHalved, faHandshake } from '@fortawesome/free-solid-svg-icons';

const steps = [
  {
    num: 1,
    title: 'Research',
    desc: 'Map risk appetite and return targets constraints before shortlisting.',
    icon: faMagnifyingGlass
  },
  {
    num: 2,
    title: 'Screen Funds',
    desc: 'Filter options using disclosures, structure, and fee considerations.',
    icon: faFilter
  },
  {
    num: 3,
    title: 'Compare Performance',
    desc: 'Evaluate volatility, downside profile, and concentration for practical suitability.',
    icon: faChartPie
  },
  {
    num: 4,
    title: 'Evaluate Risk',
    desc: 'Compare shortlisted opportunities with clear rationale and implementation context.',
    icon: faShieldHalved
  },
  {
    num: 5,
    title: 'Invest With Confidence',
    desc: 'Monitor key indicators post-allocation to maintain alignment with portfolio objectives.',
    icon: faHandshake
  },
];

export default function ProcessTimeline() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#f7f9fc] py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-serif">
            How We Help Investors
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            A clean five-step flow to move from intent to implementation with less ambiguity.
          </motion.p>
        </div>

        <div className="relative">
          {/* Animated Progress Line - Horizontal for Desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-1 bg-[#e8edf7] rounded-full">
            <motion.div 
              initial={{ width: 0 }}
              animate={inView ? { width: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 h-full bg-[#032e92] rounded-full"
            />
          </div>

          {/* Animated Progress Line - Vertical for Mobile */}
          <div className="block lg:hidden absolute top-8 bottom-8 left-8 w-1 bg-[#e8edf7] rounded-full">
            <motion.div 
              initial={{ height: 0 }}
              animate={inView ? { height: '100%' } : {}}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full bg-[#032e92] rounded-full"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="flex flex-row lg:flex-col items-center lg:text-center gap-6 lg:gap-4 relative group"
              >
                {/* Step Badge */}
                <div className="w-16 h-16 rounded-2xl bg-white border-2 border-[#e8edf7] shadow-lg flex flex-col items-center justify-center flex-shrink-0 group-hover:border-[#032e92] group-hover:scale-110 transition-all duration-300 relative z-10 overflow-hidden">
                  <div className="absolute inset-0 bg-[#eef4ff] opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-[#032e92] font-black text-lg relative z-10">{step.num}</span>
                  <FontAwesomeIcon icon={step.icon} className="text-[#032e92]/30 text-xs absolute bottom-1.5 relative z-10" />
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-[#1e293b] mb-2">{step.title}</h3>
                  <p className="text-sm font-medium text-[#64748b] leading-relaxed max-w-[200px] mx-auto">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
