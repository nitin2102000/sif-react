import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faGlobe, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { contactInfo } from '../data/contactInfo';

export default function OfficeInformation() {
  const socialIcons = [
    { icon: faLinkedin, href: contactInfo.socialLinks.linkedin, label: 'LinkedIn', color: 'hover:bg-[#0a66c2]' },
    { icon: faTwitter, href: contactInfo.socialLinks.twitter, label: 'Twitter', color: 'hover:bg-[#1da1f2]' },
    { icon: faFacebook, href: contactInfo.socialLinks.facebook, label: 'Facebook', color: 'hover:bg-[#1877f2]' },
    { icon: faInstagram, href: contactInfo.socialLinks.instagram, label: 'Instagram', color: 'hover:bg-[#e4405f]' },
    { icon: faYoutube, href: contactInfo.socialLinks.youtube, label: 'YouTube', color: 'hover:bg-[#ff0000]' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-blue-900/10 border border-[#e8edf7] h-full flex flex-col"
    >
      <h3 className="text-xl font-bold text-[#1e293b] mb-8 font-serif border-b border-[#e8edf7] pb-4">Our Office</h3>

      <div className="space-y-8 flex-1">
        {/* Address */}
        <div className="flex gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#f7f9fc] text-[#032e92] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032e92] group-hover:text-white transition-colors duration-300 shadow-inner">
            <FontAwesomeIcon icon={faLocationDot} className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1e293b] mb-1 uppercase tracking-wide">Office Address</h4>
            {contactInfo.address.split(',').map((line, i) => (
              <p key={i} className="text-[#64748b] font-medium text-sm leading-relaxed">{line.trim()}</p>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="flex gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#f7f9fc] text-[#032e92] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032e92] group-hover:text-white transition-colors duration-300 shadow-inner">
            <FontAwesomeIcon icon={faPhone} className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1e293b] mb-1 uppercase tracking-wide">Contact Details</h4>
            <p className="text-[#64748b] font-medium text-sm leading-relaxed flex items-center gap-2 mb-1">
              {contactInfo.phone}
            </p>
            <p className="text-[#64748b] font-medium text-sm leading-relaxed flex items-center gap-2 mb-1">
              <a href={`mailto:${contactInfo.email}`} className="hover:text-[#032e92] transition-colors">{contactInfo.email}</a>
            </p>
            <p className="text-[#64748b] font-medium text-sm leading-relaxed flex items-center gap-2">
              <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#032e92] transition-colors">{contactInfo.website}</a>
            </p>
          </div>
        </div>

        {/* Business Hours */}
        <div className="flex gap-4 group">
          <div className="w-12 h-12 rounded-full bg-[#f7f9fc] text-[#032e92] flex items-center justify-center flex-shrink-0 group-hover:bg-[#032e92] group-hover:text-white transition-colors duration-300 shadow-inner">
            <FontAwesomeIcon icon={faClock} className="text-lg" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1e293b] mb-1 uppercase tracking-wide">Business Hours</h4>
            <p className="text-[#64748b] font-medium text-sm leading-relaxed flex justify-between gap-4">
              <span>Monday – Friday:</span> <span className="text-[#1e293b]">{contactInfo.workingHours.weekdays}</span>
            </p>
            <p className="text-[#64748b] font-medium text-sm leading-relaxed flex justify-between gap-4 mt-1">
              <span>Saturday:</span> <span className="text-[#1e293b]">{contactInfo.workingHours.saturday}</span>
            </p>
            <p className="text-[#64748b] font-medium text-sm leading-relaxed flex justify-between gap-4 mt-1">
              <span>Sunday:</span> <span className="text-[#c10000] font-bold">{contactInfo.workingHours.sunday}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="pt-8 border-t border-[#e8edf7] mt-8">
        <h4 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-wide">Connect With Us</h4>
        <div className="flex gap-3">
          {socialIcons.map((social, i) => (
            <a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`w-10 h-10 rounded-full bg-[#f7f9fc] text-gray-500 flex items-center justify-center border border-[#e8edf7] ${social.color} hover:text-white hover:border-transparent transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md`}
            >
              <FontAwesomeIcon icon={social.icon} />
            </a>
          ))}
        </div>
      </div>

    </motion.div>
  );
}
