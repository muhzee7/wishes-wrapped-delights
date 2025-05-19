
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp number
  const whatsappNumber = "919876543210"; // Format: country code + number
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hi!%20I'm%20interested%20in%20your%20packaging%20products.`;
  
  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="stroke-current" />
    </a>
  );
};

export default WhatsAppButton;
