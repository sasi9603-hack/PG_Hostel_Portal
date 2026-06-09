import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

const Testimonials = () => {
  const reviews = hostelConfig.testimonials;

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4"
          >
            What Our Residents Say
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-1 bg-accent-gold mx-auto rounded-full mb-6"
          />
          <p className="text-slate-500 font-sans text-sm max-w-xl mx-auto">
            Read real feedback from students and working professionals currently staying at AMR Anandha Nilayam.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              variants={cardVariants}
              whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" }}
              className="bg-slate-50 border border-slate-100 rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300"
            >
              {/* Quote Mark Design */}
              <div className="absolute top-6 right-6 text-slate-200">
                <Quote className="h-10 w-10 fill-current opacity-60" />
              </div>

              <div className="relative z-10 flex-grow">
                {/* Stars Display */}
                <div className="flex gap-1 text-accent-gold mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current stroke-1" />
                  ))}
                </div>

                <p className="text-slate-700 font-sans text-sm italic leading-relaxed mb-8">
                  "{review.comment}"
                </p>
              </div>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/60 mt-auto">
                <div className="h-10 w-10 rounded-full bg-blue-100/50 flex items-center justify-center font-bold text-sm text-primary-900 font-display">
                  {review.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold font-display text-sm leading-tight">{review.author}</h4>
                  <p className="text-slate-400 font-sans text-[11px] mt-0.5">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
