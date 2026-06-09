import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { hostelConfig } from '../config/hostelConfig';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${hostelConfig.whatsappNumber}?text=${encodeURIComponent(hostelConfig.whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-colors duration-300"
      initial={{ scale: 0, opacity: 0, y: 50 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Enquire on WhatsApp"
    >
      {/* Ripple Animation */}
      <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping -z-10"></span>
      
      <MessageCircle className="h-7 w-7 fill-emerald-500 text-white stroke-[2.5]" />
    </motion.a>
  );
};

export default WhatsAppButton;
