import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCircleCheck, faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (data) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Submitted:", data);
    setIsSuccess(true);
    reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/10 border border-[#e8edf7]"
    >
      <h2 className="text-2xl font-bold text-[#1e293b] mb-2 font-serif">Send Us a Message</h2>
      <p className="text-[#64748b] font-medium mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

      <AnimatePresence>
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-green-50 text-green-800 border border-green-200 rounded-xl p-4 mb-8 flex items-center gap-3 overflow-hidden"
          >
            <FontAwesomeIcon icon={faCircleCheck} className="text-green-600 text-lg" />
            <span className="font-semibold text-sm">Thank you! Your message has been sent successfully.</span>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Full Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              {...register("fullName", { required: "Full name is required" })}
              className={`w-full py-3.5 px-4 rounded-xl border-2 bg-[#f7f9fc] text-gray-800 font-semibold text-sm focus:outline-none focus:bg-white transition-all ${errors.fullName ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-[#e8edf7] focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10'}`}
              placeholder="John Doe"
            />
            {errors.fullName && <p className="text-red-500 text-xs font-medium mt-1">{errors.fullName.message}</p>}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Email Address <span className="text-red-500">*</span></label>
            <input
              type="email"
              {...register("email", { 
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" }
              })}
              className={`w-full py-3.5 px-4 rounded-xl border-2 bg-[#f7f9fc] text-gray-800 font-semibold text-sm focus:outline-none focus:bg-white transition-all ${errors.email ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-[#e8edf7] focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs font-medium mt-1">{errors.email.message}</p>}
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Phone Number <span className="text-red-500">*</span></label>
            <input
              type="tel"
              {...register("phone", { 
                required: "Phone number is required",
                pattern: { value: /^[0-9+\-\s()]{10,15}$/, message: "Invalid phone number" }
              })}
              className={`w-full py-3.5 px-4 rounded-xl border-2 bg-[#f7f9fc] text-gray-800 font-semibold text-sm focus:outline-none focus:bg-white transition-all ${errors.phone ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-[#e8edf7] focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10'}`}
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-red-500 text-xs font-medium mt-1">{errors.phone.message}</p>}
          </div>

          {/* Company */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Company <span className="text-gray-400 font-normal normal-case">(Optional)</span></label>
            <input
              type="text"
              {...register("company")}
              className="w-full py-3.5 px-4 rounded-xl border-2 border-[#e8edf7] bg-[#f7f9fc] text-gray-800 font-semibold text-sm focus:outline-none focus:bg-white focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10 transition-all"
              placeholder="Acme Corp"
            />
          </div>

          {/* Investor Type */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">I am a <span className="text-red-500">*</span></label>
            <select
              {...register("investorType", { required: "Please select an option" })}
              className={`w-full py-3.5 px-4 rounded-xl border-2 bg-[#f7f9fc] text-gray-800 font-semibold text-sm focus:outline-none focus:bg-white appearance-none transition-all ${errors.investorType ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-[#e8edf7] focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10'}`}
            >
              <option value="">Select one...</option>
              <option value="Individual Investor">Individual Investor</option>
              <option value="Financial Advisor">Financial Advisor</option>
              <option value="Distributor">Distributor</option>
              <option value="Institution">Institution</option>
              <option value="Partner">Partner</option>
              <option value="Other">Other</option>
            </select>
            {errors.investorType && <p className="text-red-500 text-xs font-medium mt-1">{errors.investorType.message}</p>}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Subject <span className="text-red-500">*</span></label>
            <select
              {...register("subject", { required: "Please select a subject" })}
              className={`w-full py-3.5 px-4 rounded-xl border-2 bg-[#f7f9fc] text-gray-800 font-semibold text-sm focus:outline-none focus:bg-white appearance-none transition-all ${errors.subject ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-[#e8edf7] focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10'}`}
            >
              <option value="">Select subject...</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="Investment Support">Investment Support</option>
              <option value="Fund Information">Fund Information</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Partnership">Partnership</option>
              <option value="Feedback">Feedback</option>
            </select>
            {errors.subject && <p className="text-red-500 text-xs font-medium mt-1">{errors.subject.message}</p>}
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Message <span className="text-red-500">*</span></label>
          <textarea
            {...register("message", { required: "Message is required" })}
            rows="5"
            className={`w-full py-3.5 px-4 rounded-xl border-2 bg-[#f7f9fc] text-gray-800 font-medium text-sm focus:outline-none focus:bg-white resize-none transition-all ${errors.message ? 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-100' : 'border-[#e8edf7] focus:border-[#032e92] focus:ring-4 focus:ring-[#032e92]/10'}`}
            placeholder="Tell us how we can help you..."
          ></textarea>
          {errors.message && <p className="text-red-500 text-xs font-medium mt-1">{errors.message.message}</p>}
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3">
          <div className="flex items-center h-5 mt-0.5">
            <input
              type="checkbox"
              {...register("agreement", { required: "You must agree to the terms" })}
              className="w-4 h-4 text-[#032e92] bg-[#f7f9fc] border-[#e8edf7] rounded focus:ring-[#032e92] focus:ring-2 cursor-pointer"
            />
          </div>
          <label className="text-sm font-medium text-[#64748b]">
            I agree to the <a href="#" className="text-[#032e92] hover:underline">Privacy Policy</a> and <a href="#" className="text-[#032e92] hover:underline">Terms & Conditions</a>.
          </label>
        </div>
        {errors.agreement && <p className="text-red-500 text-xs font-medium -mt-4 pl-7">{errors.agreement.message}</p>}

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#032e92] text-white px-8 py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-[#021d63] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? (
              <>
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </>
            )}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
