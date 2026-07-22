import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter, faWhatsapp, faTelegram } from '@fortawesome/free-brands-svg-icons';
import {
  LinkedinShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share';

export default function ShareButtons({ title }) {
  const currentUrl = window.location.href;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex items-center gap-4 py-8 border-t border-b border-[#e8edf7] my-8">
      <span className="text-sm font-bold text-[#1e293b] uppercase tracking-wide">Share:</span>
      
      <LinkedinShareButton url={currentUrl} title={title}>
        <div className="w-10 h-10 rounded-full bg-[#f7f9fc] text-[#0a66c2] flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
          <FontAwesomeIcon icon={faLinkedin} />
        </div>
      </LinkedinShareButton>

      <TwitterShareButton url={currentUrl} title={title}>
        <div className="w-10 h-10 rounded-full bg-[#f7f9fc] text-[#1da1f2] flex items-center justify-center hover:bg-[#1da1f2] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </TwitterShareButton>

      <FacebookShareButton url={currentUrl} quote={title}>
        <div className="w-10 h-10 rounded-full bg-[#f7f9fc] text-[#1877f2] flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </FacebookShareButton>

      <WhatsappShareButton url={currentUrl} title={title}>
        <div className="w-10 h-10 rounded-full bg-[#f7f9fc] text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </WhatsappShareButton>

      <TelegramShareButton url={currentUrl} title={title}>
        <div className="w-10 h-10 rounded-full bg-[#f7f9fc] text-[#0088cc] flex items-center justify-center hover:bg-[#0088cc] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
          <FontAwesomeIcon icon={faTelegram} />
        </div>
      </TelegramShareButton>

      <button onClick={handleCopyLink} className="w-10 h-10 rounded-full bg-[#f7f9fc] text-[#64748b] flex items-center justify-center hover:bg-[#1e293b] hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
        <FontAwesomeIcon icon={faCopy} />
      </button>
    </div>
  );
}
