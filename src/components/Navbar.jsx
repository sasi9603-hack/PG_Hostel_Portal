import React, { useState, useEffect } from 'react';
import { Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { hostelConfig } from '../config/hostelConfig';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Rooms', href: 'rooms' },
  { name: 'Facilities', href: 'facilities' },
  { name: 'Gallery', href: 'gallery' },
  { name: 'Contact', href: 'contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Background change scroll trigger
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current section in viewport
      const scrollPosition = window.scrollY + 120; // offsets navbar height
      for (const link of navLinks) {
        const el = document.getElementById(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    const el = document.getElementById(sectionId);
    if (el) {
      const offset = 80; // height of navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 shadow-md border-b border-slate-100 backdrop-blur-md py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e) => handleLinkClick(e, 'home')}>
          <div className="h-10 w-10 bg-gradient-to-tr from-accent-gold to-accent-orange rounded-xl flex items-center justify-center shadow-md shadow-accent-orange/20">
            <Home className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className={`font-bold text-lg leading-tight font-display tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-primary-900' : 'text-white'
            }`}>
              AMR <span className="text-accent-gold font-extrabold">Anandha Nilayam</span>
            </h1>
            <p className={`text-[10px] font-sans tracking-widest uppercase transition-colors duration-300 ${
              scrolled ? 'text-slate-500' : 'text-slate-300'
            }`}>Boys Hostel</p>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`relative font-medium text-sm font-sans tracking-wide transition-colors duration-300 py-2 ${
                activeSection === link.href 
                  ? scrolled ? 'text-primary-600 font-bold' : 'text-accent-gold font-bold'
                  : scrolled ? 'text-slate-600 hover:text-primary-600' : 'text-slate-200 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.div
                  layoutId="activeIndicator"
                  className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                    scrolled ? 'bg-primary-600' : 'bg-accent-gold'
                  }`}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
          <a
            href={`https://wa.me/${hostelConfig.whatsappNumber}?text=${encodeURIComponent(hostelConfig.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-600 text-white px-5 py-2 rounded-lg font-semibold text-sm hover:bg-primary-700 transition-all duration-300 shadow-md shadow-primary-600/15 active:scale-95"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`focus:outline-none p-1.5 rounded-lg transition-colors duration-300 ${
              scrolled 
                ? 'text-slate-700 bg-slate-100 hover:bg-slate-200' 
                : 'text-slate-200 bg-slate-800/50 hover:bg-slate-700/50'
            }`}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden border-b transition-colors duration-300 ${
              scrolled ? 'bg-white border-slate-100' : 'bg-slate-900 border-slate-800'
            }`}
          >
            <div className="px-4 pt-3 pb-6 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium font-sans transition-colors ${
                    activeSection === link.href
                      ? scrolled
                        ? 'bg-primary-50 text-primary-600 font-bold'
                        : 'bg-slate-800 text-accent-gold font-bold'
                      : scrolled
                        ? 'text-slate-600 hover:bg-slate-50 hover:text-primary-600'
                        : 'text-slate-300 hover:bg-slate-800/50 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href={`https://wa.me/${hostelConfig.whatsappNumber}?text=${encodeURIComponent(hostelConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full block text-center bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 shadow-md"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
