import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { companyStats } from '../data/companyStats';

function CountUpNumber({ target, suffix = '', inView }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    let step = 0;
    
    const timer = setInterval(() => {
      step++;
      current = Math.min(increment * step, target);
      setCount(current);
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span>{Math.round(count).toLocaleString('en-IN')}{suffix}</span>;
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#f7f9fc] pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {companyStats.map((stat, i) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-6 lg:p-8 text-center shadow-lg shadow-blue-900/5 border border-[#e8edf7] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl lg:text-4xl font-extrabold text-[#032e92] mb-2">
                <CountUpNumber target={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
