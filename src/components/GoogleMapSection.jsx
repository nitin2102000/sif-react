import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';

export default function GoogleMapSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="bg-[#f7f9fc] py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 text-[#032e92] flex items-center justify-center mb-6 shadow-sm border border-blue-200">
            <FontAwesomeIcon icon={faMapMarkedAlt} className="text-2xl" />
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl lg:text-4xl font-bold text-[#1e293b] mb-4 font-serif">
            Visit Our Office
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[#64748b] text-base font-medium">
            Located in the heart of Mumbai's financial district, our doors are always open for discussions.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="w-full bg-white rounded-3xl p-2 lg:p-4 shadow-xl shadow-blue-900/10 border border-[#e8edf7] overflow-hidden"
        >
          <div className="w-full aspect-[4/3] lg:aspect-[21/9] rounded-2xl overflow-hidden relative bg-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15082.903823438062!2d72.8596644131583!3d19.06482103504381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df0b65f4bb%3A0x6b8bc2eb819cc960!2sBandra%20Kurla%20Complex%2C%20Bandra%20East%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
