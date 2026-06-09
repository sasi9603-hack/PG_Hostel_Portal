import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, MessageSquare, Clock, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { hostelConfig } from '../config/hostelConfig';

const Contact = () => {
  const { address, contactNumber, whatsappNumber, whatsappMessage, mapEmbedUrl } = hostelConfig;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    occupation: 'Student',
    joiningDate: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending enquiry
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      
      // Auto-clear success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);

      // Reset form
      setFormData({
        name: '',
        mobile: '',
        occupation: 'Student',
        joiningDate: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-16 h-1 bg-accent-gold mx-auto rounded-full mb-6"
          />
          <p className="text-slate-500 font-sans text-sm max-w-xl mx-auto">
            Have questions or want to schedule a visit? Drop us a message or contact us directly on WhatsApp.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Details & Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            {/* Quick Contact Info cards */}
            <div className="space-y-4">
              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-blue-100/60 text-primary-900 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display text-sm">Hostel Address</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5 leading-relaxed">
                    {address.fullAddress}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-blue-100/60 text-primary-900 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display text-sm">Phone Number</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5 font-semibold">
                    +91 {contactNumber}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="h-10 w-10 rounded-xl bg-blue-100/60 text-primary-900 flex items-center justify-center shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 font-display text-sm">Visiting Hours</h4>
                  <p className="text-xs text-slate-500 font-sans mt-0.5">
                    Daily: 9:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Box */}
            <div className="relative h-[250px] lg:h-full min-h-[250px] rounded-3xl overflow-hidden shadow-md border border-slate-100">
              <iframe
                title="AMR Anandha Nilayam Hostel Location Map"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>
          </motion.div>

          {/* Interactive Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-xl font-bold text-slate-900 font-display mb-6">Send Admission Enquiry</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold font-sans text-slate-600 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-sans placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="mobile" className="block text-xs font-bold font-sans text-slate-600 uppercase tracking-wider mb-2">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter 10-digit number"
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-sans placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="occupation" className="block text-xs font-bold font-sans text-slate-600 uppercase tracking-wider mb-2">Occupation</label>
                  <select
                    id="occupation"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  >
                    <option value="Student">Student</option>
                    <option value="Professional">Working Professional</option>
                    <option value="Job Seeker">Job Seeker</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="joiningDate" className="block text-xs font-bold font-sans text-slate-600 uppercase tracking-wider mb-2">Preferred Joining Date</label>
                  <input
                    type="date"
                    id="joiningDate"
                    name="joiningDate"
                    value={formData.joiningDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-sans focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold font-sans text-slate-600 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  placeholder="Tell us about your requirements (e.g. food preferences, stay duration)..."
                  className="w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-slate-800 text-sm font-sans placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                />
              </div>

              {/* Status alerts */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center gap-3 text-emerald-800 text-xs sm:text-sm font-sans font-medium"
                  >
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    <div>
                      Enquiry sent successfully! Our management will call you shortly.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-900 disabled:bg-slate-700 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors shadow-md active:scale-98 shrink-0 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4.5 w-4.5" />
                      Send Enquiry
                    </>
                  )}
                </button>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-colors shadow-md active:scale-98"
                >
                  <MessageSquare className="h-5 w-5 fill-current" />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
