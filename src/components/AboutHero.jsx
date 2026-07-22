import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AboutHero() {
  return (
    <section className="pt-28 pb-16 bg-[#f7f9fc] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-[#eef4ff] to-[#c7d2fe] blur-3xl opacity-50 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-tr from-[#eef4ff] to-[#dbeafe] blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#eef4ff] border border-blue-100 rounded-full px-4 py-1.5 text-xs text-[#032e92] font-bold uppercase tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#032e92] animate-pulse" />
              About Us
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1e293b] leading-tight mb-6 font-serif">
              Building Trust Through Smarter{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032e92] to-[#c10000]">
                SIF Investing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[#64748b] text-base lg:text-lg font-medium leading-relaxed max-w-lg mb-8">
              We help investors discover, compare, research, and invest in Specialized Investment Funds using data-driven insights, transparency, and expert analysis.
            </motion.p>

            {/* Feature Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-10">
              {['Research Driven', 'Transparent', 'Investor Focused'].map((badge, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-semibold text-[#1e293b] bg-white px-4 py-2 rounded-xl shadow-sm border border-[#e8edf7]">
                  <FontAwesomeIcon icon={faCircleCheck} className="text-[#16a34a]" />
                  {badge}
                </div>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4">
              <button className="bg-[#032e92] text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-900/20 hover:bg-[#021d63] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                Explore Funds
                <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-[#1e293b] px-8 py-3.5 rounded-xl font-semibold border-2 border-[#e8edf7] hover:border-[#032e92]/30 hover:bg-[#eef4ff] transition-all duration-300">
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:ml-auto">
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="bg-white rounded-3xl p-2 shadow-2xl shadow-blue-900/10 border border-[#e8edf7] relative z-10 w-full max-w-lg mx-auto">
              
              <div className="bg-[#f7f9fc] rounded-2xl p-6 lg:p-10 flex flex-col items-center justify-center relative overflow-hidden h-[300px] lg:h-[400px]">
                {/* Abstract graphical representation of analytics/team */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxjaXJjbGUgY3g9IjIiIGN5PSIyIiByPSIyIiBmaWxsPSIjMDMyZTkyIj48L2NpcmNsZT4KPC9zdmc+')] mix-blend-multiply pointer-events-none" />
                
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full max-w-sm aspect-video bg-white rounded-xl shadow-lg border border-[#e8edf7] flex flex-col p-4 relative z-10">
                    {/* Mock Dashboard UI */}
                    <div className="flex gap-2 mb-4">
                      <div className="w-1/3 h-10 bg-[#eef4ff] rounded-lg animate-pulse" />
                      <div className="w-1/3 h-10 bg-[#eef4ff] rounded-lg animate-pulse" delay="75" />
                      <div className="w-1/3 h-10 bg-[#eef4ff] rounded-lg animate-pulse" delay="150" />
                    </div>
                    <div className="flex-1 bg-gradient-to-t from-blue-50 to-white rounded-lg flex items-end justify-between p-2 gap-2 border border-blue-50">
                      {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                        <motion.div 
                          key={i}
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ duration: 1, delay: 0.5 + (i * 0.1) }}
                          className="w-full bg-[#032e92] rounded-t-sm opacity-80" 
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <motion.div 
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -right-4 -top-4 w-20 h-20 bg-white rounded-2xl shadow-xl border border-green-100 flex items-center justify-center p-3 z-20">
                    <div className="w-full h-full rounded-xl bg-green-50 flex items-center justify-center text-green-600 font-bold text-lg">+12%</div>
                  </motion.div>

                  <motion.div 
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -left-4 -bottom-4 w-24 h-16 bg-white rounded-2xl shadow-xl border border-red-100 flex items-center justify-center p-2 z-20">
                    <div className="w-full h-full rounded-xl bg-red-50 flex items-center justify-center text-red-600 font-bold text-sm">Analysis</div>
                  </motion.div>
                </div>

              </div>
            </motion.div>

            {/* Decorative background blob for image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#032e92]/5 to-[#c10000]/5 rounded-full blur-3xl -z-10" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
