import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Tag, Utensils, Wifi, Sparkles, HeartHandshake, MapPin, Lock } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

// Map icon strings to Lucide components
const iconMap = {
  Shield: ShieldCheck,
  IndianRupee: Tag, // Using Tag to show affordable pricing
  Coffee: Utensils,
  Wifi: Wifi,
  Sparkles: Sparkles,
  HeartHandshake: HeartHandshake,
  MapPin: MapPin,
  Lock: Lock
};

const About = () => {
  const { title, description1, description2, whyChooseUs } = hostelConfig.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4"
          >
            {title}
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-1 bg-accent-gold mx-auto rounded-full mb-6"
          />
        </div>

        {/* Info Paragraphs */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700 leading-relaxed font-sans font-light">
              {description1}
            </p>
            <p className="text-base text-slate-600 leading-relaxed font-sans">
              {description2}
            </p>
            <div className="flex gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 items-start">
              <div className="p-3 bg-blue-100 rounded-xl text-primary-900 shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 font-display text-sm">Perfect Location</h4>
                <p className="text-xs text-slate-500 font-sans mt-0.5">Located in Vidyanagar, Bhuvanagiri, close to educational institutions and markets.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img 
              src="/images/common.png" 
              alt="AMR Anandha Nilayam Common Area" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/10 to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-accent-gold font-display font-semibold text-sm tracking-wider uppercase">Safe & Comfortable</p>
              <h3 className="text-2xl font-bold font-display mt-1">A Home Away From Home</h3>
            </div>
          </motion.div>
        </div>

        {/* Why Choose Us Cards */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-900 font-display">Why Choose AMR Anandha Nilayam?</h3>
            <p className="text-slate-500 font-sans text-sm mt-2">We offer amenities that guarantee a productive, peaceful, and pleasant stay.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyChooseUs.map((feature) => {
              const IconComponent = iconMap[feature.icon] || ShieldCheck;
              return (
                <motion.div
                  key={feature.id}
                  variants={cardVariants}
                  whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 transition-all duration-300 group"
                >
                  <div className="h-10 w-10 bg-blue-50 text-primary-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary-900 group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-5 w-5 stroke-[2]" />
                  </div>
                  <h4 className="text-slate-900 font-bold text-base mb-1.5 font-display tracking-tight leading-tight">{feature.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-sans">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default About;
