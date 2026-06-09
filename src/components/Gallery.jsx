import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

const Gallery = () => {
  const galleryItems = hostelConfig.gallery;
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  // Categories extraction
  const categories = ['All', ...new Set(galleryItems.map(item => item.category))];

  useEffect(() => {
    if (filter === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === filter));
    }
  }, [filter, galleryItems]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      
      const currentIndex = filteredItems.findIndex(item => item.image === selectedImage);
      if (e.key === 'ArrowRight' && currentIndex < filteredItems.length - 1) {
        setSelectedImage(filteredItems[currentIndex + 1].image);
      }
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setSelectedImage(filteredItems[currentIndex - 1].image);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredItems]);

  const handlePrev = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex(item => item.image === selectedImage);
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1].image);
    }
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const currentIndex = filteredItems.findIndex(item => item.image === selectedImage);
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1].image);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4"
          >
            Hostel Tour
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-1 bg-accent-gold mx-auto rounded-full mb-6"
          />
          <p className="text-slate-500 font-sans text-sm max-w-xl mx-auto">
            Take a visual tour around AMR Anandha Nilayam and explore our living, dining, and common area facilities.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-sans uppercase tracking-wider transition-all duration-300 ${
                filter === cat
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry-like Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setSelectedImage(item.image)}
                className="relative aspect-4/3 sm:aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-md cursor-pointer group"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Overlay Card Details */}
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="self-end p-2 bg-white/20 backdrop-blur-md rounded-xl text-white">
                    <ZoomIn className="h-4 w-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent-gold uppercase tracking-widest">{item.category}</span>
                    <h4 className="text-white font-bold font-display text-sm mt-0.5">{item.title}</h4>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-10"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 bg-slate-900 text-slate-300 hover:text-white rounded-full border border-slate-800 transition-colors focus:outline-none"
                aria-label="Close Lightbox"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Prev Button */}
              {filteredItems.findIndex(item => item.image === selectedImage) > 0 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-4 p-3 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full border border-slate-800/50 backdrop-blur-sm transition-colors focus:outline-none"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
              )}

              {/* Next Button */}
              {filteredItems.findIndex(item => item.image === selectedImage) < filteredItems.length - 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-4 p-3 bg-slate-900/50 hover:bg-slate-900 text-white rounded-full border border-slate-800/50 backdrop-blur-sm transition-colors focus:outline-none"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              )}

              {/* Image Frame */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
                className="relative max-w-5xl max-h-[80vh] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                <img 
                  src={selectedImage} 
                  alt="Hostel Facilities Tour Enlarged" 
                  className="w-full h-auto max-h-[80vh] object-contain" 
                />
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-slate-950 to-transparent text-white">
                  <h4 className="text-base font-bold font-display">
                    {galleryItems.find(item => item.image === selectedImage)?.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    {galleryItems.find(item => item.image === selectedImage)?.category}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Gallery;
