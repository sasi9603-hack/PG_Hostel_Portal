import React from 'react';
import { Home, MapPin, Phone } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

const Footer = () => {
  const { hostelName, address, contactNumber } = hostelConfig;

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
  };

  return (
    <footer className="bg-slate-950 text-slate-400 font-sans border-t border-slate-900 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 bg-gradient-to-tr from-accent-gold to-accent-orange rounded-xl flex items-center justify-center shadow-md">
                <Home className="h-4.5 w-4.5 text-white" />
              </div>
              <h4 className="text-white font-bold font-display text-base tracking-tight">{hostelName}</h4>
            </div>
            <p className="text-xs leading-relaxed text-slate-500 font-light max-w-sm">
              Providing modern, safe, clean, and highly affordable triple-sharing accommodation designed for students and working professionals in Bhuvanagiri, Telangana.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-accent-gold hover:bg-slate-800 transition-colors" aria-label="Facebook Page">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-accent-gold hover:bg-slate-800 transition-colors" aria-label="Instagram Profile">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-accent-gold hover:bg-slate-800 transition-colors" aria-label="YouTube Channel">
                <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h5 className="text-white font-bold font-display text-xs uppercase tracking-widest">Quick Links</h5>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, 'home')} className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#rooms" onClick={(e) => handleLinkClick(e, 'rooms')} className="hover:text-white transition-colors">Rooms & Rates</a>
              </li>
              <li>
                <a href="#facilities" onClick={(e) => handleLinkClick(e, 'facilities')} className="hover:text-white transition-colors">Facilities</a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleLinkClick(e, 'gallery')} className="hover:text-white transition-colors">Gallery</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h5 className="text-white font-bold font-display text-xs uppercase tracking-widest">Get In Touch</h5>
            <ul className="space-y-3.5 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-accent-gold shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-500">
                  {address.line1}, {address.city},<br />
                  {address.state} - {address.pincode}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-accent-gold shrink-0" />
                <span className="text-slate-300 font-semibold font-sans">
                  +91 {contactNumber}
                </span>
              </li>
            </ul>
          </div>

          {/* Location Focus */}
          <div className="space-y-4">
            <h5 className="text-white font-bold font-display text-xs uppercase tracking-widest">Our Location</h5>
            <p className="text-xs leading-relaxed text-slate-500 font-light">
              Situated in the residential area of Vidyanagar, Bhuvanagiri. Just minutes away from local coaching centers, colleges, and transit points.
            </p>
            <div className="p-0.5 rounded-lg border border-slate-900 bg-slate-950 inline-block">
              <a 
                href="https://www.google.com/maps/place/1-3-141,+Vidyanagar,+Bhuvanagiri,+Telangana+508116" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-bold text-accent-gold hover:text-white px-3 py-1.5 block hover:bg-slate-900 rounded-md transition-colors font-sans"
              >
                Open in Google Maps &rarr;
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-slate-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-xs text-slate-600 font-light font-sans">
            &copy; {new Date().getFullYear()} {hostelName}. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-700 font-sans">
            Designed with &hearts; for comfortable living.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
