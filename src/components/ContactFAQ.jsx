import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

const faqs = [
  {
    q: 'How can I contact your investment team?',
    a: 'You can reach out to our investment team via the contact form above, by calling our dedicated support line at +91 98765 43210, or by emailing info@sifplatform.com.'
  },
  {
    q: 'How long does it take to receive a response?',
    a: 'We strive to respond to all inquiries within 24 hours during standard business days. For urgent matters, we recommend calling our office directly.'
  },
  {
    q: 'Do you offer investment consultation?',
    a: 'Yes, our team of seasoned analysts and CFPs offers personalized consultation for navigating and selecting Specialized Investment Funds based on your specific risk profile.'
  },
  {
    q: 'Can financial advisors partner with you?',
    a: 'Absolutely. We offer a dedicated partnership program for financial advisors and distributors, providing them with institutional-grade research and analytics to serve their clients better.'
  },
  {
    q: 'Do I need an appointment before visiting?',
    a: 'While we always welcome visitors at our BKC office, we highly recommend scheduling an appointment in advance so we can ensure the right experts are available to meet with you.'
  },
  {
    q: 'How do I become a registered distributor?',
    a: 'Select "Distributor" or "Partner" in the contact form above, and our partner relations team will reach out to you with the onboarding process and compliance requirements.'
  }
];

export default function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-20 bg-white border-t border-[#e8edf7]">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-serif">
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            Find quick answers to common queries about reaching out and partnering with us.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#032e92] shadow-lg shadow-blue-900/10' : 'border-[#e8edf7] hover:border-[#032e92]/30 hover:shadow-md'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-5 lg:p-6 text-left focus:outline-none"
                >
                  <span className="flex items-center gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${isOpen ? 'bg-[#032e92] text-white' : 'bg-[#f7f9fc] text-[#032e92]'}`}>
                      <FontAwesomeIcon icon={faCircleQuestion} />
                    </div>
                    <span className={`font-bold text-sm lg:text-base transition-colors ${isOpen ? 'text-[#032e92]' : 'text-[#1e293b]'}`}>
                      {faq.q}
                    </span>
                  </span>
                  <FontAwesomeIcon 
                    icon={faChevronDown} 
                    className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180 text-[#032e92]' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-5 lg:px-6 pb-6 pt-2 text-[#64748b] text-sm font-medium leading-relaxed ml-12 border-t border-[#e8edf7]/50 mt-2">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
