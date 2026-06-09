import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Utensils, Waves, Eye, Droplet, Sparkles, Brush, BookOpen } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

// Map icon string names to components
const iconMap = {
  Wifi: Wifi,
  Utensils: Utensils,
  Waves: Waves,
  Eye: Eye,
  Droplet: Droplet,
  Sparkles: Sparkles,
  Brush: Brush,
  BookOpen: BookOpen
};

const Facilities = () => {
  const facilities = hostelConfig.facilities;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="facilities" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4"
          >
            Hostel Facilities
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-1 bg-accent-gold mx-auto rounded-full mb-6"
          />
          <p className="text-slate-500 font-sans text-sm max-w-xl mx-auto">
            Everything you need for a comfortable, secure, and hassle-free hostel life.
          </p>
        </div>

        {/* Facilities Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {facilities.map((facility, idx) => {
            const IconComponent = iconMap[facility.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  borderColor: "rgba(245, 158, 11, 0.4)",
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-7 transition-all duration-300 flex flex-col items-start group relative overflow-hidden"
              >
                {/* Accent Corner Overlay on Hover */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent-gold/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Icon Container */}
                <div className="h-14 w-14 rounded-2xl bg-blue-50 text-primary-900 flex items-center justify-center mb-6 group-hover:bg-primary-900 group-hover:text-white group-hover:rotate-3 transition-all duration-300 shadow-inner">
                  <IconComponent className="h-7 w-7 stroke-[1.8]" />
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-slate-900 font-bold text-lg mb-2.5 font-display tracking-tight leading-tight">
                  {facility.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed font-sans font-light">
                  {facility.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Note Footer */}
        <div className="text-center mt-16 p-6 rounded-2xl bg-slate-50 border border-slate-100 max-w-2xl mx-auto">
          <p className="text-xs text-slate-500 font-sans leading-relaxed">
            <strong>Need additional facilities?</strong> Our management is always listening. We continuously upgrade our hostel features based on resident feedback and requirements.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Facilities;
