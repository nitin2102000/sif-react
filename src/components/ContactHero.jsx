import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ContactHero() {
  return (
    <section className="pt-28 pb-12 bg-[#f7f9fc] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#eef4ff] to-[#dbeafe] rounded-3xl p-8 lg:p-14 shadow-xl shadow-blue-900/5 border border-blue-100 overflow-hidden relative"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center z-10">
            
            {/* Left Content */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 bg-white/60 border border-blue-200 rounded-full px-4 py-1.5 text-xs text-[#032e92] font-bold uppercase tracking-wide mb-6">
                <span className="w-2 h-2 rounded-full bg-[#032e92] animate-pulse" />
                Contact Us
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1e293b] leading-tight mb-6 font-serif">
                Let's Start a{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#032e92] to-[#c10000]">
                  Conversation
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-[#64748b] text-base lg:text-lg font-medium leading-relaxed max-w-lg mb-10">
                Whether you're an investor, advisor, distributor, or institution looking to explore Specialized Investment Funds, our team is here to help. Reach out to us for guidance, product information, or partnership opportunities.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4">
                <button className="bg-[#032e92] text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-900/20 hover:bg-[#021d63] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group">
                  Contact Our Team
                  <FontAwesomeIcon icon={faArrowRight} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="bg-white text-[#1e293b] px-8 py-3.5 rounded-xl font-semibold shadow-sm border border-transparent hover:border-[#032e92]/30 hover:bg-[#f7f9fc] transition-all duration-300">
                  Explore Funds
                </button>
              </motion.div>
            </div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-md mx-auto">
              
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl p-6 shadow-2xl shadow-blue-900/10 border border-[#e8edf7] relative z-10 w-full aspect-square flex items-center justify-center overflow-hidden">
                
                <div className="absolute inset-0 bg-[#f7f9fc] m-4 rounded-2xl flex items-center justify-center">
                   {/* Abstract graphical representation of support / consultation */}
                   <div className="relative w-full h-full flex flex-col items-center justify-center">
                     <div className="flex gap-4 items-end justify-center mb-6 h-32 w-full px-10">
                        {/* Mock chat bubbles / analytics */}
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="w-1/2 bg-white p-4 rounded-2xl rounded-bl-none shadow-md border border-gray-100"
                        >
                          <div className="w-full h-2 bg-gray-200 rounded-full mb-2" />
                          <div className="w-2/3 h-2 bg-gray-200 rounded-full" />
                        </motion.div>

                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.7 }}
                          className="w-1/2 bg-[#032e92] p-4 rounded-2xl rounded-br-none shadow-md"
                        >
                          <div className="w-full h-2 bg-blue-400 rounded-full mb-2" />
                          <div className="w-3/4 h-2 bg-blue-400 rounded-full" />
                        </motion.div>
                     </div>

                     <div className="flex gap-3 justify-center w-full px-10">
                       <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                         <div className="w-5 h-5 rounded-full bg-[#c10000]" />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                         <div className="w-5 h-5 rounded-full bg-[#032e92]" />
                       </div>
                       <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                         <div className="w-5 h-5 rounded-full bg-[#16a34a]" />
                       </div>
                     </div>
                   </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -right-2 top-8 bg-white px-4 py-2 rounded-xl shadow-xl border border-[#e8edf7] flex items-center gap-2 z-20">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-gray-700">Online Now</span>
                </motion.div>

              </motion.div>

            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}
