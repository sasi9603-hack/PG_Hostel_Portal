import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Droplet, Waves, Utensils, Eye, CheckCircle2, MessageCircle } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

const iconMap = {
  Wifi: Wifi,
  Droplet: Droplet,
  Waves: Waves,
  Utensils: Utensils,
  Eye: Eye
};

const Rooms = () => {
  const { title, subtitle, description, image, features, amenities, pricing } = hostelConfig.rooms;
  const whatsappUrl = `https://wa.me/${hostelConfig.whatsappNumber}?text=${encodeURIComponent(hostelConfig.whatsappMessage)}`;

  return (
    <section id="rooms" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4"
          >
            Our Accommodation
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-1 bg-accent-gold mx-auto rounded-full mb-6"
          />
          <p className="text-slate-500 font-sans text-sm max-w-xl mx-auto">
            Hygienic rooms with adequate personal spacing, tailored specifically for professionals and students.
          </p>
        </div>

        {/* Room Info Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Room Showcases */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col justify-between"
          >
            <div className="relative h-[250px] sm:h-[350px] overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover transform hover:scale-103 transition-transform duration-500" 
              />
              <div className="absolute top-4 left-4 px-3.5 py-1.5 bg-slate-900/80 backdrop-blur-md rounded-full text-xs font-semibold text-accent-gold font-sans uppercase tracking-widest">
                Popular Choice
              </div>
            </div>

            <div className="p-6 sm:p-8 flex-grow">
              <span className="text-accent-gold text-xs font-semibold uppercase tracking-wider font-sans">{subtitle}</span>
              <h3 className="text-2xl font-bold text-slate-900 font-display mt-1 mb-4">{title}</h3>
              <p className="text-slate-600 font-sans text-sm leading-relaxed mb-6">
                {description}
              </p>

              {/* Room Features Checklist */}
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="text-slate-700 text-sm font-sans">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Room Amenities Icons */}
              <div>
                <h4 className="text-slate-950 font-bold text-xs uppercase tracking-widest font-display mb-4">Included Room Amenities</h4>
                <div className="flex flex-wrap gap-4">
                  {amenities.map((amenity, idx) => {
                    const Icon = iconMap[amenity.icon];
                    return (
                      <div 
                        key={idx} 
                        className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                        title={amenity.label}
                      >
                        {Icon && <Icon className="h-4.5 w-4.5 text-primary-900" />}
                        <span className="text-slate-600 text-xs font-sans font-medium">{amenity.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pricing Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 bg-gradient-to-br from-primary-800 to-primary-950 text-white rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col justify-between relative overflow-hidden border border-primary-700/30"
          >
            {/* Design Element */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/10 rounded-full blur-2xl -mr-16 -mt-16" />
            
            <div className="relative z-10">
              <span className="px-3 py-1 bg-accent-gold/15 text-accent-gold border border-accent-gold/25 rounded-full text-xs font-bold font-sans uppercase tracking-widest">
                Best Value
              </span>
              <h3 className="text-2xl font-bold font-display mt-4 text-white">{pricing.type}</h3>
              <p className="text-slate-300 font-sans text-xs mt-1">Enjoy a premium stay with standard meals and facilities.</p>
              
              <div className="my-8 py-6 border-y border-primary-800/40">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold font-display text-white">{pricing.monthlyRent}</span>
                  <span className="text-slate-300 text-sm font-sans">/ month</span>
                </div>
                {pricing.securityDeposit && (
                  <div className="flex items-center gap-1.5 mt-2 text-xs text-slate-300 font-sans">
                    <span>Security Deposit:</span>
                    <span className="font-semibold text-white">{pricing.securityDeposit}</span>
                  </div>
                )}
              </div>

              <div>
                <h4 className="text-slate-300 font-bold text-xs uppercase tracking-widest font-display mb-4">What's Included</h4>
                <ul className="space-y-3">
                  {pricing.inclusions.map((inc, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300 font-sans">
                      <CheckCircle2 className="h-4.5 w-4.5 text-accent-gold shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative z-10 mt-8 pt-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-accent-gold hover:bg-accent-amber text-slate-900 hover:text-white py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-accent-gold/15 active:scale-95 group"
              >
                <MessageCircle className="h-5 w-5 fill-current" />
                Book via WhatsApp
              </a>
              <p className="text-[10px] text-slate-500 font-sans text-center mt-3">
                *Prices are subject to availability. Book early to secure your spot.
              </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Rooms;
