import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Utensils, Eye, Waves, Droplet, Bed, MessageCircle, ArrowRight } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

const stats = [
  { id: 1, label: 'High-Speed WiFi', icon: Wifi, desc: 'Unlimited study & work' },
  { id: 2, label: 'Daily Mess Facility', icon: Utensils, desc: '3 home-style meals' },
  { id: 3, label: 'CCTV Security', icon: Eye, desc: '24/7 guard & cameras' },
  { id: 4, label: 'Laundry Service', icon: Waves, desc: 'Hassle-free washing' },
  { id: 5, label: 'RO Drinking Water', icon: Droplet, desc: 'Purified water 24/7' },
  { id: 6, label: 'Triple Sharing Rooms', icon: Bed, desc: 'Comfortable, spacious' },
];

const Hero = () => {
  const whatsappUrl = `https://wa.me/${hostelConfig.whatsappNumber}?text=${encodeURIComponent(hostelConfig.whatsappMessage)}`;

  const handleScrollToRooms = (e) => {
    e.preventDefault();
    const el = document.getElementById('rooms');
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-gradient-to-r from-primary-800 via-primary-600 to-sky-500">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 transform scale-105"
        style={{ backgroundImage: "url('/images/exterior.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-800/30 to-slate-950/80" />

      {/* Decorative Blur Circles */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-white/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10 w-full flex flex-col justify-center">
        {/* Main Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-950/60 border border-primary-700/30 backdrop-blur-md mb-6"
          >
            <span className="h-2 w-2 rounded-full bg-accent-gold animate-pulse"></span>
            <span className="text-xs font-semibold text-slate-200 font-sans uppercase tracking-widest">Premium Student Living</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 font-display leading-tight"
          >
            Comfortable Living for <br className="hidden sm:inline" />
            <span className="gradient-text">Students & Professionals</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed font-sans max-w-2xl mx-auto opacity-95"
          >
            Affordable Triple Sharing Accommodation with Modern Facilities in Bhuvanagiri, Telangana.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-lg shadow-emerald-500/20 active:scale-95 group"
            >
              <MessageCircle className="h-5 w-5 fill-current" />
              Book via WhatsApp
            </a>
            <a
              href="#rooms"
              onClick={handleScrollToRooms}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-300 shadow-md active:scale-95 group"
            >
              View Rooms
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Quick Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.id}
                className="bg-white/10 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-accent-gold/40 hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="h-12 w-12 rounded-xl bg-white/15 text-white flex items-center justify-center mb-4 group-hover:bg-accent-gold group-hover:text-slate-900 transition-all duration-300 shadow-inner">
                  <Icon className="h-6 w-6 stroke-[1.8]" />
                </div>
                <h3 className="text-white font-semibold text-sm mb-1 font-display tracking-tight leading-snug">{stat.label}</h3>
                <p className="text-slate-200 text-xs font-sans font-light opacity-80">{stat.desc}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
